// ===== ADULTS EXTRA (5 missions) =====
[
  // 1 — QUIZ: CPF and SingPass Phishing (Hard)
  {
    id: 'adults_new_quiz_1',
    type: 'quiz',
    title: 'SingPass Fortress',
    subtitle: 'Defend Your CPF and Government Credentials',
    icon: '🏛️',
    difficulty: 'Hard',
    xp: 800,
    module: 'identity',
    tags: ['finance', 'general'],
    briefing: 'MISSION BRIEFING: SingPass credentials are the master key to your digital government identity — CPF, tax records, housing grants, medical records. Threat actors invest heavily in stealing them. Your ability to identify and resist these attacks protects your life savings and legal identity. 8 questions. 🔐',
    questions: [
      {
        id: 'anq1_q1',
        story: 'You receive an SMS from "SingPass": "Your SingPass Face Verification has expired. Update it within 48 hours to avoid service disruption. Tap: https://singpass-faceverify-update.com/renew"',
        scenario: 'An SMS from "SingPass" warns about an expired Face Verification and provides a renewal link.',
        correct: 'b',
        feedback: {
          correct: 'Correct. SingPass communications always direct users to the official singpass.gov.sg domain or the SingPass app — never to third-party domains like "singpass-faceverify-update.com". SMS sender names can be spoofed. Always navigate to singpass.gov.sg directly or open the app to check account status.',
          wrong: 'The domain "singpass-faceverify-update.com" is not a government domain (gov.sg). SMS sender names can be spoofed by anyone. All legitimate SingPass updates are done through the official app or singpass.gov.sg — never through SMS links.'
        },
        options: [
          { id: 'a', text: 'Tap the link and complete the verification — 48 hours is not long.' },
          { id: 'b', text: 'Ignore the SMS link and check your SingPass app or singpass.gov.sg directly.' },
          { id: 'c', text: 'Reply to the SMS asking for more information to verify it is genuine.' },
          { id: 'd', text: 'Forward the SMS to a family member to check on your behalf.' }
        ],
        points: 100
      },
      {
        id: 'anq1_q2',
        story: 'You receive a call from "CPF Board". The caller ID shows +65 1800-227-1188 (the real CPF helpline number). The caller says your CPF account has been flagged for suspicious transactions and you must immediately verify by providing your SingPass credentials over the phone.',
        scenario: 'A caller with a spoofed CPF helpline number demands your SingPass credentials to "verify" your account.',
        correct: 'c',
        feedback: {
          correct: 'Caller IDs can be spoofed to display any number, including real government helpline numbers. CPF Board, MAS, SPF and all Singapore government agencies have a strict policy: they will NEVER ask for your SingPass password or OTP over the phone. Hang up and call CPF directly at 1800-227-1188 from your own search to verify.',
          wrong: 'Caller ID spoofing is trivially easy and widely used by scammers. The real CPF Board will never ask for your SingPass password or OTP in a phone call. This is an impersonation scam — hang up and call CPF directly using the number from their official website.'
        },
        options: [
          { id: 'a', text: 'Provide the details — the caller ID shows the real CPF number so it must be genuine.' },
          { id: 'b', text: 'Ask the caller to send an email confirmation before you provide anything.' },
          { id: 'c', text: 'Hang up immediately — CPF never asks for SingPass credentials over the phone. Call CPF back using their published number.' },
          { id: 'd', text: 'Provide your SingPass ID only, not your password.' }
        ],
        points: 100
      },
      {
        id: 'anq1_q3',
        story: null,
        scenario: 'What is the safest way to log into SingPass on a shared or public computer (e.g., at a library or hotel business centre)?',
        correct: 'd',
        feedback: {
          correct: 'Shared computers may have keyloggers installed, cached credentials, or be compromised. The safest approach is to avoid logging into SingPass on shared devices entirely. If absolutely necessary, use your SingPass app on your personal phone with a QR code scan — this means your password is never typed on the shared device.',
          wrong: 'Clearing browser history after use does not protect against keyloggers installed on shared computers. Private browsing prevents local history storage but does not protect against hardware or software keyloggers. The safest option is to only use SingPass on your personal device.'
        },
        options: [
          { id: 'a', text: 'Use private/incognito mode and clear history after.' },
          { id: 'b', text: 'Log in normally but change your password when you get home.' },
          { id: 'c', text: 'Use the shared computer only if it is a government building or library.' },
          { id: 'd', text: 'Avoid it entirely; if essential, use QR code login from your personal phone so no password is typed on the shared device.' }
        ],
        points: 100
      },
      {
        id: 'anq1_q4',
        story: 'Your SingPass app shows an unexpected login notification from an unfamiliar device at 2 AM. You did not make this login.',
        scenario: 'Your SingPass account shows an unauthorised login from an unknown device.',
        correct: 'a',
        feedback: {
          correct: 'An unauthorised SingPass login is a critical security incident. The immediate priorities are: (1) Change your SingPass password NOW. (2) Revoke all active sessions via the SingPass security settings. (3) Contact SingPass helpdesk to report the breach. (4) Check your CPF and tax accounts for any unauthorised changes. Act within minutes — not hours.',
          wrong: 'An unauthorised SingPass login is a major security breach affecting your CPF, tax, medical, and housing records. Waiting until morning could allow an attacker to make changes to your government records. Immediate action is required.'
        },
        options: [
          { id: 'a', text: 'Change your SingPass password immediately, revoke all sessions, and contact the SingPass helpdesk.' },
          { id: 'b', text: 'Wait until morning to call the helpdesk during office hours.' },
          { id: 'c', text: 'Log in from your phone to check if the notification was a glitch.' },
          { id: 'd', text: 'Change only your SingPass password and monitor for further activity.' }
        ],
        points: 100
      },
      {
        id: 'anq1_q5',
        story: null,
        scenario: 'A scammer has obtained your SingPass credentials and is trying to use them right now. Which security feature would STOP the attacker even though they have your correct username and password?',
        correct: 'b',
        feedback: {
          correct: 'SingPass 2FA (either SMS OTP or the SingPass app notification) is the critical second layer. Even with your full credentials, an attacker cannot complete login without the OTP sent to your registered phone number. This is why keeping your registered mobile number updated on SingPass is critical.',
          wrong: 'A strong password is important, but if an attacker already has your credentials, the password strength is irrelevant. SingPass 2FA (SMS OTP or app notification) is what stops them — the code goes only to your registered phone.'
        },
        options: [
          { id: 'a', text: 'Having a strong password with symbols and numbers.' },
          { id: 'b', text: 'SingPass 2FA (SMS OTP to your registered phone or SingPass app approval).' },
          { id: 'c', text: 'Logging into SingPass regularly so they cannot get a session window.' },
          { id: 'd', text: 'Having a complex security question set up on the account.' }
        ],
        points: 100
      },
      {
        id: 'anq1_q6',
        story: 'You receive an email: "Your CPF Special Account (SA) balance is eligible for a one-time investment return boost of 6% additional interest if you authorise the transfer to an approved CPF Investment Scheme partner. Click here to authorise."',
        scenario: 'An email offers a 6% CPF interest boost requiring you to authorise a fund transfer.',
        correct: 'c',
        feedback: {
          correct: 'CPF does not contact members via email with unsolicited investment opportunities. CPF SA already earns 4% p.a. guaranteed — any offer of "additional" returns through an email link is either a scam or an unauthorised scheme. All legitimate CPF investment options are managed through the CPF website after secure SingPass login, not via email links.',
          wrong: 'CPF does not send unsolicited investment opportunity emails. Any offer requiring you to authorise fund movement via an email link is fraudulent — regardless of how official it looks. Check CPF.gov.sg directly for any investment scheme information.'
        },
        options: [
          { id: 'a', text: 'Authorise it — 6% additional interest on top of the existing 4% is an excellent return.' },
          { id: 'b', text: 'Reply to ask for the name of the "approved CPF Investment Scheme partner" first.' },
          { id: 'c', text: 'Delete the email and check CPF.gov.sg directly — CPF does not send unsolicited investment offers by email.' },
          { id: 'd', text: 'Forward the email to your financial advisor to verify.' }
        ],
        points: 100
      },
      {
        id: 'anq1_q7',
        story: null,
        scenario: 'Which of these actions represents the MOST significant risk to your SingPass account security?',
        correct: 'd',
        feedback: {
          correct: 'Using the same password for SingPass as for less secure platforms (email, shopping, social media) is the highest-risk behaviour. When any of those other platforms is breached — a common occurrence — attackers immediately try those credentials on SingPass and other high-value targets. SingPass must have a completely unique password used nowhere else.',
          wrong: 'While all risky behaviours matter, reusing your SingPass password on other platforms is the most dangerous because data breaches on those other platforms automatically compromise your SingPass credentials. SingPass should always have a unique password used exclusively for that service.'
        },
        options: [
          { id: 'a', text: 'Using SingPass on a trusted family member\'s phone.' },
          { id: 'b', text: 'Not logging out after each SingPass session on your personal phone.' },
          { id: 'c', text: 'Using SingPass on your work laptop during lunch.' },
          { id: 'd', text: 'Using the same password for SingPass as for your Gmail or Shopee account.' }
        ],
        points: 100
      },
      {
        id: 'anq1_q8',
        story: 'You discover your SingPass was used to submit a tax return with false income deductions and to apply for a $10,000 government grant — neither of which you did.',
        scenario: 'Your SingPass credentials were used to commit tax fraud and apply for government grants fraudulently.',
        correct: 'b',
        feedback: {
          correct: 'SingPass identity fraud affecting IRAS and government grants requires immediate multi-agency reporting: IRAS must be notified to flag the false return, CPFB/relevant grant agency must be informed of the fraudulent application, and a police report is legally required for identity theft investigations. The SingPass helpdesk will assist with account recovery. Act the same day — not the next business day.',
          wrong: 'Tax fraud and fraudulent grant applications involving your identity require immediate reporting to multiple agencies: IRAS, the grant-issuing agency, SPF (police report), and the SingPass helpdesk. This is a criminal matter requiring a formal police report.'
        },
        options: [
          { id: 'a', text: 'Report only to SingPass helpdesk and wait for their investigation.' },
          { id: 'b', text: 'Report to IRAS, the grant agency, file a police report, and contact the SingPass helpdesk the same day.' },
          { id: 'c', text: 'Engage a lawyer before reporting anything to avoid self-incrimination.' },
          { id: 'd', text: 'Report to IRAS only — they will coordinate with the other agencies.' }
        ],
        points: 100
      }
    ]
  },

  // 2 — SPOT-THREAT: Business Email Compromise (BEC)
  {
    id: 'adults_new_spot_1',
    type: 'spot-threat',
    title: 'BEC Intercept',
    subtitle: 'Identify Every Red Flag in This Work Email Chain',
    icon: '📨',
    difficulty: 'Expert',
    xp: 1200,
    module: 'business-security',
    tags: ['business', 'finance'],
    briefing: 'MISSION: An email chain has been flagged by your company\'s security team as a potential Business Email Compromise (BEC) attack. BEC costs Singapore businesses tens of millions annually. Identify EVERY indicator of compromise in this thread. Your analysis could save the company. 💼',
    totalPoints: 800,
    items: [
      { id: 'item1', type: 'text', text: 'From: ceo.tan@acmecorp-sg.net (Your CEO\'s real email is ceo.tan@acmecorp.com.sg)', isThreat: true, threatDesc: '🔴 DOMAIN SPOOFING: The attacker registered "acmecorp-sg.net" to impersonate the company domain "acmecorp.com.sg". The difference is subtle at a glance. Always verify sender domains letter by letter on financial requests.' },
      { id: 'item2', type: 'text', text: '"Hi [Your Name], I am currently in an urgent board meeting in KL and cannot take calls. I need you to process a confidential wire transfer immediately — $47,000 SGD to a new vendor."', isThreat: true, threatDesc: '🔴 AUTHORITY + URGENCY + UNAVAILABILITY: This combination — a senior executive who "cannot be reached" making an urgent financial request — is the hallmark BEC pattern. The unavailability is designed to prevent you from verifying through normal channels.' },
      { id: 'item3', type: 'text', text: '"This is time-sensitive and confidential. Do NOT discuss this with colleagues or the finance team until it is complete."', isThreat: true, threatDesc: '🔴 SECRECY REQUEST: Instructing you not to discuss with colleagues or finance directly disables your internal verification controls. Legitimate executive instructions never prohibit cross-checking with your own finance team.' },
      { id: 'item4', type: 'text', text: 'Recipient bank: Bank of China account ending 4821, beneficiary: Apex Solutions Pte Ltd', isThreat: false },
      { id: 'item5', type: 'text', text: '"The vendor has requested payment today for a time-sensitive contract. Our legal team has approved this. Please proceed without the usual approval workflow as an exception."', isThreat: true, threatDesc: '🔴 BYPASSING APPROVAL CONTROLS: Any request that explicitly asks you to skip your company\'s payment approval workflow is a critical red flag. These controls exist precisely to prevent unauthorised transfers. No legitimate executive will ask you to bypass them.' },
      { id: 'item6', type: 'text', text: '"I will call you as soon as the meeting is over to confirm. Just process it first."', isThreat: true, threatDesc: '🔴 DEFERRED VERIFICATION: Promising to "call to confirm later" is designed to get the transfer done before you can verify. Legitimate transfers are verified BEFORE processing, not after. The attacker knows a callback will reveal the fraud.' },
      { id: 'item7', type: 'text', text: 'The email contains the company logo, standard email footer, and the CEO\'s title and phone number.', isThreat: true, threatDesc: '🔴 COSMETIC LEGITIMACY: Logos, footers, and contact details can be copy-pasted from any legitimate email. These cosmetic elements cannot verify the sender\'s identity. Domain verification and out-of-band confirmation (calling the CEO\'s actual number directly) are the only reliable checks.' },
      { id: 'item8', type: 'text', text: '"Reply only to this email — do not use any other contact method for this transaction."', isThreat: true, threatDesc: '🔴 CHANNEL ISOLATION: Restricting communication to only the attacker-controlled email address prevents you from discovering the impersonation through any other channel. Legitimate executives never restrict you from calling them directly to verify a $47,000 transfer.' }
    ]
  },

  // 3 — DECISION-TREE: PayNow Bank Scam (Hard)
  {
    id: 'adults_new_dt_1',
    type: 'decision-tree',
    title: 'PayNow Intercept',
    subtitle: 'Identify and Stop a Banking Impersonation Scam',
    icon: '🏦',
    difficulty: 'Hard',
    xp: 800,
    module: 'finance-security',
    tags: ['finance', 'general'],
    briefing: 'MISSION: Banking impersonation scams cost Singaporeans hundreds of millions annually. A scenario is unfolding in real time. Your decisions in the next few steps determine whether you protect your savings or hand them to a scammer. Think carefully. 💰',
    maxScore: 300,
    tree: {
      start: {
        type: 'choice',
        text: 'You receive an SMS from "DBS Bank": "ALERT: Unusual transaction of $3,847 detected on your account. If not authorised, call our fraud line immediately: 6399-1111" The message appears in the same SMS thread as previous genuine DBS messages. 📱',
        choices: [
          { text: 'Call 6399-1111 immediately — the message is in my real DBS thread!', next: 'called_scammer', points: 0 },
          { text: 'Open the DBS digibank app to check if there is actually a transaction', next: 'checked_app', points: 100 },
          { text: 'Google "DBS fraud hotline" to verify the correct number first', next: 'googled_number', points: 100 }
        ]
      },
      called_scammer: {
        type: 'choice',
        text: '"DBS Fraud Team" answers. They confirm "suspicious activity" and say: "To secure your account, we need to verify your identity. Please provide your full name, NRIC, card number, and the OTP we are about to send to your phone." An OTP arrives from "DBS". 📞',
        choices: [
          { text: 'Provide all details — the OTP came from DBS so they must be genuine!', next: 'gave_otp', points: 0 },
          { text: 'Hang up immediately — banks NEVER ask for OTPs over the phone', next: 'hung_up', points: 100 },
          { text: 'Provide your name and NRIC but not the OTP', next: 'partial_info', points: 0 }
        ]
      },
      checked_app: {
        type: 'choice',
        text: 'You open DBS digibank. Your account shows no unusual transactions. Your balance is completely normal. The $3,847 transaction does not exist in your history. 📊',
        choices: [
          { text: 'Call the number in the SMS anyway to be extra safe', next: 'called_scammer', points: 0 },
          { text: 'Report the fake SMS to the DBS anti-scam team at 1800-339-6963 and block the number', next: 'reported_properly', points: 100 }
        ]
      },
      googled_number: {
        type: 'choice',
        text: 'Google shows DBS\'s official fraud hotline is 1800-339-6963 — not 6399-1111. The number in the SMS is a scammer\'s number. Your search also returns an SPF advisory warning about this exact SMS pattern.',
        choices: [
          { text: 'Call DBS at 1800-339-6963 to report the scam SMS', next: 'reported_properly', points: 100 },
          { text: 'Call 6399-1111 anyway to tell them off for scamming', next: 'called_scammer', points: 0 }
        ]
      },
      gave_otp: {
        type: 'outcome',
        text: '❌ The OTP you provided was used to authorise a PayNow transfer of $15,000 from your account. The "DBS OTP" was actually a real DBS transaction OTP — you authorised the transfer yourself by reading it to the scammer. Call DBS immediately at 1800-339-6963 to attempt a recall. File a police report. Recovery is not guaranteed.',
        points: 0
      },
      hung_up: {
        type: 'outcome',
        text: '✅ Critical save. Banks never ask for OTPs over the phone — the OTP is the key to your account. By hanging up before providing it, you stopped the attack cold. Report the number to SPF Anti-Scam Command at 1800-722-6688 and inform DBS through their official channels. The SMS thread spoofing technique is well-documented — share a warning with family members. 🏆',
        points: 0
      },
      partial_info: {
        type: 'outcome',
        text: '❌ Your name and NRIC combined with your card number (if you provided it) is enough for a scammer to attempt account changes. Even without the OTP, you have partially compromised your identity. Contact DBS immediately at 1800-339-6963 and monitor your account for unauthorised changes. Never provide ANY personal details to an incoming call you did not initiate.',
        points: 0
      },
      reported_properly: {
        type: 'outcome',
        text: '✅ Excellent. You verified through official channels, confirmed no actual transaction occurred, and reported the scam through proper channels. Your vigilance may prevent the same SMS from victimising someone else in your contact list. This is exactly the response the SPF Anti-Scam Centre trains people for. 🏆',
        points: 0
      }
    }
  },

  // 4 — QUIZ: Data Breach Response and Work Cybersecurity (Expert)
  {
    id: 'adults_new_quiz_2',
    type: 'quiz',
    title: 'Breach Response Officer',
    subtitle: 'Data Breaches, PDPA, and Workplace Cyber Hygiene',
    icon: '🔒',
    difficulty: 'Expert',
    xp: 1200,
    module: 'business-security',
    tags: ['business', 'tech'],
    briefing: 'MISSION BRIEFING: Singapore\'s PDPA mandates specific breach notification obligations. As a working professional, you are the frontline defence — and the frontline liability. Master both personal and organisational cyber hygiene. 8 questions. 🏢',
    questions: [
      {
        id: 'anq2_q1',
        story: null,
        scenario: 'Under Singapore\'s Personal Data Protection Act (PDPA), when is an organisation legally required to notify the PDPC of a data breach?',
        correct: 'b',
        feedback: {
          correct: 'Under the PDPA 2021 amendments, organisations must notify the PDPC within 3 calendar days of assessing that a breach is notifiable. A breach is notifiable when it involves 500 or more individuals OR is likely to result in significant harm. Affected individuals must also be notified. Non-compliance penalties can reach $1 million.',
          wrong: 'The PDPA mandates notification within 3 calendar days of the organisation assessing the breach as notifiable. Waiting until an internal investigation is complete or only notifying when asked is non-compliant with Singapore law.'
        },
        options: [
          { id: 'a', text: 'Within 72 hours — the same as GDPR requirements in Europe.' },
          { id: 'b', text: 'Within 3 calendar days of assessing the breach is notifiable (500+ individuals or likely significant harm).' },
          { id: 'c', text: 'Only when the PDPC specifically requests notification after becoming aware of the breach.' },
          { id: 'd', text: 'Within 30 days, after completing a full internal forensic investigation.' }
        ],
        points: 150
      },
      {
        id: 'anq2_q2',
        story: 'You receive an email to your work account: "Hi, I am from IT Support. We are upgrading our email servers and need your work email password to migrate your mailbox. Please reply with your current password."',
        scenario: 'IT Support emails requesting your work email password for a server migration.',
        correct: 'c',
        feedback: {
          correct: 'Legitimate IT departments never need your password — they have administrative access to email servers directly. Password requests via email are a social engineering attack regardless of who claims to be asking. Report this to your actual IT security team immediately as a phishing attempt targeting your company.',
          wrong: 'No legitimate IT department needs to ask you for your password. They have admin-level access to email infrastructure. This is a spear-phishing attack targeting your organisation — report it to your real IT security team immediately.'
        },
        options: [
          { id: 'a', text: 'Reply with your password — IT initiated the request so it must be legitimate.' },
          { id: 'b', text: 'Reply asking them to verify their employee ID first.' },
          { id: 'c', text: 'Do not reply and report the email to your actual IT security team as a phishing attempt.' },
          { id: 'd', text: 'Change your password and then reply with the new one so the old one is already invalid.' }
        ],
        points: 150
      },
      {
        id: 'anq2_q3',
        story: null,
        scenario: 'You find a USB drive in your company car park with a label reading "Salary Review Q4 2025 — Confidential". What is the appropriate action?',
        correct: 'd',
        feedback: {
          correct: 'Plugging in unknown USB drives is one of the most well-documented physical social engineering attacks ("USB drop attack"). Attackers intentionally plant labelled drives to trigger curiosity. The drive likely contains malware that activates on insertion. Hand it directly to your IT security team without plugging it into any device.',
          wrong: 'Never plug in an unidentified USB drive into any company device. This is a classic USB drop attack — the enticing label is intentional social engineering. The drive could contain malware that activates on insertion with no visible signs. Give it to IT security without connecting it.'
        },
        options: [
          { id: 'a', text: 'Plug it into your work computer to check if it belongs to a colleague.' },
          { id: 'b', text: 'Plug it into your personal laptop at home so company systems are not at risk.' },
          { id: 'c', text: 'Leave it on your manager\'s desk.' },
          { id: 'd', text: 'Hand it directly to your IT security team without inserting it into any device.' }
        ],
        points: 150
      },
      {
        id: 'anq2_q4',
        story: 'You accidentally sent an email containing a customer\'s full name, NRIC, and home address to the wrong recipient — a vendor who should not have this information.',
        scenario: 'You accidentally disclosed a customer\'s personal data to an unauthorised third party.',
        correct: 'a',
        feedback: {
          correct: 'Under PDPA, an accidental data disclosure to an unauthorised party is a potential notifiable breach. You must immediately notify your Data Protection Officer (DPO) and follow your organisation\'s data breach response procedures. Attempting to recall the email while simultaneously notifying your DPO is the correct immediate response — do not attempt to handle this alone.',
          wrong: 'Sending an NRIC and home address to an unauthorised party is a PDPA data breach. It must be reported internally to your DPO immediately — attempting to handle it quietly puts both you and your company at legal risk. The recipient should also be contacted to request deletion.'
        },
        options: [
          { id: 'a', text: 'Immediately notify your Data Protection Officer and follow breach response procedures, including attempting to recall the email.' },
          { id: 'b', text: 'Send a follow-up email to the vendor asking them to delete the email without telling anyone internally.' },
          { id: 'c', text: 'Wait to see if the vendor notices — they may not have read it.' },
          { id: 'd', text: 'Report it to IT to recall the email, then monitor the situation yourself.' }
        ],
        points: 150
      },
      {
        id: 'anq2_q5',
        story: null,
        scenario: 'Your company\'s IT policy prohibits using personal cloud storage (Google Drive, Dropbox) for work files. A large urgent project means you need to work from home tonight and the company VPN is slow. What is the correct approach?',
        correct: 'c',
        feedback: {
          correct: 'Shadow IT (using unsanctioned personal services for company data) violates most organisations\' data policies and potentially PDPA if customer data is involved. Company data on personal cloud services is outside IT\'s control and backup coverage. Contact IT for an approved remote access solution — even if it takes time, compliance protects both you and your customers.',
          wrong: 'Using personal cloud storage for company files — even temporarily — is shadow IT. If that data includes customer personal data, it is a potential PDPA violation. It also puts company IP outside IT\'s security and backup perimeter. The right answer is to use only approved tools, even if it is less convenient.'
        },
        options: [
          { id: 'a', text: 'Upload the files to your personal Google Drive tonight and delete them after the project.' },
          { id: 'b', text: 'Email the files to your personal email as a temporary workaround.' },
          { id: 'c', text: 'Contact IT to request an approved remote access solution or exception before uploading anything.' },
          { id: 'd', text: 'Use Dropbox since it is more secure than Google Drive for sensitive work files.' }
        ],
        points: 150
      },
      {
        id: 'anq2_q6',
        story: 'You notice a colleague has been printing large volumes of customer records to take home. When asked, they say: "I am working on a quarterly analysis and need the data." Your company normally handles all analysis on internal systems.',
        scenario: 'A colleague is printing and removing large volumes of customer records from the office.',
        correct: 'b',
        feedback: {
          correct: 'Bulk removal of customer records — regardless of the stated reason — is a data security incident that your security or compliance team needs to assess. This could be an insider threat, a policy violation, or an employee being socially engineered to remove data. Reporting to your security team is the appropriate escalation, not confronting the colleague directly.',
          wrong: 'Bulk printing and removal of customer records is a potential data security incident regardless of the stated justification. Proper quarterly analyses are done on internal systems with appropriate access controls. Report it to your security or compliance team — do not attempt to investigate or resolve this yourself.'
        },
        options: [
          { id: 'a', text: 'Ignore it — the colleague explained the reason and seems trustworthy.' },
          { id: 'b', text: 'Report the behaviour to your security or compliance team for assessment.' },
          { id: 'c', text: 'Ask the colleague to show you the specific records they are taking.' },
          { id: 'd', text: 'Send an anonymous email to the colleague warning them about data policies.' }
        ],
        points: 150
      },
      {
        id: 'anq2_q7',
        story: null,
        scenario: 'What is "spear phishing" and why is it more dangerous than standard phishing?',
        correct: 'a',
        feedback: {
          correct: 'Spear phishing uses publicly available information — LinkedIn profiles, company websites, recent news — to craft a highly personalised attack that references your real name, colleagues, projects, or recent events. This personalisation dramatically increases click and credential submission rates because the email feels genuine. Standard phishing uses generic templates sent in bulk.',
          wrong: 'Spear phishing is specifically targeted at an individual or organisation using researched personal details. Because the email references real names, companies, and recent events, recipients are far more likely to trust it than a generic phishing email.'
        },
        options: [
          { id: 'a', text: 'Spear phishing targets a specific individual using researched personal details, making it far more convincing than generic bulk phishing emails.' },
          { id: 'b', text: 'Spear phishing uses more sophisticated malware attachments than standard phishing.' },
          { id: 'c', text: 'Spear phishing only targets senior executives — standard phishing targets everyone.' },
          { id: 'd', text: 'Spear phishing bypasses email filters while standard phishing is caught by spam detection.' }
        ],
        points: 150
      },
      {
        id: 'anq2_q8',
        story: null,
        scenario: 'Your organisation is implementing a "Security Awareness Training" programme. Which metric BEST indicates the programme is actually reducing risk?',
        correct: 'c',
        feedback: {
          correct: 'The most meaningful metric is the measured reduction in phishing simulation click rates over time — this directly measures whether employees are applying what they learned in real-decision scenarios. Training completion rates and quiz scores measure knowledge acquisition, not behavioural change. Reduced simulated click rates show the training is translating into safer behaviour.',
          wrong: 'Training completion rates and quiz scores measure whether people attended and can recall content. The behavioural metric that matters — and the one that directly correlates with reduced breach risk — is whether employees are clicking fewer simulated phishing emails in controlled tests over time.'
        },
        options: [
          { id: 'a', text: '100% training completion rate across all staff.' },
          { id: 'b', text: 'High quiz scores on the post-training assessment.' },
          { id: 'c', text: 'Measurable reduction in phishing simulation click rates over successive test campaigns.' },
          { id: 'd', text: 'Zero IT support tickets related to suspicious emails.' }
        ],
        points: 150
      }
    ]
  },

  // 5 — DECISION-TREE: Investment Scam (Expert)
  {
    id: 'adults_new_dt_2',
    type: 'decision-tree',
    title: 'Investment Trap',
    subtitle: 'Crypto Investment and Pig Butchering Scam',
    icon: '📈',
    difficulty: 'Expert',
    xp: 1200,
    module: 'finance-security',
    tags: ['finance', 'general'],
    briefing: 'MISSION: "Pig butchering" investment scams have cost Singaporeans over $660 million in a single year. The attacker has invested months building trust before making their move. Your decisions determine whether your savings survive. This is the hardest mission in the programme. 🐷',
    maxScore: 300,
    tree: {
      start: {
        type: 'choice',
        text: 'Three months ago you connected with "Sarah Lim" on LinkedIn — a well-presented financial professional profile. Over three months she has been a thoughtful, non-pushy contact. Today she mentions: "I have been using a regulated crypto trading platform my uncle manages. My $10k became $38k in 6 weeks. I am happy to show you the platform if you are curious — no pressure at all 😊" 💼',
        choices: [
          { text: 'Ask to see the platform — 3 months of contact and she is not pushy, this seems genuine', next: 'saw_platform', points: 0 },
          { text: 'Research "Sarah Lim" on LinkedIn and do a reverse image search of her profile photo first', next: 'researched_sarah', points: 100 },
          { text: 'Politely decline any investment discussion — unsolicited investment tips from online contacts are always risky', next: 'declined', points: 50 }
        ]
      },
      saw_platform: {
        type: 'choice',
        text: 'Sarah shares a professional-looking trading platform with real-time charts. She walks you through her account showing a $38,000 balance. She says: "Start small — $2,000. I will guide your trades personally. My uncle monitors all accounts." The platform even has an MAS logo and registration number. 📊',
        choices: [
          { text: 'Invest $2,000 — Sarah has proved her results and the MAS logo is there', next: 'initial_investment', points: 0 },
          { text: 'Verify the platform\'s MAS registration on the actual MAS website before investing anything', next: 'verified_mas', points: 100 },
          { text: 'Invest $500 instead of $2,000 to reduce risk', next: 'invested_small', points: 0 }
        ]
      },
      researched_sarah: {
        type: 'choice',
        text: 'Reverse image search reveals Sarah\'s profile photo belongs to a real Singapore finance professional — whose actual LinkedIn shows she has no connection to crypto trading. The LinkedIn account "Sarah Lim" was created 4 months ago. You find a ScamAlert.sg forum post describing an identical 3-month LinkedIn contact pattern. 🔍',
        choices: [
          { text: 'Block the account, report it to LinkedIn, and submit a report to ScamAlert.sg', next: 'reported_sarah', points: 100 },
          { text: 'Confront Sarah with your findings and see if she can explain', next: 'confronted_sarah', points: 0 }
        ]
      },
      declined: {
        type: 'choice',
        text: 'Sarah says: "That is totally fine! No pressure. I will share my trading screenshots occasionally — maybe you will change your mind when you see the returns 😊" Over the next two weeks she sends screenshots showing her portfolio growing from $38k to $62k.',
        choices: [
          { text: 'The returns are too convincing to ignore — ask to see the platform now', next: 'saw_platform', points: 0 },
          { text: 'Screenshots can be fabricated — maintain the decline and consider reporting the account', next: 'reported_sarah', points: 100 }
        ]
      },
      initial_investment: {
        type: 'choice',
        text: 'You deposited $2,000. Within a week the platform shows your portfolio at $5,800. Sarah says: "You have the talent! To maximise this momentum, the platform recommends adding $10,000. This window closes in 48 hours." She sounds genuinely excited for you. 💹',
        choices: [
          { text: 'Add $10,000 — the $2,000 doubled in a week, momentum is real', next: 'added_more', points: 0 },
          { text: 'Attempt to WITHDRAW the $5,800 first before adding anything more', next: 'tried_withdraw', points: 100 }
        ]
      },
      verified_mas: {
        type: 'choice',
        text: 'You check mas.gov.sg\'s Financial Institutions Directory. The company name on the platform does not appear. The MAS registration number shown on the platform belongs to a different, unrelated company. The platform is fraudulent. 🔎',
        choices: [
          { text: 'Block Sarah, report the fraudulent platform to MAS at 1800-NOR-MONE (1800-626-6336), and submit to ScamAlert.sg', next: 'reported_platform', points: 100 },
          { text: 'Tell Sarah you found the discrepancy and give her a chance to explain', next: 'confronted_sarah', points: 0 }
        ]
      },
      invested_small: {
        type: 'outcome',
        text: '⚠️ Even $500 is now at risk. The platform will show it "growing" to build your confidence before asking for larger amounts. The withdrawal will be blocked when you try to take profits. The amount is small but the trap is set. Try to withdraw immediately and stop all contact with Sarah. Report to ScamAlert.sg.',
        points: 0
      },
      reported_sarah: {
        type: 'outcome',
        text: '✅ Excellent investigative instincts. You identified the stolen photo, the new account, and cross-referenced with ScamAlert.sg before any money changed hands. The LinkedIn report flagged the account for review. Your ScamAlert.sg submission contributed to a wider SPF investigation. No financial loss. 🏆',
        points: 0
      },
      confronted_sarah: {
        type: 'outcome',
        text: '⚠️ Sophisticated scammers have prepared answers for every confrontation. Sarah responds with a compelling explanation and you are less certain than before. Do not engage further — the evidence from your research is conclusive regardless of her response. Block, report, and move on. Engaging only gives them more opportunities to manipulate.',
        points: 0
      },
      reported_platform: {
        type: 'outcome',
        text: '✅ Outstanding due diligence. MAS verification is the single most important check for any investment platform. You found the fraudulent MAS number, reported it to the real MAS, and submitted to ScamAlert.sg. MAS logged the report for their enforcement database. You protected yourself and contributed to stopping others from being victimised. 🏆',
        points: 0
      },
      added_more: {
        type: 'outcome',
        text: '❌ You added $10,000. The platform then shows your total at $47,000. When you attempt to withdraw, a "tax clearance fee" of $4,700 (10%) is demanded. After paying, a "compliance hold" requires another fee. The withdrawal never happens. Total loss: $12,000+. Report to SPF at police.gov.sg and call the Anti-Scam Helpline at 1800-722-6688. The initial $2,000 "profit" was entirely fabricated to build your confidence.',
        points: 0
      },
      tried_withdraw: {
        type: 'outcome',
        text: '✅ Critical test. The withdrawal request is "pending processing" for days, then blocked with a requirement for a "withdrawal tax" of $580. This is the moment the mask slips. Stop all transfers immediately. Report to SPF and the Anti-Scam Helpline (1800-722-6688). The $2,000 is likely lost, but you identified the scam before losing significantly more. The withdrawal test is the most important move you can make on any unverified platform. 🏆',
        points: 0
      }
    }
  }
]
