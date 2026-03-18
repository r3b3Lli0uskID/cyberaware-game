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
      xp: 500,
      briefing: 'Your mission, should you choose to accept it: answer 5 questions to unlock your Cyber Agent badge! Learn the secrets of staying safe online. 🦸',
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
      ,
        {
                id: "kids_quiz_1_q4",
                story: "You are searching online for the new 'Merlion Magic' LEGO set your friend at school told you about.",
                scenario: "You find a website that says it has the LEGO set for a super cheap price! Before asking your parents to buy it, you need to check if the site is safe.",
                icon: "🔒",
                question: "What is the quickest way to see if a website is safe for your parents to enter their payment details?",
                options: [
                        {
                                text: "The website has bright colours and cool pictures.",
                                correct: false,
                                feedback: "Nope! Any website can have nice pictures, but it doesn't mean it's safe. It's what's in the address bar that counts."
                        },
                        {
                                text: "Look for a padlock symbol and 'https://' in the web address bar.",
                                correct: true,
                                feedback: "✅ Correct! The padlock and 'https' mean the website has a security certificate, which helps keep information like passwords and bank details private."
                        },
                        {
                                text: "If it shows up first on the search page.",
                                correct: false,
                                feedback: "Not always. Sometimes ads or even tricky websites can be at the top. The padlock is a much better clue!"
                        }
                ],
                tip: "💡 Pro tip: Always look for the little lock! If you don't see it, don't type anything private. Ask a trusted adult to double-check.",
                points: 100
        },
        {
                id: "kids_quiz_1_q5",
                story: "You just got a new school T-shirt with the school's logo on it and you're very proud of it.",
                scenario: "You take a selfie wearing your new school T-shirt and want to post it on your public online gaming profile for everyone to see.",
                icon: "📸",
                question: "Is it a good idea to post a picture of yourself in your school uniform online?",
                options: [
                        {
                                text: "Yes, so all my friends can see my cool new shirt.",
                                correct: false,
                                feedback: "It's nice to share with friends, but posting publicly means strangers can see it too. They might find out which school you go to."
                        },
                        {
                                text: "No, because strangers can see my photo and know which school I go to.",
                                correct: true,
                                feedback: "✅ Smart choice! Your school uniform is personal information. It tells people where you can be found, which isn't safe to share with everyone."
                        },
                        {
                                text: "Only if I use a funny filter on my face.",
                                correct: false,
                                feedback: "A filter is fun, but it doesn't hide your uniform! It's better to share photos like this only in private chats with family or close friends."
                        }
                ],
                tip: "💡 Pro tip: Think before you share! Never post photos with personal information like your school, your home address, or your full name. When in doubt, ask a parent first!",
                points: 100
        }],
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
      xp: 500,
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
      ,
        {
                id: "kids_quiz_2_q4",
                story: "You are playing an online game and another player keeps sending mean messages to you and your friends.",
                scenario: "This player is spoiling the fun for everyone and you want them to stop. You've already asked them to be nice, but they won't.",
                icon: "🚫",
                question: "What is the best thing you and your friends can do about this mean player?",
                options: [
                        {
                                text: "Send mean messages back to them.",
                                correct: false,
                                feedback: "Fighting fire with fire usually makes things worse. It's better to be the kinder person and not sink to their level."
                        },
                        {
                                text: "Block the player and report them using the game's report button.",
                                correct: true,
                                feedback: "✅ Excellent! Blocking stops them from contacting you, and reporting tells the game helpers that the player is breaking the rules."
                        },
                        {
                                text: "Just quit the game and never play again.",
                                correct: false,
                                feedback: "You shouldn't have to give up your fun because of one person. Using the tools in the game can solve the problem."
                        }
                ],
                tip: "💡 Pro tip: Don't feed the trolls! Block and report. Most games and apps have these buttons to help keep you safe from bullies.",
                points: 100
        },
        {
                id: "kids_quiz_2_q5",
                story: "While chatting with a friend on your tablet, someone you don't know joins the conversation and says something that makes you feel sad and uncomfortable.",
                scenario: "The message feels really mean and personal. You feel a knot in your tummy and don't know what to do.",
                icon: "😟",
                question: "You feel upset about the mean message. What is the very first thing you should do?",
                options: [
                        {
                                text: "Delete the message and pretend it never happened.",
                                correct: false,
                                feedback: "Hiding it might feel better for a second, but it doesn't solve the problem, and the person might do it again to you or someone else."
                        },
                        {
                                text: "Immediately go and tell a trusted adult, like a parent or teacher.",
                                correct: true,
                                feedback: "✅ Yes, this is the best first step. Adults can give you a hug, help you report the person, and make you feel safe again."
                        },
                        {
                                text: "Reply and ask them why they were so mean.",
                                correct: false,
                                feedback: "It's better not to talk to people who are being mean online. They might just say more hurtful things. It's best to tell an adult."
                        }
                ],
                tip: "💡 Pro tip: If you get a yucky feeling from an online message, always tell an adult you trust. They are your best backup in Team Kindness!",
                points: 100
        }],
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
      xp: 700,
      briefing: 'MISSION BRIEFING: Threat actors are targeting teens through social media and phishing attacks. Your intel skills will be tested across 7 high-stakes scenarios. Prove you can spot the traps. 🎯',
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
      ,
        {
                id: "teens_quiz_1_q4",
                story: "Your friend's TikTok account was just hacked and used to post spam videos. You want to make sure your account is more secure.",
                scenario: "You're in your security settings and see an option called 'Two-Factor Authentication' or '2FA'. You're not sure what it is.",
                icon: "📱",
                question: "What is the main benefit of enabling Two-Factor Authentication (2FA)?",
                options: [
                        {
                                text: "It makes your password twice as strong by adding special characters.",
                                correct: false,
                                feedback: "That's just a strong password. 2FA is a whole separate layer of security on top of your password."
                        },
                        {
                                text: "It requires a second piece of proof (like a code from your phone) to log in.",
                                correct: true,
                                feedback: "✅ Exactly! Even if someone steals your password, they can't log in without also having your phone. It's one of the best ways to secure your accounts."
                        },
                        {
                                text: "It automatically blocks anyone who tries to log in from a different country.",
                                correct: false,
                                feedback: "While some services have location-based warnings, that's not what 2FA is. 2FA is about proving it's you with a second factor."
                        }
                ],
                tip: "💡 Pro tip: Enable 2FA on everything, especially SingPass, your email, and social media. It's a lifesaver against hackers.",
                points: 100
        },
        {
                id: "teens_quiz_1_q5",
                story: "You're thinking of applying for a part-time job at your favourite bubble tea shop. You want to make sure your online presence is clean.",
                scenario: "You remember posting some edgy memes and angry rants on a public Twitter account a few years ago. You've since deleted the worst ones.",
                icon: "👣",
                question: "What is the most important thing to remember about your 'digital footprint'?",
                options: [
                        {
                                text: "If you delete a post, it's gone forever and no one can find it.",
                                correct: false,
                                feedback: "Not true. Data can be cached, screenshotted, or archived on servers. Deleting doesn't guarantee it's gone forever."
                        },
                        {
                                text: "Anything you post can potentially be seen by anyone and may last forever.",
                                correct: true,
                                feedback: "✅ Correct. This is your digital footprint. Future schools and employers can and do look up applicants online. What you post represents you."
                        },
                        {
                                text: "It only matters if you use your real, full name on the account.",
                                correct: false,
                                feedback: "Even with a pseudonym, it's often possible to link an account back to you through friends, photos, or other small details."
                        }
                ],
                tip: "💡 Pro tip: Before you post, T.H.I.N.K: is it True, Helpful, Inspiring, Necessary, and Kind? Your future self will thank you.",
                points: 100
        },
        {
                id: "teens_quiz_1_q6",
                story: "You're chilling at home when your phone buzzes with an SMS.",
                scenario: "The message claims to be from SingPass: 'Your account has been locked due to a suspicious login from overseas. Please verify your identity immediately at sg-pass-gov.me'.",
                icon: "🇸🇬",
                question: "This message seems urgent. What is the safest course of action?",
                options: [
                        {
                                text: "Tap the link. It says it's from the government and looks official.",
                                correct: false,
                                feedback: "Scammers are great at making things look real. The weird URL ('gov.me' instead of 'gov.sg') is a huge red flag for a phishing attempt."
                        },
                        {
                                text: "Ignore the link. Manually open your browser or the SingPass app and log in there.",
                                correct: true,
                                feedback: "✅ This is the way. Never use links from unexpected messages. By logging in directly, you can safely check your account status without risk."
                        },
                        {
                                text: "Reply 'INFO' to get more details about the suspicious login.",
                                correct: false,
                                feedback: "Replying confirms your number is active, which might lead to more scam messages. It's best not to engage at all."
                        }
                ],
                tip: "💡 Pro tip: Official government websites in Singapore always end in 'gov.sg'. Any other variation is almost certainly a scam.",
                points: 100
        },
        {
                id: "teens_quiz_1_q7",
                story: "You're aiming for a scholarship to get into a local polytechnic after your N-Levels.",
                scenario: "You receive an email from 'scholarships@ntu-sg.com' saying you're shortlisted for a special grant. It has an attachment 'Application.docx' and asks you to fill in your personal details, including your parents' income and your SingPass ID.",
                icon: "🎓",
                question: "What is the biggest red flag in this 'scholarship' email?",
                options: [
                        {
                                text: "That it was sent to your personal email instead of your school email.",
                                correct: false,
                                feedback: "While less professional, it's not the biggest danger sign. The real problem lies in what it's asking for and how it's asking for it."
                        },
                        {
                                text: "Asking for sensitive info like SingPass ID and financial details via an email attachment.",
                                correct: true,
                                feedback: "✅ Major red flag! Legitimate organisations will direct you to a secure portal on their official website. They will never ask for credentials in a Word document."
                        },
                        {
                                text: "The sender's email address looks slightly unofficial.",
                                correct: false,
                                feedback: "This is a good catch ('ntu-sg.com' is fake), but the request for sensitive data in an attachment is an even more definite sign of a phishing scam."
                        }
                ],
                tip: "💡 Pro tip: Always verify scholarships and offers on the institution's official website (e.g., ntu.edu.sg). Never enter personal credentials into an emailed document.",
                points: 100
        }],
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
      xp: 700,
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
      ,
        {
                id: "teens_quiz_2_q4",
                story: "You're at a cafe using their free public WiFi to finish up your school project.",
                scenario: "A hacker sets up a 'Man-in-the-Middle' attack. They are secretly positioned between your laptop and the cafe's WiFi router, able to see all your traffic.",
                icon: "😈",
                question: "In a Man-in-the-Middle attack on public WiFi, what is the main risk?",
                options: [
                        {
                                text: "The hacker can make your internet connection much slower.",
                                correct: false,
                                feedback: "While they could slow it down, that's not the main danger. The real risk is what they can steal from your connection."
                        },
                        {
                                text: "The hacker can read any unencrypted data you send, like passwords or messages.",
                                correct: true,
                                feedback: "✅ Correct! If the website isn't using HTTPS, the attacker can intercept your data in plaintext. It's like they're reading your digital mail."
                        },
                        {
                                text: "The hacker can delete the files on your laptop remotely.",
                                correct: false,
                                feedback: "This is very unlikely from just intercepting WiFi traffic. The attack is about listening and capturing data, not controlling your device directly."
                        }
                ],
                tip: "💡 Pro tip: A VPN encrypts your traffic, making you invisible to Man-in-the-Middle attacks. It's like sending your data through a private, armoured tunnel.",
                points: 100
        },
        {
                id: "teens_quiz_2_q5",
                story: "You need to quickly check your bank account balance and transfer some money to your friend via PayNow.",
                scenario: "You're connected to the free public WiFi at the MRT station. It's convenient, but you remember reading something about public WiFi risks.",
                icon: "💰",
                question: "Which of these activities should you absolutely AVOID doing on public WiFi?",
                options: [
                        {
                                text: "Watching YouTube videos.",
                                correct: false,
                                feedback: "Watching public videos is generally low-risk. The worst that could happen is someone sees what you're watching, but no sensitive data is exposed."
                        },
                        {
                                text: "Logging into your bank account or any site that requires a password.",
                                correct: true,
                                feedback: "✅ Definitely avoid this! Hackers on the same network could potentially steal your login credentials, giving them access to your accounts."
                        },
                        {
                                text: "Browsing for news on sites like CNA or Straits Times.",
                                correct: false,
                                feedback: "Reading the news is safe. As long as you're not logging into a personal account on the news site, you are not exposing sensitive information."
                        }
                ],
                tip: "💡 Pro tip: Use your phone's mobile data for any sensitive tasks like banking or shopping. It's your own private connection and much more secure than public WiFi.",
                points: 100
        },
        {
                id: "teens_quiz_2_q6",
                story: "You're at Changi Airport and need to connect to the WiFi.",
                scenario: "In your WiFi list, you see two networks: 'Wireless@Changi' and '#Wireless@Changi_FREE'. The second one has a stronger signal. You need to be sure you're connecting to the real one.",
                icon: "✈️",
                question: "What is the most reliable way to check if a public WiFi network is legitimate?",
                options: [
                        {
                                text: "Connect to the one with the strongest signal strength.",
                                correct: false,
                                feedback: "Hackers can easily create a hotspot with a strong signal right next to you. Signal strength doesn't mean it's safe."
                        },
                        {
                                text: "Look for official signs or ask an employee for the exact WiFi network name (SSID).",
                                correct: true,
                                feedback: "✅ The best way. Official sources will provide the correct network name. Scammers often create fake networks with similar names to trick you."
                        },
                        {
                                text: "Choose the network that doesn't have a password, as it's the easiest to connect to.",
                                correct: false,
                                feedback: "This is often the most dangerous! An open network is easier for both you and a hacker to join. Always verify the name first."
                        }
                ],
                tip: "💡 Pro tip: Trust your eyes, not the WiFi list. Look for posters, signs, or ask staff for the official network name before connecting.",
                points: 100
        },
        {
                id: "teens_quiz_2_q7",
                story: "You need to quickly reply to an urgent email from your teacher which contains a link to a Google Doc with your grades.",
                scenario: "You're out with friends and the cafe's public WiFi is slow. You have a good 4G signal on your phone.",
                icon: "📶",
                question: "For handling this sensitive school email, what's the better choice?",
                options: [
                        {
                                text: "Public WiFi, because it saves your mobile data.",
                                correct: false,
                                feedback: "Saving data isn't worth the security risk. Your grades are private information that could be exposed on an insecure public network."
                        },
                        {
                                text: "Your phone's mobile data (4G/5G).",
                                correct: true,
                                feedback: "✅ Smart move. Your mobile data connection is a direct, private link to your telco's network, making it far more secure than sharing a public WiFi network with strangers."
                        },
                        {
                                text: "Wait until you get home to your own secure WiFi.",
                                correct: false,
                                feedback: "While that's the safest option of all, the question is about choosing the better of the two immediate options. Mobile data is the secure choice for on-the-go tasks."
                        }
                ],
                tip: "💡 Pro tip: Think of mobile data as your personal bodyguard and public WiFi as a crowded bus station. For anything private, stick with your bodyguard.",
                points: 100
        }],
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
      xp: 700,
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
      ,
        {
                id: "adults_quiz_1_q4",
                story: "You receive a phone call at your desk. The caller claims to be from your company's IT department.",
                scenario: "The 'IT support' person says they've detected a virus from your computer and need you to immediately go to a website and enter a code to give them remote access to fix it.",
                icon: "📞",
                question: "This is a classic example of what type of social engineering attack?",
                options: [
                        {
                                text: "Phishing",
                                correct: false,
                                feedback: "Phishing is similar but specifically uses email as the attack vector. When the attack happens over the phone, it has a different name."
                        },
                        {
                                text: "Vishing (Voice Phishing)",
                                correct: true,
                                feedback: "✅ Correct. Vishing is phishing done via voice calls. Scammers use a sense of urgency to make you act without thinking, like pretending to be from IT or your bank."
                        },
                        {
                                text: "Smishing (SMS Phishing)",
                                correct: false,
                                feedback: "Smishing is phishing done via SMS text messages. This attack was a phone call."
                        }
                ],
                tip: "💡 Pro tip: Never trust unsolicited calls from 'IT'. Hang up, find the official internal IT helpdesk number on your company intranet, and call them back to verify the request.",
                points: 100
        },
        {
                id: "adults_quiz_1_q5",
                story: "You arrive at work on Monday morning and try to open a critical project file.",
                scenario: "Instead of the file, a message pops up: 'Your files have been encrypted! To get them back, send 1 Bitcoin to this address...'. All your filenames have been changed to '.locked'.",
                icon: "☠️",
                question: "Your computer has been hit by ransomware. What is the immediate, correct first step?",
                options: [
                        {
                                text: "Pay the ransom immediately. It's the only way to get the files back.",
                                correct: false,
                                feedback: "Paying the ransom is not recommended. It doesn't guarantee you'll get your files, and it funds criminal activity, encouraging more attacks."
                        },
                        {
                                text: "Disconnect the computer from the network and contact your IT security department.",
                                correct: true,
                                feedback: "✅ Correct! The first priority is to contain the threat. Disconnecting from the network prevents the ransomware from spreading to other computers or servers."
                        },
                        {
                                text: "Try to manually rename the files back to their original names.",
                                correct: false,
                                feedback: "The files are mathematically encrypted, not just renamed. Changing the extension won't decrypt them. This is a job for security professionals and data backups."
                        }
                ],
                tip: "💡 Pro tip: The best defence against ransomware is regular backups. If your files are backed up, you can restore them without paying a cent.",
                points: 100
        },
        {
                id: "adults_quiz_1_q6",
                story: "Your company has a Bring Your Own Device (BYOD) policy, allowing you to use your personal laptop for work.",
                scenario: "To use your personal device, the company requires you to install security software, enable disk encryption, and keep your operating system updated.",
                icon: "💻",
                question: "What is the primary reason for a company to enforce a strict BYOD security policy?",
                options: [
                        {
                                text: "To make sure your personal laptop runs as fast as the company-issued ones.",
                                correct: false,
                                feedback: "Performance isn't the main concern. The policy is about security, not speed."
                        },
                        {
                                text: "To protect sensitive company data in case your personal device is lost, stolen, or compromised.",
                                correct: true,
                                feedback: "✅ Exactly. If your laptop containing corporate data is stolen, disk encryption prevents the thief from accessing it. The policy protects the company's assets."
                        },
                        {
                                text: "To track your web browsing activity when you are not working.",
                                correct: false,
                                feedback: "While some monitoring might be in place, the primary goal of security policies like encryption is to protect data, not to spy on your personal activity."
                        }
                ],
                tip: "💡 Pro tip: Always separate work and personal data, even on a BYOD device. Use different browser profiles and avoid storing sensitive work files in personal cloud storage.",
                points: 100
        },
        {
                id: "adults_quiz_1_q7",
                story: "You work for a Singapore-based fintech firm. You receive an email from your 'Head of Compliance'.",
                scenario: "The email says: 'Urgent: MAS Audit - Please review the attached Q4 transaction report for discrepancies by EOD'. The sender's name is correct, but the tone feels slightly off. The email targets your specific role.",
                icon: "🎣",
                question: "This highly targeted email is a prime example of what kind of attack?",
                options: [
                        {
                                text: "A standard phishing attack.",
                                correct: false,
                                feedback: "A standard phishing email is generic and sent to thousands of people. This one is much more focused."
                        },
                        {
                                text: "Spear phishing.",
                                correct: true,
                                feedback: "✅ Correct. Spear phishing is a targeted attack that uses specific, personal details (like your name, role, and company projects) to make the bait seem more credible."
                        },
                        {
                                text: "A Denial-of-Service (DoS) attack.",
                                correct: false,
                                feedback: "A DoS attack is designed to shut down a system by overwhelming it with traffic, not to trick a user into opening a malicious attachment."
                        }
                ],
                tip: "💡 Pro tip: For any urgent, unexpected request, especially one with an attachment, verify it through a different channel. Ping your colleague on Teams or call them to confirm it's real.",
                points: 100
        }],
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
      xp: 700,
      briefing: 'Remote work has permanently changed the threat landscape. Your home network, video calls, and shared devices are all potential entry points for attackers. Seven real scenarios test your remote work security knowledge.',
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
      ,
        {
                id: "adults_quiz_2_q4",
                story: "You've decided to work from a nearby cafe for a change of scenery. It's quite crowded.",
                scenario: "You're working on a confidential client proposal on your laptop. Someone is sitting at the table directly behind you. You're focused on your screen and don't notice them occasionally glancing over.",
                icon: "👀",
                question: "What is the name for the low-tech attack where someone secretly watches your screen to steal information?",
                options: [
                        {
                                text: "Screen scraping",
                                correct: false,
                                feedback: "Screen scraping is an automated process of collecting data from websites. This is a physical, human-based attack."
                        },
                        {
                                text: "Shoulder surfing",
                                correct: true,
                                feedback: "✅ Exactly. Shoulder surfing is the simple act of looking over someone's shoulder to see their screen. It's an easy way to steal passwords or view confidential data in public places."
                        },
                        {
                                text: "Visual hacking",
                                correct: false,
                                feedback: "While it is a form of 'visual hacking', the industry-standard term for this specific attack is shoulder surfing."
                        }
                ],
                tip: "💡 Pro tip: Use a privacy screen filter on your laptop. It dramatically narrows the viewing angle so only you can see your screen clearly. Also, always sit with your back to a wall.",
                points: 100
        },
        {
                id: "adults_quiz_2_q5",
                story: "You're collaborating with a colleague on a sensitive report containing customer data.",
                scenario: "You've finished your part of the report and need to send the 50MB file to your colleague. Your corporate file share system is slow, but your personal email can handle large attachments.",
                icon: "📤",
                question: "What is the most secure way to share the file?",
                options: [
                        {
                                text: "Email it from your personal Gmail account because it's faster.",
                                correct: false,
                                feedback: "This is a major security risk. Sending sensitive work data via personal email creates a copy outside the company's control and security, violating data protection policies."
                        },
                        {
                                text: "Use the approved corporate file sharing solution, even if it's slower.",
                                correct: true,
                                feedback: "✅ This is the correct choice. Corporate tools are designed with security, logging, and access control in mind to protect sensitive information."
                        },
                        {
                                text: "Upload it to a free file-hosting website and send the link to your colleague.",
                                correct: false,
                                feedback: "This is even worse than personal email. You have no control over who accesses the data or how long it's stored on the third-party server."
                        }
                ],
                tip: "💡 Pro tip: Never use personal accounts or tools for work data. The convenience is not worth the risk of a data breach and potential non-compliance with regulations like PDPA.",
                points: 100
        },
        {
                id: "adults_quiz_2_q6",
                story: "While working from home, you get a call from an unknown number. The person introduces himself as 'David from Corporate IT'.",
                scenario: "'David' says your VPN certificate has expired and he needs to remote-control your machine to install a new one. He asks you to go to a website and download a tool to begin.",
                icon: "👨‍💻",
                question: "You feel suspicious about this 'IT helpdesk' call. What's the safest action?",
                options: [
                        {
                                text: "Follow his instructions, as a VPN issue is serious and needs to be fixed.",
                                correct: false,
                                feedback: "Scammers, in a vishing attack, create a false sense of urgency. The real IT department would likely have a more formal, verifiable process."
                        },
                        {
                                text: "Tell him you'll call him back, then independently find the official IT support number and call it.",
                                correct: true,
                                feedback: "✅ Perfect. This is the 'trust but verify' model. By hanging up and initiating the call yourself using a known, trusted number, you eliminate the risk of talking to an impostor."
                        },
                        {
                                text: "Ask him to prove he's from IT by telling you your manager's name.",
                                correct: false,
                                feedback: "Scammers can often find basic information like your manager's name from LinkedIn. This is not a reliable method of verification."
                        }
                ],
                tip: "💡 Pro tip: Your real IT department will never be angry that you're being cautious. Always verify unsolicited support calls by contacting the helpdesk through an official channel.",
                points: 100
        },
        {
                id: "adults_quiz_2_q7",
                story: "You're working remotely and need to access the company's internal server.",
                scenario: "Your company provides a corporate VPN for secure access. You also have a personal VPN subscription that you use for streaming. Your personal VPN feels faster.",
                icon: "🛡️",
                question: "Why must you use the corporate VPN instead of your personal one for work tasks?",
                options: [
                        {
                                text: "The corporate VPN is the only one that knows the password to the server.",
                                correct: false,
                                feedback: "A VPN provides a secure tunnel; it doesn't store passwords. You still need to authenticate separately."
                        },
                        {
                                text: "It ensures a secure, encrypted connection that is managed and monitored by the company.",
                                correct: true,
                                feedback: "✅ Correct. The corporate VPN is configured to route traffic securely into the company network and allows the security team to monitor for threats. A personal VPN just tunnels your traffic to a public server."
                        },
                        {
                                text: "Using a personal VPN for work is against the law in Singapore.",
                                correct: false,
                                feedback: "It's not illegal, but it's almost certainly against your company's IT policy because it bypasses corporate security controls."
                        }
                ],
                tip: "💡 Pro tip: Think of the corporate VPN as a private, guarded bridge directly to your office. A personal VPN is a tunnel to a random public place on the internet.",
                points: 100
        }],
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
      xp: 500,
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
      ,
        {
                id: "seniors_quiz_1_q4",
                story: "You're waiting for a parcel you ordered online. You get an SMS on your phone.",
                scenario: "The SMS says: '[SingPost] Your parcel delivery has failed. Please update your delivery address at tiny.url/sg-post-track'. You are asked to pay a small fee to reschedule.",
                icon: "📦",
                question: "What should you do with this message?",
                options: [
                        {
                                text: "Click the link and pay the fee. It's a small amount to get your parcel.",
                                correct: false,
                                feedback: "This is a scam. Scammers use these small fees to steal your credit card details. The 'tiny.url' link is a big warning sign."
                        },
                        {
                                text: "Delete the message and check your parcel's status on the official SingPost website or app.",
                                correct: true,
                                feedback: "✅ Very smart. Always go to the official source. Scammers create fake lookalike websites to trick you. Never trust links in unexpected text messages."
                        },
                        {
                                text: "Reply to the SMS and ask for more information about the parcel.",
                                correct: false,
                                feedback: "Replying tells the scammers that your phone number is active, and they might target you with more scam calls or messages."
                        }
                ],
                tip: "💡 Pro tip: SingPost will never ask for payment through an SMS link. To track your parcels, use the official SingPost app or website.",
                points: 100
        },
        {
                id: "seniors_quiz_1_q5",
                story: "You see on the news that the government will be giving CPF top-ups to eligible seniors.",
                scenario: "A few days later, you get an SMS that says: 'From Gov.sg: You are eligible for a $500 CPF top-up. Scan this QR code to verify your identity and receive the funds.'",
                icon: "💰",
                question: "The message looks official. Should you scan the QR code?",
                options: [
                        {
                                text: "Yes, it says it's from the government and I want my $500.",
                                correct: false,
                                feedback: "Scammers can easily pretend to be the government. Scanning a fake QR code can install a virus on your phone or take you to a fake website to steal your SingPass details."
                        },
                        {
                                text: "No. Government agencies will never ask you to scan a QR code in an SMS to receive money.",
                                correct: true,
                                feedback: "✅ That's correct and safe. Official CPF top-ups are automatic. You can check your CPF statement by logging in safely through the official CPF website or your SingPass app."
                        },
                        {
                                text: "Forward the message to your friends so they can get the money too.",
                                correct: false,
                                feedback: "Please don't! You would be helping the scammers spread their trick to more people. It's better to delete the message."
                        }
                ],
                tip: "💡 Pro tip: Be very careful with QR codes from unknown sources. Never scan them, especially if they are in an unexpected message. When in doubt, always ignore.",
                points: 100
        }],
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
      xp: 500,
      briefing: 'Welcome! Romance scams are among the most emotionally harmful scams — they target kind, trusting people. In Singapore, victims lost over $35 million to romance scams in 2023 alone. These 5 scenarios will help you recognise the warning signs before it is too late. 💪',
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
      ,
        {
                id: "seniors_quiz_2_q4",
                story: "You've been chatting with a new 'friend' you met online. They have a very attractive profile picture and seem very successful.",
                scenario: "You get a bit suspicious because their stories don't always add up. You wonder if their profile picture is even real.",
                icon: "🖼️",
                question: "What can you do to check if a photo is stolen from someone else's profile on the internet?",
                options: [
                        {
                                text: "Ask them directly if the photo is real.",
                                correct: false,
                                feedback: "A scammer will always lie and say the photo is real. You cannot trust their answer."
                        },
                        {
                                text: "Use a 'reverse image search' website (like Google Images) to see if the photo appears elsewhere.",
                                correct: true,
                                feedback: "✅ This is a powerful tool. A reverse image search can show you if the photo has been stolen from an actor's social media, a model's portfolio, or another person's public profile."
                        },
                        {
                                text: "Check if the photo is blurry. If it's clear, it's probably real.",
                                correct: false,
                                feedback: "Scammers can easily steal high-quality photos. The clarity of the picture doesn't prove if it's really them."
                        }
                ],
                tip: "💡 Pro tip: To do a reverse image search, save the person's photo, go to images.google.com, click the camera icon, and upload the photo. It will show you where else that picture is on the internet.",
                points: 100
        },
        {
                id: "seniors_quiz_2_q5",
                story: "Your online 'friend' who you have never met convinces you to send them money. After you send it, they disappear.",
                scenario: "You feel heartbroken and foolish. You realize you have been the victim of a romance scam. You've lost money and don't know what to do next.",
                icon: "💔",
                question: "What are the most important first steps to take after realizing you've been scammed?",
                options: [
                        {
                                text: "Do nothing and feel ashamed. It's too late to get the money back.",
                                correct: false,
                                feedback: "It is not your fault. Scammers are professionals. Reporting the crime is very important to help the police catch them and prevent others from being scammed."
                        },
                        {
                                text: "Immediately call the anti-scam hotline and report the scam to the police and your bank.",
                                correct: true,
                                feedback: "✅ Yes. Act quickly! Call the National Crime Prevention Council's Anti-Scam Hotline at 1800-722-6688. Also, call your bank to report the transaction and make a police report."
                        },
                        {
                                text: "Try to send them another message, begging for your money back.",
                                correct: false,
                                feedback: "The scammer will not return your money. They might even try to trick you into sending more. It's best to stop all contact immediately."
                        }
                ],
                tip: "💡 Pro tip: If you've been scammed, call the Anti-Scam Hotline at 1800-722-6688 right away. They can give you advice and help you take the next steps. You are not alone.",
                points: 100
        }],
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

