// ═══════════════════════════════════════════════════════════════════════════════
// CyberGuard — Main Application
// Auth · Profile · Game Engine · Leaderboard · Badges
// ═══════════════════════════════════════════════════════════════════════════════

// ─── STATE ───────────────────────────────────────────────────────────────────
const App = {
  user:      null,
  profile:   null,
  session:   null,   // current game session DB record
  game: {
    mission:      null,
    currentNode:  'start',   // for decision-tree
    currentQ:     0,         // for quiz
    score:        0,
    maxScore:     0,
    startTime:    null,
    foundThreats: [],        // for spot-threat
    answered:     false,
  },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const $ = id => document.getElementById(id);
const el = (tag, cls, html) => { const e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; };

// ─── XP MULTIPLIER ───────────────────────────────────────────────────────────
// Age group difficulty: kids=1, teens=2, seniors=2, adults=3
// Mission difficulty level: beginner=1, intermediate=2, hard=3, expert=4
// Final XP = baseXP × ageGroupMult × levelMult
const GROUP_DIFFICULTY = { kids: 1, teens: 2, seniors: 2, adults: 3 };
const LEVEL_DIFFICULTY = { beginner: 1, intermediate: 2, hard: 3, expert: 4 };

function ageGroupMult(playerGroup, missionGroup) {
  const diff = (GROUP_DIFFICULTY[missionGroup] || 1) - (GROUP_DIFFICULTY[playerGroup] || 1);
  if (diff <= -2) return 0.50;
  if (diff === -1) return 0.75;
  if (diff ===  0) return 1.00;
  if (diff ===  1) return 1.50;
  return 2.00;
}

function levelMult(playerLevel, missionDifficulty) {
  // missionDifficulty is the string from scenarios: 'Beginner','Intermediate','Hard','Expert'
  const mKey = (missionDifficulty || 'Beginner').toLowerCase();
  const diff = (LEVEL_DIFFICULTY[mKey] || 1) - (LEVEL_DIFFICULTY[playerLevel] || 1);
  if (diff <= -2) return 0.50;
  if (diff === -1) return 0.75;
  if (diff ===  0) return 1.00;
  if (diff ===  1) return 1.50;
  return 2.00;
}

function xpMultiplier(playerGroup, missionGroup, playerLevel, missionDifficulty) {
  return ageGroupMult(playerGroup, missionGroup) * levelMult(playerLevel, missionDifficulty);
}

// ─── INTRO STORYLINE ─────────────────────────────────────────────────────────
let _introSlide = 0;
const INTRO_TOTAL = 5;

function showIntro() {
  _introSlide = 0;
  _renderIntroSlide();
  showScreen('screen-intro');
}

function _renderIntroSlide() {
  for (let i = 0; i < INTRO_TOTAL; i++) {
    const s = $(`intro-slide-${i}`);
    if (s) s.style.display = i === _introSlide ? 'block' : 'none';
  }
  const dots = $('intro-dots');
  if (dots) {
    dots.innerHTML = Array.from({ length: INTRO_TOTAL }, (_, i) =>
      `<span class="intro-dot ${i === _introSlide ? 'active' : ''}"></span>`
    ).join('');
  }
  const backBtn = $('intro-back-btn');
  const nextBtn = $('intro-next-btn');
  if (backBtn) backBtn.style.display = _introSlide > 0 ? 'inline-flex' : 'none';
  if (nextBtn) nextBtn.textContent = _introSlide === INTRO_TOTAL - 1 ? "Let's Go! 🚀" : 'Next →';
}

function introNav(dir) {
  _introSlide += dir;
  if (_introSlide >= INTRO_TOTAL) { completeIntro(); return; }
  if (_introSlide < 0) _introSlide = 0;
  _renderIntroSlide();
}

function skipIntro() { completeIntro(); }

async function completeIntro() {
  if (App.user) {
    // fire-and-forget — don't block navigation if column missing
    db.from('profiles').update({ intro_completed: true }).eq('id', App.user.id)
      .then(() => { if (App.profile) App.profile.intro_completed = true; })
      .catch(() => {});
  }
  try { renderDashboard(); } catch(e) { console.error('renderDashboard error:', e); }
  showScreen('screen-dashboard');
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const s = $(id);
  if (!s) return;
  s.classList.add('active');
  s.scrollTop = 0;
  // GSAP fade-in if available
  if (window.gsap) {
    gsap.fromTo(s, { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.28, ease: 'power2.out' });
  }
}

function setTheme(theme = 'default') {
  document.body.setAttribute('data-theme', theme);
}

function toast(msg, type = 'info') {
  const wrap = $('toast-container') || (() => { const d = el('div','toast-container'); document.body.appendChild(d); return d; })();
  const t = el('div', `toast toast-${type}`, msg);
  wrap.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 3500);
}

function loading(show) {
  const ov = $('loading-overlay');
  if (ov) ov.style.display = show ? 'flex' : 'none';
}

function formatScore(n) { return n.toLocaleString(); }

// ─── AUTH ────────────────────────────────────────────────────────────────────
async function initAuth() {
  // Detect Supabase password recovery redirect (#type=recovery in hash)
  // Must check BEFORE getSession() so the recovery session doesn't trigger loadProfile()
  const isRecovery = window.location.hash.includes('type=recovery');
  if (isRecovery) {
    // Clear hash so refresh doesn't re-trigger
    history.replaceState(null, '', window.location.pathname + window.location.search);
    showScreen('screen-reset');
  } else {
    const { data: { session } } = await db.auth.getSession();
    if (session) {
      App.user = session.user;
      await loadProfile();
    } else {
      showScreen('screen-landing');
    }
  }

  db.auth.onAuthStateChange(async (event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      App.user = session?.user || null;
      showScreen('screen-reset');
      return;
    }
    // USER_UPDATED fires when updateUser() is called — handled by the calling function
    if (event === 'USER_UPDATED') return;
    App.user = session?.user || null;
    if (App.user) {
      await loadProfile();
    } else {
      App.profile = null;
      showScreen('screen-landing');
    }
  });
}

async function signUp(email, password) {
  loading(true);
  const { data, error } = await db.auth.signUp({ email, password });
  loading(false);
  if (error) { toast(error.message, 'error'); return false; }

  // If Supabase returned a session, email confirmation is disabled → skip OTP
  if (data.session) {
    App.user = data.user;
    App.justSignedUp = true;
    showScreen('screen-profile-setup');
    renderProfileSetup();
    toast('Account created! Set up your profile 🎉', 'success');
    return true;
  }

  // Otherwise show OTP verification screen
  App.pendingEmail = email;
  $('verify-email-display').textContent = email;
  $('otp-input').value = '';
  showScreen('screen-verify');
  toast('Check your email for the 6-digit code 📧', 'info');
  return true;
}

async function handleVerifyOtp(e) {
  e.preventDefault();
  const token = $('otp-input').value.trim();
  if (token.length !== 6) { toast('Enter the 6-digit code from your email', 'error'); return; }

  loading(true);
  const { data, error } = await db.auth.verifyOtp({
    email: App.pendingEmail,
    token,
    type: 'signup',
  });
  loading(false);

  if (error) { toast(error.message, 'error'); return; }

  App.user = data.user;
  App.justSignedUp = true;
  toast('Email verified! Set up your profile 🎉', 'success');
  showScreen('screen-profile-setup');
  renderProfileSetup();
}

async function resendOtp() {
  if (!App.pendingEmail) return;
  loading(true);
  const { error } = await db.auth.resend({ type: 'signup', email: App.pendingEmail });
  loading(false);
  if (error) { toast(error.message, 'error'); return; }
  toast('Code resent — check your inbox 📧', 'info');
}

async function signIn(username, password) {
  loading(true);

  // Look up email by username from profiles table
  const { data: profile, error: lookupErr } = await db
    .from('profiles')
    .select('email')
    .eq('username', username)
    .single();

  if (lookupErr || !profile?.email) {
    loading(false);
    toast('Username not found', 'error');
    return false;
  }

  const { data, error } = await db.auth.signInWithPassword({ email: profile.email, password });
  loading(false);
  if (error) {
    if (error.message?.toLowerCase().includes('not confirmed') || error.code === 'email_not_confirmed') {
      toast('Email not confirmed — check your inbox or spam for the verification link', 'error');
    } else if (error.message?.toLowerCase().includes('invalid') || error.code === 'invalid_credentials') {
      toast('Incorrect password', 'error');
    } else {
      toast(error.message || 'Login failed', 'error');
    }
    return false;
  }
  App.user = data.user;
  await loadProfile();
  return true;
}

