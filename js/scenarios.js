// ═══════════════════════════════════════════════════════════════════════════════
// CyberGuard — Mission Scenarios
// 4 age groups × 3 missions × 3 types (quiz, spot-threat, decision-tree)
// ═══════════════════════════════════════════════════════════════════════════════

const MISSIONS = {

  // ╔══════════════════════════════════════════════════════╗
  // ║  KIDS  (7–12)                                        ║
  // ╚══════════════════════════════════════════════════════╝
  kids: [
    {
      id: 'kids_quiz_1',
      type: 'quiz',
      title: 'Agent CyberKid',
      subtitle: 'Password & Online Safety',
      icon: '🔐',
      difficulty: 'Beginner',
      xp: 300,
      briefing: 'Your mission, should you choose to accept it: answer 3 questions to unlock your Cyber Agent badge! Learn the secrets of staying safe online. 🦸',
      questions: [
        {
          id: 'k_q1',
          story: 'Your friend Zoe used "zoe123" as her game password. Now someone got into her account and changed her character\'s name! 😱',
          scenario: 'You need to create a new password for your favourite online game. Which password is the STRONGEST?',
          icon: '🔑',
          question: 'Which password is the hardest for hackers to guess?',
          options: [
            { text: 'Your pet\'s name: "fluffy"', correct: false, feedback: 'Oh no! Hackers try pet names first. It\'s too easy to guess!' },
            { text: 'A mix like "Sun$Dog7#Rain"', correct: true,  feedback: '🌟 Amazing! Long mixed passwords are like a super strong lock!' },
            { text: 'The word "password"', correct: false, feedback: 'Oops! "password" is the most guessed password ever. Never use it!' },
          ],
          tip: '💡 A great password has CAPITAL letters, small letters, numbers AND symbols! Never share it with anyone except your parents.',
          points: 100,
        },
        {
          id: 'k_q2',
          story: 'A pop-up appears while you\'re playing games online: "🎊 YOU WIN a FREE Nintendo Switch! Enter your home address to claim it NOW!" The timer is counting down!',
          scenario: 'A website you\'ve never heard of is asking for your home address to claim a prize.',
          icon: '🎁',
          question: 'What should you do?',
          options: [
            { text: 'Fill it in quickly before time runs out!', correct: false, feedback: 'STOP! Real prizes don\'t need your address from random websites. This could be dangerous!' },
            { text: 'Close the pop-up and tell a trusted adult', correct: true,  feedback: '🌟 Perfect! You were SO smart! Never share your address online without asking a grown-up.' },
            { text: 'Only enter your first name', correct: false, feedback: 'Even your name can help bad people find out more about you. Always ask an adult first!' },
          ],
          tip: '💡 Your home address, phone number, and school name are PRIVATE information. Never share them online without asking a parent or trusted adult first!',
          points: 100,
        },
        {
          id: 'k_q3',
          story: 'You\'re playing an online game and a player named "CoolGamer99" says: "Hey! I\'m 10 years old and I live near you. Want to meet at the park? Don\'t tell your parents — it\'ll be a fun surprise!"',
          scenario: 'An online gaming friend you\'ve never met wants to meet in person, and asks you to keep it secret from your parents.',
          icon: '👾',
          question: 'What should you do?',
          options: [
            { text: 'Meet them — they seem nice and the same age!', correct: false, feedback: 'DANGER! Online people can lie about who they are. CoolGamer99 could be an adult pretending to be a kid!' },
            { text: 'Tell your parents right away and do NOT go', correct: true,  feedback: '🦸 HERO move! Real friends NEVER ask you to keep secrets from your parents. Always tell a trusted adult!' },
            { text: 'Ask them to send a photo first', correct: false, feedback: 'Photos can be fake too! The only safe answer is to tell a parent. Never meet online-only friends alone!' },
          ],
          tip: '💡 Anyone asking you to KEEP SECRETS from your parents is a warning sign. Real friends don\'t do that. Always tell a trusted adult if something feels wrong online. 🚨',
          points: 100,
        },
      ],
    },

    {
      id: 'kids_spot_1',
      type: 'spot-threat',
      title: 'Danger Detective',
      subtitle: 'Spot What\'s Wrong!',
      icon: '🕵️',
      difficulty: 'Beginner',
      xp: 350,
      briefing: 'A sneaky website is trying to trick kids! Your job is to find all the DANGER SIGNS. Click on everything that looks suspicious or unsafe. Find them all to score full marks! 🔍',
      template: 'website',
      totalPoints: 500,
      content: {
        title: 'KidZone Fun Games — FREE Games for Kids!',
        url: 'www.kidzzone-freegemz.xyz',
        body: [
          { id: 'url_threat',   type: 'url-bar', text: 'kidzzone-freegemz.xyz', isThreat: true,  threatDesc: '🔴 Weird website name! ".xyz" sites are often fake. Real kids\' sites use ".com" or ".sg"' },
          { id: 'no_https',     type: 'no-padlock', text: 'No padlock icon — NOT SECURE', isThreat: true, threatDesc: '🔴 No padlock = not safe! Look for 🔒 in your browser before using any website.' },
          { id: 'ad_popup',     type: 'ad', text: '🎉 YOU ARE OUR 1,000,000th VISITOR! CLICK NOW TO WIN AN IPAD! 🎉', isThreat: true, threatDesc: '🔴 Fake prize! Real websites don\'t randomly select "winners". This is a scam ad!' },
          { id: 'personal_form',type: 'form', text: 'Enter your FULL NAME, AGE, SCHOOL and HOME ADDRESS to play games for FREE!', isThreat: true, threatDesc: '🔴 NEVER enter your school or home address on a games website. This info could be dangerous!' },
          { id: 'safe_game',    type: 'safe', text: 'Play FREE fun puzzle games! 🧩🎮', isThreat: false, threatDesc: '✅ Normal games content — this part is okay.' },
          { id: 'download_btn', type: 'download', text: '⬇️ DOWNLOAD OUR APP to get FREE GEMS — Click Here!', isThreat: true, threatDesc: '🔴 Never download apps from random websites! Only download from official app stores.' },
        ]
      },
      threats: ['url_threat','no_https','ad_popup','personal_form','download_btn'],
      pointsPerThreat: 100,
    },

    {
      id: 'kids_dt_1',
      type: 'decision-tree',
      title: 'Online Friend Alert',
      subtitle: 'Make the Right Choices!',
      icon: '🌐',
      difficulty: 'Intermediate',
      xp: 400,
      briefing: 'You\'re about to face a real online situation! Make the right choices to stay safe and earn points. Every decision matters — think before you click! 🤔',
      maxScore: 300,
      nodes: {
        start: {
          text: 'You\'re playing a popular online game when "StarPlayer99" sends you a friend request and starts chatting: "Hey! You\'re really good at this game! I\'m 11 too. Want to be friends?" 🎮',
          emoji: '🎮',
          choices: [
            { text: 'Accept and chat — they seem friendly!',       points: 0,   next: 'chat_started',    feedback: 'Chatting with strangers online can be risky. Let\'s see what happens next...' },
            { text: 'Ignore the message completely',                points: 50,  next: 'ignored',         feedback: '✅ Good instinct! But there\'s an even better approach...' },
            { text: 'Ask a parent if it\'s okay to chat first',    points: 100, next: 'parent_approved',  feedback: '🌟 PERFECT! Asking a parent first is always the safest choice!' },
          ]
        },
        chat_started: {
          text: 'You\'ve been chatting for a week. StarPlayer99 now says: "I know a secret cheat code website! But you need to type in your REAL name and email to access it." 🤫',
          emoji: '🤫',
          choices: [
            { text: 'Type in my real name and email — I want the cheat codes!', points: 0,  next: 'gave_info',     feedback: '⚠️ Oh no! Never give personal info for cheat codes or prizes online.' },
            { text: 'Refuse and tell my parents about this person',              points: 100, next: 'told_parents', feedback: '🌟 Excellent! Telling your parents was exactly the right move!' },
          ]
        },
        ignored: {
          text: 'StarPlayer99 sends ANOTHER message: "Why are you ignoring me? I just want to be friends! Here\'s a link to a COOL website with free game coins!" 🪙',
          emoji: '🪙',
          choices: [
            { text: 'Click the link — free coins sound great!',               points: 0,  next: 'clicked_link',   feedback: '⚠️ Always be careful about clicking links from strangers!' },
            { text: 'Block the person and tell my parents',                    points: 100, next: 'blocked_told',  feedback: '🌟 PERFECT! Blocking and telling an adult is the right call!' },
          ]
        },
        parent_approved: {
          text: '🏆 Your parent reviewed the messages and said this person is behaving suspiciously. They helped you block them and reported the account to the game. You stayed SAFE!',
          emoji: '🏆',
          isEnding: true,
          endingType: 'great',
          endingTitle: 'Safety Champion! 🦸',
          endingText: 'By asking your parent first, you avoided a potentially dangerous situation. You earned the maximum points! You\'re a Cyber Safety Hero!',
          points: 100,
        },
        gave_info: {
          text: 'Oh no! You gave away your real name and email. The "cheat code" website was fake and you started getting lots of spam emails. Luckily no serious harm done this time — but it could have been worse.',
          emoji: '😟',
          isEnding: true,
          endingType: 'bad',
          endingTitle: 'Lesson Learned 📚',
          endingText: 'Never give personal information for prizes or cheat codes online. Always ask a trusted adult before sharing ANY information on the internet.',
          points: 0,
        },
        told_parents: {
          text: '🎉 Your parents reported StarPlayer99 and the account was removed! You protected yourself AND other kids who might have been next. You\'re a real hero!',
          emoji: '🎉',
          isEnding: true,
          endingType: 'great',
          endingTitle: 'Hero Move! 🦸',
          endingText: 'Telling your parents about suspicious online contacts is always the right decision. You kept yourself and others safe!',
          points: 100,
        },
        clicked_link: {
          text: 'The link downloaded something onto the computer! Your parent had to run a virus scan. The "free coins" were fake — it was malware. Always ask before clicking links!',
          emoji: '😰',
          isEnding: true,
          endingType: 'bad',
          endingTitle: 'Oops! Close Call 😬',
          endingText: 'Never click links from online strangers, even if they promise free things! If you receive suspicious links, tell a trusted adult immediately.',
          points: 0,
        },
        blocked_told: {
          text: '🌟 Your parent helped you report the account and the game company investigated. By blocking and reporting, you may have helped protect other kids too!',
          emoji: '🌟',
          isEnding: true,
          endingType: 'great',
          endingTitle: 'Smart & Safe! 🛡️',
          endingText: 'Blocking suspicious contacts and telling a trusted adult is exactly the right thing to do. You stayed safe AND helped others!',
          points: 100,
        },
      }
    },

    {
      id: 'kids_quiz_2',
      type: 'quiz',
      title: 'Kindness Defender',
      subtitle: 'Cyberbullying & Online Kindness',
      icon: '💙',
      difficulty: 'Beginner',
      xp: 300,
      briefing: 'Being kind online is just as important as being kind in real life! Learn how to recognise cyberbullying, what to do if it happens, and who can help you. You\'ve got this, Kindness Defender! 💙',
      questions: [
        {
          id: 'k_q4',
          story: 'Your classmate Amir keeps posting mean comments on your school friend Priya\'s photos, saying her drawings are ugly and that nobody likes her. Priya has stopped coming online and seems very sad at school.',
          scenario: 'A classmate is posting repeated mean comments about your friend online, and your friend seems upset and withdrawn.',
          icon: '💬',
          question: 'What is Amir doing, and what should you do?',
          options: [
            { text: 'It\'s just teasing — don\'t get involved', correct: false, feedback: 'Repeated mean comments online are CYBERBULLYING, not just teasing. Staying silent lets it continue. Priya needs someone to stand up for her!' },
            { text: 'Post mean comments about Amir back — he deserves it!', correct: false, feedback: 'Fighting back with mean comments makes things worse and could get YOU in trouble too. The right move is to get a trusted adult involved.' },
            { text: 'Tell a trusted adult like a teacher or parent, and check on Priya', correct: true, feedback: '🌟 PERFECT! What Amir is doing is cyberbullying. Telling a trusted adult like a teacher is the right move. Checking on Priya shows real kindness!' },
          ],
          tip: '💡 Cyberbullying is when someone uses the internet or a phone to hurt others repeatedly — mean messages, embarrassing photos, leaving people out on purpose. Always tell a trusted adult if you see it happening!',
          points: 100,
        },
        {
          id: 'k_q5',
          story: 'You\'re in a group chat for your school project. Someone added a student called Mei without asking her, and now everyone is sending her angry messages and memes making fun of her. You feel uncomfortable.',
          scenario: 'Your group chat is being used to gang up on one student with mean messages and memes.',
          icon: '📲',
          question: 'What should you do?',
          options: [
            { text: 'Send a laughing emoji — I don\'t want to be left out', correct: false, feedback: 'Even a laughing reaction can hurt Mei and encourages the bullying to continue. Joining in — even a little — makes you part of the problem.' },
            { text: 'Stay quiet and watch — it\'s not my problem', correct: false, feedback: 'Staying silent when someone is being bullied is called being a "bystander". Mei can see who is in the chat. Your silence can feel like approval.' },
            { text: 'Stand up for Mei in the chat and tell a parent or teacher', correct: true, feedback: '🌟 BRAVE choice! Saying "this isn\'t okay" takes courage. And telling a trusted adult means a grown-up can step in to stop it properly.' },
          ],
          tip: '💡 When you stand up for someone being bullied, you become an UPSTANDER — not just a bystander. Even a simple "that\'s not nice" can make a difference. Always tell a trusted adult when cyberbullying is happening.',
          points: 100,
        },
        {
          id: 'k_q6',
          story: 'You wake up and find someone created a fake account pretending to be you. They\'ve been sending rude messages to your friends! Your friends are confused and think YOU said those things.',
          scenario: 'Someone made a fake account using your name to send rude messages to your friends.',
          icon: '😢',
          question: 'What is the BEST first step?',
          options: [
            { text: 'Message all your friends to apologise', correct: false, feedback: 'Apologising for something you didn\'t do isn\'t the right first step. You need to get the FAKE account removed first and tell a trusted adult!' },
            { text: 'Tell a trusted adult immediately and report the fake account', correct: true, feedback: '🌟 EXACTLY RIGHT! A parent, teacher, or school counsellor can help you report the fake account to the platform and clear your name. Don\'t face this alone!' },
            { text: 'Create another fake account to expose the person', correct: false, feedback: 'Creating fake accounts is against the rules of every platform — and could get your real account banned too. Always get an adult to help report it properly.' },
          ],
          tip: '💡 If someone is impersonating you online, SCREENSHOT the fake account and tell a trusted adult ASAP. Every social media platform has a way to REPORT and REMOVE fake accounts. You don\'t have to handle it alone! 🆘',
          points: 100,
        },
      ],
    },

    {
      id: 'kids_dt_2',
      type: 'decision-tree',
      title: 'Suspicious Link!',
      subtitle: 'A Friend\'s Link in Game Chat',
      icon: '🔗',
      difficulty: 'Beginner',
      xp: 400,
      briefing: 'You\'re about to face a tricky situation in your favourite game\'s chat. A message arrives with a link. Think carefully before you click ANYTHING — make the right choices to stay safe and earn your Cyber Shield badge! 🛡️',
      maxScore: 300,
      nodes: {
        start: {
          text: 'You\'re playing your favourite game when a message appears in the game chat from "LuckyGamer88": "Hey!! I found a FREE SKIN generator for this game!! Get any skin for free! Click here: www.free-skins-generator.xyz — all my friends already got theirs 🎮🎁"',
          emoji: '🎮',
          choices: [
            { text: 'Click the link — FREE skins sound amazing!',                         points: 0,   next: 'clicked_link',    feedback: '⚠️ Wait! Before clicking ANY link, we need to think about it first.' },
            { text: 'Ignore the message — free stuff online is usually a trick',          points: 50,  next: 'ignored_it',      feedback: '✅ Good thinking! Ignoring suspicious links is smart. But there is an even better move...' },
            { text: 'Ask a parent or older sibling about it before doing anything',       points: 100, next: 'asked_adult',      feedback: '🌟 BEST MOVE! Asking an adult before clicking unknown links is exactly right!' },
          ]
        },
        clicked_link: {
          text: 'The website asks you to type in your game USERNAME and PASSWORD to "verify your account" for the free skin. There\'s a countdown timer: "OFFER EXPIRES IN 5 MINUTES!" 😰',
          emoji: '😰',
          choices: [
            { text: 'Enter my username and password quickly — 5 minutes is not long!', points: 0,  next: 'account_stolen',  feedback: '🚨 DANGER! Real game websites NEVER need your password from a link in chat. This will steal your account!' },
            { text: 'Close the website immediately and tell a parent',                   points: 100, next: 'safe_escape',    feedback: '✅ Smart! Closing the site right away and telling an adult is the right call!' },
          ]
        },
        ignored_it: {
          text: '"LuckyGamer88" messages again: "Why aren\'t you clicking? I promise it\'s safe! My friend got 10 free skins yesterday! Here\'s the link again: www.free-skins-generator.xyz 🎁"',
          emoji: '🤔',
          choices: [
            { text: 'Maybe it IS safe — my in-game friend says so, I\'ll try it',   points: 0,  next: 'clicked_link',  feedback: '⚠️ Just because someone in a game says something is safe doesn\'t mean it is. Strangers online can lie!' },
            { text: 'Block "LuckyGamer88" and report the message in the game',       points: 100, next: 'reported_it',  feedback: '🌟 PERFECT! Blocking and reporting suspicious messages helps protect you AND other players!' },
          ]
        },
        asked_adult: {
          text: 'You show the message to your parent. They look at the link "www.free-skins-generator.xyz" and explain: "This is a PHISHING website — it will try to steal your game password. Real games give skins in the official game shop, never from random websites!" 🏆',
          emoji: '🏆',
          choices: [
            { text: 'Block "LuckyGamer88" and report the chat message with my parent\'s help', points: 100, next: 'hero_ending', feedback: '🌟 EXCELLENT! You asked an adult, learned why it\'s dangerous, AND reported it. Triple win!' },
          ]
        },
        account_stolen: {
          text: 'The scam website stole your username and password. Someone logged into your game account, changed the password, and took all your items. It can take a long time to get it back. 😟',
          emoji: '😟',
          isEnding: true,
          endingType: 'bad',
          endingTitle: 'Account Stolen! 📚',
          endingText: 'Scammers use fake "free item" websites to steal game accounts. NEVER type your game password on any website other than the official game website. Always ask a parent before clicking links in game chats!',
          points: 0,
        },
        safe_escape: {
          text: 'You closed the website before typing anything — your account is safe! You tell your parent, who helps you report the link to the game\'s support team so other players are warned. ✅',
          emoji: '✅',
          isEnding: true,
          endingType: 'great',
          endingTitle: 'Quick Thinking! 🛡️',
          endingText: 'You recognised the trick in time and closed the site before any harm was done. Great instincts! Remember: no legitimate game will ever ask for your password through a chat link.',
          points: 100,
        },
        reported_it: {
          text: '🌟 You blocked the suspicious player and reported the message. The game\'s support team investigated and found "LuckyGamer88" had been sending the scam link to hundreds of players. Your report helped protect everyone!',
          emoji: '🌟',
          isEnding: true,
          endingType: 'great',
          endingTitle: 'Community Protector! 🦸',
          endingText: 'Blocking and reporting suspicious links in game chats helps protect you AND the whole gaming community. You\'re a real Cyber Hero!',
          points: 100,
        },
        hero_ending: {
          text: '🏆 Because you asked an adult first, you avoided the scam completely! The game support team removed "LuckyGamer88" from the platform. You protected yourself and made the game safer for everyone.',
          emoji: '🏆',
          isEnding: true,
          endingType: 'great',
          endingTitle: 'Cyber Shield Earned! 🛡️',
          endingText: 'Asking a trusted adult before clicking unknown links is ALWAYS the right move. You showed great judgment today — that\'s what a true Cyber Agent does!',
          points: 100,
        },
      }
    },
  ],

  // ╔══════════════════════════════════════════════════════╗
  // ║  TEENS  (13–17)                                      ║
  // ╚══════════════════════════════════════════════════════╝
  teens: [
    {
      id: 'teens_quiz_1',
      type: 'quiz',
      title: 'Cyber Recon',
      subtitle: 'Social Media & Phishing Intel',
      icon: '📡',
      difficulty: 'Intermediate',
      xp: 350,
      briefing: 'MISSION BRIEFING: Threat actors are targeting teens through social media and phishing attacks. Your intel skills will be tested across 3 high-stakes scenarios. Prove you can spot the traps. 🎯',
      questions: [
        {
          id: 't_q1',
          story: 'You just returned from a holiday and posted 15 photos on Instagram. Your account is PUBLIC. One photo shows your school uniform. Another has your house visible with the street sign. Your caption says "Home alone this weekend while parents are in Bali 🏖️".',
          scenario: 'Your public profile now contains your school, location, and information that you\'re home alone.',
          icon: '📱',
          question: 'What is the BIGGEST real-world risk from this combination of posts?',
          options: [
            { text: 'Your friends might feel jealous of the holiday photos', correct: false, feedback: 'Social dynamics aren\'t the cybersecurity issue here. Think about what a STRANGER could do with this information.' },
            { text: 'Strangers can identify where you live, go to school, and know you\'re alone — a safety threat', correct: true, feedback: '⚡ EXACTLY. School + home location + "home alone" = a dangerous combination on a public profile. This is how predators and burglars find targets.' },
            { text: 'Too many posts might get your account shadowbanned', correct: false, feedback: 'Algorithm issues aren\'t the risk here. Focus on what personal information is exposed to strangers on a public account.' },
          ],
          tip: '🔒 Audit your socials NOW: set to private, disable location tagging, never post when home alone. Ask yourself: "Would I put this on a public notice board?" If not, don\'t post it.',
          points: 120,
        },
        {
          id: 't_q2',
          story: 'Your favourite content creator "TechWithAlex" DMed you on Instagram: "Hey! I\'m giving FREE AirPods to my top 100 fans! Just click this link and log in to claim: www.instagrarn-gifts.com 🎧" The account has 2M followers and a blue tick.',
          scenario: 'A verified-looking creator DMs you with a "free prize" link to a website that looks like Instagram but has a slightly different URL.',
          icon: '🎣',
          question: 'What is happening and what should you do?',
          options: [
            { text: 'Log in quickly — free AirPods are limited and this creator is legit!', correct: false, feedback: 'PHISHING ATTACK! Look closely: "instagrarn" not "instagram" — the "rn" looks like "m". Logging in sends your password straight to a hacker. The blue tick can be faked on a cloned account.' },
            { text: 'Spot the fake URL, report the account, and don\'t click anything', correct: true,  feedback: '⚡ THREAT DETECTED. The misspelled domain "instagrarn.com" is a textbook phishing lookalike. Real giveaways NEVER ask for your login through a DM link.' },
            { text: 'Ask your friend if they got the same DM before deciding', correct: false, feedback: 'Not bad thinking, but the correct action is to report immediately. Every second you wait, more people might fall for it.' },
          ],
          tip: '🔗 Zoom in on URLs before clicking — hackers use lookalike domains (rn→m, 0→o, 1→l). Legitimate platforms NEVER ask for your password through a DM. Check the real account directly in-app.',
          points: 120,
        },
        {
          id: 't_q3',
          story: 'It\'s 1 AM and you\'re venting online after a horrible day: "I literally hate this school so much, I want to burn it down 😡 everyone is fake and the principal is useless." You delete it 20 minutes later. 3 years later you\'re applying for your dream university.',
          scenario: 'You posted angry content with threatening language, deleted it 20 minutes later. Universities Google all applicants.',
          icon: '🌐',
          question: 'What is the key truth about your digital footprint?',
          options: [
            { text: 'Deleting a post removes it completely — no evidence remains', correct: false, feedback: 'MYTH BUSTED. Screenshots, Google cache, and the Wayback Machine preserve deleted content. It was public for 20 minutes — more than enough time for someone to capture it.' },
            { text: 'Once posted, content can last forever and affect future opportunities', correct: true,  feedback: '⚡ CORRECT. Universities, employers, and police regularly check online presence. "Threatening" language — even venting — can trigger investigations. Think before you post.' },
            { text: 'Only your followers could see it, and none would screenshot it', correct: false, feedback: 'Any follower could screenshot and share. Depending on privacy settings, it may have been fully public. Even private posts can leak through screenshots.' },
          ],
          tip: '🌍 Google yourself right now. Your digital footprint follows you for LIFE. Before posting anything, ask: "Would I be okay if my future employer, university, or parents saw this?" If unsure — DON\'T POST.',
          points: 120,
        },
      ],
    },

    {
      id: 'teens_spot_1',
      type: 'spot-threat',
      title: 'Phish Hunter',
      subtitle: 'Identify Every Threat in This DM',
      icon: '🎣',
      difficulty: 'Intermediate',
      xp: 400,
      briefing: 'MISSION: A suspicious Instagram DM has been flagged. Your job is to identify EVERY threat indicator in this conversation. Click on anything that looks like a social engineering or phishing attempt. Your score depends on finding them ALL. 🔍',
      template: 'dm',
      totalPoints: 500,
      content: {
        platform: 'Instagram DM',
        sender: { name: 'TechWithAlex_Official', verified: false, followers: '2.1M' },
        messages: [
          { id: 'verified_fake',  from: 'them', text: '✅ Verified Creator DM', type: 'header',      isThreat: true,  threatDesc: '🔴 This account has NO blue tick but claims to be "Official". Always check the REAL creator\'s profile directly — don\'t trust DM senders.' },
          { id: 'urgency',        from: 'them', text: 'Hey! You\'re one of my top 100 fans! This offer EXPIRES IN 10 MINUTES ⏰', isThreat: true, threatDesc: '🔴 URGENCY TACTIC. Scammers create fake time pressure to stop you thinking clearly. Legitimate giveaways never have 10-minute windows.' },
          { id: 'prize_bait',     from: 'them', text: 'I\'m giving FREE Sony WH-1000XM5 headphones to selected fans! 🎧', isThreat: false, threatDesc: '⚠️ Enticing offer, but not yet a threat on its own. Watch what comes next.' },
          { id: 'fake_url',       from: 'them', text: 'Just verify at: www.instag ram-official-gifts.co/claim 🎁', isThreat: true, threatDesc: '🔴 FAKE URL. "instag ram-official-gifts.co" is NOT Instagram. There is even a space in "instag ram". Instagram\'s real domain is only instagram.com.' },
          { id: 'password_req',   from: 'them', text: 'Login with your Instagram username and password to confirm you\'re a real fan ✔️', isThreat: true, threatDesc: '🔴 CREDENTIAL HARVESTING. NO legitimate giveaway asks for your Instagram password. This site will steal your login details.' },
          { id: 'secrecy',        from: 'them', text: 'Don\'t tell others yet — we\'re still selecting winners! Keep this between us 🤫', isThreat: true, threatDesc: '🔴 SECRECY REQUEST. Scammers ask you to stay quiet so friends can\'t warn you. Legitimate companies want you to share their giveaways!' },
          { id: 'payment',        from: 'them', text: 'There\'s just a small $5 shipping fee via PayNow to 81234567 to confirm your address 💳', isThreat: true, threatDesc: '🔴 ADVANCE FEE FRAUD. "Small shipping fees" for prizes you didn\'t enter are a classic scam. You\'ll never receive the prize.' },
        ]
      },
      threats: ['verified_fake','urgency','fake_url','password_req','secrecy','payment'],
      pointsPerThreat: 83,
    },

    {
      id: 'teens_dt_1',
      type: 'decision-tree',
      title: 'Account Takeover',
      subtitle: 'Defend Your Gaming Account',
      icon: '🕹️',
      difficulty: 'Advanced',
      xp: 450,
      briefing: 'INTEL REPORT: Your Steam gaming account is under targeted attack. Threat actors are using social engineering to gain access. Every decision you make in the next few minutes determines whether you keep your account — and your $400 inventory. Make the right calls. 🎮',
      maxScore: 300,
      nodes: {
        start: {
          text: 'Your friend "Jake" sends you a Steam trade offer: "Hey, can you log into this site to verify your Steam age for the trade? www.steam-community-verify.net — it\'s official, I use it all the time." The link has the Steam logo. 🎮',
          emoji: '🎮',
          choices: [
            { text: 'Log in — Jake sent it and it has the Steam logo',              points: 0,  next: 'logged_in',     feedback: '⚠️ Never log in via links from chats. Steam logos can be copied by anyone.' },
            { text: 'Check if the URL is actually steam.com before anything',        points: 100, next: 'url_check',    feedback: '⚡ Smart move. Always verify URLs before entering credentials.' },
            { text: 'Message Jake on Discord to confirm he sent it',                 points: 100, next: 'verify_jake',  feedback: '⚡ Excellent instinct — out-of-band verification is exactly right.' },
          ]
        },
        logged_in: {
          text: 'You logged in. Now the site says: "Your Steam account has been flagged. Enter your Steam Guard code to clear the flag." Your phone just received a code. 📱',
          emoji: '📱',
          choices: [
            { text: 'Enter the Steam Guard code to fix the issue',  points: 0,  next: 'account_gone',  feedback: '⚠️ That Steam Guard code was the 2FA for changing your account email. The attacker now owns your account.' },
            { text: 'STOP — close everything and change my Steam password immediately', points: 50, next: 'damage_control', feedback: '✅ Right call — act fast to limit the damage.' },
          ]
        },
        url_check: {
          text: 'You look at the URL carefully: "steam-community-verify.net". The REAL Steam is at "store.steampowered.com". This is a FAKE site. Jake\'s account was probably already hacked and used to spread this. 🕵️',
          emoji: '🕵️',
          choices: [
            { text: 'Report the link to Steam, warn Jake via Discord/phone', points: 100, next: 'hero_ending', feedback: '⚡ Perfect. You caught the attack AND helped protect your friend.' },
            { text: 'Just ignore it — not my problem',                       points: 0,  next: 'ignored_warning', feedback: 'You\'re safe, but Jake\'s other friends might fall for it. Reporting takes 30 seconds.' },
          ]
        },
        verify_jake: {
          text: 'You message Jake on Discord. He replies: "Wait what?? I didn\'t send that!! My Steam account got hacked somehow and it\'s been messaging all my friends!" 😱',
          emoji: '😱',
          choices: [
            { text: 'Help Jake report the hacked account and warn his friend list', points: 100, next: 'hero_ending',     feedback: '⚡ Outstanding. You verified, identified the attack, and helped contain it.' },
            { text: 'Tell Jake to deal with it himself — not your account',         points: 0,  next: 'ignored_warning', feedback: 'You\'re safe, but the attack will continue spreading to Jake\'s other friends.' },
          ]
        },
        account_gone: {
          text: 'Your Steam account\'s email and password were changed. Your $400 inventory is gone. Steam Support takes weeks to investigate. This could have been prevented with one URL check. 😔',
          emoji: '😔',
          isEnding: true,
          endingType: 'bad',
          endingTitle: 'Account Compromised 💀',
          endingText: 'The fake site stole your credentials and the Steam Guard code completed the account takeover. Always check URLs and NEVER enter OTP codes on third-party sites. Enable Steam Family View for extra protection.',
          points: 0,
        },
        damage_control: {
          text: 'You changed your Steam password fast. The attacker hadn\'t finished — your account is saved! But it was close. The inventory is safe. ✅',
          emoji: '✅',
          isEnding: true,
          endingType: 'ok',
          endingTitle: 'Narrow Escape! 😅',
          endingText: 'You caught the attack in time. Next time: always check URLs BEFORE entering any credentials. Use a unique email for gaming accounts and never reuse passwords.',
          points: 50,
        },
        hero_ending: {
          text: '🏆 You identified the phishing site, avoided the attack, reported it to Steam, and warned Jake. His account was recovered and the malicious bot was removed. You\'re a genuine threat analyst. 🔐',
          emoji: '🏆',
          isEnding: true,
          endingType: 'great',
          endingTitle: 'Threat Neutralised! ⚡',
          endingText: 'Perfect execution: URL verification → out-of-band confirmation → report and contain. This is exactly how real security professionals respond to social engineering attacks.',
          points: 100,
        },
        ignored_warning: {
          text: 'Three of Jake\'s other friends lost their accounts before Steam shut down the phishing site. Your 30 seconds of reporting could have prevented it. Security is a community effort. 🤝',
          emoji: '🤝',
          isEnding: true,
          endingType: 'ok',
          endingTitle: 'Safe But Could Do More 🛡️',
          endingText: 'You protected yourself — great! But cybersecurity is about protecting the whole community. Reporting phishing links takes 30 seconds and can protect dozens of people.',
          points: 50,
        },
      }
    },

    {
      id: 'teens_quiz_2',
      type: 'quiz',
      title: 'WiFi Warrior',
      subtitle: 'Public WiFi Dangers',
      icon: '📶',
      difficulty: 'Intermediate',
      xp: 350,
      briefing: 'Free WiFi at Starbucks, the MRT, or your school canteen seems harmless — but it can be a hacker\'s playground. Test your knowledge of public network risks and learn how to protect yourself wherever you connect. 📶',
      questions: [
        {
          id: 't_q4',
          story: 'You\'re at Orchard Road and connect to a free WiFi network called "Orchard_Free_WiFi". You log into your OCBC banking app to transfer money for a friend. The WiFi required no password to join.',
          scenario: 'You logged into your banking app over an open (no password) public WiFi network at a busy shopping area.',
          icon: '🏦',
          question: 'What is the main risk of using banking apps on open public WiFi?',
          options: [
            { text: 'Your phone battery drains faster on public WiFi', correct: false, feedback: 'Battery drain is not the security concern here. Think about who else might be on the same network — and what they could see.' },
            { text: 'An attacker on the same network could intercept your data with a man-in-the-middle attack', correct: true, feedback: '⚡ CORRECT. On open WiFi, attackers can use tools to intercept network traffic. Even worse, "Orchard_Free_WiFi" could be a FAKE hotspot set up by a hacker to harvest credentials.' },
            { text: 'The bank\'s server will block your login from public WiFi', correct: false, feedback: 'Banks don\'t block public WiFi logins — they have no way to distinguish it. The danger is on the network between your phone and the internet, not at the bank\'s end.' },
          ],
          tip: '🔒 NEVER access banking, SingPass, or email accounts on public WiFi without a VPN. Better yet — switch to mobile data (4G/5G) for anything sensitive. Your mobile data is encrypted end-to-end between you and your carrier.',
          points: 100,
        },
        {
          id: 't_q5',
          story: 'Your friend says: "I always use a VPN on public WiFi. It makes me totally invisible and 100% safe — I can do anything online now!" They\'re now using their VPN on public WiFi to torrent files and access blocked sites freely.',
          scenario: 'Your friend believes a VPN makes them completely anonymous and safe from all threats online.',
          icon: '🛡️',
          question: 'What does a VPN actually protect against — and what doesn\'t it cover?',
          options: [
            { text: 'A VPN protects all traffic and makes you fully anonymous online', correct: false, feedback: 'MYTH. A VPN encrypts your traffic and hides your IP from websites — but your VPN provider can still see your activity. It also does NOT protect against malware, phishing, or account breaches.' },
            { text: 'A VPN encrypts your traffic on the network but does not protect against malware or phishing', correct: true, feedback: '⚡ CORRECT. VPNs encrypt the pipe — they protect against network eavesdropping on public WiFi. But a phishing email, malware download, or weak password bypasses a VPN completely.' },
            { text: 'A VPN is only useful for watching geo-blocked streaming content', correct: false, feedback: 'VPNs do help with geo-blocking but their primary security purpose is to encrypt traffic on untrusted networks like public WiFi. Dismissing VPNs entirely misses their real value.' },
          ],
          tip: '📖 A VPN = encrypted tunnel for your traffic. It stops network eavesdropping on public WiFi. It does NOT stop phishing, malware, or weak passwords. Use it as one layer of security — not a magic shield.',
          points: 100,
        },
        {
          id: 't_q6',
          story: 'You\'re studying at a library and spot two WiFi networks: "NLB_Library_WiFi" and "NLB_Library_WiFi_FREE". You\'ve used the library WiFi before — it was just "NLB_Library_WiFi" and needed a library card login.',
          scenario: 'Two very similar WiFi networks are visible — one matching what you know, and one with "_FREE" added that requires no login.',
          icon: '📡',
          question: 'What is the "_FREE" network most likely to be?',
          options: [
            { text: 'The library upgraded their WiFi and added a free tier — both are safe', correct: false, feedback: 'This is an extremely dangerous assumption. Before connecting to any new network, verify with library staff. The "_FREE" network shows classic signs of an Evil Twin attack.' },
            { text: 'An Evil Twin attack — a fake hotspot designed to mimic the real network and intercept your traffic', correct: true, feedback: '⚡ THREAT IDENTIFIED. Evil Twin attacks involve setting up a rogue access point with a similar name to a trusted network. All your traffic flows through the attacker\'s device. Never connect to surprise "free" variants of known networks.' },
            { text: 'A guest network provided by a different ISP — safe to use', correct: false, feedback: 'You have no evidence of this. Any network requiring zero authentication that appears alongside a known secure network should be treated as suspicious. Verify with library staff first.' },
          ],
          tip: '⚠️ Evil Twin hotspots are common in libraries, cafes, and MRT stations. Always confirm WiFi names with staff BEFORE connecting. Look for HTTPS on every site you visit, and consider your phone\'s 4G/5G data for sensitive tasks.',
          points: 100,
        },
      ],
    },

    {
      id: 'teens_spot_2',
      type: 'spot-threat',
      title: 'Fake Giveaway DM',
      subtitle: 'Spot the Red Flags in This DM',
      icon: '🎁',
      difficulty: 'Intermediate',
      xp: 400,
      briefing: 'MISSION: A suspicious Instagram DM pretending to be a brand giveaway has been flagged. Identify every threat indicator in this conversation. Click on each suspicious element to score — find all 5 to ace the mission! 🔍',
      template: 'dm',
      totalPoints: 500,
      content: {
        platform: 'Instagram DM',
        sender: { name: 'Nikesg_Rewards_Official', verified: false, followers: '847' },
        messages: [
          { id: 'impersonation',  from: 'them', text: '🏆 NIKE SINGAPORE OFFICIAL GIVEAWAY — You have been selected!', type: 'header', isThreat: true,  threatDesc: '🔴 BRAND IMPERSONATION. This account has only 847 followers, no blue tick, and a generic name. The real Nike Singapore account (@nikesingapore) is verified with hundreds of thousands of followers. Always check the REAL brand\'s profile.' },
          { id: 'urgency_dm',     from: 'them', text: 'Congratulations! You\'ve been chosen as one of 10 winners of our S$500 Nike gift card! 🎉 You have ONLY 24 HOURS to claim before we select another winner ⏰', isThreat: true,  threatDesc: '🔴 URGENCY TACTIC. The 24-hour countdown is designed to panic you into acting before you think. Legitimate brand giveaways send official emails with extended claim windows, not 24-hour DM deadlines.' },
          { id: 'safe_logo',      from: 'them', text: '✔ Verified Nike Partner Programme — Powered by ShopRewards SG', isThreat: false, threatDesc: '⚠️ This looks official but is just text — anyone can type this. It is not a real verification badge.' },
          { id: 'info_harvest',   from: 'them', text: 'To receive your gift card, DM us your: Full Name, NRIC number, home address, and date of birth for identity verification 📋', isThreat: true,  threatDesc: '🔴 PERSONAL DATA HARVESTING. No legitimate brand giveaway requires your NRIC number via Instagram DM. This data can be used for identity theft. Real brands send gift codes via email, never via DM asking for NRIC.' },
          { id: 'paynow_fee',     from: 'them', text: 'There is a small S$3 processing fee via PayNow UEN: 53xxxxxx8K to activate your gift card 💳', isThreat: true,  threatDesc: '🔴 ADVANCE FEE FRAUD. Charging a "processing fee" for a prize you won is a classic scam. Real giveaway prizes are free — there are never any fees. You will lose the $3 and never receive any gift card.' },
          { id: 'secrecy_dm',     from: 'them', text: 'Please keep this DM private — we are still notifying other winners and don\'t want to create a rush! 🤫', isThreat: true,  threatDesc: '🔴 SECRECY REQUEST. Asking you to keep the giveaway secret prevents friends from warning you it\'s a scam. Real brand campaigns want viral sharing — they never ask winners to stay quiet.' },
          { id: 'safe_brand',     from: 'them', text: 'Thank you for being a loyal Nike Singapore customer! 👟', isThreat: false, threatDesc: '⚠️ Friendly closing language is used to build false trust. The message still contains multiple major red flags above.' },
        ]
      },
      threats: ['impersonation','urgency_dm','info_harvest','paynow_fee','secrecy_dm'],
      pointsPerThreat: 100,
    },
  ],

  // ╔══════════════════════════════════════════════════════╗
  // ║  ADULTS  (18–45)                                     ║
  // ╚══════════════════════════════════════════════════════╝
  adults: [
    {
      id: 'adults_quiz_1',
      type: 'quiz',
      title: 'Threat Assessment',
      subtitle: 'Workplace Cyber Threats',
      icon: '🏢',
      difficulty: 'Intermediate',
      xp: 400,
      briefing: 'Corporate environments are prime targets for sophisticated cyber attacks. Three real-world workplace scenarios await your assessment. Each wrong answer costs your organisation. Each right answer strengthens your security posture.',
      questions: [
        {
          id: 'a_q1',
          story: 'It\'s Friday at 4:45 PM. You receive an email from your CEO (ceo@yourcompany-sg.co — note the ".co" not ".com"): "Sarah, urgent — I\'m in a board meeting and need you to transfer $18,000 to a new vendor. Wire to DBS Account 072-XXXXX. Reply here only, this is confidential."',
          scenario: 'Urgent after-hours email from "CEO" requesting an immediate bank transfer to an unfamiliar account, bypassing normal approval processes.',
          icon: '📧',
          question: 'This is a Business Email Compromise (BEC) attempt. What is your immediate response?',
          options: [
            { text: 'Process the transfer — the CEO is urgent and it\'s marked confidential', correct: false, feedback: 'BEC FRAUD — Singapore\'s costliest scam type, with businesses losing over $30M annually. The ".co" domain, urgency, and secrecy are classic BEC indicators. NEVER process wire transfers without out-of-band verification.' },
            { text: 'Call your CEO directly on their known mobile number to verify before acting', correct: true,  feedback: '✅ CORRECT. Out-of-band verification (a direct phone call to a KNOWN number — not from the email) is the only safe way to verify urgent financial requests. BEC attacks are defeated by this single step.' },
            { text: 'Reply to the email asking for more documentation', correct: false, feedback: 'Replying to the email contacts the attacker, not your CEO. They\'re monitoring it actively. Always use a completely separate communication channel — call their mobile you already have saved.' },
          ],
          tip: '🚨 Any email request that is urgent + financial + asks for secrecy = HIGH RISK. Mandatory: verify via a separate channel before acting. Implement dual-approval for all transfers over $1,000.',
          points: 150,
        },
        {
          id: 'a_q2',
          story: 'You receive an email from "hr@yourcompany-hrportal.com" (note: not your company\'s real domain) with subject "URGENT: Your December payslip — bank details error". Attached: "Payslip_Dec_2025.pdf.exe". You need your salary.',
          scenario: 'A payslip email from a slightly off HR domain contains a file with a double extension: .pdf.exe — designed to look like a PDF but is actually an executable program.',
          icon: '📎',
          question: 'What action do you take?',
          options: [
            { text: 'Open the attachment — it\'s from HR and you need your payslip urgently', correct: false, feedback: 'MALWARE DROPPER. The ".exe" means it\'s a program, not a PDF. Running it could install ransomware encrypting all company files. The off-domain sender confirms this is not from your real HR team.' },
            { text: 'Report to IT security immediately and verify with HR via your company intranet', correct: true,  feedback: '✅ CORRECT. Double extensions (.pdf.exe) are a classic malware delivery method. Never open — report to IT immediately. Your real HR would never send payslips as executable files from an external domain.' },
            { text: 'Forward to your personal email to open on your phone where it\'s safer', correct: false, feedback: 'This spreads the threat to your personal device and potentially your contacts. Never forward suspicious files. Report and delete — do not engage.' },
          ],
          tip: '📁 Enable "show file extensions" in Windows (Folder Options → View). A file ending .pdf.exe, .doc.exe or .jpg.exe is ALWAYS malware. Your real HR uses your company\'s official domain — nothing else.',
          points: 150,
        },
        {
          id: 'a_q3',
          story: 'An unsolicited call: "Hi, I\'m Dave from IT Support. We\'ve detected unusual activity on your PC from your IP. I need to remote in using AnyDesk to remediate it urgently. Can you download AnyDesk and read me the 9-digit code? Also what\'s your Windows password so I can apply the fix?"',
          scenario: 'An unannounced caller claiming to be IT support requests remote access to your computer and your login password.',
          icon: '🖥️',
          question: 'You recognise this as social engineering. What do you do?',
          options: [
            { text: 'Give the AnyDesk code and password — you need your computer fixed', correct: false, feedback: 'VISHING + SOCIAL ENGINEERING ATTACK. Legitimate IT support NEVER calls out of the blue asking for your password. With AnyDesk access, they can steal all files, install persistent malware, and access your company network.' },
            { text: 'Hang up, call your real IT helpdesk using the number from your company intranet, and report the incident', correct: true,  feedback: '✅ CORRECT. Verify via your official IT channel. Your password should NEVER be shared with anyone — including real IT staff. Report this to your security team — others in your company may have been called.' },
            { text: 'Give remote access only, but refuse to share your password', correct: false, feedback: 'Remote access alone is catastrophic — they can see everything, install keyloggers, access all saved passwords, and move laterally through your network. Never grant remote access to unverified callers.' },
          ],
          tip: '🛡️ Your IT team will NEVER call asking for your password or unexpected remote access. If someone does: hang up → call your real IT helpdesk → report the incident. Your password is a SECRET — not even IT needs it.',
          points: 150,
        },
      ],
    },

    {
      id: 'adults_spot_1',
      type: 'spot-threat',
      title: 'Email Forensics',
      subtitle: 'Analyse the BEC Attack Email',
      icon: '🔬',
      difficulty: 'Advanced',
      xp: 500,
      briefing: 'A suspicious email has been quarantined by your security team. Conduct a full forensic analysis — identify every indicator of compromise (IoC) in this Business Email Compromise attempt. Your thoroughness protects the entire organisation.',
      template: 'email',
      totalPoints: 600,
      content: {
        platform: 'Corporate Email Client',
        from: { name: 'James Lim (CEO)', email: 'j.lim@yourcompany-sg.co', isThreat: true },
        to: 'sarah.wong@yourcompany.com.sg',
        subject: 'URGENT: Confidential Vendor Payment Required Today',
        timestamp: 'Friday, 5:12 PM',
        body: [
          { id: 'sender_domain', type: 'sender',  text: 'From: j.lim@yourcompany-sg.co', isThreat: true,  threatDesc: '🔴 SPOOFED DOMAIN. Your CEO\'s real email is @yourcompany.com.sg — the attacker registered "yourcompany-sg.co" (a lookalike domain) to impersonate him.' },
          { id: 'urgency_flag',  type: 'text',    text: 'Sarah, I need this done TODAY before 6 PM. Do not discuss with finance — I\'m handling this personally.', isThreat: true, threatDesc: '🔴 URGENCY + SECRECY. Legitimate business payments go through proper approval channels. Bypass requests and secrecy are primary BEC indicators.' },
          { id: 'new_vendor',    type: 'text',    text: 'We have a new vendor: Premier Solutions (SG) Pte Ltd. Their DBS account is 072-XXXXX-X, PayNow: 12345678X.', isThreat: true, threatDesc: '🔴 NEW/UNVERIFIED VENDOR. Any new payment recipient should be verified through official procurement channels — never from a single email.' },
          { id: 'amount',        type: 'text',    text: 'Please wire SGD 24,500 immediately. This is for a time-sensitive contract that expires tonight.', isThreat: true, threatDesc: '🔴 LARGE AMOUNT + EXPIRY PRESSURE. The "expires tonight" pressure is designed to short-circuit your normal approval process.' },
          { id: 'reply_only',    type: 'text',    text: 'Reply ONLY to this email. Do not call my office — I am in confidential negotiations.', isThreat: true, threatDesc: '🔴 "REPLY ONLY" IS A RED FLAG. This prevents you from using a separate channel to verify. Your real CEO would WANT you to call to verify a payment this large.' },
          { id: 'safe_closing',  type: 'text',    text: 'Thanks,\nJames Lim\nCEO, YourCompany Pte Ltd', isThreat: false, threatDesc: '⚠️ The signature looks legitimate — but attackers copy signatures from real emails. The signature authenticity means nothing without email header verification.' },
          { id: 'no_pgp',        type: 'footer',  text: '[No email signature / PGP verification]', isThreat: true, threatDesc: '🔴 NO DIGITAL SIGNATURE. Enterprise emails from executives should be digitally signed (S/MIME or PGP). The absence of a verified signature is a technical red flag.' },
        ]
      },
      threats: ['sender_domain','urgency_flag','new_vendor','amount','reply_only','no_pgp'],
      pointsPerThreat: 100,
    },

    {
      id: 'adults_dt_1',
      type: 'decision-tree',
      title: 'The Friday Transfer',
      subtitle: 'CEO Fraud in Real Time',
      icon: '💼',
      difficulty: 'Advanced',
      xp: 500,
      briefing: 'SCENARIO: It\'s 5:15 PM Friday. You are a finance executive. An urgent payment request has arrived. Your decisions in the next few minutes will determine whether your company loses $24,500. Every second counts — but so does every verification step.',
      maxScore: 300,
      nodes: {
        start: {
          text: 'You receive an urgent email from "CEO James Lim" (j.lim@yourcompany-sg.co) demanding a $24,500 wire transfer to a new vendor before 6 PM. The email signature looks exactly right. It\'s 5:15 PM on Friday. 💼',
          emoji: '💼',
          choices: [
            { text: 'Process the transfer immediately — CEO is clear, it\'s urgent',            points: 0,   next: 'transferred',       feedback: '⚠️ Without ANY verification, you\'ve exposed the company to fraud.' },
            { text: 'Check the sender\'s email domain first before anything else',              points: 50,  next: 'domain_checked',    feedback: '✅ Good first step — domain verification is critical.' },
            { text: 'Call the CEO\'s known mobile number to verify before touching anything',   points: 100, next: 'called_ceo',        feedback: '✅ TEXTBOOK RESPONSE. Out-of-band verification first.' },
          ]
        },
        transferred: {
          text: 'The $24,500 hits the fraudulent account. Within 2 hours it\'s been moved through 3 mule accounts and withdrawn overseas. Your company loses the full amount. You are placed on performance review. 😔',
          emoji: '😔',
          isEnding: true,
          endingType: 'bad',
          endingTitle: 'Company Funds Lost 💸',
          endingText: 'BEC fraud is the #1 business cybercrime in Singapore. A single phone call to your CEO\'s known mobile would have prevented this. Implement mandatory dual-approval for all transfers over $5,000.',
          points: 0,
        },
        domain_checked: {
          text: 'You notice the domain is "yourcompany-sg.co" not "yourcompany.com.sg". This is a lookalike domain — a CLEAR red flag. What do you do now? 🔍',
          emoji: '🔍',
          choices: [
            { text: 'Reply to the email asking the CEO to clarify',              points: 0,  next: 'replied_attacker', feedback: '⚠️ Replying contacts the attacker, not your CEO. They\'ll impersonate him further.' },
            { text: 'Call the CEO\'s actual mobile number right now',            points: 100, next: 'called_ceo',       feedback: '✅ Correct. Use a contact you already have — not anything in the suspicious email.' },
          ]
        },
        replied_attacker: {
          text: 'The attacker replies instantly, adding more pressure: "Sarah, I\'m in a critical meeting. Just process it. I\'ll explain on Monday. Do NOT call my office." They\'re now coaching you to avoid verification. ⚠️',
          emoji: '⚠️',
          choices: [
            { text: 'Process the transfer — the CEO sounds stressed, I\'ll help', points: 0,  next: 'transferred',  feedback: '⚠️ The attacker is using psychological pressure. "Do NOT call" is the biggest red flag.' },
            { text: 'STOP — call the CEO\'s real mobile right now',               points: 50, next: 'called_ceo',   feedback: '✅ Better late than never. Always verify through a known channel.' },
          ]
        },
        called_ceo: {
          text: 'You call the CEO\'s known mobile. He answers: "What transfer? I\'m at dinner. DO NOT process anything. Forward that email to IT Security now." You\'ve successfully stopped a $24,500 fraud attempt. 🎉',
          emoji: '🎉',
          choices: [
            { text: 'Forward to IT Security, document everything, report to MAS if over $5K', points: 100, next: 'hero_ending',    feedback: '✅ Perfect incident response. Regulatory reporting is mandatory for financial institutions.' },
            { text: 'Just delete the email — problem solved',                                  points: 0,  next: 'partial_ending', feedback: '⚠️ Deleting without reporting means IT can\'t identify how the company email was impersonated.' },
          ]
        },
        hero_ending: {
          text: '🏆 Your verification stopped a $24,500 loss. Your report helped IT identify that the CFO\'s email had been compromised and was being used to send similar BEC emails to vendors. Your quick actions protected the entire organisation.',
          emoji: '🏆',
          isEnding: true,
          endingType: 'great',
          endingTitle: 'Fraud Prevented! 🛡️',
          endingText: 'Outstanding incident response: domain verification → out-of-band call → IT report → MAS notification. You demonstrated professional-level security awareness and potentially saved far more than $24,500.',
          points: 100,
        },
        partial_ending: {
          text: 'The fraud was stopped, but by not reporting to IT, the same attack was repeated against two other finance staff the following week. One of them processed the transfer. Always report incidents.',
          emoji: '🤔',
          isEnding: true,
          endingType: 'ok',
          endingTitle: 'Stopped But Not Contained 🛡️',
          endingText: 'You stopped your transfer — well done. But security incidents must always be reported so IT can identify the attack vector and protect others in the organisation. "Delete and forget" is never the right protocol.',
          points: 50,
        },
      }
    },

    {
      id: 'adults_quiz_2',
      type: 'quiz',
      title: 'Work From Home Intel',
      subtitle: 'Remote Work Security',
      icon: '🏠',
      difficulty: 'Intermediate',
      xp: 400,
      briefing: 'Remote work has permanently changed the threat landscape. Your home network, video calls, and shared devices are all potential entry points for attackers. Three real scenarios test your remote work security knowledge.',
      questions: [
        {
          id: 'a_q4',
          story: 'You\'re working from home on your personal laptop. Your 12-year-old is doing homework on the same laptop in the evenings. You have company email, VPN credentials, and confidential client files saved locally. Your home WiFi password is your address: "BlkXXLorong15".',
          scenario: 'You use a personal device for work with sensitive company data, shared with a child, on a weak home WiFi password.',
          icon: '💻',
          question: 'Which of these is the HIGHEST risk in this setup?',
          options: [
            { text: 'Your child\'s homework files taking up storage space', correct: false, feedback: 'Storage is not the security concern. Think about access control — who can reach your company data, VPN credentials, and what happens if any device on that home network is compromised.' },
            { text: 'Shared device + weak home WiFi = both your child and network neighbours can potentially access company data', correct: true, feedback: '✅ CORRECT. A predictable WiFi password (your address) means neighbours can access your home network. A child using the same laptop could accidentally install malware. Company policy should prohibit shared devices for work — use a dedicated work machine.' },
            { text: 'Your company VPN will protect against all home network threats', correct: false, feedback: 'VPN encrypts traffic TO your company — it does not protect against malware already on your device, other users of the device, or attackers already on your home WiFi network.' },
          ],
          tip: '🏠 Remote work essentials: (1) Separate work device from personal use. (2) Set your home WiFi password to a random 12+ character phrase. (3) Enable WPA3 or WPA2 on your router. (4) Never save work credentials in a shared browser profile.',
          points: 150,
        },
        {
          id: 'a_q5',
          story: 'You\'re running a Zoom call with your Singapore-based team and three overseas clients. Your screen share is on. Your spouse walks by and your home address, children\'s school name, and family photos are visible on a shelf in your background. You also have a sticky note on your monitor visible to participants: "SingPass PW: MyDog2019#".',
          scenario: 'During a video call, your background reveals personal information and a visible sticky note contains a password.',
          icon: '📹',
          question: 'What is the most serious security issue in this scenario?',
          options: [
            { text: 'The background family photos — participants shouldn\'t see your personal life', correct: false, feedback: 'Privacy is a consideration, but this is not the critical security threat. Look more carefully at what information is visible in the scene.' },
            { text: 'The visible SingPass password on the sticky note — call participants can read and screenshot it', correct: true, feedback: '✅ CRITICAL FINDING. A password on a sticky note visible during a video call can be read, photographed, or screenshotted by any participant. SingPass accesses government services, CPF, and tax records. This is a serious credential exposure incident.' },
            { text: 'Zoom calls are end-to-end encrypted so only registered participants can see the content', correct: false, feedback: 'End-to-end encryption prevents eavesdropping on the network — it does not prevent a legitimate call participant from screenshotting what they see on their screen.' },
          ],
          tip: '📹 Before every video call: (1) NEVER display passwords — use a password manager instead. (2) Use a virtual background or blurred background. (3) Check what is visible on screen and behind you. (4) Lock other tabs before screen sharing.',
          points: 150,
        },
        {
          id: 'a_q6',
          story: 'Your company issued a security policy: "All remote workers must use Multi-Factor Authentication (MFA) for company systems." Your colleague Marcus says: "MFA is annoying — I just approved the push notification whenever it pops up so I can work faster. It\'s just a formality anyway."',
          scenario: 'A colleague is automatically approving all MFA push notifications without checking them, treating them as a nuisance.',
          icon: '🔑',
          question: 'Why is Marcus\'s approach dangerous?',
          options: [
            { text: 'MFA push approvals slow down his computer\'s performance', correct: false, feedback: 'Performance is not the issue. Think about what it means to approve an MFA request you didn\'t initiate — and what an attacker could do with that.' },
            { text: 'Auto-approving MFA enables MFA Fatigue attacks — an attacker with his password can gain access by flooding him with push notifications until he approves one', correct: true, feedback: '✅ EXACTLY. "MFA Fatigue" (or "Push Bombing") is a real attack: steal the password → send dozens of MFA push requests → victim approves one out of habit or frustration. Microsoft, Uber, and Cisco have all been breached this way. Always check WHAT you\'re approving.' },
            { text: 'MFA is only required by regulation — it provides no real security benefit', correct: false, feedback: 'MFA reduces account compromise risk by over 99% according to Microsoft research. The issue is not MFA itself — it is Marcus\'s habit of approving without checking, which defeats its purpose entirely.' },
          ],
          tip: '🛡️ Before approving ANY MFA push: confirm you are actually logging into that system RIGHT NOW. If you receive an unexpected MFA request, DENY IT and immediately change your password — someone has your credentials. Report it to IT Security.',
          points: 150,
        },
      ],
    },

    {
      id: 'adults_spot_2',
      type: 'spot-threat',
      title: 'Fake IT Support Email',
      subtitle: 'Spot the Internal Impersonation',
      icon: '🖥️',
      difficulty: 'Advanced',
      xp: 500,
      briefing: 'A suspicious email claiming to be from your company\'s IT department has been flagged by the security team. Conduct a forensic analysis — identify every indicator of compromise. Internal impersonation attacks are among the hardest to spot. Your thoroughness matters.',
      template: 'email',
      totalPoints: 500,
      content: {
        platform: 'Corporate Email Client',
        from: { name: 'IT Support Desk', email: 'it-support@yourcompany-helpdesk.com', isThreat: true },
        to: 'you@yourcompany.com.sg',
        subject: 'ACTION REQUIRED: Security Patch — Remote Installation Needed Today',
        timestamp: 'Monday, 9:03 AM',
        body: [
          { id: 'it_sender_domain', type: 'sender',  text: 'From: it-support@yourcompany-helpdesk.com', isThreat: true,  threatDesc: '🔴 EXTERNAL DOMAIN IMPERSONATING INTERNAL IT. Your real IT team emails from @yourcompany.com.sg — "yourcompany-helpdesk.com" is a lookalike domain registered by an attacker. Check the full sender address, not just the display name.' },
          { id: 'it_urgency',       type: 'text',    text: 'Dear Employee, A critical zero-day vulnerability has been detected on your workstation. You MUST install the security patch TODAY or your account will be suspended by 5 PM.', isThreat: true,  threatDesc: '🔴 URGENCY + THREAT OF CONSEQUENCES. Real IT security patches are deployed silently via MDM/SCCM — they do not require individual employees to manually install software. Threats of "account suspension" are a social engineering pressure tactic.' },
          { id: 'it_remote_tool',   type: 'text',    text: 'Please download and install our remote support tool: AnyDesk (www.anydesk-itsupport-patch.com/download) and share the 9-digit connection code with our engineer who will call you shortly.', isThreat: true,  threatDesc: '🔴 MALICIOUS DOWNLOAD + FAKE DOMAIN. "anydesk-itsupport-patch.com" is NOT the official AnyDesk website (anydesk.com). Legitimate IT teams deploy remote tools through your company\'s official software centre — never via email links from external domains.' },
          { id: 'it_credential_req',type: 'text',    text: 'The engineer will also need your Windows login password to complete the patch installation on the backend systems.', isThreat: true,  threatDesc: '🔴 PASSWORD PHISHING. No legitimate IT department will ever ask for your Windows password via email or over the phone. IT systems are administered at the server level — your personal password is never needed for patch deployment.' },
          { id: 'it_safe_body',     type: 'text',    text: 'This patch addresses CVE-2025-XXXXX affecting all Windows 11 workstations in the region. Failure to patch within 24 hours may result in data loss.', isThreat: false, threatDesc: '⚠️ Referencing a real-sounding CVE number adds false legitimacy. However, real IT patch notifications are sent from your company\'s official IT portal or ITSM system — not via email with manual installation instructions.' },
          { id: 'it_no_signature',  type: 'footer',  text: '[No IT ticket reference number | No internal helpdesk portal link]', isThreat: true,  threatDesc: '🔴 MISSING IT TICKET REFERENCE. All legitimate IT support communications include an internal ticket number (e.g., INC0012345) and a link to your company\'s official helpdesk portal. The absence of these identifiers is a strong indicator of a fake IT email.' },
        ]
      },
      threats: ['it_sender_domain','it_urgency','it_remote_tool','it_credential_req','it_no_signature'],
      pointsPerThreat: 100,
    },
  ],

  // ╔══════════════════════════════════════════════════════╗
  // ║  SENIORS  (46–65+)                                   ║
  // ╚══════════════════════════════════════════════════════╝
  seniors: [
    {
      id: 'seniors_quiz_1',
      type: 'quiz',
      title: 'Scam Radar',
      subtitle: 'Recognise Singapore Scams',
      icon: '📡',
      difficulty: 'Beginner',
      xp: 350,
      briefing: 'Welcome! These scenarios are based on REAL scams that happened in Singapore. There is no rush — read each one carefully and trust your instincts. You\'ve got this! 💪',
      questions: [
        {
          id: 's_q1',
          story: 'Your phone rings. A distressed voice says: "Grandma? It\'s me, Wei Ming! I\'m at the police station — I had an accident and need $3,000 via PayNow urgently. Please don\'t tell Mum and Dad, they\'ll be very angry with me. I\'ll pay you back tonight."',
          scenario: 'A caller claiming to be your grandchild needs urgent money via PayNow and asks you to keep it secret from their parents.',
          icon: '📞',
          question: 'What should you do?',
          options: [
            { text: 'Send the money immediately — my grandchild is in trouble!', correct: false, feedback: 'This is the "Grandchild Impersonation Scam". Scammers research family names on social media. The "keep it secret" request is the biggest warning sign. NEVER send money without calling your grandchild directly first.' },
            { text: 'Hang up and call your grandchild directly on the number you already have saved', correct: true,  feedback: '✅ CORRECT! Call Wei Ming on the number saved in YOUR phone. If no answer, call his parents. Real emergencies can wait the 2 minutes it takes to verify.' },
            { text: 'Ask the caller security questions to prove they\'re your grandchild', correct: false, feedback: 'Scammers can answer verification questions using information from social media. The ONLY safe action is to hang up and call your grandchild on a number YOU already know.' },
          ],
          tip: '🚨 Anyone asking you to send money urgently AND keep it secret from family = SCAM. No real emergency requires secrecy. Call your family member directly on a number YOU have before doing anything.',
          points: 150,
        },
        {
          id: 's_q2',
          story: 'You receive a call: "Good morning, I\'m Officer Tan from the Singapore Police Force Cybercrime Division. Your NRIC has been used for illegal money laundering. To protect your assets, you must transfer your savings to a \'safe SPF account\'. Do not tell your family — this is a confidential investigation."',
          scenario: 'A caller claiming to be from SPF says you are under investigation and must transfer your savings to a "safe account" to avoid arrest.',
          icon: '👮',
          question: 'This is a government impersonation scam. What do you do?',
          options: [
            { text: 'Transfer the money — I don\'t want to be arrested', correct: false, feedback: 'This is Singapore\'s #1 scam type — Official Impersonation! The real SPF NEVER calls asking you to transfer money. No government agency in Singapore will ever ask you to move money to a "safe account".' },
            { text: 'Hang up and call SPF directly at 1800-255-0000 to verify', correct: true,  feedback: '✅ PERFECT. Real police will never demand money transfers over the phone. Hang up, call 1800-255-0000 (SPF\'s official number), and report the call. You can also call ScamShield: 1800-722-6688.' },
            { text: 'Ask the caller for their badge number and call them back on the number they provide', correct: false, feedback: 'Calling back a number provided by a scammer just reconnects you to the scammer. Always call the OFFICIAL SPF number: 1800-255-0000 — look it up yourself, don\'t use any number they give you.' },
          ],
          tip: '🇸🇬 The real SPF number is 1800-255-0000. No Singapore government agency (SPF, MAS, CPF, IRAS) will EVER call you to transfer money to a "safe account". If you\'re unsure, hang up and call your bank or a trusted family member.',
          points: 150,
        },
        {
          id: 's_q3',
          story: 'You receive a WhatsApp message with the NTUC FairPrice logo: "Congratulations! Your number was selected in our 50th Anniversary Lucky Draw! You won SGD 15,000! Click here to claim: bit.ly/FP-prize50 — provide your bank account number to receive the funds."',
          scenario: 'A WhatsApp message with an NTUC FairPrice logo claims you\'ve won a large cash prize and asks for your bank account number.',
          icon: '🎰',
          question: 'What should you do?',
          options: [
            { text: 'Provide my bank account number — I need that $15,000!', correct: false, feedback: 'PRIZE SCAM. Once you provide your bank account number, scammers can use it to withdraw money, not deposit it. NTUC FairPrice does NOT run WhatsApp lottery draws.' },
            { text: 'Delete the message and report it to ScamShield or call 1800-722-6688', correct: true,  feedback: '✅ CORRECT! NTUC FairPrice never runs WhatsApp or SMS lotteries. Report to ScamShield (download the app free) or call 1800-722-6688. Never provide your bank account to WhatsApp prize messages.' },
            { text: 'Call the number in the message to verify if the prize is real', correct: false, feedback: 'Calling the number in a scam message connects you to the scammer. They will try harder to get your bank details. Delete the message and report it to ScamShield.' },
          ],
          tip: '🏆 If you didn\'t enter a contest, you can\'t win it. Real organisations never ask for your bank account number to SEND you money. Install the free ScamShield app — it automatically blocks known scam numbers and links.',
          points: 150,
        },
      ],
    },

    {
      id: 'seniors_spot_1',
      type: 'spot-threat',
      title: 'SMS Inspector',
      subtitle: 'Find the Danger Signs',
      icon: '🔍',
      difficulty: 'Beginner',
      xp: 400,
      briefing: 'A suspicious SMS has been received. Your task is simple: click on each part of the message that looks suspicious or wrong. Take your time — read every line carefully. There is no rush. 🔍',
      template: 'sms',
      totalPoints: 500,
      content: {
        platform: 'SMS Message',
        sender: 'DBS BANK',
        messages: [
          { id: 'sender_spoof',  type: 'sender', text: 'DBS BANK (sender ID)', isThreat: true, threatDesc: '🔴 WARNING: Anyone can fake an SMS sender name like "DBS BANK". This does NOT mean it really came from DBS. Real DBS SMS alerts come from "DBS" and are listed in the official DBS Alerts thread in your messages.' },
          { id: 'alarm_text',    type: 'text',   text: 'URGENT: Suspicious login detected on your account. Your account will be LOCKED in 2 hours.', isThreat: true, threatDesc: '🔴 URGENCY & FEAR TACTIC. Real banks send alerts about logins but do NOT threaten to lock your account via SMS unless you click a link. This pressure is designed to make you panic.' },
          { id: 'action_req',    type: 'text',   text: 'To prevent account suspension, verify your details NOW:', isThreat: true, threatDesc: '🔴 "VERIFY YOUR DETAILS" REQUEST. The real DBS will NEVER ask you to verify details by clicking an SMS link. Call the number on the back of your card instead.' },
          { id: 'fake_link',     type: 'link',   text: 'Click: dbs-secure-verify.com/login', isThreat: true, threatDesc: '🔴 FAKE WEBSITE. The real DBS website is digibank.dbs.com.sg or dbs.com.sg ONLY. "dbs-secure-verify.com" is a fake site designed to steal your login details.' },
          { id: 'phone_number',  type: 'text',   text: 'Or call our helpline: +65 3158 XXXX (24/7)', isThreat: true, threatDesc: '🔴 FAKE PHONE NUMBER. The real DBS hotline is 1800-111-1111. Never call a number provided in a suspicious SMS — it goes straight to the scammer.' },
          { id: 'safe_balance',  type: 'text',   text: 'Your current balance: SGD 12,450.23', isThreat: false, threatDesc: '⚠️ Scammers sometimes include real-looking balance figures to make the SMS seem genuine. This could be a guess or from a previous data breach. It doesn\'t make the SMS legitimate.' },
        ]
      },
      threats: ['sender_spoof','alarm_text','action_req','fake_link','phone_number'],
      pointsPerThreat: 100,
    },

    {
      id: 'seniors_dt_1',
      type: 'decision-tree',
      title: 'The Police Call',
      subtitle: 'Will You Spot the Impersonation?',
      icon: '☎️',
      difficulty: 'Intermediate',
      xp: 450,
      briefing: 'IMPORTANT: Take your time reading each part of this scenario. You will receive a phone call. Listen carefully to the warning signs. Remember: the real Singapore Police Force (SPF hotline: 1800-255-0000) will NEVER ask you to transfer money to keep it safe.',
      maxScore: 300,
      nodes: {
        start: {
          text: 'Your phone rings from +65 6225-0000. The caller says: "Good afternoon. I am Sergeant Ahmad from the Singapore Police Force Cybercrime Unit. We have detected that your bank account is involved in money laundering. You are not in trouble IF you cooperate now." ☎️',
          emoji: '☎️',
          choices: [
            { text: 'Stay on the line and cooperate — I don\'t want trouble with the police', points: 0,  next: 'stayed_on',   feedback: '⚠️ Real police investigations don\'t happen over a surprise phone call. Let\'s see what happens if you stay on...' },
            { text: 'Ask for a case reference number and say you\'ll call SPF at 1800-255-0000 to verify', points: 100, next: 'verify_attempt', feedback: '✅ Excellent instinct. Asking to verify through an official channel is exactly right.' },
            { text: 'Hang up immediately and call a family member', points: 50, next: 'called_family', feedback: '✅ Good first step. Let\'s see what your family advises.' },
          ]
        },
        stayed_on: {
          text: '"Sergeant Ahmad" continues: "We need to protect your money from criminals. Transfer all your savings to our Official SPF Protection Account (PayNow: 9123XXXX) within 30 minutes. Do NOT tell your family — they may be involved in the investigation." 😨',
          emoji: '😨',
          choices: [
            { text: 'Transfer my savings to keep them safe', points: 0,  next: 'money_gone',      feedback: '🚨 SCAM CONFIRMED. SPF has NO "protection accounts". Any request to transfer money = scam, 100%.' },
            { text: 'Refuse and hang up — this doesn\'t sound right', points: 50, next: 'hung_up_late',  feedback: '✅ Better late than never! Trusting your instincts saved you.' },
          ]
        },
        verify_attempt: {
          text: '"Sergeant Ahmad" suddenly becomes aggressive: "If you call that number, you will be arrested immediately. This is a CLASSIFIED investigation. DO NOT call anyone." Why is a real police officer threatening you for trying to verify? 🚨',
          emoji: '🚨',
          choices: [
            { text: 'Back down — I\'m scared of being arrested', points: 0,  next: 'money_gone',   feedback: '🚨 Real police WELCOME verification. The threat of "immediate arrest" for verifying is the scam\'s final pressure tactic.' },
            { text: 'Hang up and call SPF at 1800-255-0000 immediately', points: 100, next: 'hero_ending', feedback: '✅ PERFECT. Real police officers are NEVER angry when you try to verify. Your instincts saved you.' },
          ]
        },
        called_family: {
          text: 'Your son/daughter answers. You describe the call. They immediately say: "Mum/Dad, that\'s the police impersonation scam! It\'s been all over the news. NEVER transfer money to police. Hang up now and call 1800-255-0000 to report." 👨‍👩‍👦',
          emoji: '👨‍👩‍👦',
          choices: [
            { text: 'Report the scam call to SPF at 1800-255-0000 with my family\'s help', points: 100, next: 'hero_ending', feedback: '✅ Excellent. Involving family and reporting the call protects you and helps SPF track these scammers.' },
            { text: 'Just ignore it — no harm done, I didn\'t lose any money', points: 0,  next: 'not_reported', feedback: 'If you don\'t report it, the scammers keep calling other people. Your report takes 5 minutes and could protect dozens of other seniors.' },
          ]
        },
        money_gone: {
          text: 'The money was transferred. PayNow transactions are instant and near-impossible to reverse. SPF investigated but the funds were moved overseas within minutes. A family conversation could have prevented this. 😔',
          emoji: '😔',
          isEnding: true,
          endingType: 'bad',
          endingTitle: 'Funds Lost to Scam 💸',
          endingText: 'Government impersonation is Singapore\'s top scam. Remember: SPF, MAS, CPF, IRAS — NO government agency will ever ask you to transfer money to a "safe account". If you\'ve been scammed, call SPF at 999 or 1800-255-0000 immediately. It\'s never too late to report.',
          points: 0,
        },
        hung_up_late: {
          text: 'You hung up before transferring any money. You\'re safe! The scammer will move on to the next victim. By reporting this call, you can help protect your community. ✅',
          emoji: '✅',
          isEnding: true,
          endingType: 'ok',
          endingTitle: 'Safe! Report It Too 🛡️',
          endingText: 'You protected yourself — great work! Now please report the call to SPF at 1800-255-0000 or ScamShield at 1800-722-6688. Your report helps investigators track and stop these scammers.',
          points: 50,
        },
        hero_ending: {
          text: '🏆 You recognised the scam and reported it. SPF confirmed this number had been used in over 20 similar scam calls. Your report may have helped prevent other seniors from losing their savings. You are a community hero!',
          emoji: '🏆',
          isEnding: true,
          endingType: 'great',
          endingTitle: 'Scam Busted! 🇸🇬',
          endingText: 'Perfect response: recognised the red flags (urgency, secrecy, "safe account") → refused to comply → reported to SPF. Share what you\'ve learned with friends and family — you could save someone\'s life savings.',
          points: 100,
        },
        not_reported: {
          text: 'You\'re safe, but the scammers called 4 more seniors that week. One transferred $30,000. Your report would have taken 5 minutes and might have helped stop them sooner. 🤝',
          emoji: '🤝',
          isEnding: true,
          endingType: 'ok',
          endingTitle: 'Safe But Help Others Too 🤝',
          endingText: 'You protected yourself — that\'s important! But please report scam calls to 1800-722-6688 (ScamShield). It takes 5 minutes and helps protect your neighbours and friends from the same scammers.',
          points: 50,
        },
      }
    },

    {
      id: 'seniors_quiz_2',
      type: 'quiz',
      title: 'Heart & Mind Guard',
      subtitle: 'Romance Scam Awareness',
      icon: '💌',
      difficulty: 'Beginner',
      xp: 350,
      briefing: 'Welcome! Romance scams are among the most emotionally harmful scams — they target kind, trusting people. In Singapore, victims lost over $35 million to romance scams in 2023 alone. These 3 scenarios will help you recognise the warning signs before it is too late. 💪',
      questions: [
        {
          id: 's_q4',
          story: 'You connected with "William" on Facebook. He says he\'s a widowed Singapore-born engineer working on an oil rig in Norway. Over 3 months, he sends good morning messages every day, asks about your family, and says you are "the one he has been waiting for". He has never video-called despite your requests, always saying the internet is too slow on the rig.',
          scenario: 'An online contact is extremely attentive and romantic but always has an excuse to avoid video calls over several months.',
          icon: '💻',
          question: 'What are the warning signs in this relationship?',
          options: [
            { text: 'He is very busy on the oil rig — the slow internet excuse is reasonable', correct: false, feedback: 'Oil rigs have satellite internet used for video calls regularly. Three months of daily messages but ZERO video calls is a major red flag. Scammers avoid video calls because they are not who they claim to be — their photos are stolen from real people online.' },
            { text: 'Consistent refusal to video call over months is a key red flag for a romance scam', correct: true, feedback: '✅ CORRECT. The "oil rig engineer" profile is one of the most common romance scam personas used in Singapore and globally. Daily affectionate messages + no video call + overseas location = classic grooming pattern. SPF reports this exact profile repeatedly.' },
            { text: 'He is probably shy — some people are not comfortable on camera', correct: false, feedback: 'Shyness does not explain 3 months of refusing every video call request. A genuine person would find a way. Ask yourself: why would someone who messages you every day be unable to show their face even once?' },
          ],
          tip: '🚨 Romance scam red flags: (1) Never meets in person or video calls. (2) Claims to be overseas (oil rig, military, doctor working abroad). (3) Extremely romantic very quickly ("love bombing"). (4) Eventually asks for money. If in doubt, call ScamShield: 1800-722-6688.',
          points: 150,
        },
        {
          id: 's_q5',
          story: '"William" messages you after 4 months: "My darling, I am in a terrible situation. My equipment broke and I need SGD 8,000 to fix it or I will lose my contract. I will pay you back double when I return next month. Can you please transfer via PayNow? You are the only one I can trust." He has never asked for money before.',
          scenario: 'After months of building an emotional connection, your online partner asks for a large sum of money claiming an emergency.',
          icon: '💸',
          question: 'What should you do?',
          options: [
            { text: 'Send the money — we have been close for 4 months and he has never asked before', correct: false, feedback: 'This is the moment the scam has been building toward for 4 months. The "first time asking" is deliberate — it makes the request seem more genuine. Once you send money, he will have another emergency. Victims in Singapore have lost hundreds of thousands this way.' },
            { text: 'Refuse, tell a trusted family member, and report to ScamShield at 1800-722-6688', correct: true, feedback: '✅ CORRECT and BRAVE. The hardest part of romance scams is that the feelings are real even when the person is not. Telling a family member and reporting to ScamShield is the right step. No real partner would put you in financial danger.' },
            { text: 'Send half the amount as a compromise — SGD 4,000 is less risk', correct: false, feedback: 'Any amount you send is gone permanently. Sending half will be followed by another request — scammers are persistent. The only safe answer is zero. Block, report, and speak to a trusted family member.' },
          ],
          tip: '💡 In Singapore, romance scam victims lost an AVERAGE of $25,000 each in 2023. The money request always comes after weeks or months of emotional investment. No matter how real the feelings are — if you have never met, never video called, and they ask for money: STOP. Call 1800-722-6688.',
          points: 150,
        },
        {
          id: 's_q6',
          story: 'Your neighbour Auntie Susan tells you she met a "wonderful man" named James online 6 weeks ago. He says he is a doctor working with Médecins Sans Frontières in Ukraine. She has been sending him small amounts — $200, then $500 — for "medical supplies". She says she feels happy for the first time in years and does not want to hear any doubts.',
          scenario: 'A friend is showing signs of being in a romance scam but does not want to be warned.',
          icon: '🤝',
          question: 'What is the right way to help Auntie Susan?',
          options: [
            { text: 'Stay out of it — it is her choice and she seems happy', correct: false, feedback: 'Staying silent when you recognise a scam means Auntie Susan could lose her savings. Genuine care sometimes means having a difficult conversation. You do not have to be harsh — just be gentle and concerned.' },
            { text: 'Gently share your concerns, show her SPF scam information, and suggest calling ScamShield together', correct: true, feedback: '✅ CORRECT. Approach with kindness, not judgment. Showing official SPF or ScamShield information makes it less personal. Offering to call ScamShield (1800-722-6688) together removes the barrier. Many victims have been saved by a caring friend or family member.' },
            { text: 'Call her family immediately and tell them to take away her phone', correct: false, feedback: 'Taking away her phone or going over her head without talking to her first could damage your friendship and make her feel judged. She may pull away and become MORE isolated — which scammers encourage. Start with a gentle, private conversation.' },
          ],
          tip: '🤝 If someone you know may be in a romance scam: (1) Be kind — they have real feelings. (2) Share SPF or ScamShield info gently: scamshield.org. (3) Offer to call 1800-722-6688 together. (4) Never mock or shame them — scammers are professionals at manipulation.',
          points: 150,
        },
      ],
    },

    {
      id: 'seniors_dt_2',
      type: 'decision-tree',
      title: 'The Lucky Draw SMS',
      subtitle: 'Did You Really Win at NTUC FairPrice?',
      icon: '🏪',
      difficulty: 'Intermediate',
      xp: 450,
      briefing: 'IMPORTANT: Read each message carefully. You will receive an SMS claiming you have won an NTUC FairPrice lucky draw. Take your time — there is no rush. Think about each step before deciding. Remember: ScamShield helpline is 1800-722-6688.',
      maxScore: 300,
      nodes: {
        start: {
          text: 'You receive an SMS: "Congratulations! Your FairPrice Plus membership number has been selected in our Year-End Lucky Draw! You have won SGD 2,000 in FairPrice vouchers! Claim within 48 hours at: fairprice-lucky-draw.com.sg/claim — ref: FP2025XXXX" 📱',
          emoji: '📱',
          choices: [
            { text: 'Click the link immediately — I need to claim before 48 hours is up!',         points: 0,   next: 'clicked_sms',    feedback: '⚠️ Wait! Before clicking ANY link in a prize SMS, we should check a few things first.' },
            { text: 'Check the NTUC FairPrice official website or app yourself to verify',         points: 100, next: 'verified_official', feedback: '✅ EXCELLENT instinct. Always go to the official source directly — never through a link in an SMS.' },
            { text: 'Call a family member to ask if they think it is real',                        points: 50,  next: 'called_family_s',  feedback: '✅ Good idea! Family members can give a second opinion. Let\'s see what they say.' },
          ]
        },
        clicked_sms: {
          text: 'The website "fairprice-lucky-draw.com.sg" looks very official with the NTUC FairPrice logo. It asks for: your full name, NRIC number, bank account number, and a S$5 "administrative fee" via PayNow to process the vouchers. ⚠️',
          emoji: '⚠️',
          choices: [
            { text: 'Fill in all the details — it looks exactly like the real FairPrice website', points: 0,  next: 'data_stolen',      feedback: '🚨 SCAM. The website is a convincing fake. Scammers buy domains that look similar to real ones. The real NTUC FairPrice website is fairprice.com.sg — not "fairprice-lucky-draw.com.sg".' },
            { text: 'Close the website immediately — something doesn\'t feel right',               points: 50, next: 'closed_website',   feedback: '✅ Good instinct. Trusting your gut feeling is important. Let\'s find out what to do next.' },
          ]
        },
        verified_official: {
          text: 'You open the official NTUC FairPrice app and website (fairprice.com.sg) yourself. There is NO lucky draw announcement. You check your FairPrice Plus account — no notification of any prize. The SMS was FAKE. 🔍',
          emoji: '🔍',
          choices: [
            { text: 'Delete the SMS and report it to ScamShield at 1800-722-6688',                    points: 100, next: 'hero_ending_s',   feedback: '✅ PERFECT. You verified through the official channel, confirmed it was fake, and will now report it to help others. Outstanding!' },
            { text: 'Just delete the SMS — no harm done',                                              points: 0,  next: 'not_reported_s', feedback: '⚠️ Deleting without reporting means the scammers keep sending the same SMS to other seniors. Your report takes 5 minutes and could protect many others.' },
          ]
        },
        called_family_s: {
          text: 'Your daughter answers. She says: "Mum/Dad, please do NOT click that link! NTUC FairPrice does not run lucky draws by SMS. This is a known scam going around. The link will try to steal your bank details. Delete the message." 👨‍👩‍👦',
          emoji: '👨‍👩‍👦',
          choices: [
            { text: 'Follow your daughter\'s advice, delete the SMS, and report to ScamShield', points: 100, next: 'hero_ending_s',   feedback: '✅ EXCELLENT. Your family helped you identify the scam, and reporting it to ScamShield helps protect others in the community.' },
            { text: 'Decide to check the link yourself anyway just to make sure',               points: 0,  next: 'clicked_sms',    feedback: '⚠️ Your daughter was right to warn you. Even opening the link on a phone can sometimes be risky. Let\'s see what happens...' },
          ]
        },
        data_stolen: {
          text: 'You submitted your NRIC, bank account number, and paid S$5 via PayNow. The scammers now have your personal details and bank account number. They may use this for identity theft or fraudulent transactions. The vouchers never arrived. 😔',
          emoji: '😔',
          isEnding: true,
          endingType: 'bad',
          endingTitle: 'Personal Data Stolen 💸',
          endingText: 'NTUC FairPrice NEVER contacts winners by SMS with external links or asks for bank account numbers. If you have submitted personal data, call your bank immediately and report to SPF at 1800-255-0000. If you paid via PayNow, contact your bank to file a dispute and report to ScamShield at 1800-722-6688.',
          points: 0,
        },
        closed_website: {
          text: 'You closed the website without submitting anything. You\'re safe! Now, what should you do about the original SMS? 🤔',
          emoji: '🤔',
          choices: [
            { text: 'Report the SMS and website to ScamShield at 1800-722-6688',  points: 100, next: 'hero_ending_s',   feedback: '✅ PERFECT. Reporting takes 5 minutes and could protect many other seniors from the same scam.' },
            { text: 'Just delete the SMS and forget about it',                     points: 0,  next: 'not_reported_s', feedback: '⚠️ You are safe — well done for closing the site! But please do report it so others are protected too.' },
          ]
        },
        hero_ending_s: {
          text: '🏆 You identified the scam, protected your personal data and money, and reported it to ScamShield. Your report helped the ScamShield team block the fake domain and warn other FairPrice Plus members. You are a community guardian!',
          emoji: '🏆',
          isEnding: true,
          endingType: 'great',
          endingTitle: 'Scam Detected & Reported! 🇸🇬',
          endingText: 'Perfect response: did not click the link → verified through official NTUC FairPrice channels → reported to ScamShield. Remember: if you didn\'t enter a draw, you can\'t win it. Real NTUC prizes are announced in-store and via the official app — never by SMS with external links.',
          points: 100,
        },
        not_reported_s: {
          text: 'You stayed safe — well done! But the scam SMS continued to reach other seniors that week. Three people submitted their NRIC and bank details before ScamShield received enough reports to act. Your report could have helped stop it sooner. 🤝',
          emoji: '🤝',
          isEnding: true,
          endingType: 'ok',
          endingTitle: 'Safe — Please Report Next Time 🛡️',
          endingText: 'You protected yourself — that is the most important thing! Next time, please also report suspicious SMS to ScamShield at 1800-722-6688 or forward the SMS to 74722 (ScamShield\'s SMS reporting number). It helps protect your whole community.',
          points: 50,
        },
      }
    },
  ],
};

// ─── Helper: get all missions for an age group ────────────────────────────────
function getMissions(ageGroup) {
  return MISSIONS[ageGroup] || [];
}

function getMission(ageGroup, missionId) {
  return getMissions(ageGroup).find(m => m.id === missionId);
}
