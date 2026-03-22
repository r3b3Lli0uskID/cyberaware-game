# CyberGuard — Gameplay Reference

## Skill Tracks

DB keys are `kids / teens / adults / seniors` (preserved for compatibility). UI labels are skill-level based.

### 🌱 Level 01 — Beginner

**Base missions**
| Mission | Type | Topic |
|---|---|---|
| Agent CyberKid | Quiz | Passwords, personal info, online strangers |
| Danger Detective | Spot the Threat | Fake website with 5 threat indicators |
| Online Friend Alert | Decision Tree | Navigating a suspicious online contact |

**Additional missions**
| Mission | Type | Topic |
|---|---|---|
| Roblox Agent | Quiz | Roblox account safety, Robux scams |
| WiFi Safety Patrol | Quiz | Safe vs unsafe WiFi networks |
| YouTube Channel Safety | Spot the Threat | Fake YouTube giveaway/phishing |
| Minecraft Grief Defense | Decision Tree | Griefing, scam mods, account theft |
| Game Emote Scam | Quiz | In-game cosmetic scams |
| Cookie Theft Defense | Spot the Threat | Browser session hijacking basics |
| School Photo Safety | Decision Tree | Sharing photos and personal info |

---

### ⚔️ Level 02 — Intermediate

**Base missions**
| Mission | Type | Topic |
|---|---|---|
| Cyber Recon | Quiz | Social media privacy, phishing DMs, digital footprint |
| Phish Hunter | Spot the Threat | Instagram DM with 6 social engineering tactics |
| Account Takeover | Decision Tree | Steam gaming account credential theft |

**Additional missions**
| Mission | Type | Topic |
|---|---|---|
| Instagram/TikTok Privacy | Quiz | Privacy settings, over-sharing |
| Deepfake Awareness | Spot the Threat | AI-generated video/audio fraud |
| Discord Security | Quiz | Account takeover, fake bots, server scams |
| VR Social Safety | Decision Tree | Avatar impersonation, VR harassment |
| Gaming Leaderboard Fraud | Quiz | Cheating tools, account compromise |
| Livestream Donation Scam | Spot the Threat | Fake charity, donation fraud |
| Photo Metadata Dangers | Quiz | EXIF data, location leakage |
| Fake Celebrity DMs | Decision Tree | Impersonation, prize scams |

---

### 🔥 Level 03 — Advanced

**Base missions**
| Mission | Type | Topic |
|---|---|---|
| Threat Assessment | Quiz | BEC fraud, malware attachments, vishing |
| Email Forensics | Spot the Threat | CEO fraud email with 6 indicators of compromise |
| The Friday Transfer | Decision Tree | Real-time BEC attack with branching outcomes |

**Additional missions**
| Mission | Type | Topic |
|---|---|---|
| CPF/SingPass Phishing | Quiz | Government portal impersonation |
| BEC Scenario | Spot the Threat | Business email compromise indicators |
| Fake Tech Support | Decision Tree | Remote access scam |
| Credential Stuffing | Quiz | Reused password attacks, breach databases |
| Home Office Security | Quiz | WFH threat surface: VPN, router, BYOD |

---

### 💀 Level 04 — Specialist

**Base missions**
| Mission | Type | Topic |
|---|---|---|
| Scam Radar | Quiz | Singapore-specific: SPF impersonation, prize fraud, bank scams |
| SMS Inspector | Spot the Threat | Fake DBS bank SMS with 5 threat indicators |
| The Police Call | Decision Tree | SPF impersonation scam call scenario |

> Specialist content focuses on advanced threat profiles: APT campaigns, threat intelligence,
> incident response procedures, red team tradecraft, nation-state phishing, zero-day awareness,
> enterprise breach simulation.

---

## Regional Missions

Regional missions are pushed into existing skill-track arrays and tagged with a `region` field. The region filter bar in the dashboard shows only regions that have missions for the active track.

### ASEAN