async function signOut() {
  await db.auth.signOut();
  App.user = null;
  App.profile = null;
  App.browsedGroup = null;
  setTheme('default');
  showScreen('screen-landing');
  toast('Signed out. See you next time! 👋');
}

// ─── PROFILE ─────────────────────────────────────────────────────────────────
async function loadProfile() {
  if (!App.user) return;
  const { data, error } = await db
    .from('profiles')
    .select('*')
    .eq('id', App.user.id)
    .single();

  if (error) {
    // Permission denied = Supabase RLS / GRANT not configured
    if (error.code === '42501' || (error.message && error.message.toLowerCase().includes('permission denied'))) {
      toast('Database permission error. Ask your admin to run the GRANT statements in Supabase SQL Editor.', 'error');
      showScreen('screen-landing');
      return;
    }
    // No profile found — if it's a fresh signup the flag is set; otherwise stale session → sign out
    if (App.justSignedUp) {
      showScreen('screen-profile-setup');
      renderProfileSetup();
    } else {
      await db.auth.signOut();
      App.user = null;
      showScreen('screen-landing');
    }
    return;
  }
  if (!data) {
    if (App.justSignedUp) {
      showScreen('screen-profile-setup');
      renderProfileSetup();
    } else {
      await db.auth.signOut();
      App.user = null;
      showScreen('screen-landing');
    }
    return;
  }

  App.profile = data;
  setTheme(AGE_GROUPS[data.age_group]?.theme || 'default');
  // Re-apply visual theme: saved user choice wins; fall back to age-group auto-theme
  const savedVisual = localStorage.getItem('cg-vtheme');
  if (savedVisual && savedVisual !== 'default') {
    applyVisualTheme(savedVisual);
  } else {
    const ageVisualMap = { kids: 'kiddy', teens: 'teen', adults: 'adult', seniors: 'default' };
    const autoTheme = ageVisualMap[data.age_group];
    if (autoTheme) applyVisualTheme(autoTheme);
  }
  renderDashboard();
  showScreen('screen-dashboard');
}

async function createProfile(username, ageGroup, avatar, level = 'beginner', hobby = 'general') {
  loading(true);

  // Step 1: insert core fields (always present in schema)
  const { data, error } = await db.from('profiles').insert({
    id:        App.user.id,
    email:     App.user.email,
    username,
    age_group: ageGroup,
    avatar,
  }).select().single();

  if (error) {
    loading(false);
    console.error('createProfile error:', JSON.stringify(error));
    if (error.code === '23505') {
      toast('Username already taken — try another', 'error');
    } else {
      toast(`[${error.code}] ${error.message}`, 'error');
    }
    return false;
  }

  // Step 2: update extended fields (level, hobby) — added via migration
  await db.from('profiles').update({ level, hobby }).eq('id', App.user.id);

  loading(false);
  App.justSignedUp = false;
  App.profile = { ...data, level, hobby };
  setTheme(AGE_GROUPS[ageGroup]?.theme || 'default');
  toast(`Welcome to CyberGuard, ${username}! 🎉`, 'success');
  showIntro();
  return true;
}

// ─── DASHBOARD ───────────────────────────────────────────────────────────────
// Track which group the admin is currently browsing (defaults to own group)
App.browsedGroup = null;

function renderDashboard(overrideGroup) {
  const p = App.profile;
  if (!p) return;

  // All users can browse any group; default to their own group
  const activeGroup = overrideGroup || App.browsedGroup || p.age_group;
  App.browsedGroup = activeGroup;

  const missions = getMissions(activeGroup);

  // Show admin nav button if admin
  const adminBtn = $('nav-admin-btn');
  if (adminBtn) adminBtn.style.display = p.is_admin ? 'inline-flex' : 'none';

  // Header
  $('dash-avatar').textContent = p.avatar;
  $('dash-username').textContent = p.username;
  const lv = LEVELS[p.level || 'beginner'];
  const hb = HOBBIES.find(h => h.id === (p.hobby || 'general'));
  $('dash-group').textContent = `${AGE_GROUPS[p.age_group].emoji} ${AGE_GROUPS[p.age_group].label} · ${lv.emoji} ${lv.label}`;
  $('dash-score').textContent = formatScore(p.total_score);
  $('dash-missions').textContent = p.missions_completed;
  $('dash-badges').textContent = (p.badges || []).length;

  // Group browser tabs (all users)
  let groupBar = $('admin-group-bar');
  if (!groupBar) {
    groupBar = el('div', 'admin-group-bar', '');
    groupBar.id = 'admin-group-bar';
    const grid = $('mission-grid');
    grid.parentNode.insertBefore(groupBar, grid);
  }
  groupBar.innerHTML = Object.entries(AGE_GROUPS).map(([key, g]) => {
    const mult = parseFloat(ageGroupMult(p.age_group, key).toFixed(2));
    const tag = mult > 1 ? `<span class="xp-mult-tag bonus">🔥×${mult}</span>`
               : mult < 1 ? `<span class="xp-mult-tag penalty">📉×${mult}</span>`
               : '';
    return `<button class="group-tab-btn ${key === activeGroup ? 'active' : ''}" onclick="renderDashboard('${key}')">
      ${g.emoji} ${g.label}${tag}
    </button>`;
  }).join('');

  // Mission cards
  const grid = $('mission-grid');
  grid.innerHTML = '';
  missions.forEach(m => {
    const card = buildMissionCard(m, activeGroup);
    grid.appendChild(card);
  });
}

function buildMissionCard(mission, ageGroup) {
  const types = { quiz: { label: 'Quiz', icon: '❓', color: 'var(--accent)' }, 'spot-threat': { label: 'Spot the Threat', icon: '🔍', color: '#f59e0b' }, 'decision-tree': { label: 'Decision Tree', icon: '🌿', color: '#10b981' } };
  const t = types[mission.type];
  const group = ageGroup || App.profile?.age_group;
  const playerGroup = App.profile?.age_group;
  const playerLevel = App.profile?.level || 'beginner';
  const mult = parseFloat(xpMultiplier(playerGroup, group, playerLevel, mission.difficulty).toFixed(2));
  const effectiveXP = Math.round(mission.xp * mult);
  const multDisplay = mult !== 1 ? `×${mult}` : '';
  const xpLabel = mult > 1
    ? `<span class="mc-xp bonus">⚡ ${effectiveXP} XP <span class="xp-mult-tag bonus">🔥 ${multDisplay}</span></span>`
    : mult < 1
    ? `<span class="mc-xp penalty">⚡ ${effectiveXP} XP <span class="xp-mult-tag penalty">📉 ${multDisplay}</span></span>`
    : `<span class="mc-xp">⚡ ${effectiveXP} XP</span>`;

  // Hobby relevance tag
  const playerHobby = App.profile?.hobby || 'general';
  const missionTags = mission.tags || [];
  const hobbyMatch = playerHobby !== 'general' && missionTags.includes(playerHobby);
  const hobbyTag = hobbyMatch ? `<span class="hobby-match-tag">✨ Matches your interest</span>` : '';

  const isMandatory = mission.mandatory === true;
  const isFoundationDone = App.profile?.foundational_completed;
  const mandatoryBanner = isMandatory && !isFoundationDone
    ? `<div class="mandatory-banner">📋 Complete First — Foundational Course</div>`
    : isMandatory ? `<div class="mandatory-banner done">✅ Foundation Complete</div>` : '';

  const card = el('div', `mission-card${isMandatory ? ' mission-mandatory' : ''}`);
  card.innerHTML = `
    ${mandatoryBanner}
    <div class="mc-header">
      <span class="mc-icon">${mission.icon}</span>
      <div class="mc-badges">
        <span class="badge" style="background:${t.color}20;color:${t.color};border-color:${t.color}40">${t.icon} ${t.label}</span>
        <span class="badge badge-diff badge-${mission.difficulty.toLowerCase()}">${mission.difficulty}</span>
        ${mission.module === 'foundation' ? '<span class="badge badge-foundation">📚 CS101</span>' : ''}
      </div>
    </div>
    <h3 class="mc-title">${mission.title}</h3>
    <p class="mc-sub">${mission.subtitle}</p>
    ${hobbyTag}
    <div class="mc-footer">
      ${xpLabel}
      <button class="btn btn-primary btn-sm" onclick="startMission('${mission.id}','${group}')">▶ Start Mission</button>
    </div>
  `;
  return card;
}

// ─── MISSION START ────────────────────────────────────────────────────────────
/**
 * Normalize a mission object to the engine's expected format.
 * Handles two quiz question formats:
 *   Format A (original): options have {correct: bool, feedback: string}
 *   Format B (Gemini):   question has {correct: 'optId', feedback: {correct:'', wrong:''}}
 */
