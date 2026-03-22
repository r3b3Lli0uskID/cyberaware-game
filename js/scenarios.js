// ═══════════════════════════════════════════════════════════════════════════════
// CyberGuard — Mission Scenarios
// 4 age groups × 3 missions × 3 types (quiz, spot-threat, decision-tree)
// ═══════════════════════════════════════════════════════════════════════════════

const MISSIONS = {

  // Expert array initialised here so it is always defined before
  // new_missions_expert.js runs (which uses MISSIONS.expert.push()).
  // Core expert missions are pushed below after FOUNDATION_MISSIONS.
  expert: [],

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


  // ╔══════════════════════════════════════════════════════╗
  // ║  TEENS  (13–17)                                      ║
  // ╚══════════════════════════════════════════════════════╝,

  // 1 — QUIZ: Roblox Account Safety
  {
    id: 'kids_new_quiz_1',
    type: 'quiz',
    title: 'Roblox Agent',
    subtitle: 'Keep Your Game Account Safe',
    icon: '🎮',
    difficulty: 'Beginner',
    xp: 400,
    module: 'gaming-security',
    tags: ['gaming', 'kids'],
    briefing: 'You love playing Roblox — but sneaky scammers love it too! They try to trick players into giving away accounts and Robux. Complete this mission to become a Roblox Safety Agent and protect yourself! 🕹️',
    questions: [
      {
        id: 'knq1_q1',
        story: 'You are playing Roblox when a player named "RobloxAdmin_Official" sends you a message: "Congrats! You have been selected to receive 10,000 FREE Robux! Send us your username AND password to claim your prize right now!"',
        scenario: 'An in-game message is asking for your Roblox username and password to give you free Robux.',
        correct: 'b',
        feedback: {
          correct: 'Correct! Roblox will NEVER ask for your password in a message. This is a scam to steal your account. Real Robux rewards are given inside the game automatically.',
          wrong: 'Be careful! No real prize ever needs your password. If you gave it away, a scammer could take over your whole account and delete your items!'
        },
        options: [
          { id: 'a', text: 'Send your username and password quickly before the offer expires!' },
          { id: 'b', text: 'Ignore the message and tell a parent — Roblox never asks for passwords in chat.' },
          { id: 'c', text: 'Send only your username, not your password.' },
          { id: 'd', text: 'Ask the player to send the Robux first, then give your password.' }
        ],
        points: 100
      },
      {
        id: 'knq1_q2',
        story: 'Your friend tells you about a website: "www.free-robux-generator.fun". He says he typed in his Roblox username and got 5,000 free Robux! He wants you to try it too.',
        scenario: 'A website promises to generate free Robux if you type in your username.',
        correct: 'c',
        feedback: {
          correct: 'Smart! Free Robux generator websites are ALWAYS fake. They are designed to steal your account information or download bad software. The only real way to get Robux is through the official Roblox app or website.',
          wrong: 'Free Robux generator websites do not work — they are scam traps. Even your friend\'s account might now be at risk without him knowing it!'
        },
        options: [
          { id: 'a', text: 'Try it — your friend already used it and is fine!' },
          { id: 'b', text: 'Try it but only type a fake username to be safe.' },
          { id: 'c', text: 'Do not visit the website — tell your friend it is a scam too.' },
          { id: 'd', text: 'Ask a different friend if they have used the same website.' }
        ],
        points: 100
      },
      {
        id: 'knq1_q3',
        story: null,
        scenario: 'You want to make your Roblox account harder for hackers to break into. Which of these will help the MOST?',
        correct: 'a',
        feedback: {
          correct: 'Using a long, unique password with letters, numbers and symbols is the best way to protect your account. Think of a fun sentence only you would know, like "MyDog3Loves$Noodles"!',
          wrong: 'A short or simple password is easy for hackers to guess. Using the same password on many games is also risky — if one gets hacked, they all do!'
        },
        options: [
          { id: 'a', text: 'Use a long password with letters, numbers and symbols, and use it ONLY for Roblox.' },
          { id: 'b', text: 'Use your birthday as your password — it is easy to remember.' },
          { id: 'c', text: 'Use the same password for Roblox, Minecraft and your school email so you never forget.' },
          { id: 'd', text: 'Use the name of your favourite game character as your password.' }
        ],
        points: 100
      },
      {
        id: 'knq1_q4',
        story: 'While playing Roblox, a pop-up covers your screen: "Your Roblox account has a VIRUS! Call 6123-4567 NOW to fix it for free before your account is deleted!" The phone number is shown in big red letters.',
        scenario: 'A scary pop-up says your account has a virus and tells you to call a phone number.',
        correct: 'd',
        feedback: {
          correct: 'Well done! Roblox and games never show phone numbers to call. This is a fake scare message called a "scareware" pop-up. Close it and tell a parent — do not call that number!',
          wrong: 'This is a scam! If you called that number, a stranger could ask for your personal information or even ask for money. Game companies never ask you to call them through a pop-up.'
        },
        options: [
          { id: 'a', text: 'Call the number right away — your account might be deleted!' },
          { id: 'b', text: 'Ask your friend to call the number for you.' },
          { id: 'c', text: 'Type your Roblox password into the pop-up to "verify" your account.' },
          { id: 'd', text: 'Close the pop-up immediately and tell a parent about it.' }
        ],
        points: 100
      },
      {
        id: 'knq1_q5',
        story: null,
        scenario: 'Your little sister wants to start playing Roblox. What is the MOST important safety advice you should give her first?',
        correct: 'b',
        feedback: {
          correct: 'Setting the account to private and never sharing personal details are the most important first steps. This stops strangers from contacting her or finding out where she lives or goes to school.',
          wrong: 'While fun tips are nice, safety comes first! Making the account private and knowing never to share personal information are the most important rules for staying safe online.'
        },
        options: [
          { id: 'a', text: 'Show her the best games to play first.' },
          { id: 'b', text: 'Set the account to private and remind her never to share her real name, school, or address online.' },
          { id: 'c', text: 'Tell her to add as many friends as possible to level up faster.' },
          { id: 'd', text: 'Show her how to get free Robux from websites online.' }
        ],
        points: 100
      }
    ]
  },

  // 2 — SPOT-THREAT: Fake Gaming Website
  {
    id: 'kids_new_spot_1',
    type: 'spot-threat',
    title: 'Trap Spotter',
    subtitle: 'Find All the Danger Signs on This Website',
    icon: '🔍',
    difficulty: 'Beginner',
    xp: 400,
    module: 'gaming-security',
    tags: ['gaming', 'kids'],
    briefing: 'A fake gaming website is trying to trick kids into giving away their information! Your mission: tap on EVERYTHING that looks dangerous or suspicious. Find all the traps to earn full marks and become a Trap Spotter Champion! 🏆',
    totalPoints: 600,
    items: [
      { id: 'item1', type: 'text', text: 'Website address: http://minecraft-free-diamonds.xyz (no padlock shown)', isThreat: true, threatDesc: '🔴 DANGER: No padlock and a weird address ending in ".xyz"! Real game websites use "https://" and known endings like ".com". This site is NOT safe.' },
      { id: 'item2', type: 'text', text: '🎉 YOU ARE SELECTED! Enter your Minecraft username and password to claim 1,000 FREE diamonds RIGHT NOW!', isThreat: true, threatDesc: '🔴 SCAM ALERT! No game ever gives free items in exchange for your password. This is trying to steal your account!' },
      { id: 'item3', type: 'text', text: 'Play our fun browser-based Minecraft mini-games here! 🎮', isThreat: false },
      { id: 'item4', type: 'text', text: '⬇️ DOWNLOAD our free Minecraft skin changer app — click here! (Not from official app store)', isThreat: true, threatDesc: '🔴 NEVER download apps from random websites! Only download from the Google Play Store, Apple App Store or official game launchers. Unknown downloads can put viruses on your device.' },
      { id: 'item5', type: 'text', text: 'FLASH SALE: Enter your parent\'s credit card number to upgrade to PREMIUM — only $0.99 for 1 month!', isThreat: true, threatDesc: '🔴 NEVER enter payment details without asking a parent first, and NEVER on a website you just found. Always ask a trusted adult before any online purchase.' },
      { id: 'item6', type: 'text', text: 'Minecraft community fan art gallery 🖼️', isThreat: false },
      { id: 'item7', type: 'text', text: 'Fill in this form: Full Name, Home Address, School Name, Age — to join our Minecraft Kids Club!', isThreat: true, threatDesc: '🔴 PERSONAL INFO TRAP! Never give your full name, home address, or school name to any website without asking a parent. This information could be used by strangers to find you.' }
    ]
  },

  // 3 — DECISION-TREE: Someone Wants to Be Your Online Friend
  {
    id: 'kids_new_dt_1',
    type: 'decision-tree',
    title: 'New Online Friend?',
    subtitle: 'Is This Person Really Who They Say?',
    icon: '🤔',
    difficulty: 'Beginner',
    xp: 400,
    module: 'social-engineering',
    tags: ['social', 'kids'],
    briefing: 'Someone you do not know in real life is trying to become your online friend. Every choice you make matters! Follow the path and make the right decisions to earn your Safety Star badge. 🌟',
    maxScore: 300,
    tree: {
      start: {
        type: 'choice',
        text: 'You are playing a game on your tablet when someone named "CoolKid_SG" sends a friend request and a message: "Hey! I\'m 10, I live in Singapore too! I LOVE this game! Want to be friends and play together?" 🎮',
        choices: [
          { text: 'Accept straight away — they seem nice and the same age!', next: 'accepted', points: 0 },
          { text: 'Ask a parent if it is okay before accepting', next: 'asked_parent', points: 100 },
          { text: 'Ignore the request — you do not know this person', next: 'ignored', points: 50 }
        ]
      },
      accepted: {
        type: 'choice',
        text: 'After a week of playing together, "CoolKid_SG" says: "You\'re my best friend! Can I have your WhatsApp number? I want to message you outside the game." 📱',
        choices: [
          { text: 'Give my number — we\'ve been friends for a week already!', next: 'gave_number', points: 0 },
          { text: 'Say no and tell a parent about this conversation', next: 'told_parent_late', points: 50 }
        ]
      },
      asked_parent: {
        type: 'choice',
        text: 'Your parent looks at the messages with you. They remind you that anyone online can pretend to be any age. They suggest keeping privacy settings on so only real-life friends can message you. What do you do? 🛡️',
        choices: [
          { text: 'Follow my parent\'s advice and update my privacy settings', next: 'great_ending', points: 100 },
          { text: 'Accept the request anyway — I am sure they are a real kid', next: 'accepted', points: 0 }
        ]
      },
      ignored: {
        type: 'choice',
        text: '"CoolKid_SG" sends another message: "Why won\'t you accept my request? I just want to play together! I can give you free in-game coins if you add me 🪙" 🤨',
        choices: [
          { text: 'Accept now — free coins AND a new friend sounds great!', next: 'accepted', points: 0 },
          { text: 'Block the person and tell a parent', next: 'blocked_told', points: 100 }
        ]
      },
      gave_number: {
        type: 'outcome',
        text: '❌ "CoolKid_SG" was actually an adult who was not honest about who they were. They now have your phone number and start sending messages at all hours. Your parent has to block them and make a report. Always ask a parent before sharing ANY contact details online — even with people who seem like friends.',
        points: 0
      },
      told_parent_late: {
        type: 'outcome',
        text: '✅ You made the right call by telling a parent! Even though you waited a week, you still protected yourself before sharing anything private. Your parent helped you review the conversation and update your privacy settings. Good job for speaking up!',
        points: 50
      },
      great_ending: {
        type: 'outcome',
        text: '✅ Amazing! By asking your parent first AND following their advice, you stayed completely safe. You learned a really important lesson: people online are not always who they say they are. Your parent is your best safety partner online! 🏆',
        points: 0
      },
      blocked_told: {
        type: 'outcome',
        text: '✅ Great instincts! Blocking someone who offers gifts to get your attention is exactly the right thing to do. Real friends do not need to bribe you. Telling a parent means they can help keep you safe. You earned your Safety Star! 🌟',
        points: 0
      }
    }
  },

  // 4 — QUIZ: Cyberbullying & Screen Time
  {
    id: 'kids_new_quiz_2',
    type: 'quiz',
    title: 'Digital Kindness Champion',
    subtitle: 'Cyberbullying and Being a Good Online Friend',
    icon: '💙',
    difficulty: 'Beginner',
    xp: 400,
    module: 'social-engineering',
    tags: ['social', 'kids'],
    briefing: 'Being kind online matters just as much as being kind in school or at home! In this mission, you will learn what cyberbullying looks like, how to help a friend who is being bullied, and how to be a Digital Kindness Champion! 💙',
    questions: [
      {
        id: 'knq2_q1',
        story: 'Your classmate Wei posted a drawing she made on her school tablet. Some kids in your class group chat are sending laughing emojis and saying "this is so bad 😂😂 who taught you to draw??" Wei has gone quiet in the chat.',
        scenario: 'Other kids in a group chat are making fun of a classmate\'s artwork and she has gone silent.',
        correct: 'c',
        feedback: {
          correct: 'Being an upstander takes courage, but it makes a real difference! Standing up for Wei in the chat — even just saying "that\'s not nice" — can help her feel less alone. Telling a trusted adult means a grown-up can also step in to stop it properly.',
          wrong: 'Laughing along or staying quiet makes things worse for Wei. Even silence can feel like agreement to someone being bullied. Being a true friend means speaking up!'
        },
        options: [
          { id: 'a', text: 'Send a laughing emoji too — everyone else is doing it.' },
          { id: 'b', text: 'Stay quiet and watch — it is not your problem.' },
          { id: 'c', text: 'Stand up for Wei in the chat and tell a trusted adult like a teacher.' },
          { id: 'd', text: 'Leave the group chat without saying anything.' }
        ],
        points: 100
      },
      {
        id: 'knq2_q2',
        story: null,
        scenario: 'Which of these is an example of CYBERBULLYING?',
        correct: 'b',
        feedback: {
          correct: 'Correct! Sending repeated mean or threatening messages to someone online is cyberbullying. It does not matter if it happens in a game, a group chat, or social media — it is always wrong and always hurtful.',
          wrong: 'Cyberbullying means using technology to deliberately hurt, embarrass, or threaten someone repeatedly. It is not the same as having an argument or disagreeing about something in a game.'
        },
        options: [
          { id: 'a', text: 'Disagreeing with a friend about which game is better.' },
          { id: 'b', text: 'Sending someone mean messages every day telling them they are ugly and nobody likes them.' },
          { id: 'c', text: 'Losing a game and feeling upset about it.' },
          { id: 'd', text: 'Not wanting to play with someone new in an online game.' }
        ],
        points: 100
      },
      {
        id: 'knq2_q3',
        story: 'Your friend Siti tells you that someone at school made a fake Instagram account using her photo and name, and has been posting embarrassing things pretending to be her. She is really upset and does not know what to do.',
        scenario: 'Your friend has had a fake account made in her name and is very distressed.',
        correct: 'a',
        feedback: {
          correct: 'Exactly right! Creating a fake account to impersonate someone is a form of cyberbullying and is actually against the law in Singapore. The very first step is to tell a trusted adult — a parent or teacher — who can help report the account and get it removed.',
          wrong: 'Your friend needs adult help right away. Creating fake accounts is against every platform\'s rules AND potentially against the law. A trusted adult can take the right steps to get it removed quickly.'
        },
        options: [
          { id: 'a', text: 'Tell her to show a parent or teacher straight away so they can report the fake account.' },
          { id: 'b', text: 'Tell her to create her own fake account to expose the bully.' },
          { id: 'c', text: 'Advise her to delete her real Instagram account so people do not get confused.' },
          { id: 'd', text: 'Tell her to ignore it and it will go away on its own.' }
        ],
        points: 100
      },
      {
        id: 'knq2_q4',
        story: null,
        scenario: 'You are feeling upset after a bad day at school and you want to post something angry on a class group chat. What should you do?',
        correct: 'd',
        feedback: {
          correct: 'Taking a break before posting something when you are angry is one of the most important digital skills! Once something is sent or posted, you cannot fully take it back — screenshots last forever. Talking to someone you trust in person is always a better way to deal with big feelings.',
          wrong: 'Posting when you are angry often leads to saying things you will regret. Words online can hurt people and screenshots can last forever, even if you delete the post.'
        },
        options: [
          { id: 'a', text: 'Type everything you are feeling and send it immediately.' },
          { id: 'b', text: 'Post something vague that people will not understand.' },
          { id: 'c', text: 'Tag the person who upset you so everyone knows what they did.' },
          { id: 'd', text: 'Step away from the screen, take some deep breaths, and talk to a trusted adult instead.' }
        ],
        points: 100
      },
      {
        id: 'knq2_q5',
        story: 'You are playing an online game and another player keeps calling you bad names and saying you are terrible at the game. It is making you feel sad and you do not want to play anymore.',
        scenario: 'Another player is being mean and insulting to you in an online game and it is upsetting you.',
        correct: 'b',
        feedback: {
          correct: 'Using the Block and Report buttons in the game is exactly what they are there for! You do not have to put up with mean players. Blocking stops them from talking to you, and reporting tells the game team so they can take action and protect other players too.',
          wrong: 'You do not have to accept mean behaviour in any game! The right tools are Block and Report. Never reply with more meanness — it usually makes things worse.'
        },
        options: [
          { id: 'a', text: 'Call them names back — they deserve it!' },
          { id: 'b', text: 'Use the Block and Report buttons in the game, and tell a parent.' },
          { id: 'c', text: 'Quit the game and never play it again.' },
          { id: 'd', text: 'Ask all your friends to gang up on the mean player.' }
        ],
        points: 100
      }
    ]
  },

  // 5 — SPOT-THREAT: Suspicious WhatsApp Message
  {
    id: 'kids_new_spot_2',
    type: 'spot-threat',
    title: 'Message Detective',
    subtitle: 'Spot the Traps in This WhatsApp Message',
    icon: '📩',
    difficulty: 'Intermediate',
    xp: 400,
    module: 'scams',
    tags: ['social', 'kids'],
    briefing: 'Your mission: read this WhatsApp message carefully and tap on EVERY part that looks suspicious or dangerous. Some parts are fine — only flag the real threats! Can you spot them all? 🕵️',
    totalPoints: 500,
    items: [
      { id: 'item1', type: 'text', text: 'Sender: +65 9999 8888 (Unknown number, not saved in your contacts)', isThreat: true, threatDesc: '🔴 UNKNOWN SENDER: You do not know this person. Messages from strangers should always make you careful — never reply or click links without checking with a parent first.' },
      { id: 'item2', type: 'text', text: '"Congratulations! You have won a $500 Grab voucher in the National Day Lucky Draw!" 🎉', isThreat: true, threatDesc: '🔴 FAKE PRIZE CLAIM: You cannot win a lucky draw you never entered! "Congratulations you won" messages from strangers are almost always scams.' },
      { id: 'item3', type: 'text', text: '"This offer expires in ONE HOUR — claim NOW or lose your prize forever!" ⏰', isThreat: true, threatDesc: '🔴 FAKE URGENCY: Creating a time limit is a trick to make you panic and act without thinking. Real prizes do not disappear in one hour.' },
      { id: 'item4', type: 'text', text: '"Click here to claim: www.grab-lucky-draw-sg.xyz/claim"', isThreat: true, threatDesc: '🔴 FAKE LINK: The real Grab website is grab.com. ".xyz" domains are not used by real companies. This link will try to steal your personal information.' },
      { id: 'item5', type: 'text', text: '"You can use GrabFood to order bubble tea, chicken rice and more in Singapore 🧋"', isThreat: false },
      { id: 'item6', type: 'text', text: '"To verify your identity, reply with your full name, home address and NRIC number."', isThreat: true, threatDesc: '🔴 PERSONAL INFO HARVESTING: NEVER give your home address or any ID number in a WhatsApp message to a stranger. This is how scammers steal identities.' }
    ]
  },

  // 6 — DECISION-TREE: School Computer Safety
  {
    id: 'kids_new_dt_2',
    type: 'decision-tree',
    title: 'School Computer Mission',
    subtitle: 'Stay Safe on Your School Chromebook',
    icon: '💻',
    difficulty: 'Beginner',
    xp: 400,
    module: 'privacy',
    tags: ['education', 'kids'],
    briefing: 'You use your school Chromebook every day. But do you know how to use it safely? Follow this mission to make the right choices and protect yourself — and your classmates — on school devices! 🏫',
    maxScore: 300,
    tree: {
      start: {
        type: 'choice',
        text: 'Your friend Zack asks to borrow your school Chromebook to check something online during recess. He says it will only take one minute. 💻',
        choices: [
          { text: 'Let him use it — he is my best friend and it is only one minute!', next: 'lent_it', points: 0 },
          { text: 'Say no politely and remind him to use his own device', next: 'said_no', points: 100 },
          { text: 'Let him use it but watch what he does the whole time', next: 'watched', points: 50 }
        ]
      },
      lent_it: {
        type: 'choice',
        text: 'Zack uses your Chromebook and visits a gaming website the school has blocked. The school\'s filter logs the visit under YOUR account. Your teacher sees it and calls YOU to the office. 😬',
        choices: [
          { text: 'Tell the truth: I lent my device and did not know what Zack was doing', next: 'told_truth', points: 50 },
          { text: 'Say nothing and hope the teacher forgets about it', next: 'stayed_silent', points: 0 }
        ]
      },
      said_no: {
        type: 'choice',
        text: 'Zack is a little annoyed but finds a school iPad to use instead. Later, the school discovers that iPad was used to visit a blocked site. Because you used your own device only, your record is completely clean. 🌟',
        choices: [
          { text: 'Feel good about my decision and remind Zack why school rules matter', next: 'great_ending', points: 100 }
        ]
      },
      watched: {
        type: 'choice',
        text: 'Even though you watched, Zack managed to open a blocked site in a new tab when you looked away for a second. The visit is now logged under your school account. 😕',
        choices: [
          { text: 'Report it to the teacher and explain what happened', next: 'told_truth', points: 50 },
          { text: 'Delete the browser history and hope nobody notices', next: 'deleted_history', points: 0 }
        ]
      },
      told_truth: {
        type: 'outcome',
        text: '✅ Good decision to be honest! Your teacher appreciates you telling the truth. You received a small reminder about device sharing rules. Remember: your school account is YOUR responsibility — only YOU should use it.',
        points: 0
      },
      stayed_silent: {
        type: 'outcome',
        text: '❌ Staying silent when you did nothing wrong makes things worse. The incident stays on your record. Always tell the truth to a trusted adult — honesty is always the better path.',
        points: 0
      },
      great_ending: {
        type: 'outcome',
        text: '✅ Perfect! You protected your school record AND helped your friend understand why the rules exist. School devices are linked to your personal account — what happens on them is your responsibility. Great digital citizenship! 🏆',
        points: 0
      },
      deleted_history: {
        type: 'outcome',
        text: '❌ Deleting browser history on a school Chromebook does not actually remove the logs from the school\'s system — it is still recorded on the school server. Now you have an additional problem. Always be honest with teachers when something goes wrong.',
        points: 0
      }
    }
  },

  // 7 — QUIZ: Passwords and Privacy (Intermediate)
  {
    id: 'kids_new_quiz_3',
    type: 'quiz',
    title: 'Password Protector',
    subtitle: 'Secrets, Passwords and Private Information',
    icon: '🔐',
    difficulty: 'Intermediate',
    xp: 400,
    module: 'identity',
    tags: ['general', 'kids'],
    briefing: 'Your passwords and private information are like the keys to your house — you would not give them to just anyone! In this mission you will learn how to protect your most important digital secrets. Ready, Password Protector? 🔑',
    questions: [
      {
        id: 'knq3_q1',
        story: null,
        scenario: 'Which of these is the SAFEST password to use for your online game account?',
        correct: 'c',
        feedback: {
          correct: 'A longer password with a mix of capital letters, small letters, numbers AND symbols is the strongest! Think of a silly sentence you will remember, then take the first letter of each word and add numbers and symbols.',
          wrong: 'Short passwords and words from the dictionary are the first things hackers try to guess. A strong password is long, random and uses a mix of different types of characters.'
        },
        options: [
          { id: 'a', text: 'sunshine' },
          { id: 'b', text: 'Ivan2012' },
          { id: 'c', text: 'T!ger$Run7Fast#Sky' },
          { id: 'd', text: 'qwerty123' }
        ],
        points: 100
      },
      {
        id: 'knq3_q2',
        story: 'Your best friend Aisha wants to know your game password so she can log in and collect your daily bonus while you are on holiday.',
        scenario: 'Your trusted best friend is asking for your game account password.',
        correct: 'd',
        feedback: {
          correct: 'Even with your best friend, you should NEVER share your password! Passwords are private even from friends. If Aisha accidentally shares it with someone else, or if someone looks over her shoulder, your account could be taken over. Ask your parents to help find another way.',
          wrong: 'Passwords should always be kept private — even from best friends! It is not about trust; it is about keeping your account safe. There is always a safer way to handle this situation.'
        },
        options: [
          { id: 'a', text: 'Tell her — she is my best friend and I trust her completely.' },
          { id: 'b', text: 'Tell her but make her promise not to tell anyone else.' },
          { id: 'c', text: 'Write it down on a piece of paper and give it to her at school.' },
          { id: 'd', text: 'Say no politely and ask a parent to help find another solution.' }
        ],
        points: 100
      },
      {
        id: 'knq3_q3',
        story: 'You are filling in a form on a new educational game website. It asks for: your nickname (username), email address, age, full home address, and your school name.',
        scenario: 'A new game website is asking for several pieces of personal information to sign up.',
        correct: 'b',
        feedback: {
          correct: 'Exactly right! Games and educational websites typically only need a username, email and age. Your full home address and school name are private information that websites do not need — and asking for them is a red flag. Always check with a parent before giving any personal details online.',
          wrong: 'Not all information is needed just because a form asks for it. Your home address and school name are private details that games do not need. Always ask a parent before filling in forms that request personal information.'
        },
        options: [
          { id: 'a', text: 'Fill in everything — the website needs all this information to work.' },
          { id: 'b', text: 'Stop and ask a parent before filling in anything — home address and school name are private.' },
          { id: 'c', text: 'Fill in a made-up address so your real one is protected.' },
          { id: 'd', text: 'Only fill in your full name and skip the rest.' }
        ],
        points: 100
      },
      {
        id: 'knq3_q4',
        story: null,
        scenario: 'What does it mean to use Two-Factor Authentication (2FA) on a game account?',
        correct: 'a',
        feedback: {
          correct: 'That is exactly what 2FA does! It adds a second check — like a special code sent to your parent\'s phone — so that even if someone guesses your password, they STILL cannot get into your account without that code. It is like having two locks on one door!',
          wrong: '2FA is about adding a SECOND step to log in — usually a code sent to your phone or email. This means hackers need BOTH your password AND that code to get in, making your account much harder to break into.'
        },
        options: [
          { id: 'a', text: 'When you log in, you also need a special code sent to your phone or email to prove it is really you.' },
          { id: 'b', text: 'You use two different passwords at the same time.' },
          { id: 'c', text: 'Your account gets deleted if someone tries to log in twice incorrectly.' },
          { id: 'd', text: 'You need to answer two security questions every time you play.' }
        ],
        points: 100
      },
      {
        id: 'knq3_q5',
        story: 'You are at a shopping mall and you see a sign: "FREE WiFi — KidZone_FreeWifi — no password needed!" You want to play your mobile game while waiting for your parents.',
        scenario: 'There is a free open WiFi network available at the mall.',
        correct: 'c',
        feedback: {
          correct: 'Open WiFi networks (ones with no password) are risky because anyone can be on the same network and potentially see what you are doing. Ask your parents if it is okay and use your mobile data or the mall\'s official WiFi instead. If your parents are nearby, it is even better to just wait until you are home.',
          wrong: 'Open WiFi networks that require no password can be set up by anyone — even a scammer. It is much safer to ask a parent first, use mobile data, or wait until you are home on your safe home WiFi.'
        },
        options: [
          { id: 'a', text: 'Connect immediately — free WiFi is great and there is no password so it must be safe!' },
          { id: 'b', text: 'Connect but only play games, not watch videos, to save data.' },
          { id: 'c', text: 'Ask a parent first, or use your mobile data instead.' },
          { id: 'd', text: 'Connect but do not tell your parents so they do not worry.' }
        ],
        points: 100
      },
      {
        id: 'knq3_q6',
        story: 'You receive an email saying your school library account will be "DELETED" unless you log in using a link in the email right now. The email address is: noreply@schoolibrary-sg.com',
        scenario: 'An urgent email threatens to delete your school account if you do not click a link.',
        correct: 'b',
        feedback: {
          correct: 'Well spotted! Real school systems never threaten to delete your account in an email, and they would use your school\'s official email address (ending in your school\'s domain, not a random .com). This is a phishing email. Always check with a parent or teacher before clicking any link in an email like this.',
          wrong: 'This is a phishing email — a fake email designed to trick you into clicking a dangerous link. The email address is not from your real school, and real school systems do not threaten to delete your account by email. Always tell a trusted adult before clicking links in urgent emails.'
        },
        options: [
          { id: 'a', text: 'Click the link quickly so your account is not deleted!' },
          { id: 'b', text: 'Do not click the link — show it to a parent or teacher instead.' },
          { id: 'c', text: 'Reply to the email and ask if it is real.' },
          { id: 'd', text: 'Forward the email to all your friends to warn them.' }
        ],
        points: 100
      },
      {
        id: 'knq3_q7',
        story: null,
        scenario: 'Which of these pieces of information should you NEVER post on a public gaming profile or social media page?',
        correct: 'd',
        feedback: {
          correct: 'Your home address and school name together are very dangerous to post publicly because they tell strangers exactly where you live and where you can be found every day. Always keep this information private, no matter which platform you use.',
          wrong: 'While a username and favourite game are fine to share publicly, your home address and school name are private details that strangers could use to find you in real life. Always keep those private!'
        },
        options: [
          { id: 'a', text: 'Your gaming username' },
          { id: 'b', text: 'Your favourite game' },
          { id: 'c', text: 'Your country (Singapore)' },
          { id: 'd', text: 'Your home address and school name' }
        ],
        points: 100
      }
    ]
  },
  ],

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
      difficulty: 'Hard',
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


  // ╔══════════════════════════════════════════════════════╗
  // ║  ADULTS  (18–45)                                     ║
  // ╚══════════════════════════════════════════════════════╝,

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
  },

  ],

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
      difficulty: 'Hard',
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
      difficulty: 'Hard',
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
      difficulty: 'Hard',
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


  // ╔══════════════════════════════════════════════════════╗
  // ║  SENIORS  (46–65+)                                   ║
  // ╚══════════════════════════════════════════════════════╝,

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
  },

  {
    id: 'adults_new_spot_1',
    type: 'spot-threat',
    title: 'Fake MOH Health Advisory',
    subtitle: 'Government Impersonation in Healthcare',
    icon: '🏥',
    difficulty: 'Hard',
    xp: 800,
    tags: ['health', 'general'],
    module: 'health-security',
    briefing: 'A phishing email impersonating the Ministry of Health has been intercepted. Healthcare-themed attacks surged 300% post-pandemic as Singaporeans grew accustomed to receiving real MOH communications. Identify every threat indicator.',
    totalPoints: 600,
    items: [
      { id: 'moh_domain', type: 'text', text: 'From: health-advisory@moh-singapore.org', isThreat: true, threatDesc: '🔴 FAKE MOH DOMAIN. All official MOH Singapore email communications come from @moh.gov.sg — this is a fixed Singapore government requirement. "moh-singapore.org" is an attacker-registered lookalike domain. Official Singapore government sites and emails always use the .gov.sg domain.' },
      { id: 'moh_urgency', type: 'text', text: 'URGENT HEALTH ADVISORY: A new respiratory pathogen cluster has been detected in your residential area (postal code area). All residents must complete mandatory health screening registration within 48 hours to avoid quarantine order.', isThreat: true, threatDesc: '🔴 FEAR TACTIC + FALSE URGENCY. Legitimate MOH health advisories are published on moh.gov.sg and communicated through official channels — not targeted emails claiming your specific postal code is affected with 48-hour threats of quarantine orders.' },
      { id: 'moh_nric_req', type: 'text', text: 'To complete mandatory registration, please provide: Full Name, NRIC/FIN Number, Date of Birth, Home Address, SingPass credentials to verify identity.', isThreat: true, threatDesc: '🔴 SINGPASS CREDENTIAL HARVESTING. MOH never requests SingPass credentials via email. If legitimate SingPass verification is needed, the official SingPass app and singpass.gov.sg are the only authorised channels — never email-embedded forms.' },
      { id: 'moh_payment', type: 'text', text: 'Screening fee: S$28 (subsidised from S$150). Pay via PayNow UEN: 202XXXXXX5H to complete your registration.', isThreat: true, threatDesc: '🔴 FAKE GOVERNMENT FEE. Government-mandated health screening does not require upfront payment via PayNow to an unknown UEN. Any government payment goes through official government e-payment portals — verify the UEN via ACRA before any government-related payment.' },
      { id: 'moh_safe_logo', type: 'text', text: '[MOH Singapore Logo | Ministry of Health | 16 College Road, College of Medicine Building]', isThreat: false, threatDesc: '⚠️ Anyone can copy the MOH logo and real address. These elements add false legitimacy but do not authenticate the email. Always verify via the official domain @moh.gov.sg.' },
      { id: 'moh_threat', type: 'text', text: 'Failure to complete registration within 48 hours may result in a Quarantine Order under the Infectious Diseases Act. Non-compliance carries a fine of up to S$10,000.', isThreat: true, threatDesc: '🔴 LEGAL THREAT TACTIC. Invoking the Infectious Diseases Act with specific fine amounts creates fear and urgency. Real legal enforcement under this Act involves official letters from MOH — not emails demanding PayNow payments.' }
    ],
    threats: ['moh_domain', 'moh_urgency', 'moh_nric_req', 'moh_payment', 'moh_threat']
  },

  {
    id: 'adults_new_dt_2',
    type: 'decision-tree',
    title: 'The Ransomware Hit',
    subtitle: 'Incident Response Under Pressure',
    icon: '☠️',
    difficulty: 'Expert',
    xp: 1200,
    tags: ['business', 'tech'],
    module: 'malware',
    briefing: 'CRITICAL INCIDENT: It is 8:47 AM Monday. You are the IT manager. Twelve staff report they cannot access their files — all show a ransom note. A ransomware attack is in progress. Your decisions in the next 10 minutes determine whether your company recovers or pays.',
    maxScore: 500,
    nodes: {
      start: {
        text: 'Staff report encrypted files across the office. All Windows machines show: "Your files have been encrypted. Pay 2 BTC within 72 hours to recover them." Your file server is also affected. What is your immediate first action? ☠️',
        emoji: '☠️',
        choices: [
          { text: 'Call the MSP (IT provider) and wait for instructions', points: 0, next: 'waited_msp', feedback: '⚠️ Waiting wastes critical containment time. The ransomware is still spreading.' },
          { text: 'Isolate all infected machines immediately — disconnect from network', points: 100, next: 'isolated', feedback: '✅ Containment first. Every second of network connectivity = more lateral spread.' },
          { text: 'Pay the ransom quickly to restore operations before the working day is lost', points: 0, next: 'paid_ransom', feedback: '⚠️ Payment does not guarantee decryption and signals you will pay — inviting repeat attacks.' }
        ]
      },
      waited_msp: {
        text: 'Twenty minutes pass waiting for the MSP. In that time, ransomware spreads to the accounting server and three additional machines. The blast radius doubled. 😔',
        emoji: '😔',
        choices: [
          { text: 'Now isolate all infected machines from the network', points: 50, next: 'isolated_late', feedback: '✅ Better late than never — isolation stops further spread.' }
        ]
      },
      paid_ransom: {
        text: 'You pay 2 BTC (approximately S$130,000). The attacker provides a partial decryption key that recovers 60% of files. The remaining 40% — including payroll data — remain encrypted. The attacker demands more. 😔',
        emoji: '😔',
        isEnding: true,
        endingType: 'bad',
        endingTitle: 'Ransom Paid — Partial Recovery 💸',
        endingText: 'Singapore\'s CSA advises against ransom payment — it does not guarantee full recovery and funds further attacks. Prevention: (1) Immutable offsite backups (2) Endpoint detection and response (3) Network segmentation (4) Regular patch management. Report all ransomware incidents to CSA at go.gov.sg/csa.',
        points: 0
      },
      isolated: {
        text: 'Machines are isolated. The spread is contained. Now you need to assess the extent. Your last backup was taken yesterday evening. What is your recovery approach? 🔍',
        emoji: '🔍',
        choices: [
          { text: 'Wipe and restore from yesterday\'s backup', points: 100, next: 'restore_backup', feedback: '✅ Clean restore from verified backup is the gold standard ransomware recovery.' },
          { text: 'Try to decrypt the files using online decryption tools', points: 50, next: 'decrypt_attempt', feedback: '⚠️ Decryption tools only exist for specific known ransomware strains — success is not guaranteed.' }
        ]
      },
      isolated_late: {
        text: 'With the expanded blast radius, you isolate all infected machines. The accounting server is also encrypted. Last backup was yesterday evening. What is your recovery plan? 🔍',
        emoji: '🔍',
        choices: [
          { text: 'Wipe all infected machines and restore from yesterday\'s backup', points: 100, next: 'restore_backup', feedback: '✅ Backup restoration is the correct recovery path regardless of how long containment took.' },
          { text: 'Pay the ransom to restore the accounting server urgently', points: 0, next: 'paid_ransom', feedback: '⚠️ Payment remains inadvisable — the accounting data is also in your backup.' }
        ]
      },
      restore_backup: {
        text: 'You begin restore. The process will take 4 hours. While recovering, what is your mandatory post-incident obligation? 📋',
        emoji: '📋',
        choices: [
          { text: 'Report to CSA and assess PDPA notification obligations, then conduct root cause analysis', points: 100, next: 'hero_ending', feedback: '✅ Regulatory reporting, PDPA assessment, and root cause analysis are all mandatory post-incident steps.' },
          { text: 'Keep the incident internal — reporting creates reputational damage', points: 0, next: 'no_report', feedback: '⚠️ PDPA requires notification to PDPC if personal data is affected. Concealing incidents creates additional regulatory liability.' }
        ]
      },
      decrypt_attempt: {
        text: 'No free decryption tool matches this ransomware variant. The files remain encrypted. Your best remaining option is the backup. 🤔',
        emoji: '🤔',
        isEnding: true,
        endingType: 'ok',
        endingTitle: 'Recovered via Backup After Delay 🛡️',
        endingText: 'Decryption tools only exist for known variants. Backup restoration was always the right path. Time lost on decryption attempts meant a longer disruption window. Document: always attempt backup restoration before any other recovery method.',
        points: 50
      },
      no_report: {
        text: 'Three months later, an affected customer discovers their personal data was leaked by the attacker. They file a PDPC complaint. Your company faces a S$1M fine for failure to report under PDPA. 😔',
        emoji: '😔',
        isEnding: true,
        endingType: 'bad',
        endingTitle: 'Regulatory Penalty 💸',
        endingText: 'Singapore\'s PDPA requires organisations to notify PDPC within 3 business days of discovering a breach involving 500+ individuals or significant harm. Concealment creates compounded liability. Report all incidents to CSA and assess PDPA obligations immediately.',
        points: 0
      },
      hero_ending: {
        text: '🏆 Systems restored from backup in 4 hours. PDPC notified within the 3-day window. Root cause analysis revealed an unpatched VPN vulnerability as the entry point — patched immediately. CSA assisted with forensics. Full operations resumed by end of day.',
        emoji: '🏆',
        isEnding: true,
        endingType: 'great',
        endingTitle: 'Incident Handled: Textbook Response 🛡️',
        endingText: 'Model ransomware response: isolate → contain → restore from backup → report to CSA and PDPC → root cause analysis → patch. The investment in daily backups saved approximately S$130,000 in ransom. Implement: immutable backups, EDR, network segmentation, and a tested incident response plan.',
        points: 100
      }
    }
  },

  {
    id: 'adults_new_quiz_3',
    type: 'quiz',
    title: 'Healthcare Data & Privacy',
    subtitle: 'MOH, Medical Records & Scams',
    icon: '🏥',
    difficulty: 'Intermediate',
    xp: 600,
    tags: ['health', 'privacy'],
    module: 'health-security',
    briefing: 'Singapore\'s healthcare data is high-value — SingHealth\'s 2018 breach exposed 1.5 million patient records. Healthcare scams and data privacy issues affect every working adult. Seven scenarios test your healthcare security awareness.',
    questions: [
      {
        id: 'anq3_q1',
        story: 'You receive a call: "I am Dr Tan from Raffles Hospital. We need to confirm your medical history before your appointment next week. Can you verify your NRIC and last three medications over the phone?"',
        scenario: 'An unsolicited call from "hospital staff" asks for your NRIC and medication history.',
        correct: 'b',
        feedback: {
          correct: 'Hospitals do not call patients proactively to collect medical history over unverified phone lines. Call the hospital\'s official number directly to verify whether any call was legitimate before sharing any medical information.',
          wrong: 'Medical identity fraud uses real medical details to claim insurance or obtain prescriptions. Hospitals verify patients through appointment systems — they do not cold-call for medical history. Call the hospital directly on their official number.'
        },
        options: [
          { id: 'a', text: 'Provide the information — hospitals need this before appointments' },
          { id: 'b', text: 'Hang up and call Raffles Hospital\'s official number to verify the call' },
          { id: 'c', text: 'Provide NRIC only, not medications' }
        ],
        points: 100
      },
      {
        id: 'anq3_q2',
        story: 'A health supplement advertisement says: "Our product cured 47 Singapore patients of Type 2 Diabetes! Endorsed by MOH Singapore. Buy now before MOH restricts it — limited stock!" The ad appears on Facebook with many shares.',
        scenario: 'A Facebook ad claims a supplement has MOH endorsement and medical cure claims.',
        correct: 'c',
        feedback: {
          correct: 'MOH does not endorse commercial products. Any product claiming MOH endorsement is likely fraudulent. Report to HSA at hsa.gov.sg/medicinalerts. Medical cure claims for supplements are illegal in Singapore under the Medicines Act.',
          wrong: 'MOH does not endorse commercial health products. "MOH-endorsed" supplement claims are illegal under Singapore\'s Medicines Act. Report such products to HSA at hsa.gov.sg/medicinalerts.'
        },
        options: [
          { id: 'a', text: 'Buy it — MOH endorsement makes it legitimate' },
          { id: 'b', text: 'Share the ad with family members who have diabetes' },
          { id: 'c', text: 'Report to HSA — MOH does not endorse commercial products and medical cure claims are illegal' }
        ],
        points: 100
      },
      {
        id: 'anq3_q3',
        story: 'Your employer\'s health insurance portal asks you to upload a photo of your medical certificate and complete a health questionnaire that includes questions about mental health history, genetic conditions, and family medical history.',
        scenario: 'A corporate health portal requests sensitive medical and family health history.',
        correct: 'b',
        feedback: {
          correct: 'Employers are permitted to collect health data necessary for insurance claims. However, genetic and family medical history data collection requires explicit consent and has strict PDPA protections. Review the data privacy policy and consent terms before submitting sensitive genetic/family data.',
          wrong: 'PDPA protects sensitive personal data including medical records. Review what specific health data is required for insurance purposes versus optional. Genetic and mental health data have heightened protections — check what consent you are giving before submitting.'
        },
        options: [
          { id: 'a', text: 'Fill in everything — it is company HR and required for insurance' },
          { id: 'b', text: 'Submit only data required for the insurance claim; review consent terms before submitting genetic and family history data' },
          { id: 'c', text: 'Refuse entirely — employers should not have any health data' }
        ],
        points: 100
      },
      {
        id: 'anq3_q4',
        story: 'You used a third-party health app that syncs with your Apple Health data. The app\'s privacy policy says it may share "anonymised health data with research partners and affiliated companies".',
        scenario: 'A health app requests to share your anonymised health data with third parties.',
        correct: 'b',
        feedback: {
          correct: '"Anonymised" health data can often be re-identified when combined with other data sources. Research into data brokers shows health data is frequently sold commercially. Review what data is shared and opt out of data sharing if you are uncomfortable.',
          wrong: '"Anonymised" health data is not fully anonymous — step count, sleep patterns, and heart rate combined with other data points can re-identify individuals. Review and restrict data sharing permissions in health app settings.'
        },
        options: [
          { id: 'a', text: 'Accept — if it is anonymised there is no privacy risk' },
          { id: 'b', text: 'Review the specific data shared and opt out of third-party sharing if possible' },
          { id: 'c', text: 'Delete the app entirely — any data sharing is unacceptable' }
        ],
        points: 100
      },
      {
        id: 'anq3_q5',
        story: 'Your doctor\'s clinic uses WhatsApp to send appointment reminders and to receive photos of rashes for teleconsult. You share a photo of a skin condition via WhatsApp.',
        scenario: 'Using WhatsApp to share medical condition photos for teleconsultation.',
        correct: 'b',
        feedback: {
          correct: 'WhatsApp messages and media are backed up to iCloud/Google Drive by default. Photos shared via personal messaging apps are not PDPA-compliant for medical data. Clinics should use encrypted healthcare platforms for medical image sharing.',
          wrong: 'WhatsApp media is stored on both parties\' phones, backed up to cloud services, and is not HIPAA or PDPA-compliant for sensitive medical data. Request the clinic use a secure teleconsult platform like HealthHub, or email directly without cloud backup.'
        },
        options: [
          { id: 'a', text: 'It is fine — WhatsApp is end-to-end encrypted so it is secure' },
          { id: 'b', text: 'Be aware that WhatsApp photos are backed up to cloud — disable backups or use a secure healthcare platform' },
          { id: 'c', text: 'Refuse and insist on an in-person appointment only' }
        ],
        points: 100
      },
      {
        id: 'anq3_q6',
        story: 'You receive a call from someone claiming to be from your health insurance company, saying you have an unclaimed medical reimbursement of S$1,200 from last year. They need your bank account number to process it.',
        scenario: 'An insurance company calls about an unclaimed reimbursement requiring your bank account number.',
        correct: 'c',
        feedback: {
          correct: 'Insurance companies process reimbursements through their official online portals or via cheque — not by calling to collect bank details over the phone. Hang up and log into your insurer\'s official portal to check for any outstanding reimbursements.',
          wrong: 'Legitimate insurance reimbursements are processed through your existing account details on file or via official portal submission — insurers do not call to collect bank account numbers. Verify through the insurer\'s official portal.'
        },
        options: [
          { id: 'a', text: 'Provide the bank account number — S$1,200 is worth it' },
          { id: 'b', text: 'Ask the caller for their employee ID to verify' },
          { id: 'c', text: 'Hang up and log into the insurer\'s official portal to check for any outstanding reimbursements' }
        ],
        points: 100
      },
      {
        id: 'anq3_q7',
        story: 'The SingHealth data breach in 2018 exposed 1.5 million patients\' NRIC numbers, names, addresses, and dates of birth. You were affected. Five years later, you receive a letter offering a "legal compensation claim" for S$3,000 with an upfront processing fee of S$150.',
        scenario: 'Five years after a data breach, a letter offers compensation with an upfront processing fee.',
        correct: 'b',
        feedback: {
          correct: 'Post-breach compensation scams target known breach victims — who are identifiable from the same leaked data. Legitimate class action compensation never requires upfront fees. This is a secondary scam exploiting breach victims.',
          wrong: 'Compensation claim letters requiring upfront fees are a secondary scam targeting breach victims using their own leaked data. Legitimate compensation claims (if any) would be announced through official channels, not letters requiring payment.'
        },
        options: [
          { id: 'a', text: 'Pay the S$150 — I was affected and deserve compensation' },
          { id: 'b', text: 'Discard the letter — legitimate compensation claims never require upfront fees from victims' },
          { id: 'c', text: 'Pay the fee but only via PayNow to control the transaction' }
        ],
        points: 100
      }
    ],
  },


  ],

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



