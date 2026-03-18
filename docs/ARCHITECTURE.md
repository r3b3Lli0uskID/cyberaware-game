# CyberGuard — Architecture

## Stack

| Layer | Technology | Purpose |
|---|---|---|
| Frontend | Vanilla HTML5 / CSS3 / JavaScript (ES6+) | Zero build step, GitHub Pages compatible |
| Auth | Supabase Auth | Email/password registration, session management |
| Database | Supabase (PostgreSQL) | Profiles, game sessions, leaderboard |
| Hosting | GitHub Pages | Free, custom domain ready |
| Fonts | Google Fonts | Nunito · Inter · Rajdhani |

## File Structure

```
cyberaware-game/
├── index.html              Single-page app shell (all screens)
├── css/
│   └── app.css             Complete stylesheet (themes, components, animations)
├── js/
│   ├── config.js           Supabase client init + constants (age groups, badges)
│   ├── scenarios.js        All mission content (12 missions × 3 types)
│   └── app.js              App logic: auth, game engine, leaderboard, badges
├── supabase/
│   └── schema.sql          Full DB schema with RLS policies and triggers
└── docs/
    ├── ARCHITECTURE.md     This file
    └── GAMEPLAY.md         Gameplay mechanics reference
```

## Database Schema

```
profiles          — User profile (username, age_group, avatar, score, badges)
game_sessions     — Each mission play-through (score, time, completed flag)
level_attempts    — Individual question/choice answers for analytics
leaderboard       — VIEW: ranked scores per age group (auto-generated)
```

### Key Design Decisions

- **RLS (Row Level Security)**: Users can only read/write their own sessions. Leaderboard is read-only for all.
- **Score trigger**: A PostgreSQL trigger on `game_sessions` automatically updates `profiles.total_score` when a session is marked `completed = TRUE`, preventing score manipulation from the frontend.
- **Leaderboard VIEW**: Computed server-side using `RANK() OVER (PARTITION BY age_group)` — no client-side sorting needed.

## App Architecture

The app is a **Single Page Application (SPA)** using the "screen swap" pattern:
- All screens exist in the DOM simultaneously
- Only one screen has the `.active` class at a time
- `showScreen(id)` handles all transitions
- Supabase auth state drives screen routing

### Game Engine Flow

```
startMission() → renderMissionBriefing() → launchMission()
                                               ↓
                          quiz: renderQuiz() → selectQuizAnswer() → nextQuestion()
                    spot-threat: renderSpotThreat() → handleThreatClick() → submitSpotThreat()
                  decision-tree: renderDecisionTree() → chooseDtOption() → (recurse)
                                               ↓
                                         completeMission()
                                               ↓
                              DB update → awardBadges() → renderMissionComplete()
```

## Theme System

Four CSS themes driven by `data-theme` attribute on `<body>`:

| Theme | Audience | Key Design |
|---|---|---|
| `kids` | 7–12 | Warm cream bg, coral accent, 17px font, rounded borders |
| `teens` | 13–17 | Near-black bg, purple neon accent, Rajdhani font |
| `adults` | 18–45 | White bg, professional blue, Inter font, clean shadows |
| `seniors` | 46–65+ | Pure white bg, high contrast, 19px base font, large tap targets |

Themes are auto-applied on login based on the user's saved `age_group`.
