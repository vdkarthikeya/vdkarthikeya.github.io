(function () {
  "use strict";
  var D = siteData;
  var IDS = D.sections.map(function (s) { return s[0]; });
  var reduce = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : { matches: false };
  function el(id) { return document.getElementById(id); }
  function ext(href, cls, inner) { return '<a class="' + cls + '" href="' + href + '" target="_blank" rel="noopener">' + inner + '</a>'; }
  var ARROW = '<svg class="arr" viewBox="0 0 12 12" aria-hidden="true"><path d="M3 9 9 3M4 3h5v5" fill="none" stroke="currentColor" stroke-width="1.4"/></svg>';
  var SUN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M5.3 18.7l1.6-1.6M17.1 6.9l1.6-1.6"/></svg>';
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
    el("mark").innerHTML = '<span class="mark-k">' + D.short + '</span><span class="mark-v">' + D.name.split(" ").pop() + '</span>';
    el("tabs").innerHTML = D.sections.map(function (s) {
      return '<a class="tab" href="#' + s[0] + '" data-go="' + s[0] + '"><span class="tab-full">' + s[1] + '</span><span class="tab-short" aria-hidden="true">' + s[2] + '</span></a>';
    }).join("");
    var r = el("barResume"); r.href = D.resume; r.innerHTML = 'Resume' + ARROW;
  }
  function renderHero() {
    var h = D.hero, c = D.contact;
    var touch = window.matchMedia && window.matchMedia("(hover: none)").matches;
    var note = h.caption + (reduce.matches ? "" : " " + (touch ? h.hintTouch : h.hint));
    el("heroCopy").innerHTML =
      '<h1 class="hero-name">' + D.name + '</h1>' +
      '<p class="hero-line">' + h.line + '</p>' +
      '<div class="hero-acts">' +
        ext(D.resume, "btn btn-solid", "Resume" + ARROW) +
        '<a class="btn" href="mailto:' + c.email + '">Email</a>' +
        ext(c.github, "btn", "GitHub" + ARROW) +
        ext(c.linkedin, "btn", "LinkedIn" + ARROW) +
      '</div>' +
      '<p class="hero-note">' + note + '</p>';
  }

  /* About */
  function renderHome() {
    var edu = D.about.education.map(function (e) {
      return '<article class="edu rv">' + logoBadge(e, e.school) +
        '<div class="edu-body"><p class="meta">' + e.dates + ' · ' + e.location + '</p>' +
        '<h3 class="edu-school">' + e.school + '</h3>' +
        '<p class="edu-degree">' + e.degree + '</p></div>' +
        '<p class="edu-gpa"><span class="gpa-n">' + e.gpaValue + '</span><span class="meta">GPA / ' + e.gpaMax + '</span></p></article>';
    }).join("");
    el("home").innerHTML = head("home") +
      '<div class="about">' +
        '<figure class="portrait rv"><img src="' + D.photo + '" alt="' + D.name + '" decoding="async" loading="lazy"></figure>' +
        '<div class="about-copy rv"><p class="greet">' + D.greeting + '</p>' +
          D.intro.map(function (p) { return '<p class="intro">' + p + '</p>'; }).join("") +
          '<div class="now"><p class="label">Currently</p><ul>' + D.current.map(function (x) { return '<li>' + x + '</li>'; }).join("") + '</ul></div>' +
        '</div>' +
      '</div>' +
      '<p class="label sub rv">Education</p><div class="edus">' + edu + '</div>';
  }

  /* Experience and Leadership */
  var xpCount = 0;
  function xpRow(x) {
    var id = "xp" + (xpCount++);
    var org = x.url ? '<a href="' + x.url + '" target="_blank" rel="noopener" data-stop>' + x.company + '</a>' : x.company;
    return '<article class="xp rv">' +
      '<div class="xp-head" role="button" tabindex="0" aria-expanded="false" aria-controls="' + id + '">' +
        logoBadge(x, x.company) +
        '<div class="xp-main"><h3 class="xp-org">' + org + '</h3><p class="xp-role">' + x.role + '</p></div>' +
        '<p class="xp-when meta">' + x.dates + '</p>' +
        '<span class="xp-toggle" aria-hidden="true"></span>' +
      '</div>' +
      '<div class="xp-more" id="' + id + '"><div><ul>' + x.bullets.map(function (b) { return '<li>' + b + '</li>'; }).join("") + '</ul></div></div>' +
    '</article>';
  }
  function renderExperience() { el("experience").innerHTML = head("experience") + '<div class="xps">' + D.experience.map(xpRow).join("") + '</div>'; }
  function renderLeadership() { el("leadership").innerHTML = head("leadership") + '<div class="xps compact">' + D.leadership.map(xpRow).join("") + '</div>'; }

  /* Projects: featured set piece plus an index */
  function renderFeature(p) {
    var f = p.featured;
    return '<div class="feat" id="feat" data-step="0">' +
      '<div class="feat-stage">' +
        '<div class="feat-copy">' +
          '<h3 class="feat-title">' + p.title + '</h3>' +
          '<p class="feat-sum">' + f.summary + '</p>' +
          '<ol class="feat-steps">' + f.steps.map(function (s, i) {
            return '<li class="feat-step" data-i="' + i + '"><span class="fs-no meta">' + String(i + 1).padStart(2, "0") + '</span>' +
              '<div><h4>' + s.title + '</h4><p>' + s.text + '</p></div></li>';
          }).join("") + '</ol>' +
          '<div class="feat-links">' + (p.site ? ext(p.site, "btn btn-solid", "View site" + ARROW) : "") + (p.repo ? ext(p.repo, "btn", "View code" + ARROW) : "") + '</div>' +
          '<p class="feat-note meta">' + f.note + '</p>' +
        '</div>' +
        '<div class="feat-viz" aria-hidden="true">' +
          '<div class="dev-browser"><div class="dev-chrome"><i></i><i></i><i></i><span class="dev-url">' + (p.site || "").replace(/^https?:\/\//, "") + '</span></div>' +
            '<div class="dev-screen">' + f.desk.map(function (d, i) { return '<img class="shot shot-' + i + '" src="' + d.src + '" alt="' + d.alt + '" loading="lazy" decoding="async">'; }).join("") + '</div></div>' +
          '<div class="dev-phone"><div class="dev-notch"></div><div class="dev-phone-screen"><img class="strip" src="' + f.phone.src + '" alt="' + f.phone.alt + '" loading="lazy" decoding="async"></div></div>' +
          '<div class="feat-meter"><span></span></div>' +
        '</div>' +
      '</div>' +
    '</div>';
  }
  function pjRow(p, i) {
    return '<li class="pj rv">' +
      '<div class="pj-main"><h3 class="pj-title">' + p.title + '</h3><p class="pj-line">' + p.line + '</p></div>' +
      '<div class="pj-links">' + (p.site ? ext(p.site, "lnk", "Site" + ARROW) : "") + (p.repo ? ext(p.repo, "lnk", "Code" + ARROW) : "") + '</div></li>';
  }
  function renderProjects() {
    var vis = D.projects.filter(function (p) { return !p.hidden; });
    var feat = vis.filter(function (p) { return p.featured; })[0];
    var rest = vis.filter(function (p) { return p !== feat; });
    el("projects").innerHTML = head("projects") + (feat ? renderFeature(feat) : "") +
      '<ol class="pjs">' + rest.map(pjRow).join("") + '</ol>';
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

  function renderFoot() {
    var c = D.contact;
    el("contact").innerHTML =
      '<div class="foot-in"><h2 class="foot-h">Contact me at</h2>' +
      '<a class="foot-mail" href="mailto:' + c.email + '">' + c.email.replace("@", "<wbr>@") + '</a>' +
      '<div class="foot-row meta"><span>' + D.name + '</span><a href="#top" data-go="top">Back to top</a></div></div>';
  }

  /* Navigation */
  function barH() { return el("bar").getBoundingClientRect().height; }
  function go(id, smooth) {
    if (id === "about") id = "home";
    var target = id === "top" ? null : el(id);
    var y = target ? target.getBoundingClientRect().top + window.scrollY - barH() + 1 : 0;
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

  /* Featured set piece driver */
  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function ease(v) { return v * v * (3 - 2 * v); }
  var feat, steps, strip, phoneScreen, pinned = false;
  function setupFeature() {
    feat = el("feat"); if (!feat) return;
    steps = feat.querySelectorAll(".feat-step");
    strip = feat.querySelector(".strip"); phoneScreen = feat.querySelector(".dev-phone-screen");
    var mq = window.matchMedia("(min-width: 1000px) and (min-height: 680px)");
    var lastH = window.innerHeight;
    function mode() {
      if (window.innerHeight !== lastH) { lastH = window.innerHeight; feat._tooTall = false; feat._pw = null; }
      pinned = mq.matches && !reduce.matches && !feat._tooTall;
      feat.classList.toggle("pinned", pinned);
      feat.classList.toggle("static", !pinned);
      if (!pinned) {
        feat.style.removeProperty("--e1"); feat.style.removeProperty("--e2"); feat.style.removeProperty("--sy"); feat.style.removeProperty("--p");
        feat.dataset.step = "all";
      }
      driveFeature();
    }
    feat._mode = mode;
    window.addEventListener("resize", function () { if (window.innerHeight !== lastH) mode(); });
    if (mq.addEventListener) mq.addEventListener("change", mode); else if (mq.addListener) mq.addListener(mode);
    if (reduce.addEventListener) reduce.addEventListener("change", mode);
    mode();
    if (strip) strip.addEventListener("load", driveFeature);
    if ("IntersectionObserver" in window && !reduce.matches) {
      new IntersectionObserver(function (es) { if (es[0].isIntersecting) feat.classList.add("inview"); }, { threshold: 0.25 }).observe(feat);
    } else feat.classList.add("inview");
  }
  function driveFeature() {
    if (!feat) return;
    if (phoneScreen) feat.style.setProperty("--screen-h", phoneScreen.offsetHeight + "px");
    if (!pinned) return;
    var w = steps[0].querySelector("p").offsetWidth, key = w + ":" + window.innerHeight;
    if (w && key !== feat._pw) {
      feat._pw = key;
      var tallest = 0;
      steps.forEach(function (s) { tallest = Math.max(tallest, s.querySelector("p").scrollHeight); });
      feat.style.setProperty("--step-h", tallest + "px");
      var copy = feat.querySelector(".feat-copy");
      if (copy.offsetHeight > window.innerHeight - barH() - 12) { feat._tooTall = true; feat._mode(); return; }
    }
    var r = feat.getBoundingClientRect();
    var span = r.height - window.innerHeight;
    var p = clamp(-r.top / Math.max(1, span));
    var i = Math.min(steps.length - 1, Math.floor(p * steps.length * 0.999));
    feat.dataset.step = String(i);
    feat.style.setProperty("--p", p.toFixed(4));
    feat.style.setProperty("--e1", ease(clamp(p / 0.3)).toFixed(4));
    feat.style.setProperty("--e2", ease(clamp((p - 0.4) / 0.2)).toFixed(4));
    if (strip && phoneScreen) {
      var travel = Math.max(0, strip.offsetHeight - phoneScreen.offsetHeight);
      feat.style.setProperty("--sy", (-travel * ease(clamp((p - 0.62) / 0.33))).toFixed(1) + "px");
    }
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
    renderBar(); renderHero(); renderHome(); renderExperience(); renderProjects(); renderLeadership(); renderCourses(); renderFoot();
    setupFeature(); setupReveal();

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
      requestAnimationFrame(function () { ticking = false; spy(); driveFeature(); });
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("hashchange", function () { go(location.hash.slice(1) || "top", false); });

    var start = location.hash.slice(1);
    if (start && (IDS.indexOf(start) > -1 || start === "about")) {
      requestAnimationFrame(function () { go(start, false); spy(); });
    }
    spy();
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
