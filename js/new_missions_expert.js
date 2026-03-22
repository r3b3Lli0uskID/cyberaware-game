// ═══════════════════════════════════════════════════════════════════════════════
// CyberGuard — Expert Track Additional Missions (Level 05)
// CEH v13-inspired scenarios reframed as professional workplace situations.
// Appends to MISSIONS.expert array defined in scenarios.js.
// ═══════════════════════════════════════════════════════════════════════════════

MISSIONS.expert.push(

  // ─── QUIZ: Wireless Network Security Assessment ───────────────────────────────
  {
    id: 'expert_quiz_2',
    type: 'quiz',
    title: 'Wireless Security Assessment',
    subtitle: 'Classify Wi-Fi Vulnerabilities and Attack Vectors',
    icon: '📶',
    difficulty: 'Expert',
    xp: 850,
    briefing: 'You are a wireless security assessor hired to evaluate the corporate campus network. Your scope covers 802.11 infrastructure and client-side exposure. Correctly classify each finding in your technical report — the board presentation is in 48 hours.',
    questions: [
      {
        id: 'ex2_q1',
        story: 'During a site survey you detect a second access point broadcasting the same SSID as the corporate guest Wi-Fi ("CorpGuest") but with a different BSSID, stronger signal, and no WPA2 credentials required.',
        scenario: 'What attack is most likely being executed, and what is the attacker\'s objective?',
        correct: 'b',
        feedback: {
          correct: 'Correct. An Evil Twin access point mimics a legitimate network\'s SSID to lure clients into connecting — then intercepts all traffic. The stronger signal is deliberate (high-power radio) to force clients to de-authenticate from the real AP and reconnect to the attacker\'s. All plaintext HTTP and unencrypted application traffic is exposed.',
          wrong: 'This is an Evil Twin attack. The stronger-signal rogue AP uses the same SSID to capture clients, then acts as a man-in-the-middle for all their traffic.'
        },
        options: [
          { id: 'a', text: 'WPS Brute Force — exploiting the Wi-Fi Protected Setup PIN to recover the WPA2 passphrase' },
          { id: 'b', text: 'Evil Twin AP — rogue access point impersonating the corporate SSID to intercept client traffic' },
          { id: 'c', text: 'Deauthentication Flood — disrupting wireless service to capture WPA handshakes' },
        ],
        points: 150,
      },
      {
        id: 'ex2_q2',
        story: 'Your wireless analyser captures a WPA2-Enterprise (802.1X) network. You note that client devices do not validate the RADIUS server certificate — they connect to any server presenting an EAP challenge.',
        scenario: 'What attack does this misconfiguration enable?',
        correct: 'a',
        feedback: {
          correct: 'Correct. Without certificate validation, an attacker can stand up a rogue RADIUS server and complete the 802.1X handshake. Depending on the EAP type (PEAP-MSCHAPv2 is common), the attacker may capture challenge-response hashes and crack them offline using tools like asleap or hashcat.',
          wrong: 'Without validating the RADIUS server certificate, clients will authenticate to any rogue server. The attacker captures EAP credentials or challenge hashes and cracks them offline.'
        },
        options: [
          { id: 'a', text: 'Rogue RADIUS server — capturing EAP credentials or challenge hashes from clients that skip certificate validation' },
          { id: 'b', text: 'KRACK (Key Reinstallation Attack) — replaying handshake nonces to reset encryption keys' },
          { id: 'c', text: 'PMKID Attack — extracting the pairwise master key identifier without a 4-way handshake' },
        ],
        points: 150,
      },
      {
        id: 'ex2_q3',
        story: 'A legacy conference room access point is still running WEP encryption. You capture ~50,000 IVs in under 10 minutes.',
        scenario: 'Why is WEP trivially breakable at this scale?',
        correct: 'c',
        feedback: {
          correct: 'WEP reuses IVs (Initialisation Vectors) — 24-bit values that cycle quickly on busy networks. Capturing enough IVs exposes XOR keystream patterns that allow statistical recovery of the RC4 key using the FMS/KoreK/PTW attacks. AES-based WPA2 or WPA3 does not have this weakness.',
          wrong: 'WEP uses 24-bit IVs that repeat frequently. Statistical analysis of repeated IVs reveals the RC4 key. This is a fundamental design flaw — not an implementation bug.'
        },
        options: [
          { id: 'a', text: 'WEP uses RSA encryption which has known small-key weaknesses at under 512 bits' },
          { id: 'b', text: 'WEP lacks mutual authentication, allowing unauthenticated MITM by any nearby device' },
          { id: 'c', text: 'WEP reuses short IVs enabling statistical RC4 keystream recovery from captured traffic' },
        ],
        points: 150,
      },
      {
        id: 'ex2_q4',
        story: 'A staff member reports that their laptop automatically connected to a network called "Free Airport WiFi" at the office. The SSID was never in use on the corporate campus.',
        scenario: 'What client-side wireless attack occurred?',
        correct: 'b',
        feedback: {
          correct: 'Karma/SSID probing attacks exploit Windows/macOS Preferred Network Lists (PNL). Clients probe for previously-connected SSIDs. An attacker\'s AP responds to any probe, claiming to be the requested network, causing the client to associate automatically. The attacker then intercepts all traffic.',
          wrong: 'This is a Karma attack exploiting preferred network list (PNL) probing. Clients broadcast SSIDs they\'ve connected to before — a rogue AP responds to any probe and captures the client.'
        },
        options: [
          { id: 'a', text: 'SSID Flooding — injecting hundreds of beacon frames with random SSIDs to confuse wireless scanners' },
          { id: 'b', text: 'Karma / Preferred Network List attack — rogue AP responds to client probes for known SSIDs' },
          { id: 'c', text: 'Beacon Frame Spoofing — forging beacon frames with the corporate BSSID to confuse authentication' },
        ],
        points: 150,
      },
      {
        id: 'ex2_q5',
        story: 'To remediate the wireless findings, you recommend replacing WEP, disabling WPS, and enforcing RADIUS certificate validation. The security architect asks which encryption protocol you recommend for the highest-security corporate environment.',
        scenario: 'Which Wi-Fi security standard provides the strongest protection against offline dictionary attacks on captured handshakes?',
        correct: 'a',
        feedback: {
          correct: 'WPA3-Enterprise with 192-bit mode (CNSA suite) uses Simultaneous Authentication of Equals (SAE) and authenticated encryption that provides forward secrecy — even if a long-term key is later compromised, captured session traffic cannot be decrypted. WPA2-CCMP does not provide this protection.',
          wrong: 'WPA3 uses SAE (Simultaneous Authentication of Equals) which provides forward secrecy and is resistant to offline dictionary attacks against captured handshakes. WPA2 with CCMP is still acceptable but does not have forward secrecy.'
        },
        options: [
          { id: 'a', text: 'WPA3-Enterprise — SAE with forward secrecy prevents offline cracking of captured handshakes' },
          { id: 'b', text: 'WPA2-CCMP (AES) — still the most widely supported and practically unbreakable standard' },
          { id: 'c', text: 'WPA2-TKIP — TKIP\'s per-packet keying provides stronger session isolation than AES' },
        ],
        points: 150,
      },
    ],
  },

  // ─── SPOT-THREAT: Malware Behaviour Analysis Report ──────────────────────────
  {
    id: 'expert_spot_2',
    type: 'spot-threat',
    title: 'Malware Behaviour Analysis',
    subtitle: 'Triage Sandbox Report — Identify Malicious Indicators',
    icon: '🦠',
    difficulty: 'Expert',
    xp: 900,
    briefing: 'The SOC sandbox has detonated a suspicious email attachment in an isolated VM. You are reviewing the automated behaviour report. Flag every entry that represents a confirmed malicious indicator. Benign system activity should not be flagged.',
    totalPoints: 700,
    items: [
      { id: 'ex2_ioc1', type: 'text', text: '[T+0:03] Process "invoice_Q1.pdf.exe" spawned from Outlook.exe (PID 3812) — double-extension file masquerading as PDF document', isThreat: true, threatDesc: '🔴 Malware Execution via Double Extension: The file uses a double extension (.pdf.exe) to display as a PDF while executing as a program. Parent process Outlook confirms this arrived via email. This is the initial execution stage of a malware infection chain.' },
      { id: 'ex2_ioc2', type: 'text', text: '[T+0:05] System file read: C:\\Windows\\System32\\kernel32.dll — loaded by invoice_Q1.pdf.exe for memory allocation routines', isThreat: false, threatDesc: '' },
      { id: 'ex2_ioc3', type: 'text', text: '[T+0:07] PowerShell.exe spawned by invoice_Q1.pdf.exe with encoded command: powershell -w hidden -enc JABjAD0ATgBlAHcALQBPAGIAagBlAGMAdA...', isThreat: true, threatDesc: '🔴 Fileless Execution via Encoded PowerShell: The malware spawns PowerShell with a hidden window and base64-encoded command — a classic fileless technique. The encoded payload runs entirely in memory, leaving no script file on disk for AV to detect.' },
      { id: 'ex2_ioc4', type: 'text', text: '[T+0:09] svchost.exe (PID 2044) performing standard Windows Update check — established outbound connection to windowsupdate.microsoft.com:443', isThreat: false, threatDesc: '' },
      { id: 'ex2_ioc5', type: 'text', text: '[T+0:12] invoice_Q1.pdf.exe writes shellcode to svchost.exe (PID 4120) memory region — VirtualAllocEx + WriteProcessMemory + CreateRemoteThread API sequence detected', isThreat: true, threatDesc: '🔴 Process Injection (Classic DLL/Shellcode Injection): The sequence VirtualAllocEx → WriteProcessMemory → CreateRemoteThread is the textbook Windows process injection triad. The malware injects shellcode into a trusted svchost.exe to execute under its identity, evading process-based detection.' },
      { id: 'ex2_ioc6', type: 'text', text: '[T+0:15] Registry write: HKCU\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\\WindowsHelper = C:\\Users\\victim\\AppData\\Roaming\\svchosts.exe (note extra \'s\')', isThreat: true, threatDesc: '🔴 Persistence via Registry Run Key: Writing to HKCU\\Run establishes persistence across reboots without admin rights. The filename "svchosts.exe" (with an extra \'s\') is a typosquatting technique designed to blend in with legitimate Windows processes in process lists.' },
      { id: 'ex2_ioc7', type: 'text', text: '[T+0:22] Outbound HTTPS connection from injected svchost.exe to 185.220.101.42:443 — beaconing every 300 seconds — TLS certificate CN: *.windows-update-service.net', isThreat: true, threatDesc: '🔴 C2 Beaconing with Domain Masquerading: Regular 300-second intervals from a process-injected svchost, connecting to a non-Microsoft IP with a TLS certificate name mimicking Windows Update. This is command-and-control (C2) communication — the malware awaiting attacker instructions.' },
    ],
    threats: ['ex2_ioc1','ex2_ioc3','ex2_ioc5','ex2_ioc6','ex2_ioc7'],
    pointsPerThreat: 140,
  },

  // ─── DECISION-TREE: Cloud Security Breach Response ───────────────────────────
  {
    id: 'expert_dt_2',
    type: 'decision-tree',
    title: 'Cloud Security Breach Response',
    subtitle: 'Contain a Compromised AWS Environment',
    icon: '☁️',
    difficulty: 'Expert',
    xp: 950,
    briefing: 'You are the Cloud Security Lead at DataVault Technologies. At 02:30 on a Sunday, your AWS GuardDuty generates a critical alert: "UnauthorizedAccess:IAMUser/ConsoleLogin" from an IP in Eastern Europe for a developer IAM account. CloudTrail shows the account has been making API calls for the past 45 minutes — including DescribeInstances, ListBuckets, and GetObject on your S3 data lake.',
    maxScore: 400,
    tree: {
      start: {
        type: 'choice',
        text: 'GuardDuty shows an IAM user "dev_jenkins" authenticated from 195.54.161.88 (Eastern Europe) at 02:30. CloudTrail confirms 45 minutes of API activity including S3 data reads on the production data lake. The legitimate owner of this account is in Singapore (confirmed asleep). What is your first action?',
        choices: [
          { text: 'Delete the IAM user account immediately to stop access', next: 'delete_iam', points: 0 },
          { text: 'Revoke all active sessions and rotate the access keys for dev_jenkins immediately', next: 'revoke_rotate', points: 100 },
          { text: 'Contact the developer by phone to confirm whether they are travelling', next: 'contact_dev', points: 25 },
        ]
      },
      delete_iam: {
        type: 'outcome',
        text: '❌ Deleting the IAM user destroys the audit trail — CloudTrail logs reference the user ID, and deletion can complicate forensic reconstruction. More critically, the attacker may have created additional IAM users or roles during the 45-minute window. Deleting one account does not revoke those. Disable and rotate, then investigate for persistence mechanisms.',
        points: 0,
      },
      contact_dev: {
        type: 'outcome',
        text: '⚠️ Waking the developer for confirmation wastes critical response time. The 45-minute window of API activity has already occurred. GuardDuty\'s geolocation anomaly detection is reliable evidence. Treat this as a confirmed compromise and act — verify with the developer after containment, not before.',
        points: 0,
      },
      revoke_rotate: {
        type: 'choice',
        text: '✅ Correct first move. You revoke all active sessions and rotate the access keys, cutting off the attacker\'s authenticated access. Now you need to assess blast radius. CloudTrail shows GetObject calls on S3 bucket "dv-prod-data-lake" — 2.3GB of data accessed. What do you investigate next?',
        choices: [
          { text: 'Check if the attacker created any new IAM users, roles, or access keys during the 45-minute window', next: 'check_persistence', points: 100 },
          { text: 'Immediately notify customers about a potential data breach', next: 'premature_notify', points: 25 },
          { text: 'Terminate all running EC2 instances to prevent lateral movement', next: 'terminate_ec2', points: 0 },
        ]
      },
      premature_notify: {
        type: 'outcome',
        text: '⚠️ Customer notification is required under data protection regulations, but only after you have scoped the breach — what data was accessed, how many records, what categories. Notifying before this is known causes panic with incomplete information and may not satisfy regulatory requirements (which ask for specific details). Scope first, notify with facts.',
        points: 0,
      },
      terminate_ec2: {
        type: 'outcome',
        text: '❌ Terminating EC2 instances destroys volatile forensic evidence (memory, active processes, network connections) and causes unnecessary outages. The attacker\'s primary activity was S3 data exfiltration, not EC2 compromise. Focus investigation where the evidence points — check IAM persistence mechanisms first.',
        points: 0,
      },
      check_persistence: {
        type: 'choice',
        text: '✅ Excellent. You query CloudTrail for IAM write events: CreateUser, CreateRole, CreateAccessKey, AttachUserPolicy. You find the attacker created a backdoor IAM user "svc-monitor" with AdministratorAccess 30 minutes into the session. You disable and delete the backdoor account. Now what is your final step?',
        choices: [
          { text: 'Scope the S3 breach fully, then notify your DPO to assess regulatory notification obligations', next: 'scope_notify', points: 100 },
          { text: 'Mark the incident as resolved — both compromised accounts are now disabled', next: 'premature_close', points: 0 },
          { text: 'Revert all CloudTrail logs to the state before the attacker\'s session', next: 'tamper_logs', points: 0 },
        ]
      },
      premature_close: {
        type: 'outcome',
        text: '❌ Closing the incident without scoping the data breach is a regulatory failure. Under PDPA (Singapore), GDPR, and most data protection frameworks, you must determine what personal data was accessed and notify the relevant authority within prescribed timeframes. Undiscovered obligations have legal and financial consequences.',
        points: 0,
      },
      tamper_logs: {
        type: 'outcome',
        text: '❌ Altering or deleting CloudTrail logs after a breach constitutes evidence tampering — a serious regulatory and potentially criminal offence. Logs must be preserved as forensic evidence. This is the kind of response action that turns a security incident into a legal crisis.',
        points: 0,
      },
      scope_notify: {
        type: 'outcome',
        text: '🏆 Textbook cloud incident response. You immediately revoked access, uncovered IAM persistence, fully scoped the S3 data exposure, and engaged your DPO to assess notification obligations under applicable regulations. Your CloudTrail evidence trail is intact and complete. Root cause: dev_jenkins credentials were exposed in a public GitHub commit 3 days earlier — secrets scanning is now on the remediation roadmap.',
        points: 100,
      },
    },
  },

  // ─── QUIZ: OSINT and Social Engineering Defence ───────────────────────────────
  {
    id: 'expert_quiz_3',
    type: 'quiz',
    title: 'OSINT & Social Engineering Defence',
    subtitle: 'Classify Recon Techniques and Build Countermeasures',
    icon: '🕵️',
    difficulty: 'Expert',
    xp: 880,
    briefing: 'You lead the Red Team programme at a regional bank. Your team has completed a social engineering engagement and you are now briefing the Blue Team on every technique used — so they can build detection and awareness countermeasures. Classify each attack correctly.',
    questions: [
      {
        id: 'ex4_q1',
        story: 'Before making any phone calls or emails, your red team used the query `site:bank.internal filetype:xls -site:www.bank.internal` on a major search engine to discover indexed internal spreadsheets containing employee names, branch codes, and email formats.',
        scenario: 'What technique is this?',
        correct: 'a',
        feedback: {
          correct: 'Correct. Google Dorking (also called Google Hacking) uses advanced search operators to find sensitive information accidentally indexed by search engines. The `site:`, `filetype:`, and exclusion operators narrow results to specific document types and domains. Organisations should use Google Search Console to remove sensitive indexed pages.',
          wrong: 'This is Google Dorking — using advanced search operators to surface sensitive documents indexed by search engines. The `filetype:xls site:` combination is a classic technique documented in the Google Hacking Database (GHDB).'
        },
        options: [
          { id: 'a', text: 'Google Dorking — using advanced search operators to discover sensitive indexed documents' },
          { id: 'b', text: 'DNS Zone Transfer — retrieving all DNS records from a misconfigured nameserver' },
          { id: 'c', text: 'WHOIS Harvesting — extracting registrant contact details from domain registration records' },
        ],
        points: 150,
      },
      {
        id: 'ex4_q2',
        story: 'The red team recovered discarded employee organisational charts, internal phone directories, and a draft internal memo from the paper recycling bin outside the bank\'s back office.',
        scenario: 'What physical OSINT technique does this represent?',
        correct: 'b',
        feedback: {
          correct: 'Dumpster Diving is the act of retrieving sensitive information from discarded materials — physical documents, old hardware, printed reports. Banks and regulated organisations should use cross-cut shredding for all paper documents and certified destruction for old hardware. This is a CEH-documented physical attack vector.',
          wrong: 'This is Dumpster Diving — physical information gathering from discarded materials. Cross-cut shredding policies and secure document disposal procedures are the primary countermeasures.'
        },
        options: [
          { id: 'a', text: 'Shoulder Surfing — observing sensitive information displayed on screens in public areas' },
          { id: 'b', text: 'Dumpster Diving — retrieving sensitive documents or hardware from discarded physical materials' },
          { id: 'c', text: 'Piggybacking — following an authorised person through a secured door without swiping an access card' },
        ],
        points: 150,
      },
      {
        id: 'ex4_q3',
        story: 'Using information gathered from LinkedIn (job titles, recent projects, manager names), the red team crafted a targeted email appearing to come from the CISO — referencing a specific internal security project by name — asking recipients to review a "confidential policy document" via a link.',
        scenario: 'What attack type is this, and why is it more dangerous than generic phishing?',
        correct: 'c',
        feedback: {
          correct: 'Spear Phishing uses personalised, contextually accurate details (manager names, project names, internal terminology) to dramatically increase credibility. Generic phishing blasts thousands of identical emails; spear phishing targets specific individuals with customised content. Detection rate by users is significantly lower because the email "feels right".',
          wrong: 'This is Spear Phishing — highly targeted phishing using personalised context to increase believability. Unlike bulk phishing, each message is tailored using OSINT, making it much harder for recipients to identify as malicious.'
        },
        options: [
          { id: 'a', text: 'Vishing — voice phishing using phone calls to impersonate authority figures' },
          { id: 'b', text: 'Whaling — phishing targeting specifically C-suite executives rather than general staff' },
          { id: 'c', text: 'Spear Phishing — personalised email attack using OSINT-gathered context to target specific individuals' },
        ],
        points: 150,
      },
      {
        id: 'ex4_q4',
        story: 'The red team called the bank\'s IT helpdesk, claimed to be a developer locked out before an urgent deployment, and successfully convinced the helpdesk to reset credentials without following the verification procedure.',
        scenario: 'What social engineering principle made this attack successful?',
        correct: 'a',
        feedback: {
          correct: 'Urgency and authority are the two most powerful social engineering levers. Creating a time-critical scenario ("urgent deployment") bypasses rational evaluation — recipients feel the cost of saying no (delay) outweighs the risk of the unusual request. Security awareness training must specifically address urgency as a red flag.',
          wrong: 'Urgency bypasses rational evaluation. The attacker created a scenario where the helpdesk felt that following procedure would cause immediate business harm. Authority (IT developer) added credibility. Urgency + Authority = highest social engineering success rate.'
        },
        options: [
          { id: 'a', text: 'Urgency — creating time pressure that overrides standard verification procedures' },
          { id: 'b', text: 'Reciprocity — exploiting the human tendency to return favours done for them' },
          { id: 'c', text: 'Social Proof — citing other employees who have "already done this" to normalise the request' },
        ],
        points: 150,
      },
      {
        id: 'ex4_q5',
        story: 'After the engagement, you must design Blue Team countermeasures. The CISO asks which single control would have the highest impact on reducing spear phishing success across the organisation.',
        scenario: 'Which control is most effective against targeted spear phishing?',
        correct: 'b',
        feedback: {
          correct: 'Phishing-resistant MFA (hardware security keys or passkeys using WebAuthn/FIDO2) prevents account takeover even when users are deceived into entering credentials on fake sites — because the authenticator cryptographically binds to the legitimate domain. Security awareness training reduces click rates but cannot prevent all deception. MFA stops the credential from being usable even after theft.',
          wrong: 'Phishing-resistant MFA (FIDO2/WebAuthn hardware keys) is the most effective single control. Even if a user is tricked into entering credentials on a fake site, the hardware key refuses to authenticate against the wrong domain. Awareness training is important but cannot fully prevent all social engineering.'
        },
        options: [
          { id: 'a', text: 'Email filtering with ML-based attachment sandboxing to catch malicious links and files' },
          { id: 'b', text: 'Phishing-resistant MFA (FIDO2/WebAuthn hardware keys) — credentials cannot be replayed on attacker infrastructure' },
          { id: 'c', text: 'Security awareness training with simulated phishing campaigns and annual refreshers' },
        ],
        points: 150,
      },
    ],
  },

);
