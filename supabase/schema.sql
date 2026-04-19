-- ============================================================
-- CyberGuard — Supabase Schema
-- Run this in your Supabase SQL Editor
-- ============================================================

-- ─── PROFILES ────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.profiles (
  id                    UUID        REFERENCES auth.users(id) ON DELETE CASCADE PRIMARY KEY,
  username              TEXT        UNIQUE NOT NULL,
  age_group             TEXT        NOT NULL CHECK (age_group IN ('kids', 'teens', 'adults', 'seniors', 'expert')),
  avatar                TEXT        NOT NULL DEFAULT '🛡️',
  level                 TEXT        NOT NULL DEFAULT 'beginner' CHECK (level IN ('beginner', 'intermediate', 'hard', 'expert')),
  hobby                 TEXT        NOT NULL DEFAULT 'general',
  intro_completed       BOOLEAN     NOT NULL DEFAULT FALSE,
  foundational_completed BOOLEAN    NOT NULL DEFAULT FALSE,
  total_score           INTEGER     NOT NULL DEFAULT 0,
  missions_completed    INTEGER     NOT NULL DEFAULT 0,
  badges                TEXT[]      NOT NULL DEFAULT '{}',
  created_at            TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at            TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Migration: add new columns to existing profiles table
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS level TEXT NOT NULL DEFAULT 'beginner';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS hobby TEXT NOT NULL DEFAULT 'general';
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS intro_completed BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS foundational_completed BOOLEAN NOT NULL DEFAULT FALSE;

-- Migration v1.6: add 'expert' to age_group constraint
-- Run in Supabase SQL Editor if upgrading from v1.5 or earlier:
--   ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_age_group_check;
--   ALTER TABLE public.profiles ADD CONSTRAINT profiles_age_group_check
--     CHECK (age_group IN ('kids','teens','adults','seniors','expert'));

-- ─── GAME SESSIONS ───────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.game_sessions (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id       UUID        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  age_group     TEXT        NOT NULL,
  mission_id    TEXT        NOT NULL,
  mission_type  TEXT        NOT NULL CHECK (mission_type IN ('quiz', 'spot-threat', 'decision-tree')),
  score         INTEGER     NOT NULL DEFAULT 0,
  max_score     INTEGER     NOT NULL,
  percentage    NUMERIC(5,2) GENERATED ALWAYS AS (ROUND((score::NUMERIC / NULLIF(max_score, 0)) * 100, 2)) STORED,
  completed     BOOLEAN     NOT NULL DEFAULT FALSE,
  time_taken    INTEGER,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── LEVEL ATTEMPTS ──────────────────────────────────────────
CREATE TABLE IF NOT EXISTS public.level_attempts (
  id            UUID        PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id    UUID        REFERENCES public.game_sessions(id) ON DELETE CASCADE NOT NULL,
  user_id       UUID        REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  question_id   TEXT        NOT NULL,
  correct       BOOLEAN     NOT NULL,
  points_earned INTEGER     NOT NULL DEFAULT 0,
  created_at    TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ─── LEADERBOARD VIEW ────────────────────────────────────────
CREATE OR REPLACE VIEW public.leaderboard AS
SELECT
  p.id,
  p.username,
  p.age_group,
  p.avatar,
  p.total_score,
  p.missions_completed,
  p.badges,
  RANK() OVER (PARTITION BY p.age_group ORDER BY p.total_score DESC) AS rank_in_group,
  RANK() OVER (ORDER BY p.total_score DESC) AS rank_global
FROM public.profiles p
ORDER BY p.total_score DESC;

-- ─── ROW LEVEL SECURITY ──────────────────────────────────────
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.game_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.level_attempts ENABLE ROW LEVEL SECURITY;

-- Profiles: users manage their own, all can read
DROP POLICY IF EXISTS "profiles_read_all"   ON public.profiles;
CREATE POLICY "profiles_read_all"   ON public.profiles FOR SELECT USING (true);
DROP POLICY IF EXISTS "profiles_insert_own" ON public.profiles;
CREATE POLICY "profiles_insert_own" ON public.profiles FOR INSERT WITH CHECK (auth.uid() = id);
DROP POLICY IF EXISTS "profiles_update_own" ON public.profiles;
CREATE POLICY "profiles_update_own" ON public.profiles FOR UPDATE USING (auth.uid() = id);

-- Game sessions: users manage their own
DROP POLICY IF EXISTS "sessions_read_own"   ON public.game_sessions;
CREATE POLICY "sessions_read_own"   ON public.game_sessions FOR SELECT USING (auth.uid() = user_id);
DROP POLICY IF EXISTS "sessions_insert_own" ON public.game_sessions;
CREATE POLICY "sessions_insert_own" ON public.game_sessions FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "sessions_update_own" ON public.game_sessions;
CREATE POLICY "sessions_update_own" ON public.game_sessions FOR UPDATE USING (auth.uid() = user_id);

-- Level attempts: users manage their own
DROP POLICY IF EXISTS "attempts_insert_own" ON public.level_attempts;
CREATE POLICY "attempts_insert_own" ON public.level_attempts FOR INSERT WITH CHECK (auth.uid() = user_id);
DROP POLICY IF EXISTS "attempts_read_own"   ON public.level_attempts;
CREATE POLICY "attempts_read_own"   ON public.level_attempts FOR SELECT USING (auth.uid() = user_id);

-- ─── AUTO-UPDATE PROFILE SCORE FUNCTION ──────────────────────
CREATE OR REPLACE FUNCTION public.update_profile_on_session_complete()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  IF NEW.completed = TRUE AND OLD.completed = FALSE THEN
    UPDATE public.profiles
    SET
      total_score        = total_score + NEW.score,
      missions_completed = missions_completed + 1,
      updated_at         = NOW()
    WHERE id = NEW.user_id;
  END IF;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_session_complete
  AFTER UPDATE ON public.game_sessions
  FOR EACH ROW EXECUTE FUNCTION public.update_profile_on_session_complete();

-- ─── AUTO-CREATE PROFILE ON SIGNUP ───────────────────────────
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER LANGUAGE plpgsql SECURITY DEFINER AS $$
BEGIN
  -- Profile is created via frontend after age group selection
  RETURN NEW;
END;
$$;

-- ─── ADMIN SUPPORT ────────────────────────────────────────────
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS is_admin BOOLEAN NOT NULL DEFAULT FALSE;
ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS email TEXT;

-- Helper function — avoids RLS recursion
CREATE OR REPLACE FUNCTION public.is_admin()
RETURNS BOOLEAN LANGUAGE SQL SECURITY DEFINER STABLE AS $$
  SELECT COALESCE(
    (SELECT is_admin FROM public.profiles WHERE id = auth.uid()),
    FALSE
  );
$$;

-- Allow admins to read all game sessions
DROP POLICY IF EXISTS "sessions_read_admin" ON public.game_sessions;
CREATE POLICY "sessions_read_admin"
  ON public.game_sessions FOR SELECT
  USING (auth.uid() = user_id OR public.is_admin());

-- Allow admins to read all level attempts
DROP POLICY IF EXISTS "attempts_read_admin" ON public.level_attempts;
CREATE POLICY "attempts_read_admin"
  ON public.level_attempts FOR SELECT
  USING (auth.uid() = user_id OR public.is_admin());

-- ─── KEEPALIVE LOG ───────────────────────────────────────────
-- Dedicated table for the GitHub Actions keepalive workflow so the anon
-- key can register WRITE activity (Supabase's pause logic can be more
-- responsive to writes than read-only SELECTs). The workflow inserts a
-- row every 3 days; trim old rows on insert to keep the table tiny.
CREATE TABLE IF NOT EXISTS public.keepalive_log (
  id          BIGSERIAL PRIMARY KEY,
  source      TEXT        NOT NULL DEFAULT 'github-actions',
  pinged_at   TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Anon (public) can insert keepalive rows but cannot read other users' data
ALTER TABLE public.keepalive_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "keepalive_insert_anyone" ON public.keepalive_log;
CREATE POLICY "keepalive_insert_anyone"
  ON public.keepalive_log FOR INSERT
  TO anon, authenticated
  WITH CHECK (TRUE);

DROP POLICY IF EXISTS "keepalive_select_admin" ON public.keepalive_log;
CREATE POLICY "keepalive_select_admin"
  ON public.keepalive_log FOR SELECT
  USING (public.is_admin());

-- Auto-trim: keep only last 30 rows. Trigger runs on every INSERT.
CREATE OR REPLACE FUNCTION public.trim_keepalive_log()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
BEGIN
  DELETE FROM public.keepalive_log
  WHERE id IN (
    SELECT id FROM public.keepalive_log
    ORDER BY pinged_at DESC
    OFFSET 30
  );
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS trim_keepalive_log_trigger ON public.keepalive_log;
CREATE TRIGGER trim_keepalive_log_trigger
  AFTER INSERT ON public.keepalive_log
  FOR EACH STATEMENT
  EXECUTE FUNCTION public.trim_keepalive_log();
