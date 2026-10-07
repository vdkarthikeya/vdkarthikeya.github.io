(function () {
  "use strict";
  var D = siteData;
  var PAGES = D.sections.map(function (s) { return s[0]; });
  function el(id){ return document.getElementById(id); }

  function initials(name){
    var stop = {of:1,and:1,the:1,at:1,for:1,de:1};
    var words = name.replace(/[^a-zA-Z0-9\s]/g," ").split(/\s+/).filter(function(w){ return w && !stop[w.toLowerCase()]; });
    if (words.length === 0) return "?";
    if (words.length === 1) return words[0].slice(0,2).toUpperCase();
    return (words[0][0]+words[1][0]).toUpperCase();
  }
  function logoBadge(x, name){
    var mark = initials(name);
    var src = x.logo || (x.logoDomain ? "https://www.google.com/s2/favicons?sz=128&domain="+x.logoDomain : "");
    if (!src) return '<span class="ent-logo"><span class="ent-logo-fallback" style="display:flex">'+mark+'</span></span>';
    return '<span class="ent-logo"><img src="'+src+'" alt="" loading="lazy" onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'+
      '<span class="ent-logo-fallback">'+mark+'</span></span>';
  }
  function isCurrent(dates){ return /Present$/.test(dates); }
  function whenBlock(dates){
    return '<div class="xp-side"><span class="xp-when">'+dates+'</span>'+'</div>';
  }

  function xpRow(x){
    var org = x.url ? '<a href="'+x.url+'" target="_blank" rel="noopener" onclick="event.stopPropagation()">'+x.company+'</a>' : x.company;
    return '<article class="xp">'+
      '<div class="xp-head" role="button" tabindex="0" aria-expanded="false">'+
        logoBadge(x, x.company)+
        '<div class="xp-main"><div class="xp-org">'+org+'</div><div class="xp-role">'+x.role+'</div></div>'+
        whenBlock(x.dates)+
        '<button class="xp-toggle" tabindex="-1" aria-label="Show or hide details for '+x.company+'"></button>'+
      '</div>'+
      '<div class="xp-more"><div><ul>'+x.bullets.map(function(b){ return '<li>'+b+'</li>'; }).join("")+'</ul></div></div>'+
    '</article>';
  }
  function pjRow(p){
    return '<article class="pj"><div><div class="pj-title">'+p.title+'</div>'+
      '<div class="pj-line">'+p.line+'</div></div>'+
      '<div class="pj-side">'+(p.repo?'<a class="repo-inline" href="'+p.repo+'" target="_blank" rel="noopener">View code</a>':'')+'</div></article>';
  }
  function courseRows(rows){
    return rows.map(function(r){
      var cls = r.muted ? (r.grade==="IP" ? " ip" : " muted") : "";
      return '<div class="course-row"><span class="code">'+r.code+'</span><span class="ctitle">'+r.title+'</span><span class="grade'+cls+'">'+r.grade+'</span></div>';
    }).join("");
  }

  function renderRail(){
    var c = D.contact;
    el("rail").innerHTML =
      '<div class="avatar"><img src="'+D.photo+'" alt="'+D.name+'" decoding="async"></div>'+
      '<h1>'+D.name.replace(/ ([^ ]+)$/,"<br>$1")+'</h1>'+
      '<div class="rail-meta">'+
        '<a href="mailto:'+c.email+'"><span class="rm-ico">'+ICON.email+'</span>'+c.email+'</a>'+
        '<a href="'+c.github+'" target="_blank" rel="noopener"><span class="rm-ico">'+ICON.github+'</span>GitHub / vdkarthikeya</a>'+
        '<a href="'+c.linkedin+'" target="_blank" rel="noopener"><span class="rm-ico">'+ICON.linkedin+'</span>LinkedIn / vdkarthikeya</a>'+
        '<a href="'+D.resume+'" target="_blank" rel="noopener"><span class="rm-ico">'+ICON.resume+'</span>Résumé ↗</a>'+
      '</div>';
  }

  function renderTabs(){
    el("tabs").innerHTML = D.sections.map(function(s){ return '<button class="tab" data-page="'+s[0]+'">'+s[1]+'</button>'; }).join("");
  }

  function contactBlock(){
    var c = D.contact;
    return '<div class="contact"><h2>Contact me at</h2>'+
      '<a class="email" href="mailto:'+c.email+'">'+c.email+'</a>'+
      '</div>';
  }

  function renderHome(){
    var edu = D.about.education.map(function(e, i){
      var now = i === 0;
      return '<div class="tl-item"><span class="tl-dot"></span>'+
        '<div class="edu-top"><span class="edu-when">'+e.dates+'</span>'+'</div>'+
        '<div class="tl-row">'+logoBadge(e, e.school)+
          '<div class="tl-body"><div class="tl-head"><span class="edu-school">'+e.school+'</span>'+
          '<span class="stat">'+e.gpaValue+'<span class="max"> / '+e.gpaMax+' GPA</span></span></div>'+
          '<div class="edu-degree">'+e.degree+'</div><div class="edu-loc">'+e.location+'</div></div></div>'+
      '</div>';
    }).join("");
    el("page-home").innerHTML =
      '<p class="greet">'+D.greeting+'</p>'+
      D.intro.map(function(p){ return '<p class="intro">'+p+'</p>'; }).join("")+
      '<p class="sect-label gap">Education</p><div class="tl">'+edu+'</div>'+
      contactBlock();
  }
  function tools(title){
    return '<div class="page-tools"><p class="sect-label">'+title+'</p></div>';
  }
  function renderExperience(){
    el("page-experience").innerHTML = D.experience.map(xpRow).join("");
  }
  function renderLeadership(){
    el("page-leadership").innerHTML = D.leadership.map(xpRow).join("");
  }
  function renderProjects(){
    el("page-projects").innerHTML = D.projects.map(pjRow).join("");
  }
  function renderCourses(){
    var e = D.about.education;
    el("page-courses").innerHTML = 
      D.about.terms.slice().reverse().map(function(t, i){
        var cur = t.rows.some(function(r){ return r.grade === "IP"; });
        return '<div class="term"><div class="thead">'+t.term+'</div><div class="term-rows">'+courseRows(t.rows)+'</div></div>';
      }).join("");
  }

  var current = "home";

  function show(page){
    if (page === "about") page = "home";
    if (PAGES.indexOf(page) === -1) page = "home";
    current = page;
    PAGES.forEach(function(p){ el("page-"+p).classList.toggle("active", p===page); });
    document.querySelectorAll(".tab").forEach(function(b){ b.classList.toggle("active", b.dataset.page===page); });
    window.scrollTo(0,0);
  }
  function go(page){ show(page); try { history.replaceState(null,"","#"+page); } catch(e) {} }

  function init(){
    renderRail(); renderTabs(); renderHome(); renderExperience(); renderLeadership(); renderProjects(); renderCourses();

    document.addEventListener("keydown", function(e){
      if ((e.key==="Enter"||e.key===" ") && e.target.classList && e.target.classList.contains("xp-head")) { e.preventDefault(); e.target.click(); }
    });
    document.addEventListener("click", function(e){
      var tb = e.target.closest(".tab");
      if (tb) { go(tb.dataset.page); return; }
      var g = e.target.closest("[data-go]");
      if (g) { go(g.getAttribute("data-go")); return; }
      var h = e.target.closest(".xp-head");
      if (h) { var row = h.parentNode, o = row.classList.toggle("open"); h.setAttribute("aria-expanded", o); return; }
      var all = e.target.closest("[data-all]");
      if (all) { var sec = all.closest(".page"), on = sec.classList.toggle("all-open"); all.setAttribute("aria-pressed", on); all.textContent = on ? "Hide all details" : "Show all details"; }
    });
    window.addEventListener("hashchange", function(){ show((location.hash||"#home").slice(1)); });

    var root = document.documentElement, ico = el("themeIco");
    function sync(){ ico.innerHTML = root.classList.contains("dark") ? "&#9790;" : "&#9728;"; }
    sync();
    el("themeBtn").addEventListener("click", function(){
      var dark = root.classList.toggle("dark");
      try { localStorage.setItem("theme", dark ? "dark" : "light"); } catch (err) {}
      sync();
    });
    show((location.hash||"#home").slice(1));
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
