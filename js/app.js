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

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  const s = $(id);
  if (s) { s.classList.add('active'); s.scrollTop = 0; }
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
  const { data: { session } } = await db.auth.getSession();
  if (session) {
    App.user = session.user;
    await loadProfile();
  } else {
    showScreen('screen-landing');
  }

  db.auth.onAuthStateChange(async (event, session) => {
    if (event === 'PASSWORD_RECOVERY') {
      showScreen('screen-reset');
      return;
    }
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

  // Store email for OTP verification
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
  if (error) { toast('Incorrect password', 'error'); return false; }
  App.user = data.user;
  await loadProfile();
  return true;
}

async function signOut() {
  await db.auth.signOut();
  App.user = null;
  App.profile = null;
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

  if (error || !data) {
    showScreen('screen-profile-setup');
    renderProfileSetup();
    return;
  }

  App.profile = data;
  setTheme(AGE_GROUPS[data.age_group]?.theme || 'default');
  renderDashboard();
  showScreen('screen-dashboard');
}

async function createProfile(username, ageGroup, avatar) {
  loading(true);
  const { data, error } = await db.from('profiles').insert({
    id:        App.user.id,
    email:     App.user.email,
    username,
    age_group: ageGroup,
    avatar,
  }).select().single();
  loading(false);

  if (error) {
    toast(error.code === '23505' ? 'Username already taken — try another' : error.message, 'error');
    return false;
  }

  App.profile = data;
  setTheme(AGE_GROUPS[ageGroup]?.theme || 'default');
  toast(`Welcome to CyberGuard, ${username}! 🎉`, 'success');
  renderDashboard();
  showScreen('screen-dashboard');
  return true;
}

// ─── DASHBOARD ───────────────────────────────────────────────────────────────
function renderDashboard() {
  const p = App.profile;
  if (!p) return;
  const group = AGE_GROUPS[p.age_group];
  const missions = getMissions(p.age_group);

  // Show admin nav button if admin
  const adminBtn = $('nav-admin-btn');
  if (adminBtn) adminBtn.style.display = p.is_admin ? 'inline-flex' : 'none';

  // Header
  $('dash-avatar').textContent = p.avatar;
  $('dash-username').textContent = p.username;
  $('dash-group').textContent = `${group.emoji} ${group.label}`;
  $('dash-score').textContent = formatScore(p.total_score);
  $('dash-missions').textContent = p.missions_completed;
  $('dash-badges').textContent = (p.badges || []).length;

  // Mission cards
  const grid = $('mission-grid');
  grid.innerHTML = '';
  missions.forEach(m => {
    const card = buildMissionCard(m);
    grid.appendChild(card);
  });
}

function buildMissionCard(mission) {
  const types = { quiz: { label: 'Quiz', icon: '❓', color: 'var(--accent)' }, 'spot-threat': { label: 'Spot the Threat', icon: '🔍', color: '#f59e0b' }, 'decision-tree': { label: 'Decision Tree', icon: '🌿', color: '#10b981' } };
  const t = types[mission.type];

  const card = el('div', 'mission-card');
  card.innerHTML = `
    <div class="mc-header">
      <span class="mc-icon">${mission.icon}</span>
      <div class="mc-badges">
        <span class="badge" style="background:${t.color}20;color:${t.color};border-color:${t.color}40">${t.icon} ${t.label}</span>
        <span class="badge badge-diff badge-${mission.difficulty.toLowerCase()}">${mission.difficulty}</span>
      </div>
    </div>
    <h3 class="mc-title">${mission.title}</h3>
    <p class="mc-sub">${mission.subtitle}</p>
    <div class="mc-footer">
      <span class="mc-xp">⚡ ${mission.xp} XP</span>
      <button class="btn btn-primary btn-sm" onclick="startMission('${mission.id}')">▶ Start Mission</button>
    </div>
  `;
  return card;
}

// ─── MISSION START ────────────────────────────────────────────────────────────
async function startMission(missionId) {
  const mission = getMission(App.profile.age_group, missionId);
  if (!mission) return;

  App.game = {
    mission,
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
    age_group:    App.profile.age_group,
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
  }

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

    $('threats-found').textContent = App.game.foundThreats.length;
    $('spot-pts').textContent = `${App.game.score} / ${mission.totalPoints} pts`;
    updateGameHeader();
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
  const node = mission.nodes[currentNode];
  if (!node) return;

  const isEnding = node.isEnding;

  $('gameplay-area').innerHTML = `
    <div class="dt-container">
      <div class="dt-story-card ${isEnding ? 'dt-ending dt-ending-' + (node.endingType || 'ok') : ''}">
        <span class="dt-emoji">${node.emoji}</span>
        <p class="dt-text">${node.text}</p>
      </div>
      ${isEnding ? renderDtEnding(node) : renderDtChoices(node)}
    </div>
  `;
}

function renderDtChoices(node) {
  const html = node.choices.map((c, i) =>
    `<button class="dt-choice" onclick="chooseDtOption(${i})">${c.text}</button>`
  ).join('');
  return `<div class="dt-choices">${html}</div>`;
}

function renderDtEnding(node) {
  const endClass = { great: 'ending-great', ok: 'ending-ok', bad: 'ending-bad' }[node.endingType] || '';
  return `
    <div class="dt-result ${endClass}">
      <div class="dt-result-title">${node.endingTitle}</div>
      <div class="dt-result-text">${node.endingText}</div>
    </div>
    <button class="btn btn-primary btn-next" onclick="completeMission()" style="margin-top:1.5rem">
      🏁 See Results
    </button>
  `;
}

async function chooseDtOption(idx) {
  const { mission, currentNode } = App.game;
  const node = mission.nodes[currentNode];
  const choice = node.choices[idx];

  App.game.score += choice.points || 0;
  App.game.currentNode = choice.next;

  if (choice.points > 0) toast(`+${choice.points} pts ✅`, 'success');
  if (choice.feedback) toast(choice.feedback, choice.points > 0 ? 'info' : 'warn');

  updateGameHeader();

  // Small delay for feedback visibility
  setTimeout(() => renderDecisionTree(), 1200);
}

// ─── MISSION COMPLETE ─────────────────────────────────────────────────────────
async function completeMission() {
  const { mission, score, maxScore, startTime, session } = App.game;
  const timeTaken = Math.round((Date.now() - startTime) / 1000);
  const pct = maxScore > 0 ? Math.round((score / maxScore) * 100) : 0;

  // Update DB session
  if (App.session) {
    await db.from('game_sessions').update({
      score,
      completed:  true,
      time_taken: timeTaken,
    }).eq('id', App.session.id);
  }

  // Check + award badges
  const newBadges = await awardBadges(pct, mission.type);

  renderMissionComplete(mission, score, maxScore, pct, timeTaken, newBadges);
  showScreen('screen-mission-complete');

  // Refresh profile
  await loadProfileData();
}

async function loadProfileData() {
  if (!App.user) return;
  const { data } = await db.from('profiles').select('*').eq('id', App.user.id).single();
  if (data) App.profile = data;
}

function renderMissionComplete(mission, score, maxScore, pct, timeTaken, newBadges) {
  let emoji, title, sub;
  if (pct >= 90)      { emoji = '🏆'; title = 'Outstanding!'; sub = 'You nailed it. Perfect score range!'; }
  else if (pct >= 60) { emoji = '🥈'; title = 'Well Done!';   sub = 'Solid performance. Review the tips to go even higher next time.'; }
  else                { emoji = '📚'; title = 'Keep Learning!'; sub = 'Each attempt makes you more secure. Try again to improve!'; }

  const stars = pct >= 90 ? '⭐⭐⭐' : pct >= 60 ? '⭐⭐' : '⭐';

  $('complete-emoji').textContent = emoji;
  $('complete-title').textContent = title;
  $('complete-sub').textContent = sub;
  $('complete-score').textContent = `${score} / ${maxScore}`;
  $('complete-pct').textContent = pct + '%';
  $('complete-time').textContent = timeTaken + 's';
  $('complete-stars').textContent = stars;
  $('complete-xp').textContent = `+${mission.xp} XP`;

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

// ─── PROFILE SETUP ────────────────────────────────────────────────────────────
function renderProfileSetup() {
  const avatarGrid = $('avatar-picker');
  if (!avatarGrid) return;
  avatarGrid.innerHTML = '';
  AVATARS.forEach(av => {
    const btn = el('button', 'avatar-btn', av);
    btn.onclick = () => { document.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('selected')); btn.classList.add('selected'); };
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
}

async function submitProfileSetup() {
  const username = $('setup-username')?.value?.trim();
  const avatarBtn = document.querySelector('.avatar-btn.selected');
  const groupBtn  = document.querySelector('.group-btn.selected');

  if (!username || username.length < 3) { toast('Username must be at least 3 characters', 'error'); return; }
  if (!avatarBtn) { toast('Please choose an avatar', 'error'); return; }
  if (!groupBtn)  { toast('Please choose your age group', 'error'); return; }

  await createProfile(username, groupBtn.dataset.group, avatarBtn.textContent);
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
const VISUAL_THEMES = ['default', 'synthwave', 'terminal', 'ocean', 'corporate'];

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
  renderProfileSetup();
  await initAuth();

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
