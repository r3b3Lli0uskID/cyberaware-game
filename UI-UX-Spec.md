# CyberGuard: Stay Safe Online — Full UI/UX Specification

**Target:** Single standalone HTML file with embedded CSS + JS
**Audience:** Ages 7–65+, four mode tiers
**Last updated:** 2026-03-18

---

## 1. Design Philosophy

| Principle | Application |
|---|---|
| Age-first theming | CSS custom properties swap the entire visual system per mode — no duplicate markup |
| Progressive simplicity | Kids = most visual noise; Seniors = maximum whitespace and legibility |
| Inline feedback | Every answer gets immediate, emotionally resonant feedback — no page redirects |
| Zero dependencies | Vanilla HTML/CSS/JS only; no CDN calls; works fully offline |
| Print-safe | Final score screen can be screenshot/printed as a certificate |

---

## 2. CSS Design System

### 2.1 Root Variables (base, always present)

```css
:root {
  /* Layout */
  --max-width: 860px;
  --card-radius: 16px;
  --btn-radius: 12px;
  --transition-speed: 0.3s;
  --shadow-card: 0 4px 24px rgba(0,0,0,0.12);
  --shadow-btn: 0 2px 8px rgba(0,0,0,0.18);

  /* Feedback colors — shared across all modes */
  --correct-bg: #D4EDDA;
  --correct-border: #28A745;
  --correct-text: #155724;
  --wrong-bg: #F8D7DA;
  --wrong-border: #DC3545;
  --wrong-text: #721C24;
  --tip-bg: #FFF3CD;
  --tip-border: #FFC107;
  --tip-text: #856404;

  /* Overlay */
  --overlay-bg: rgba(0,0,0,0.55);
}
```

### 2.2 Age-Mode Overrides

Applied by adding `data-mode="kids|teens|adults|seniors"` to `<body>`.

#### Kids (7–12)

```css
[data-mode="kids"] {
  --primary:       #FF6B6B;   /* coral red */
  --primary-dark:  #E05555;
  --secondary:     #FFD93D;   /* sunshine yellow */
  --accent:        #6BCB77;   /* friendly green */
  --accent-alt:    #4D96FF;   /* sky blue */
  --bg-page:       #FFF9F0;   /* warm cream */
  --bg-card:       #FFFFFF;
  --bg-header:     linear-gradient(135deg, #FF6B6B 0%, #FFD93D 100%);
  --text-primary:  #2D2D2D;
  --text-secondary:#5A5A5A;
  --text-on-primary:#FFFFFF;
  --font-base:     'Comic Sans MS', 'Chalkboard SE', 'Nunito', cursive;
  --font-heading:  'Comic Sans MS', 'Chalkboard SE', cursive;
  --font-size-base: 17px;
  --font-size-heading: 2rem;
  --font-size-sub: 1.1rem;
  --font-size-option: 1rem;
  --line-height:   1.6;
  --progress-color:#6BCB77;
  --star-color:    #FFD93D;
  --avatar-size:   72px;
  --btn-padding:   14px 28px;
  --card-padding:  28px;
  --border-width:  3px;
  --border-style:  dashed;    /* playful dashed borders */
}
```

#### Teens (13–17)

```css
[data-mode="teens"] {
  --primary:       #7C3AED;   /* electric purple */
  --primary-dark:  #6025C0;
  --secondary:     #06B6D4;   /* neon cyan */
  --accent:        #10B981;   /* matrix green */
  --accent-alt:    #F59E0B;   /* amber */
  --bg-page:       #0F0F1A;   /* near-black */
  --bg-card:       #1A1A2E;   /* dark navy */
  --bg-header:     linear-gradient(135deg, #7C3AED 0%, #06B6D4 100%);
  --text-primary:  #E2E8F0;
  --text-secondary:#94A3B8;
  --text-on-primary:#FFFFFF;
  --font-base:     'Rajdhani', 'Orbitron', 'Segoe UI', sans-serif;
  --font-heading:  'Rajdhani', 'Orbitron', sans-serif;
  --font-size-base: 15px;
  --font-size-heading: 1.8rem;
  --font-size-sub: 1rem;
  --font-size-option: 0.95rem;
  --line-height:   1.5;
  --progress-color:#06B6D4;
  --star-color:    #F59E0B;
  --avatar-size:   60px;
  --btn-padding:   12px 24px;
  --card-padding:  24px;
  --border-width:  1px;
  --border-style:  solid;
  --glow-primary:  0 0 12px rgba(124,58,237,0.6);
  --glow-secondary:0 0 12px rgba(6,182,212,0.6);
}
```

#### Adults (18–45)

