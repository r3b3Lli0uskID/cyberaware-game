# 🛡️ CyberGuard — Stay Safe Online

An interactive, standalone cybersecurity awareness and education game for **all ages** — from kids (7+) to seniors (65+).

## 🎮 Features

- **4 Age Group Modes** with tailored themes and scenarios
- **50+ Missions** across 4 age groups + 4 mandatory CS101 foundational courses
- **Singapore-specific content** — PayNow, SingPass, CPF, DBS/OCBC/UOB, SPF, ScamShield
- **Level system** — Beginner / Intermediate / Hard / Expert with XP multipliers
- **Hobby matching** — missions personalised to your interests with ✨ highlights
- **Cross-group play** — attempt any age group's missions; harder = bonus XP 🔥
- **Intro storyline** — 5-slide narrative cutscene for new users
- **Background music** — looping ambient track with toggle (autoplay on first interaction)
- **Instant feedback** with educational explanations after every answer
- **Score tracking**, leaderboard, and 8-badge achievement system
- **Supabase backend** — auth, profiles, sessions, leaderboard
- **Built by [Ivan Than](https://ivanthan.uk)**

## 🧒 Kids (7–12)
Password safety, personal info protection, safe websites, cyberbullying, online strangers

## 🧑‍💻 Teens (13–17)
Social media privacy, phishing DMs, public WiFi, gaming account security, digital footprint

## 👩‍💼 Adults (18–45)
CEO email fraud (BEC), vishing, malware attachments, public WiFi banking, data breaches, social engineering

## 👴 Seniors (46–65+)
Grandchild scam, bank impersonation, prize scams, fake tech support, romance scams, fake invoices

## 🚀 Setup

```bash
# 1. Clone
git clone https://github.com/r3b3Lli0uskID/cyberaware-game.git
cd cyberaware-game

# 2. Add your Supabase credentials
cp js/config.example.js js/config.js
# Edit js/config.js — fill in SUPABASE_URL and SUPABASE_ANON_KEY

# 3. Run the Supabase schema + permissions
# Paste supabase/schema.sql into your Supabase SQL Editor and run it.
# The schema includes tables, RLS policies, triggers, and views.
# Then run these GRANTs (required — without them all DB writes will get 42501):
#   GRANT SELECT ON public.profiles TO anon;
#   GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
#   GRANT SELECT, INSERT, UPDATE ON public.game_sessions TO authenticated;
#   GRANT SELECT, INSERT ON public.level_attempts TO authenticated;
#   GRANT SELECT ON public.leaderboard TO anon, authenticated;
# Then verify RLS policies exist (run in SQL Editor):
#   SELECT policyname, cmd FROM pg_policies WHERE tablename = 'profiles';
# You should see: profiles_read_all (SELECT), profiles_insert_own (INSERT), profiles_update_own (UPDATE)

# 4. Run the v1.4 migration (adds level, hobby, intro_completed, foundational_completed)
# Run these in Supabase SQL Editor if upgrading from v1.3 or earlier:
#   ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS level TEXT NOT NULL DEFAULT 'beginner';
#   ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS hobby TEXT NOT NULL DEFAULT 'general';
#   ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS intro_completed BOOLEAN NOT NULL DEFAULT FALSE;
#   ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS foundational_completed BOOLEAN NOT NULL DEFAULT FALSE;
# Then reload the schema cache:
#   NOTIFY pgrst, 'reload schema';

# 5. Supabase Auth settings
# Authentication → Providers → Email → disable "Confirm email" (recommended for games)

# 6. Add background music (optional)
# Place your MP3 at audio/bgm.mp3 — loops automatically on first user interaction

# 7. Serve locally
npx serve .
# → http://localhost:3000
```

## 🆘 Singapore Resources

- **Anti-Scam Hotline:** 1800-722-6688
- **SPF Police Hotline:** 1800-255-0000
- **ScamShield App:** Available on iOS & Android
- **ScamAlert.sg:** https://www.scamalert.sg

## 📄 License

MIT — Free to use, adapt, and share for education purposes.

---

## 🗂️ Changelog

### v1.5 — 2026-03-19
- **Cloudflare Pages deployment** — `_headers` file with Content-Security-Policy; `config.js` committed to repo so credentials reach the CDN
- **BGM toggle fixed** — `.sound-toggle-btn` was inheriting `pointer-events:none` from `.theme-controls` parent, blocking all clicks; fixed with explicit `pointer-events:all`; simplified stop/play logic removes race condition (no more "stuck" toggle)
- **Font loading** — replaced Google Fonts `@import` (blocked by Cloudflare MIME/nosniff) with Bunny Fonts `<link>` + `crossorigin` preconnect; no more `NS_ERROR_CORRUPTED_CONTENT` in Firefox
- **CSS warnings** — removed `-webkit-text-size-adjust` (Firefox unsupported); wrapped webkit scrollbar rules in `@supports selector(::-webkit-scrollbar)` so Firefox skips cleanly
- **scenarios.js sparse hole** — `// Add to teens array\r,` had a bare `,` after the `\r` carriage return that ended the `//` comment, creating a sparse hole at `MISSIONS.seniors[5]` and crashing `renderDashboard`; removed rogue comma
- **Duplicate mission ID** — `seniors_new_spot_1` appeared twice; second renamed to `seniors_new_spot_2`
- **Permission denied (42501)** — root cause: `config.js` gitignored so Cloudflare Pages served placeholder credentials; Supabase client pointed to non-existent host; fixed by committing real `config.js`; also added GRANTs + RLS policies + schema cache reload to setup docs
- **Stale session** — `loadProfile()` now distinguishes 42501 permission error from missing profile; auto signs out on stale session instead of looping to profile setup
- **Login errors** — `signIn()` shows real Supabase error message; `email_not_confirmed` handled explicitly
- **Landing page** — updated hero stats (50+ missions, centered row); age-group cards expanded with all new mission topics; new "Platform Features" 6-card section; hero CTA stacked vertically and centered; "Learn More" moved below "Start Training"
- **Profile setup** — "Start My Training" button centered; Sign Out button centred below it
- **Footer** — CyberGuard title and tagline split onto separate centered lines
- **Mobile nav** — Sign Out button visible with 🚪 emoji; all nav buttons use `nav-icon`/`nav-label` spans instead of fragile `::first-letter` CSS hack

### v1.4 — 2026-03-19
- **Account registration fix** — skips OTP screen when Supabase email confirmation is disabled; stale sessions auto-cleared on refresh
- **Level system** — Beginner / Intermediate / Hard / Expert selected at registration, affects XP multiplier (×1.0 → ×2.0)
- **Hobby system** — 8 hobby/interest options at registration; missions matching your hobby highlighted with ✨
- **XP formula** — effective XP = baseXP × age-group multiplier × level multiplier (fully combined)
- **Intro storyline** — 5-slide mandatory narrative cutscene shown to all new users after profile setup
- **Foundational course (CS101)** — mandatory first mission per age group covering cybersecurity basics; marked with 📚 badge
- **59 missions** — 30 new missions (kids ×7, teens ×8, adults ×8, seniors ×7) + 4 CS101 foundational; `Advanced` renamed to `Hard`; Expert tier added
- **Background music** — HTML5 Audio with looping MP3, autoplay on first interaction, toggle button with localStorage state
- **Footer** — "Built by Ivan Than" link to [ivanthan.uk](https://ivanthan.uk)
- **DB schema** — `profiles` table extended: `level`, `hobby`, `intro_completed`, `foundational_completed` columns
- **Dashboard** — shows age group + level together; foundational mission pinned to top with completion status
- **Bug fixes** — login error shows real Supabase message; intro/foundation DB updates non-blocking; mission injection corrected (all new missions now inside their arrays)

### v1.3 — 2026-03-19
- **Cross-group missions** — all users can browse and play missions from any age group
- **XP multiplier system** — harder group = ×1.5 / ×2.0 bonus XP; easier group = ×0.75 / ×0.5 reduced XP
- **Difficulty order**: Kids (easiest) < Teens = Seniors < Adults (hardest)
- **Live XP preview** — mission cards show effective XP with 🔥 bonus or 📉 penalty indicator
- **Leaderboard impact** — cross-group scores reflected in total_score rankings
- **Theme persistence fix** — selected visual theme now correctly restored on every login
- **Password change fix** — loading spinner no longer gets stuck after changing password

### v1.2 — 2026-03-19
- **Password reset fix** — email reset link now correctly goes to reset screen (not dashboard)
- **Change Password** in Profile — synced with Supabase auth
- **Expanded quiz questions** — Beginner: 5 questions, Intermediate: 7, Advanced: 10 (up from 3 each)
- **Background music** — ambient drone with Web Audio API, togglable (replaced in v1.4 with HTML5 Audio + MP3)
- **Admin all-group access** — admin users can browse and play missions from any age group
- **Avatar picker in Profile** — 40+ emoji avatars in 4 categories, changeable and synced to database

### v1.1 — 2026-03-19
- 4 new missions: Linux Terminal Survival, Hacked GitHub Repo, Secure Code Review, Credential Leak (Teens + Adults)
- Sound effects system (Web Audio API — correct/wrong/badge/complete/click)
- GSAP-powered screen transitions (smooth fade + slide)
- Visual themes renamed and redesigned: Teen (purple-cyan neon), Kiddy (warm coral/yellow, child-friendly), Adult (clean professional blue)
- Age-group auto-theme: Kids auto-applies Kiddy, Teens → Teen, Adults → Adult on login
- Animated logo shield with CSS glow pulse
- CSS particle background on hero landing screen
- XP burst animations on correct answers
- Confetti launch on mission complete
- Wrong answer shake + correct answer pop animations
- Sound toggle button in theme controls
- Seniors base font increased to 22px
- Decision tree engine supports both `nodes`/`tree` and `text`/`story` field formats

### v1.0 — 2026-03-19
- 20 missions across 4 age groups (5 per group)
- 3 mission types: Quiz, Spot the Threat, Decision Tree
- Supabase Auth (email + OTP verification, username login)
- Admin panel with user management and session analytics
- 4 visual themes: Synthwave, Terminal, Ocean, Corporate
- Light / Dark / System mode toggle
- Mobile + tablet responsive (iOS, Android, iPad)
- 8 badge system with group and cross-group achievements
- Singapore-specific scenarios: PayNow, SingPass, SPF, ScamShield, DBS, NTUC
