# 🛡️ CyberGuard — Stay Safe Online

An interactive, standalone cybersecurity awareness and education game for **all ages** — from kids (7+) to seniors (65+).

## 🎮 Features

- **4 Age Group Modes** with tailored themes and scenarios
- **24 Missions** of real-world cybersecurity scenarios
- **Singapore-specific content** — PayNow, SingPass, CPF, DBS/OCBC/UOB, SPF, ScamShield
- **Zero dependencies** — single HTML file, works offline
- **Instant feedback** with educational explanations after every answer
- **Score tracking** and performance rating

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
# Edit js/config.js — fill in SUPABASE_URL and SUPABASE_ANON

# 3. Run the Supabase schema
# Paste supabase/schema.sql into your Supabase SQL Editor and run it
# Then run the GRANTs:
#   GRANT SELECT ON public.profiles TO anon;
#   GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
#   GRANT SELECT, INSERT, UPDATE ON public.game_sessions TO authenticated;
#   GRANT SELECT, INSERT ON public.level_attempts TO authenticated;
#   GRANT SELECT ON public.leaderboard TO anon, authenticated;

# 4. Serve locally
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