```css
[data-mode="adults"] {
  --primary:       #1D4ED8;   /* professional blue */
  --primary-dark:  #1535A8;
  --secondary:     #0EA5E9;   /* sky blue */
  --accent:        #059669;   /* teal green */
  --accent-alt:    #D97706;   /* amber warning */
  --bg-page:       #F8FAFC;   /* off-white */
  --bg-card:       #FFFFFF;
  --bg-header:     linear-gradient(135deg, #1D4ED8 0%, #0EA5E9 100%);
  --text-primary:  #1E293B;
  --text-secondary:#475569;
  --text-on-primary:#FFFFFF;
  --font-base:     'Inter', 'Segoe UI', 'Helvetica Neue', sans-serif;
  --font-heading:  'Inter', 'Segoe UI', sans-serif;
  --font-size-base: 15px;
  --font-size-heading: 1.75rem;
  --font-size-sub: 1rem;
  --font-size-option: 0.95rem;
  --line-height:   1.55;
  --progress-color:#059669;
  --star-color:    #D97706;
  --avatar-size:   56px;
  --btn-padding:   12px 22px;
  --card-padding:  24px;
  --border-width:  1px;
  --border-style:  solid;
}
```

#### Seniors (46–65+)

```css
[data-mode="seniors"] {
  --primary:       #1A6B3A;   /* forest green — calm, trusted */
  --primary-dark:  #124D2A;
  --secondary:     #2563EB;   /* clear blue */
  --accent:        #DC2626;   /* alert red — clear danger signal */
  --accent-alt:    #D97706;
  --bg-page:       #FFFFFF;
  --bg-card:       #FFFFFF;
  --bg-header:     linear-gradient(135deg, #1A6B3A 0%, #2563EB 100%);
  --text-primary:  #111111;   /* maximum contrast */
  --text-secondary:#333333;
  --text-on-primary:#FFFFFF;
  --font-base:     'Georgia', 'Times New Roman', serif;
  --font-heading:  'Georgia', serif;
  --font-size-base: 20px;     /* larger base */
  --font-size-heading: 2.2rem;
  --font-size-sub: 1.2rem;
  --font-size-option: 1.15rem;
  --line-height:   1.8;       /* wider line spacing */
  --progress-color:#1A6B3A;
  --star-color:    #D97706;
  --avatar-size:   80px;
  --btn-padding:   18px 36px; /* large tap targets */
  --card-padding:  36px;
  --border-width:  2px;
  --border-style:  solid;
  --min-tap-target: 60px;     /* WCAG 2.5.5 */
}
```

### 2.3 Typography Scale

```css
/* Applied globally using var() */
body        { font-size: var(--font-size-base); font-family: var(--font-base); line-height: var(--line-height); }
h1          { font-size: var(--font-size-heading); font-family: var(--font-heading); font-weight: 700; }
h2          { font-size: calc(var(--font-size-heading) * 0.8); }
.sub-text   { font-size: var(--font-size-sub); }
.option-btn { font-size: var(--font-size-option); }
```

---

## 3. Screen Flow Architecture

```
┌─────────────────────────────────────────────────┐
│                  LANDING SCREEN                 │
│   Logo · Tagline · [4 Age Group Cards]          │
└──────────────────┬──────────────────────────────┘
                   │ user clicks age card
                   ▼
┌─────────────────────────────────────────────────┐
│               PROFILE SETUP SCREEN              │
│   Name input · Avatar picker · [Start Game]     │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│                 LEVEL MAP SCREEN                │
│   Scrollable path · Level nodes · XP bar        │
└──────────────────┬──────────────────────────────┘
                   │ click unlocked level
                   ▼
┌─────────────────────────────────────────────────┐
│               SCENARIO SCREEN                   │
│   Story · Scenario card · 3 option buttons      │
└──────────────────┬──────────────────────────────┘
                   │ answer selected
                   ▼
┌─────────────────────────────────────────────────┐
│               RESULT OVERLAY                    │
│   Correct/Wrong badge · Feedback · Tip card     │
└──────────────────┬──────────────────────────────┘
                   │ [Next Level] or [Try Again]
                   ▼
┌─────────────────────────────────────────────────┐
│              FINAL SCORE SCREEN                 │
│   Stars · XP total · Badge · Share/Print CTA    │
└─────────────────────────────────────────────────┘
```

---

## 4. Screen-by-Screen Design

### 4.1 Landing Screen

**Layout:** Full viewport, centered flex column.

```
┌──────────────────────────────────────────────────┐
│                                                  │
│   🛡️  CyberGuard                                 │  ← h1, --font-heading
│   Stay Safe Online                               │  ← tagline, --text-secondary
│                                                  │
│   ┌──────┐  ┌──────┐  ┌──────┐  ┌──────┐       │
│   │  🧒  │  │  🧑  │  │  👨  │  │  👴  │       │  ← age cards, 4-col grid
│   │ Kids │  │Teens │  │Adult │  │Senior│       │
│   │ 7-12 │  │13-17 │  │18-45 │  │ 46+ │        │
│   └──────┘  └──────┘  └──────┘  └──────┘       │
│                                                  │
│   Footer: "Free · No Login · Works Offline"      │
└──────────────────────────────────────────────────┘
```

**Age Group Cards — Component:**

```css
.age-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 24px 20px;
  border-radius: var(--card-radius);
  border: var(--border-width) var(--border-style) transparent;
  background: var(--bg-card);
  box-shadow: var(--shadow-card);
  cursor: pointer;
  transition: transform var(--transition-speed) ease,
              box-shadow var(--transition-speed) ease,
              border-color var(--transition-speed) ease;
  min-width: 160px;
}
.age-card:hover {
  transform: translateY(-4px) scale(1.03);
  border-color: var(--primary);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
}
.age-card .emoji { font-size: 3rem; }
.age-card .label { font-weight: 700; font-size: 1.05rem; color: var(--text-primary); }
.age-card .range { font-size: 0.85rem; color: var(--text-secondary); }
```

