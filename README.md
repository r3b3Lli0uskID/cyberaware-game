<p align="center">
  <img src="assets/brand/cyberguard-logo-nav.svg" alt="CyberGuard" width="360" />
</p>

<h3 align="center">Security Awareness Platform</h3>

<p align="center">
An interactive cybersecurity awareness game covering threats across <b>ASEAN, APAC, and Global</b> regions — with skill-based progression across <b>5 tiers from Beginner to Expert</b>.
</p>

<p align="center">
  <b>Built by:</b> <a href="https://github.com/r3b3Lli0uskID">@r3b3Lli0uskID</a>
</p>

---

## Features

- **5 Skill Tracks** — Beginner / Intermediate / Advanced / Specialist / Expert with XP multipliers
- **100+ Missions** across all skill tracks, ASEAN, and APAC regional scenarios
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

### ⚡ Level 05 — Expert *(new in v1.6)*
Web app exploitation (SQLi, Path Traversal, XXE, CORS, IDOR), wireless attack vectors
(Evil Twin, rogue RADIUS, WEP, Karma, WPA3), malware behaviour analysis (fileless PowerShell,
process injection, registry persistence, C2 beaconing), cloud breach response (AWS IAM
compromise, S3 exfiltration, backdoor IAM persistence), OSINT & social engineering defence
(Google Dorking, Dumpster Diving, Spear Phishing, urgency manipulation, FIDO2 MFA).
CEH v13-aligned scenarios reframed as professional workplace situations.

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

# 5. Run v1.6 migration (add Expert skill track support)
#   ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_age_group_check;
#   ALTER TABLE public.profiles ADD CONSTRAINT profiles_age_group_check
#     CHECK (age_group IN ('kids','teens','adults','seniors','expert'));

# 6. Supabase Auth settings
# Authentication → Providers → Email → disable "Confirm email" (recommended)

# 7. Add background music (optional)
# Place your MP3 at audio/bgm.mp3 — loops on first user interaction

# 8. Serve locally
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
- **Expert skill track (Level 05)** — 8 new missions: Security Operations Fundamentals (foundation),
  Web App Threat Intelligence (SQLi/Path Traversal/XXE/CORS/IDOR), Anomalous Network Activity Report
  (SNMP enum/port scan/ARP poisoning/rogue DHCP/banner grabbing), APT Incident Response (C2/memory
  forensics/containment), Wireless Security Assessment (Evil Twin/rogue RADIUS/WEP/Karma/WPA3),
  Malware Behaviour Analysis (fileless PS/process injection/C2 beaconing), Cloud Security Breach
  Response (AWS IAM/S3 exfiltration), OSINT & Social Engineering Defence (Google Dorking/Spear
  Phishing/FIDO2). CEH v13-inspired, reframed as professional workplace scenarios.
- **GROUP_DIFFICULTY corrected** — `seniors` was incorrectly set to 2 (same as teens/Intermediate);
  fixed to `seniors=4, expert=5` — Specialist now correctly outranks Advanced in XP calculations
- **Expert CSS theme** — `[data-theme="expert"]`: obsidian bg `#08050F`, amber/gold primary `#F59E0B`
- **MISSIONS.expert initialised inline** — declared as `expert: []` in the initial MISSIONS object
  so it is always defined before `new_missions_expert.js` runs (fixes `TypeError: MISSIONS.expert
  is undefined` in browser when FOUNDATION_MISSIONS parsing stalled execution)
- **index.html** — Expert training track card (Level 05), leaderboard dropdown, admin group card
  and filter, "5 Adaptive Skill Tiers" copy, threat coverage terminal updated (100+ scenarios,
  3 new categories: Web App Exploitation, Network Attacks, Cloud & Wireless), intro storytelling
  slides updated for 5-tier narrative, final CTA copy updated
- **Admin group count** — admin panel now tracks and displays Expert user count
- **cyber_guardian badge** — now requires missions across all 5 tracks (was 4)
- **REGIONS fix** — `config.example.js` (the build template) was missing the `REGIONS` constant;
  `build.sh` regenerates `config.js` on each deploy, silently overwriting fixes — root cause of
  `ReferenceError: REGIONS is not defined` on every login
- **db init order** — moved `const db = createClient()` to bottom of `config.example.js`
- **Password reset bounce** — fixed with `App.isRecovery` flag suppressing `loadProfile` during reset
- **Stuck loading overlay** — `signIn()` wrapped in `try/finally` guaranteeing `loading(false)`
- **CSP** — added Cloudflare analytics beacon to `script-src` and `connect-src`
- **Skill-level framing** — replaced age-group language with skill track labels throughout UI
- **Crimson theme** — new dark theme: `#0C0408` bg, `#FF3040` accent
- **iOS Safari fixes** — `flex-wrap:nowrap`, `-webkit-appearance:none`, `flex-shrink:0`
- **Landing page** — 5-tier narrative, 100+ scenario count, updated threat coverage terminal

### v1.5 — 2026-03-19
- **Cloudflare Pages deployment** — `_headers` with CSP; `build.sh` generates `config.js` from env vars
- **BGM toggle fixed** — `pointer-events:none` inherited from parent was blocking clicks
- **Font loading** — replaced Google Fonts with Bunny Fonts to fix Cloudflare MIME/nosniff errors
- **scenarios.js sparse hole** — rogue comma crashed `renderDashboard`
- **Duplicate mission ID** — `seniors_new_spot_1` renamed to `seniors_new_spot_2`
- **Permission denied (42501)** — GRANTs and RLS policies added

### v1.4 — 2026-03-19
- **Level system** — Beginner / Intermediate / Hard / Expert with XP multipliers (×1.0 → ×2.0)
- **Hobby system** — 8 hobby options; matching missions highlighted with ✨
- **Intro storyline** — 5-slide mandatory narrative cutscene
- **Foundational course (CS101)** — mandatory first mission per skill track
- **59 missions** — 30 new missions + 4 CS101 foundational

### v1.3 — 2026-03-19
- **Cross-group missions** — all users can browse and play any skill track
- **XP multiplier system** — harder group = ×1.5 / ×2.0 bonus; easier = ×0.75 / ×0.5

### v1.2 — 2026-03-19
- **Password reset** — email reset link correctly shows reset screen
- **Change Password** in Profile — synced with Supabase auth
- **Admin all-group access** — admin users can browse any skill track

### v1.1 — 2026-03-19
- 4 new missions: Linux Terminal Survival, Hacked GitHub Repo, Secure Code Review, Credential Leak
- Sound effects, GSAP transitions, XP burst animations, confetti on mission complete
- Visual themes: Teen, Kiddy, Adult

### v1.0 — 2026-03-19
- 20 missions across 4 skill tracks, 3 mission types
- Supabase Auth (email + OTP, username login)
- Admin panel with user management and session analytics
- 8-badge achievement system
- Singapore-specific scenarios: PayNow, SingPass, SPF, ScamShield, DBS, NTUC
