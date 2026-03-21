// ===== TEENS (8 missions) =====
[
  // 1 — QUIZ: Instagram & TikTok Privacy
  {
    id: 'teens_new_quiz_1',
    type: 'quiz',
    title: 'Social Media Intel',
    subtitle: 'Privacy on Instagram and TikTok',
    icon: '📱',
    difficulty: 'Intermediate',
    xp: 600,
    module: 'privacy',
    tags: ['social', 'tech'],
    briefing: 'MISSION BRIEFING: Social media platforms are the #1 hunting ground for scammers, predators and data harvesters targeting teens. Your mission: complete 7 questions to master social media privacy and threat recognition. 📡',
    questions: [
      {
        id: 'tnq1_q1',
        story: 'You post a TikTok showing you getting ready for school. Your uniform shows your school name. The caption says "Monday grind at Bishan 😴" and your location is tagged as "Bishan, Singapore". Your account is public with 800 followers, most of whom you do not know personally.',
        scenario: 'Your public TikTok combines school name, location, and a real-time routine post.',
        correct: 'b',
        feedback: {
          correct: 'Correct. School uniform + location + daily routine = a stranger can identify exactly where you are every Monday morning at a specific time. This combination is a physical safety risk, not just a privacy issue. Set your account to private and remove location tags from posts.',
          wrong: 'Think beyond the algorithm. This is not about likes — it is about what a stranger with bad intentions can figure out from this post. School + location + routine gives them a map to find you in real life.'
        },
        options: [
          { id: 'a', text: 'Nothing serious — location tags help get more views in Singapore.' },
          { id: 'b', text: 'A stranger can identify your school, home area, and daily routine — a real physical safety risk.' },
          { id: 'c', text: 'Your school might see it and give you a uniform violation notice.' },
          { id: 'd', text: 'TikTok might restrict the video for showing your face in uniform.' }
        ],
        points: 100
      },
      {
        id: 'tnq1_q2',
        story: 'A brand account "SG_FashionDrops" follows you on Instagram and sends a DM: "Hey! You have great style. We want to send you FREE clothes to review — just fill in this Google Form with your full name, home address, phone number and bank account details for the $50 bonus payment."',
        scenario: 'An Instagram brand account offers you free products and payment in exchange for personal details via a Google Form.',
        correct: 'c',
        feedback: {
          correct: 'Correct. Legitimate brand partnerships never happen cold via DM from a random follow. Requesting your bank account details upfront is a major red flag — brands that work with creators use proper agency contracts and platforms like PayPal. This is a data harvesting scam.',
          wrong: 'The request for bank account details is the clearest red flag. No legitimate brand sends you a random DM asking for banking information. This is a data harvesting scam — your bank details could be used for fraud.'
        },
        options: [
          { id: 'a', text: 'Fill in the form — free clothes and $50 is a great deal!' },
          { id: 'b', text: 'Fill in the form but skip the bank account section.' },
          { id: 'c', text: 'Ignore it — no legitimate brand asks for bank details via a DM Google Form.' },
          { id: 'd', text: 'Ask them to send the clothes first before giving any details.' }
        ],
        points: 100
      },
      {
        id: 'tnq1_q3',
        story: 'You are applying for a polytechnic course. An admissions blog says schools commonly Google applicants. You have old public posts including: a rant about a teacher with her name, photos from a party where others are drinking, and jokes that seemed funny at 13 but look bad now.',
        scenario: 'Old public posts could affect your polytechnic application.',
        correct: 'a',
        feedback: {
          correct: 'The most effective immediate step is to make everything private while you do a full audit. Deleting specific posts matters, but a quick privacy lock ensures nothing new surfaces while you review everything carefully. Then go through post by post and delete anything that could misrepresent you.',
          wrong: 'While ignoring it or hoping for the best might feel easier, polytechnic admissions staff and employers do Google applicants. The safest approach is to lock your accounts immediately and audit all old content.'
        },
        options: [
          { id: 'a', text: 'Set all accounts to private immediately and do a full audit, deleting problematic posts.' },
          { id: 'b', text: 'Only delete the rant about the teacher — the rest is fine.' },
          { id: 'c', text: 'Leave everything — admissions staff are too busy to search for you.' },
          { id: 'd', text: 'Make a new account and abandon the old one without deleting it.' }
        ],
        points: 100
      },
      {
        id: 'tnq1_q4',
        story: null,
        scenario: 'What does it mean when a free app requests permission to access your Contacts, Camera, Microphone, and Location — even when the app is a simple game with no social or GPS features?',
        correct: 'd',
        feedback: {
          correct: 'Exactly. An app requesting permissions it has no functional need for is a classic data harvesting technique. Free apps often monetise by selling your data — your contact list, location history and microphone recordings have commercial value. Always review permissions before granting them and deny anything unnecessary.',
          wrong: 'Apps do not need permissions beyond their core function. A simple game does not need your microphone or contacts. These excess permissions are designed to harvest data for advertising or to be sold to third parties.'
        },
        options: [
          { id: 'a', text: 'The developers are just being thorough in case they add features later.' },
          { id: 'b', text: 'All apps need these permissions to work properly on Android and iOS.' },
          { id: 'c', text: 'Granting permissions helps the app run faster.' },
          { id: 'd', text: 'The app is likely collecting and selling your data — deny unnecessary permissions.' }
        ],
        points: 100
      },
      {
        id: 'tnq1_q5',
        story: 'You are on Discord and a server admin you have never met says: "Hey, we need to verify all members are 18+ to stay in this server. Send me a photo of your school ID or NRIC to verify — it will be deleted after."',
        scenario: 'A Discord server admin is requesting a photo of your government ID for "verification".',
        correct: 'b',
        feedback: {
          correct: 'No Discord server has a legitimate reason to request a photo of your NRIC or school ID. This is either identity theft, grooming, or blackmail setup. Discord\'s own age verification, if required, is handled through their platform — never via DM photo requests. Leave the server and report it.',
          wrong: 'Discord does not authorise server admins to collect government IDs. Sending a photo of your NRIC gives a stranger your full name, date of birth, and ID number — enough to commit identity fraud or to blackmail you. Never do this.'
        },
        options: [
          { id: 'a', text: 'Send the photo — you want to stay in the server and it will be deleted after.' },
          { id: 'b', text: 'Refuse, leave the server, and report the admin to Discord.' },
          { id: 'c', text: 'Send a blurred version of your ID so they cannot read the numbers.' },
          { id: 'd', text: 'Ask other server members if they have also been asked for ID.' }
        ],
        points: 100
      },
      {
        id: 'tnq1_q6',
        story: 'Your Instagram story shows you at the airport with your boarding pass visible in the background. The barcode and your full name are clearly readable.',
        scenario: 'Your Instagram story has your boarding pass with full name and barcode visible.',
        correct: 'c',
        feedback: {
          correct: 'Boarding pass barcodes contain your full name, frequent flyer number, flight details, and booking reference. With a barcode scanner app (free, widely available), someone can extract all of this and potentially access your booking, change your seat, or use your frequent flyer points. Delete the story immediately.',
          wrong: 'Boarding pass barcodes contain much more than just your name. A free barcode scanner app can extract your full booking reference, allowing someone to access and modify your flight reservation or claim your frequent flyer miles.'
        },
        options: [
          { id: 'a', text: 'It is fine — everyone posts travel photos and your face is not in it.' },
          { id: 'b', text: 'The risk is low — nobody would bother scanning a barcode on Instagram.' },
          { id: 'c', text: 'Delete the story immediately — the barcode contains your booking data and frequent flyer details.' },
          { id: 'd', text: 'Blur just your name and repost the story.' }
        ],
        points: 100
      },
      {
        id: 'tnq1_q7',
        story: null,
        scenario: 'You use the same email address and password for Instagram, Shopee, and your school email. Your Shopee account gets hacked. What is the MOST immediate additional risk?',
        correct: 'a',
        feedback: {
          correct: 'This is called a credential stuffing attack. Hackers who compromise one account automatically try the same username and password combination on hundreds of other services. Because you reused credentials, your Instagram and school email are now at high risk too. Change ALL of them immediately and use a unique password for each account.',
          wrong: 'Password reuse is one of the most dangerous habits online. When one account is breached, attackers immediately try the same credentials on other platforms. Your Instagram and school email could be compromised within minutes.'
        },
        options: [
          { id: 'a', text: 'Hackers will try the same password on your Instagram and school email immediately — change all of them now.' },
          { id: 'b', text: 'Only your Shopee account is at risk since that is what was hacked.' },
          { id: 'c', text: 'The risk is only financial — hackers only want to use your Shopee store credit.' },
          { id: 'd', text: 'Report it to Shopee and wait — they will handle everything.' }
        ],
        points: 100
      }
    ]
  },

  // 2 — SPOT-THREAT: Fake Carousell Listing
  {
    id: 'teens_new_spot_1',
    type: 'spot-threat',
    title: 'Carousell Threat Scan',
    subtitle: 'Spot Every Red Flag in This Listing',
    icon: '🛍️',
    difficulty: 'Intermediate',
    xp: 600,
    module: 'scams',
    tags: ['finance', 'social'],
    briefing: 'MISSION: A suspicious Carousell listing has been flagged by the SPF Anti-Scam Centre. Identify EVERY threat indicator in this listing and seller profile. Your score depends on finding all of them. 🔍',
    totalPoints: 700,
    items: [
      { id: 'item1', type: 'text', text: 'Seller account created 2 days ago. 0 reviews. 0 transactions.', isThreat: true, threatDesc: '🔴 BRAND NEW ACCOUNT: Scammers create fresh accounts for each campaign to avoid a negative review history. Always prefer sellers with verified reviews and transaction history.' },
      { id: 'item2', type: 'text', text: 'PlayStation 5 Console (Brand New Sealed) — $250 (original price $899)', isThreat: true, threatDesc: '🔴 TOO GOOD TO BE TRUE: A sealed PS5 at $250 vs the $899 retail price is a major red flag. If a deal seems impossibly good, it almost always is. Scammers use extreme discounts to attract victims.' },
      { id: 'item3', type: 'text', text: '"I am selling because I received it as a duplicate gift from two relatives. Urgent sale, migrating next week."', isThreat: true, threatDesc: '🔴 EMOTIONAL BACKSTORY + URGENCY: Elaborate personal stories ("migrating", "duplicate gift") are classic manipulation tactics to make the listing seem legitimate and pressure you to act fast.' },
      { id: 'item4', type: 'text', text: '"Meet-up available at Jurong East MRT" 📍', isThreat: false },
      { id: 'item5', type: 'text', text: '"Please pay via PayNow to 8XXXX123 FIRST before meet-up to confirm reservation. Non-refundable."', isThreat: true, threatDesc: '🔴 ADVANCE PAYMENT SCAM: Requesting PayNow payment before any meetup or inspection is the core of this scam. Once you send the money, the seller disappears. NEVER pay before inspecting goods in person.' },
      { id: 'item6', type: 'text', text: '"If you want to check authenticity, I can send you a video of the sealed box first."', isThreat: true, threatDesc: '🔴 VIDEO "PROOF" TRICK: Videos can be downloaded from the internet or staged. A video of a sealed box proves nothing about what you will actually receive. Always inspect in person before paying.' },
      { id: 'item7', type: 'text', text: 'Listing photos appear to be stock images taken from a Sony product page.', isThreat: true, threatDesc: '🔴 STOCK PHOTO LISTING: Using official product stock photos instead of real photos of the actual item is a classic scam signal. A genuine seller will have their own photos of the specific item they own.' }
    ]
  },

  // 3 — DECISION-TREE: Romance Scam on Instagram
  {
    id: 'teens_new_dt_1',
    type: 'decision-tree',
    title: 'The Charming Stranger',
    subtitle: 'Recognise a Romance Scam Before It Is Too Late',
    icon: '💔',
    difficulty: 'Hard',
    xp: 800,
    module: 'scams',
    tags: ['social', 'finance'],
    briefing: 'INTEL: Romance scams are the fastest-growing scam category in Singapore targeting teens and young adults. A stranger has appeared in your DMs. Every decision you make determines whether you protect yourself or fall victim. Stay sharp. 🎯',
    maxScore: 300,
    tree: {
      start: {
        type: 'choice',
        text: 'A new follower "Marcus_Official" with 1,200 followers and a profile of a very attractive 17-year-old sends you a DM: "Hey! I saw your profile and think you\'re really cool. I just moved to Singapore from Melbourne. Want to be friends? 😊" He seems friendly and his photos look genuine. 📱',
        choices: [
          { text: 'Reply and start chatting — he seems genuine and good-looking!', next: 'chatting', points: 0 },
          { text: 'Check his profile carefully before responding', next: 'profile_check', points: 100 },
          { text: 'Ignore the DM — you do not accept messages from strangers', next: 'ignored', points: 50 }
        ]
      },
      chatting: {
        type: 'choice',
        text: 'After two weeks of daily conversations, Marcus tells you he is actually an investment trader who made $50,000 last month from crypto. He says: "I really like you and I want to teach you how to make money too. I can start you with just $200 on my platform. Trust me 😍"',
        choices: [
          { text: 'Send the $200 via PayNow — Marcus likes me and wants to help me!', next: 'sent_money', points: 0 },
          { text: 'Refuse any money request and tell a parent about this person', next: 'told_parent', points: 100 },
          { text: 'Ask Marcus to prove his earnings with a bank statement first', next: 'asked_proof', points: 50 }
        ]
      },
      profile_check: {
        type: 'choice',
        text: 'You reverse image search his profile photo on Google. The same photo appears on multiple fake social media profiles with different names: "Jake from Perth", "Liam from London", "Chris from Canada". The account was created 3 weeks ago. 🔍',
        choices: [
          { text: 'Confront Marcus with your findings and see what he says', next: 'confronted', points: 50 },
          { text: 'Block the account, report it to Instagram, and tell a parent', next: 'reported_early', points: 100 }
        ]
      },
      ignored: {
        type: 'choice',
        text: 'Marcus sends a follow-up: "Hey, did you see my message? I am new in Singapore and do not know many people. I promise I am genuine! Here is my school ID photo as proof 📷" He sends a photo of what looks like an ID card.',
        choices: [
          { text: 'Reply now — he sent his ID so he must be real', next: 'chatting', points: 0 },
          { text: 'Block and report the account — real people do not send ID photos to strangers', next: 'reported_early', points: 100 }
        ]
      },
      sent_money: {
        type: 'choice',
        text: 'You sent $200. Marcus shows you a screenshot of your investment "growing to $800" in just two days. He says: "To withdraw your profits you need to pay a $150 verification fee first. It will come back to you with your winnings!" 💸',
        choices: [
          { text: 'Pay the $150 fee — $800 profit sounds worth it!', next: 'lost_more', points: 0 },
          { text: 'Refuse to pay more and tell a parent everything right now', next: 'damage_report', points: 50 }
        ]
      },
      told_parent: {
        type: 'outcome',
        text: '✅ Smart move. Your parent recognised the classic "pig butchering" crypto romance scam pattern immediately. You never lost any money. You reported the account to Instagram and the SPF Anti-Scam helpline (1800-722-6688). Marcus disappeared as soon as you stopped engaging.',
        points: 0
      },
      asked_proof: {
        type: 'outcome',
        text: '⚠️ Marcus sent a convincing-looking screenshot of a trading dashboard. But screenshots can be faked in minutes. You are still talking to a scammer. The safest move is to tell a parent about this person — any online contact asking for money, no matter how charming, is a massive red flag.',
        points: 0
      },
      confronted: {
        type: 'outcome',
        text: '⚠️ Marcus has a believable explanation for everything. He is a professional scammer — they are trained to handle confrontation. You are now more convinced he is real than before. Do not engage further. Block, report and tell a parent. The reverse image search result was the only truth you needed.',
        points: 0
      },
      reported_early: {
        type: 'outcome',
        text: '✅ Perfect execution. You used a reverse image search, identified the stolen photos, and reported the fake account before any conversation or money transfer. This is exactly how to handle suspicious follower requests. You protected yourself and helped remove a scammer targeting other teens. 🏆',
        points: 0
      },
      lost_more: {
        type: 'outcome',
        text: '❌ The "verification fee" was taken and Marcus immediately blocked you. Total loss: $350. This scam is called "pig butchering" — they fatten you up with small gains before taking everything. Report to SPF Anti-Scam Command (1800-722-6688) and file an e-report at police.gov.sg. Time is critical for fund recovery.',
        points: 0
      },
      damage_report: {
        type: 'outcome',
        text: '⚠️ You stopped before losing more, but the $200 is likely gone. Tell your parents immediately and file a report with the SPF Anti-Scam hotline (1800-722-6688). Losing $200 is painful but the lesson is priceless: online relationships that quickly lead to investment opportunities are ALWAYS scams.',
        points: 0
      }
    }
  },

  // 4 — QUIZ: Discord & Gaming Security
  {
    id: 'teens_new_quiz_2',
    type: 'quiz',
    title: 'Discord Defender',
    subtitle: 'Threats in Gaming Platforms and Discord Servers',
    icon: '🎧',
    difficulty: 'Intermediate',
    xp: 600,
    module: 'gaming-security',
    tags: ['gaming', 'social'],
    briefing: 'MISSION BRIEFING: Discord and gaming platforms are prime targets for account takeovers, phishing bots, and grooming. Your job is to identify every threat type and know exactly how to respond. 7 questions. No lifelines. Go. 🎮',
    questions: [
      {
        id: 'tnq2_q1',
        story: 'You receive a Discord DM from a bot: "⚠️ DISCORD SECURITY ALERT: Suspicious login detected. Verify your account within 24 hours or it will be SUSPENDED. Click: discord-security-verify.net"',
        scenario: 'A bot DMs you with an account suspension threat and a verification link.',
        correct: 'c',
        feedback: {
          correct: 'Correct. Official Discord communications come only from email (not DMs) and the URL would be discord.com — not any variation. This is a phishing attempt. Report the bot using Discord\'s built-in report function and do not click anything.',
          wrong: 'Discord never suspends accounts via DM links from bots. The URL "discord-security-verify.net" is not Discord\'s official domain. This is a credential phishing bot — ignore it and report it.'
        },
        options: [
          { id: 'a', text: 'Click the link — the 24-hour deadline sounds serious.' },
          { id: 'b', text: 'Reply to the bot asking for more information.' },
          { id: 'c', text: 'Ignore the DM, report the bot, and check your account status directly at discord.com.' },
          { id: 'd', text: 'Change your password just in case, then click the link.' }
        ],
        points: 100
      },
      {
        id: 'tnq2_q2',
        story: 'You are in a Valorant Discord server. An admin posts: "We are doing a FREE Valorant Points giveaway! React with 🎁 and then DM me your Riot account email and password to enter. Winners announced tomorrow!"',
        scenario: 'A server admin is running a giveaway that requires sending your Riot account password via DM.',
        correct: 'b',
        feedback: {
          correct: 'Correct. No legitimate giveaway ever requires your account password. Even if the "admin" account appears trusted within the server, it may have been hacked. Riot Games never asks for passwords through Discord. Report the message — the admin account has likely been compromised.',
          wrong: 'Legitimate giveaways NEVER require your account password. This is account theft. The admin account has likely been hacked and is being used to harvest credentials from the entire server.'
        },
        options: [
          { id: 'a', text: 'Enter the giveaway — the admin has been in the server for months and seems trustworthy.' },
          { id: 'b', text: 'Do not send your password to anyone — report the message to the server owner and Riot Support.' },
          { id: 'c', text: 'Send a throwaway email and password combination to test if it is real.' },
          { id: 'd', text: 'React with the emoji but skip the DM part.' }
        ],
        points: 100
      },
      {
        id: 'tnq2_q3',
        story: 'An older player in your Valorant squad has been friendly for two months. He is 22 and starts asking increasingly personal questions — about your school, your parents\' work schedules, and whether you ever hang out alone after school. He suggests meeting up to "play at a gaming cafe".',
        scenario: 'An older online gaming contact is asking personal questions about your schedule and suggesting meetups.',
        correct: 'a',
        feedback: {
          correct: 'This pattern — prolonged friendly contact, personal information gathering, and an offline meetup suggestion — matches grooming behaviour. Two months of online friendship does not make someone safe to meet alone. Tell a parent or trusted adult immediately. You do not need to accuse him of anything — just share the conversations and let an adult decide.',
          wrong: 'The combination of asking about your parents\' schedule, your alone time, and suggesting meetups after extended online contact is a textbook grooming pattern. Age gap + personal questions + offline meetup = tell a trusted adult immediately, no exceptions.'
        },
        options: [
          { id: 'a', text: 'Stop sharing personal information and tell a trusted adult about these conversations immediately.' },
          { id: 'b', text: 'Agree to the gaming cafe meetup — you have known each other for two months.' },
          { id: 'c', text: 'Tell him your parents do not allow meetups but keep chatting online.' },
          { id: 'd', text: 'Ask another squad member to come along to the meetup so you are not alone.' }
        ],
        points: 100
      },
      {
        id: 'tnq2_q4',
        story: null,
        scenario: 'Your Valorant account with a rare skin collection (estimated value $600) gets hacked. The attacker changed the email and password. What is your FIRST action?',
        correct: 'd',
        feedback: {
          correct: 'Contacting Riot Support immediately is the critical first step. The faster you report it, the higher the chance of recovery. They have tools to verify original ownership and can lock the account. While waiting, check if the same password was used on other services and change those too.',
          wrong: 'Speed is critical in account recovery. Riot Support can lock the account and investigate immediately. Waiting or posting on Reddit first costs you precious recovery time.'
        },
        options: [
          { id: 'a', text: 'Post in the Valorant subreddit asking for advice.' },
          { id: 'b', text: 'Try to log in repeatedly to regain access.' },
          { id: 'c', text: 'Wait 24 hours to see if the attacker logs out.' },
          { id: 'd', text: 'Contact Riot Support immediately with your original registration details and billing history.' }
        ],
        points: 100
      },
      {
        id: 'tnq2_q5',
        story: 'A Discord bot joins your server and posts: "🎮 CLAIM YOUR FREE NITRO! Discord is giving 3 months free Nitro to active users — click here: discord-nitro-free.gift"',
        scenario: 'A bot posts a free Discord Nitro claim link in your server.',
        correct: 'b',
        feedback: {
          correct: 'Any link offering free Nitro that is not from discord.com is a phishing link designed to steal your Discord credentials. Discord never distributes free Nitro through bots posting links in servers. Delete the message, kick the bot, and warn server members.',
          wrong: 'Free Nitro is one of the most used phishing lures on Discord. If it is not from discord.com directly, it is a scam. These links harvest your login credentials.'
        },
        options: [
          { id: 'a', text: 'Click the link — free Nitro is worth checking out.' },
          { id: 'b', text: 'Delete the message, kick the bot, and warn server members it is a phishing link.' },
          { id: 'c', text: 'Click the link but log in with a throwaway account.' },
          { id: 'd', text: 'React to the message positively and share it with friends.' }
        ],
        points: 100
      },
      {
        id: 'tnq2_q6',
        story: null,
        scenario: 'Which combination of account security measures gives you the STRONGEST protection for your Steam account?',
        correct: 'c',
        feedback: {
          correct: 'A unique strong password plus Steam Guard Mobile Authenticator (their 2FA system) is the gold standard for Steam account security. The mobile authenticator means that even if your password is stolen, the attacker cannot log in or accept trades without physically having your phone.',
          wrong: 'Using a long password alone is good, but adding Steam Guard Mobile Authenticator (2FA) is the critical second layer. This protects your account AND your item inventory from unauthorized trades.'
        },
        options: [
          { id: 'a', text: 'A long password and a private profile.' },
          { id: 'b', text: 'Logging out after every session and using incognito mode.' },
          { id: 'c', text: 'A unique strong password AND Steam Guard Mobile Authenticator (2FA) enabled.' },
          { id: 'd', text: 'Using only trusted family computers to log in.' }
        ],
        points: 100
      },
      {
        id: 'tnq2_q7',
        story: 'Someone in your Discord DMs claims to be a Riot Games developer: "We are testing a new cheat detection system. We need your IP address and Valorant account token to whitelist you. Just type /whoami in CMD and send a screenshot."',
        scenario: 'Someone claiming to be a game developer asks you to run a command and send a screenshot.',
        correct: 'd',
        feedback: {
          correct: 'Game developers never contact players through Discord DMs asking them to run system commands. The /whoami command reveals your Windows username and can confirm account details useful to an attacker. "Account token" extraction is a direct account takeover method. Block, report and never run commands for strangers.',
          wrong: 'No game developer contacts players via Discord DM asking them to run CMD commands. This is a social engineering attack — running commands and sending screenshots could expose sensitive system information or be the first step in a malware installation attempt.'
        },
        options: [
          { id: 'a', text: 'Run the command — official Riot developers need this for testing.' },
          { id: 'b', text: 'Ask them to verify their identity with a Riot email address first.' },
          { id: 'c', text: 'Run the command but blur the screenshot before sending.' },
          { id: 'd', text: 'Block and report — game developers never contact players via Discord DM to run system commands.' }
        ],
        points: 100
      }
    ]
  },

  // 5 — SPOT-THREAT: Phishing Email (Teens)
  {
    id: 'teens_new_spot_2',
    type: 'spot-threat',
    title: 'Email Threat Analysis',
    subtitle: 'Pick Apart This Phishing Email Line by Line',
    icon: '📧',
    difficulty: 'Hard',
    xp: 800,
    module: 'social-engineering',
    tags: ['tech', 'education'],
    briefing: 'MISSION: A suspicious email has been flagged in your school inbox. Perform a full threat analysis — identify EVERY indicator of compromise in this email. Your accuracy determines your threat analyst rating. 🔬',
    totalPoints: 800,
    items: [
      { id: 'item1', type: 'text', text: 'From: support@singpass-account-verify.com', isThreat: true, threatDesc: '🔴 SPOOFED SENDER: Official SingPass emails only come from @singpass.gov.sg. The domain "singpass-account-verify.com" is a fake registered by scammers to look legitimate at a glance.' },
      { id: 'item2', type: 'text', text: 'Subject: URGENT: Your SingPass Account Will Be Suspended in 24 Hours', isThreat: true, threatDesc: '🔴 URGENCY + THREAT: Creating panic with a 24-hour deadline is a core phishing tactic. It prevents you from thinking critically or verifying the claim through official channels.' },
      { id: 'item3', type: 'text', text: '"Dear Valued SingPass User," (no name used)', isThreat: true, threatDesc: '🔴 GENERIC GREETING: Legitimate government correspondence uses your registered full name. A generic greeting like "Valued User" means this is a mass phishing email sent to thousands of addresses.' },
      { id: 'item4', type: 'text', text: '"We have detected suspicious activity on your account from an overseas IP address in Vietnam."', isThreat: false },
      { id: 'item5', type: 'text', text: '"To secure your account, click here to verify your identity: http://singpass-secure-verify.xyz/login"', isThreat: true, threatDesc: '🔴 MALICIOUS LINK: The real SingPass is at singpass.gov.sg. The ".xyz" domain and "singpass-secure-verify" subdomain are classic phishing lookalike patterns. Never click login links in emails — always navigate directly.' },
      { id: 'item6', type: 'text', text: '"You will need to provide your SingPass ID, password, and the 6-digit OTP sent to your phone."', isThreat: true, threatDesc: '🔴 OTP HARVESTING: Requesting your OTP (one-time password) in addition to credentials is designed to bypass 2FA. Once a scammer has your password AND your OTP, they can access your account in real time.' },
      { id: 'item7', type: 'text', text: 'Email contains the official SingPass logo and Singapore Government crest.', isThreat: true, threatDesc: '🔴 LOGO SPOOFING: Government logos and crests can be copied from official websites in seconds. The presence of an official logo does NOT verify the email is legitimate. Always check the sender domain.' },
      { id: 'item8', type: 'text', text: '"Failure to verify within 24 hours will result in permanent account suspension and a possible $500 fine."', isThreat: true, threatDesc: '🔴 FAKE PENALTY THREAT: Threatening a financial fine creates additional fear and pressure. Singapore government agencies do not fine citizens via email for failing to click a verification link.' }
    ]
  },

  // 6 — DECISION-TREE: Shopee Scam
  {
    id: 'teens_new_dt_2',
    type: 'decision-tree',
    title: 'Shopee Trap',
    subtitle: 'Navigate a Fake Seller and Payment Scam',
    icon: '🛒',
    difficulty: 'Hard',
    xp: 800,
    module: 'scams',
    tags: ['finance', 'social'],
    briefing: 'MISSION: You are buying a limited-edition item on Shopee. A threat actor is operating as a fake seller and will try every tactic to get you to pay outside the platform. Your ability to recognise and resist these tactics determines the outcome. 🛒',
    maxScore: 300,
    tree: {
      start: {
        type: 'choice',
        text: 'You find a listing for Air Jordan 1 "Bred Toe" (your size, $180, below market value) on Shopee. The seller has 4.8 stars with 200+ reviews. He sends a chat: "Hey! Before you order, can you WhatsApp me at 9123-4567? Got something special to offer you 😉" 👟',
        choices: [
          { text: 'WhatsApp him — 4.8 stars and 200 reviews, he must be legit!', next: 'went_offplatform', points: 0 },
          { text: 'Stay on Shopee chat only and ask what the special offer is', next: 'stayed_on_shopee', points: 100 },
          { text: 'Check the seller\'s review timestamps before doing anything', next: 'checked_reviews', points: 100 }
        ]
      },
      went_offplatform: {
        type: 'choice',
        text: 'On WhatsApp, the seller says: "I have 2 pairs. If you PayNow me directly at 9123-4567 I\'ll give you $20 off — $160 instead of $180. Shopee takes commission so I prefer direct payment. Deal?" 💸',
        choices: [
          { text: 'PayNow him $160 directly — saves $20 and he seems trustworthy', next: 'paid_direct', points: 0 },
          { text: 'Refuse and say I will only pay through Shopee\'s official checkout', next: 'refused_direct', points: 100 },
          { text: 'Ask him to send the shoes first before payment', next: 'asked_first', points: 50 }
        ]
      },
      stayed_on_shopee: {
        type: 'choice',
        text: 'The seller replies in Shopee chat: "The special offer is $20 off if you pay outside Shopee. Just PayNow me directly." You notice that Shopee has a banner warning: "⚠️ Transactions made outside Shopee are NOT protected by Shopee Guarantee." 🚨',
        choices: [
          { text: 'Take the $20 off — Shopee Guarantee probably does not matter much anyway', next: 'paid_direct', points: 0 },
          { text: 'Decline the off-platform offer and proceed with the normal Shopee checkout', next: 'safe_purchase', points: 100 }
        ]
      },
      checked_reviews: {
        type: 'choice',
        text: 'You look at the review dates: 195 of the 200 reviews were posted in the same 3-day period last month. The review text is generic: "Good seller", "Fast delivery", "Nice product". This pattern suggests purchased or farmed fake reviews. 🔍',
        choices: [
          { text: 'The listing still has 4.8 stars — proceed with the purchase', next: 'went_offplatform', points: 0 },
          { text: 'Report the suspicious review pattern to Shopee and avoid this seller', next: 'reported_seller', points: 100 }
        ]
      },
      paid_direct: {
        type: 'outcome',
        text: '❌ You sent $160 via PayNow. The seller\'s WhatsApp number has now been blocked. The Shopee account disappears within hours. Because you paid outside Shopee, you have ZERO buyer protection. You can report to the SPF Anti-Scam hotline (1800-722-6688) and file a police report, but recovery of funds is not guaranteed. Never pay outside official platforms.',
        points: 0
      },
      refused_direct: {
        type: 'outcome',
        text: '✅ Smart. The seller stops responding when you insist on paying through Shopee checkout — confirming he was a scammer. You reported the listing to Shopee. Shopee Guarantee only protects you when you pay through their official checkout. The $20 "discount" was the bait. Well dodged. 🏆',
        points: 0
      },
      asked_first: {
        type: 'outcome',
        text: '⚠️ The seller agrees to send first but then claims "the courier needs payment before pickup". This is another layer of the scam. Any request to pay outside the official platform, for ANY reason, is a scam. Cut contact and report the listing to Shopee immediately.',
        points: 0
      },
      safe_purchase: {
        type: 'outcome',
        text: '✅ Excellent discipline. You ignored the off-platform bait, used Shopee\'s official checkout, and your order is protected by Shopee Guarantee. The shoes arrive as described. Shopee Guarantee exists specifically to protect you from situations like this — always use it. 🏆',
        points: 0
      },
      reported_seller: {
        type: 'outcome',
        text: '✅ Outstanding investigative work. You identified the fake review cluster, avoided the listing entirely, and reported it to Shopee. Shopee removed the listing within 24 hours, protecting dozens of other buyers. You did not just protect yourself — you protected the community. 🏆',
        points: 0
      }
    }
  },

  // 7 — QUIZ: Malware and Downloads
  {
    id: 'teens_new_quiz_3',
    type: 'quiz',
    title: 'Malware Analyst',
    subtitle: 'Understand Malware, RATs, and Unsafe Downloads',
    icon: '🦠',
    difficulty: 'Hard',
    xp: 800,
    module: 'malware',
    tags: ['tech', 'gaming'],
    briefing: 'MISSION BRIEFING: Malware targeting teens is primarily distributed through game cracks, free software, and Discord file links. Understand the threat landscape and learn to protect your device and data. 8 questions. 🔬',
    questions: [
      {
        id: 'tnq3_q1',
        story: null,
        scenario: 'You download a "cracked" version of a paid game from a forum. Your antivirus flags the installer as containing a "Remote Access Trojan (RAT)". What can a RAT do once installed?',
        correct: 'c',
        feedback: {
          correct: 'A RAT (Remote Access Trojan) gives an attacker complete control of your device — they can see your screen, activate your webcam and microphone, access all files, steal passwords from your browser, and use your computer as part of a botnet. Game cracks are the single most common RAT distribution method targeting teens.',
          wrong: 'RATs are far more dangerous than just showing ads. They give full remote control of your device to an attacker — including access to your webcam, microphone, files, saved passwords, and banking details saved in your browser.'
        },
        options: [
          { id: 'a', text: 'Show you advertisements in the game.' },
          { id: 'b', text: 'Slow down your computer slightly.' },
          { id: 'c', text: 'Give an attacker complete remote control of your device, including webcam, microphone, and all files.' },
          { id: 'd', text: 'Prevent the cracked game from working correctly.' }
        ],
        points: 100
      },
      {
        id: 'tnq3_q2',
        story: 'Your friend sends you a file in Discord: "bro install this mod for the game it\'s sick.exe" The file is 3.2MB. Your friend seems excited about it.',
        scenario: 'A friend sends you an .exe file via Discord for a game mod.',
        correct: 'b',
        feedback: {
          correct: 'Correct. .exe files received via Discord are one of the most common malware distribution vectors, even from friends whose accounts may have been compromised. Scan the file with VirusTotal.com (free, no installation needed) before opening ANYTHING. Your friend\'s account may itself be infected and spreading malware automatically.',
          wrong: 'Never run .exe files received via Discord without first scanning them, even from friends. Discord accounts get hacked and automatically spread malware to contacts. Scanning with VirusTotal takes 30 seconds and could save your device.'
        },
        options: [
          { id: 'a', text: 'Run it — your friend sent it so it must be safe.' },
          { id: 'b', text: 'Upload it to VirusTotal.com to scan it before opening, or ask your friend where they got it from.' },
          { id: 'c', text: 'Run it in a new folder so the virus stays contained if there is one.' },
          { id: 'd', text: 'Change the file extension from .exe to .txt to make it safer.' }
        ],
        points: 100
      },
      {
        id: 'tnq3_q3',
        story: null,
        scenario: 'What is the difference between a virus and ransomware?',
        correct: 'a',
        feedback: {
          correct: 'A virus spreads and damages files or system functions. Ransomware is a specific category that encrypts all your files and demands payment (usually in cryptocurrency) to restore access. Singapore has seen ransomware attacks on businesses and individuals. Regular offline backups are the only reliable defence.',
          wrong: 'Ransomware is a specific and highly destructive malware type that encrypts your files and demands payment. It does not just slow your computer — it makes all your documents, photos, and data inaccessible until you pay or restore from backup.'
        },
        options: [
          { id: 'a', text: 'A virus spreads and corrupts files; ransomware encrypts all your files and demands payment to restore them.' },
          { id: 'b', text: 'A virus is more dangerous than ransomware because it is harder to remove.' },
          { id: 'c', text: 'Ransomware only affects business computers, not personal devices.' },
          { id: 'd', text: 'They are the same thing — both corrupt your files.' }
        ],
        points: 100
      },
      {
        id: 'tnq3_q4',
        story: 'You visit a website to watch a free movie. A pop-up appears: "Your device has 3 CRITICAL VIRUSES! Download our security scanner NOW to remove them — it\'s FREE!" There is a big red download button.',
        scenario: 'A website pop-up warns of viruses and offers a free scanner download.',
        correct: 'd',
        feedback: {
          correct: 'This is called "scareware" — fake virus warnings designed to trick you into downloading actual malware disguised as a security tool. Websites cannot scan your device for viruses. The "free scanner" IS the malware. Close the tab and run your actual antivirus.',
          wrong: 'Websites cannot actually detect viruses on your device. This is scareware — the "scanner" you download IS the malware. Real antivirus software is installed on your device, not downloaded from pop-ups on movie streaming sites.'
        },
        options: [
          { id: 'a', text: 'Download the scanner immediately — 3 viruses sounds serious.' },
          { id: 'b', text: 'Click "Scan Now" to see the results first before downloading.' },
          { id: 'c', text: 'Pay for the premium version of the scanner to get faster removal.' },
          { id: 'd', text: 'Close the tab — websites cannot scan your device. This pop-up IS the threat.' }
        ],
        points: 100
      },
      {
        id: 'tnq3_q5',
        story: null,
        scenario: 'Which of these practices best protects you from malware when gaming online?',
        correct: 'b',
        feedback: {
          correct: 'Buying games from official platforms (Steam, Epic, PlayStation Store), keeping your OS updated, and running reputable antivirus software are the three core defences. Game cracks, third-party launchers, and unverified mods are the primary malware vectors targeting gamers.',
          wrong: 'Using incognito mode does not protect against malware at all. The most effective protection combines official purchase channels, system updates (which patch security vulnerabilities), and active antivirus.'
        },
        options: [
          { id: 'a', text: 'Only playing in incognito mode to hide your gaming activity.' },
          { id: 'b', text: 'Only downloading games from official stores, keeping your OS updated, and running antivirus software.' },
          { id: 'c', text: 'Creating a separate gaming account so malware cannot find your real details.' },
          { id: 'd', text: 'Turning off your antivirus when gaming so it does not slow down your frame rate.' }
        ],
        points: 100
      },
      {
        id: 'tnq3_q6',
        story: 'Your computer starts behaving strangely: it is very slow, your antivirus was disabled without your action, and you notice unfamiliar processes running in Task Manager.',
        scenario: 'Your computer shows multiple signs of possible compromise.',
        correct: 'c',
        feedback: {
          correct: 'These symptoms (slowness + disabled antivirus + unknown processes) strongly suggest active malware. Disconnecting from the network immediately prevents the malware from sending your data out or downloading additional payloads. Then run a full scan and tell a parent or trusted adult so you can assess what was potentially exposed.',
          wrong: 'Restarting alone will not remove persistent malware. The critical first step is disconnecting from the internet to stop any ongoing data exfiltration, then performing a full antivirus scan, and getting adult help to assess the situation.'
        },
        options: [
          { id: 'a', text: 'Restart the computer and hope it fixes itself.' },
          { id: 'b', text: 'Delete your browser history to remove the malware.' },
          { id: 'c', text: 'Disconnect from the internet immediately, run a full antivirus scan, and tell a trusted adult.' },
          { id: 'd', text: 'Continue using the computer but avoid online banking until it feels normal again.' }
        ],
        points: 100
      },
      {
        id: 'tnq3_q7',
        story: null,
        scenario: 'What is a "keylogger" and why is it particularly dangerous for gamers?',
        correct: 'a',
        feedback: {
          correct: 'A keylogger records every keystroke you type — including game account passwords, credit card numbers used for in-game purchases, and any personal information. For gamers, this means your entire account library and any payment methods saved can be stolen silently without any visible symptoms.',
          wrong: 'A keylogger records every key you press on your keyboard. This is particularly dangerous because it captures passwords, credit card numbers, and personal information as you type them — silently, with no visible symptoms.'
        },
        options: [
          { id: 'a', text: 'Software that records every keystroke you type, silently stealing passwords and payment details as you enter them.' },
          { id: 'b', text: 'A program that monitors how many hours you spend gaming and sends reports to parents.' },
          { id: 'c', text: 'A tool used by game companies to detect cheaters.' },
          { id: 'd', text: 'Malware that only targets keyboard hardware, not software.' }
        ],
        points: 100
      },
      {
        id: 'tnq3_q8',
        story: null,
        scenario: 'You find a website offering a free "aim trainer" for Valorant that requires you to disable Windows Defender before installing. Why is this a major red flag?',
        correct: 'd',
        feedback: {
          correct: 'Legitimate software never requires you to disable your antivirus to install. The only reason an installer would ask you to turn off Windows Defender is because it would be detected and blocked as malware. This is a classic malware distribution technique — the "aim trainer" is a trojan.',
          wrong: 'No legitimate software requires you to disable antivirus protection to install. Any application that makes this request is doing so because it would be detected as malware. This is a trojan disguised as a gaming utility.'
        },
        options: [
          { id: 'a', text: 'Windows Defender sometimes causes compatibility issues with aim trainers.' },
          { id: 'b', text: 'The software needs administrator access that Defender blocks by default.' },
          { id: 'c', text: 'Legitimate aim trainers often need Defender disabled to hook into game memory.' },
          { id: 'd', text: 'Legitimate software never requires disabling antivirus — this is a trojan that would be detected and blocked if Defender stayed on.' }
        ],
        points: 100
      }
    ]
  },

  // 8 — DECISION-TREE: Job Scam (Part-Time)
  {
    id: 'teens_new_dt_3',
    type: 'decision-tree',
    title: 'Too Good to Be True Job',
    subtitle: 'Spot and Escape a Part-Time Job Scam',
    icon: '💼',
    difficulty: 'Hard',
    xp: 800,
    module: 'scams',
    tags: ['finance', 'general'],
    briefing: 'MISSION: Part-time job scams targeting teens and young adults are among the most reported scam types in Singapore. A job offer has appeared. Your decisions determine whether you collect a paycheck or lose money. Stay alert. 💰',
    maxScore: 300,
    tree: {
      start: {
        type: 'choice',
        text: 'You see an Instagram ad: "Earn $800–$1,500/week working from home! Just complete simple online tasks — like, share, and rate products. No experience needed! WhatsApp us at 9XXX-XXXX to start immediately 💰" You need money for upcoming concert tickets.',
        choices: [
          { text: 'WhatsApp the number immediately — $800/week sounds amazing!', next: 'contacted', points: 0 },
          { text: 'Research this type of job offer online first before responding', next: 'researched', points: 100 },
          { text: 'Ignore it — jobs paying $800/week for liking posts are not real', next: 'skeptical', points: 50 }
        ]
      },
      contacted: {
        type: 'choice',
        text: 'They reply on WhatsApp and add you to a Telegram group with 200 others. A "manager" explains: "First task is to boost a Shopee product. Buy it ($150), screenshot the 5-star review you leave, send to us, and we refund $150 + $30 commission!" Several people in the group post screenshots of their "earnings". 📲',
        choices: [
          { text: 'Do the first task — $30 for one review sounds easy and the group looks active!', next: 'paid_first', points: 0 },
          { text: 'Refuse and leave the group — legitimate jobs never require upfront purchases', next: 'left_group', points: 100 },
          { text: 'Ask someone from the group in private if they actually got paid', next: 'asked_group', points: 50 }
        ]
      },
      researched: {
        type: 'choice',
        text: 'A quick search for "earn money liking posts Singapore" returns multiple ScamAlert.sg and SPF reports labelling this as a "task-based scam". The MOM (Ministry of Manpower) website also has a specific warning about this exact format. 🔍',
        choices: [
          { text: 'The search results warned me clearly — I will not contact them and will report the ad to Instagram', next: 'reported_ad', points: 100 },
          { text: 'Maybe mine is different — WhatsApp them anyway just to check', next: 'contacted', points: 0 }
        ]
      },
      skeptical: {
        type: 'outcome',
        text: '✅ Good instinct! When an income claim seems impossibly high for minimal work, it almost always is. You saved yourself from a time-wasting scam at minimum, and potentially a financial loss. Trust your gut on these.',
        points: 0
      },
      paid_first: {
        type: 'choice',
        text: 'You did the first task and got the $30 commission back plus the $150 refund. Feeling confident, the "manager" assigns a bigger task: "This time buy a $500 product for $50 commission. We need to hit our monthly quota!" Several group members say they did this and earned well. 💸',
        choices: [
          { text: 'Do the $500 task — the first one worked perfectly!', next: 'paid_big', points: 0 },
          { text: 'Stop now — escalating payment amounts is a classic scam escalation pattern', next: 'stopped_early', points: 100 }
        ]
      },
      left_group: {
        type: 'outcome',
        text: '✅ Perfect call. This is called a "task scam" or "money mule scam". The first small refund is designed to build your confidence before they escalate to tasks you pay for but never get refunded. Legitimate employers pay YOU — they never ask workers to spend money first. You dodged it completely. 🏆',
        points: 0
      },
      asked_group: {
        type: 'outcome',
        text: '⚠️ The people who respond positively in the group are either paid shills or also victims who have not been scammed yet (the scam builds trust first). The positive responses cannot be trusted. The safest move is to leave the group and report it. Never use scammer-controlled group members as a verification source.',
        points: 0
      },
      reported_ad: {
        type: 'outcome',
        text: '✅ Excellent. You researched, found official warnings on ScamAlert.sg, and reported the ad. Instagram acted on your report and removed it within 48 hours. You protected yourself AND potentially dozens of other teens who might have seen that ad. 🏆',
        points: 0
      },
      paid_big: {
        type: 'outcome',
        text: '❌ You paid $500. The "manager" then says: "Your account is flagged, you need to pay a $200 reactivation fee to withdraw all your earnings." Then they disappear. Total loss: $500+. Report to SPF Anti-Scam Command (1800-722-6688) immediately. The initial $30 commission was bait to build your trust.',
        points: 0
      },
      stopped_early: {
        type: 'outcome',
        text: '✅ You recognised the escalation pattern in time. The initial small payout was designed to build trust and get you to risk larger amounts. You stopped, left the group, and reported it to ScamAlert.sg. The first task working was the trap. Well done for seeing through it. 🏆',
        points: 0
      }
    }
  }
]
