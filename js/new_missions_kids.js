// ===== KIDS (7 missions) =====
[
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
  }
]