function normalizeMission(mission) {
  if (mission.type === 'quiz' && mission.questions) {
    mission.questions = mission.questions.map(q => {
      // Already normalized
      if (q.options && q.options.length && typeof q.options[0].correct === 'boolean') return q;
      // Gemini format: correct is an option ID string, feedback is {correct, wrong} object
      if (typeof q.correct === 'string' && q.options) {
        const correctId = q.correct;
        const fb = q.feedback || {};
        q.options = q.options.map(opt => ({
          ...opt,
          correct:  opt.id === correctId,
          feedback: opt.id === correctId
            ? (fb.correct || '')
            : (fb.wrong   || ''),
        }));
      }
      return q;
    });
  }
  return mission;
}

async function startMission(missionId, ageGroup) {
  // Admin can launch missions from any group; others use their own group
  const group = ageGroup || App.profile.age_group;
  const raw = getMission(group, missionId);
  if (!raw) return;
  const mission = normalizeMission(JSON.parse(JSON.stringify(raw))); // deep-clone before normalizing

  App.game = {
    mission,
    missionGroup: group,
    currentQ:     0,
    currentNode:  'start',
    score:        0,
    maxScore:     mission.type === 'quiz'
      ? mission.questions.reduce((s, q) => s + q.points, 0)
      : mission.type === 'spot-threat'
      ? mission.totalPoints
      : mission.maxScore,
    startTime:    Date.now(),
    foundThreats: [],
    answered:     false,
  };

  // Create DB session
  const { data, error } = await db.from('game_sessions').insert({
    user_id:      App.user.id,
    age_group:    group,
    mission_id:   mission.id,
    mission_type: mission.type,
    score:        0,
    max_score:    App.game.maxScore,
  }).select().single();

  if (!error) App.session = data;

  renderMissionBriefing(mission);
  showScreen('screen-mission-briefing');
}

function renderMissionBriefing(mission) {
  $('brief-icon').textContent = mission.icon;
  $('brief-title').textContent = mission.title;
  $('brief-sub').textContent = mission.subtitle;
  $('brief-text').textContent = mission.briefing;
  $('brief-type').textContent = { quiz: '❓ Quiz', 'spot-threat': '🔍 Spot the Threat', 'decision-tree': '🌿 Decision Tree' }[mission.type];
  $('brief-xp').textContent = `⚡ ${mission.xp} XP`;
  $('brief-diff').textContent = mission.difficulty;
  $('brief-diff').className = `badge badge-diff badge-${mission.difficulty.toLowerCase()}`;
}

function launchMission() {
  const { mission } = App.game;
  SFX.play('whoosh');
  if (mission.type === 'quiz')           renderQuiz();
  else if (mission.type === 'spot-threat')    renderSpotThreat();
  else if (mission.type === 'decision-tree')  renderDecisionTree();
  showScreen('screen-gameplay');
  updateGameHeader();
}

// ─── GAME HEADER ─────────────────────────────────────────────────────────────
function updateGameHeader() {
  const { mission, score, maxScore, currentQ } = App.game;
  $('game-title').textContent = mission.title;
  $('game-score').textContent = `${score} pts`;
  if (mission.type === 'quiz') {
    const total = mission.questions.length;
    $('game-progress-label').textContent = `Q${currentQ + 1} of ${total}`;
    $('game-progress-fill').style.width = `${(currentQ / total) * 100}%`;
  } else {
    $('game-progress-label').textContent = `Score: ${score} / ${maxScore}`;
    $('game-progress-fill').style.width = `${(score / maxScore) * 100}%`;
  }
}

// ─── QUIZ ENGINE ─────────────────────────────────────────────────────────────
function renderQuiz() {
  const { mission, currentQ } = App.game;
  const q = mission.questions[currentQ];
  App.game.answered = false;

  $('gameplay-area').innerHTML = `
    <div class="quiz-container">
      <div class="quiz-story">
        <span class="quiz-story-icon">${q.icon}</span>
        <div class="quiz-story-text">${q.story}</div>
      </div>
      <div class="quiz-scenario">${q.scenario}</div>
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-options" id="quiz-options"></div>
      <div class="quiz-feedback" id="quiz-feedback" style="display:none"></div>
      <div class="quiz-tip" id="quiz-tip" style="display:none">
        <span class="tip-icon">💡</span>
        <div>
          <div class="tip-label">PRO TIP</div>
          <div class="tip-text" id="tip-text-content"></div>
        </div>
      </div>
      <button class="btn btn-primary btn-next" id="btn-next" style="display:none" onclick="nextQuestion()">
        ${currentQ < mission.questions.length - 1 ? 'Next Question →' : '🏁 See Results'}
      </button>
    </div>
  `;

  const letters = ['A','B','C','D'];
  const opts = $('quiz-options');
  q.options.forEach((opt, i) => {
    const btn = el('button', 'quiz-option');
    btn.dataset.opt = opt.id || String(i);
    btn.innerHTML = `<span class="opt-letter">${letters[i]}</span><span class="opt-text">${opt.text}</span>`;
    btn.onclick = () => selectQuizAnswer(btn, opt, q);
    opts.appendChild(btn);
  });
}

async function selectQuizAnswer(btn, opt, q) {
  if (App.game.answered) return;
  App.game.answered = true;

  document.querySelectorAll('.quiz-option').forEach(b => b.disabled = true);
  btn.classList.add(opt.correct ? 'correct' : 'wrong');

  if (!opt.correct) {
    document.querySelectorAll('.quiz-option').forEach(b => {
      const txt = b.querySelector('.opt-text')?.textContent;
      const correct = q.options.find(o => o.text === txt && o.correct);
      if (correct) b.classList.add('correct');
    });
  }

  const pts = opt.correct ? q.points : 0;
  if (opt.correct) {
    App.game.score += pts;
    toast(`+${pts} pts! ✅`, 'success');
    SFX.play('correct');
    // XP burst from clicked button
    const clickedBtn = document.querySelector('.quiz-option.correct');
    if (clickedBtn) {
      clickedBtn.classList.add('pop-correct');
      showXpBurst(pts, clickedBtn);
      setTimeout(() => clickedBtn.classList.remove('pop-correct'), 500);
    }
  } else {
    SFX.play('wrong');
    const clickedBtn = document.querySelector(`.quiz-option[data-opt="${opt.id}"]`);
    if (clickedBtn) {
      clickedBtn.classList.add('shake');
      setTimeout(() => clickedBtn.classList.remove('shake'), 500);
    }
  }

  // Score pop on HUD
  const scoreEl = $('game-score');
  if (scoreEl) { scoreEl.classList.add('score-pop'); setTimeout(() => scoreEl.classList.remove('score-pop'), 600); }

  // DB: log attempt
  if (App.session) {
    await db.from('level_attempts').insert({
      session_id:    App.session.id,
      user_id:       App.user.id,
      question_id:   q.id,
      correct:       opt.correct,
      points_earned: pts,
    });
  }

  const fb = $('quiz-feedback');
  fb.className = `quiz-feedback ${opt.correct ? 'feedback-correct' : 'feedback-wrong'}`;
  fb.innerHTML = `<strong>${opt.correct ? '✅ Correct!' : '❌ Not quite...'}</strong> ${opt.feedback}`;
  fb.style.display = 'flex';

  $('tip-text-content').textContent = q.tip;
  $('quiz-tip').style.display = 'flex';
  $('btn-next').style.display = 'block';

  updateGameHeader();
}

async function nextQuestion() {
  App.game.currentQ++;
  const { mission, currentQ } = App.game;

  if (currentQ >= mission.questions.length) {
    await completeMission();
  } else {
    renderQuiz();
    updateGameHeader();
  }
}

// ─── SPOT-THREAT ENGINE ───────────────────────────────────────────────────────
function renderSpotThreat() {
  const { mission } = App.game;
  const c = mission.content;

  let bodyHtml = '';
  if (mission.template === 'email' || mission.template === 'dm') {
    bodyHtml = buildEmailHtml(c, mission);
  } else if (mission.template === 'sms') {
    bodyHtml = buildSmsHtml(c, mission);
  } else if (mission.template === 'website') {
    bodyHtml = buildWebsiteHtml(c, mission);
  }

  $('gameplay-area').innerHTML = `
    <div class="spot-container">
      <div class="spot-instructions">
        <span>🔍</span>
        <span>Click on every suspicious or dangerous element you can find — <strong>${mission.threats.length} threats</strong> total</span>
      </div>
      <div class="spot-score-bar">
        <span>Threats Found: <strong id="threats-found">0</strong> / ${mission.threats.length}</span>
        <span id="spot-pts">0 / ${mission.totalPoints} pts</span>
      </div>
      <div class="spot-content" id="spot-content">${bodyHtml}</div>
      <div id="threat-popover" class="threat-popover" style="display:none"></div>
      <button class="btn btn-primary btn-next" id="btn-submit-spot" onclick="submitSpotThreat()" style="margin-top:1.5rem">
        Submit Analysis →
      </button>
    </div>
  `;

  // Attach click handlers
  document.querySelectorAll('[data-threat-id]').forEach(el => {
    el.addEventListener('click', e => handleThreatClick(e, el, mission));
  });
}

