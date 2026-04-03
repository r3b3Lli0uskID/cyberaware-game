# CyberGuard — Changelog

## v2.0 — UX Overhaul (2026-04-03)

### Trust & Safety
- Added trust strip below login form (encrypted connection, email never shared, delete anytime)
- Added "Your Data, Your Safety" section on landing page (what we store, where it lives, your control)

### Guest Mode (Try Before Signup)
- New "Try a Free Mission" button on landing page
- Play 2-3 beginner missions without creating an account
- Guest profile with demo dashboard and limited mission access
- Conversion prompt after 2 missions — encourages signup to unlock all content
- All database writes safely skipped in guest mode

### Landing Page Warmth
- Replaced terminal/hacker aesthetic with welcoming language
- Hero: "Stay safe online. Learn at your own pace."
- Removed `//` comment-style section headers
- Replaced `sudo apt-get install` CTA with clean "Ready to start? Join the community"
- Section titles now use Nunito font instead of monospace

### Onboarding
- Intro slides reduced from 5 to 3 (removed fear-based messaging)
- Added helper hints on profile setup ("Not sure? Start with Beginner")
- First mission card highlighted with pulsing glow for new users

### Social Proof
- Live player count fetched from Supabase on landing page
- Dynamic mission count and region count displayed in hero stats bar

### Security (v1.7)
- XSS sanitization: `esc()` helper for all user-controlled innerHTML
- Username validation: alphanumeric + underscore/hyphen only (3-20 chars)
- Client-side rate limiting: login (5/min), signup (3/2min), password reset (3/5min)
- Supabase health check on app start (detects paused free-tier DB)

### Auth Stability (v1.7)
- Fixed race condition in `onAuthStateChange` vs `initAuth`
- Auto-refresh session tokens within 5 minutes of expiry
- Error boundaries around auth state change handlers

### Infrastructure (v1.7)
- GitHub Actions: Supabase keep-alive pings every 3 days (prevents free-tier pause)
- GitHub Secrets configured for SUPABASE_URL and SUPABASE_ANON

### Visual (v1.7)
- Added "Calm" theme (Catppuccin Mocha — soft green/teal, easy on the eyes)

---

## v1.6 — Expert Track (March 2026)
- Added Level 05 Expert skill track with CEH v13-aligned scenarios
- Extended mission library to 100+ missions
- Fixed password reset bounce issue
- Dark mode enforced (light/system toggle removed)

## v1.5 — Regional Content (March 2026)
- Added ASEAN missions (MY, PH, TH, ID, VN, MM)
- Added APAC missions (JP, KR, AU, NZ, IN, CN)
- Region filter on dashboard

## v1.0 — Initial Release (February 2026)
- 5-tier skill progression (Beginner to Expert)
- Quiz, Spot-the-Threat, Decision Tree mission types
- Supabase auth with email/OTP
- Leaderboard with age group ranking
- 8 achievement badges
- Admin panel
- Cloudflare Pages deployment
