/* Builds the page from data/portfolio.js. You normally do NOT need to edit this file. */
(function () {
  const P = window.PORTFOLIO, T = P.theme, $ = s => document.querySelector(s);
  const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const safe = u => /^(https?:\/\/|mailto:|assets\/)/i.test(u || '') ? u : '';
  const root = document.documentElement;

  function applyTheme(mode) {
    root.dataset.theme = mode;
    Object.entries(T.colors[mode]).forEach(([k, v]) => root.style.setProperty('--' + k, v));
  }
  const rs = root.style;
  rs.setProperty('--font', T.fontFamily); rs.setProperty('--fs', T.baseFontSize); rs.setProperty('--hs', T.headingScale);
  rs.setProperty('--card-r', T.cardRadius); rs.setProperty('--btn-r', T.buttonRadius); rs.setProperty('--space', T.sectionSpacing);
  let mode = 'dark'; try { mode = localStorage.getItem('theme') || T.default; } catch (e) { mode = T.default; }
  applyTheme(mode);

  const S = P.sections, c = P.contact;
  const link = (u, label, cls) => safe(u) ? `<a class="btn ${cls}" href="${esc(safe(u))}" target="_blank" rel="noopener noreferrer">${esc(label)}</a>` : `<span class="btn ${cls} off" aria-disabled="true">${esc(label)} (not available yet)</span>`;
  const dl = esc(P.resume.downloadName || 'Resume.pdf');
  const resumeBtn = (cls) => `<a class="btn ${cls}" href="${esc(P.resume.file)}" download="${dl}">${esc(P.buttons.resume)}</a>`;

  const build = {
    about: () => P.about.map(p => `<p>${esc(p)}</p>`).join(''),
    skills: () => `<div class="grid">${P.skills.map(g => `<div class="card"><h3>${esc(g.group)}</h3><ul class="plain">${g.items.map(i => `<li>${esc(i.name)}${i.level ? ` <span class="pill">${esc(i.level)}</span>` : ''}</li>`).join('')}</ul></div>`).join('')}</div>`,
    projects: () => `<div class="grid wide">${P.projects.map(p => `<article class="card"><img loading="lazy" width="640" height="360" src="${esc(p.image)}" alt="${esc(p.imageAlt)}"><h3>${esc(p.title)}</h3><span class="pill st">${esc(p.status)}</span><p>${esc(p.description)}</p><p class="muted small">${p.technologies && p.technologies.length ? 'Technologies: ' + p.technologies.map(esc).join(', ') : esc(P.noTechText)}</p><div class="row">${link(p.github, 'GitHub', 'ghost sm')}${link(p.demo, 'Live Demo', 'ghost sm')}</div></article>`).join('')}</div>`,
    resume: () => `<div class="card"><p>${esc(P.resume.intro)}</p><div class="row">${resumeBtn('')}<button class="btn ghost" id="prev-btn" type="button" aria-expanded="false" aria-controls="prev-box">${esc(P.buttons.preview || 'Preview Resume')}</button></div><div id="prev-box" hidden><iframe id="prev-frame" title="Resume preview"></iframe><p class="muted small">Preview not showing on your device? <a href="${esc(P.resume.file)}" target="_blank" rel="noopener noreferrer">Open the resume in a new tab</a>.</p></div></div>`,
    contact: () => `<div class="card"><p>${esc(c.intro)}</p><ul class="plain"><li>Email: <a href="mailto:${esc(c.email)}">${esc(c.email)}</a></li>${safe(c.linkedin) ? `<li>LinkedIn: <a href="${esc(c.linkedin)}" target="_blank" rel="noopener noreferrer">${esc(c.linkedin)}</a></li>` : ''}${safe(c.github) ? `<li>GitHub: <a href="${esc(c.github)}" target="_blank" rel="noopener noreferrer">${esc(c.github)}</a></li>` : ''}${safe(c.leetcode) ? `<li>LeetCode: <a href="${esc(c.leetcode)}" target="_blank" rel="noopener noreferrer">${esc(c.leetcode)}</a></li>` : ''}<li>Phone: <a href="tel:+919360659461" onclick="return confirm('Call +91 9360659461?')">+91 9360659461</a></li></ul></div>`
  };

  $('#nav-links').innerHTML = `<a href="#home">${esc(P.navHome)}</a>` + P.order.map(k => `<a href="#${k}">${esc(S[k].nav)}</a>`).join('');
  $('#brand').textContent = P.name.replace(/\s+A$/, '') + ' Portfolio';
  $('#nav-resume').href = P.resume.file; $('#nav-resume').setAttribute('download', P.resume.downloadName || 'Resume.pdf'); $('#nav-resume').textContent = P.buttons.resume;
  $('#home').innerHTML = `<div class="wrap hero"><p class="pill">${esc(P.status)} · Graduating ${esc(P.graduation)}</p><h1>${esc(P.name)}</h1><p class="lead">${esc(P.education)}</p><p>${esc(P.intro)}</p><div class="row"><a class="btn" href="#projects">${esc(P.buttons.projects)}</a><a class="btn ghost" id="hero-prev" href="${P.order.includes('resume') ? '#resume' : esc(P.resume.file)}"${P.order.includes('resume') ? '' : ' target="_blank" rel="noopener noreferrer"'}>${esc(P.buttons.preview || 'Preview Resume')}</a>${resumeBtn('ghost')}<a class="btn ghost" href="#contact">${esc(P.buttons.contact)}</a></div></div>`;
  $('#sections').innerHTML = P.order.map(k => `<section id="${k}" class="wrap reveal" aria-labelledby="${k}-h"><h2 id="${k}-h">${esc(S[k].title)}</h2>${build[k]()}</section>`).join('');
  $('#year').textContent = P.footer.year === 'auto' ? new Date().getFullYear() : P.footer.year;
  $('#fname').textContent = P.name + '. ' + P.footer.text;

  $('#theme').onclick = () => { mode = root.dataset.theme === 'dark' ? 'light' : 'dark'; applyTheme(mode); try { localStorage.setItem('theme', mode); } catch (e) {} };
  const burger = $('#burger'), links = $('#nav-links');
  burger.onclick = () => burger.setAttribute('aria-expanded', links.classList.toggle('open'));
  links.addEventListener('click', e => { if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); } });
  const io = new IntersectionObserver(es => es.forEach(x => x.isIntersecting && x.target.classList.add('in')), { threshold: .08 });
  document.querySelectorAll('.reveal').forEach(x => io.observe(x));
  const pb = $('#prev-btn');
  function setPreview(open) {
    const box = $('#prev-box'), fr = $('#prev-frame'); if (!box) return;
    if (open && !fr.src) fr.src = P.resume.file + '#view=FitH';
    box.hidden = !open; pb.setAttribute('aria-expanded', open); pb.textContent = open ? 'Hide Preview' : (P.buttons.preview || 'Preview Resume');
  }
  if (pb) pb.onclick = () => setPreview($('#prev-box').hidden);
  const hp = $('#hero-prev'); if (hp && pb) hp.addEventListener('click', () => setPreview(true));
  const top = $('#top'); top.onclick = () => scrollTo({ top: 0, behavior: 'smooth' });
  addEventListener('scroll', () => top.hidden = scrollY < 500, { passive: true });
})();