function buildEmailHtml(c, mission) {
  let rows = '';
  c.body.forEach(item => {
    rows += `<div class="email-row${item.isThreat ? ' threat-zone' : ''}" data-threat-id="${item.isThreat ? item.id : ''}" data-threat-desc="${item.isThreat ? encodeURIComponent(item.threatDesc) : ''}">
      ${item.text}
    </div>`;
  });
  return `
    <div class="email-mock">
      <div class="email-header">
        <div class="email-meta threat-zone" data-threat-id="${c.from?.isThreat ? 'sender_domain' : ''}" data-threat-desc="${c.from?.isThreat ? encodeURIComponent(c.body.find(b=>b.id==='sender_domain')?.threatDesc||'') : ''}">
          <strong>From:</strong> ${c.from?.name} &lt;${c.from?.email}&gt;<br>
          <strong>To:</strong> ${c.to}<br>
          <strong>Subject:</strong> ${c.subject}<br>
          <strong>Date:</strong> ${c.timestamp}
        </div>
      </div>
      <div class="email-body">${rows}</div>
    </div>`;
}

function buildSmsHtml(c, mission) {
  let msgs = '';
  c.messages.forEach(m => {
    msgs += `<div class="sms-bubble${m.isThreat ? ' threat-zone' : ''}" data-threat-id="${m.isThreat ? m.id : ''}" data-threat-desc="${m.isThreat ? encodeURIComponent(m.threatDesc) : ''}">
      ${m.text}
    </div>`;
  });
  return `<div class="sms-mock"><div class="sms-sender">📱 SMS from: ${c.sender}</div><div class="sms-messages">${msgs}</div></div>`;
}

function buildWebsiteHtml(c, mission) {
  let rows = '';
  c.body.forEach(item => {
    const cls = { 'url-bar': 'web-url', 'no-padlock': 'web-no-padlock', 'ad': 'web-ad', 'form': 'web-form', 'safe': 'web-safe', 'download': 'web-download' }[item.type] || '';
    rows += `<div class="web-element ${cls}${item.isThreat ? ' threat-zone' : ''}" data-threat-id="${item.isThreat ? item.id : ''}" data-threat-desc="${item.isThreat ? encodeURIComponent(item.threatDesc) : ''}">
      ${item.text}
    </div>`;
  });
  return `<div class="website-mock"><div class="website-title">🌐 ${c.title}</div>${rows}</div>`;
}

function handleThreatClick(e, element, mission) {
  const threatId = element.dataset.threatId;
  if (!threatId) return;

  const desc = decodeURIComponent(element.dataset.threatDesc || '');

  if (!App.game.foundThreats.includes(threatId)) {
    App.game.foundThreats.push(threatId);
    element.classList.add('threat-found');

    const pts = mission.pointsPerThreat;
    App.game.score += pts;
    toast(`+${pts} pts — Threat found! 🔍`, 'success');
    SFX.play('correct');
    showXpBurst(pts, element);

    $('threats-found').textContent = App.game.foundThreats.length;
    $('spot-pts').textContent = `${App.game.score} / ${mission.totalPoints} pts`;
    updateGameHeader();
  } else {
    SFX.play('wrong');
  }

  // Show popover
  const pop = $('threat-popover');
  pop.innerHTML = desc;
  pop.style.display = 'block';
  const rect = element.getBoundingClientRect();
  pop.style.top  = (element.offsetTop + element.offsetHeight + 8) + 'px';
  pop.style.left = Math.max(0, element.offsetLeft) + 'px';
  setTimeout(() => pop.style.display = 'none', 4000);
}

async function submitSpotThreat() {
  const { mission } = App.game;

  // Reveal missed threats
  mission.threats.forEach(tid => {
    if (!App.game.foundThreats.includes(tid)) {
      const el = document.querySelector(`[data-threat-id="${tid}"]`);
      if (el) el.classList.add('threat-missed');
    }
  });

  await completeMission();
}

// ─── DECISION TREE ENGINE ─────────────────────────────────────────────────────
function renderDecisionTree() {
  const { mission, currentNode } = App.game;
  // Support both `nodes` (original format) and `tree` (Gemini format)
  const nodeMap = mission.nodes || mission.tree;
  const node = nodeMap[currentNode];
  if (!node) return;

  // Support both isEnding flag (original) and question:null+empty choices (Gemini format)
  const isEnding = node.isEnding || (node.question === null && (!node.choices || node.choices.length === 0));
  // Support both text (original) and story (Gemini format)
  const storyText = node.text || node.story || '';
  // If node has a question field, append it
  const questionText = node.question ? `<p class="dt-question"><strong>${node.question}</strong></p>` : '';

  $('gameplay-area').innerHTML = `
    <div class="dt-container">
      <div class="dt-story-card ${isEnding ? 'dt-ending dt-ending-' + (node.endingType || 'ok') : ''}">
        ${node.emoji ? `<span class="dt-emoji">${node.emoji}</span>` : ''}
        <p class="dt-text">${storyText}</p>
        ${questionText}
      </div>
      ${isEnding ? renderDtEnding(node) : renderDtChoices(node)}
    </div>
  `;
}

function renderDtChoices(node) {
  const choices = node.choices || [];
  const html = choices.map((c, i) =>
    `<button class="dt-choice" onclick="chooseDtOption(${i})">${c.text}</button>`
  ).join('');
  return `<div class="dt-choices">${html}</div>`;
}

function renderDtEnding(node) {
  const endClass = { great: 'ending-great', ok: 'ending-ok', bad: 'ending-bad' }[node.endingType] || '';
  // Support both endingText (original) and story (Gemini format for endings)
  const endTitle = node.endingTitle || (node.story ? '' : 'Mission Complete');
  const endText  = node.endingText  || node.story || '';
  return `
    <div class="dt-result ${endClass}">
      ${endTitle ? `<div class="dt-result-title">${endTitle}</div>` : ''}
      <div class="dt-result-text">${endText}</div>
    </div>
    <button class="btn btn-primary btn-next" onclick="completeMission()" style="margin-top:1.5rem">
      🏁 See Results
    </button>
  `;
}

async function chooseDtOption(idx) {
  const { mission, currentNode } = App.game;
  const nodeMap = mission.nodes || mission.tree;
  const node = nodeMap[currentNode];
  const choice = node.choices[idx];

  App.game.score += choice.points || 0;
  App.game.currentNode = choice.next;

  if (choice.points > 0) {
    toast(`+${choice.points} pts ✅`, 'success');
    SFX.play('correct');
    const choiceBtn = document.querySelectorAll('.dt-choice')[idx];
    if (choiceBtn) showXpBurst(choice.points, choiceBtn);
  } else {
    SFX.play('wrong');
  }
  if (choice.feedback) toast(choice.feedback, choice.points > 0 ? 'info' : 'warn');

  updateGameHeader();

  // Small delay for feedback visibility
  setTimeout(() => renderDecisionTree(), 1200);
}

// ─── MISSION COMPLETE ─────────────────────────────────────────────────────────
async function completeMission() {
  const { mission, missionGroup, score, maxScore, startTime } = App.game;
  const timeTaken = Math.round((Date.now() - startTime) / 1000);
  const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  // Calculate XP multiplier (age group + level)
  const mult = xpMultiplier(App.profile?.age_group, missionGroup, App.profile?.level, mission.difficulty);
  const effectiveScore = Math.round(score * mult);
  const bonus = effectiveScore - score; // positive = bonus, negative = penalty

  // Update DB session (trigger adds raw score to total_score)
  if (App.session) {
    await db.from('game_sessions').update({
      score,
      completed:  true,
      time_taken: timeTaken,
    }).eq('id', App.session.id);
  }

  // Apply bonus/penalty on top of what the trigger already added
  if (bonus !== 0 && App.user) {
    const { data: fresh } = await db.from('profiles').select('total_score').eq('id', App.user.id).single();
    if (fresh) {
      await db.from('profiles').update({ total_score: fresh.total_score + bonus }).eq('id', App.user.id);
    }
  }

  // Mark foundational course complete if this was the mandatory mission
  if (mission.mandatory && App.user && !App.profile?.foundational_completed) {
    db.from('profiles').update({ foundational_completed: true }).eq('id', App.user.id)
      .then(() => { if (App.profile) App.profile.foundational_completed = true; })
      .catch(() => {});
  }

  // Check + award badges
  const newBadges = await awardBadges(pct, mission.type);

  renderMissionComplete(mission, score, maxScore, pct, timeTaken, newBadges, mult);
  showScreen('screen-mission-complete');

  // Sound + confetti
  if (newBadges.length > 0) {
    SFX.play('badge');
  } else {
    SFX.play('complete');
  }
  if (pct >= 60) setTimeout(launchConfetti, 350);

  // Refresh profile
  await loadProfileData();
}

