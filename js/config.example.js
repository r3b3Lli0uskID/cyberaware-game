// ─── Supabase Configuration ───────────────────────────────────────────────────
// Copy this file to config.js and replace the placeholders with your own keys.
// Get them from: supabase.com → your project → Settings → API
const SUPABASE_URL  = 'https://YOUR_PROJECT_REF.supabase.co';
const SUPABASE_ANON = 'YOUR_ANON_PUBLIC_KEY';

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);

// ─── App Constants ────────────────────────────────────────────────────────────
const AGE_GROUPS = {
  kids:    { label: 'Kids',    range: '7 – 12',  emoji: '🧒', color: '#FF6B6B', theme: 'kids'    },
  teens:   { label: 'Teens',   range: '13 – 17', emoji: '🧑‍💻', color: '#7C3AED', theme: 'teens'   },
  adults:  { label: 'Adults',  range: '18 – 45', emoji: '👩‍💼', color: '#1770b5', theme: 'adults'  },
  seniors: { label: 'Seniors', range: '46 – 65+',emoji: '👴', color: '#059669', theme: 'seniors' },
};

const AVATARS = {
  'Cyber Heroes': ['🛡️','🦸','🕵️','⚡','🔐','🎯','🚀','🦾','🤺','🥷'],
  'Tech & AI':    ['🤖','💻','🖥️','📡','🔭','🛸','🧬','⚙️','🔬','💾'],
  'Animals':      ['🦊','🦅','🐉','🐺','🦁','🐯','🦈','🦋','🐸','🦜'],
  'Cool Vibes':   ['🌟','💎','🔥','🌀','🎮','🎲','🃏','🏴‍☠️','👾','🌈'],
};

const LEVELS = {
  beginner:     { label: 'Beginner',     emoji: '🌱', desc: 'New to cybersecurity — start here!',           xpMult: 1.0  },
  intermediate: { label: 'Intermediate', emoji: '⚔️',  desc: 'Know the basics, ready for more',              xpMult: 1.25 },
  hard:         { label: 'Hard',         emoji: '🔥',  desc: 'Confident — bring on the real challenges',     xpMult: 1.5  },
  expert:       { label: 'Expert',       emoji: '💀',  desc: 'Professional mindset, maximum XP rewards',     xpMult: 2.0  },
};

const HOBBIES = [
  { id: 'gaming',    emoji: '🎮', label: 'Gaming'              },
  { id: 'finance',   emoji: '💰', label: 'Finance & Investing' },
  { id: 'social',    emoji: '📱', label: 'Social Media'        },
  { id: 'health',    emoji: '🏥', label: 'Healthcare'          },
  { id: 'tech',      emoji: '💻', label: 'Technology'          },
  { id: 'business',  emoji: '🏢', label: 'Business'            },
  { id: 'education', emoji: '📚', label: 'Education'           },
  { id: 'general',   emoji: '🌐', label: 'General'             },
];

const BADGES = {
  first_mission:    { id: 'first_mission',    emoji: '🎖️',  label: 'First Mission',     desc: 'Completed your first mission'         },
  perfect_score:    { id: 'perfect_score',    emoji: '💯',  label: 'Perfect Score',      desc: 'Scored 100% on a mission'             },
  quiz_master:      { id: 'quiz_master',      emoji: '🧠',  label: 'Quiz Master',        desc: 'Aced a quiz mission'                  },
  threat_hunter:    { id: 'threat_hunter',    emoji: '🔍',  label: 'Threat Hunter',      desc: 'Aced a spot-the-threat mission'       },
  decision_maker:   { id: 'decision_maker',   emoji: '🎯',  label: 'Decision Maker',     desc: 'Aced a decision-tree mission'         },
  group_complete:   { id: 'group_complete',   emoji: '🏅',  label: 'Group Champion',     desc: 'Completed all missions in your group' },
  cyber_guardian:   { id: 'cyber_guardian',   emoji: '🏆',  label: 'Cyber Guardian',     desc: 'Completed missions in all age groups' },
  streak_3:         { id: 'streak_3',         emoji: '🔥',  label: 'On Fire',            desc: 'Completed 3 missions in a row'        },
};