**Landing — Age-specific card accent colors:**

| Mode | Card border on hover | Card emoji |
|---|---|---|
| kids | #FF6B6B (coral) | 🧒 |
| teens | #7C3AED (purple) | 🧑 |
| adults | #1D4ED8 (blue) | 👨 |
| seniors | #1A6B3A (green) | 👴 |

**Animations:**
- On load: cards fade-in with staggered `animation-delay` (0ms, 100ms, 200ms, 300ms)
- Logo shield icon: gentle pulse `keyframe` (scale 1 → 1.05 → 1, 3s loop)
- Background: subtle animated gradient mesh (CSS `@keyframes` hue-rotate on a radial-gradient pseudo-element, 12s loop, `opacity: 0.15` so it doesn't distract)

---

### 4.2 Profile Setup Screen

**Layout:** Single centered card, max-width 480px.

```
┌───────────────────────────────┐
│  What's your name?            │  ← h2
│  ┌─────────────────────────┐  │
│  │  Type your name here    │  │  ← large text input
│  └─────────────────────────┘  │
│                               │
│  Pick your hero:              │
│  [🧒][🦸][🤖][🐱][🦊][🐧]   │  ← avatar grid (emoji buttons)
│                               │
│  [  Let's Go!  ]              │  ← primary CTA button
└───────────────────────────────┘
```

**Input Component:**

```css
.name-input {
  width: 100%;
  padding: 14px 18px;
  font-size: var(--font-size-base);
  font-family: var(--font-base);
  border: var(--border-width) var(--border-style) #CBD5E1;
  border-radius: var(--btn-radius);
  background: var(--bg-page);
  color: var(--text-primary);
  outline: none;
  transition: border-color 0.2s;
}
.name-input:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(var(--primary-rgb), 0.2);
}
```

**Avatar Picker:**

```css
.avatar-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
}
.avatar-btn {
  font-size: 2rem;
  padding: 10px;
  border-radius: 50%;
  border: 3px solid transparent;
  background: var(--bg-page);
  cursor: pointer;
  transition: transform 0.2s, border-color 0.2s;
  min-height: var(--min-tap-target, 48px); /* seniors: 60px */
}
.avatar-btn.selected {
  border-color: var(--primary);
  background: var(--bg-card);
  transform: scale(1.15);
}
```

**Avatar options per mode:**

| Mode | Avatars |
|---|---|
| kids | 🧒 🐱 🦊 🐧 🤖 🦸 |
| teens | 🧑 🎮 💻 🕶️ 🦊 🤖 |
| adults | 👨 👩 💼 🧑‍💻 🔐 🛡️ |
| seniors | 👴 👵 😊 🏠 📱 ☎️ |

**CTA Button Component (reused throughout):**

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: var(--btn-padding);
  font-size: var(--font-size-option);
  font-family: var(--font-base);
  font-weight: 700;
  color: var(--text-on-primary);
  background: var(--primary);
  border: none;
  border-radius: var(--btn-radius);
  cursor: pointer;
  box-shadow: var(--shadow-btn);
  transition: background var(--transition-speed),
              transform 0.15s,
              box-shadow 0.15s;
  min-height: var(--min-tap-target, 48px);
}
.btn-primary:hover {
  background: var(--primary-dark);
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0,0,0,0.22);
}
.btn-primary:active { transform: translateY(0); }

/* Teens mode gets glow effect */
[data-mode="teens"] .btn-primary {
  box-shadow: var(--glow-primary);
}
```

---

### 4.3 Level Map Screen

**Layout:** Centered column, fixed header with score/avatar, scrollable level path below.

```
┌──────────────────────────────────────────────────┐
│  [Avatar] Alex          Score: 0    Level 1/6    │  ← fixed top bar
│  ████████░░░░░░░░░░░░░░░░░░░░  XP: 0/600        │  ← XP progress bar
├──────────────────────────────────────────────────┤
│                                                  │
│            ●  Level 1 — Passwords                │  ← completed = filled
│            │                                     │
│            ○  Level 2 — Sharing Info   🔒        │  ← locked
│            │                                     │
│            ○  Level 3 — Safe Websites  🔒        │
│            │                                     │
│           ...                                    │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Top Bar (sticky header):**

```css
.game-header {
  position: sticky;
  top: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px var(--card-padding);
  background: var(--bg-card);
  box-shadow: 0 2px 12px rgba(0,0,0,0.1);
}
.player-avatar { font-size: var(--avatar-size); line-height: 1; }
.player-name   { font-weight: 700; color: var(--text-primary); flex: 1; }
.score-badge {
  background: var(--primary);
  color: var(--text-on-primary);
  padding: 6px 14px;
  border-radius: 20px;
  font-weight: 700;
  font-size: 0.9rem;
}
```

**XP Progress Bar:**