// ─── V1.1: Additional Linux/Coding Scenarios for Teens & Adults ───────────────

// Add to teens array

  {
    id: 'seniors_new_quiz_1',
    type: 'quiz',
    title: 'CPF & Retirement Scam Shield',
    subtitle: 'Protect Your Life Savings',
    icon: '🏦',
    difficulty: 'Beginner',
    xp: 400,
    tags: ['finance', 'general'],
    module: 'finance-security',
    briefing: 'Your CPF savings are your retirement security — and scammers know it. These 5 scenarios are based on REAL scams targeting Singapore seniors\' CPF savings. Take your time, read carefully, and trust your instincts. 💪',
    questions: [
      {
        id: 'snq1_q1',
        story: 'You receive a phone call from a man who says he is from the CPF Board. He says: "We detected unusual activity in your CPF account. To protect your balance, you must immediately transfer your CPF savings to a temporary \'government protection account\'. Do not tell anyone — this is a classified security matter."',
        scenario: 'A caller claiming to be from CPF asks you to transfer your savings to a protection account and keep it secret.',
        correct: 'b',
        feedback: {
          correct: 'The CPF Board will NEVER call you to transfer CPF funds to any account. CPF money stays in CPF — it cannot be moved to a "protection account" by phone instruction. This is a government impersonation scam.',
          wrong: 'The CPF Board never calls asking you to transfer funds. "Protect your money by moving it" is the most common government impersonation scam line in Singapore. Hang up and call CPF at 1800-227-1188 to verify.'
        },
        options: [
          { id: 'a', text: 'Transfer the CPF funds immediately to protect them' },
          { id: 'b', text: 'Hang up and call CPF Board directly at 1800-227-1188 to verify' },
          { id: 'c', text: 'Ask the caller for their employee number before deciding' }
        ],
        points: 100
      },
      {
        id: 'snq1_q2',
        story: 'A financial advisor you met at a community centre seminar offers to help you invest your CPF savings in a "special high-yield bond" that earns 15% annually — much better than the CPF interest rate. He is well-dressed, polite, and shows you printed testimonials.',
        scenario: 'A person at a seminar offers to invest your CPF savings in a high-yield product.',
        correct: 'c',
        feedback: {
          correct: 'CPF savings can only be invested through approved CPF Investment Scheme (CPFIS) providers — not random individuals at seminars. 15% guaranteed annual returns is not realistic. Always verify investment professionals at MAS Financial Advisers Register.',
          wrong: 'CPF savings can only be invested through official CPFIS-approved channels. Check if a financial advisor is licensed at MAS\'s Financial Advisers Register. 15% annual guaranteed returns do not exist in legitimate markets.'
        },
        options: [
          { id: 'a', text: 'Invest — he seems trustworthy and 15% is much better than CPF rates' },
          { id: 'b', text: 'Invest a small amount first to test' },
          { id: 'c', text: 'Verify his MAS licence at mas.gov.sg/financial-advisers before considering anything' }
        ],
        points: 100
      },
      {
        id: 'snq1_q3',
        story: 'You receive an SMS: "Your CPF Annual Statement is ready. View it now: cpf-board-sg-statement.com/login — Log in with your SingPass to access." You are expecting your annual statement.',
        scenario: 'An SMS links to an external site for your CPF annual statement.',
        correct: 'b',
        feedback: {
          correct: 'CPF annual statements are accessible only through the official CPF website (cpf.gov.sg) or the CPF mobile app. Any SMS link directing you elsewhere for CPF access is phishing.',
          wrong: 'The real CPF website is cpf.gov.sg. Any SMS linking to any other website for CPF access is a phishing site. Always access your CPF statement directly via cpf.gov.sg or the official CPF app.'
        },
        options: [
          { id: 'a', text: 'Click the link — I am expecting the statement' },
          { id: 'b', text: 'Access the CPF website directly at cpf.gov.sg or use the official CPF app instead' },
          { id: 'c', text: 'Click the link but do not enter SingPass details' }
        ],
        points: 100
      },
      {
        id: 'snq1_q4',
        story: 'Your neighbour tells you about an investment club he joined. Members pool CPF money together for "guaranteed returns". He has received two monthly payouts already and wants you to join.',
        scenario: 'A neighbour invites you to join a CPF investment club with guaranteed returns.',
        correct: 'c',
        feedback: {
          correct: 'Pooling CPF funds with private groups is illegal. Early investors receiving payouts is the Ponzi structure — they are paid from newer investors\' money until the scheme collapses. Report to SPF or MAS if you suspect this.',
          wrong: 'Unauthorised collective investment schemes using CPF funds are illegal Ponzi schemes. Early payout recipients are being paid with newer investors\' money. The scheme will collapse. Report to MAS at 1800-110-0969.'
        },
        options: [
          { id: 'a', text: 'Join — if my neighbour got payouts it must be working' },
          { id: 'b', text: 'Join with a small amount first to test' },
          { id: 'c', text: 'Decline — CPF pooling with private groups is illegal and follows a Ponzi structure' }
        ],
        points: 100
      },
      {
        id: 'snq1_q5',
        story: 'You receive an email saying you can now withdraw all your CPF savings early by paying a S$500 "administrative fee" to unlock the early withdrawal option. The email has the CPF Board logo.',
        scenario: 'An email claims you can withdraw CPF early by paying an upfront fee.',
        correct: 'b',
        feedback: {
          correct: 'There is no "fee to unlock" CPF early withdrawal. CPF withdrawal eligibility is governed by law and does not require any fee payment. This advance fee fraud uses the CPF logo to appear legitimate.',
          wrong: 'CPF withdrawal eligibility is determined by age and scheme rules — no fee unlocks early withdrawal. Any "administrative fee" to access your own CPF is fraud. Report to CPF Board at 1800-227-1188.'
        },
        options: [
          { id: 'a', text: 'Pay the S$500 fee — getting CPF early is worth it' },
          { id: 'b', text: 'Ignore the email — CPF withdrawal requires no upfront fees' },
          { id: 'c', text: 'Pay and then request a refund if it does not work' }
        ],
        points: 100
      }
    ]
  },

  {
    id: 'seniors_new_spot_1',
    type: 'spot-threat',
    title: 'Scam WhatsApp Message',
    subtitle: 'Find Every Danger in This Message',
    icon: '📱',
    difficulty: 'Beginner',
    xp: 400,
    tags: ['social', 'finance'],
    module: 'scams',
    briefing: 'A suspicious WhatsApp message has been shared with your community centre for analysis. Your task: tap on EVERY part of the message that is dangerous or suspicious. There is no rush — read every sentence carefully. 🔍',
    totalPoints: 500,
    items: [
      { id: 'whatsapp_impersonation', type: 'text', text: 'From: "OCBC Bank Singapore" (WhatsApp, profile shows OCBC logo)', isThreat: true, threatDesc: '🔴 BANK IMPERSONATION. OCBC Bank does not contact customers via WhatsApp with account alerts. Real OCBC alerts come via the official OCBC OneToken app, registered SMS sender ID "OCBC", or email to your registered address. Anyone can set a WhatsApp name and photo to look like OCBC.' },
      { id: 'whatsapp_alarm', type: 'text', text: 'IMPORTANT NOTICE: Your OCBC account has been compromised. Unauthorised transactions of SGD 4,200 have been detected. Your account is at risk of being frozen within the next 3 hours.', isThreat: true, threatDesc: '🔴 FEAR AND URGENCY TACTIC. Creating panic about your money being taken away is the most effective way to make you act without thinking. Real bank fraud alerts are processed automatically — your bank does not give you a 3-hour window via WhatsApp.' },
      { id: 'whatsapp_link', type: 'text', text: 'Please verify your account immediately at: www.ocbc-secure-login-sg.com', isThreat: true, threatDesc: '🔴 FAKE WEBSITE. The real OCBC online banking website is internet.ocbc.com or the OCBC Digital app. "ocbc-secure-login-sg.com" is a fake website designed to steal your username, password, and OTP. The real OCBC domain is always ocbc.com.' },
      { id: 'whatsapp_otp', type: 'text', text: 'You will receive an OTP code via SMS. Please enter it on the verification page when prompted.', isThreat: true, threatDesc: '🔴 OTP PHISHING. Your OTP code is what protects your account from unauthorised access. Entering it on any website other than the real OCBC portal gives the attacker your OTP, which they use immediately to log into your real account and take your money.' },
      { id: 'whatsapp_safe', type: 'text', text: 'Thank you for banking with OCBC. We appreciate your trust.', isThreat: false, threatDesc: '⚠️ A friendly sign-off is used to make the message feel official. This does not change the fact that everything above is a scam.' }
    ],
    threats: ['whatsapp_impersonation', 'whatsapp_alarm', 'whatsapp_link', 'whatsapp_otp']
  },

  {
    id: 'seniors_new_dt_1',
    type: 'decision-tree',
    title: 'The Investment Opportunity',
    subtitle: 'Protecting Your Retirement Savings',
    icon: '📊',
    difficulty: 'Intermediate',
    xp: 600,
    tags: ['finance', 'general'],
    module: 'finance-security',
    briefing: 'IMPORTANT: Take your time with each step. A scammer is about to contact you with what sounds like a great investment opportunity. Many Singapore seniors have lost their life savings this way. Your decisions here could save your retirement. Remember: If it sounds too good to be true, it usually is.',
    maxScore: 400,
    nodes: {
      start: {
        text: 'A well-spoken man named "Richard Lim" calls you. He says he is a private wealth manager and your name was referred by a mutual contact. He mentions a "low-risk, government-linked bond" offering 12% annual returns — far above bank interest rates. He asks if you are interested in hearing more. 📊',
        emoji: '📊',
        choices: [
          { text: 'Yes, I am interested — please tell me more', points: 0, next: 'engaged_scammer', feedback: '⚠️ Engaging gives the scammer time to build trust and pressure you. Let\'s see what happens...' },
          { text: 'Ask for his MAS licence number and company registered name before discussing anything', points: 100, next: 'asked_credentials', feedback: '✅ Excellent first step! All licensed financial advisors must provide their MAS credentials.' },
          { text: 'Tell him you are not interested and hang up', points: 50, next: 'hung_up', feedback: '✅ Safe choice! Unsolicited investment calls should be treated with caution.' }
        ]
      },
      engaged_scammer: {
        text: '"Richard" is charming and very knowledgeable. Over three calls in a week, he shares printed materials by post, invites you to an "exclusive investor briefing" at Raffles Place, and mentions several other investors your age who are very happy. He now asks for an initial investment of S$20,000.',
        emoji: '🤝',
        choices: [
          { text: 'Invest S$20,000 — I have met him in person and it seems credible', points: 0, next: 'invested', feedback: '⚠️ In-person meetings and professional materials do not guarantee legitimacy. Scammers invest in elaborate setups.' },
          { text: 'Ask for his MAS licence number and check it independently before investing anything', points: 100, next: 'asked_credentials', feedback: '✅ Even at this stage, checking the MAS register is the right move before any investment.' },
          { text: 'Invest a smaller amount of S$2,000 to test first', points: 0, next: 'small_invested', feedback: '⚠️ Even a small amount is gone. Testing with real money is not a safe strategy.' }
        ]
      },
      asked_credentials: {
        text: '"Richard" gives you a licence number: FA100XXXXX. You check the MAS Financial Advisers Register at mas.gov.sg. The number does not exist. The company name he gave — "SG Wealth Private Limited" — is not registered either. 🔍',
        emoji: '🔍',
        choices: [
          { text: 'Confront "Richard" directly and demand an explanation', points: 50, next: 'confronted', feedback: '⚠️ Confronting may give him time to create a cover story. Reporting is more effective.' },
          { text: 'End all contact, report to SPF and MAS immediately', points: 100, next: 'hero_ending', feedback: '✅ Perfect. Confirmed fraud should be reported to both SPF and MAS without further engagement.' }
        ]
      },
      hung_up: {
        text: '"Richard" calls back three more times with increasingly attractive offers. On the fourth call, he says a friend of yours specifically vouched for you. You are curious now. 🤔',
        emoji: '🤔',
        choices: [
          { text: 'Listen to the offer — if my friend trusts him it might be real', points: 0, next: 'engaged_scammer', feedback: '⚠️ Scammers research their targets. They may have found a mutual connection name through social media.' },
          { text: 'Ask for his MAS licence number before any further conversation', points: 100, next: 'asked_credentials', feedback: '✅ Persistent callers offering investment opportunities should always be verified with MAS credentials.' }
        ]
      },
      invested: {
        text: 'You invested S$20,000. For two months, you receive monthly "statement" emails showing 12% growth. Then "Richard" calls: there is a special opportunity to double returns — invest S$50,000 more before the window closes. 😨',
        emoji: '😨',
        isEnding: true,
        endingType: 'bad',
        endingTitle: 'Investment Scam in Progress 💸',
        endingText: 'The monthly statements are fake. The initial "returns" are paid from your own money to build confidence. This is a Ponzi scheme. Stop all investment immediately and report to SPF at 999 and MAS at 1800-110-0969. If you have invested, contact your bank to document all transactions. Act quickly — time matters.',
        points: 0
      },
      small_invested: {
        text: 'You received a "return" of S$240 after one month (confirming your confidence). Now "Richard" suggests a much larger investment for much higher returns. The small return was funded by your own S$2,000. 😔',
        emoji: '😔',
        isEnding: true,
        endingType: 'bad',
        endingTitle: 'Ponzi Bait Taken 💸',
        endingText: 'Initial small returns are the Ponzi scheme\'s most effective tool — they are funded by your own investment to build confidence. Stop immediately, report to SPF and MAS at 1800-110-0969. Do not invest more regardless of promised returns.',
        points: 0
      },
      confronted: {
        text: '"Richard" becomes aggressive: "You are going to miss the best opportunity of your life. All the other investors are doing great." He pressures you to invest before the opportunity expires. 🚨',
        emoji: '🚨',
        choices: [
          { text: 'End contact permanently and report to SPF and MAS', points: 100, next: 'hero_ending', feedback: '✅ Aggressive pressure when questioned is the final red flag. Report and end all contact.' },
          { text: 'Give him one more chance to provide real credentials', points: 0, next: 'invested', feedback: '⚠️ He cannot provide real credentials because they do not exist. Further engagement leads to financial loss.' }
        ]
      },
      hero_ending: {
        text: '🏆 You checked MAS credentials, confirmed the fraud, and reported to both SPF and MAS. SPF identified "Richard" as part of an investment scam ring that had defrauded 14 Singapore seniors of S$2.3 million combined. Your report helped stop them.',
        emoji: '🏆',
        isEnding: true,
        endingType: 'great',
        endingTitle: 'Scam Busted! 🇸🇬',
        endingText: 'Perfect response: verify MAS licence → confirmed not registered → reported to SPF and MAS. Always check investment credentials at mas.gov.sg before investing. No legitimate licensed advisor will ever pressure you or be unable to provide a verifiable MAS licence number.',
        points: 100
      }
    }
  },

  {
    id: 'seniors_new_quiz_2',
    type: 'quiz',
    title: 'SingPass & Digital Safety',
    subtitle: 'Protecting Your Government Account',
    icon: '🇸🇬',
    difficulty: 'Intermediate',
    xp: 600,
    tags: ['general', 'tech'],
    module: 'identity',
    briefing: 'SingPass is the key to all your Singapore government services — CPF, income tax, healthcare, and more. Keeping it safe is one of the most important things you can do. Seven questions to sharpen your SingPass and digital safety skills. 💪',
    questions: [
      {
        id: 'snq2_q1',
        story: 'Your SingPass password is "NationalDay1965!" — easy to remember because it refers to Singapore\'s independence year. You have used this password for 8 years.',
        scenario: 'A SingPass password based on Singapore\'s independence year used for 8 years.',
        correct: 'b',
        feedback: {
          correct: 'Predictable patterns (national dates, years) are tested early in any password attack. 8 years without changing also means it may have been exposed in old data breaches. Change to something random and enable 2FA on SingPass.',
          wrong: 'Historically significant dates are tested in password attacks. Change to something random and enable SingPass Face Verification and 2FA for an additional security layer.'
        },
        options: [
          { id: 'a', text: 'Keep it — it is strong because it has a capital letter and a number' },
          { id: 'b', text: 'Change it to something random and enable SingPass 2FA immediately' },
          { id: 'c', text: 'Add more symbols: "NationalDay1965!@#"' }
        ],
        points: 100
      },
      {
        id: 'snq2_q2',
        story: 'Your adult son asks to borrow your SingPass login to complete some government forms on your behalf because he says it will save you the trouble.',
        scenario: 'Your son asks to use your SingPass credentials to complete government forms for you.',
        correct: 'b',
        feedback: {
          correct: 'SingPass is an individual account — sharing credentials is prohibited and you remain legally responsible for all actions taken with it. Use Myinfo\'s delegated access or have your son guide you through it yourself.',
          wrong: 'SingPass credentials are non-transferable. All actions taken with your SingPass are legally attributed to you. SingPass has a Myinfo family delegation feature for authorised access — use that instead.'
        },
        options: [
          { id: 'a', text: 'Share the credentials — my son is trustworthy and it saves me the trouble' },
          { id: 'b', text: 'Do not share — SingPass is individual and legally your responsibility; use Myinfo delegation instead' },
          { id: 'c', text: 'Share just the password, not the 2FA code' }
        ],
        points: 100
      },
      {
        id: 'snq2_q3',
        story: 'You receive a SingPass login verification notification on your phone — but you are NOT trying to log in. The notification says a login was attempted from an unfamiliar device.',
        scenario: 'You receive an unexpected SingPass login verification notification.',
        correct: 'c',
        feedback: {
          correct: 'An unexpected login notification means someone is attempting to access your SingPass with your credentials. Deny immediately and change your password at singpass.gov.sg — someone has your SingPass password.',
          wrong: 'An unexpected SingPass verification request means someone is attempting to log in with your password. Deny immediately, change your password, and call SingPass helpline at 6335-3533.'
        },
        options: [
          { id: 'a', text: 'Approve the notification — it must be a system glitch' },
          { id: 'b', text: 'Ignore it and do nothing' },
          { id: 'c', text: 'Deny it, immediately change your SingPass password, and call 6335-3533' }
        ],
        points: 100
      },
      {
        id: 'snq2_q4',
        story: 'A "government staff member" visits your home saying they need to help you update your SingPass account. They have a lanyard with what looks like a government ID and ask to use your phone.',
        scenario: 'Someone at your door claims to be from the government and wants to use your phone to update SingPass.',
        correct: 'b',
        feedback: {
          correct: 'Government agencies do not send staff door-to-door to update SingPass on your devices. Any such visit is social engineering. Call SPF at 999 if you feel unsafe. No government agency will ever ask to handle your phone or device.',
          wrong: 'The Singapore government does not send staff to homes to update SingPass accounts. This is a social engineering attack. Never hand your phone to a stranger. Call SPF if you feel threatened.'
        },
        options: [
          { id: 'a', text: 'Let them help — they have a government ID so it must be official' },
          { id: 'b', text: 'Do not let them in or handle your phone. Call SPF at 999 if concerned.' },
          { id: 'c', text: 'Let them in but stand next to them while they use the phone' }
        ],
        points: 100
      },
      {
        id: 'snq2_q5',
        story: 'You want to do your income tax submission on your computer at a Starbucks using their free WiFi. Your SingPass has Face Verification enabled.',
        scenario: 'Accessing SingPass for income tax filing on public WiFi with Face Verification enabled.',
        correct: 'b',
        feedback: {
          correct: 'Tax submissions contain sensitive financial data. Public WiFi is not a safe environment for SingPass activities. Use your mobile data or wait until you have a private WiFi connection at home.',
          wrong: 'Public WiFi is not safe for SingPass or any government services access. Your tax data and government account details should only be accessed on trusted private networks. Use mobile data instead.'
        },
        options: [
          { id: 'a', text: 'Proceed — Face Verification makes it secure even on public WiFi' },
          { id: 'b', text: 'Wait until home — SingPass should not be used on public WiFi' },
          { id: 'c', text: 'Use a VPN first then proceed on public WiFi' }
        ],
        points: 100
      },
      {
        id: 'snq2_q6',
        story: 'You receive a message saying your SingPass account will be deactivated unless you log in to verify it. The link provided takes you to "singpass-gov-sg.net".',
        scenario: 'A link claims SingPass deactivation and points to "singpass-gov-sg.net".',
        correct: 'c',
        feedback: {
          correct: 'The official SingPass website is singpass.gov.sg — a .gov.sg domain. "singpass-gov-sg.net" is a fake domain. SingPass accounts are not deactivated via messages with links. Access SingPass only at singpass.gov.sg.',
          wrong: 'Only singpass.gov.sg is the real SingPass website. Anything else ending in .net, .com, .org is fake. Access SingPass only by typing singpass.gov.sg directly in your browser.'
        },
        options: [
          { id: 'a', text: 'Click the link — I do not want my SingPass deactivated' },
          { id: 'b', text: 'Reply asking for more information' },
          { id: 'c', text: 'Ignore the link. The real SingPass is only at singpass.gov.sg — type it directly.' }
        ],
        points: 100
      },
      {
        id: 'snq2_q7',
        story: 'Your friend tells you she uses the same PIN for her SingPass, ATM card, phone unlock, and phone banking — "1234" — because it is easier to remember.',
        scenario: 'A friend uses the same simple PIN "1234" for all her accounts.',
        correct: 'b',
        feedback: {
          correct: 'Using "1234" as a PIN is extremely dangerous — it is the first PIN tried in any attack. Using the same PIN across all accounts means one compromise exposes everything. Help your friend set up strong, different PINs for each account.',
          wrong: '"1234" is the most commonly used PIN globally and the first one attackers try. One stolen PIN compromises everything. Help your friend use a different strong PIN for each account — or a password manager to remember them.'
        },
        options: [
          { id: 'a', text: 'It is understandable — remembering many PINs is difficult' },
          { id: 'b', text: 'Help her understand why this is dangerous and set up different strong PINs for each account' },
          { id: 'c', text: 'Suggest she changes it to "9999" which is stronger' }
        ],
        points: 100
      }
    ]
  },

  {
    id: 'seniors_new_spot_2',
    type: 'spot-threat',
    title: 'Fake Job SMS for Your Child',
    subtitle: 'Part-Time Job Scam Alert',
    icon: '💼',
    difficulty: 'Intermediate',
    xp: 600,
    tags: ['scams', 'finance'],
    module: 'scams',
    briefing: 'You received a suspicious SMS promising a well-paying part-time job for your adult child. Many seniors receive these on behalf of family members. Tap every part of the message that looks suspicious or wrong. Take your time. 🔍',
    totalPoints: 600,
    items: [
      { id: 'job_unsolicited', type: 'text', text: 'Hi! We found your contact via an online job platform. We are hiring for work-from-home part-time staff in Singapore.', isThreat: true, threatDesc: '🔴 UNSOLICITED JOB OFFER. Legitimate companies do not randomly text mobile numbers with job offers. This number was likely harvested from a data breach or bought from a data broker. Real job opportunities come through applications on legitimate platforms like MyCareersFuture.sg.' },
      { id: 'job_pay', type: 'text', text: 'Work 2-3 hours a day from home. Earn S$150-S$500 per day! No experience needed. Immediate start available.', isThreat: true, threatDesc: '🔴 UNREALISTIC PAY CLAIMS. S$500 per day for 2-3 hours of work from home with no experience = S$100-S$250 per hour. This far exceeds Singapore\'s market rates for entry-level work. Unrealistically high pay is a defining scam indicator.' },
      { id: 'job_task', type: 'text', text: 'Task: Help process online transactions and orders. Receive money transfers into your bank account and forward to our business account. Keep 10% commission per transaction.', isThreat: true, threatDesc: '🔴 MONEY MULE RECRUITMENT. Receiving money and forwarding it to others is money laundering — regardless of whether you know it. This is exactly how money mule operations work. Participants face criminal prosecution under Singapore\'s Corruption, Drug Trafficking and Other Serious Crimes Act.' },
      { id: 'job_urgency', type: 'text', text: 'Limited positions available! Reply "YES" within 24 hours to reserve your slot. Training starts immediately upon confirmation.', isThreat: true, threatDesc: '🔴 FALSE URGENCY. The artificial 24-hour deadline prevents you from researching the "company" or consulting with family. Legitimate employers allow time for background checking. Pressure to respond quickly = scam tactic.' },
      { id: 'job_whatsapp', type: 'text', text: 'For more information, add us on WhatsApp: +60-XXXXXXXXX (Note: Malaysian number)', isThreat: true, threatDesc: '🔴 OVERSEAS CONTACT NUMBER. A "Singapore job" recruiter using a Malaysian (+60) number is a major red flag. Legitimate Singapore employers use Singapore (+65) numbers. Overseas numbers make tracing and legal action much harder.' },
      { id: 'job_safe', type: 'text', text: 'Join our growing team of flexible workers across Singapore!', isThreat: false, threatDesc: '⚠️ Friendly language about a team creates false belonging and credibility. This does not change the multiple red flags above.' }
    ],
    threats: ['job_unsolicited', 'job_pay', 'job_task', 'job_urgency', 'job_whatsapp']
  },

  {
    id: 'seniors_new_dt_2',
    type: 'decision-tree',
    title: 'Helping Your Grandchild Online',
    subtitle: 'Safe Digital Skills for the Whole Family',
    icon: '👴',
    difficulty: 'Beginner',
    xp: 400,
    tags: ['general', 'education'],
    module: 'foundation',
    briefing: 'You want to help your grandchild use the internet safely. Your grandchild asks you questions about technology. Make the right choices to protect your whole family. There is no rush — take your time. 👴',
    maxScore: 300,
    nodes: {
      start: {
        text: 'Your 10-year-old grandchild shows you a pop-up on their tablet: "YOU ARE THE 1,000,000th VISITOR! You have WON an iPad! Click NOW to claim your prize!" The grandchild is excited and wants to click it. 👴',
        emoji: '👴',
        choices: [
          { text: 'Let the grandchild click — winning an iPad would be wonderful', points: 0, next: 'clicked_popuo', feedback: '⚠️ This type of pop-up has been a common trick for 20 years. Let\'s see what happens...' },
          { text: 'Explain to the grandchild that this is a common trick and show them how to close it safely', points: 100, next: 'explained_trick', feedback: '🌟 Teaching moment! You are protecting your grandchild and helping them learn.' },
          { text: 'Tell the grandchild to ignore it and not mention it to anyone', points: 50, next: 'ignored_it', feedback: '✅ Safe choice, but you missed a teaching opportunity.' }
        ]
      },
      clicked_popuo: {
        text: 'Clicking opens a website asking for your grandchild\'s full name, home address, and your credit card number to "pay S$5 shipping" for the iPad. 😨',
        emoji: '😨',
        choices: [
          { text: 'Close the website immediately and explain why it is a scam', points: 100, next: 'explained_trick', feedback: '✅ Closing immediately and explaining is the right recovery!' },
          { text: 'Fill in the details — S$5 for an iPad is a great deal', points: 0, next: 'scammed', feedback: '⚠️ No free prize ever requires your credit card or home address.' }
        ]
      },
      explained_trick: {
        text: 'You explained how these pop-ups are tricks. Your grandchild asks: "How do I know which websites are safe, Grandpa/Grandma?" This is a great teaching moment! What is the most helpful thing you can tell them? 📚',
        emoji: '📚',
        choices: [
          { text: 'Always ask a trusted adult (parent, grandparent) before clicking anything you are not sure about', points: 100, next: 'hero_ending', feedback: '🌟 Perfect! Asking a trusted adult is the best safety rule for children online.' },
          { text: 'Never use the internet alone — it is too dangerous', points: 0, next: 'overly_restricted', feedback: '⚠️ Being too restrictive may prevent them from learning to navigate safely. The goal is supervised freedom.' }
        ]
      },
      ignored_it: {
        text: 'Your grandchild goes back to their game. Later that week, they encounter a similar pop-up and click it without asking because no one explained why it was dangerous. 🤔',
        emoji: '🤔',
        isEnding: true,
        endingType: 'ok',
        endingTitle: 'Safe This Time — Teach Next Time 🛡️',
        endingText: 'You protected them from this one pop-up — well done! Next time, use moments like this to teach them: "These prize pop-ups are tricks. Always close them without clicking and tell me." Children who understand WHY something is dangerous are much safer online.',
        points: 50
      },
      scammed: {
        text: 'The website took your credit card details and charged S$49.99, not S$5. The "iPad" never arrived. Contact your bank immediately to dispute the charge. 😔',
        emoji: '😔',
        isEnding: true,
        endingType: 'bad',
        endingTitle: 'Prize Pop-Up Scam 💸',
        endingText: 'Prize pop-ups that ask for credit cards are always scams. No legitimate prize requires upfront payment. Call your bank immediately to dispute and cancel the charge. Teach your grandchild: if a website asks for credit card details for a "free" prize, it is a trick — close the browser.',
        points: 0
      },
      hero_ending: {
        text: '🏆 Your grandchild now knows to always ask a trusted adult when they see anything online that seems exciting or scary. You have given them a safety skill that will protect them for life.',
        emoji: '🏆',
        isEnding: true,
        endingType: 'great',
        endingTitle: 'Digital Safety Grandparent! 🌟',
        endingText: 'The best cybersecurity habit for children is simple: "When in doubt, ask a trusted adult." By teaching this calmly and clearly, you have given your grandchild the most important online safety tool they will ever have. You are a family cybersecurity hero!',
        points: 100
      },
      overly_restricted: {
        text: 'Your grandchild feels frustrated and starts using the internet secretly without telling you. Children who feel over-restricted tend to hide their online activity from adults. 😔',
        emoji: '😔',
        isEnding: true,
        endingType: 'ok',
        endingTitle: 'Try a Balanced Approach 🤝',
        endingText: 'Being too restrictive can backfire — children hide internet use from adults, which is less safe. The goal is to build trust so they feel comfortable asking you when something feels wrong online. "Ask me first" is more effective than "never go online alone."',
        points: 50
      }
    }
  },

  {
    id: 'seniors_new_quiz_3',
    type: 'quiz',
    title: 'ScamShield & Reporting Tools',
    subtitle: 'Your Anti-Scam Toolkit',
    icon: '🛡️',
    difficulty: 'Beginner',
    xp: 400,
    tags: ['general', 'tech'],
    module: 'foundation',
    briefing: 'Singapore has excellent free tools to protect you from scams. Knowing how to use them — and who to call — can save your savings and your peace of mind. Five questions to master your anti-scam toolkit! 💪',
    questions: [
      {
        id: 'snq3_q1',
        story: null,
        scenario: 'You received a suspicious phone call from someone claiming to be from the government asking for your bank details. What is the correct phone number to call SPF to report this scam call?',
        correct: 'b',
        feedback: {
          correct: '1800-255-0000 is the official Singapore Police Force non-emergency hotline. For emergencies, always call 999. For scam advice, you can also call ScamShield at 1800-722-6688.',
          wrong: 'The SPF non-emergency hotline is 1800-255-0000. Save it in your phone today! For ScamShield advice and reporting, call 1800-722-6688.'
        },
        options: [
          { id: 'a', text: '1900-255-0000' },
          { id: 'b', text: '1800-255-0000' },
          { id: 'c', text: '6255-0000' }
        ],
        points: 100
      },
      {
        id: 'snq3_q2',
        story: null,
        scenario: 'What does the free ScamShield app do that helps protect you from scam calls and messages?',
        correct: 'b',
        feedback: {
          correct: 'ScamShield automatically identifies and blocks known scam calls and SMS messages based on SPF\'s database. It works in the background without you needing to do anything. Download it free from the App Store or Google Play Store.',
          wrong: 'ScamShield automatically blocks known scam numbers and SMS messages using SPF\'s active scam database. It requires no action from you once installed — it protects you in the background.'
        },
        options: [
          { id: 'a', text: 'It charges scammers a fee every time they call you' },
          { id: 'b', text: 'It automatically identifies and blocks known scam calls and messages using SPF\'s database' },
          { id: 'c', text: 'It records all your phone calls for evidence' }
        ],
        points: 100
      },
      {
        id: 'snq3_q3',
        story: 'You receive a suspicious phone call. You are not sure if it is a scam. There is a free government hotline specifically for scam-related advice.',
        scenario: 'You are unsure if a call or message is a scam and want advice.',
        correct: 'c',
        feedback: {
          correct: '1800-722-6688 is the National Crime Prevention Council\'s anti-scam hotline. Call them any time you are unsure about a call or message. They are specifically trained to advise on scams and can help you decide what to do.',
          wrong: 'The Anti-Scam Hotline is 1800-722-6688 (NCPC). Call whenever you are unsure if something is a scam — they give free advice and help you report. Save this number in your phone today.'
        },
        options: [
          { id: 'a', text: 'Just ignore it — if in doubt, do nothing' },
          { id: 'b', text: 'Call MAS at 1800-110-0969' },
          { id: 'c', text: 'Call the Anti-Scam Hotline at 1800-722-6688 for advice' }
        ],
        points: 100
      },
      {
        id: 'snq3_q4',
        story: 'You realise you transferred money to a scammer 30 minutes ago via PayNow. Is it too late to do anything?',
        scenario: 'You just transferred money to a scammer 30 minutes ago.',
        correct: 'b',
        feedback: {
          correct: 'Call your bank immediately — every minute counts. Banks have fraud response teams who can sometimes freeze the receiving account if you report quickly. Also call SPF at 999 for an emergency report. Do not delay.',
          wrong: 'Act immediately — call your bank\'s 24-hour fraud hotline right away. DBS: 1800-111-1111, OCBC: 1800-363-3333, UOB: 1800-222-2121. The faster you report, the higher the chance of recovery.'
        },
        options: [
          { id: 'a', text: 'It is too late — PayNow is instant and cannot be reversed' },
          { id: 'b', text: 'Call your bank\'s fraud hotline immediately — speed increases recovery chances' },
          { id: 'c', text: 'Wait to see if the scammer returns the money' }
        ],
        points: 100
      },
      {
        id: 'snq3_q5',
        story: 'You want to check if a phone number that called you is a known scam number before calling back.',
        scenario: 'You want to check if a phone number is associated with scams before calling back.',
        correct: 'b',
        feedback: {
          correct: 'ScamShield.org has a free "Check a Number" feature where you can type in any phone number to see if it has been reported as a scam. This takes less than 30 seconds and is completely free.',
          wrong: 'ScamShield.org has a free "Check a Number" tool — visit scamshield.org and use the number check feature. You can also forward suspicious SMS to 74722 (ScamShield\'s SMS reporting number) to help protect others.'
        },
        options: [
          { id: 'a', text: 'Call the number and ask if they are a scammer' },
          { id: 'b', text: 'Check the number at ScamShield.org using their free "Check a Number" feature' },
          { id: 'c', text: 'There is no way to check — just ignore all unknown numbers' }
        ],
        points: 100
      }
    ]
  },

  ],
};

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
    difficulty: 'Hard',
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
    difficulty: 'Hard',
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