async function loadProfileData() {
  if (!App.user) return;
  const { data } = await db.from('profiles').select('*').eq('id', App.user.id).single();
  if (data) App.profile = data;
}

function renderMissionComplete(mission, score, maxScore, pct, timeTaken, newBadges, mult = 1) {
  let emoji, title, sub;
  if (pct >= 90)      { emoji = '🏆'; title = 'Outstanding!'; sub = 'You nailed it. Perfect score range!'; }
  else if (pct >= 60) { emoji = '🥈'; title = 'Well Done!';   sub = 'Solid performance. Review the tips to go even higher next time.'; }
  else                { emoji = '📚'; title = 'Keep Learning!'; sub = 'Each attempt makes you more secure. Try again to improve!'; }

  const stars = pct >= 90 ? '⭐⭐⭐' : pct >= 60 ? '⭐⭐' : '⭐';
  const effectiveXP = Math.round(mission.xp * mult);
  const multLabel = mult > 1
    ? ` <span class="xp-mult-tag bonus">🔥 ×${mult} Bonus!</span>`
    : mult < 1
    ? ` <span class="xp-mult-tag penalty">📉 ×${mult} Reduced</span>`
    : '';

  $('complete-emoji').textContent = emoji;
  $('complete-title').textContent = title;
  $('complete-sub').textContent = sub;
  $('complete-score').textContent = `${score} / ${maxScore}`;
  $('complete-pct').textContent = pct + '%';
  $('complete-time').textContent = timeTaken + 's';
  $('complete-stars').textContent = stars;
  $('complete-xp').innerHTML = `+${effectiveXP} XP${multLabel}`;

  const badgeRow = $('complete-new-badges');
  badgeRow.innerHTML = newBadges.length
    ? newBadges.map(b => `<div class="badge-earned"><span>${b.emoji}</span><span>${b.label}</span></div>`).join('')
    : '<span style="color:var(--muted)">Play more missions to earn badges!</span>';
}

// ─── BADGE SYSTEM ─────────────────────────────────────────────────────────────
async function awardBadges(pct, missionType) {
  if (!App.user || !App.profile) return [];
  const current = App.profile.badges || [];
  const toAdd = [];

  const add = id => { if (!current.includes(id) && !toAdd.includes(id)) toAdd.push(id); };

  // Per-mission badges
  if (App.profile.missions_completed === 0) add('first_mission');
  if (pct === 100) add('perfect_score');
  if (pct >= 90 && missionType === 'quiz')          add('quiz_master');
  if (pct >= 90 && missionType === 'spot-threat')   add('threat_hunter');
  if (pct >= 90 && missionType === 'decision-tree') add('decision_maker');

  // Streak: 3 missions completed in current browser session
  App.sessionMissionsCount = (App.sessionMissionsCount || 0) + 1;
  if (App.sessionMissionsCount >= 3) add('streak_3');

  // Group champion: all 3 missions in user's age group completed
  if (!current.includes('group_complete')) {
    const { data: groupSessions } = await db
      .from('game_sessions')
      .select('mission_id')
      .eq('user_id', App.user.id)
      .eq('age_group', App.profile.age_group)
      .eq('completed', true);

    const completedIds = new Set([
      ...(groupSessions || []).map(s => s.mission_id),
      App.game.mission.id,
    ]);
    if (getMissions(App.profile.age_group).every(m => completedIds.has(m.id))) add('group_complete');
  }

  // Cyber guardian: completed at least one mission in all 4 age groups
  if (!current.includes('cyber_guardian')) {
    const { data: allSessions } = await db
      .from('game_sessions')
      .select('age_group')
      .eq('user_id', App.user.id)
      .eq('completed', true);

    const doneGroups = new Set([
      ...(allSessions || []).map(s => s.age_group),
      App.profile.age_group,
    ]);
    if (['kids','teens','adults','seniors'].every(g => doneGroups.has(g))) add('cyber_guardian');
  }

  if (toAdd.length > 0) {
    const updated = [...current, ...toAdd];
    await db.from('profiles').update({ badges: updated }).eq('id', App.user.id);
    App.profile.badges = updated;
    toAdd.forEach(id => toast(`🎖️ Badge Unlocked: ${BADGES[id]?.label}!`, 'success'));
  }

  return toAdd.map(id => BADGES[id]).filter(Boolean);
}

// ─── LEADERBOARD ─────────────────────────────────────────────────────────────
async function renderLeaderboard() {
  showScreen('screen-leaderboard');
  const activeGroup = $('lb-group-select')?.value || App.profile?.age_group || 'adults';

  $('lb-loading').style.display = 'block';
  $('lb-table-body').innerHTML = '';

  const { data, error } = await db
    .from('leaderboard')
    .select('*')
    .eq('age_group', activeGroup)
    .order('rank_in_group')
    .limit(50);

  $('lb-loading').style.display = 'none';

  if (error || !data?.length) {
    $('lb-table-body').innerHTML = '<tr><td colspan="5" style="text-align:center;color:var(--muted);padding:2rem">No players yet — be the first! 🚀</td></tr>';
    return;
  }

  data.forEach((row, i) => {
    const isMe = row.id === App.user?.id;
    const rankEmoji = i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : `#${row.rank_in_group}`;
    const tr = el('tr', isMe ? 'lb-me' : '');
    tr.innerHTML = `
      <td>${rankEmoji}</td>
      <td>${row.avatar} <strong>${row.username}</strong>${isMe ? ' <span class="badge" style="font-size:.65rem">You</span>' : ''}</td>
      <td>${formatScore(row.total_score)}</td>
      <td>${row.missions_completed}</td>
      <td>${(row.badges || []).slice(0,4).join(' ')}</td>
    `;
    $('lb-table-body').appendChild(tr);
  });
}

// ─── PROFILE PAGE ─────────────────────────────────────────────────────────────
function renderProfilePage() {
  if (!App.profile) return;
  const p = App.profile;
  const group = AGE_GROUPS[p.age_group];

  $('prof-avatar').textContent = p.avatar;
  $('prof-username').textContent = p.username;
  $('prof-group').textContent = `${group.emoji} ${group.label}`;
  $('prof-score').textContent = formatScore(p.total_score);
  $('prof-missions').textContent = p.missions_completed;

  // Build avatar picker
  const apicker = $('prof-avatar-picker');
  if (apicker) {
    apicker.innerHTML = '';
    Object.entries(AVATARS).forEach(([category, emojis]) => {
      const catLabel = el('div', 'avatar-cat-label', category);
      apicker.appendChild(catLabel);
      const row = el('div', 'avatar-cat-row', '');
      emojis.forEach(av => {
        const btn = el('button', `avatar-btn${av === p.avatar ? ' selected' : ''}`, av);
        btn.title = av;
        btn.onclick = () => {
          apicker.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('selected'));
          btn.classList.add('selected');
        };
        row.appendChild(btn);
      });
      apicker.appendChild(row);
    });
  }

  const grid = $('badge-grid');
  grid.innerHTML = '';
  Object.values(BADGES).forEach(b => {
    const earned = (p.badges || []).includes(b.id);
    const card = el('div', `badge-card ${earned ? 'badge-earned' : 'badge-locked'}`);
    card.innerHTML = `
      <span class="badge-emoji">${earned ? b.emoji : '🔒'}</span>
      <div class="badge-name">${b.label}</div>
      <div class="badge-desc">${earned ? b.desc : 'Keep playing to unlock'}</div>
    `;
    grid.appendChild(card);
  });
}

async function saveAvatarChange() {
  const selected = document.querySelector('#prof-avatar-picker .avatar-btn.selected');
  if (!selected) { toast('Select an avatar first', 'error'); return; }
  const newAvatar = selected.textContent;
  loading(true);
  const { error } = await db.from('profiles').update({ avatar: newAvatar }).eq('id', App.user.id);
  loading(false);
  if (error) { toast(error.message, 'error'); return; }
  App.profile.avatar = newAvatar;
  $('prof-avatar').textContent = newAvatar;
  $('dash-avatar').textContent = newAvatar;
  toast('Avatar updated! ✨', 'success');
}