```css
.xp-bar-track {
  height: 10px;
  background: #E2E8F0;
  border-radius: 999px;
  overflow: hidden;
}
.xp-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--progress-color), var(--secondary));
  border-radius: 999px;
  transition: width 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
/* Kids: animated shimmer on the XP bar */
[data-mode="kids"] .xp-bar-fill {
  background: linear-gradient(90deg, #6BCB77, #FFD93D, #6BCB77);
  background-size: 200% 100%;
  animation: shimmer 2s linear infinite;
}
@keyframes shimmer {
  0%   { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**Level Node Component:**

```css
.level-node {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px var(--card-padding);
  border-radius: var(--card-radius);
  border: var(--border-width) var(--border-style) #E2E8F0;
  background: var(--bg-card);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  position: relative;
}
.level-node.completed {
  border-color: var(--progress-color);
  background: color-mix(in srgb, var(--progress-color) 8%, var(--bg-card));
}
.level-node.active {
  border-color: var(--primary);
  box-shadow: var(--shadow-card);
  animation: pulse-border 2s ease-in-out infinite;
}
.level-node.locked {
  opacity: 0.55;
  cursor: not-allowed;
  filter: grayscale(0.5);
}
@keyframes pulse-border {
  0%, 100% { box-shadow: 0 0 0 0 rgba(var(--primary-rgb), 0.4); }
  50%       { box-shadow: 0 0 0 8px rgba(var(--primary-rgb), 0); }
}

.level-node-icon {
  width: 48px; height: 48px;
  border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 1.4rem;
  background: var(--bg-page);
  border: 2px solid currentColor;
  flex-shrink: 0;
}
.level-node.completed .level-node-icon { background: var(--progress-color); color: white; }
.level-node.active    .level-node-icon { background: var(--primary); color: white; }