// ╔══════════════════════════════════════════════════════╗
// ║  FOUNDATIONAL COURSE — CS101 CYBERSECURITY BASICS   ║
// ║  Mandatory intro missions — one per age group       ║
// ╚══════════════════════════════════════════════════════╝
const FOUNDATION_MISSIONS = {

  kids: {
    id: 'foundation_kids',
    type: 'quiz',
    mandatory: true,
    module: 'foundation',
    title: '🛡️ Cyber Basics — Kids Edition',
    subtitle: 'Your First Cybersecurity Lesson',
    icon: '🌟',
    difficulty: 'Beginner',
    xp: 300,
    tags: ['general', 'education'],
    briefing: 'Welcome, new CyberGuard recruit! Before you can go on real missions, you need to learn the basics. Don\'t worry — this is fun! Let\'s find out what cybersecurity means and how to stay safe online.',
    questions: [
      { id: 'fk_q1', story: 'A hacker is like a sneaky burglar, but instead of breaking into houses...', scenario: 'What does a hacker try to break into?', correct: 'b', feedback: { correct: 'Exactly! Hackers break into computers and phones to steal information, just like a burglar steals from houses. That\'s why we need cybersecurity — it\'s like a lock for our digital life!', wrong: 'Hackers break into computers, phones, and websites — not physical places. Cybersecurity protects our digital world.' }, options: [{ id: 'a', text: 'Houses and buildings' }, { id: 'b', text: 'Computers, phones, and websites' }, { id: 'c', text: 'Schools and libraries' }, { id: 'd', text: 'Toys and games' }], points: 100 },
      { id: 'fk_q2', story: 'Your friend Mei uses the password "password123" for everything.', scenario: 'Why is "password123" a BAD password?', correct: 'c', feedback: { correct: 'Right! "password123" is one of the most common passwords in the world. Hackers try common passwords first. Always use a strong, unique password!', wrong: '"password123" is extremely common and easy for hackers to guess. A good password is long, unique, and uses a mix of letters, numbers, and symbols.' }, options: [{ id: 'a', text: 'It\'s too long' }, { id: 'b', text: 'It has numbers in it' }, { id: 'c', text: 'It\'s very common and easy to guess' }, { id: 'd', text: 'It starts with a lowercase letter' }], points: 100 },
      { id: 'fk_q3', story: 'You get a message from a stranger online saying: "Hi! I\'m your age and I love the same games as you! Tell me where you live so we can be friends!"', scenario: 'What should you do?', correct: 'b', feedback: { correct: 'Smart! You should never share personal information (like your address, school, or phone number) with strangers online. Tell a trusted adult immediately.', wrong: 'Never share personal information with strangers online. People online might not be who they claim to be. Always tell a trusted adult.' }, options: [{ id: 'a', text: 'Share your address — they seem friendly' }, { id: 'b', text: 'Don\'t reply and tell a parent or teacher' }, { id: 'c', text: 'Share your school name but not your address' }, { id: 'd', text: 'Ask for their address first' }], points: 100 },
      { id: 'fk_q4', story: 'You see a website offering FREE Roblox Robux if you click a link and enter your username and password.', scenario: 'What is this?', correct: 'a', feedback: { correct: 'Correct! This is a PHISHING scam. Real Roblox will NEVER ask for your password through unofficial websites. "Free stuff" offers that ask for your login are almost always traps!', wrong: 'This is phishing — a trick to steal your password. Roblox never gives free Robux through unofficial links. Never enter your password on suspicious websites.' }, options: [{ id: 'a', text: 'A phishing scam trying to steal my password' }, { id: 'b', text: 'A real Roblox promotion' }, { id: 'c', text: 'A safe way to get free Robux' }, { id: 'd', text: 'A test from Roblox to see if I\'m active' }], points: 100 },
      { id: 'fk_q5', story: 'After using a school computer, you\'re done and ready to leave.', scenario: 'What should you ALWAYS do before leaving a shared computer?', correct: 'd', feedback: { correct: 'Always log out of shared computers! If you leave without logging out, the next person can see your accounts, messages, and files.', wrong: 'Always log out of shared computers! Leaving yourself logged in lets the next person access all your accounts.' }, options: [{ id: 'a', text: 'Just close the browser tabs' }, { id: 'b', text: 'Turn off the monitor' }, { id: 'c', text: 'Leave it — someone else will log out' }, { id: 'd', text: 'Log out of all accounts and lock the screen' }], points: 100 },
    ]
  },

  teens: {
    id: 'foundation_teens',
    type: 'quiz',
    mandatory: true,
    module: 'foundation',
    title: '⚔️ Cybersecurity Foundations',
    subtitle: 'CS101 — What Every Teen Must Know',
    icon: '🔐',
    difficulty: 'Beginner',
    xp: 350,
    tags: ['general', 'education'],
    briefing: 'Welcome to CyberGuard! This foundational course covers the core cybersecurity concepts you\'ll need for every mission ahead. Master these basics and you\'ll be ready to face real-world threats.',
    questions: [
      { id: 'ft_q1', story: null, scenario: 'What is "phishing"?', correct: 'b', feedback: { correct: 'Correct! Phishing is when attackers send fake messages (emails, DMs, texts) pretending to be a trusted source to trick you into giving up passwords or personal info.', wrong: 'Phishing is a social engineering attack using fake messages to steal credentials or personal information — not related to actual fishing!' }, options: [{ id: 'a', text: 'A type of computer virus that deletes files' }, { id: 'b', text: 'A fake message trick to steal your passwords or personal info' }, { id: 'c', text: 'A game where you hack into systems legally' }, { id: 'd', text: 'A secure way to send messages online' }], points: 100 },
      { id: 'ft_q2', story: null, scenario: 'What is Two-Factor Authentication (2FA)?', correct: 'c', feedback: { correct: 'Right! 2FA adds a second verification step (like an SMS code or authenticator app) on top of your password. Even if someone steals your password, they still can\'t log in without the second factor.', wrong: '2FA is a security layer that requires a second proof of identity beyond just a password — making accounts much harder to hack.' }, options: [{ id: 'a', text: 'Logging in twice with the same password' }, { id: 'b', text: 'Having two different passwords for one account' }, { id: 'c', text: 'A second verification step (like an SMS code) in addition to your password' }, { id: 'd', text: 'A type of antivirus software' }], points: 100 },
      { id: 'ft_q3', story: null, scenario: 'What does "HTTPS" in a website URL mean?', correct: 'a', feedback: { correct: 'HTTPS means the connection is encrypted — data between your browser and the website is scrambled so no one can intercept it. Always check for HTTPS before entering passwords or payment info.', wrong: 'HTTPS (HyperText Transfer Protocol Secure) means the connection is encrypted, protecting data in transit from eavesdroppers.' }, options: [{ id: 'a', text: 'The connection is encrypted and more secure' }, { id: 'b', text: 'The website is verified as safe by Google' }, { id: 'c', text: 'The website is very fast' }, { id: 'd', text: 'You need a password to access it' }], points: 100 },
      { id: 'ft_q4', story: 'You downloaded a free game from a sketchy website. Now your computer is running slowly and showing random pop-up ads.', scenario: 'What most likely happened?', correct: 'b', feedback: { correct: 'Classic malware infection. Malware (malicious software) often hides inside free downloads from unofficial sources. Symptoms include slowness, pop-ups, and unexpected behaviour.', wrong: 'These are symptoms of malware — malicious software that infiltrated your system through the unofficial download.' }, options: [{ id: 'a', text: 'The game needs more RAM — get an upgrade' }, { id: 'b', text: 'You likely installed malware along with the game' }, { id: 'c', text: 'Your internet connection is unstable' }, { id: 'd', text: 'The game\'s graphics are too demanding' }], points: 100 },
      { id: 'ft_q5', story: null, scenario: 'What is a "digital footprint"?', correct: 'd', feedback: { correct: 'Your digital footprint is the trail of data you leave online — posts, likes, searches, app usage, location check-ins. It can never be fully deleted and can be seen by future employers, universities, and yes, cybercriminals.', wrong: 'A digital footprint is all the data you leave behind online — it\'s permanent and more public than most people realise.' }, options: [{ id: 'a', text: 'The size of files on your hard drive' }, { id: 'b', text: 'Your login history on one website' }, { id: 'c', text: 'A virus that tracks your keyboard inputs' }, { id: 'd', text: 'The trail of data you leave across the internet through your online activity' }], points: 100 },
      { id: 'ft_q6', story: null, scenario: 'Which of the following is the SAFEST type of password?', correct: 'c', feedback: { correct: 'A long passphrase mixing random words, numbers, and symbols is extremely strong (high entropy) and easier to remember than random characters. Length beats complexity every time.', wrong: 'Long, random passphrases with mixed characters are the strongest. Short passwords and personal information are the easiest to crack.' }, options: [{ id: 'a', text: 'Your name + birthday (e.g. sarah2006)' }, { id: 'b', text: 'A single dictionary word with a capital letter (e.g. Dragon)' }, { id: 'c', text: 'A random passphrase like "Purple$Rain!7Coffee"' }, { id: 'd', text: 'Your phone number with !!! at the end' }], points: 100 },
      { id: 'ft_q7', story: null, scenario: 'What should you do if you suspect your account has been hacked?', correct: 'b', feedback: { correct: 'The correct sequence: change password immediately (before the attacker does), enable 2FA to lock them out, check connected apps, review account activity, and alert anyone who may have been contacted from your account.', wrong: 'Act fast: change your password, enable 2FA, and check for unauthorised activity. Speed is critical — every minute you wait gives the attacker more time.' }, options: [{ id: 'a', text: 'Wait and see if the hacker causes any damage first' }, { id: 'b', text: 'Immediately change your password, enable 2FA, and review account activity' }, { id: 'c', text: 'Delete the account and make a new one' }, { id: 'd', text: 'Log out and hope the session expires' }], points: 100 },
    ]
  },

  adults: {
    id: 'foundation_adults',
    type: 'quiz',
    mandatory: true,
    module: 'foundation',
    title: '🔒 Cybersecurity Fundamentals',
    subtitle: 'CS101 — Professional Cyber Awareness',
    icon: '🏛️',
    difficulty: 'Beginner',
    xp: 400,
    tags: ['general', 'education', 'business'],
    briefing: 'Before diving into advanced missions, complete this foundational briefing. These concepts form the backbone of modern cybersecurity — whether you\'re protecting yourself, your family, or your organisation.',
    questions: [
      { id: 'fa_q1', story: null, scenario: 'What is social engineering?', correct: 'c', feedback: { correct: 'Social engineering exploits human psychology rather than technical vulnerabilities. Attackers manipulate people into revealing information or taking actions that compromise security. It\'s behind 90%+ of successful breaches.', wrong: 'Social engineering is psychological manipulation — tricking people rather than hacking systems directly. It\'s the most common attack vector today.' }, options: [{ id: 'a', text: 'Building secure social media platforms' }, { id: 'b', text: 'Engineering software for social networks' }, { id: 'c', text: 'Psychologically manipulating people to reveal information or take security-compromising actions' }, { id: 'd', text: 'A type of malware spread through social media' }], points: 100 },
      { id: 'fa_q2', story: null, scenario: 'What is ransomware?', correct: 'b', feedback: { correct: 'Ransomware encrypts your files and demands payment (usually cryptocurrency) to restore access. In 2023, ransomware caused billions in losses globally. Regular offline backups are the best defence.', wrong: 'Ransomware encrypts your data and holds it hostage until you pay. Backups and employee training are the primary defences.' }, options: [{ id: 'a', text: 'Software that slows down your computer to force an upgrade purchase' }, { id: 'b', text: 'Malware that encrypts your files and demands payment for the decryption key' }, { id: 'c', text: 'An app that monitors and charges for internet usage' }, { id: 'd', text: 'A type of phishing email about prize winnings' }], points: 100 },
      { id: 'fa_q3', story: null, scenario: 'Your company receives an email from the CEO asking for an urgent wire transfer of $50,000 to a new vendor. What should you do first?', correct: 'd', feedback: { correct: 'This is a Business Email Compromise (BEC) pattern. Always verify financial requests out-of-band — call the CEO directly on their known number. BEC fraud cost Singaporean businesses millions in 2023.', wrong: 'BEC attacks forge executive emails. ALWAYS verify large financial requests by calling the requester directly on a known number — never reply to the email.' }, options: [{ id: 'a', text: 'Process immediately — the CEO is urgent' }, { id: 'b', text: 'Reply to the email asking for more details' }, { id: 'c', text: 'Check if the email address looks correct, then proceed' }, { id: 'd', text: 'Call the CEO directly on their known phone number to verify before any action' }], points: 100 },
      { id: 'fa_q4', story: null, scenario: 'What is the "principle of least privilege"?', correct: 'a', feedback: { correct: 'Least privilege means giving users only the minimum access needed for their job — nothing more. This limits the damage if an account is compromised. A marketing employee doesn\'t need access to financial systems.', wrong: 'Least privilege limits access rights to only what\'s necessary — reducing the blast radius of any breach.' }, options: [{ id: 'a', text: 'Users should only have access to systems and data they need for their specific role' }, { id: 'b', text: 'Privileged users should have the least responsibilities in a company' }, { id: 'c', text: 'All employees should have equal access to all company systems' }, { id: 'd', text: 'Admin accounts should use the simplest passwords' }], points: 100 },
      { id: 'fa_q5', story: null, scenario: 'What is a VPN primarily used for?', correct: 'b', feedback: { correct: 'A VPN (Virtual Private Network) encrypts your internet traffic and routes it through a secure server, hiding your activity from your ISP and protecting data on public WiFi. It\'s not magic security — it doesn\'t protect against phishing or malware.', wrong: 'A VPN encrypts your connection and masks your IP address. It\'s especially useful on public WiFi but doesn\'t protect against all threats.' }, options: [{ id: 'a', text: 'Making your internet faster' }, { id: 'b', text: 'Encrypting your internet traffic and protecting your connection on untrusted networks' }, { id: 'c', text: 'Protecting your computer from viruses' }, { id: 'd', text: 'Blocking ads on websites' }], points: 100 },
      { id: 'fa_q6', story: null, scenario: 'You receive an SMS from "DBS Bank": "Suspicious activity detected. Click here to verify: dbs-secure-alert.com" — What do you do?', correct: 'c', feedback: { correct: 'Classic smishing (SMS phishing). Real DBS uses official domains (dbs.com.sg). Always call DBS directly at 1800-111-1111 or use the official app. Never click links in unexpected SMS messages.', wrong: 'This is smishing. Legitimate banks never ask you to verify via links in SMS. Always call the bank directly using the number on their official website or your card.' }, options: [{ id: 'a', text: 'Click the link to resolve the issue quickly' }, { id: 'b', text: 'Reply to the SMS asking if it\'s real' }, { id: 'c', text: 'Ignore the SMS and call DBS directly at 1800-111-1111' }, { id: 'd', text: 'Forward it to friends to warn them' }], points: 100 },
      { id: 'fa_q7', story: null, scenario: 'What does "multi-factor authentication" (MFA) protect against, even when your password is stolen?', correct: 'a', feedback: { correct: 'MFA requires multiple verification factors. Even if an attacker has your password, they still need the second factor (your phone, fingerprint, or authenticator code). This stops 99.9% of automated attacks according to Microsoft research.', wrong: 'MFA blocks unauthorised access even when passwords are compromised — it\'s the single most effective security measure individuals can enable.' }, options: [{ id: 'a', text: 'Unauthorised account access when passwords are stolen or leaked' }, { id: 'b', text: 'Malware installed on your computer' }, { id: 'c', text: 'Slow internet connections' }, { id: 'd', text: 'Email spam and phishing detection' }], points: 100 },
    ]
  },

  expert: {
    id: 'foundation_expert',
    type: 'quiz',
    mandatory: true,
    module: 'foundation',
    title: '⚡ Security Operations Fundamentals',
    subtitle: 'Professional Analyst Baseline — Level 05',
    icon: '🔬',
    difficulty: 'Expert',
    xp: 600,
    tags: ['general', 'education', 'tech', 'business'],
    briefing: 'Welcome to Level 05 — Expert track. Before tackling operational missions you must demonstrate proficiency in core security operations concepts: threat modelling, vulnerability classification, attack frameworks, and defensive architecture. This baseline assessment sets your starting point.',
    questions: [
      { id: 'fe_q1', story: null, scenario: 'Which MITRE ATT&CK tactic describes an attacker establishing long-term access after initial compromise?', correct: 'b', feedback: { correct: 'Persistence (TA0003) covers techniques used by adversaries to maintain their foothold across system restarts, credential changes, or other interruptions. Examples include scheduled tasks, registry run keys, and implanted web shells.', wrong: 'Persistence (TA0003) is the correct tactic. It describes how adversaries survive disruption — through registry keys, scheduled tasks, service installs, and similar techniques.' }, options: [{ id: 'a', text: 'Initial Access (TA0001) — gaining the first foothold in the environment' }, { id: 'b', text: 'Persistence (TA0003) — maintaining access across restarts and credential changes' }, { id: 'c', text: 'Lateral Movement (TA0008) — moving through the network to reach target systems' }, { id: 'd', text: 'Exfiltration (TA0010) — stealing and transmitting data out of the environment' }], points: 100 },
      { id: 'fe_q2', story: null, scenario: 'In the CVSS v3.1 scoring system, which metric reflects whether an attacker needs to interact with a victim to exploit a vulnerability?', correct: 'c', feedback: { correct: 'User Interaction (UI) captures whether exploitation requires a human victim to take an action — such as clicking a link or opening a file. UI:None means exploitation is fully automated; UI:Required means the victim must do something.', wrong: 'User Interaction (UI) is the CVSS metric for whether a victim must act. Attack Vector (AV) describes the network path; Privileges Required (PR) describes what access the attacker needs beforehand.' }, options: [{ id: 'a', text: 'Attack Vector (AV) — the network path the attacker uses to reach the target' }, { id: 'b', text: 'Privileges Required (PR) — the access level the attacker needs before exploitation' }, { id: 'c', text: 'User Interaction (UI) — whether a human victim must take an action to trigger exploitation' }, { id: 'd', text: 'Scope (S) — whether exploitation can affect resources outside the vulnerable component' }], points: 100 },
      { id: 'fe_q3', story: null, scenario: 'What is the primary purpose of a Security Information and Event Management (SIEM) system?', correct: 'a', feedback: { correct: 'A SIEM aggregates log data from across the environment (firewalls, endpoints, servers, cloud), correlates events using detection rules, and generates alerts when patterns match known attack signatures or statistical anomalies — giving SOC analysts a unified view of security events.', wrong: 'A SIEM aggregates and correlates logs from multiple sources for centralised detection and alerting. It is not a firewall, vulnerability scanner, or endpoint protection tool.' }, options: [{ id: 'a', text: 'Aggregate logs from multiple sources, correlate events, and generate security alerts' }, { id: 'b', text: 'Block malicious network traffic at the perimeter in real time' }, { id: 'c', text: 'Scan systems for known vulnerabilities and misconfigured services' }, { id: 'd', text: 'Deploy endpoint detection agents to workstations and servers' }], points: 100 },
      { id: 'fe_q4', story: null, scenario: 'A penetration tester discovers credentials in a system\'s memory that allow pivoting to a domain controller. What technique is being demonstrated?', correct: 'b', feedback: { correct: 'Pass-the-Hash (PtH) allows an attacker to authenticate using the NTLM hash of a password instead of the plaintext password. Tools like Mimikatz extract these hashes from LSASS memory. Mitigation: Credential Guard, restricted admin mode, and least-privilege account architecture.', wrong: 'Pass-the-Hash (PtH) uses an NTLM hash extracted from memory to authenticate without knowing the plaintext password. This is a lateral movement technique common in Windows environments.' }, options: [{ id: 'a', text: 'Golden Ticket — a forged Kerberos TGT allowing domain-wide authentication' }, { id: 'b', text: 'Pass-the-Hash — authenticating using an NTLM password hash extracted from memory' }, { id: 'c', text: 'Kerberoasting — cracking service account hashes extracted from Kerberos TGS tickets' }, { id: 'd', text: 'DCSync — simulating a domain controller to replicate Active Directory password hashes' }], points: 100 },
      { id: 'fe_q5', story: null, scenario: 'What does "defence in depth" mean in a security architecture context?', correct: 'd', feedback: { correct: 'Defence in depth implements multiple independent security controls across different layers — network perimeter, endpoint detection, data encryption, IAM, logging. If one layer fails or is bypassed, remaining layers still limit attacker impact. No single control is relied upon exclusively.', wrong: 'Defence in depth means layering multiple independent controls so that failure of any single layer does not result in a complete breach. It is the opposite of relying on one strong control.' }, options: [{ id: 'a', text: 'Building the strongest possible perimeter firewall to stop all external attacks' }, { id: 'b', text: 'Encrypting all data at rest and in transit using AES-256' }, { id: 'c', text: 'Having a dedicated security team monitor the network 24/7' }, { id: 'd', text: 'Layering multiple independent security controls so failure of one does not cause complete compromise' }], points: 100 },
      { id: 'fe_q6', story: null, scenario: 'In threat modelling using STRIDE, which category covers an attacker using another user\'s identity to perform actions?', correct: 'a', feedback: { correct: 'Spoofing (the S in STRIDE) covers impersonation — using another entity\'s identity. Examples include ARP spoofing, DNS spoofing, and session token theft. Authentication controls (MFA, certificates, signed tokens) are the primary mitigations.', wrong: 'STRIDE: Spoofing = identity impersonation; Tampering = data modification; Repudiation = denying actions; Information Disclosure = data leakage; Denial of Service = availability disruption; Elevation of Privilege = gaining unauthorised access levels.' }, options: [{ id: 'a', text: 'Spoofing — claiming to be another user or system to gain unauthorised access' }, { id: 'b', text: 'Repudiation — denying having performed an action when logs cannot prove otherwise' }, { id: 'c', text: 'Elevation of Privilege — gaining higher access rights than originally granted' }, { id: 'd', text: 'Tampering — modifying data or code in transit or at rest without authorisation' }], points: 100 },
      { id: 'fe_q7', story: null, scenario: 'What is the key difference between a vulnerability assessment and a penetration test?', correct: 'c', feedback: { correct: 'A vulnerability assessment identifies and catalogues weaknesses (usually automated scanning). A penetration test actively exploits vulnerabilities to demonstrate real-world impact — simulating what an attacker would actually do with access. Pen tests require explicit written authorisation.', wrong: 'Vulnerability assessment = identify and list weaknesses. Penetration test = actively exploit weaknesses to demonstrate impact. The pen test goes further and requires explicit written authorisation.' }, options: [{ id: 'a', text: 'A vulnerability assessment is done by external consultants; a pen test is done internally' }, { id: 'b', text: 'A pen test only covers web applications; vulnerability assessments cover all systems' }, { id: 'c', text: 'A vulnerability assessment identifies weaknesses; a penetration test actively exploits them to demonstrate impact' }, { id: 'd', text: 'They are the same thing — the terms are interchangeable in the industry' }], points: 100 },
    ]
  },

  seniors: {
    id: 'foundation_seniors',
    type: 'quiz',
    mandatory: true,
    module: 'foundation',
    title: '🤝 Staying Safe Online',
    subtitle: 'Your Essential Guide to Digital Safety',
    icon: '🛡️',
    difficulty: 'Beginner',
    xp: 300,
    tags: ['general', 'education'],
    briefing: 'Welcome! This short course will teach you the most important things about staying safe online. We\'ll use simple, clear examples — no technical jargon. By the end, you\'ll know how to spot scams and protect yourself with confidence.',
    questions: [
      { id: 'fs_q1', story: 'You receive a call from someone saying: "I\'m from the bank. Your account has been frozen. Please give me your ATM PIN number to unfreeze it."', scenario: 'What should you do?', correct: 'b', feedback: { correct: 'Absolutely right! Legitimate banks will NEVER ask for your PIN, password, or OTP over the phone. These calls are scams. Always hang up and call your bank directly using the number on the back of your card.', wrong: 'Banks will NEVER ask for your PIN over the phone. This is a scam. Hang up and call your bank\'s official number directly.' }, options: [{ id: 'a', text: 'Give them the PIN — they need it to help you' }, { id: 'b', text: 'Hang up and call the bank directly using the number on your bank card' }, { id: 'c', text: 'Give them your PIN but not your password' }, { id: 'd', text: 'Ask them to call back later' }], points: 100 },
      { id: 'fs_q2', story: null, scenario: 'Which of these is a SAFE password?', correct: 'c', feedback: { correct: 'Using a phrase that means something to you but would be hard for others to guess — with numbers and symbols — creates a strong, memorable password. Avoid birthdays, names, and simple words.', wrong: 'Personal information like birthdays and names are easy for scammers to find on social media. Use a phrase that\'s meaningful to you but not obvious to others.' }, options: [{ id: 'a', text: 'Your date of birth (e.g., 01011950)' }, { id: 'b', text: 'Your name + "123" (e.g., Mary123)' }, { id: 'c', text: 'A phrase you\'ll remember: "MyCat$Eats@Fish2!"' }, { id: 'd', text: 'Your phone number' }], points: 100 },
      { id: 'fs_q3', story: 'You receive a WhatsApp message: "Mum, I dropped my phone and this is my new number. I urgently need $500 for an emergency. Please PayNow me."', scenario: 'What should you do?', correct: 'a', feedback: { correct: 'This is the "I\'m your child, I have a new number" scam — one of the most common in Singapore. ALWAYS call your child on their old number or another way to verify. Never send money without verbal confirmation.', wrong: 'This is a very common WhatsApp scam in Singapore. Always verify by calling the person\'s old number or another trusted contact before sending any money.' }, options: [{ id: 'a', text: 'Call my child on their old number or another way to verify first' }, { id: 'b', text: 'Send the $500 — my child is in trouble' }, { id: 'c', text: 'Ask for a photo to verify' }, { id: 'd', text: 'Reply asking more questions before deciding' }], points: 100 },
      { id: 'fs_q4', story: null, scenario: 'You get a popup on your computer: "YOUR COMPUTER HAS A VIRUS! Call Microsoft Support immediately: +1-800-XXX-XXXX." What is this?', correct: 'b', feedback: { correct: 'This is a fake tech support scam. Microsoft never contacts you through browser pop-ups. If you call the number, they will try to get remote access to your computer or charge you for fake "repairs". Close the browser and run a real antivirus scan.', wrong: 'Fake tech support pop-ups are a common scam. Microsoft, Apple, and Google do NOT send emergency alerts through websites. Close the browser immediately.' }, options: [{ id: 'a', text: 'A real Microsoft alert — call immediately' }, { id: 'b', text: 'A fake tech support scam — close the browser immediately' }, { id: 'c', text: 'A message from my internet provider' }, { id: 'd', text: 'A real virus alert from Windows Defender' }], points: 100 },
      { id: 'fs_q5', story: null, scenario: 'What should you NEVER share over the phone or online, even if someone claims to be from your bank, CPF, or the government?', correct: 'd', feedback: { correct: 'All of these are sensitive. Never share your OTP (one-time password), PIN, full bank account number, or SingPass password with ANYONE — not even someone who claims to be from your bank or the government. Legitimate organisations will never ask for these.', wrong: 'NONE of these should ever be shared. Scammers specifically ask for OTPs, PINs, and passwords because these give them full access to your accounts and money.' }, options: [{ id: 'a', text: 'Your One-Time Password (OTP)' }, { id: 'b', text: 'Your ATM PIN or internet banking password' }, { id: 'c', text: 'Your SingPass password' }, { id: 'd', text: 'All of the above — never share any of these' }], points: 100 },
    ]
  },
};