// ─── V1.1: Additional Linux/Coding Scenarios for Teens & Adults ───────────────

// Add to teens array
MISSIONS.teens.push(
  {
    id: 'teens_linux_1',
    ageGroup: 'teens',
    type: 'quiz',
    title: 'Linux Terminal Survival',
    subtitle: "Don't get pwned by your own terminal.",
    icon: '🖥️',
    difficulty: 'Intermediate',
    xp: 700,
    maxScore: 300,
    briefing: "You are Kai, a 16-year-old student prepping for Singapore's National Cyber-CTF competition. You've just installed Kali Linux and are learning the ropes, but the command line is a dangerous place for newcomers. Make the right choices to avoid compromising your system.",
    questions: [
      {
        id: 'q1',
        scenario: 'You find a cool CTF script online. The instructions say to run `chmod 777 script.sh` to make it executable. This gives read, write, and execute permissions to everyone.',
        question: 'What is the main security risk of `chmod 777`?',
        options: [
          { id: 'a', text: 'It makes the file run slower.' },
          { id: 'b', text: 'It allows any user or process on the system to modify your script, potentially injecting malicious code.' },
          { id: 'c', text: 'It uses too much disk space.' }
        ],
        correct: 'b',
        feedback: { correct: '`777` is overly permissive. Any user or rogue process could alter the script. `chmod 755` is much safer.', wrong: 'The risk is security-related. `chmod 777` allows anyone to modify the file — a major vulnerability.' },
        tip: 'Use the principle of least privilege. `chmod 755` for scripts (owner can execute/write, others can only read+execute) is a common safe practice.',
        points: 100
      },
      {
        id: 'q2',
        scenario: "Your laptop feels sluggish. You suspect a rogue process might be eating CPU. You open a terminal to investigate.",
        question: 'Which command is best for viewing currently running processes?',
        options: [
          { id: 'a', text: '`ls -a` to see all files.' },
          { id: 'b', text: '`cat /etc/hostname` to see your computer name.' },
          { id: 'c', text: '`ps aux` or `top` to list all running processes and their resource usage.' }
        ],
        correct: 'c',
        feedback: { correct: '`ps aux` gives a snapshot of all processes, while `top` provides a real-time view. Both are essential for system monitoring.', wrong: '`ls` lists files and `cat` displays file content. To see running processes, use `ps`, `top`, or `htop`.' },
        tip: 'Regularly check running processes and scheduled tasks (`crontab -l`) for anything unrecognised. Malware often hides with innocent-looking process names.',
        points: 100
      },
      {
        id: 'q3',
        scenario: "You run `cat /etc/passwd` and see all users listed. You notice there's a similar file called `/etc/shadow`.",
        question: 'What is the critical difference between `/etc/passwd` and `/etc/shadow`?',
        options: [
          { id: 'a', text: '`/etc/shadow` contains the user profile picture.' },
          { id: 'b', text: '`/etc/passwd` is world-readable, but `/etc/shadow` (hashed passwords) is only readable by root.' },
          { id: 'c', text: '`/etc/shadow` is just a backup of `/etc/passwd`.' }
        ],
        correct: 'b',
        feedback: { correct: 'Spot on! This separation prevents users from accessing each other\'s password hashes, making offline cracking much harder.', wrong: '`/etc/shadow` securely stores hashed user passwords with strict permissions — only root can read it.' },
        tip: 'Even hashed passwords can be cracked offline if an attacker gets the shadow file. This is why its permissions are so critical.',
        points: 100
      }
    ,
        {
                id: "teens_linux_1_q4",
                story: "You're exploring a Capture The Flag (CTF) challenge box. You know you need to run a command that requires higher privileges.",
                scenario: "You have the ability to run commands as the root user. You could either use 'sudo [command]' for a single command, or switch to a full root shell with 'sudo su'.",
                icon: "👑",
                question: "Why is it better to use 'sudo [command]' instead of switching to a full root shell?",
                options: [
                        {
                                text: "'sudo' is faster because it only elevates one command.",
                                correct: false,
                                feedback: "The speed difference is tiny. The real reason is about security and limiting potential mistakes."
                        },
                        {
                                text: "It limits the high-power access to just one command, reducing the risk of accidental damage.",
                                correct: true,
                                feedback: "✅ Correct! This is the principle of least privilege. If you make a typo in a root shell (like 'rm -rf /' instead of './'), you could destroy the system. 'sudo' minimises that risk."
                        },
                        {
                                text: "A full root shell doesn't log the commands you run.",
                                correct: false,
                                feedback: "This is incorrect. System logs often track commands regardless of the shell, but using 'sudo' creates a very clear and auditable log of exactly which commands were elevated."
                        }
                ],
                tip: "💡 Pro tip: Get into the habit of using 'sudo' for specific commands. It's a safety net that prevents catastrophic mistakes and is a sign of a skilled user.",
                points: 100
        },
        {
                id: "teens_linux_1_q5",
                story: "You've gained access to a Linux server in a CTF and you suspect it's running a hidden web service.",
                scenario: "You need to find out which network ports are open and listening for connections on the server to identify running services like web servers or databases.",
                icon: "🔌",
                question: "Which command would you use to see all listening TCP and UDP ports and the programs using them?",
                options: [
                        {
                                text: "ip addr show",
                                correct: false,
                                feedback: "This command is used to show IP addresses and network interfaces on the system, not the services listening on them."
                        },
                        {
                                text: "netstat -tulpn or ss -tulpn",
                                correct: true,
                                feedback: "✅ Yes! Both 'netstat' and its modern replacement 'ss' are used for this. The flags '-tulpn' are a classic combo to show TCP, UDP, Listening, Programs, and Numeric ports."
                        },
                        {
                                text: "ps -aux",
                                correct: false,
                                feedback: "This command lists running processes, but it doesn't tell you which ones are listening on the network. You need 'netstat' or 'ss' for that."
                        }
                ],
                tip: "💡 Pro tip: Attackers who get on a box almost always run 'netstat' or 'ss' first to map out the system's services. It's a key reconnaissance step.",
                points: 100
        },
        {
                id: "teens_linux_1_q6",
                story: "During a CTF, you're looking for ways an attacker might have achieved persistence on a machine.",
                scenario: "You find a suspicious entry in the 'crontab' for the root user. It's a script that runs every five minutes. You suspect an attacker placed it there.",
                icon: "⏰",
                question: "What is the primary function of 'cron' and 'crontab' in Linux?",
                options: [
                        {
                                text: "To encrypt and store user passwords securely.",
                                correct: false,
                                feedback: "That's the job of '/etc/shadow' and hashing algorithms. 'cron' has nothing to do with passwords."
                        },
                        {
                                text: "To schedule commands or scripts to run automatically at a specific time or interval.",
                                correct: true,
                                feedback: "✅ Correct! 'cron' is the system's time-based job scheduler. Attackers love it because they can schedule a script to run periodically, giving them a persistent backdoor."
                        },
                        {
                                text: "To manage and install software packages from the internet.",
                                correct: false,
                                feedback: "That's a package manager like 'apt' or 'yum'. 'cron' just runs things on a schedule."
                        }
                ],
                tip: "💡 Pro tip: When defending a Linux box, always check the system and user crontabs ('crontab -l', /etc/cron.*) for suspicious, regularly scheduled tasks.",
                points: 100
        },
        {
                id: "teens_linux_1_q7",
                story: "You're analyzing a file's permissions in a Linux terminal to see if you can modify it.",
                scenario: "You run 'ls -l' and see the permissions for a file displayed as '-rw-r--r--'. You need to understand what this means for the owner, group, and others.",
                icon: "📜",
                question: "What does the permission string '-rw-r--r--' mean?",
                options: [
                        {
                                text: "Everyone can read and write to the file.",
                                correct: false,
                                feedback: "This would be '-rw-rw-rw-'. In this case, only the owner has write permission ('w')."
                        },
                        {
                                text: "The owner can read/write; the group and others can only read.",
                                correct: true,
                                feedback: "✅ Perfect! The first set 'rw-' is for the User/Owner (Read, Write). The second 'r--' is for the Group (Read-only). The third 'r--' is for Others (Read-only)."
                        },
                        {
                                text: "The owner can read/write/execute, but no one else can do anything.",
                                correct: false,
                                feedback: "This would be '-rwx------'. The 'x' for execute is missing here, and others can still read the file."
                        }
                ],
                tip: "💡 Pro tip: Remember the numbers! r=4, w=2, x=1. So 'rw-' is 4+2=6, and 'r--' is 4. This file's permission is 644. It's a quick way to talk about permissions.",
                points: 100
        }]
  },
  {
    id: 'teens_dt_1b',
    ageGroup: 'teens',
    type: 'decision-tree',
    title: 'The Hacked GitHub Repo',
    subtitle: 'Your commits are not your own.',
    icon: '🔐',
    difficulty: 'Advanced',
    xp: 300,
    maxScore: 300,
    briefing: "You're scrolling GitHub when you see a bizarre commit on your project: \"pwned by hax0r\". Someone has access to your account. What you do next determines if you get it back.",
    tree: {
      start: {
        id: 'start',
        story: "The malicious commit is live on your portfolio project. Panic sets in. Every second counts — the attacker may still have access.",
        question: 'What is your first move?',
        choices: [
          { id: 'a', text: 'Check GitHub Security settings for suspicious logins and authorized apps.', next: 'node_investigate', points: 100 },
          { id: 'b', text: 'Delete the repo immediately!', next: 'node_panic', points: 0 }
        ]
      },
      node_investigate: {
        id: 'node_investigate',
        story: "Smart. In your security log, you spot a login from an unfamiliar IP and a suspicious OAuth app called \"CodeScanner\" you didn't authorise.",
        question: 'What is the most critical next step?',
        choices: [
          { id: 'a', text: "Revoke the suspicious OAuth app's access and force logout all sessions.", next: 'node_revoke', points: 100 },
          { id: 'b', text: 'Just change my password.', next: 'node_password_only', points: 50 }
        ]
      },
      node_panic: {
        id: 'node_panic',
        story: "Deleting the repo doesn't fix the problem — the attacker still has an active token. They can attack your other repos.",
        question: 'How do you recover?',
        choices: [
          { id: 'a', text: 'Go to Security settings and revoke the compromised access.', next: 'node_investigate', points: 50 },
          { id: 'b', text: 'Delete my whole GitHub account.', next: 'end_fail', points: 0 }
        ]
      },
      node_password_only: {
        id: 'node_password_only',
        story: "You changed your password but the OAuth token is still active — another bad commit appears a minute later.",
        question: 'What should you have done?',
        choices: [
          { id: 'a', text: 'Revoke the OAuth app and enable 2FA.', next: 'node_revoke', points: 50 },
          { id: 'b', text: 'Message the hacker and ask them to stop.', next: 'end_fail', points: 0 }
        ]
      },
      node_revoke: {
        id: 'node_revoke',
        story: "Token revoked, all sessions logged out. The attacker is locked out. You reverted the malicious commit using `git revert`.",
        question: "What's the final step?",
        choices: [
          { id: 'a', text: 'Enable 2FA and scan code for leaked secrets with `gitleaks`.', next: 'end_success', points: 100 },
          { id: 'b', text: "It's over. I'll just be more careful about OAuth apps.", next: 'end_partial', points: 50 }
        ]
      },
      end_success: { id: 'end_success', story: 'You booted the hacker, cleaned up their mess, and hardened your account with 2FA. Your GitHub is now a fortress. Pro move!', question: null, choices: [], points: 100 },
      end_partial: { id: 'end_partial', story: 'You got the hacker out, but without 2FA your account is still vulnerable to password guessing. Lock it down!', question: null, choices: [], points: 50 },
      end_fail: { id: 'end_fail', story: 'The hacker used persistent access to steal API keys from a private repo. Always revoke compromised tokens first — never panic-delete.', question: null, choices: [], points: 0 }
    }
  }
);

