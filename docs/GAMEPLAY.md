# CyberGuard — Gameplay Reference

## Skill Tracks

DB keys are `kids / teens / adults / seniors / expert` (preserved for compatibility). UI labels are skill-level based.

### 🌱 Level 01 — Beginner

**Foundation mission (mandatory)**
| Mission | Type | Topic |
|---|---|---|
| Cyber Basics — Kids Edition | Quiz | Hacking definition, passwords, strangers, phishing, shared computers |

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

**Foundation mission (mandatory)**
| Mission | Type | Topic |
|---|---|---|
| Cybersecurity Foundations | Quiz | Phishing, 2FA, HTTPS, malware, digital footprint, passwords, account recovery |

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
| Linux Terminal Survival | Quiz | chmod risks, shell command safety |

---

### 🔥 Level 03 — Advanced

**Foundation mission (mandatory)**
| Mission | Type | Topic |
|---|---|---|
| Cybersecurity Fundamentals | Quiz | Social engineering, ransomware, BEC, least privilege, VPN, smishing, MFA |

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

**Foundation mission (mandatory)**
| Mission | Type | Topic |
|---|---|---|
| Staying Safe Online | Quiz | Bank call scams, password safety, WhatsApp scam, fake tech support, OTP/PIN protection |

**Base missions**
| Mission | Type | Topic |
|---|---|---|
| Scam Radar | Quiz | Singapore-specific: SPF impersonation, prize fraud, bank scams |
| SMS Inspector | Spot the Threat | Fake DBS bank SMS with 5 threat indicators |
| The Police Call | Decision Tree | SPF impersonation scam call scenario |

> Specialist content covers advanced threat profiles: APT campaigns, threat intelligence,
> incident response, red team tradecraft, nation-state phishing, zero-day awareness,
> enterprise breach simulation.

---

### ⚡ Level 05 — Expert

**Foundation mission (mandatory)**
| Mission | Type | Topic |
|---|---|---|
| Security Operations Fundamentals | Quiz | MITRE ATT&CK, CVSS v3.1 metrics, SIEM, Pass-the-Hash, defence in depth, STRIDE threat modelling, pen test vs vulnerability assessment |

**Core missions (scenarios.js)**
| Mission | Type | Topic |
|---|---|---|
| Web Application Threat Intelligence | Quiz | SQL Injection (auth bypass), Path Traversal, XXE injection, CORS misconfiguration, IDOR |
| Anomalous Network Activity Report | Spot the Threat | SNMP enumeration, TCP SYN port scan, ARP poisoning, rogue DHCP server, banner grabbing |
| APT Incident Response | Decision Tree | C2 beaconing detection, memory forensics, lateral movement scoping, coordinated isolation |

**Additional missions (new_missions_expert.js)**
| Mission | Type | Topic |
|---|---|---|
| Wireless Security Assessment | Quiz | Evil Twin AP, rogue RADIUS server, WEP IV weakness, Karma/PNL attack, WPA3/SAE |
| Malware Behaviour Analysis | Spot the Threat | Double-extension dropper, fileless PowerShell, process injection (VirtualAllocEx/CreateRemoteThread), registry Run key persistence, C2 beaconing with domain masquerading |
| Cloud Security Breach Response | Decision Tree | AWS IAM credential compromise, S3 exfiltration scoping, backdoor IAM user persistence, forensic evidence preservation, DPO notification |
| OSINT & Social Engineering Defence | Quiz | Google Dorking, Dumpster Diving, Spear Phishing vs generic phishing, urgency social engineering, phishing-resistant MFA (FIDO2/WebAuthn) |

> All Expert scenarios are CEH v13-inspired, reframed as professional CSIRT/analyst workplace
> situations — not copies of exam questions.

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

- Story-based questions per mission (5–7 depending on track)
- Each question: story setup → scenario → 3–4 options
- Immediate feedback per answer with full explanation
- Points awarded for correct answers only
- Expert quiz missions use 150 pts/question (vs 100 pts for lower tracks)

### 🔍 Spot the Threat

- List of network log entries, email items, sandbox report lines, or UI elements
- Click/tap each item you identify as a threat
- Real-time feedback explains WHY each item is or isn't a threat
- Score accumulates per threat correctly identified
- Submit reveals any missed threats (highlighted)
- No point deduction — encourages exploration
- Expert spot-threat missions use 140 pts/threat

### 🌿 Decision Tree

- Branching narrative with 2–3 choices per node
- Choices lead to different outcomes (hero / partial / bad ending)
- Points awarded per correct decision node
- Final ending card explains the real-world lesson
- Multiple paths for replay value
- Expert DT missions model real incident response procedures (APT response, cloud breach containment)

---

## Scoring & XP

```
effectiveXP = baseXP × ageGroupMultiplier × levelMultiplier
```

### GROUP_DIFFICULTY table

| Track | DB key | Difficulty value |
|---|---|---|
| Beginner | kids | 1 |
| Intermediate | teens | 2 |
| Advanced | adults | 3 |
| Specialist | seniors | 4 |
| Expert | expert | 5 |

### Multiplier table

| Player vs Mission | Multiplier |
|---|---|
| Same difficulty | ×1.0 |
| 1 level harder | ×1.5 |
| 2+ levels harder | ×2.0 |
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
| Cyber Guardian | 🏆 | Complete missions across all 5 skill tracks |
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
