(function () {
  "use strict";
  var D = siteData;
  var IDS = D.sections.map(function (s) { return s[0]; });
  var reduce = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  function el(id) { return document.getElementById(id); }
  function ext(href, cls, inner, label) {
    return '<a class="' + cls + '" href="' + href + '" target="_blank" rel="noopener"' + (label ? ' aria-label="' + label + '"' : '') + '>' + inner + '</a>';
  }
  var ARROW = '<svg class="arr" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>';
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';
  var ICO_GH = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2C6.48 2 2 6.58 2 12.26c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.48 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.31.1-2.73 0 0 .84-.27 2.75 1.05A9.3 9.3 0 0 1 12 6.8c.85 0 1.71.12 2.51.35 1.91-1.32 2.75-1.05 2.75-1.05.55 1.42.2 2.47.1 2.73.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.8-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .26.18.58.69.48A10.04 10.04 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>';
  var ICO_LI = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6.94 8.5H3.75V20h3.19V8.5zM5.34 7.1c1.02 0 1.85-.83 1.85-1.85S6.36 3.4 5.34 3.4 3.5 4.23 3.5 5.25 4.32 7.1 5.34 7.1zM20.25 20h-3.18v-5.6c0-1.34-.02-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V20H9.88V8.5h3.05v1.57h.04c.43-.8 1.47-1.65 3.02-1.65 3.23 0 3.83 2.13 3.83 4.9V20z"/></svg>';
  var ICO_MAIL = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M4 6.5h16v11H4z"/><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="m4.5 7.2 7.5 6.1 7.5-6.1"/></svg>';
  var ICO_SHUFFLE = '<svg class="ico" viewBox="0 0 24 24" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" d="M20 11a8 8 0 0 0-14.5-4.6L4 8M4 4v4h4M4 13a8 8 0 0 0 14.5 4.6L20 16M20 20v-4h-4"/></svg>';
  var MOON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"><path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5z"/></svg>';

  function initials(name) {
    var stop = { of: 1, and: 1, the: 1, at: 1, "for": 1, de: 1 };
    var words = name.replace(/[^a-zA-Z0-9\s]/g, " ").split(/\s+/).filter(function (w) { return w && !stop[w.toLowerCase()]; });
    if (words.length === 0) return "?";
    if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
    return (words[0][0] + words[1][0]).toUpperCase();
  }
  function logoBadge(x, name) {
    var mark = initials(name);
    var src = x.logo || (x.logoDomain ? "https://www.google.com/s2/favicons?sz=128&domain=" + x.logoDomain : "");
    if (!src) return '<span class="logo"><span class="logo-fb" style="display:flex">' + mark + '</span></span>';
    return '<span class="logo' + (x.logo ? " full" : "") + '"><img src="' + src + '" alt="" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">' +
      '<span class="logo-fb">' + mark + '</span></span>';
  }
  function head(id) {
    var i = IDS.indexOf(id), s = D.sections[i];
    return '<header class="sect-head rv"><h2 id="h-' + id + '">' + s[1] + '</h2></header>';
  }

  /* Bar and hero */
  function renderBar() {
    el("tabs").innerHTML = D.sections.map(function (s) {
      return '<a class="tab" href="#' + s[0] + '" data-go="' + s[0] + '"><span class="tab-full">' + s[1] + '</span><span class="tab-short" aria-hidden="true">' + s[2] + '</span></a>';
    }).join("");
  }
  function renderHero() {
    var h = D.hero, c = D.contact;
    el("heroCopy").innerHTML =
      '<h1 class="hero-name">' + D.name + '</h1>' +
      '<p class="hero-line">' + h.line + '</p>' +
      '<div class="hero-acts">' +
        ext(D.resume, "btn btn-solid", "Resume" + ARROW) +
        '<a class="btn btn-ico" href="mailto:' + c.email + '" aria-label="Email">' + ICO_MAIL + '</a>' +
        ext(c.github, "btn btn-ico", ICO_GH, "GitHub") +
        ext(c.linkedin, "btn btn-ico", ICO_LI, "LinkedIn") +
      '</div>' +
      '<div class="now"><p class="now-h">Currently</p><ul class="now-list">' + D.current.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul></div>';
    /* Only the controls sit under the field: the class of the next point you add, and a reshuffle */
    el("lab").innerHTML =
      '<div class="lab-ctl">' +
        '<span class="chips" role="group" aria-label="Class of the next point you add to the field">' +
          '<button class="chip" id="clsA" type="button" aria-pressed="true"><i class="sw sw-a"></i>Class A</button>' +
          '<button class="chip" id="clsB" type="button" aria-pressed="false"><i class="sw sw-b"></i>Class B</button>' +
        '</span>' +
        '<button class="shuffle" id="reshuffle" type="button" aria-label="Reshuffle the spirals" title="Reshuffle (R)" aria-keyshortcuts="R">' + ICO_SHUFFLE + '</button>' +
      '</div>';
  }

  /* About */
  function renderHome() {
    var edu = D.about.education.map(function (e) {
      return '<article class="edu rv">' + logoBadge(e, e.school) +
        '<div class="edu-main"><h4 class="edu-school">' + e.school + '</h4>' +
        '<p class="edu-degree">' + e.degree + '</p>' +
        '<p class="edu-gpa">GPA: <b>' + e.gpaValue + '</b> <span>/ ' + e.gpaMax + '</span></p></div>' +
        '<p class="edu-when"><span>' + e.dates + '</span><span>' + e.location + '</span></p></article>';
    }).join("");
    el("home").innerHTML = head("home") +
      '<div class="about">' +
        '<figure class="portrait rv"><img src="' + D.photo + '" alt="' + D.name + '" decoding="async" loading="lazy"></figure>' +
        '<div class="about-copy rv"><p class="greet">' + D.greeting + '</p>' +
          D.intro.map(function (p) { return '<p class="intro">' + p + '</p>'; }).join("") +
        '</div>' +
      '</div>' +
      '<header class="subhead rv"><h3>Education</h3></header><div class="edus">' + edu + '</div>';
  }

  /* Experience: one section, grouped by real category */
  var xpCount = 0;
  function xpRow(x) {
    var id = "xp" + (xpCount++);
    var org = x.url ? '<a href="' + x.url + '" target="_blank" rel="noopener" data-stop>' + x.company + '</a>' : x.company;
    return '<article class="xp rv">' +
      '<div class="xp-head" role="button" tabindex="0" aria-expanded="false" aria-controls="' + id + '">' +
        logoBadge(x, x.company) +
        '<div class="xp-main"><h4 class="xp-org">' + org + '</h4><p class="xp-role">' + x.role + '</p></div>' +
        '<p class="xp-when meta">' + x.dates + '</p>' +
        '<span class="xp-toggle" aria-hidden="true"></span>' +
      '</div>' +
      '<div class="xp-more" id="' + id + '"><div><ul>' + x.bullets.map(function (b) { return '<li>' + b + '</li>'; }).join("") + '</ul></div></div>' +
    '</article>';
  }
  /* Experience: a category toggle; one group shows at a time, rows still expand for bullets */
  function renderExperience() {
    var short = { "Work Experience": "Work" };
    el("experience").innerHTML = head("experience") +
      '<div class="xtabs rv" role="tablist" aria-label="Experience categories">' + D.experience.map(function (g, i) {
        return '<button class="xtab" type="button" role="tab" id="xt' + i + '" aria-controls="xp-' + i + '" aria-selected="' + (i === 0) + '" tabindex="' + (i ? -1 : 0) + '">' +
          '<span class="tab-full">' + g.group + '</span><span class="tab-short" aria-hidden="true">' + (short[g.group] || g.group) + '</span></button>';
      }).join("") + '</div>' +
      D.experience.map(function (g, i) {
        return '<div class="xpanel" role="tabpanel" id="xp-' + i + '" aria-labelledby="xt' + i + '"' + (i ? " hidden" : "") + '><div class="xps">' + g.items.map(xpRow).join("") + '</div></div>';
      }).join("");
  }
  function setupExperienceTabs() {
    var tabs = [].slice.call(document.querySelectorAll(".xtab"));
    function pick(i, focus) {
      tabs.forEach(function (t, k) {
        var on = k === i;
        t.setAttribute("aria-selected", on); t.tabIndex = on ? 0 : -1;
        var p = el(t.getAttribute("aria-controls"));
        p.hidden = !on;
        if (on) { p.querySelectorAll(".rv").forEach(function (n) { n.classList.add("in"); }); p.classList.remove("xin"); void p.offsetWidth; p.classList.add("xin"); }
      });
      if (focus) tabs[i].focus();
    }
    tabs.forEach(function (t, i) {
      t.addEventListener("click", function () { pick(i); });
      t.addEventListener("keydown", function (e) {
        var n = e.key === "ArrowRight" ? i + 1 : e.key === "ArrowLeft" ? i - 1 : e.key === "Home" ? 0 : e.key === "End" ? tabs.length - 1 : null;
        if (n === null) return;
        e.preventDefault(); pick((n + tabs.length) % tabs.length, true);
      });
    });
  }

  /* Projects: one grid. Cards with a real demo play it only while in view. */
  function esc(t) { return String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
  function pjMedia(p) {
    var m = p.media; if (!m) return "";
    var alt = m.alt || "", inner = "";
    if (m.type === "video") {
      inner = '<video class="pj-vid" muted loop playsinline preload="none" poster="' + (m.poster || m.fallback) + '" aria-label="' + alt + '" data-src="' + m.src + '" data-fallback="' + (m.fallback || "") + '"></video>';
    } else if (m.type === "fade") {
      inner = m.frames.map(function (f, i) { return '<img class="pj-frame' + (i ? "" : " on") + '" src="' + f + '" alt="' + (i ? "" : alt) + '" loading="lazy" decoding="async">'; }).join("");
    } else if (m.type === "terminal") {
      inner = '<div class="term-demo" role="img" aria-label="' + alt + '"><div class="term-bar"><i></i><i></i><i></i></div><pre class="term-body" aria-hidden="true">' +
        m.lines.map(function (l) {
          var pre = l[0] === "$" ? '<span class="tp">$ </span>' : l[0] === ">" ? '<span class="tk">scm&gt; </span>' : "";
          return '<span class="tl' + (l[0] === "=" ? " to" : "") + '" data-k="' + (l[0] === "=" ? "out" : "in") + '">' + pre + '<span class="tx" data-t="' + esc(l[1]) + '">' + esc(l[1]) + '</span></span>';
        }).join("") + '<span class="tl"><span class="tk">scm&gt; </span><span class="tcur"></span></span></pre></div>';
    } else if (m.type === "schematic" && window.SightLine) {
      inner = '<div role="img" aria-label="' + alt + '">' + window.SightLine.media() + '</div>';
    } else if (m.src) {
      inner = '<img src="' + m.src + '" alt="' + alt + '" loading="lazy" decoding="async">';
    }
    return '<figure class="pj-media" data-type="' + m.type + '">' + inner + '</figure>';
  }
  function pjCard(p, i) {
    return '<li class="pj rv' + (i === 0 ? " pj-lead" : "") + '">' + pjMedia(p) +
      '<div class="pj-body"><h3 class="pj-title">' + p.title + '</h3><p class="pj-line">' + p.line + '</p>' +
      (p.note ? '<p class="pj-note meta">' + p.note + '</p>' : "") +
      '<div class="pj-links">' + (p.site ? ext(p.site, "lnk", "Site" + ARROW) : "") + (p.repo ? ext(p.repo, "lnk", "Code" + ARROW) : "") + '</div></div></li>';
  }
  function renderProjects() {
    var vis = D.projects.filter(function (p) { return !p.hidden; });
    el("projects").innerHTML = head("projects") + '<ul class="pjs">' + vis.map(pjCard).join("") + '</ul>';
  }

  /* Demo playback: start when a card is in view, stop when it leaves or the tab hides. */
  function setupDemos() {
    var figs = document.querySelectorAll(".pj-media");
    figs.forEach(function (f) {
      var type = f.dataset.type;
      if (type === "video") {
        var v = f.querySelector("video");
        v.addEventListener("error", function () { if (v.dataset.fallback) f.innerHTML = '<img src="' + v.dataset.fallback + '" alt="' + v.getAttribute("aria-label") + '">'; }, true);
        f._play = function (on) {
          if (on && !v.src) { v.src = v.dataset.src; }
          if (on) { var pr = v.play(); if (pr && pr.catch) pr.catch(function () {}); } else if (v.src) v.pause();
        };
      } else if (type === "fade") {
        var imgs = f.querySelectorAll(".pj-frame"), k = 0, tm = 0;
        f._play = function (on) {
          clearInterval(tm);
          if (on && imgs.length > 1) tm = setInterval(function () { imgs[k].classList.remove("on"); k = (k + 1) % imgs.length; imgs[k].classList.add("on"); }, 4200);
        };
      } else if (type === "terminal") {
        f._play = typer(f);
      } else if (type === "schematic" && window.SightLine) {
        window.SightLine.attach(f.querySelector(".sl-media"));
        f._play = window.SightLine.play;
      }
    });
    if (reduce.matches || !("IntersectionObserver" in window)) return;
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { e.target._in = e.isIntersecting; if (e.target._play) e.target._play(e.isIntersecting && !document.hidden); });
    }, { threshold: 0.35 });
    figs.forEach(function (f) { io.observe(f); });
    document.addEventListener("visibilitychange", function () { figs.forEach(function (f) { if (f._play) f._play(!!f._in && !document.hidden); }); });
  }
  /* Types the real interpreter session line by line: inputs character by character, outputs at once. */
  function typer(f) {
    var lines = f.querySelectorAll(".tl[data-k]"), last = f.querySelector(".tl:not([data-k])"), tm = 0, li = 0, ci = 0, on = false;
    function reset() { lines.forEach(function (l) { l.classList.add("hid"); var x = l.querySelector(".tx"); x.textContent = ""; }); last.classList.add("hid"); li = 0; ci = 0; }
    function step() {
      if (!on) return;
      if (li >= lines.length) { last.classList.remove("hid"); tm = setTimeout(function () { reset(); step(); }, 3600); return; }
      var l = lines[li], x = l.querySelector(".tx"), t = x.dataset.t;
      l.classList.remove("hid");
      if (l.dataset.k === "out") { x.textContent = t; li++; tm = setTimeout(step, 520); return; }
      ci++; x.textContent = t.slice(0, ci);
      if (ci >= t.length) { li++; ci = 0; tm = setTimeout(step, 380); } else tm = setTimeout(step, 26 + Math.random() * 40);
    }
    return function (v) {
      if (v === on) return; on = v; clearTimeout(tm);
      if (on) { if (!f._started) { f._started = true; reset(); } step(); }
    };
  }

  /* Courses */
  function renderCourses() {
    el("courses").innerHTML = head("courses") + '<div class="terms">' +
      D.about.terms.slice().reverse().map(function (t) {
        return '<div class="term rv"><p class="label">' + t.term + '</p><ul>' + t.rows.map(function (r) {
          return '<li class="course"><span class="c-code meta">' + r.code + '</span><span class="c-title">' + r.title + '</span><span class="c-grade' + (r.muted ? " ip" : "") + '">' + r.grade + '</span></li>';
        }).join("") + '</ul></div>';
      }).join("") + '</div>';
  }

  function renderContact() {
    var c = D.contact;
    el("contact").innerHTML = '<header class="sect-head rv"><h2 id="h-contact">Contact</h2></header>' +
      '<div class="ct-card rv">' +
        '<p class="ct-note">Reach out to me at</p>' +
        '<a class="ct-mail" href="mailto:' + c.email + '">' + c.email + ARROW + '</a>' +
      '</div>' +
      '<div class="ct-social rv">' +
        ext(c.linkedin, "btn btn-ico", ICO_LI, "LinkedIn") +
        ext(c.github, "btn btn-ico", ICO_GH, "GitHub") +
      '</div>';
    el("credit").innerHTML = '<p>&copy; ' + new Date().getFullYear() + ' ' + D.name + '</p>';
  }

  /* Navigation */
  function barH() { return el("bar").getBoundingClientRect().height; }
  function go(id, smooth) {
    if (id === "about") id = "home";
    if (id === "leadership") id = "experience";
    var target = id === "top" ? null : (el(id).querySelector(".sect-head") || el(id));
    var y = target ? target.getBoundingClientRect().top + window.scrollY - barH() - 32 : 0;
    window.scrollTo({ top: y, behavior: smooth && !reduce.matches ? "smooth" : "auto" });
    try { history.replaceState(null, "", id === "top" ? location.pathname : "#" + id); } catch (e) {}
  }
  function setActive(id) {
    document.querySelectorAll(".tab").forEach(function (t) {
      var on = t.dataset.go === id;
      t.classList.toggle("active", on);
      if (on) t.setAttribute("aria-current", "true"); else t.removeAttribute("aria-current");
    });
  }
  function spy() {
    var probe = barH() + window.innerHeight * 0.3, cur = null;
    IDS.forEach(function (id) { var r = el(id).getBoundingClientRect(); if (r.top <= probe) cur = id; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) cur = IDS[IDS.length - 1];
    setActive(cur);
    el("bar").classList.toggle("solid", window.scrollY > el("top").offsetHeight - barH() - 8);
  }

  /* Reveal on scroll */
  function setupReveal() {
    var items = document.querySelectorAll(".rv");
    if (reduce.matches || !("IntersectionObserver" in window)) { items.forEach(function (n) { n.classList.add("in"); }); return; }
    document.documentElement.classList.add("rv-on");
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { rootMargin: "0px 0px -8% 0px" });
    items.forEach(function (n) { io.observe(n); });
  }

  function init() {
    renderBar(); renderHero(); renderHome(); renderExperience(); renderProjects(); renderCourses(); renderContact();
    setupExperienceTabs(); setupDemos(); setupReveal();
    if (window.Hero) window.Hero.init();

    document.addEventListener("keydown", function (e) {
      if ((e.key === "Enter" || e.key === " ") && e.target.classList && e.target.classList.contains("xp-head")) { e.preventDefault(); e.target.click(); }
    });
    document.addEventListener("click", function (e) {
      if (e.target.closest("[data-stop]")) return;
      var g = e.target.closest("[data-go]");
      if (g) { e.preventDefault(); go(g.getAttribute("data-go"), true); return; }
      var h = e.target.closest(".xp-head");
      if (h) { var o = h.parentNode.classList.toggle("open"); h.setAttribute("aria-expanded", o); }
    });

    var root = document.documentElement, ico = el("themeIco");
    function sync() { ico.innerHTML = root.classList.contains("dark") ? SUN : MOON; }
    sync();
    el("themeBtn").addEventListener("click", function () {
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (err) {}
      sync();
    });

    var ticking = false;
    function onScroll() {
      if (ticking) return; ticking = true;
      requestAnimationFrame(function () { ticking = false; spy(); });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", function () { go(location.hash.slice(1) || "top", false); });

    var start = location.hash.slice(1);
    if (start && (IDS.indexOf(start) > -1 || start === "about" || start === "leadership" || start === "contact")) {
      requestAnimationFrame(function () { go(start, false); spy(); });
    }
    spy();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