// Add to adults array
MISSIONS.adults.push(
  {
    id: 'adults_secure_code_1',
    ageGroup: 'adults',
    type: 'quiz',
    title: 'Secure Code Review',
    subtitle: 'Spot the vulnerability before it hits production.',
    icon: '💻',
    difficulty: 'Intermediate',
    xp: 1000,
    maxScore: 300,
    briefing: "You are a developer at a Singapore fintech startup doing a peer review on a pull request. Finding vulnerabilities now saves millions of SGD later.",
    questions: [
      {
        id: 'q1',
        scenario: "You see this Python code: `query = \"SELECT * FROM transactions WHERE userID = '\" + user_id + \"'\"` — raw user input concatenated into an SQL query.",
        question: 'What is the primary vulnerability?',
        options: [
          { id: 'a', text: 'The code is hard to read.' },
          { id: 'b', text: "SQL Injection — user input is concatenated directly into the database query." },
          { id: 'c', text: 'It will perform poorly under load.' }
        ],
        correct: 'b',
        feedback: { correct: 'A classic SQL Injection flaw. A malicious `user_id` could alter the query to dump or destroy data.', wrong: 'The critical issue is SQL Injection. User input concatenated into a query is a massive security no-go.' },
        tip: 'Always use parameterized queries (prepared statements). Your database library handles sanitisation automatically.',
        points: 100
      },
      {
        id: 'q2',
        scenario: 'In a payment gateway config file you find: `const API_SECRET = "sgfintech_live_sk_9a8b7c6d";` — a live secret key hardcoded in source code.',
        question: 'What is the most significant risk?',
        options: [
          { id: 'a', text: 'The secret may expire and be hard to update.' },
          { id: 'b', text: 'The variable name should be in camelCase.' },
          { id: 'c', text: 'Anyone with code access (or if the repo leaks) gets the live secret key.' }
        ],
        correct: 'c',
        feedback: { correct: 'Secrets committed to version control are a massive liability — even after deletion, git history preserves them.', wrong: 'The critical risk is credential exposure. Hardcoded secrets in code are a catastrophic security failure.' },
        tip: 'Use environment variables or a secrets manager (AWS Secrets Manager, HashiCorp Vault). Add `.env` files to `.gitignore` always.',
        points: 100
      },
      {
        id: 'q3',
        scenario: 'A Node.js endpoint: `app.get("/welcome", (req, res) => { const name = req.query.name; res.send(\"<h2>Welcome, \" + name + \"!</h2>\"); })` — user input rendered directly into HTML.',
        question: 'What attack does this enable?',
        options: [
          { id: 'a', text: 'Cross-Site Scripting (XSS) — user input renders as HTML in other users\' browsers.' },
          { id: 'b', text: 'Denial of Service (DoS) from too many requests.' },
          { id: 'c', text: 'A copyright violation.' }
        ],
        correct: 'a',
        feedback: { correct: 'Textbook Reflected XSS. An attacker sets `name=<script>stealCookies()</script>` and any visitor gets the script executed.', wrong: 'This is Reflected XSS — user-provided data rendered as HTML without escaping is a critical vulnerability.' },
        tip: 'Always escape/sanitise user data before rendering in HTML. Use `DOMPurify` client-side or templating engines that auto-escape (EJS `<%=`, Jinja2 `{{ }}`).',
        points: 100
      }
    ,
        {
                id: "adults_secure_code_1_q4",
                story: "A user reports they could see another customer's DBS account balance by changing a number in the URL.",
                scenario: "In the code, you see an API endpoint `/api/v1/accounts/{accountId}`. The code takes the `accountId` from the URL and directly fetches the corresponding account data from the database without checking who is logged in.",
                icon: "🆔",
                question: "This vulnerability, where a user can access resources they shouldn't by modifying an ID, is called:",
                options: [
                        {
                                text: "SQL Injection",
                                correct: false,
                                feedback: "SQL Injection involves tricking the database with malicious query syntax. This vulnerability is about insufficient authorization checks."
                        },
                        {
                                text: "Insecure Direct Object Reference (IDOR)",
                                correct: true,
                                feedback: "✅ Correct. The code is directly referencing a database object using user-supplied input ('accountId') without verifying if the logged-in user is authorized to view it."
                        },
                        {
                                text: "Cross-Site Scripting (XSS)",
                                correct: false,
                                feedback: "XSS involves injecting malicious scripts into a web page. This is about unauthorized data access on the backend."
                        }
                ],
                tip: "💡 Pro tip: Always implement a check to ensure the resource being requested belongs to the authenticated user. For example: `SELECT * FROM accounts WHERE account_id = ? AND user_id = ?`.",
                points: 100
        },
        {
                id: "adults_secure_code_1_q5",
                story: "The QA team found they can impersonate any user in the staging environment by creating their own JWT.",
                scenario: "You review the Java code that validates the JWT. It decodes the token and reads the user ID from the payload, but it never calls a `verify` function with the secret key to check the token's signature.",
                icon: "✍️",
                question: "What is the critical flaw in this broken authentication mechanism?",
                options: [
                        {
                                text: "The JWT is not encrypted.",
                                correct: false,
                                feedback: "While encryption (JWE) can be used, the main issue here is not confidentiality but authenticity. The server can't trust the token's contents."
                        },
                        {
                                text: "An attacker can forge a token with any user ID, as the signature isn't being validated.",
                                correct: true,
                                feedback: "✅ Precisely. The signature is what proves the token was issued by the server and hasn't been tampered with. Without verification, the token is just untrusted data."
                        },
                        {
                                text: "The JWT might not contain an expiration claim ('exp').",
                                correct: false,
                                feedback: "While missing an expiration is a vulnerability, it's less critical than failing to check the signature, which breaks the entire trust model."
                        }
                ],
                tip: "💡 Pro tip: Never manually decode and trust a JWT payload. Always use a standard library's `verify()` method, which must be configured with the correct algorithm and secret key/public key.",
                points: 100
        },
        {
                id: "adults_secure_code_1_q6",
                story: "During a PCI compliance audit, the auditor flags an issue with excessive logging.",
                scenario: "Looking at the Python application logs in production, you see entries like: `INFO: Payment processing initiated for card: 4242-4242-4242-4242`. The full credit card number is being written to a plaintext log file.",
                icon: "📄",
                question: "This is a classic case of which OWASP Top 10 vulnerability?",
                options: [
                        {
                                text: "Security Misconfiguration",
                                correct: false,
                                feedback: "While it is a misconfiguration, the more specific and accurate vulnerability category is about the data itself."
                        },
                        {
                                text: "Sensitive Data Exposure",
                                correct: true,
                                feedback: "✅ Correct. Logging sensitive data like full credit card numbers, NRICs, or passwords in plaintext exposes that data to anyone who can access the logs."
                        },
                        {
                                text: "Injection",
                                correct: false,
                                feedback: "Injection vulnerabilities relate to tricking an interpreter (like SQL or shell). This is about inappropriately storing sensitive information."
                        }
                ],
                tip: "💡 Pro tip: When logging, always mask sensitive data. Log the last 4 digits of a credit card, but never the full PAN or CVV. Ensure your logging library can be configured to filter sensitive patterns.",
                points: 100
        },
        {
                id: "adults_secure_code_1_q7",
                story: "A user reports that they were tricked into transferring funds from their account just by visiting a malicious website.",
                scenario: "You examine the 'fund transfer' API endpoint. It's a POST request, but you notice it doesn't require any anti-CSRF token. A malicious site could host a hidden form that submits a request to this endpoint, using the user's active session cookie.",
                icon: "♻️",
                question: "What vulnerability allows an attacker to make a user perform an unwanted action without their consent?",
                options: [
                        {
                                text: "Insecure Direct Object Reference (IDOR)",
                                correct: false,
                                feedback: "IDOR is about a user accessing data they shouldn't. This is about an attacker making a user *do* something they shouldn't."
                        },
                        {
                                text: "Cross-Site Request Forgery (CSRF)",
                                correct: true,
                                feedback: "✅ Exactly. The server is being 'forged' into thinking the request came from a legitimate user action on the site, when it was actually triggered by a different, malicious site."
                        },
                        {
                                text: "Server-Side Request Forgery (SSRF)",
                                correct: false,
                                feedback: "SSRF is where an attacker forces the server to make a request to another system. CSRF is where an attacker forces the *client's browser* to make a request."
                        }
                ],
                tip: "💡 Pro tip: Mitigate CSRF by using the Synchronizer Token Pattern. Your backend generates a unique token per session, which the frontend must include in all state-changing requests.",
                points: 100
        },
        {
                id: "adults_secure_code_1_q8",
                story: "Your company's security scanner (like Snyk or Dependabot) has flagged a critical vulnerability.",
                scenario: "The alert points to `left-pad@1.3.0`, a dependency in your Node.js project's `package.json`. The alert links to a CVE explaining that this version has a known Remote Code Execution flaw.",
                icon: "📦",
                question: "What is the official OWASP category for this type of risk?",
                options: [
                        {
                                text: "Software and Data Integrity Failures",
                                correct: false,
                                feedback: "This category is more about issues like insecure deserialization. There's a more specific category for this exact problem."
                        },
                        {
                                text: "Vulnerable and Outdated Components",
                                correct: true,
                                feedback: "✅ Correct. This category (previously 'Using Components with Known Vulnerabilities') covers the risk of using libraries, frameworks, or other software modules with known security flaws."
                        },
                        {
                                text: "Security Misconfiguration",
                                correct: false,
                                feedback: "The configuration of the component isn't the issue; the component's code itself is flawed. The vulnerability is inherent to the dependency."
                        }
                ],
                tip: "💡 Pro tip: Integrate automated dependency scanning into your CI/CD pipeline. Tools like `npm audit`, `snyk`, or GitHub's Dependabot can automatically flag and even create pull requests to fix vulnerable dependencies.",
                points: 100
        },
        {
                id: "adults_secure_code_1_q9",
                story: "The finance department complains about a huge bill from your SMS provider. The system sent thousands of One-Time Password (OTP) messages in one hour.",
                scenario: "You check the 'Send OTP' API endpoint. You discover there are no restrictions on how many times the endpoint can be called for a given phone number. An attacker created a simple script to abuse this.",
                icon: "💸",
                question: "What security control is missing from this API endpoint?",
                options: [
                        {
                                text: "Authentication",
                                correct: false,
                                feedback: "The endpoint might require authentication, but that doesn't prevent a legitimate (or stolen) user from abusing it repeatedly."
                        },
                        {
                                text: "Rate Limiting",
                                correct: true,
                                feedback: "✅ Exactly. Rate limiting should be applied to prevent abuse, such as allowing only one OTP request per phone number every 60 seconds. This protects against resource exhaustion and financial loss (SMS bombing)."
                        },
                        {
                                text: "Input Validation",
                                correct: false,
                                feedback: "Input validation would check if the phone number format is correct, but it wouldn't prevent an attacker from sending thousands of valid requests."
                        }
                ],
                tip: "💡 Pro tip: Apply rate limiting to all sensitive or costly endpoints: login attempts, OTP generation, password reset, and computationally expensive queries.",
                points: 100
        },
        {
                id: "adults_secure_code_1_q10",
                story: "A penetration tester discovers they can see detailed stack traces and configuration variables by triggering an error in the production application.",
                scenario: "You check the Django `settings.py` file on the production server and find a line that says `DEBUG = True`. This setting is meant for development environments only.",
                icon: "🛠️",
                question: "Leaving debug mode enabled in a production environment is a critical example of what?",
                options: [
                        {
                                text: "Sensitive Data Exposure",
                                correct: false,
                                feedback: "While debug pages can leak sensitive data, the root cause of the problem is not in how the data is handled, but in the server's configuration."
                        },
                        {
                                text: "Security Misconfiguration",
                                correct: true,
                                feedback: "✅ Yes. The application is not configured correctly for a production environment. Features that are useful for debugging become dangerous security holes when exposed to the public internet."
                        },
                        {
                                text: "Broken Access Control",
                                correct: false,
                                feedback: "Access control is about what users are allowed to do. This vulnerability is about exposing system internals due to an incorrect server setting."
                        }
                ],
                tip: "💡 Pro tip: Use environment variables to control settings like debug mode. Your production startup script should never set `DEBUG` to `True`.",
                points: 100
        }]
  },
  {
    id: 'adults_dt_2b',
    ageGroup: 'adults',
    type: 'decision-tree',
    title: 'The Credential Leak',
    subtitle: 'An "oops" moment on a public GitHub repo.',
    icon: '🔐',
    difficulty: 'Advanced',
    xp: 300,
    maxScore: 300,
    briefing: "You've just pushed a commit when a Slack alert fires: \"AWS Access Key Detected in Public Repository\". You accidentally committed your IAM keys. This is a code red.",
    tree: {
      start: {
        id: 'start',
        story: "The key is live on GitHub. Automated bots scan for credential leaks within seconds. Every moment counts.",
        question: 'What is your immediate first priority?',
        choices: [
          { id: 'a', text: 'Log into AWS IAM Console and immediately deactivate the leaked access key.', next: 'node_key_rotated', points: 100 },
          { id: 'b', text: 'Delete the GitHub repository to hide the evidence.', next: 'node_delete_repo', points: 0 },
          { id: 'c', text: 'Start writing a post-mortem document for your manager.', next: 'node_delete_repo', points: 0 }
        ]
      },
      node_delete_repo: {
        id: 'node_delete_repo',
        story: "Too late. GitHub is continuously cloned by bots. Your key is already in the wild — deleting the repo doesn't help.",
        question: 'What should you have done instead?',
        choices: [
          { id: 'a', text: 'Invalidate the credential in the AWS console right now.', next: 'node_key_rotated', points: 50 },
          { id: 'b', text: 'Ask GitHub support to scrub the data from their servers.', next: 'end_fail', points: 0 }
        ]
      },
      node_key_rotated: {
        id: 'node_key_rotated',
        story: "Excellent — the key is now inactive. The immediate threat is neutralised. Now: damage assessment and reporting.",
        question: 'What is your next action?',
        choices: [
          { id: 'a', text: 'Analyse AWS CloudTrail logs for any API activity from the leaked key and report to your CSO.', next: 'node_report', points: 100 },
          { id: 'b', text: "Assume no damage was done since I was fast. I'll just be more careful.", next: 'end_partial', points: 0 }
        ]
      },
      node_report: {
        id: 'node_report',
        story: "You reported the incident. CloudTrail shows no unauthorised activity — you acted fast enough. Final step: prevent recurrence.",
        question: 'How do you prevent this from happening again?',
        choices: [
          { id: 'a', text: 'Implement a pre-commit hook (`git-secrets` or `talisman`) to scan for secrets before any commit.', next: 'end_success', points: 100 },
          { id: 'b', text: 'Promise to manually double-check commits going forward.', next: 'end_partial_2', points: 50 }
        ]
      },
      end_success: { id: 'end_success', story: 'Perfect incident response: contain, assess, report, prevent. Automating secret detection protects the entire engineering team.', question: null, choices: [], points: 100 },
      end_partial: { id: 'end_partial', story: 'You failed to investigate or report. An attacker COULD have accessed data — the company is now non-compliant with no incident record.', question: null, choices: [], points: 50 },
      end_partial_2: { id: 'end_partial_2', story: 'Manual checks fail under pressure. Automation is the only reliable defence at scale. Add `git-secrets` to your workflow today.', question: null, choices: [], points: 50 },
      end_fail: { id: 'end_fail', story: 'While you were hiding the commit, a bot used the key to spin up crypto-mining instances costing thousands in SGD. Always invalidate first.', question: null, choices: [], points: 0 }
    }
  }
);

// ─── Helper: get all missions for an age group ────────────────────────────────
function getMissions(ageGroup) {
  return MISSIONS[ageGroup] || [];
}

function getMission(ageGroup, missionId) {
  return getMissions(ageGroup).find(m => m.id === missionId);
}