async function handleChangePassword(e) {
  e.preventDefault();
  const newPw  = $('cp-new').value;
  const confirm = $('cp-confirm').value;
  if (newPw !== confirm) { toast('Passwords do not match', 'error'); return; }
  if (newPw.length < 8)             { toast('Minimum 8 characters', 'error'); return; }
  if (!/[A-Z]/.test(newPw))         { toast('Need at least one uppercase letter', 'error'); return; }
  if (!/[a-z]/.test(newPw))         { toast('Need at least one lowercase letter', 'error'); return; }
  if (!/[0-9]/.test(newPw))         { toast('Need at least one number', 'error'); return; }
  if (!/[^A-Za-z0-9]/.test(newPw))  { toast('Need at least one symbol', 'error'); return; }
  loading(true);
  const { error } = await db.auth.updateUser({ password: newPw });
  loading(false);
  if (error) { toast(error.message, 'error'); return; }
  $('cp-new').value = '';
  $('cp-confirm').value = '';
  toast('Password changed successfully! 🔒', 'success');
}

// ─── PROFILE SETUP ────────────────────────────────────────────────────────────
function renderProfileSetup() {
  const avatarGrid = $('avatar-picker');
  if (!avatarGrid) return;
  avatarGrid.innerHTML = '';
  // AVATARS is now { category: [emoji, ...], ... }
  const allAvatars = Object.values(AVATARS).flat();
  allAvatars.forEach(av => {
    const btn = el('button', 'avatar-btn', av);
    btn.onclick = () => { document.querySelectorAll('#avatar-picker .avatar-btn').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); };
    avatarGrid.appendChild(btn);
  });

  const groupGrid = $('group-picker');
  if (!groupGrid) return;
  groupGrid.innerHTML = '';
  Object.entries(AGE_GROUPS).forEach(([key, g]) => {
    const btn = el('button', 'group-btn', `<span>${g.emoji}</span><span>${g.label}</span><small>${g.range}</small>`);
    btn.dataset.group = key;
    btn.onclick = () => { document.querySelectorAll('.group-btn').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); };
    groupGrid.appendChild(btn);
  });

  // Level picker
  const levelGrid = $('level-picker');
  if (levelGrid) {
    levelGrid.innerHTML = '';
    Object.entries(LEVELS).forEach(([key, lv]) => {
      const btn = el('button', 'group-btn level-btn', `<span>${lv.emoji}</span><span>${lv.label}</span><small>${lv.desc}</small>`);
      btn.dataset.level = key;
      btn.onclick = () => { document.querySelectorAll('.level-btn').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); };
      if (key === 'beginner') btn.classList.add('selected'); // default
      levelGrid.appendChild(btn);
    });
  }

  // Hobby picker
  const hobbyGrid = $('hobby-picker');
  if (hobbyGrid) {
    hobbyGrid.innerHTML = '';
    HOBBIES.forEach(h => {
      const btn = el('button', 'hobby-btn', `${h.emoji} ${h.label}`);
      btn.dataset.hobby = h.id;
      btn.onclick = () => { document.querySelectorAll('.hobby-btn').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); };
      if (h.id === 'general') btn.classList.add('selected'); // default
      hobbyGrid.appendChild(btn);
    });
  }
}

async function submitProfileSetup() {
  const username  = $('setup-username')?.value?.trim();
  const avatarBtn = document.querySelector('.avatar-btn.selected');
  const groupBtn  = document.querySelector('.group-btn:not(.level-btn).selected');
  const levelBtn  = document.querySelector('.level-btn.selected');
  const hobbyBtn  = document.querySelector('.hobby-btn.selected');

  if (!username || username.length < 3) { toast('Username must be at least 3 characters', 'error'); return; }
  if (!avatarBtn) { toast('Please choose an avatar', 'error'); return; }
  if (!groupBtn)  { toast('Please choose your age group', 'error'); return; }

  const level = levelBtn?.dataset.level || 'beginner';
  const hobby = hobbyBtn?.dataset.hobby || 'general';

  await createProfile(username, groupBtn.dataset.group, avatarBtn.textContent, level, hobby);
}

// ─── AUTH FORM HANDLERS ───────────────────────────────────────────────────────
function showForgotPassword() {
  $('login-form').style.display  = 'none';
  $('forgot-form').style.display = 'block';
}
function hideForgotPassword() {
  $('forgot-form').style.display = 'none';
  $('login-form').style.display  = 'flex';
}
async function sendPasswordReset() {
  const email = $('forgot-email').value.trim();
  if (!email) { toast('Enter your email', 'error'); return; }
  loading(true);
  const { error } = await db.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + window.location.pathname,
  });
  loading(false);
  if (error) { toast(error.message, 'error'); return; }
  toast('Reset link sent — check your inbox 📧', 'success');
  hideForgotPassword();
}

async function handleResetPassword(e) {
  e.preventDefault();
  const password = $('reset-password').value;
  const confirm  = $('reset-confirm').value;
  if (password !== confirm) { toast('Passwords do not match', 'error'); return; }
  if (password.length < 8)         { toast('Minimum 8 characters', 'error'); return; }
  if (!/[A-Z]/.test(password))     { toast('Need at least one uppercase letter', 'error'); return; }
  if (!/[a-z]/.test(password))     { toast('Need at least one lowercase letter', 'error'); return; }
  if (!/[0-9]/.test(password))     { toast('Need at least one number', 'error'); return; }
  if (!/[^A-Za-z0-9]/.test(password)) { toast('Need at least one symbol', 'error'); return; }

  loading(true);
  const { error } = await db.auth.updateUser({ password });
  loading(false);
  if (error) { toast(error.message, 'error'); return; }
  toast('Password updated! Signing you in…', 'success');
  await loadProfile();
}

function togglePw(inputId, btn) {
  const input = $(inputId);
  const show = input.type === 'password';
  input.type = show ? 'text' : 'password';
  btn.textContent = show ? '🙈' : '👁';
}

function switchAuthTab(tab) {
  $('tab-login').classList.toggle('active', tab === 'login');
  $('tab-signup').classList.toggle('active', tab === 'signup');
  $('login-form').style.display  = tab === 'login'  ? 'flex' : 'none';
  $('signup-form').style.display = tab === 'signup' ? 'flex' : 'none';
}

async function handleLogin(e) {
  e.preventDefault();
  const username = $('login-username').value.trim();
  const password = $('login-password').value;
  await signIn(username, password);
}

async function handleSignup(e) {
  e.preventDefault();
  const email    = $('signup-email').value.trim();
  const password = $('signup-password').value;
  const confirm  = $('signup-confirm').value;
  if (password !== confirm) { toast('Passwords do not match', 'error'); return; }
  if (password.length < 8)  { toast('Password must be at least 8 characters', 'error'); return; }
  if (!/[A-Z]/.test(password)) { toast('Password needs at least one uppercase letter', 'error'); return; }
  if (!/[a-z]/.test(password)) { toast('Password needs at least one lowercase letter', 'error'); return; }
  if (!/[0-9]/.test(password)) { toast('Password needs at least one number', 'error'); return; }
  if (!/[^A-Za-z0-9]/.test(password)) { toast('Password needs at least one symbol (e.g. !@#$)', 'error'); return; }
  await signUp(email, password);
}

// ─── ADMIN PANEL ──────────────────────────────────────────────────────────────
let _adminUsers = [];   // cache for client-side filtering

async function openAdminPanel() {
  showScreen('screen-admin');
  await Promise.all([ loadAdminStats(), loadAdminUsers(), loadAdminSessions() ]);
}

