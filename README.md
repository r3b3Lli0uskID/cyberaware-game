# 🛡️ CyberGuard — Security Awareness Platform

An interactive cybersecurity awareness game covering threats across **ASEAN, APAC, and Global** regions — with skill-based progression from Beginner to Specialist.

**Live:** https://cyberguard.ivanthan.uk
**Built by:** [Ivan Than](https://ivanthan.uk)

---

## Features

- **4 Skill Tracks** — Beginner / Intermediate / Advanced / Specialist with XP multipliers
- **59+ Missions** across all skill tracks, ASEAN, and APAC regional scenarios
- **Regional content** — ASEAN (SG, MY, PH, TH, ID, VN, MM) + APAC (JP, KR, AU, NZ, IN, CN)
- **Singapore-specific scenarios** — PayNow, SingPass, CPF, DBS/OCBC/UOB, SPF, ScamShield
- **3 Mission Types** — Quiz, Spot the Threat, Decision Tree
- **Difficulty system** — Beginner / Intermediate / Hard / Expert per mission with XP multipliers
- **Hobby matching** — missions personalised to your interests with ✨ highlights
- **Cross-track play** — attempt any track's missions; harder = bonus XP
- **Intro storyline** — 5-slide narrative cutscene for new users
- **Background music** — looping ambient track with toggle
- **Instant feedback** with explanations after every answer
- **Score tracking**, leaderboard, and 8-badge achievement system
- **Supabase backend** — auth, profiles, game sessions, leaderboard with RLS

---

## Skill Tracks

### 🌱 Level 01 — Beginner
Password safety, personal info protection, safe websites, cyberbullying, online strangers,
Roblox account safety, safe WiFi, YouTube safety, cookie theft, school photo privacy

### ⚔️ Level 02 — Intermediate
Social media privacy, phishing DMs, public WiFi, gaming account security, digital footprint,
deepfake awareness, Discord security, VR social safety, livestream donation scams, fake celebrity DMs

### 🔥 Level 03 — Advanced
CEO email fraud (BEC), vishing, malware attachments, public WiFi banking, data breaches,
CPF/SingPass phishing, credential stuffing, fake tech support, home office security

### 💀 Level 04 — Specialist
APT campaigns, threat intelligence, incident response, red team tradecraft,
nation-state phishing, zero-day awareness, enterprise breach simulation

---

## Regional Scenarios

### ASEAN
| Country | Scenario |
|---|---|
| 🇲🇾 Malaysia | Touch 'n Go eWallet phishing |
| 🇵🇭 Philippines | GCash transfer fraud |
| 🇹🇭 Thailand | AirAsia booking phishing |
| 🇮🇩 Indonesia | GoPay social engineering |
| 🇻🇳 Vietnam | Viber bank impersonation |
| 🇲🇲 Myanmar | Zalo banking scam |

### APAC
| Country | Scenario |
|---|---|
| 🇯🇵 Japan | Sagawa delivery phishing SMS |
| 🇰🇷 South Korea | KakaoTalk account fraud |
| 🇦🇺 Australia | Westpac bank impersonation |
| 🇳🇿 New Zealand | NZBC prize scam |
| 🇮🇳 India | Paytm KYC phishing |
| 🇨🇳 China | WeChat payment scam |

---

## Setup

```bash
# 1. Clone
git clone https://github.com/r3b3Lli0uskID/cyberaware-game.git
cd cyberaware-game

# 2. Add your Supabase credentials
cp js/config.example.js js/config.js
# Edit js/config.js — fill in SUPABASE_URL and SUPABASE_ANON

# 3. Run the Supabase schema
# Paste supabase/schema.sql into your Supabase SQL Editor and run it.
# Then run these GRANTs (required — without them all DB writes will get 42501):
#   GRANT SELECT ON public.profiles TO anon;
#   GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
#   GRANT SELECT, INSERT, UPDATE ON public.game_sessions TO authenticated;
#   GRANT SELECT, INSERT ON public.level_attempts TO authenticated;
#   GRANT SELECT ON public.leaderboard TO anon, authenticated;
# Verify RLS policies:
#   SELECT policyname, cmd FROM pg_policies WHERE tablename = 'profiles';
# Expected: profiles_read_all (SELECT), profiles_insert_own (INSERT), profiles_update_own (UPDATE)

# 4. Run v1.4 migration (if upgrading from v1.3 or earlier)
#   ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS level TEXT NOT NULL DEFAULT 'beginner';
#   ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS hobby TEXT NOT NULL DEFAULT 'general';
#   ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS intro_completed BOOLEAN NOT NULL DEFAULT FALSE;
#   ALTER TABLE public.profiles ADD COLUMN IF NOT EXISTS foundational_completed BOOLEAN NOT NULL DEFAULT FALSE;
#   NOTIFY pgrst, 'reload schema';

# 5. Supabase Auth settings
# Authentication → Providers → Email → disable "Confirm email" (recommended)

# 6. Add background music (optional)
# Place your MP3 at audio/bgm.mp3 — loops on first user interaction

# 7. Serve locally
npx serve .
# → http://localhost:3000
```

### Cloudflare Pages Deployment

The repo includes `build.sh` which Cloudflare Pages runs on each deploy. It generates `js/config.js` from environment variables — **do not edit `js/config.js` directly** for production; edit `js/config.example.js` instead.

Set these environment variables in the Cloudflare Pages dashboard:
- `SUPABASE_URL` — your Supabase project URL
- `SUPABASE_ANON` — your Supabase anon public key

Build settings:
- **Build command:** `bash build.sh`
- **Build output directory:** `.`

---

## Singapore Resources

- **Anti-Scam Hotline:** 1800-722-6688
- **SPF Police Hotline:** 1800-255-0000
- **ScamShield App:** Available on iOS & Android
- **ScamAlert.sg:** https://www.scamalert.sg

---

## License

MIT — Free to use, adapt, and share for education purposes.

---

## Changelog

### v1.6 — 2026-03-23
- **REGIONS fix** — `config.example.js` (the build template) was missing the `REGIONS` constant entirely; `build.sh` regenerates `config.js` on each Cloudflare Pages deploy, so edits to `config.js` were silently overwritten — root cause of `ReferenceError: REGIONS is not defined` on every login
- **db init order** — moved `const db = createClient()` to bottom of `config.example.js` so a CDN timing failure can no longer halt constant declarations mid-file
- **Password reset bounce** — Supabase replays current auth state as `SIGNED_IN` immediately when `onAuthStateChange` is subscribed; this was calling `loadProfile()` → `showScreen('screen-dashboard')` before `PASSWORD_RECOVERY` could fire, bouncing users off the reset screen; fixed with `App.isRecovery` flag that suppresses `loadProfile` during the reset flow
- **Stuck loading overlay** — wrapped `signIn()` in `try/finally` so `loading(false)` is guaranteed even if an uncaught exception occurs downstream
- **CSP** — added `https://static.cloudflareinsights.com` to `script-src` and `https://cloudflareinsights.com` to `connect-src` to allow Cloudflare analytics beacon
- **Skill-level framing** — replaced age-group language throughout UI with skill tracks (Level 01 Beginner → Level 04 Specialist); DB keys (kids/teens/adults/seniors) preserved to avoid migration
- **Theme simplification** — reduced to 3 dark-only themes: Default (teen), Arcade (kiddy), Crimson; removed light/system mode toggle
- **Crimson theme** — new dark theme: `#0C0408` bg, `#FF3040` accent, inspired by CyberGuard wallpaper
- **Logo** — new `cyberguard-logo-nav.svg` with transparent background and white CYBER text for dark nav bars
- **Hero title** — Fjalla One font, blue-to-purple gradient (`#1770b5 → #8b5cf6`) matching portfolio style
- **iOS Safari fixes** — `flex-wrap:nowrap` on base `.nav` rule (not just in media query); `-webkit-appearance:none` on `.btn`; explicit `flex-shrink:0` on sign-in button prevents wrap on Safari
- **btn-outline** — added missing flat-class bridge aliases (`btn-primary`, `btn-outline`, `btn-ghost`, `btn-sm`, `btn-lg`) — HTML uses flat class names but CSS only had BEM variants
- **Landing page** — 4 new sections: How to Begin, Threat Coverage, Active Regions, Final CTA

### v1.5 — 2026-03-19
- **Cloudflare Pages deployment** — `_headers` with CSP; `build.sh` generates `config.js` from env vars
- **BGM toggle fixed** — `pointer-events:none` inherited from parent was blocking clicks
- **Font loading** — replaced Google Fonts with Bunny Fonts `<link>` to fix Cloudflare MIME/nosniff errors
- **CSS warnings** — removed `-webkit-text-size-adjust`; wrapped webkit scrollbar rules in `@supports`
- **scenarios.js sparse hole** — rogue comma after carriage return comment crashed `renderDashboard`
- **Duplicate mission ID** — `seniors_new_spot_1` appeared twice; second renamed to `seniors_new_spot_2`
- **Permission denied (42501)** — GRANTs and RLS policies added; schema cache reload documented
- **Stale session** — `loadProfile()` distinguishes 42501 from missing profile; auto signs out on stale session

### v1.4 — 2026-03-19
- **Level system** — Beginner / Intermediate / Hard / Expert with XP multipliers (×1.0 → ×2.0)
- **Hobby system** — 8 hobby options; matching missions highlighted with ✨
- **Intro storyline** — 5-slide mandatory narrative cutscene for new users
- **Foundational course (CS101)** — mandatory first mission per skill track
- **59 missions** — 30 new missions + 4 CS101 foundational
- **Background music** — HTML5 Audio with looping MP3

### v1.3 — 2026-03-19
- **Cross-group missions** — all users can browse and play any skill track
- **XP multiplier system** — harder group = ×1.5 / ×2.0 bonus; easier = ×0.75 / ×0.5

### v1.2 — 2026-03-19
- **Password reset** — email reset link correctly shows reset screen
- **Change Password** in Profile — synced with Supabase auth
- **Admin all-group access** — admin users can browse any skill track

### v1.1 — 2026-03-19
- 4 new missions: Linux Terminal Survival, Hacked GitHub Repo, Secure Code Review, Credential Leak
- Sound effects system, GSAP screen transitions, XP burst animations, confetti on mission complete
- Visual themes: Teen, Kiddy, Adult; age-group auto-theme on login

### v1.0 — 2026-03-19
- 20 missions across 4 skill tracks, 3 mission types
- Supabase Auth (email + OTP, username login)
- Admin panel with user management and session analytics
- 8-badge achievement system
- Singapore-specific scenarios: PayNow, SingPass, SPF, ScamShield, DBS, NTUC