// ╔══════════════════════════════════════════════════════╗
// ║  EXPERT  (Level 05)                                  ║
// ╚══════════════════════════════════════════════════════╝
MISSIONS.expert.push(

  // ─── QUIZ: Web Application Threat Intelligence ───────────────────────────────
  {
    id: 'expert_quiz_1',
    type: 'quiz',
    title: 'Web Application Threat Intelligence',
    subtitle: 'Identify and Classify Web Vulnerabilities',
    icon: '🌐',
    difficulty: 'Expert',
    xp: 900,
    briefing: 'You are a senior security analyst at DefCore Consulting, contracted by FinTrust Bank to assess their customer web portal. During testing you observe several anomalous responses. Classify each finding correctly — your report goes to the CISO board.',
    questions: [
      {
        id: 'ex_q1',
        story: 'You submit the value `\' OR \'1\'=\'1\'--` into the username field on the login page. The application grants you admin access without a valid password.',
        scenario: 'Which vulnerability class does this finding represent?',
        correct: 'b',
        feedback: {
          correct: 'Correct. This is SQL Injection — specifically an authentication bypass variant. The payload terminates the SQL WHERE clause and comments out the password check, allowing login as any user. Parameterised queries or prepared statements are the primary mitigation.',
          wrong: 'This is SQL Injection. The payload `\' OR \'1\'=\'1\'--` breaks out of the SQL string context, short-circuits the WHERE clause, and comments out everything after. Always use parameterised queries.'
        },
        options: [
          { id: 'a', text: 'Cross-Site Scripting (XSS) — script injected into the page' },
          { id: 'b', text: 'SQL Injection (Authentication Bypass) — database query manipulated via user input' },
          { id: 'c', text: 'Command Injection — OS shell commands executed through the input field' },
        ],
        points: 150,
      },
      {
        id: 'ex_q2',
        story: 'The document download endpoint accepts a `filename` parameter. Requesting `/api/download?filename=../../../etc/shadow` returns the system\'s shadow password file.',
        scenario: 'What is the correct vulnerability classification?',
        correct: 'a',
        feedback: {
          correct: 'Correct. Path Traversal (also called Directory Traversal) allows an attacker to navigate outside the intended directory using `../` sequences. The application failed to canonicalise the path before opening the file. Mitigation: resolve the real path and confirm it starts within the intended base directory.',
          wrong: 'This is Path Traversal. The `../` sequences walk up the directory tree beyond the intended base path. The fix is to canonicalise the file path and verify it stays within an allowed root.'
        },
        options: [
          { id: 'a', text: 'Path Traversal — directory separators allow access to files outside the web root' },
          { id: 'b', text: 'Insecure Direct Object Reference — a sequential ID exposes another user\'s record' },
          { id: 'c', text: 'Server-Side Request Forgery — the server is tricked into making internal requests' },
        ],
        points: 150,
      },
      {
        id: 'ex_q3',
        story: 'An API endpoint accepts XML input. You submit a payload with an external entity declaration pointing to `file:///etc/passwd`. The API response includes the contents of that file.',
        scenario: 'Which vulnerability class does this demonstrate?',
        correct: 'c',
        feedback: {
          correct: 'Correct. XML External Entity (XXE) Injection occurs when an XML parser processes external entity references that the application did not intend to allow. Beyond local file disclosure, XXE can be used for SSRF, port scanning, and in some cases remote code execution. Mitigation: disable external entity processing in the XML parser configuration.',
          wrong: 'This is XML External Entity (XXE) Injection. The XML parser resolved an external entity pointing to a local file. Disable external entity and DTD processing in your XML library configuration.'
        },
        options: [
          { id: 'a', text: 'JSON Injection — malicious values injected into a JSON data structure' },
          { id: 'b', text: 'Cross-Site Request Forgery — a forged cross-origin request executed on behalf of a victim' },
          { id: 'c', text: 'XML External Entity (XXE) Injection — XML parser resolves an attacker-controlled external entity' },
        ],
        points: 150,
      },
      {
        id: 'ex_q4',
        story: 'The banking API returns `Access-Control-Allow-Origin: *` on all endpoints, including `/api/v1/account/balance`. An analyst demonstrates that JavaScript running on a third-party site can silently read authenticated balance data.',
        scenario: 'What is the root cause of this finding?',
        correct: 'b',
        feedback: {
          correct: 'Correct. A CORS misconfiguration with a wildcard origin (`*`) on a sensitive authenticated endpoint allows any external site to read the response. For credentialled endpoints, `*` should never be used — origins should be whitelisted explicitly.',
          wrong: 'This is a CORS (Cross-Origin Resource Sharing) misconfiguration. The wildcard `Access-Control-Allow-Origin: *` tells the browser to allow any origin to read the response — dangerous for authenticated API endpoints.'
        },
        options: [
          { id: 'a', text: 'Clickjacking — the page is embedded in an invisible iframe on the attacker\'s site' },
          { id: 'b', text: 'CORS Misconfiguration — wildcard origin policy permits any site to read sensitive API responses' },
          { id: 'c', text: 'Open Redirect — users are redirected to an external attacker-controlled domain' },
        ],
        points: 150,
      },
      {
        id: 'ex_q5',
        story: 'Changing the `user_id` parameter in a GET request from your own ID (4821) to another value (1) returns that user\'s full account details with no authorisation error.',
        scenario: 'What vulnerability is this, and what is the primary remediation?',
        correct: 'a',
        feedback: {
          correct: 'Correct. Insecure Direct Object Reference (IDOR) occurs when the application uses a user-controlled value to directly reference an internal object (database record, file) without verifying that the requester is authorised to access it. Fix: implement authorisation checks server-side for every object access — never rely solely on obscurity of IDs.',
          wrong: 'This is Insecure Direct Object Reference (IDOR). The fix is server-side authorisation: verify that the authenticated user is permitted to access the specific resource they are requesting, not just that they are logged in.'
        },
        options: [
          { id: 'a', text: 'Insecure Direct Object Reference (IDOR) — server-side authorisation check missing for each object' },
          { id: 'b', text: 'Mass Assignment — an ORM automatically binds request fields to privileged model attributes' },
          { id: 'c', text: 'Broken Authentication — session tokens are predictable and can be forged' },
        ],
        points: 150,
      },
    ],
  },

  // ─── SPOT-THREAT: Anomalous Network Activity Report ──────────────────────────
  {
    id: 'expert_spot_1',
    type: 'spot-threat',
    title: 'Anomalous Network Activity Report',
    subtitle: 'Identify Indicators of Compromise in Network Logs',
    icon: '📡',
    difficulty: 'Expert',
    xp: 950,
    briefing: 'Your SOC has flagged suspicious activity on the SecureNet Asia corporate network. You are reviewing the automated network analysis report. Identify every line that represents a confirmed or suspected indicator of compromise (IoC). Safe traffic should not be flagged.',
    totalPoints: 700,
    items: [
      { id: 'ex_ioc1', type: 'text', text: '[03:14:22] SNMP GET bulk request from 192.168.1.88 — community string "public" — 847 OID queries across all subnets in 6 seconds', isThreat: true, threatDesc: '🔴 SNMP Enumeration: A single internal host issuing 847 OID queries in 6 seconds using the default "public" community string is a classic network enumeration pattern — mapping device types, interfaces, and routing tables for later exploitation.' },
      { id: 'ex_ioc2', type: 'text', text: '[03:15:01] TCP SYN packets from 192.168.1.88 — ports 21, 22, 23, 25, 53, 80, 110, 139, 443, 445, 3306, 3389 — 12 hosts scanned, 200ms intervals', isThreat: true, threatDesc: '🔴 Port Scan (Stealth/SYN): Sequential SYN packets to known service ports across multiple hosts at regular intervals is a TCP SYN (half-open) scan — designed to map open services while minimising noise in logs.' },
      { id: 'ex_ioc3', type: 'text', text: '[03:16:45] Normal HTTPS session: 10.0.0.42 → 203.0.113.5:443 — 2.1 MB transferred — TLS 1.3 — standard browser user-agent', isThreat: false, threatDesc: '' },
      { id: 'ex_ioc4', type: 'text', text: '[03:17:12] ARP replies from 192.168.1.88 claiming gateway MAC for IP 10.0.0.1 — legitimate gateway MAC confirmed as aa:bb:cc:dd:ee:ff at 10.0.0.1', isThreat: true, threatDesc: '🔴 ARP Poisoning: The host 192.168.1.88 is broadcasting ARP replies claiming to be the default gateway (10.0.0.1), while the real gateway has a different MAC. This is ARP poisoning — positioning 192.168.1.88 as a man-in-the-middle for all gateway-bound traffic.' },
      { id: 'ex_ioc5', type: 'text', text: '[03:18:30] DHCP server at 192.168.1.88 responding to broadcast requests — legitimate DHCP server is 10.0.0.254', isThreat: true, threatDesc: '🔴 Rogue DHCP Server: A second DHCP server appeared on the network. A rogue DHCP server can hand out attacker-controlled DNS servers and gateway IPs, rerouting all new connections through an adversary-controlled host.' },
      { id: 'ex_ioc6', type: 'text', text: '[03:22:00] Internal DNS query: hostname "intranet-portal.secnet.local" → 10.0.0.15 resolved successfully', isThreat: false, threatDesc: '' },
      { id: 'ex_ioc7', type: 'text', text: '[03:24:18] Banner grab responses collected: SSH-2.0-OpenSSH_7.2p2, Apache/2.4.18, Microsoft-IIS/7.5, vsftpd 2.3.4 — collected by 192.168.1.88', isThreat: true, threatDesc: '🔴 Banner Grabbing: Collecting software version banners (SSH version, web server version, FTP daemon) from multiple services maps the exact software stack and version numbers running on each host — enabling targeted exploitation of known CVEs.' },
    ],
    threats: ['ex_ioc1','ex_ioc2','ex_ioc4','ex_ioc5','ex_ioc7'],
    pointsPerThreat: 140,
  },

  // ─── DECISION-TREE: Advanced Persistent Threat Incident Response ─────────────
  {
    id: 'expert_dt_1',
    type: 'decision-tree',
    title: 'APT Incident Response',
    subtitle: 'Lead the CSIRT Response to an Active Intrusion',
    icon: '🎯',
    difficulty: 'Expert',
    xp: 1000,
    briefing: 'You are the CSIRT Lead at MegaCorp Asia. At 03:00 on a Thursday, automated alerts fire: unusual outbound traffic detected from three workstations in the Finance department. Your SOC analyst says the traffic pattern looks like command-and-control (C2) beaconing. You have full authority to act.',
    maxScore: 400,
    tree: {
      start: {
        type: 'choice',
        text: 'Alerts show regular 6-hour outbound HTTPS connections from three Finance workstations to an IP registered in Eastern Europe. The packets are small and evenly timed — consistent with C2 beaconing. What is your immediate first action?',
        choices: [
          { text: 'Immediately shut down and reimage all three workstations', next: 'reimage_early', points: 0 },
          { text: 'Monitor silently and collect full packet captures for 30 minutes before acting', next: 'monitor', points: 100 },
          { text: 'Send a company-wide security alert so all staff are aware', next: 'broadcast', points: 0 },
        ]
      },
      reimage_early: {
        type: 'outcome',
        text: '❌ Reimaging immediately destroys forensic evidence — memory artefacts, malware samples, and attacker tooling are gone. You also have no idea of the full scope: are other systems compromised? The attacker likely has persistence elsewhere and you\'ve lost your visibility window.',
        points: 0,
      },
      broadcast: {
        type: 'outcome',
        text: '❌ A company-wide alert tips off any insider threat and may cause the external attacker to activate a kill-switch, wipe evidence, or accelerate exfiltration. CSIRT responses are need-to-know until containment is confirmed.',
        points: 0,
      },
      monitor: {
        type: 'choice',
        text: '✅ Good call. Passive monitoring preserves evidence and reveals scope. After 30 minutes of PCAP collection, your analysis shows: the malware uses process injection to hide inside a legitimate Windows process (svchost.exe), sends encrypted traffic on port 443, and has been active for 11 days. What do you do next?',
        choices: [
          { text: 'Take memory dumps of all three workstations before any shutdown', next: 'memory_dump', points: 100 },
          { text: 'Run a full antivirus scan on the affected machines', next: 'av_scan', points: 25 },
          { text: 'Block the C2 IP at the perimeter firewall immediately', next: 'block_c2_only', points: 50 },
        ]
      },
      av_scan: {
        type: 'outcome',
        text: '⚠️ AV scans miss fileless and process-injected malware — the malware is running in memory inside a trusted process, leaving no disk artefact for AV to detect. You get a clean result and a false sense of security. Memory forensics is the correct approach.',
        points: 0,
      },
      block_c2_only: {
        type: 'outcome',
        text: '⚠️ Blocking the C2 IP alone is insufficient — APT actors use multiple C2 infrastructure nodes and will simply switch. Without evidence collection, you have lost visibility and the attacker may pivot to dormant backdoors. Always collect forensic evidence before containment actions.',
        points: 0,
      },
      memory_dump: {
        type: 'choice',
        text: '✅ Excellent. Memory dumps capture the injected shellcode, decrypted C2 configuration, and any additional credentials harvested in memory. Forensics confirms a second-stage implant and identifies lateral movement to two servers. How do you contain?',
        choices: [
          { text: 'Isolate all confirmed compromised systems from the network immediately, preserve images', next: 'isolate_contain', points: 100 },
          { text: 'Reimage all systems immediately to restore clean state', next: 'reimage_late', points: 25 },
          { text: 'Leave systems running and continue monitoring — don\'t tip off the attacker', next: 'no_contain', points: 0 },
        ]
      },
      reimage_late: {
        type: 'outcome',
        text: '⚠️ Reimaging before identifying all compromised systems leaves dormant implants running on other hosts. Without full scoping, the attacker retains access and can re-establish footholds at will. Isolate and scope before any reimaging.',
        points: 0,
      },
      no_contain: {
        type: 'outcome',
        text: '❌ Continuing to let the attacker operate without containment while you observe risks data exfiltration escalating. Without a clear endpoint to observation, the risk/reward calculation turns negative. Evidence collection must be paired with a containment window.',
        points: 0,
      },
      isolate_contain: {
        type: 'outcome',
        text: '🏆 Outstanding incident response. You monitored to establish scope, collected forensic memory dumps before shutdown, identified lateral movement, and executed a coordinated isolation of all confirmed compromised systems. The forensic evidence enables root-cause analysis and supports any legal or regulatory action. You contained the APT within 4 hours of initial detection.',
        points: 100,
      },
    },
  },
);

// ─── Helper: get all missions for an age group ────────────────────────────────
function getMissions(ageGroup, regionFilter) {
  const foundation = FOUNDATION_MISSIONS[ageGroup];
  const regular = MISSIONS[ageGroup] || [];
  // Missions without a region field default to 'sg' (original content)
  const all = (foundation ? [foundation, ...regular] : regular)
    .map(m => ({ ...m, region: m.region || 'sg' }));
  if (!regionFilter || regionFilter === 'all') return all;
  return all.filter(m => m.region === regionFilter);
}

function getMission(ageGroup, missionId) {
  if (FOUNDATION_MISSIONS[ageGroup]?.id === missionId) return FOUNDATION_MISSIONS[ageGroup];
  return (MISSIONS[ageGroup] || []).find(m => m.id === missionId);
}

// Returns only regions that have at least 1 mission for the given ageGroup
function getActiveRegions(ageGroup) {
  const all = getMissions(ageGroup, 'all');
  const seen = new Set(all.map(m => m.region));
  return REGIONS.filter(r => r.id === 'all' || seen.has(r.id));
}
