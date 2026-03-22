// ─── Supabase Configuration ───────────────────────────────────────────────────
const SUPABASE_URL  = 'https://skiludhuuwgobngvucsv.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNraWx1ZGh1dXdnb2JuZ3Z1Y3N2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzM4NDM1ODIsImV4cCI6MjA4OTQxOTU4Mn0.ZXRvioOD37l9KS0K8io-9BKOIbNPcbKb81JSOHe-Bx0';

// ─── App Constants ────────────────────────────────────────────────────────────
// NOTE: db client is initialised at the BOTTOM of this file, after all
// constants are declared — so a Supabase CDN timing issue never prevents
// REGIONS / AGE_GROUPS / LEVELS etc. from being defined.
const AGE_GROUPS = {
  kids:    { label: 'Beginner',     range: 'Level 01', emoji: '🌱', color: '#FF6B6B', theme: 'kids'    },
  teens:   { label: 'Intermediate', range: 'Level 02', emoji: '⚔️',  color: '#7C3AED', theme: 'teens'   },
  adults:  { label: 'Advanced',     range: 'Level 03', emoji: '🔥', color: '#1770b5', theme: 'adults'  },
  seniors: { label: 'Specialist',   range: 'Level 04', emoji: '💀', color: '#059669', theme: 'seniors' },
  expert:  { label: 'Expert',       range: 'Level 05', emoji: '⚡', color: '#F59E0B', theme: 'expert'  },
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

// ─── Regions ──────────────────────────────────────────────────────────────────
// Ordered: ASEAN → APAC → Global (expanding rings)
const REGIONS = [
  { id: 'all', label: 'All',           emoji: '🌐', group: null      },
  // ── ASEAN ──
  { id: 'sg',  label: 'Singapore',     emoji: '🇸🇬', group: 'ASEAN'  },
  { id: 'my',  label: 'Malaysia',      emoji: '🇲🇾', group: 'ASEAN'  },
  { id: 'ph',  label: 'Philippines',   emoji: '🇵🇭', group: 'ASEAN'  },
  { id: 'th',  label: 'Thailand',      emoji: '🇹🇭', group: 'ASEAN'  },
  { id: 'id',  label: 'Indonesia',     emoji: '🇮🇩', group: 'ASEAN'  },
  { id: 'vn',  label: 'Vietnam',       emoji: '🇻🇳', group: 'ASEAN'  },
  { id: 'mm',  label: 'Myanmar',       emoji: '🇲🇲', group: 'ASEAN'  },
  // ── APAC ──
  { id: 'jp',  label: 'Japan',         emoji: '🇯🇵', group: 'APAC'   },
  { id: 'kr',  label: 'South Korea',   emoji: '🇰🇷', group: 'APAC'   },
  { id: 'au',  label: 'Australia',     emoji: '🇦🇺', group: 'APAC'   },
  { id: 'nz',  label: 'New Zealand',   emoji: '🇳🇿', group: 'APAC'   },
  { id: 'in',  label: 'India',         emoji: '🇮🇳', group: 'APAC'   },
  { id: 'cn',  label: 'China',         emoji: '🇨🇳', group: 'APAC'   },
  // ── Global ──
  { id: 'uk',  label: 'United Kingdom',emoji: '🇬🇧', group: 'Global' },
  { id: 'eu',  label: 'Europe',        emoji: '🇪🇺', group: 'Global' },
  { id: 'us',  label: 'United States', emoji: '🇺🇸', group: 'Global' },
  { id: 'me',  label: 'Middle East',   emoji: '🌍',  group: 'Global' },
  { id: 'af',  label: 'Africa',        emoji: '🌍',  group: 'Global' },
  { id: 'sa',  label: 'South America', emoji: '🌎',  group: 'Global' },
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

// ─── Supabase Client ──────────────────────────────────────────────────────────
// Initialised LAST so a CDN timing failure never halts constant definitions above.
const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON);
