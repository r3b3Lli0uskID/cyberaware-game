// ═══════════════════════════════════════════════════════════════════════════
// ║  ASEAN REGIONAL SCENARIOS                                               ║
// ║  Covers: Malaysia · Philippines · Thailand · Indonesia · Vietnam · Myanmar ║
// ║  Loaded after scenarios.js — pushes into MISSIONS[group] arrays         ║
// ═══════════════════════════════════════════════════════════════════════════

// ─── MALAYSIA 🇲🇾 ──────────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'my_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'my',
    title: 'Touch \'n Go eWallet Scam',
    subtitle: 'Reload phishing targeting Malaysian commuters',
    icon: '💳',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance', 'social'],
    questions: [
      {
        q: 'You receive a WhatsApp message: "Your Touch\'n Go eWallet will be SUSPENDED in 24 hours. Verify now at: touchngo-secure-verify.com". What do you do?',
        options: [
          'Click the link and verify immediately to avoid suspension',
          'Ignore it — Touch\'n Go never suspends wallets via WhatsApp links',
          'Forward to friends to warn them, then click',
          'Call the number in the message to confirm'
        ],
        answer: 1,
        explanation: 'Touch\'n Go eWallet NEVER sends suspension threats via WhatsApp with third-party links. The domain "touchngo-secure-verify.com" is not official (official: touchngo.com.my). Report scams to MCMC at aduan.skmm.gov.my or call 1800-188-030.'
      },
      {
        q: 'A friend\'s WhatsApp account is sending you a message: "Eh, can help me buy RM50 Touch\'n Go reload pin? I\'ll bank in to you later. Need urgent." What is most likely happening?',
        options: [
          'Your friend genuinely needs help and you should help them',
          'Your friend\'s account was hacked — this is a WhatsApp account takeover scam',
          'This is a legitimate request but you should verify the pin first',
          'Touch\'n Go reload pins cannot be used for scams'
        ],
        answer: 1,
        explanation: 'This is a classic WhatsApp account takeover scam. Scammers hack a real account and message all contacts asking for reload pins or money. Always call your friend on a different number to verify. Never send reload pins to anyone you haven\'t voice-verified.'
      }
    ]
  },
  {
    id: 'my_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'my',
    title: 'PDRM Impersonation Scam',
    subtitle: 'Fake police calls claiming arrest warrants',
    icon: '🚔',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['social', 'general'],
    questions: [
      {
        q: 'You receive an automated call claiming to be from PDRM (Royal Malaysia Police) saying you have an active arrest warrant for money laundering, and must press 1 to speak to an "officer". What should you do?',
        options: [
          'Press 1 — ignoring a police call could make things worse',
          'Hang up — PDRM never contacts suspects by automated phone calls',
          'Give your IC number to clear your name',
          'Transfer money to a "safe account" as instructed'
        ],
        answer: 1,
        explanation: 'PDRM never issues arrest warrant notifications via automated calls or requests money transfers. This is a Macau Scam variant. If you receive such a call, hang up and verify by calling PDRM directly at 03-2266 2222. Never transfer money to a "safe account" — no legitimate authority asks for this.'
      },
      {
        q: 'The scam caller asks you to download an app to "verify your identity" with the police. The app requests access to your banking apps and screen. What is this?',
        options: [
          'A legitimate PDRM identity verification tool',
          'Remote access malware — it will steal your banking credentials',
          'A secure government app — government apps always request full permissions',
          'A standard security check required by Malaysian law'
        ],
        answer: 1,
        explanation: 'Scammers trick victims into installing remote access tools (like AnyDesk or fake apps) that capture banking OTPs and passwords. No government agency requires you to install apps over the phone. Report to BNMTELELINK at 1300-88-5465 or use BNM\'s online complaint form.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'my_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'my',
    title: 'Fake Maybank2U Email',
    subtitle: 'Phishing email impersonating Malaysia\'s largest bank',
    icon: '🏦',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['finance'],
    scenario: {
      format: 'email',
      sender: 'security@maybank2u-alert.com',
      subject: 'URGENT: Your Maybank2U account requires immediate verification',
      body: `<p>Dear Valued Customer,</p>
<p>We have detected <strong>unusual login activity</strong> on your Maybank2U account. To protect your account, your online banking access has been <strong>temporarily restricted</strong>.</p>
<p>To restore your access, please verify your details within <strong>24 hours</strong>:</p>
<p><a href="http://maybank2u-secure-login.com/verify">Click here to verify your account →</a></p>
<p>You will need to provide:</p>
<ul>
  <li>Your NRIC / Passport Number</li>
  <li>Your TAC (Transaction Authorisation Code)</li>
  <li>Your online banking password</li>
</ul>
<p>Failure to verify within 24 hours will result in permanent account suspension.</p>
<p>Thank you for banking with Maybank.</p>
<p>Maybank Security Team<br>www.maybank2u.com.my</p>`,
      threats: [
        { id: 't1', text: 'security@maybank2u-alert.com', explanation: 'Fake domain. Official Maybank emails come from @maybank.com — never "@maybank2u-alert.com".' },
        { id: 't2', text: 'maybank2u-secure-login.com', explanation: 'Phishing domain. Official Maybank2U website is maybank2u.com.my — never a hyphenated third-party domain.' },
        { id: 't3', text: 'Your TAC (Transaction Authorisation Code)', explanation: 'Maybank NEVER asks for your TAC via email. TACs are one-time codes for authorising transactions — sharing one gives the scammer full control of a transaction.' },
        { id: 't4', text: 'permanent account suspension', explanation: 'Artificial urgency and threats are classic phishing tactics to prevent you from thinking carefully.' }
      ],
      safeElements: ['The Maybank logo in the email header (could be copied, but not a threat indicator by itself)', 'Generic greeting — banks typically address you by name, making this more suspicious']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'my_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'my',
    title: 'Shopee/Lazada Fake Seller Scam',
    subtitle: 'E-commerce fraud targeting young Malaysian shoppers',
    icon: '🛍️',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['social', 'finance'],
    questions: [
      {
        q: 'A "seller" on Shopee messages you directly asking you to pay RM200 via DuitNow transfer to a personal account instead of through the Shopee platform, claiming it\'s cheaper. What should you do?',
        options: [
          'Pay via DuitNow — it\'s faster and you save on fees',
          'Refuse — always pay through Shopee\'s official checkout for buyer protection',
          'Ask for a discount first, then pay via DuitNow',
          'Send half now and half when the item arrives'
        ],
        answer: 1,
        explanation: 'Paying outside Shopee\'s platform means you lose all buyer protection. Once you transfer via DuitNow to a personal account, the money is gone and Shopee cannot recover it. Legitimate sellers never ask to bypass the platform payment. Report suspicious sellers using Shopee\'s Report function.'
      }
    ]
  }
);

// ─── PHILIPPINES 🇵🇭 ──────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'ph_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'ph',
    title: 'GCash OTP Phishing',
    subtitle: 'Account takeover targeting the Philippines\' #1 e-wallet',
    icon: '📱',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance', 'social'],
    questions: [
      {
        q: 'You receive an SMS: "GCash Alert: Your account is being accessed from a new device. Reply with your 6-digit OTP to cancel this: [654321]". You did not initiate any login. What do you do?',
        options: [
          'Reply with the OTP to cancel the unauthorized access',
          'Never reply — OTPs should NEVER be shared with anyone, even GCash',
          'Forward the SMS to GCash customer support',
          'Delete the app and reinstall it'
        ],
        answer: 1,
        explanation: 'GCash will NEVER ask you to reply to an SMS with your OTP. The OTP displayed in this scam SMS is the code the scammer needs to take over your account. Sharing it gives them complete access. If you suspect unauthorized access, open the GCash app directly and change your MPIN. Report to GCash Help at help.gcash.com.'
      },
      {
        q: 'A Facebook post says "GCash is giving away ₱5,000 to 1,000 lucky winners! Click the link and enter your GCash number and MPIN to claim." What is this?',
        options: [
          'A legitimate GCash promo — they run giveaways regularly',
          'A phishing scam — GCash never asks for your MPIN outside the official app',
          'A legit promo if the Facebook page has a blue checkmark',
          'Real if shared by more than 1,000 people'
        ],
        answer: 1,
        explanation: 'GCash NEVER asks for your MPIN anywhere outside the official app. Your MPIN is equivalent to your ATM PIN — never share it. Fake pages can have many likes and shares. Always verify promos at gcash.com or the official GCash Facebook page (verified with blue checkmark from Meta).'
      }
    ]
  },
  {
    id: 'ph_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'ph',
    title: 'SIM Swap Attack',
    subtitle: 'How criminals steal your BDO/BPI account via your phone number',
    icon: '📲',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['finance', 'tech'],
    questions: [
      {
        q: 'Your phone suddenly loses all signal for several hours. Then you receive email alerts that your BDO bank account had multiple OTP requests. What most likely happened?',
        options: [
          'Your phone provider is having a network outage',
          'A SIM swap attack — criminals convinced your telco to transfer your number to their SIM',
          'Your phone is defective and should be replaced',
          'Your bank account is being upgraded automatically'
        ],
        answer: 1,
        explanation: 'A SIM swap attack is when criminals use your personal information (NRIC, birthday, address — often bought from data breaches) to convince a telco to transfer your phone number to a new SIM they control. They then receive your bank OTPs and drain your account. If your phone loses signal unexpectedly, immediately call your bank and telco.'
      },
      {
        q: 'To protect against SIM swap attacks on your bank account, which measure is MOST effective?',
        options: [
          'Using a strong password on your phone',
          'Enabling email-based 2FA or security key instead of SMS OTP where available',
          'Never sharing your phone number online',
          'Using a different phone for banking'
        ],
        answer: 1,
        explanation: 'SMS OTP is vulnerable to SIM swap. Where possible, use authenticator apps (Google Authenticator, Authy) or email-based OTPs instead. The BSP (Bangko Sentral ng Pilipinas) has directed banks to offer stronger authentication. Contact your bank to enable non-SMS 2FA options.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'ph_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'ph',
    title: 'Fake BDO SMS Alert',
    subtitle: 'Smishing attack impersonating BDO Unibank',
    icon: '💬',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['finance'],
    scenario: {
      format: 'sms',
      sender: 'BDO-ALERT',
      body: `BDO Bank: Your account ending 4821 has been LOCKED due to suspicious activity. Verify now to unlock: http://bdo-ph-unlock.net/verify?ref=4821

Reply STOP to unsubscribe.`,
      threats: [
        { id: 't1', text: 'http://bdo-ph-unlock.net/verify', explanation: 'Fake domain. Official BDO website is bdo.com.ph. Any link not on bdo.com.ph is a phishing site.' },
        { id: 't2', text: 'LOCKED due to suspicious activity', explanation: 'Urgency tactic — designed to make you act without thinking. Real BDO would ask you to call their hotline (02-8631-8000) or visit a branch.' },
        { id: 't3', text: 'Reply STOP to unsubscribe', explanation: 'Replying to the SMS confirms your number is active, leading to more scam attempts. Do not reply.' }
      ],
      safeElements: ['The "BDO-ALERT" sender ID can be spoofed by anyone — sender IDs are not verified in the Philippines SMS system']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'ph_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'ph',
    title: 'Facebook Marketplace Scam',
    subtitle: '"Send GCash first" fraud targeting Filipino teens',
    icon: '🛒',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['social', 'finance'],
    questions: [
      {
        q: 'You find a brand new iPhone listed on Facebook Marketplace for ₱8,000 (half price). The seller says they\'re in another city and asks you to send full payment via GCash before they ship. What should you do?',
        options: [
          'Send the GCash payment — it\'s a great deal and you can trust Facebook users',
          'Decline — if you can\'t inspect the item or use COD/meetup, it\'s likely a scam',
          'Send half now and half when it arrives',
          'Ask for more photos as proof before sending full payment'
        ],
        answer: 1,
        explanation: 'Prices far below market value are a major red flag. Legitimate sellers of high-value items use Cash on Delivery (COD) or in-person meetups. Sending GCash before receiving an item offers zero protection — the money cannot be recovered once sent. Always trade locally and in person for expensive items on Facebook Marketplace.'
      }
    ]
  }
);

// ─── THAILAND 🇹🇭 ──────────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'th_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'th',
    title: 'PromptPay QR Fraud',
    subtitle: 'Merchant QR code swapping at Thai businesses',
    icon: '📲',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance'],
    questions: [
      {
        q: 'You scan a PromptPay QR code at a street food stall in Bangkok. Before paying, your banking app shows the recipient name as "Somchai Jaidee" but the stall owner\'s sign says "Malee Kitchen". What should you do?',
        options: [
          'Pay anyway — the name mismatch is probably a business name difference',
          'Stop and verify — the QR may have been swapped by a scammer',
          'Pay a smaller amount first to test',
          'Only pay cash if there\'s a name mismatch'
        ],
        answer: 1,
        explanation: 'QR swapping is a real attack in Thailand — scammers place their own QR code over a merchant\'s legitimate code. Always verify the recipient name displayed by your banking app matches the business before confirming payment. If unsure, pay cash or ask the merchant to confirm their registered PromptPay name.'
      },
      {
        q: 'You receive a PromptPay transfer request for ฿50,000 via a link from someone claiming to be from the Revenue Department for a "tax refund process fee". What is this?',
        options: [
          'A legitimate government fee — pay it to receive your refund',
          'An advance fee scam — the Revenue Department never collects fees via PromptPay links',
          'A legitimate request if it comes via LINE official account',
          'Safe to pay if the amount seems reasonable'
        ],
        answer: 1,
        explanation: 'The Thai Revenue Department (กรมสรรพากร) never collects fees via PromptPay payment links sent via messaging apps. This is a classic advance-fee fraud. Report to ETDA (Electronic Transactions Development Agency) at 02-123-1234 or the DSI cybercrime division.'
      }
    ]
  },
  {
    id: 'th_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'th',
    title: 'LINE Account Phishing',
    subtitle: 'Fake "LINE Account Suspended" messages in Thailand',
    icon: '💚',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['social'],
    questions: [
      {
        q: 'You receive a LINE message from "LINE Official" saying your account will be deleted in 48 hours unless you verify at line-th-account-verify.com. The message looks exactly like LINE\'s green brand. What is this?',
        options: [
          'A legitimate LINE security check — LINE regularly verifies accounts',
          'A phishing attack — LINE Official messages come from verified accounts (green shield), not external links',
          'Real if the LINE account has many followers',
          'Legitimate if it arrives on a weekday during business hours'
        ],
        answer: 1,
        explanation: 'Official LINE notifications appear within the LINE app from verified accounts (marked with a green shield badge). LINE never sends account suspension notices via links to external websites. Always check if the sender account has the official green shield verification. Report to LINE at line.me/th.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'th_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'th',
    title: 'Fake LINE Suspension Message',
    subtitle: 'Identifying a phishing LINE message',
    icon: '💬',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['social'],
    scenario: {
      format: 'sms',
      sender: 'LINE-Security',
      body: `LINE Thailand: Your account has been flagged for unusual activity and will be SUSPENDED within 24 hours.

To keep your account: https://line-th-verify-account.com/confirm

Customer Service: 02-678-1234`,
      threats: [
        { id: 't1', text: 'line-th-verify-account.com', explanation: 'Fake domain. All LINE official links use line.me — never a third-party domain with "verify-account" in it.' },
        { id: 't2', text: 'SUSPENDED within 24 hours', explanation: 'Classic urgency tactic to prevent rational thinking. LINE does not suspend accounts via SMS.' },
        { id: 't3', text: '02-678-1234', explanation: 'Fake customer service number. Official LINE Thailand support is through the Help Center at help.line.me — never a phone number in an SMS.' }
      ],
      safeElements: ['The "LINE-Security" sender ID — sender IDs can be spoofed freely in Thailand\'s SMS system']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'th_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'th',
    title: 'Fake K-Pop Gift Card Scam',
    subtitle: 'Impersonating celebrities on LINE to scam Thai fans',
    icon: '🎤',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['social'],
    questions: [
      {
        q: 'A LINE account with your favourite K-pop idol\'s profile photo messages you: "I\'m doing a fan giveaway! Send me 5 × ฿200 True Money gift card codes and I\'ll send you signed merchandise and a video call." What is this?',
        options: [
          'Possibly real — celebrities do fan giveaways on social media',
          'A scam — celebrities never ask fans to send gift card codes',
          'Real if the account has many followers and posts',
          'Legitimate if the profile photo matches the celebrity\'s official page'
        ],
        answer: 1,
        explanation: 'No celebrity ever asks fans to send gift card codes. Gift card codes are untraceable once sent — it\'s the same as handing someone cash. Scammers use celebrity photos as profile pictures to build false trust. Real celebrity accounts are verified on official platforms. Never send gift card codes to anyone online.'
      }
    ]
  }
);

// ─── INDONESIA 🇮🇩 ──────────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'id_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'id',
    title: 'GoPay/OVO Reward Phishing',
    subtitle: 'Fake bonus reward scams targeting Indonesian e-wallet users',
    icon: '🟢',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance', 'social'],
    questions: [
      {
        q: 'You receive a WhatsApp from an unknown number: "Selamat! Anda terpilih mendapatkan reward GoPay Rp 500.000! Klik link berikut untuk klaim hadiah: gopay-reward-claim.site/klaim". What do you do?',
        options: [
          'Click the link immediately before the reward expires',
          'Ignore it — GoPay never distributes rewards via random WhatsApp messages with third-party links',
          'Share it with friends so they can also claim',
          'Click only if the link shows "gopay" in the URL'
        ],
        answer: 1,
        explanation: 'GoPay and OVO never distribute rewards via WhatsApp messages with third-party links. The domain "gopay-reward-claim.site" is not official (official: gojek.com/gopay). These links typically steal your GoPay login credentials or install malware. Report to Gojek at 1500-258 or ojk.go.id for financial fraud.'
      },
      {
        q: 'An app on the Play Store is called "Dana Kilat - Pinjaman Online Cepat" and requests permission to access your SMS, contacts, photos, and location before approving a Rp 3 juta loan. What is dangerous about this?',
        options: [
          'Nothing — loan apps need personal data to assess creditworthiness',
          'These are illegal "pinjol" permissions — they\'ll use your contacts to harass you if you miss a payment',
          'The app name sounds suspicious but the permissions are standard',
          'Only the location permission is concerning'
        ],
        answer: 1,
        explanation: 'Illegal online lending apps (pinjol ilegal) are a major problem in Indonesia. They harvest all your contacts and photos, then harass or threaten your friends and family if you miss a payment. Licensed lending apps (OJK-registered) do not need excessive permissions. Check if a lending app is OJK-licensed at ojk.go.id/id/kanal/iknb/fintech.'
      }
    ]
  },
  {
    id: 'id_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'id',
    title: 'Illegal Pinjol Malware',
    subtitle: 'Protecting yourself from predatory lending apps',
    icon: '📋',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['finance', 'tech'],
    questions: [
      {
        q: 'Your friend downloaded a loan app from a WhatsApp link (not from Play Store) and the app harvested their entire contact list and photos. The app is now threatening to send embarrassing photos to their contacts unless they repay at 200% interest. What should they do?',
        options: [
          'Pay the amount immediately to stop the harassment',
          'Report to OJK at 157, Kominfo, and the local police — do not pay',
          'Uninstall the app — this will solve the problem',
          'Negotiate with the app\'s customer service to reduce the rate'
        ],
        answer: 1,
        explanation: 'Paying only encourages more demands. This is illegal extortion. The correct steps are: (1) Screenshot all threats as evidence, (2) Report to OJK hotline 157 or ojk.go.id, (3) Report to Kominfo at aduankonten.id, (4) File a police report (Pasal 29 UU ITE and Pasal 368 KUHP cover this). Tell affected contacts to ignore any messages from the app.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'id_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'id',
    title: 'Fake BCA Bank Email',
    subtitle: 'KYC update phishing targeting BCA customers',
    icon: '🏦',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['finance'],
    scenario: {
      format: 'email',
      sender: 'no-reply@bca-update-kyc.com',
      subject: 'Pemberitahuan Penting: Pembaruan Data KYC Anda Harus Dilakukan Sebelum 30 Hari',
      body: `<p>Yth. Nasabah BCA yang terhormat,</p>
<p>Sesuai peraturan OJK No. 12/2021, seluruh nasabah BCA wajib memperbarui data KYC (Know Your Customer) paling lambat <strong>30 hari</strong> sejak email ini dikirimkan.</p>
<p>Kegagalan memperbarui data akan mengakibatkan:</p>
<ul>
  <li>Pemblokiran sementara rekening</li>
  <li>Pembatasan transaksi KlikBCA</li>
</ul>
<p>Klik link berikut untuk memperbarui data KYC Anda:<br>
<a href="http://bca-kyc-update.net/verifikasi">http://bca-kyc-update.net/verifikasi</a></p>
<p>Hormat kami,<br>Bank Central Asia</p>`,
      threats: [
        { id: 't1', text: 'no-reply@bca-update-kyc.com', explanation: 'Palsu (Fake). Email resmi BCA menggunakan domain @bca.co.id, bukan domain pihak ketiga seperti "bca-update-kyc.com".' },
        { id: 't2', text: 'bca-kyc-update.net', explanation: 'Domain phishing. Website resmi BCA adalah bca.co.id dan klikbca.com — tidak pernah .net atau domain yang berisi "kyc-update".' },
        { id: 't3', text: '30 hari sejak email ini dikirimkan', explanation: 'Taktik urgensi untuk membuat Anda bertindak tergesa-gesa. BCA mengirim pemberitahuan KYC melalui cabang atau aplikasi resmi, bukan email dengan batas waktu mendesak.' }
      ],
      safeElements: ['Referensi peraturan OJK bisa diverifikasi di ojk.go.id — jangan percaya klaim regulasi dalam email tanpa verifikasi langsung']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'id_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'id',
    title: 'Flash Sale Palsu Tokopedia',
    subtitle: 'Fake flash sale scams targeting Indonesian teen shoppers',
    icon: '⚡',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['social', 'finance'],
    questions: [
      {
        q: 'Kamu menerima DM Instagram dari toko yang mengaku sebagai Tokopedia Official: "Flash Sale 90% OFF iPhone 15! Hanya 10 unit. Transfer sekarang ke rekening kami sebelum kehabisan!" Apa yang harus kamu lakukan?',
        options: [
          'Transfer segera karena flash sale hanya berlangsung sebentar',
          'Abaikan — Tokopedia tidak pernah menjual produk via DM Instagram dengan transfer langsung ke rekening',
          'Transfer setengah harga dulu sebagai tanda jadi',
          'Tanya teman-teman apakah mereka pernah beli dari toko ini'
        ],
        answer: 1,
        explanation: 'Tokopedia, Shopee, dan Lazada TIDAK PERNAH menjual produk via direct message dengan transfer ke rekening pribadi. Semua transaksi resmi dilakukan di dalam platform. Diskon 90% untuk produk baru adalah tanda penipuan yang jelas. Laporkan akun penipu melalui fitur Report di Instagram.'
      }
    ]
  }
);

// ─── VIETNAM 🇻🇳 ─────────────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'vn_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'vn',
    title: 'MoMo Prize Phishing',
    subtitle: 'Fake prize notifications targeting MoMo wallet users',
    icon: '🎁',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance', 'social'],
    questions: [
      {
        q: 'Bạn nhận tin nhắn SMS: "MoMo: Chúc mừng! Số điện thoại của bạn trúng thưởng 50.000.000 VNĐ. Truy cập momo-thuong.net để nhận quà." What should you do?',
        options: [
          'Truy cập link ngay để nhận thưởng trước khi hết hạn',
          'Xóa tin nhắn — MoMo không thông báo trúng thưởng qua SMS với link bên thứ ba',
          'Chia sẻ cho bạn bè để họ cũng có cơ hội trúng',
          'Truy cập nếu link có chứa từ "momo" trong URL'
        ],
        answer: 1,
        explanation: 'MoMo (M_Service) never announces prizes via SMS with third-party links. The domain "momo-thuong.net" is not official (official: momo.vn). These links steal your MoMo login or install malware. MoMo notifies winners through official app notifications only. Report to VNCERT at vncert.gov.vn or call 1900 636 568.'
      },
      {
        q: 'Một người lạ trên Zalo nói họ là nhân viên ngân hàng Vietcombank và cần số OTP của bạn để "xác minh giao dịch hoàn tiền". Bạn nên làm gì?',
        options: [
          'Cung cấp OTP vì đây là nhân viên ngân hàng',
          'Từ chối — ngân hàng không bao giờ yêu cầu OTP qua Zalo hay điện thoại',
          'Hỏi thêm thông tin cá nhân của họ trước khi cung cấp',
          'Cung cấp nếu họ biết số tài khoản của bạn'
        ],
        answer: 1,
        explanation: 'Không có ngân hàng nào tại Việt Nam yêu cầu OTP qua Zalo, điện thoại hay bất kỳ kênh nào bên ngoài ứng dụng chính thức. OTP là mã bảo mật dùng một lần — cung cấp OTP cho bất kỳ ai là trao quyền kiểm soát tài khoản cho họ. Gọi ngay hotline Vietcombank: 1900 545 413 nếu nghi ngờ.'
      }
    ]
  },
  {
    id: 'vn_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'vn',
    title: 'Zalo Account Hijacking',
    subtitle: 'Friend impersonation scams via compromised Zalo accounts',
    icon: '💬',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['social'],
    questions: [
      {
        q: 'Tài khoản Zalo của bạn thân nhắn tin: "Mình đang kẹt tiền, chuyển cho mình 2 triệu qua MoMo được không? Mình trả lại sau." Nhưng bạn thấy tin nhắn có vẻ lạ. Bạn nên làm gì?',
        options: [
          'Chuyển tiền vì đây là bạn thân, không có lý do gì phải nghi ngờ',
          'Gọi điện trực tiếp cho bạn thân đó để xác nhận trước khi chuyển tiền',
          'Hỏi thêm câu hỏi bảo mật qua Zalo để xác minh',
          'Chuyển một nửa số tiền trước để kiểm tra'
        ],
        answer: 1,
        explanation: 'Tài khoản Zalo của bạn bè có thể bị hack. Kẻ lừa đảo kiểm soát tài khoản và nhắn tiền cấp cho tất cả danh bạ. Cách an toàn DUY NHẤT là gọi điện trực tiếp (voice call) cho người đó trước khi chuyển bất kỳ khoản tiền nào. Nếu tài khoản Zalo của bạn bị hack, báo ngay cho Zalo và đổi mật khẩu tất cả tài khoản dùng cùng email/SĐT.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'vn_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'vn',
    title: 'Tin nhắn giả Vietcombank',
    subtitle: 'SMS phishing impersonating Vietnam\'s largest bank',
    icon: '💬',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['finance'],
    scenario: {
      format: 'sms',
      sender: 'Vietcombank',
      body: `Vietcombank: Tai khoan cua ban da bi han che do hoat dong bat thuong. Vui long xac minh ngay tai: https://vcb-verify.net/xacminh de tranh bi khoa tai khoan.

Ho tro: 1800-1234`,
      threats: [
        { id: 't1', text: 'vcb-verify.net', explanation: 'Fake domain. The official Vietcombank website is vietcombank.com.vn — never a ".net" domain or a hyphenated third-party site.' },
        { id: 't2', text: 'bi han che do hoat dong bat thuong', explanation: 'Fear tactic (account restriction). Vietcombank contacts customers via official app notifications or in-branch, not via SMS links.' },
        { id: 't3', text: '1800-1234', explanation: 'Fake hotline number. Official Vietcombank hotline is 1900 545 413. Always verify hotline numbers at vietcombank.com.vn.' }
      ],
      safeElements: ['The "Vietcombank" sender ID can be spoofed — SMS sender names are not verified in Vietnam']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'vn_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'vn',
    title: 'Việc làm online giả mạo',
    subtitle: 'Fake "work from home" job scams targeting Vietnamese students',
    icon: '💼',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['social', 'finance'],
    questions: [
      {
        q: 'Bạn thấy quảng cáo Zalo: "Tuyển cộng tác viên online, làm việc tại nhà 2-3h/ngày thu nhập 5-10 triệu VNĐ/tháng. Chỉ cần điện thoại. Không yêu cầu kinh nghiệm." Đây có phải cơ hội việc làm thật không?',
        options: [
          'Có thể thật — nhiều công việc online không cần kinh nghiệm',
          'Rất có thể là lừa đảo — thu nhập cao bất thường và yêu cầu thấp là dấu hiệu đỏ',
          'Thật nếu công ty có địa chỉ văn phòng cụ thể',
          'Thật nếu nhiều người đã làm và review tốt trên mạng'
        ],
        answer: 1,
        explanation: 'Đây là dấu hiệu điển hình của lừa đảo việc làm online ở Việt Nam. Các công việc thật không trả 5-10 triệu/tháng cho 2-3 giờ/ngày không cần kỹ năng. Bước tiếp theo thường là yêu cầu bạn "đặt cọc" hoặc "mua hàng mẫu" để nhận hoa hồng — tiền đó bạn sẽ mất. Kiểm tra công ty tại Cổng thông tin quốc gia dangkykinhdoanh.gov.vn trước khi ứng tuyển.'
      }
    ]
  }
);

// ─── MYANMAR 🇲🇲 ──────────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'mm_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'mm',
    title: 'KBZPay Prize SMS Scam',
    subtitle: 'Fake prize notifications targeting KBZPay wallet users',
    icon: '📱',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance', 'social'],
    questions: [
      {
        q: 'You receive an SMS: "KBZPay: Congratulations! Your number won 500,000 MMK. To claim, verify your account at kbzpay-prize.com and enter your PIN." What should you do?',
        options: [
          'Visit the link quickly before the prize expires',
          'Delete the SMS — KBZPay never announces prizes via SMS with external links',
          'Share with friends so they can try too',
          'Visit only if the link contains "kbzpay" in the name'
        ],
        answer: 1,
        explanation: 'KBZPay (KBZ Bank\'s digital wallet) never announces prizes via SMS with third-party links. The domain "kbzpay-prize.com" is not official (official: kbzpay.com). Entering your PIN on a fake site gives scammers full access to your wallet. Report to KBZPay at 09-969-696-969 or kbzpay.com.'
      }
    ]
  },
  {
    id: 'mm_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'mm',
    title: 'Telegram Job Scam Compound',
    subtitle: 'Recognising fake overseas job offers leading to scam operations',
    icon: '⚠️',
    difficulty: 'Hard',
    xp: 200,
    tags: ['social', 'general'],
    questions: [
      {
        q: 'A contact on Telegram offers you a "customer service" job in Thailand or Cambodia with a salary of $1,500-$3,000 USD/month, free accommodation, and transportation arranged. They ask for your passport details immediately. What are the serious red flags here?',
        options: [
          'No red flags — overseas jobs pay well and provide accommodation',
          'Multiple red flags — this matches the profile of scam compound recruitment',
          'Only the passport request is concerning; the job itself sounds real',
          'The job is real but the salary is too low for overseas work'
        ],
        answer: 1,
        explanation: 'This matches the exact recruitment pattern used for cyber scam compound operations in Southeast Asia. Victims are transported to compounds in Myanmar border regions, Thailand, or Cambodia, have their documents confiscated, and are forced to conduct online fraud. Warning signs: unusually high pay, job via Telegram only, request for passport details immediately, transportation "arranged" by employer. If approached like this, contact the Myanmar police or the IOM (International Organization for Migration) hotline.'
      },
      {
        q: 'Someone from your village who went overseas for one of these "jobs" calls you and asks you to send your friend\'s phone number because "there are more openings". What is happening?',
        options: [
          'Your friend found a good job and wants to share the opportunity',
          'Your friend is being forced to recruit others — this is a warning that they are trapped',
          'This is a legitimate referral program — companies pay bonuses for referrals',
          'Your friend is helping the company find qualified candidates'
        ],
        answer: 1,
        explanation: 'In scam compound operations, existing victims are often forced to recruit more people to meet quotas, or risk punishment. A call asking you to recruit friends is a major distress signal. Contact local authorities, the Myanmar National Human Rights Commission, or international organisations like IJM (International Justice Mission) if you believe someone is trapped.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'mm_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'mm',
    title: 'Fake Wave Money SMS',
    subtitle: 'Account lockout phishing targeting Wave Money users',
    icon: '💬',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance'],
    scenario: {
      format: 'sms',
      sender: 'WaveMoney',
      body: `Wave Money: Your account has been locked due to 3 failed PIN attempts. Unlock now to avoid permanent suspension: http://wave-money-unlock.net/mm

Contact: 09-111-222-333`,
      threats: [
        { id: 't1', text: 'wave-money-unlock.net', explanation: 'Fake domain. Official Wave Money website is wavemoney.com.mm — never a ".net" domain with "unlock" in the URL.' },
        { id: 't2', text: 'permanent suspension', explanation: 'Urgency and fear tactic. Wave Money does not threaten permanent suspension via SMS.' },
        { id: 't3', text: '09-111-222-333', explanation: 'Fake support number. Official Wave Money customer service is 01-394-849. Always verify contact numbers at wavemoney.com.mm.' }
      ],
      safeElements: ['The "WaveMoney" sender name can be spoofed by anyone sending bulk SMS in Myanmar']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'mm_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'mm',
    title: 'Telegram Investment Scam',
    subtitle: 'Fake crypto investment channels targeting Myanmar youth',
    icon: '📈',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['finance', 'social'],
    questions: [
      {
        q: 'A Telegram channel with 50,000 members posts daily "proof" of profits — screenshots of trading accounts showing 300-500% returns per month. They invite you to join their "VIP group" for 50,000 MMK to access their "guaranteed signals". What is this?',
        options: [
          'A legitimate investment group — large membership means it\'s trustworthy',
          'A scam — guaranteed high returns and pay-to-access "signals" are classic fraud',
          'Real if the screenshots show real broker platforms',
          'Legitimate if the admin has many positive reviews in the group'
        ],
        answer: 1,
        explanation: 'No investment can "guarantee" 300-500% monthly returns. This is a classic "pig butchering" (ရင်းနှီးမြှုပ်နှံမှုလိမ်လည်မှု) or signal group scam. Paid "VIP groups" collect entry fees then disappear or lead you into fake trading platforms that steal your deposits. In Myanmar, report to the Financial Regulatory Department or the Computer Crime Investigation Division of the Myanmar Police Force.'
      }
    ]
  }
);
