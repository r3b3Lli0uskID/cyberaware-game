// ═══════════════════════════════════════════════════════════════════════════
// ║  APAC REGIONAL SCENARIOS                                                ║
// ║  Covers: Japan · South Korea · Australia · New Zealand · India · China  ║
// ║  Loaded after scenarios-asean.js — pushes into MISSIONS[group] arrays   ║
// ═══════════════════════════════════════════════════════════════════════════

// ─── JAPAN 🇯🇵 ──────────────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'jp_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'jp',
    title: 'Sagawa Delivery Phishing SMS',
    subtitle: 'Fake parcel notification targeting Japanese smartphone users',
    icon: '📦',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['phishing', 'mobile'],
    questions: [
      {
        q: 'You receive an SMS: "【佐川急便】お荷物のお届けに上がりましたが不在のためお持ち帰りました。下記よりご確認ください。http://sagawa-deliver-notice.com" — What should you do?',
        options: [
          'Click the link to reschedule delivery',
          'Delete it — Sagawa\'s official tracking is at sagawa-exp.co.jp, not a hyphenated third-party domain',
          'Reply STOP to unsubscribe from delivery notifications',
          'Forward to friends who may also be expecting parcels'
        ],
        answer: 1,
        explanation: 'This is a "宅配便不在通知詐欺" (fake delivery notification scam). Sagawa Express only contacts you via sagawa-exp.co.jp. Fake links lead to pages that steal your credit card info or install malware. Report to IPA\'s Security Center (ipafaq.ipa.go.jp) or call the National Consumer Affairs Center at 188.'
      },
      {
        q: 'After clicking a fake delivery link, a popup says your iPhone has a virus and you must call a "support number" immediately. What is this?',
        options: [
          'A genuine Apple security alert — call the number immediately',
          'A tech support scam — no website can scan your iPhone for viruses',
          'A Japan Post security verification step',
          'A legitimate warning from your carrier (NTT Docomo / SoftBank / au)'
        ],
        answer: 1,
        explanation: 'No website can detect viruses on your iPhone — iOS does not grant browsers that access. This is a "サポート詐欺" (tech support scam). Calling the number connects you to scammers who charge thousands of yen for fake fixes. Close the browser tab, clear your browser cache, and report to IPA\'s Security Center.'
      }
    ]
  },
  {
    id: 'jp_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'jp',
    title: 'LINE Account Takeover',
    subtitle: 'Phishing attacks targeting Japan\'s dominant messaging app',
    icon: '💬',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['social', 'account'],
    questions: [
      {
        q: 'A LINE friend sends you: "急いでいて困ってる！コンビニでiTunesカード3万円分買って番号送ってくれない？後で必ず返す". What is happening?',
        options: [
          'Your friend genuinely needs help — you should buy the cards',
          'Your friend\'s LINE account has been hijacked — this is a gift card scam',
          'This is a LINE promotion requiring gift card verification',
          'iTunes cards are a legitimate and safe way to lend money to friends'
        ],
        answer: 1,
        explanation: 'This is a "LINEアカウント乗っ取り詐欺" (LINE account takeover scam). Scammers hijack LINE accounts and immediately message contacts requesting iTunes or Google Play gift cards. Legitimate friends and companies NEVER ask for gift card codes. Call your friend directly to verify. Report hacked accounts to LINE via the in-app report function.'
      },
      {
        q: 'You receive a LINE message with a link: "あなたのアカウントが不正アクセスされました。こちらで確認してください" asking for your LINE ID and password to "restore access". What should you do?',
        options: [
          'Enter your credentials immediately to protect your account',
          'Ignore it — LINE never asks for your password via a message link',
          'Enter your old password since your account is already compromised',
          'Share the link with your LINE friends to warn them'
        ],
        answer: 1,
        explanation: 'LINE will NEVER ask you to re-enter your password via a link in a message. This is a credential phishing attack. If your LINE account is actually compromised, recover it through the official LINE app (Settings → Account → Login with phone number). Report phishing to LINE at contact.line.me.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'jp_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'jp',
    title: 'Fake Amazon.co.jp Email',
    subtitle: 'Phishing email impersonating Japan\'s most-used e-commerce platform',
    icon: '🛒',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['phishing', 'finance'],
    scenario: {
      format: 'email',
      sender: 'account-update@amazon.co.jp.account-verify.net',
      subject: '【重要】Amazonアカウントの支払い情報を更新してください',
      body: `<p>Amazonお客様各位、</p>
<p>お客様のアカウントに登録されているお支払い情報の<strong>有効期限が切れました</strong>。サービスを継続するには、24時間以内に支払い情報を更新してください。</p>
<p>更新しない場合、アカウントは<strong>一時停止</strong>されます。</p>
<p><a href="http://amazon.co.jp.account-verify.net/update">今すぐ支払い情報を更新する →</a></p>
<p>以下の情報を確認します：</p>
<ul>
  <li>クレジットカード番号</li>
  <li>有効期限・セキュリティコード（CVV）</li>
  <li>Amazonパスワード</li>
</ul>
<p>Amazon カスタマーサービス</p>`,
      threats: [
        { id: 't1', text: 'account-update@amazon.co.jp.account-verify.net', explanation: 'Fake sender domain. "amazon.co.jp" here is a subdomain of "account-verify.net" — a phishing domain. Legitimate Amazon emails come from @amazon.co.jp only.' },
        { id: 't2', text: 'amazon.co.jp.account-verify.net', explanation: 'Phishing URL. The real domain is "account-verify.net", not "amazon.co.jp". Attackers place the legitimate brand name as a subdomain to trick you.' },
        { id: 't3', text: 'セキュリティコード（CVV）', explanation: 'Amazon NEVER asks for your CVV via email. Your CVV is already stored — no legitimate payment system needs it again via email.' },
        { id: 't4', text: '24時間以内に', explanation: 'Artificial 24-hour urgency is a hallmark of phishing. Real Amazon account issues do not require you to act within hours or risk suspension.' }
      ],
      safeElements: ['The Amazon logo (easily copied from the real website)']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'jp_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'jp',
    title: 'Fake Point Reward Scam',
    subtitle: 'Fraudulent loyalty point offers targeting young Japanese users',
    icon: '🎁',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['social', 'mobile'],
    questions: [
      {
        q: 'You see an Instagram ad: "楽天ポイント10万ポイント無料プレゼント！今すぐここをタップ！". It takes you to a site asking for your Rakuten ID and password. What should you do?',
        options: [
          'Enter your login — 100,000 free points is too good to miss',
          'Close it — this is a phishing site stealing your Rakuten account',
          'Use the same password you use for everything else since Rakuten allows it',
          'Share it with friends so they can get free points too'
        ],
        answer: 1,
        explanation: 'Legitimate point giveaways NEVER ask for your login credentials on a third-party site. Entering your details gives scammers access to your Rakuten account, credit card info, and purchase history. Rakuten only gives points through its official app and website (rakuten.co.jp). Report to Rakuten Customer Support and change your password immediately.'
      },
      {
        q: 'A Twitter/X DM from an account with 2 followers says: "Vtuberさんのグッズが当たるキャンペーン！参加するにはDMでお名前・住所・電話番号を送ってください". What is the risk?',
        options: [
          'Low risk — VTuber campaigns often run on Twitter',
          'This is personal data harvesting — your info will be sold or used in targeted scams',
          'Giving your address is fine if you want to receive physical prizes',
          'No risk as long as you don\'t give your bank details'
        ],
        answer: 1,
        explanation: 'Sending your name, address, and phone number to a stranger online is extremely dangerous — even without financial details. This information is used for targeted fraud, sold to scammers, or used for identity theft. Legitimate brand campaigns run through official verified accounts with thousands of followers. When in doubt, look up the official VTuber agency website to verify.'
      }
    ]
  }
);


// ─── SOUTH KOREA 🇰🇷 ──────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'kr_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'kr',
    title: 'KakaoTalk Messenger Phishing',
    subtitle: '메신저피싱 — Family impersonation on Korea\'s dominant app',
    icon: '💛',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['social', 'finance'],
    questions: [
      {
        q: 'Your child\'s KakaoTalk profile picture appears in a message: "엄마, 나 핸드폰 고장났어. 급하게 친구한테 돈 30만원 빌려야 하는데 네이버페이로 보내줄 수 있어?" What is this?',
        options: [
          'Your child genuinely needs help — send the money immediately',
          'A 메신저피싱 scam — scammers copy your child\'s profile to impersonate them',
          'A NaverPay promotional message disguised as a personal request',
          'A test from your child\'s school about parental financial awareness'
        ],
        answer: 1,
        explanation: 'This is "메신저피싱" (messenger phishing), one of Korea\'s most common scams. Criminals steal profile photos and names, then create fake accounts to message parents and elderly relatives. ALWAYS call your family member directly on their real phone number before sending any money. Report to the Financial Supervisory Service (금융감독원) at 1332 or KakaoTalk\'s report function.'
      },
      {
        q: 'You receive a call from someone claiming to be a 검사 (prosecutor) from the Seoul Central Prosecutors\' Office saying your bank account has been used for money laundering. They ask you to transfer your savings to a "보호계좌" (protection account). What do you do?',
        options: [
          'Transfer your savings to protect them from being frozen',
          'Hang up — Korean prosecutors NEVER ask you to transfer money by phone',
          'Give them your account number so they can verify your innocence',
          'Ask them to send official documents before taking action'
        ],
        answer: 1,
        explanation: 'This is "보이스피싱" (voice phishing). Korean prosecutors, police, and courts NEVER ask you to transfer money to a "protection account" by phone. No legitimate authority does this. Hang up and call 112 (police) or 1332 (FSS) to verify. The government "보이스피싱 지킴이" app (voicephishing.fss.or.kr) helps identify scam numbers.'
      }
    ]
  },
  {
    id: 'kr_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'kr',
    title: 'Online Investment Fraud',
    subtitle: 'Fake stock tip groups on KakaoTalk targeting Korean investors',
    icon: '📈',
    difficulty: 'Hard',
    xp: 200,
    tags: ['finance', 'social'],
    questions: [
      {
        q: 'You are invited to a KakaoTalk group called "주식 고수 특별 리딩방" (Expert Stock Trading Room). The admin claims to be a licensed securities analyst and shows screenshots of massive profits. They ask you to sign up at a website and deposit money to follow their trades. What is this?',
        options: [
          'A legitimate trading community — certified analysts do run paid groups',
          'A 주식리딩방 fraud — a well-known Korean scam where fake profits lure victims into fake platforms',
          'A grey market investment that is risky but potentially profitable',
          'A legal pump-and-dump scheme that is technically allowed if disclosed'
        ],
        answer: 1,
        explanation: '"주식리딩방" (stock tip room) fraud is one of Korea\'s top financial crimes. Scammers create fake platforms that show fabricated profits. When you try to withdraw, you\'re told to pay "taxes" or "fees" first — these are just additional theft. Legitimate investment advice requires a license from the FSC (금융위원회). Report to KISA at 118 or FSS at 1332.'
      },
      {
        q: 'Someone on a dating app builds a romantic relationship with you over weeks, then introduces you to a "special" cryptocurrency exchange they use. The exchange shows amazing returns. This is:',
        options: [
          'A genuine investment opportunity from someone you can trust',
          'A 로맨스 스캠 combined with 코인 사기 — the relationship was engineered to steal your money',
          'Risky but legal if the exchange is registered in another country',
          'Fine as long as you only invest what you can afford to lose'
        ],
        answer: 1,
        explanation: 'This is "로맨스 스캠" combined with cryptocurrency fraud (also called "pig butchering" / 리딩사기). Criminals invest weeks building fake emotional connections before introducing the fake investment. The platform is controlled by criminals — "profits" are fabricated. Once you deposit enough, the platform and the "partner" disappear. Report to Cyber Bureau of the National Police Agency (사이버범죄 신고시스템 ecrm.cyber.go.kr) or call 182.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'kr_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'kr',
    title: 'Fake Coupang SMS',
    subtitle: 'Delivery phishing impersonating Korea\'s largest e-commerce platform',
    icon: '🛍️',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['phishing', 'mobile'],
    scenario: {
      format: 'sms',
      sender: '010-3847-2951',
      subject: '[쿠팡] 배송 안내',
      body: `[쿠팡] 고객님의 주문 상품이 배송 중입니다.

주소 불일치로 배송이 지연되고 있습니다.
아래 링크에서 주소를 확인해 주세요.

▶ http://coupang-delivery-check.xyz/address

미확인 시 상품이 반송됩니다.
- 쿠팡 물류센터`,
      threats: [
        { id: 't1', text: '010-3847-2951', explanation: 'Coupang sends SMS from official short codes (e.g. 1661-4549), not random 010 mobile numbers. A random mobile number sending a brand message is a major red flag.' },
        { id: 't2', text: 'coupang-delivery-check.xyz', explanation: 'Fake domain. Official Coupang notifications link only to coupang.com. The ".xyz" TLD and hyphenated "delivery-check" are phishing indicators. Clicking installs a malicious app or harvests your info.' },
        { id: 't3', text: '주소 불일치로 배송이 지연', explanation: 'Creating urgency with an "address mismatch" is a classic smishing (SMS phishing) tactic to make you act without thinking.' },
        { id: 't4', text: '미확인 시 상품이 반송됩니다', explanation: 'Threatening return of your package if you don\'t act immediately adds false time pressure — another manipulation tactic.' }
      ],
      safeElements: ['The Coupang brand name in the message body (easily copied by anyone)']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'kr_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'kr',
    title: 'Online Game Item Scam',
    subtitle: 'Trading fraud targeting Korean gamers on platforms like Kartrider and Lost Ark',
    icon: '🎮',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['gaming', 'social'],
    questions: [
      {
        q: 'Someone in your Lost Ark guild says they\'ll give you a rare item if you first send them 5,000 캐럿 (in-game currency) as a "security deposit" to prove you won\'t scam them. What should you do?',
        options: [
          'Send the currency — it\'s only fair that both sides show trust',
          'Refuse — legitimate item trades don\'t require upfront deposits',
          'Send half first, then the rest after you receive the item',
          'It\'s fine because you can report them in-game if they scam you'
        ],
        answer: 1,
        explanation: 'Asking for a "security deposit" before a trade is a classic setup for a scam — once you send the currency, they disappear. Always use in-game trading systems that hold both items simultaneously. Never send currency or items outside the official trade window. Report player fraud to Smilegate\'s support team (lostark.game.onstove.com).'
      },
      {
        q: 'A YouTube comment says you won a Nexon game gift card. The link takes you to a site asking you to complete a survey and enter your Nexon ID and password to "claim your prize". Should you proceed?',
        options: [
          'Yes — you can always change your password after claiming the prize',
          'No — Nexon gift card giveaways never require your login credentials',
          'Yes — surveys are how companies verify you are a real user',
          'Only if the site address starts with https://'
        ],
        answer: 1,
        explanation: 'Legitimate gaming prize sites NEVER need your account password. Entering it gives scammers access to your entire account including any Nexon Cash, characters, and items. HTTPS only means data is encrypted in transit — it does NOT mean the site is legitimate. Check giveaways only on Nexon\'s official social media accounts (nexon.com).'
      }
    ]
  }
);


// ─── AUSTRALIA 🇦🇺 ─────────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'au_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'au',
    title: 'ATO Tax Refund Scam',
    subtitle: 'Fake Australian Tax Office refund notifications',
    icon: '💰',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance', 'phishing'],
    questions: [
      {
        q: 'You receive an SMS: "Australian Tax Office: You are owed a $642.00 tax refund. Click here to claim: ato-refund-gov.au/claim". What do you do?',
        options: [
          'Click the link and enter your myGov details to claim your refund',
          'Delete it — the ATO only contacts you through myGov, not via SMS links',
          'Reply YES to confirm your identity before claiming',
          'Call the number in the SMS to verify the refund'
        ],
        answer: 1,
        explanation: 'The ATO never sends refunds via SMS links. Real ATO refunds go directly to your bank account after you lodge your tax return via myTax or a registered tax agent. The domain "ato-refund-gov.au" is not a government domain (.gov.au domains are strictly controlled by the Australian Government). Report to Scamwatch (scamwatch.gov.au) or the ATO at 1800 008 540.'
      },
      {
        q: 'You get a call from someone saying they\'re from the ATO, that you owe $3,200 in back taxes, and you\'ll be arrested if you don\'t pay within the hour via iTunes gift cards. What is this?',
        options: [
          'A genuine ATO enforcement call — the ATO can have people arrested for tax debts',
          'A tax scam — the ATO never demands immediate payment via gift cards or threatens arrest',
          'A real call but gift cards are an unusual request you should question',
          'An ATO automated reminder that\'s more aggressive than normal'
        ],
        answer: 1,
        explanation: 'The ATO never demands immediate payment via gift cards, cryptocurrency, or wire transfers, and never threatens immediate arrest. Real tax debts have formal processes with written notices and payment plans. If you receive this call, hang up. Report to ATO Fraud (1800 060 062) and Scamwatch. Australia\'s ACSC can be reached at cyber.gov.au/report.'
      }
    ]
  },
  {
    id: 'au_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'au',
    title: 'NBN Upgrade Scam',
    subtitle: 'Fake National Broadband Network calls offering free upgrades',
    icon: '📡',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['social', 'account'],
    questions: [
      {
        q: 'You receive a call from someone claiming to be from the NBN Co saying your internet will be cut off in 24 hours unless you allow them remote access to your computer to "complete the upgrade". They ask you to download AnyDesk. What should you do?',
        options: [
          'Allow access — NBN outages would be very disruptive',
          'Hang up — NBN Co never calls proactively to request remote access to your computer',
          'Allow access only if they can provide your account number',
          'Download the software to see what they want before deciding'
        ],
        answer: 1,
        explanation: 'NBN Co does not call customers to offer upgrades or request remote access. This is a tech support scam — once they have remote access via AnyDesk or TeamViewer they can steal banking credentials, install ransomware, or transfer money from your accounts. Hang up immediately. Report to Scamwatch (scamwatch.gov.au) and the ACCC at 1300 302 502.'
      },
      {
        q: 'A pop-up on your screen says "Your Telstra account has been compromised. Call 1800-XXX-XXX immediately." The number connects you to someone with a foreign accent claiming to be Telstra support who asks for your account PIN and credit card to "reverse the charges". What is this?',
        options: [
          'A real Telstra security alert — large telcos do display urgent warnings in browsers',
          'A scareware popup combined with a fake support number — a browser-based tech support scam',
          'A legitimate warning if it appeared while you were on the Telstra website',
          'A virus doing this on your computer — call any number to get help'
        ],
        answer: 1,
        explanation: 'No legitimate company uses browser popups to alert you to account issues. This is "scareware" — your browser hasn\'t detected anything, it\'s just a webpage designed to frighten you. Telstra (and all carriers) will never display security alerts in your browser or ask for your PIN and credit card over a cold call. Close the browser tab (or force-quit if it\'s stuck), run a real AV scan, and report to Scamwatch.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'au_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'au',
    title: 'Fake myGov Email',
    subtitle: 'Phishing email impersonating Australia\'s government services portal',
    icon: '🏛️',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['phishing', 'government'],
    scenario: {
      format: 'email',
      sender: 'noreply@my-gov-au-secure.com',
      subject: 'Action Required: Your myGov account has been locked',
      body: `<p>Dear myGov Account Holder,</p>
<p>We have detected <strong>suspicious login activity</strong> on your myGov account. To protect your personal information and linked services (Medicare, ATO, Centrelink), your account has been <strong>temporarily locked</strong>.</p>
<p>To restore access, you must verify your identity within <strong>48 hours</strong>:</p>
<p><a href="http://my-gov-au-secure.com/verify-identity">Verify my identity now →</a></p>
<p>You will need to provide:</p>
<ul>
  <li>Your myGov username and password</li>
  <li>Your Medicare card number</li>
  <li>Your Tax File Number (TFN)</li>
</ul>
<p>If you do not verify within 48 hours, your account will be <strong>permanently suspended</strong> and linked services will be cancelled.</p>
<p>Services Australia — myGov Team</p>`,
      threats: [
        { id: 't1', text: 'noreply@my-gov-au-secure.com', explanation: 'Fake domain. Official myGov emails come from @my.gov.au. "my-gov-au-secure.com" is a privately registered phishing domain.' },
        { id: 't2', text: 'my-gov-au-secure.com', explanation: 'The real portal is my.gov.au — a government domain. Any hyphenated variant like "my-gov-au-secure.com" is fraudulent.' },
        { id: 't3', text: 'Your Tax File Number (TFN)', explanation: 'The ATO and myGov will NEVER ask for your TFN via email. Your TFN is one of Australia\'s most sensitive pieces of identity information — sharing it enables tax fraud and identity theft.' },
        { id: 't4', text: 'Your Medicare card number', explanation: 'Services Australia (which runs myGov and Medicare) never requests Medicare card numbers via email links. This data combined with your TFN enables serious identity fraud.' },
        { id: 't5', text: 'permanently suspended', explanation: 'Threatening permanent suspension of access to Medicare and Centrelink is designed to create panic. This urgency pressure tactic is a standard phishing technique.' }
      ],
      safeElements: ['Australian Government branding in the email (easily copied)']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'au_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'au',
    title: 'Instagram Prize Scam',
    subtitle: 'Fake competition DMs targeting Australian teens',
    icon: '🏆',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['social', 'mobile'],
    questions: [
      {
        q: 'An Instagram account with 847 followers DMs you: "Congratulations! You\'ve been selected to win a $500 JB Hi-Fi gift card! To claim, click the link and pay a $9.99 \'delivery fee\'." What do you do?',
        options: [
          'Pay the fee — $9.99 for a $500 prize is a great deal',
          'Ignore it — legitimate competitions never require a payment to claim a prize',
          'Pay it — you can get a refund if the prize doesn\'t arrive',
          'Pay only if the account has a blue verification tick'
        ],
        answer: 1,
        explanation: 'Any competition that requires payment to claim your "prize" is a scam. The $9.99 is what they steal — there is no prize. Legitimate brand giveaways never charge delivery fees, and are always announced on official brand accounts (not DMs from random accounts). Report to Scamwatch (scamwatch.gov.au) or the eSafety Commissioner (esafety.gov.au).'
      },
      {
        q: 'Your friend on Snapchat says: "I made $400 this week just by investing $50 on this platform! Here\'s my referral link." Should you invest?',
        options: [
          'Yes — your friend trusts it, so it must be safe',
          'No — your friend may have been scammed first and is now (unknowingly or pressured) recruiting others',
          'Yes, but only invest $50 to start',
          'Yes, but ask for your friend\'s bank statement as proof first'
        ],
        answer: 1,
        explanation: 'This is a common pattern in pyramid/MLM scams and investment fraud. Your friend may genuinely believe it works (they haven\'t tried to withdraw yet), or they may be pressured to recruit others to "unlock" their own funds. Referral-based investment platforms targeting teens on social media are almost always fraudulent. Research any investment platform through ASIC\'s MoneySmart website (moneysmart.gov.au) before investing anything.'
      }
    ]
  }
);


// ─── NEW ZEALAND 🇳🇿 ────────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'nz_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'nz',
    title: 'IRD Tax Refund Phishing',
    subtitle: 'Fake Inland Revenue Department SMS scams targeting New Zealanders',
    icon: '🥝',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance', 'phishing'],
    questions: [
      {
        q: 'You receive a text: "Inland Revenue: You have a tax refund of $387.00 waiting. Click to claim: ird-refund-nz.com/claim — offer expires in 48hrs". What should you do?',
        options: [
          'Click and claim your refund before it expires',
          'Delete it — IRD refunds go directly to your bank account, not via SMS links',
          'Reply with your IRD number to verify the refund',
          'Forward it to CERT NZ first, then click the link'
        ],
        answer: 1,
        explanation: 'IRD (Inland Revenue) processes refunds directly to your bank account on file — they never send SMS links to "claim" refunds. The domain "ird-refund-nz.com" is not an official NZ Government domain (genuine IRD uses ird.govt.nz). Report suspicious messages to CERT NZ (cert.govt.nz/report) or call IRD directly at 0800 775 247.'
      },
      {
        q: 'A caller claims to be from IRD and says you owe $1,200 in unpaid tax. They threaten arrest and say you must pay immediately via Bitcoin ATM or gift cards to avoid police coming to your door. What is the correct response?',
        options: [
          'Pay immediately to avoid arrest — IRD does have enforcement powers',
          'Hang up — IRD never threatens immediate arrest or demands Bitcoin/gift card payment',
          'Ask for their employee ID number and pay if they provide one',
          'Pay to stop the arrest threat, then dispute it with IRD later'
        ],
        answer: 1,
        explanation: 'IRD never threatens immediate arrest over the phone, never demands Bitcoin or gift card payments, and always sends written notices before enforcement action. This is a well-known phone scam. Real IRD debt is managed through formal written communication with payment plans available. Hang up, then verify by calling IRD at 0800 775 247. Report to Netsafe (netsafe.org.nz) at 0508 NETSAFE.'
      }
    ]
  },
  {
    id: 'nz_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'nz',
    title: 'NZ Post Parcel Scam',
    subtitle: 'Smishing attacks impersonating New Zealand\'s national post service',
    icon: '📮',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['phishing', 'mobile'],
    questions: [
      {
        q: 'You receive an SMS: "NZ Post: Your parcel #NZ8472916 could not be delivered. A $2.95 redelivery fee is required. Pay at: nzpost-redeliver.net". What do you do?',
        options: [
          'Pay the $2.95 — it\'s only a small amount for a redelivery',
          'Delete it — NZ Post does not charge redelivery fees via SMS payment links',
          'Enter your credit card details — you can dispute the charge if it\'s wrong',
          'Pay only if you are expecting a parcel'
        ],
        answer: 1,
        explanation: 'NZ Post does not charge redelivery fees via SMS links. This is a "smishing" (SMS phishing) scam — the $2.95 is a pretext to capture your full credit card details, which are then used for much larger fraudulent charges. The real NZ Post website is nzpost.co.nz. Report to CERT NZ (cert.govt.nz/report) and Netsafe (netsafe.org.nz).'
      },
      {
        q: 'You click a fake NZ Post SMS link and enter your Visa card details before realising it\'s a scam. What should you do FIRST?',
        options: [
          'Wait to see if any fraudulent charges appear',
          'Contact your bank immediately to block the card and dispute charges',
          'Change your email password since they might access your email too',
          'Report to Police first, then wait for them to contact your bank'
        ],
        answer: 1,
        explanation: 'Calling your bank FIRST (within minutes if possible) is the highest-priority action. Banks can block the card, prevent pending fraudulent transactions, and initiate a chargeback process. Waiting gives criminals time to use or sell your card details. After securing your card, report to CERT NZ and consider whether your NZ Post or other accounts use the same password (change those too).'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'nz_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'nz',
    title: 'Fake ANZ New Zealand Email',
    subtitle: 'Phishing email impersonating one of NZ\'s major banks',
    icon: '🏦',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['phishing', 'finance'],
    scenario: {
      format: 'email',
      sender: 'security-alert@anz-nz-verification.com',
      subject: 'Important: ANZ goMoney account access temporarily suspended',
      body: `<p>Dear ANZ Customer,</p>
<p>We have placed a <strong>temporary hold</strong> on your ANZ goMoney account due to a detected suspicious transaction of <strong>$1,847.00</strong> from an unrecognised device in Auckland CBD.</p>
<p>To restore full access and review this transaction, verify your identity now:</p>
<p><a href="http://anz-nz-verification.com/gomoney/secure">Verify my ANZ account →</a></p>
<p>You will need to confirm:</p>
<ul>
  <li>Your ANZ Customer Number and Password</li>
  <li>Your One-Time PIN (OTP) for two-factor authentication</li>
  <li>Your debit card number and PIN</li>
</ul>
<p>Failure to verify within 12 hours will result in account closure and fund recovery proceedings.</p>
<p>ANZ New Zealand Security Team<br>anz.co.nz</p>`,
      threats: [
        { id: 't1', text: 'security-alert@anz-nz-verification.com', explanation: 'Fake sender domain. Official ANZ NZ emails come from @anz.co.nz. Any other domain is fraudulent — "anz-nz-verification.com" is a criminal-registered phishing domain.' },
        { id: 't2', text: 'anz-nz-verification.com', explanation: 'Not ANZ\'s domain. The real ANZ New Zealand website is anz.co.nz. Hyphenated variants are classic phishing domain patterns.' },
        { id: 't3', text: 'Your One-Time PIN (OTP)', explanation: 'ANZ will NEVER ask you to enter your OTP on a link from an email. OTPs are the key to defeating phishing — if you enter it on a fake site, criminals use it to authorise transactions in real-time.' },
        { id: 't4', text: 'Your debit card number and PIN', explanation: 'No bank ever asks for your full card number and PIN together via email. Your PIN should never be shared with anyone, ever — including your bank.' },
        { id: 't5', text: '12 hours', explanation: 'Artificial time pressure ("12 hours") is engineered to stop you from pausing and thinking critically — a core phishing technique.' }
      ],
      safeElements: ['Mention of Auckland location (could be guessed — most ANZ customers are in major cities)']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'nz_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'nz',
    title: 'Online Marketplace Scam',
    subtitle: 'Fraud on Trade Me and Facebook Marketplace targeting young Kiwis',
    icon: '🛒',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance', 'social'],
    questions: [
      {
        q: 'You\'re selling your old PS5 on Trade Me. A buyer messages you asking to pay via direct bank transfer before collecting it, and asks for your full name, bank account number, and home address for the transfer. What should you do?',
        options: [
          'Provide all details — bank transfers are a safe payment method',
          'Only share your bank account number (BSB + account) — never give your full address until meeting in person at a safe location',
          'Give everything — Trade Me protects all sellers from fraud',
          'Provide details only if they send $1 first to confirm the account'
        ],
        answer: 1,
        explanation: 'For local Trade Me sales, you only need to share your bank account number for payment — never your home address until you\'ve confirmed the buyer is genuine and arrange to meet in a safe public place. Sharing your home address with strangers online is a personal safety risk. Use Trade Me\'s messaging system (not personal contact details) until you\'re confident the transaction is legitimate.'
      },
      {
        q: 'A Facebook Marketplace seller has great reviews and is selling AirPods for $60. They say they\'ll post it if you pay via bank transfer, but they\'re "overseas for work" and need payment first. After you pay, the listing disappears. What happened?',
        options: [
          'A genuine seller who had an emergency — they\'ll probably refund you',
          'A classic "advance payment" scam — the seller, listing, and money are gone',
          'A Facebook Marketplace glitch that sometimes removes listings after payment',
          'An honest mistake — reputable sellers are "overseas" sometimes'
        ],
        answer: 1,
        explanation: '"Overseas seller" combined with advance bank transfer is one of the most common online marketplace scams in New Zealand. Once you transfer money via direct bank transfer, it\'s almost impossible to recover. Always use secure payment methods with buyer protection. For expensive items, meet in person at a safe public location (e.g. a police station — NZ Police promote this). Report to Netsafe (0508 NETSAFE) or NZ Police (105).'
      }
    ]
  }
);


// ─── INDIA 🇮🇳 ──────────────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'in_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'in',
    title: 'UPI Collect Request Fraud',
    subtitle: 'Payment request scams exploiting India\'s UPI payment system',
    icon: '📱',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['finance', 'mobile'],
    questions: [
      {
        q: 'You posted your old phone for sale on OLX. A buyer calls, says they\'ll pay via Google Pay, and sends you a UPI collect request for ₹15,000. Your Google Pay shows "COLLECT ₹15,000 — Approve or Decline". What does approving this do?',
        options: [
          'Receives ₹15,000 into your account — that\'s how UPI payments work',
          'Sends ₹15,000 OUT of your account — collect requests are requests to withdraw money FROM you',
          'Puts the money in escrow until you confirm the handover',
          'Nothing — UPI collect requests are just notifications'
        ],
        answer: 1,
        explanation: 'This is the most common UPI scam in India. A UPI "collect request" asks YOU to authorise a payment going OUT of your account — it is NOT a payment coming in to you. When you "approve" it, the money leaves your account. Sellers receive money via UPI SEND (not collect). If someone asks you to approve a collect request to "receive" money, it is always a scam. Report to cybercrime.gov.in or call the Cyber Crime Helpline at 1930.'
      },
      {
        q: 'You receive a call from someone claiming to be from your bank saying your KYC is incomplete and your account will be blocked in 24 hours. They ask you to share your Aadhaar number, PAN, and a one-time OTP sent to your phone. What is this?',
        options: [
          'A genuine KYC call — banks do call customers for incomplete KYC',
          'A KYC fraud scam — your bank will never ask for your OTP over a phone call',
          'A routine security check — all data is already with the bank so sharing is fine',
          'A call you should escalate to the RBI helpline before answering'
        ],
        answer: 1,
        explanation: '"KYC update" fraud is one of India\'s most common banking scams. Banks never ask for OTPs over phone calls — an OTP shared with anyone (including your bank) allows criminals to add a new UPI handle to your account and drain it. Your Aadhaar and PAN together enable full identity theft. Hang up and call your bank\'s official number on the back of your card. Report to 1930 (National Cyber Crime Helpline).'
      }
    ]
  },
  {
    id: 'in_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'in',
    title: '"Digital Arrest" Scam',
    subtitle: 'Fake law enforcement calls threatening victims with digital detention',
    icon: '🚨',
    difficulty: 'Hard',
    xp: 200,
    tags: ['social', 'general'],
    questions: [
      {
        q: 'You receive a video call from someone in a police uniform claiming to be from the CBI. They say your Aadhaar has been linked to a drug trafficking network, and you are under "digital arrest" — meaning you must stay on camera and not speak to anyone or you will be physically arrested. They demand ₹2,00,000 to "clear your name". This is:',
        options: [
          'A genuine CBI operation — government agencies do conduct video investigations',
          'A "digital arrest" scam — no law in India permits "digital arrest" and no agency demands video call payment',
          'Potentially real — you should comply until you can contact a lawyer',
          'A genuine call if the caller can show an official CBI badge on video'
        ],
        answer: 1,
        explanation: '"Digital arrest" is a completely fabricated concept with no legal basis in India. No legitimate authority — CBI, ED, Narcotics, Police — conducts investigations via video call, places anyone under "digital arrest", or demands money to clear criminal cases. This scam exploits fear and isolation. The moment someone says you are under "digital arrest", hang up. Report to 1930 or cybercrime.gov.in. The Prime Minister has personally warned the nation about this scam (2024).'
      },
      {
        q: 'A scammer threatens to send your family embarrassing private photos unless you pay ₹50,000 in cryptocurrency. This is called:',
        options: [
          'Blackmail — report to local police only, since online crimes aren\'t covered in India',
          'Sextortion — a cybercrime reportable to National Cyber Crime Reporting Portal',
          'A civil matter — you can only sue, not file a criminal complaint',
          'An untraceable crime since cryptocurrency is anonymous'
        ],
        answer: 1,
        explanation: 'This is "sextortion", a serious cybercrime under the IT Act 2000 and IPC. Report immediately to cybercrime.gov.in or call 1930. Do NOT pay — payment encourages further extortion and is no guarantee the material is deleted. The National Cyber Crime Reporting Portal handles these cases, and cryptocurrency transactions are increasingly traceable by Indian law enforcement. Take screenshots of all communication before reporting.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'in_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'in',
    title: 'Fake HDFC Bank SMS',
    subtitle: 'Smishing targeting customers of India\'s largest private bank',
    icon: '🏦',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['phishing', 'finance'],
    scenario: {
      format: 'sms',
      sender: 'TM-HDFC1N',
      subject: 'HDFC Bank Alert',
      body: `HDFC Bank: Dear Customer, your account has been BLOCKED due to incomplete KYC.

To unblock, update your KYC immediately:
http://hdfc-kyc-update.in/verify

Enter your Account Number, Debit Card details, and OTP to restore access.

Helpline: 9876543210
-HDFC Bank KYC Team`,
      threats: [
        { id: 't1', text: 'TM-HDFC1N', explanation: 'Fraudsters spoof sender IDs to look like bank names. Official HDFC Bank SMS sender IDs are registered codes like "HDFCBK" or "HDFCBN" — a modified or misspelled sender ID like "HDFC1N" is a warning sign.' },
        { id: 't2', text: 'hdfc-kyc-update.in', explanation: 'Fake domain. HDFC Bank\'s official website is hdfcbank.com. Any non-official domain like "hdfc-kyc-update.in" is a phishing site designed to steal your credentials.' },
        { id: 't3', text: 'OTP to restore access', explanation: 'HDFC Bank will NEVER ask for your OTP via SMS link or phone call. Sharing your OTP gives criminals full access to your banking session and they can drain your account in real time.' },
        { id: 't4', text: 'Debit Card details', explanation: 'Your debit card details (number, expiry, CVV) should never be entered on a site reached via an SMS link. This enables card-not-present fraud.' },
        { id: 't5', text: '9876543210', explanation: 'A generic mobile number as a "helpline" is a major red flag. HDFC Bank\'s official helpline is 1800 202 6161 — not a random 10-digit mobile number.' }
      ],
      safeElements: ['Mention of KYC requirement (banks do have KYC obligations, making this pretext believable)']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'in_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'in',
    title: 'Fake Job Offer Scam',
    subtitle: 'Part-time job frauds targeting Indian students on WhatsApp and Telegram',
    icon: '💼',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['social', 'finance'],
    questions: [
      {
        q: 'You receive a WhatsApp message: "Earn ₹500-₹1000 per day from home! Simple task: like YouTube videos and screenshots as proof. First, pay a ₹500 registration fee to activate your account." Is this legitimate?',
        options: [
          'Yes — part-time online work is common and the fee is a small security deposit',
          'No — legitimate employers never ask for a registration or security deposit',
          'Yes, but only pay if you can verify the company on LinkedIn first',
          'Maybe — it depends on whether the WhatsApp number looks professional'
        ],
        answer: 1,
        explanation: 'Charging a "registration fee" to start a job is always a scam. Real employers pay you — you never pay them. "Like-and-earn" scams are a massive fraud category in India (2024), where victims are initially paid small amounts to build trust before being asked for larger "upgrade fees" that are never returned. Report to 1930 or cybercrime.gov.in.'
      },
      {
        q: 'A Telegram group of 5,000 members shows people posting screenshots of ₹2,000-₹10,000 daily earnings from "task-based" online work. The group admin sends you a task but says you need to pay ₹2,000 to unlock the "premium tier" with higher payouts. What is happening?',
        options: [
          'A genuine opportunity — the large group shows it\'s popular and trustworthy',
          'An advance fee fraud — the screenshots are fake and the group is filled with scammer accounts',
          'A grey area — some task platforms do have paid tiers',
          'Real if the group admin can show you a government registration certificate'
        ],
        answer: 1,
        explanation: 'Large Telegram groups are easily filled with fake accounts or coerced victims. Screenshots of earnings are trivially fabricated. Any scheme that requires upfront payment to "unlock earnings" is an advance fee scam. The pattern: small tasks → "upgrade" payment → bigger tasks → more "upgrade" payments → no money ever withdrawn. These scams are fuelled by organised cybercriminal groups. Never pay to join a "task" platform. Report all such cases to 1930.'
      }
    ]
  }
);


// ─── CHINA 🇨🇳 ──────────────────────────────────────────────────────────────

MISSIONS.adults.push(
  {
    id: 'cn_adults_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'cn',
    title: 'WeChat Investment Fraud (杀猪盘)',
    subtitle: 'Romance-based investment scams targeting Chinese internet users',
    icon: '💔',
    difficulty: 'Hard',
    xp: 200,
    tags: ['finance', 'social'],
    questions: [
      {
        q: 'A stranger on WeChat engages you in friendly conversation for weeks, building a close relationship. They eventually mention they have a special insider access to a crypto trading platform with "guaranteed" daily returns of 3-5%. They show screenshots of their own large profits and offer to guide you personally. This is known as:',
        options: [
          'A legitimate investment opportunity — the personal relationship means they genuinely want to help',
          '杀猪盘 (pig butchering scam) — the relationship is entirely engineered to steal your money',
          'A risky but real trading platform — high returns exist in crypto',
          'A grey market investment that operates outside normal regulation'
        ],
        answer: 1,
        explanation: '"杀猪盘" (shā zhū pán, literally "pig butchering plate") is a major Chinese cybercrime export. Criminals "fatten the pig" (build emotional trust over weeks or months) before "slaughtering" (stealing all funds). The platform is completely controlled by criminals — "profits" are fabricated numbers. Once you invest enough, the platform freezes your funds and demands "taxes" before withdrawal. Report to the 国家反诈中心 app or call 96110 (Anti-Telecom Fraud Hotline).'
      },
      {
        q: 'You receive a call from someone claiming to be from the 公安局 (Public Security Bureau) saying you are a suspect in a money laundering case. They ask you to transfer your savings to a "安全账户" (safe account) they provide to "protect your assets during the investigation". What is this?',
        options: [
          'A legitimate police procedure — the PSB does protect assets of suspects during investigations',
          '冒充公检法诈骗 — impersonation of police/court/prosecution, one of China\'s most reported scams',
          'A real call but you should ask for the officer\'s badge number before complying',
          'A genuine call if they can show you a digital police warrant'
        ],
        answer: 1,
        explanation: '"冒充公检法" (fake police/prosecutor/court) scams are China\'s most reported fraud category. The 公安局, 检察院, and 法院 will NEVER ask you to transfer money to a "safe account" via phone. No legitimate authority in China conducts investigations this way. Hang up immediately. Report to 110 (Police) or use the 国家反诈中心 (National Anti-Fraud Center) app to verify suspicious calls and report fraud. Call 96110 for the Anti-Telecom Fraud Hotline.'
      }
    ]
  },
  {
    id: 'cn_adults_quiz_2',
    type: 'quiz',
    module: 'general',
    region: 'cn',
    title: 'Alipay / WeChat Pay Phishing',
    subtitle: 'Credential theft targeting China\'s dominant payment platforms',
    icon: '💰',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['phishing', 'finance'],
    questions: [
      {
        q: 'You receive an SMS: "【支付宝】您的账户存在安全风险，请立即登录核实：alipay-secure-cn.com/verify，24小时内未处理将冻结账户". What should you do?',
        options: [
          'Click the link immediately to protect your account',
          'Delete it — Alipay\'s official domain is alipay.com, not alipay-secure-cn.com',
          'Reply STOP to unsubscribe from Alipay security alerts',
          'Forward to Alipay customer service to verify'
        ],
        answer: 1,
        explanation: 'Alipay\'s only official domain is alipay.com. "Alipay-secure-cn.com" is a phishing domain designed to steal your login credentials and payment password. The artificial 24-hour deadline is a panic tactic. If you are genuinely concerned about your Alipay account, open the official Alipay app directly. Report phishing SMS to 12321 (National Cyber Security Reporting Platform) or report within the Alipay app.'
      },
      {
        q: 'A QR code posted on a shared bike asks you to scan it to "register for a membership discount". Your WeChat Pay screen shows a payment request before you realise it\'s not from the bike company. What happened?',
        options: [
          'The bike company changed their payment system — complete the payment',
          'A tampered QR code was placed over the real one to redirect payments to scammers',
          'A WeChat Pay glitch that sometimes loads the wrong merchant',
          'The registration fee for the membership — it\'s legitimate'
        ],
        answer: 1,
        explanation: '"换码诈骗" (QR code replacement fraud) is common in China where scammers place fraudulent QR codes over legitimate ones on shared bikes, parking meters, and stores. Always verify the merchant name shown in WeChat Pay/Alipay before confirming any payment. Report to 96110 or the 国家反诈中心 app.'
      }
    ]
  }
);

MISSIONS.adults.push(
  {
    id: 'cn_adults_spot_1',
    type: 'spot-threat',
    module: 'general',
    region: 'cn',
    title: 'Fake Tax Refund Email',
    subtitle: '虚假退税诈骗 — Phishing emails impersonating China\'s tax authority',
    icon: '🧾',
    difficulty: 'Intermediate',
    xp: 150,
    tags: ['phishing', 'finance'],
    scenario: {
      format: 'email',
      sender: 'tax-refund@chinatax-gov.cn',
      subject: '【国家税务总局】您有一笔税款退还，请尽快申领',
      body: `<p>尊敬的纳税人，</p>
<p>根据最新税收优化政策，经系统核查，您有一笔<strong>应退税款 ¥3,218.00</strong>，因信息不完整暂未退还。</p>
<p>请在<strong>72小时</strong>内点击以下链接，完善退税申请：</p>
<p><a href="http://chinatax-gov.cn.refund-apply.com/apply">立即申领退税款 →</a></p>
<p>申领时需提供：</p>
<ul>
  <li>您的税号（纳税人识别号）</li>
  <li>银行账户信息及开户行</li>
  <li>手机短信验证码</li>
</ul>
<p>逾期未申领视为自动放弃，款项将退回国库。</p>
<p>国家税务总局服务中心</p>`,
      threats: [
        { id: 't1', text: 'chinatax-gov.cn', explanation: 'This is the sender domain — but look carefully: the real 国家税务总局 (State Taxation Administration) domain is chinatax.gov.cn (a government .gov.cn domain). "chinatax-gov.cn" is a privately registered phishing domain that mimics the real one.' },
        { id: 't2', text: 'chinatax-gov.cn.refund-apply.com', explanation: 'The actual domain of this link is "refund-apply.com" — a non-government phishing domain. "chinatax-gov.cn" appears as a subdomain to deceive you. Always read domains right-to-left from the first single slash.' },
        { id: 't3', text: '手机短信验证码', explanation: '国家税务总局 will NEVER ask for your SMS verification code via email. Sharing your OTP/verification code allows criminals to log into your accounts in real time.' },
        { id: 't4', text: '72小时', explanation: '72-hour deadline to claim a tax refund or "lose it forever" is classic manufactured urgency — a manipulation tactic to prevent you from pausing and verifying through official channels.' },
        { id: 't5', text: '银行账户信息', explanation: 'The real tax refund system deposits refunds to the bank account already on file with the tax authority. You are never asked to "submit" bank account information via an email link.' }
      ],
      safeElements: ['Reference to 税收优化政策 (tax policy) — a plausible-sounding government context']
    }
  }
);

MISSIONS.teens.push(
  {
    id: 'cn_teens_quiz_1',
    type: 'quiz',
    module: 'general',
    region: 'cn',
    title: 'Fake Scholarship / Grant Scam',
    subtitle: 'Fraudulent education awards targeting Chinese students',
    icon: '🎓',
    difficulty: 'Beginner',
    xp: 100,
    tags: ['social', 'finance'],
    questions: [
      {
        q: 'You receive a QQ message: "恭喜你获得XX基金会 ¥5000 奖学金！请加微信客服领取，需先缴纳 ¥200 手续费" (You have won a ¥5,000 scholarship! Add WeChat service account to claim, a ¥200 processing fee is required). What should you do?',
        options: [
          'Pay the fee — ¥200 is small compared to a ¥5,000 scholarship',
          'Ignore it — legitimate scholarships never require upfront processing fees to claim',
          'Pay only if you can verify the foundation name on Baidu first',
          'Ask the sender to reduce the fee before paying'
        ],
        answer: 1,
        explanation: 'Any scholarship or prize requiring an upfront payment is a scam. Legitimate foundations, universities, and government scholarship programs never charge you a fee to receive money they are awarding you. Paying ¥200 confirms you\'re willing to pay — scammers will then ask for more. Report to 12321 or through the 国家反诈中心 app (recommended for all students to install).'
      },
      {
        q: 'A Bilibili live streamer says: "私信我你的学生证和手机号，我选粉丝送 ¥888 红包" (DM me your student ID and phone number, I\'m giving ¥888 red envelopes to fans). Why is sharing this information risky?',
        options: [
          'No risk — streamers often run real fan giveaways and need contact details',
          'Your student ID and phone number together can be used to register accounts or commit fraud in your name',
          'Only risky if the streamer has fewer than 10,000 followers',
          'Risky only if you also share your national ID (身份证)'
        ],
        answer: 1,
        explanation: 'Your student ID number and phone number together are enough to register accounts, sign up for loans, or exploit school/university systems in your name. Real platform giveaways use the platform\'s own internal gifting systems (like Bilibili\'s 电池 or 礼物 system) — they never collect personal details via DM. Install the 国家反诈中心 app and enable its real-time protection features.'
      }
    ]
  }
);