function switchAdminTab(tab, btn) {
  document.querySelectorAll('.admin-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  $('admin-tab-users').style.display    = tab === 'users'    ? 'block' : 'none';
  $('admin-tab-sessions').style.display = tab === 'sessions' ? 'block' : 'none';
}

async function loadAdminStats() {
  const [{ data: users }, { data: sessions }] = await Promise.all([
    db.from('profiles').select('age_group, total_score'),
    db.from('game_sessions').select('completed, percentage'),
  ]);

  const completed  = (sessions || []).filter(s => s.completed);
  const avgPct     = completed.length
    ? Math.round(completed.reduce((s, r) => s + parseFloat(r.percentage || 0), 0) / completed.length)
    : 0;

  $('ast-users').textContent     = (users || []).length;
  $('ast-sessions').textContent  = (sessions || []).length;
  $('ast-completed').textContent = completed.length;
  $('ast-avg').textContent       = avgPct + '%';

  const groups = { kids: 0, teens: 0, adults: 0, seniors: 0 };
  (users || []).forEach(u => { if (groups[u.age_group] !== undefined) groups[u.age_group]++; });
  Object.entries(groups).forEach(([g, n]) => {
    const el = $('agc-' + g);
    if (el) el.textContent = n + ' user' + (n !== 1 ? 's' : '');
  });
}

async function loadAdminUsers() {
  const { data, error } = await db
    .from('profiles')
    .select('id, username, age_group, avatar, total_score, missions_completed, badges, is_admin, created_at')
    .order('total_score', { ascending: false });

  if (error) { toast('Failed to load users: ' + error.message, 'error'); return; }
  _adminUsers = data || [];
  renderAdminUsersTable(_adminUsers);
}

function renderAdminUsersTable(users) {
  const tbody = $('admin-users-body');
  tbody.innerHTML = '';
  if (!users.length) {
    tbody.innerHTML = '<tr><td colspan="8" class="admin-empty">No users found</td></tr>';
    return;
  }
  users.forEach((u, i) => {
    const tr = el('tr', u.id === App.user?.id ? 'lb-me' : '');
    const joined = new Date(u.created_at).toLocaleDateString('en-SG', { day: '2-digit', month: 'short', year: 'numeric' });
    const groupLabel = AGE_GROUPS[u.age_group]?.label || u.age_group;
    tr.innerHTML = `
      <td>${i + 1}</td>
      <td><span class="admin-avatar">${u.avatar}</span> <strong>${u.username}</strong>${u.id === App.user?.id ? ' <span class="badge" style="font-size:.65rem">You</span>' : ''}</td>
      <td>${AGE_GROUPS[u.age_group]?.emoji || ''} ${groupLabel}</td>
      <td>${formatScore(u.total_score)}</td>
      <td>${u.missions_completed}</td>
      <td>${(u.badges || []).slice(0, 5).join(' ') || '—'}</td>
      <td>
        <button class="admin-toggle-btn ${u.is_admin ? 'is-admin' : ''}"
          onclick="toggleAdmin('${u.id}', ${u.is_admin})"
          ${u.id === App.user?.id ? 'disabled title="Cannot remove own admin"' : ''}>
          ${u.is_admin ? '✅ Admin' : '➕ Set Admin'}
        </button>
      </td>
      <td>${joined}</td>
    `;
    tbody.appendChild(tr);
  });
}

function filterAdminUsers() {
  const q     = $('admin-search').value.toLowerCase();
  const group = $('admin-group-filter').value;
  const filtered = _adminUsers.filter(u =>
    (!q     || u.username.toLowerCase().includes(q)) &&
    (!group || u.age_group === group)
  );
  renderAdminUsersTable(filtered);
}

async function toggleAdmin(userId, currentState) {
  const { error } = await db
    .from('profiles')
    .update({ is_admin: !currentState })
    .eq('id', userId);
  if (error) { toast(error.message, 'error'); return; }
  toast(currentState ? 'Admin removed' : '✅ Admin granted', 'success');
  await loadAdminUsers();
}

async function loadAdminSessions() {
  const typeFilter = $('admin-session-filter')?.value;
  let query = db
    .from('game_sessions')
    .select('id, user_id, mission_id, mission_type, age_group, score, max_score, percentage, time_taken, completed, created_at, profiles(username, avatar)')
    .eq('completed', true)
    .order('created_at', { ascending: false })
    .limit(50);

  if (typeFilter) query = query.eq('mission_type', typeFilter);

  const { data, error } = await query;
  if (error) { toast('Failed to load sessions: ' + error.message, 'error'); return; }

  const tbody = $('admin-sessions-body');
  tbody.innerHTML = '';
  if (!data?.length) {
    tbody.innerHTML = '<tr><td colspan="8" class="admin-empty">No completed sessions yet</td></tr>';
    return;
  }

  const typeIcon = { quiz: '❓', 'spot-threat': '🔍', 'decision-tree': '🌿' };
  data.forEach(s => {
    const tr = document.createElement('tr');
    const date    = new Date(s.created_at).toLocaleDateString('en-SG', { day: '2-digit', month: 'short' });
    const time    = s.time_taken ? s.time_taken + 's' : '—';
    const pct     = s.percentage ? Math.round(s.percentage) + '%' : '—';
    const user    = s.profiles ? `${s.profiles.avatar} ${s.profiles.username}` : s.user_id.slice(0, 8) + '…';
    const mission = s.mission_id.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
    tr.innerHTML = `
      <td>${user}</td>
      <td style="font-size:.82rem">${mission}</td>
      <td>${typeIcon[s.mission_type] || ''} ${s.mission_type}</td>
      <td>${AGE_GROUPS[s.age_group]?.emoji || ''} ${s.age_group}</td>
      <td>${s.score} / ${s.max_score}</td>
      <td><strong>${pct}</strong></td>
      <td>${time}</td>
      <td>${date}</td>
    `;
    tbody.appendChild(tr);
  });
}

// ─── THEME CONTROLS ───────────────────────────────────────────────────────────

/**
 * Visual themes that replace the whole look-and-feel.
 * Age-group themes (kids/teens/adults/seniors) are applied separately
 * via setTheme() and win during gameplay because they are set on the
 * same data-theme attribute — the visual theme is only held in
 * localStorage and applied on non-gameplay screens.
 */
const VISUAL_THEMES = ['default', 'synthwave', 'teen', 'kiddy', 'adult'];

// ─── SOUND SYSTEM (Web Audio API) ────────────────────────────────────────────
const SFX = (() => {
  let ctx = null;
  let muted = JSON.parse(localStorage.getItem('cg-muted') ?? 'false');

  function getCtx() {
    if (!ctx) ctx = new (window.AudioContext || window.webkitAudioContext)();
    if (ctx.state === 'suspended') ctx.resume();
    return ctx;
  }

  function play(type) {
    if (muted) return;
    try {
      const ac = getCtx();
      const gain = ac.createGain();
      gain.connect(ac.destination);

      if (type === 'click') {
        const o = ac.createOscillator();
        o.type = 'sine'; o.frequency.setValueAtTime(660, ac.currentTime);
        gain.gain.setValueAtTime(0.08, ac.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.08);
        o.connect(gain); o.start(); o.stop(ac.currentTime + 0.08);

      } else if (type === 'correct') {
        [523, 659, 784].forEach((freq, i) => {
          const o = ac.createOscillator();
          o.type = 'triangle'; o.frequency.value = freq;
          const g = ac.createGain();
          const t = ac.currentTime + i * 0.1;
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.15, t + 0.04);
          g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
          o.connect(g); g.connect(ac.destination);
          o.start(t); o.stop(t + 0.3);
        });

      } else if (type === 'wrong') {
        [300, 240].forEach((freq, i) => {
          const o = ac.createOscillator();
          o.type = 'sawtooth'; o.frequency.value = freq;
          const g = ac.createGain();
          const t = ac.currentTime + i * 0.12;
          g.gain.setValueAtTime(0.1, t);
          g.gain.exponentialRampToValueAtTime(0.001, t + 0.25);
          o.connect(g); g.connect(ac.destination);
          o.start(t); o.stop(t + 0.25);
        });

      } else if (type === 'badge') {
        [523, 659, 784, 1047].forEach((freq, i) => {
          const o = ac.createOscillator();
          o.type = 'sine'; o.frequency.value = freq;
          const g = ac.createGain();
          const t = ac.currentTime + i * 0.08;
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.18, t + 0.03);
          g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
          o.connect(g); g.connect(ac.destination);
          o.start(t); o.stop(t + 0.4);
        });

      } else if (type === 'complete') {
        const melody = [523, 659, 784, 1047, 784, 1047];
        melody.forEach((freq, i) => {
          const o = ac.createOscillator();
          o.type = 'triangle'; o.frequency.value = freq;
          const g = ac.createGain();
          const t = ac.currentTime + i * 0.15;
          g.gain.setValueAtTime(0, t);
          g.gain.linearRampToValueAtTime(0.14, t + 0.04);
          g.gain.exponentialRampToValueAtTime(0.001, t + 0.4);
          o.connect(g); g.connect(ac.destination);
          o.start(t); o.stop(t + 0.4);
        });

      } else if (type === 'whoosh') {
        const o = ac.createOscillator();
        const lfo = ac.createGain();
        o.type = 'sine';
        o.frequency.setValueAtTime(800, ac.currentTime);
        o.frequency.exponentialRampToValueAtTime(200, ac.currentTime + 0.25);
        gain.gain.setValueAtTime(0.06, ac.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ac.currentTime + 0.25);
        o.connect(gain); o.start(); o.stop(ac.currentTime + 0.25);
      }
    } catch(e) { /* silence audio errors */ }
  }

  function toggleMute() {
    muted = !muted;
    localStorage.setItem('cg-muted', JSON.stringify(muted));
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) { btn.textContent = muted ? '🔇' : '🔊'; btn.classList.toggle('muted', muted); }
  }

  function initUI() {
    muted = JSON.parse(localStorage.getItem('cg-muted') ?? 'false');
    const btn = document.getElementById('sound-toggle-btn');
    if (btn) { btn.textContent = muted ? '🔇' : '🔊'; btn.classList.toggle('muted', muted); }
  }

  return { play, toggleMute, initUI };
})();