| Country | Mission | Track | Topic |
|---|---|---|---|
| 🇲🇾 Malaysia | Touch 'n Go eWallet Scam | Advanced | Reload phishing, QR code fraud |
| 🇵🇭 Philippines | GCash Transfer Fraud | Advanced | Social engineering, fake customer service |
| 🇹🇭 Thailand | AirAsia Booking Phishing | Advanced | Travel booking scam, credential harvest |
| 🇮🇩 Indonesia | GoPay Social Engineering | Advanced | Digital wallet fraud |
| 🇻🇳 Vietnam | Viber Bank Impersonation | Advanced | Messaging app bank fraud |
| 🇲🇲 Myanmar | Zalo Banking Scam | Advanced | Local app impersonation |

### APAC

| Country | Mission | Track | Topic |
|---|---|---|---|
| 🇯🇵 Japan | Sagawa Delivery Phishing | Advanced | SMS parcel notification fraud |
| 🇰🇷 South Korea | KakaoTalk Account Fraud | Advanced | Messaging platform account theft |
| 🇦🇺 Australia | Westpac Impersonation | Advanced | Bank SMS/phone impersonation |
| 🇳🇿 New Zealand | NZBC Prize Scam | Advanced | Fake broadcaster prize notification |
| 🇮🇳 India | Paytm KYC Phishing | Advanced | Digital wallet KYC verification scam |
| 🇨🇳 China | WeChat Payment Scam | Advanced | QR code payment fraud |

---

## Mission Types

### ❓ Quiz

- Multiple story-based questions per mission (5–10 depending on difficulty setting)
- Each question: story setup → scenario → 3 options (A/B/C)
- Immediate feedback per answer with explanation and pro tip
- Points awarded for correct answers only

### 🔍 Spot the Threat

- Interactive rendered email / SMS / website mockup
- Click suspicious elements to identify threats
- Real-time feedback popover explains WHY each element is a threat
- Score accumulates per threat found
- Submit reveals any missed threats (highlighted in red)
- No point deduction — encourages exploration

### 🌿 Decision Tree

- Branching narrative with 2–3 choices per node
- Choices lead to different outcomes (hero / partial / bad ending)
- Points awarded per correct decision
- Final ending card explains the real-world lesson
- Multiple paths for replay value

---

## Scoring & XP

```
effectiveXP = baseXP × ageGroupMultiplier × levelMultiplier
```

| Player vs Mission | Multiplier |
|---|---|
| Same difficulty | ×1.0 |
| 1 level harder | ×1.5 |
| 2 levels harder | ×2.0 |
| 1 level easier | ×0.75 |
| 2+ levels easier | ×0.5 |

Mission cards show the effective XP with 🔥 bonus or 📉 penalty indicators.

---

## Badges

| Badge | Emoji | Condition |
|---|---|---|
| First Mission | 🎖️ | Complete any mission |
| Perfect Score | 💯 | 100% accuracy on any mission |
| Quiz Master | 🧠 | 90%+ on a quiz mission |
| Threat Hunter | 🔍 | 90%+ on a spot-threat mission |
| Decision Maker | 🎯 | 90%+ on a decision-tree mission |
| Group Champion | 🏅 | Complete all missions in your skill track |
| Cyber Guardian | 🏆 | Complete missions across all 4 skill tracks |
| On Fire | 🔥 | Complete 3 missions in a row |

---

## Singapore Context

All Advanced and Specialist scenarios reference Singapore-specific services:

| Service | Used In |
|---|---|
| PayNow / PayLah! | Payment scam scenarios |
| SingPass | Government portal impersonation |
| SPF (Singapore Police Force) | Authority impersonation, 1800-255-0000 |
| ScamShield | Anti-scam tool reference, 1800-722-6688 |
| ScamAlert.sg | Advisory portal |
| DBS / OCBC / UOB | Bank impersonation scenarios |
| NTUC FairPrice | Prize scam reference |
| CPF / IRAS / MAS | Government agency impersonation |