.level-connector {
  width: 2px;
  height: 32px;
  background: #CBD5E1;
  margin: 0 auto;
}
.level-connector.completed { background: var(--progress-color); }
```

**Stars display (post-completion):**

```css
.level-stars {
  display: flex;
  gap: 2px;
  margin-left: auto;
}
.star { font-size: 1.2rem; }
.star.earned  { color: var(--star-color); }
.star.missing { color: #CBD5E1; }
```

---

### 4.4 Scenario Screen

**Layout:** Two-zone layout — story header, then scenario + options.

```
┌──────────────────────────────────────────────────┐
│  [← Back]  Level 3 · Question 1/5   [Score: 200]│  ← fixed mini-header
│  ████░░░░░░░░░░░░  (level progress)              │
├──────────────────────────────────────────────────┤
│  ┌────────────────────────────────────────────┐  │
│  │  📖 The Story                               │  │
│  │  "Jamie is playing Minecraft when a         │  │  ← story card, --bg-page bg
│  │   stranger sends a message..."              │  │
│  └────────────────────────────────────────────┘  │
│                                                  │
│  ┌────────────────────────────────────────────┐  │
│  │  🚨 What should Jamie do?                  │  │  ← scenario card, prominent
│  │                                             │  │
│  │  [A] Tell the stranger your home address   │  │  ← option buttons
│  │  [B] Ignore and tell a trusted adult       │  │
│  │  [C] Click the link they sent you          │  │
│  └────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────┘
```

**Story Card:**

```css
.story-card {
  background: var(--bg-page);
  border-left: 4px solid var(--secondary);
  border-radius: 0 var(--card-radius) var(--card-radius) 0;
  padding: var(--card-padding);
  margin-bottom: 20px;
  font-style: italic;
  color: var(--text-secondary);
  font-size: var(--font-size-sub);
}
.story-card .story-label {
  font-style: normal;
  font-weight: 700;
  color: var(--secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.75rem;
  margin-bottom: 8px;
}
```

**Scenario Card:**

```css
.scenario-card {
  background: var(--bg-card);
  border: var(--border-width) var(--border-style) var(--primary);
  border-radius: var(--card-radius);
  padding: var(--card-padding);
  box-shadow: var(--shadow-card);
}
.scenario-question {
  font-size: var(--font-size-sub);
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 20px;
  line-height: var(--line-height);
}
```

**Option Buttons (A/B/C):**

```css
.options-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.option-btn {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  width: 100%;
  padding: var(--btn-padding);
  font-size: var(--font-size-option);
  font-family: var(--font-base);
  font-weight: 500;
  color: var(--text-primary);
  background: var(--bg-page);
  border: var(--border-width) var(--border-style) #CBD5E1;
  border-radius: var(--btn-radius);
  cursor: pointer;
  text-align: left;
  line-height: var(--line-height);
  transition: all var(--transition-speed) ease;
  min-height: var(--min-tap-target, 52px);
}
.option-btn:hover:not(:disabled) {
  border-color: var(--primary);
  background: color-mix(in srgb, var(--primary) 6%, var(--bg-page));
  transform: translateX(4px);
}
.option-btn:disabled { cursor: default; }

/* Letter badge on each option */
.option-label {
  min-width: 28px; height: 28px;
  border-radius: 50%;
  background: var(--primary);
  color: var(--text-on-primary);
  font-weight: 700;
  font-size: 0.85rem;
  display: flex; align-items: center; justify-content: center;
  flex-shrink: 0;
}

/* After answer reveal */
.option-btn.correct {
  background: var(--correct-bg);
  border-color: var(--correct-border);
  color: var(--correct-text);
}
.option-btn.wrong {
  background: var(--wrong-bg);
  border-color: var(--wrong-border);
  color: var(--wrong-text);
}
.option-btn.correct .option-label { background: var(--correct-border); }
.option-btn.wrong   .option-label { background: var(--wrong-border); }
```

**Level Progress Bar (in scenario header):**

```css
.level-progress-track {
  height: 6px;
  background: rgba(0,0,0,0.1);
}
.level-progress-fill {
  height: 100%;
  background: var(--progress-color);
  transition: width 0.4s ease;
}
```

---

### 4.5 Result Overlay (Feedback)

**Mechanic:** Semi-transparent overlay slides up from bottom — does NOT navigate away.

```
┌──────────────────────────────────────────────────┐
│ ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒ │
│ ▒▒▒▒▒▒▒▒▒ (dimmed scenario behind) ▒▒▒▒▒▒▒▒▒▒ │
│ ┌──────────────────────────────────────────────┐│
│ │  ✅  GREAT JOB!              +100 XP  ⭐⭐⭐ ││
│ │                                              ││  ← slides up from bottom
│ │  "Correct! Telling a trusted adult is the    ││
│ │   right thing to do. Strangers online..."    ││
│ │                                              ││
│ │  ┌──────────────────────────────────────┐   ││
│ │  │  💡 Safety Tip                        │   ││
│ │  │  "Never share your real name, school  │   ││
│ │  │   or home address with people you     │   ││
│ │  │   don't know in real life."           │   ││
│ │  └──────────────────────────────────────┘   ││
│ │                                              ││
│ │  [  Next Level  →  ]                        ││
│ └──────────────────────────────────────────────┘│
└──────────────────────────────────────────────────┘
```

**Result Overlay CSS:**

```css
.result-overlay {
  position: fixed;
  inset: 0;
  background: var(--overlay-bg);
  display: flex;
  align-items: flex-end;
  z-index: 200;
  animation: fadeIn 0.2s ease;
}
.result-panel {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  background: var(--bg-card);
  border-radius: var(--card-radius) var(--card-radius) 0 0;
  padding: var(--card-padding);
  animation: slideUp 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
}
@keyframes slideUp {
  from { transform: translateY(100%); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
}
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

.result-badge {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.3rem;
  font-weight: 800;
  padding: 10px 20px;
  border-radius: 999px;
  margin-bottom: 16px;
}
.result-badge.correct {
  background: var(--correct-bg);
  color: var(--correct-text);
  border: 2px solid var(--correct-border);
}
.result-badge.wrong {
  background: var(--wrong-bg);
  color: var(--wrong-text);
  border: 2px solid var(--wrong-border);
}

.xp-earned {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--progress-color);
  animation: popIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) 0.2s both;
}
@keyframes popIn {
  from { transform: scale(0); opacity: 0; }
  to   { transform: scale(1); opacity: 1; }
}

.feedback-text {
  font-size: var(--font-size-sub);
  color: var(--text-secondary);
  margin: 12px 0 20px;
  line-height: var(--line-height);
}
```

**Tip Card Component:**

```css
.tip-card {
  background: var(--tip-bg);
  border: 1px solid var(--tip-border);
  border-left: 4px solid var(--tip-border);
  border-radius: var(--btn-radius);
  padding: 16px 20px;
  margin-bottom: 20px;
}
.tip-card .tip-label {
  font-weight: 700;
  color: var(--tip-text);
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 6px;
  display: flex;
  align-items: center;
  gap: 6px;
}
.tip-card .tip-body {
  color: var(--tip-text);
  font-size: var(--font-size-option);
  line-height: var(--line-height);
}
/* Seniors: larger tip for readability */
[data-mode="seniors"] .tip-card .tip-body {
  font-size: 1.1rem;
}
```

---

### 4.6 Final Score Screen

**Layout:** Full-page celebration screen.

```
┌──────────────────────────────────────────────────┐
│                                                  │
│              🎉  You did it!                     │
│           Alex is a CyberGuard!                  │
│                                                  │
│           ⭐  ⭐  ⭐  ⭐  ⭐                       │  ← animated stars drop in
│                                                  │
│     ┌──────────────────────────────────────┐    │
│     │   Total Score       850 XP           │    │  ← score summary card
│     │   Correct Answers   5 / 6            │    │
│     │   Accuracy          83%              │    │
│     │   🏆 Badge Earned:  Cyber Rookie     │    │
│     └──────────────────────────────────────┘    │
│                                                  │
│   [  Play Another Mode  ]  [  Print / Save  ]   │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Badge System:**

| Accuracy | Badge (all modes) | Icon |
|---|---|---|
| 100% | CyberGuard Champion | 🏆 |
| 80–99% | Cyber Defender | 🛡️ |
| 60–79% | Cyber Rookie | 🎖️ |
| < 60% | Keep Learning! | 📚 |

**Badge display specific per mode:**

| Mode | Badge label style |
|---|---|
| kids | Large emoji, pastel circle, "You're a Super CyberGuard!" |
| teens | Pixel-art styled border, dark bg, glow effect |
| adults | Clean card, professional tone "Cybersecurity Awareness Certified" |
| seniors | Very large text, green confirmed checkmark, "Well done!" |

**Final Score Card CSS:**

```css
.final-score-card {
  background: var(--bg-card);
  border-radius: var(--card-radius);
  border: var(--border-width) var(--border-style) var(--primary);
  padding: var(--card-padding);
  box-shadow: var(--shadow-card);
  margin: 24px 0;
  text-align: center;
}
.score-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #E2E8F0;
  font-size: var(--font-size-option);
}
.score-row:last-child { border-bottom: none; }
.score-row .label { color: var(--text-secondary); }
.score-row .value { font-weight: 700; color: var(--text-primary); }

.star-row {
  display: flex;
  justify-content: center;
  gap: 8px;
  font-size: 2.5rem;
  margin: 20px 0;
}
/* Stars animate in one by one */
.star-row .star {
  animation: starDrop 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) both;
}
.star-row .star:nth-child(1) { animation-delay: 0.1s; }
.star-row .star:nth-child(2) { animation-delay: 0.25s; }
.star-row .star:nth-child(3) { animation-delay: 0.4s; }
.star-row .star:nth-child(4) { animation-delay: 0.55s; }
.star-row .star:nth-child(5) { animation-delay: 0.7s; }
@keyframes starDrop {
  from { transform: scale(0) rotate(-30deg); opacity: 0; }
  to   { transform: scale(1) rotate(0deg);   opacity: 1; }
}
```

**Confetti Effect (JS only — lightweight, no library):**

Triggered on final screen load. 30 `<div>` elements with random `left`, `animation-duration`, and `background-color` drawn from mode's color palette, falling from top with `@keyframes confettiFall`.

---

## 5. Age-Specific Visual Themes — Full Detail

### 5.1 Kids (7–12) — Cartoon/Adventure

**Visual language:**
- Rounded, bubbly everything — `border-radius: 24px` on cards
- Dashed borders everywhere (`--border-style: dashed`)
- Bright coral/yellow/green palette, warm cream background
- Comic Sans or Chalkboard font (fallback: Nunito from system)
- Large emoji used as dividers and decorations
- Option buttons have big coloured letter labels (A/B/C in circles)
- Scenario illustrated with a large scene emoji (📱, 💻, 🎮) at top of card
- Wrong answer: cartoon "Oops!" text + sad emoji, no harsh language
- Correct answer: "Amazing! 🎉" text, confetti burst CSS animation
- Characters: Pixel the Robot (🤖), Sunny the Fox (🦊)

**Unique UI element — "Buddy Hint" button:**
A small floating `?` button (bottom-right, always visible) that shows a simplified version of the tip without spoiling the answer. Only for kids mode.

```css
.buddy-hint {
  position: fixed;
  bottom: 24px; right: 24px;
  width: 52px; height: 52px;
  border-radius: 50%;
  background: var(--secondary);
  color: var(--text-primary);
  font-size: 1.5rem;
  font-weight: 900;
  border: 3px solid var(--primary);
  box-shadow: var(--shadow-btn);
  cursor: pointer;
  animation: wobble 3s ease-in-out infinite;
  z-index: 150;
}
@keyframes wobble {
  0%,100% { transform: rotate(0deg); }
  20%      { transform: rotate(-8deg); }
  40%      { transform: rotate(8deg); }
  60%      { transform: rotate(-4deg); }
}
```

### 5.2 Teens (13–17) — Gaming/Hacker Aesthetic

**Visual language:**
- Dark near-black background (`#0F0F1A`)
- Neon purple + cyan palette with glow `box-shadow`
- Monospace accent text for "system" elements (level IDs, scores)
- Option buttons styled like UI cards in a RPG inventory
- Progress bar styled as "XP bar" with gradient fill
- Correct answer: screen flash cyan tint + "+100 XP" floats up
- Wrong answer: red screen flash + "THREAT DETECTED" banner (fun, not scary)
- "Achievements" language instead of "levels"
- Scenario framed as a "mission briefing" with `MISSION: ` prefix
- All caps accent labels: `LEVEL 3 · MISSION BRIEFING`

**Unique UI element — Threat Meter:**
A horizontal bar (red gradient) that fills with each wrong answer. Visual tension. No functional penalty — purely atmospheric.

```css
.threat-meter {
  height: 8px;
  background: linear-gradient(90deg, #10B981, #F59E0B, #DC2626);
  border-radius: 4px;
  position: relative;
}
.threat-needle {
  position: absolute;
  top: -4px;
  width: 4px; height: 16px;
  background: white;
  border-radius: 2px;
  transition: left 0.5s ease;
  transform: translateX(-50%);
}
```

### 5.3 Adults (18–45) — Professional Clean

**Visual language:**
- Light `#F8FAFC` background — clean, corporate feel
- Professional blue `#1D4ED8` — trustworthy, authoritative
- No novelty fonts — Inter/Segoe UI
- Scenario cards resemble email client or message thread UI
- Phishing email scenarios rendered as a realistic email preview:

```css
.email-preview {
  background: #fff;
  border: 1px solid #CBD5E1;
  border-radius: 8px;
  font-family: 'Courier New', monospace;
  font-size: 0.85rem;
  padding: 16px;
  margin: 12px 0;
}
.email-preview .from   { color: #475569; margin-bottom: 4px; }
.email-preview .subject{ font-weight: 700; color: var(--text-primary); }
.email-preview .body   { color: var(--text-secondary); margin-top: 10px; }
/* Red warning badge if scenario email is phishing */
.email-preview.suspicious {
  border-color: var(--wrong-border);
  background: #FFF5F5;
}
.phishing-flag {
  display: inline-block;
  background: var(--wrong-border);
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  padding: 2px 8px;
  border-radius: 4px;
  margin-left: 8px;
  text-transform: uppercase;
  vertical-align: middle;
}
```

- Singapore-specific context: PayNow logos, DBS/OCBC bank email headers, SingPass branding
- Tip cards styled as professional "Security Advisory" callouts
- Final screen: "Cybersecurity Awareness Certificate" badge, printable

### 5.4 Seniors (46–65+) — Large/Clear/Simple

**Visual language:**
- Pure white background, maximum contrast black text
- Forest green primary — calming, non-threatening
- Georgia/serif — familiar, readable, like a newspaper
- Font sizes elevated across the board (base 20px, headings 2.2rem)
- Line-height 1.8 — generous spacing
- Large tap targets minimum 60px (`--min-tap-target: 60px`)
- Option buttons full width, very tall, left-aligned text
- NO jargon — "People who pretend to be your bank" not "vishing"
- Every scary scenario includes a reassurance line: "This happens to many people — knowing what to do keeps you safe."
- "Red flags" list displayed visually as bullet points with ⚠️

**Unique UI elements:**

**"Stop & Think" pause button** — large, always visible, pauses game:
```css
.stop-think-btn {
  position: fixed;
  bottom: 24px; left: 24px;
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 700;
  background: var(--accent);  /* alert red */
  color: white;
  border: none;
  border-radius: var(--btn-radius);
  cursor: pointer;
  min-height: 60px;
  z-index: 150;
}
```

**Emergency contacts card** at end of each level:
```
┌──────────────────────────────────────┐
│  📞 If you're unsure, call:          │
│  • A family member you trust         │
│  • ScamShield Helpline: 1800-722-6688│
│  • Singapore Police: 999             │
└──────────────────────────────────────┘
```

**Large icon row** for visual comprehension alongside text:

```css
.icon-cue-row {
  display: flex;
  align-items: center;
  gap: 16px;
  font-size: 2.5rem;
  margin: 12px 0;
}
.icon-cue-row .cue-label {
  font-size: 1rem;
  color: var(--text-secondary);
}
```

---

## 6. Animations and Transitions Reference

| Event | Animation | Duration | Easing |
|---|---|---|---|
| Screen change | `fadeIn` (opacity 0→1) | 300ms | ease |
| Result panel appears | `slideUp` (Y+100%→0) | 350ms | cubic-bezier(0.34, 1.56, 0.64, 1) |
| XP bar fill | CSS `width` transition | 600ms | cubic-bezier(0.34, 1.56, 0.64, 1) |
| Option hover | `translateX(4px)` | 150ms | ease |
| Option selected (correct) | Flash green background | 200ms | ease |
| Option selected (wrong) | Shake `@keyframes shake` | 400ms | ease |
| Stars drop on final screen | `starDrop` staggered | 400ms each | cubic-bezier(0.34, 1.56, 0.64, 1) |
| XP number pop | `popIn` scale 0→1 | 400ms | cubic-bezier(0.34, 1.56, 0.64, 1) |
| Confetti | CSS fall, 30 elements | 3s loop | linear |
| Level node pulse | `pulse-border` | 2s infinite | ease-in-out |
| Kids buddy hint | `wobble` rotate | 3s infinite | ease-in-out |
| Logo shield | `pulse` scale | 3s infinite | ease-in-out |
| Page background | `hue-rotate` gradient | 12s infinite | linear |
| Teens screen flash | `flashCyan` opacity | 200ms | ease |

**Shake animation (wrong answer):**
```css
@keyframes shake {
  0%,100% { transform: translateX(0); }
  20%      { transform: translateX(-8px); }
  40%      { transform: translateX(8px); }
  60%      { transform: translateX(-6px); }
  80%      { transform: translateX(6px); }
}
.option-btn.wrong { animation: shake 0.4s ease; }
```

**Teens flash (correct):**
```css
@keyframes flashCyan {
  0%,100% { background: transparent; }
  50%      { background: rgba(6,182,212,0.15); }
}
[data-mode="teens"] .scenario-card.correct-flash {
  animation: flashCyan 0.3s ease;
}
```

**Motion preference — ALWAYS include:**
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 7. Accessibility — Seniors-First, Applied Universally

### WCAG 2.1 AA Requirements

| Requirement | Implementation |
|---|---|
| Color contrast ≥ 4.5:1 (text) | Seniors: black on white = 21:1. All modes checked. |
| Tap targets ≥ 44×44px | `min-height: var(--min-tap-target)` on all interactive elements. Seniors: 60px |
| Focus visible | Custom focus ring: `outline: 3px solid var(--primary); outline-offset: 3px` on all focusable elements |
| Keyboard navigable | All interactivity accessible via Tab + Enter/Space |
| Screen reader labels | `aria-label` on all icon-only buttons; `role="status"` on score updates; `aria-live="polite"` on feedback |
| Reduced motion | `@media (prefers-reduced-motion)` kills all animations |
| Font size | Seniors: 20px base, never below 16px anywhere |
| Line spacing | Seniors: 1.8 line-height |
| No color alone | Correct/wrong also indicated by icon (✅ ❌) + text, not just color |
| Form labels | Name input has explicit `<label>` element, not placeholder-only |
| Timeout warning | If a timer is ever added — warn 60s before expiry (no timer in current design) |

### Focus Ring (all modes):
```css
:focus-visible {
  outline: 3px solid var(--primary);
  outline-offset: 3px;
  border-radius: 4px;
}
/* Remove for mouse users */
:focus:not(:focus-visible) { outline: none; }
```

### ARIA live regions:
```html
<div aria-live="polite" aria-atomic="true" id="score-announce" class="sr-only"></div>
<div aria-live="assertive" id="feedback-announce" class="sr-only"></div>
```

```css
.sr-only {
  position: absolute;
  width: 1px; height: 1px;
  padding: 0; margin: -1px;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
}
```

---

## 8. Responsive Layout

```css
/* Mobile-first, single breakpoint */
.game-container {
  width: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 16px;
}

/* Age cards: 2-col on mobile, 4-col on desktop */
.age-cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
@media (min-width: 640px) {
  .age-cards-grid { grid-template-columns: repeat(4, 1fr); }
}

/* Options: full-width always */
.options-list { width: 100%; }

/* Seniors: even more generous mobile padding */
@media (max-width: 480px) {
  [data-mode="seniors"] { --card-padding: 24px; }
  [data-mode="seniors"] .option-btn { font-size: 1.1rem; }
}
```

---

## 9. HTML Screen Architecture (Single File)

All screens live in the DOM simultaneously as `<section>` elements with `hidden` attribute toggled by JS.

```html
<body data-mode="">                          <!-- JS sets data-mode on age select -->
  <div aria-live="polite" ...></div>         <!-- SR announcer -->

  <section id="screen-landing">...</section>
  <section id="screen-profile" hidden>...</section>
  <section id="screen-levelmap" hidden>...</section>
  <section id="screen-scenario" hidden>...</section>
  <section id="screen-final" hidden>...</section>

  <!-- Overlay — injected by JS on answer -->
  <div id="result-overlay" hidden role="dialog" aria-modal="true">...</div>

  <!-- Floating mode-specific buttons -->
  <button id="buddy-hint" hidden class="buddy-hint">?</button>      <!-- kids -->
  <button id="stop-think" hidden class="stop-think-btn">⏸ Stop & Think</button> <!-- seniors -->
</body>
```

**JS screen navigation pattern:**

```js
function showScreen(id) {
  document.querySelectorAll('section[id^="screen-"]')
    .forEach(s => s.hidden = true);
  document.getElementById(id).hidden = false;
  window.scrollTo(0, 0);
}

function setMode(mode) {
  document.body.dataset.mode = mode;
  document.getElementById('buddy-hint').hidden = (mode !== 'kids');
  document.getElementById('stop-think').hidden = (mode !== 'seniors');
}
```

---

## 10. State Object (JS)

```js
const state = {
  mode: null,           // 'kids' | 'teens' | 'adults' | 'seniors'
  playerName: '',
  playerAvatar: '',
  currentLevel: 0,
  totalLevels: 0,
  score: 0,
  xp: 0,
  results: [],          // [{levelId, correct, pointsEarned}]
  levelCompleted: [],   // boolean array
};
```

---

## 11. Component Checklist (Build Order)

1. CSS variable system (all 4 mode blocks)
2. Landing screen + age card components
3. `setMode()` function — verify theme swap works
4. Profile setup screen + avatar picker
5. Level map screen + node components + XP bar
6. Scenario screen — story card + scenario card + option buttons
7. Answer evaluation logic + option state classes (correct/wrong/disabled)
8. Result overlay — slide-up panel + tip card
9. Final score screen — stars + badge + score summary
10. Accessibility layer — ARIA, focus rings, sr-only announcer
11. Responsive tweaks
12. Animations + `prefers-reduced-motion` guard
13. Age-specific extras: buddy hint (kids), threat meter (teens), email preview (adults), emergency contacts (seniors)
14. Confetti JS (final screen)
15. Print stylesheet (final screen certificate)

---

## 12. Print Stylesheet (Final Screen Certificate)

```css
@media print {
  body * { visibility: hidden; }
  #screen-final, #screen-final * { visibility: visible; }
  #screen-final { position: fixed; top: 0; left: 0; width: 100%; }
  .btn-primary, .btn-secondary { display: none; }
  .final-score-card { box-shadow: none; border: 2px solid #000; }
}
```
