/* =========================================================================
   app.js — renders siteData into the DOM, handles routing + theme.
   Classic script (no ES modules) so it works from file:// when the four
   files sit in the same folder.
   ========================================================================= */
(function () {
  "use strict";

  var PAGES = ["home", "about", "experience", "projects"];
  var HOME_LIMIT = 3;

  /* ---------- small helpers ---------- */
  function el(id) { return document.getElementById(id); }
  function bullets(list) {
    return "<ul>" + list.map(function (b) { return "<li>" + b + "</li>"; }).join("") + "</ul>";
  }

  function experienceCard(x) {
    var loc = x.location ? " \u00b7 " + x.location : "";
    return '<article class="entry">' +
      '<div class="entry-head"><span class="entry-title">' + x.company + '</span>' +
      '<span class="entry-when">' + x.dates + '</span></div>' +
      '<div class="entry-role">' + x.role + loc + '</div>' +
      bullets(x.bullets) +
      '</article>';
  }

  function projectCard(p) {
    var repo = p.repo ? '<a class="repo" href="' + p.repo + '" target="_blank" rel="noopener">View repository \u2192</a>' : "";
    return '<article class="entry">' +
      '<div class="entry-head"><span class="entry-title">' + p.title + '</span>' +
      '<span class="entry-tag">' + p.tag + '</span></div>' +
      '<div class="entry-role">' + (p.stack || p.dates) + '</div>' +
      bullets(p.bullets) + repo +
      '</article>';
  }

  /* ---------- rail (persistent identity) ---------- */
  function renderRail() {
    var c = siteData.contact;
    el("rail").innerHTML =
      '<h1>' + siteData.name.replace(/ ([^ ]+)$/, "<br>$1") + '</h1>' +
      '<div class="rail-meta">' +
        '<a href="mailto:' + c.email + '">' + c.email + '</a>' +
        '<a href="' + c.github + '" target="_blank" rel="noopener">' + c.githubLabel + '</a>' +
        '<a href="' + c.linkedin + '">' + c.linkedinLabel + '</a>' +
      '</div>' +
      '<p class="rail-status">' + siteData.location + '<br>' + siteData.availability + '</p>';
  }

  /* ---------- pages ---------- */
  function renderHome() {
    var feaExp = siteData.experiences.filter(function (x) { return x.featured; }).slice(0, HOME_LIMIT);
    var feaProj = siteData.projects.filter(function (p) { return p.featured; }).slice(0, HOME_LIMIT);

    var skills = '<div class="skills">' + siteData.skills.map(function (s) {
      return '<div class="skill-row"><span class="k">' + s.group + '</span><span class="v">' +
        s.items.join(" \u00b7 ") + '</span></div>';
    }).join("") + '</div>';

    el("page-home").innerHTML =
      '<p class="intro">' + siteData.intro + '</p>' +
      '<p class="section-label gap">Experience</p>' +
      feaExp.map(experienceCard).join("") +
      '<a class="view-all" href="#experience">View all experience \u2192</a>' +
      '<p class="section-label gap">Selected Projects</p>' +
      feaProj.map(projectCard).join("") +
      '<a class="view-all" href="#projects">View all projects \u2192</a>' +
      '<p class="section-label gap">Skills</p>' +
      skills +
      '<div class="foot"><span>GPA 3.82 \u00b7 Dec 2027</span><span>' + siteData.availability + '</span></div>';
  }

  function renderAbout() {
    var a = siteData.about;
    var bio = '<div class="about-bio">' + a.bio.map(function (p) { return "<p>" + p + "</p>"; }).join("") + '</div>';
    var edu = a.education.map(function (e) {
      return '<div class="edu"><div class="school">' + e.school + '</div>' +
        '<div class="degree">' + e.degree + '</div>' +
        '<div class="meta"><span class="gpa">' + e.gpa + '</span><span>' + e.detail + '</span><span>' + e.dates + '</span></div></div>';
    }).join("");
    el("page-about").innerHTML =
      '<p class="section-label">About</p>' + bio +
      '<p class="section-label gap">Education</p>' + edu +
      '<p class="section-label gap">Relevant Coursework</p>' +
      '<p class="coursework">' + a.coursework + '</p>';
  }

  function renderExperience() {
    el("page-experience").innerHTML =
      '<p class="section-label">Experience</p>' +
      siteData.experiences.map(experienceCard).join("");
  }

  function renderProjects() {
    el("page-projects").innerHTML =
      '<p class="section-label">Projects</p>' +
      siteData.projects.map(projectCard).join("");
  }

  /* ---------- router + nav ---------- */
  function show(page) {
    if (PAGES.indexOf(page) === -1) page = "home";
    PAGES.forEach(function (p) {
      var node = el("page-" + p);
      if (node) node.classList.toggle("active", p === page);
    });
    document.querySelectorAll(".pill button[data-page]").forEach(function (b) {
      b.classList.toggle("active", b.dataset.page === page);
    });
    window.scrollTo({ top: 0, behavior: "auto" });
  }
  function route() {
    var hash = (location.hash || "#home").replace("#", "");
    show(hash);
  }

  /* ---------- theme ---------- */
  function initTheme() {
    var btn = el("themeBtn"), ico = el("themeIco"), txt = el("themeTxt");
    var saved;
    try { saved = localStorage.getItem("theme"); } catch (e) {}
    if (saved === "dark") { document.body.classList.add("dark"); ico.textContent = "\u263e"; txt.textContent = "Dark"; }
    btn.addEventListener("click", function () {
      var dark = document.body.classList.toggle("dark");
      ico.textContent = dark ? "\u263e" : "\u2600";
      txt.textContent = dark ? "Dark" : "Light";
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (e) {}
    });
  }

  /* ---------- boot ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    renderRail();
    renderHome();
    renderAbout();
    renderExperience();
    renderProjects();

    document.querySelectorAll(".pill button[data-page]").forEach(function (b) {
      b.addEventListener("click", function () { location.hash = "#" + b.dataset.page; });
    });
    window.addEventListener("hashchange", route);
    initTheme();
    route();
  });
})();