function toggleSound() { SFX.toggleMute(); }

// ─── BACKGROUND MUSIC (HTML5 Audio) ───────────────────────────────────────────
const BGM = (() => {
  let muted = JSON.parse(localStorage.getItem('cg-bgm-muted') ?? 'false');
  const audio = new Audio('audio/bgm.mp3');
  audio.loop = true;
  audio.volume = 0.4;

  function updateBtn() {
    const btn = document.getElementById('bgm-toggle-btn');
    if (!btn) return;
    btn.textContent = muted ? '🎵' : '🎶';
    btn.title = muted ? 'Music: Off (click to enable)' : 'Music: On';
    btn.classList.toggle('muted', muted);
  }

  function play() {
    if (muted) return;
    audio.play().catch(() => {});
  }

  function stop() {
    audio.pause();
  }

  function toggleMute() {
    muted = !muted;
    localStorage.setItem('cg-bgm-muted', JSON.stringify(muted));
    updateBtn();
    muted ? stop() : play();
    return muted;
  }

  function initUI() {
    muted = JSON.parse(localStorage.getItem('cg-bgm-muted') ?? 'false');
    updateBtn();
  }

  return { play, stop, toggleMute, initUI, get muted() { return muted; } };
})();

function toggleBGM() { BGM.toggleMute(); }

// ─── PARTICLE HERO BACKGROUND ─────────────────────────────────────────────────
function initParticles() {
  const container = document.getElementById('hero-particles');
  if (!container) return;
  const count = 28;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    const size = Math.random() * 3 + 1;
    p.style.cssText = [
      `left:${Math.random() * 100}%`,
      `top:${Math.random() * 100}%`,
      `width:${size}px`,
      `height:${size}px`,
      `animation-duration:${Math.random() * 15 + 8}s`,
      `animation-delay:${Math.random() * 8}s`,
      `opacity:${Math.random() * 0.5 + 0.1}`
    ].join(';');
    container.appendChild(p);
  }
}

// ─── XP BURST EFFECT ──────────────────────────────────────────────────────────
function showXpBurst(pts, originEl) {
  if (!pts || pts <= 0) return;
  const burst = document.createElement('div');
  burst.className = 'xp-burst';
  burst.textContent = `+${pts} XP`;
  if (originEl) {
    const r = originEl.getBoundingClientRect();
    burst.style.left = (r.left + r.width / 2 - 30) + 'px';
    burst.style.top  = (r.top  - 10) + 'px';
  } else {
    burst.style.left = '50%'; burst.style.top = '50%';
  }
  document.body.appendChild(burst);
  setTimeout(() => burst.remove(), 950);
}

// ─── CONFETTI (final screen) ──────────────────────────────────────────────────
function launchConfetti() {
  const colors = ['#4f8ef7','#00e5ff','#ff6b6b','#ffd93d','#6bcb77','#e040fb','#f59e0b'];
  for (let i = 0; i < 50; i++) {
    const el = document.createElement('div');
    el.className = 'confetti-particle';
    el.style.cssText = [
      `left:${Math.random() * 100}vw`,
      `top:-10px`,
      `background:${colors[Math.floor(Math.random() * colors.length)]}`,
      `animation-duration:${Math.random() * 2 + 1.5}s`,
      `animation-delay:${Math.random() * 0.8}s`,
      `transform:rotate(${Math.random() * 360}deg)`,
      `width:${Math.random() * 8 + 6}px`,
      `height:${Math.random() * 8 + 6}px`
    ].join(';');
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 3500);
  }
}

function initThemeControls() {
  // Read saved preferences
  const savedMode  = localStorage.getItem('cg-mode')  || 'dark';
  const savedTheme = localStorage.getItem('cg-vtheme') || 'default';

  // Apply mode
  setMode(savedMode, /* silent */ true);

  // Apply visual theme (only if no age-group profile is active yet)
  if (!App.profile) {
    applyVisualTheme(savedTheme);
  }

  // Sync button states
  _updateModeBtn();
  _updateThemePills(savedTheme);
}

function setMode(mode, silent) {
  localStorage.setItem('cg-mode', mode);

  if (mode === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.setAttribute('data-mode', prefersDark ? 'dark' : 'light');
  } else {
    document.body.setAttribute('data-mode', mode);
  }

  if (!silent) _updateModeBtn();
}

function setVisualTheme(theme) {
  if (!VISUAL_THEMES.includes(theme)) theme = 'default';
  localStorage.setItem('cg-vtheme', theme);

  // If user is on a gameplay screen with an age-group theme, don't override
  // the age-group theme — but persist the choice for when they leave gameplay.
  const onGameplay = document.getElementById('screen-gameplay')?.classList.contains('active') ||
                     document.getElementById('screen-mission-briefing')?.classList.contains('active');

  if (!onGameplay || !App.profile) {
    applyVisualTheme(theme);
  }

  _updateThemePills(theme);
}

/** Directly set data-theme to the visual theme value */
function applyVisualTheme(theme) {
  document.body.setAttribute('data-theme', theme === 'default' ? 'default' : theme);
}

/** Toggle light/dark mode; cycles: dark -> light -> system -> dark */
function toggleMode() {
  const current = localStorage.getItem('cg-mode') || 'dark';
  const next = current === 'dark' ? 'light' : current === 'light' ? 'system' : 'dark';
  setMode(next);
  if (!App.profile) {
    // Re-apply visual theme so color vars recalculate
    applyVisualTheme(localStorage.getItem('cg-vtheme') || 'default');
  }
}

/** Open/close the theme popup */
function toggleThemePopup() {
  const popup = document.getElementById('theme-popup');
  if (popup) popup.classList.toggle('hidden');
}

/** Update the sun/moon button label */
function _updateModeBtn() {
  const btn = document.getElementById('theme-mode-btn');
  if (!btn) return;
  const mode = localStorage.getItem('cg-mode') || 'dark';
  btn.textContent = mode === 'light' ? '☀️' : mode === 'system' ? '🌓' : '🌙';
  btn.title = 'Mode: ' + mode + ' (click to cycle)';
}

/** Highlight the active theme pill */
function _updateThemePills(activeTheme) {
  document.querySelectorAll('.theme-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.themeVal === activeTheme);
  });
}

// ─── INIT ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  initThemeControls();
  SFX.initUI();
  BGM.initUI();
  initParticles();
  renderProfileSetup();
  await initAuth();

  // Unlock HTML5 audio on first user interaction (browser autoplay policy)
  const unlockBGMOnce = () => {
    BGM.play();
    document.removeEventListener('click', unlockBGMOnce);
    document.removeEventListener('keydown', unlockBGMOnce);
  };
  document.addEventListener('click', unlockBGMOnce);
  document.addEventListener('keydown', unlockBGMOnce);

  // Button click sound (global — attaches to all .btn, .nav-btn, .quiz-option)
  document.addEventListener('click', e => {
    const btn = e.target.closest('.btn, .nav-btn, .quiz-option, .dt-choice, .theme-pill, .auth-tab, .admin-tab');
    if (btn && !btn.classList.contains('quiz-option')) SFX.play('click');
  });

  // Close theme popup when clicking outside it
  document.addEventListener('click', e => {
    const popup = document.getElementById('theme-popup');
    const paletteBtn = document.getElementById('theme-palette-btn');
    if (popup && !popup.classList.contains('hidden') &&
        !popup.contains(e.target) && e.target !== paletteBtn) {
      popup.classList.add('hidden');
    }
  });

  // Re-apply visual theme when returning to non-gameplay screens
  document.addEventListener('click', () => {
    const onGameplay = document.getElementById('screen-gameplay')?.classList.contains('active') ||
                       document.getElementById('screen-mission-briefing')?.classList.contains('active');
    if (!onGameplay && App.profile) {
      const saved = localStorage.getItem('cg-vtheme');
      if (saved && saved !== 'default') {
        // Age-group theme takes priority for gameplay — on other screens restore visual
        // Note: setTheme() in app.js already handles age-group via data-theme;
        // visual theme is a cosmetic layer not linked to age group on non-game screens
      }
    }
  });
});
