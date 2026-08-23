/* ===================== render ===================== */
(function () {
  "use strict";
  var PAGES = ["home","about","experience","projects","courses"], LIMIT = 3;
  function el(id){ return document.getElementById(id); }

  function liList(bullets, asideText){
    var items = bullets.map(function(b){ return "<li>"+b+"</li>"; });
    if (asideText) items.push('<li class="human"><span class="aside-pill">'+asideText+'</span></li>');
    return "<ul>" + items.join("") + "</ul>";
  }

  function initials(name){
    var stop = {of:1,and:1,the:1,at:1,for:1,de:1};
    var words = name.replace(/[^a-zA-Z0-9\s]/g," ").split(/\s+/).filter(function(w){
      return w && !stop[w.toLowerCase()];
    });
    if (words.length===0) return "?";
    if (words.length===1) return words[0].slice(0,2).toUpperCase();
    return (words[0][0]+words[1][0]).toUpperCase();
  }

  function logoBadge(x){
    var mark = initials(x.company);
    if (x.logo){
      return '<span class="ent-logo">'+
        '<img src="'+x.logo+'" alt="" loading="lazy" '+
          'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'+
        '<span class="ent-logo-fallback">'+mark+'</span>'+
      '</span>';
    }
    if (x.logoDomain){
      return '<span class="ent-logo">'+
        '<img src="https://www.google.com/s2/favicons?sz=64&domain='+x.logoDomain+'" alt="" loading="lazy" '+
          'onerror="this.style.display=\'none\';this.nextElementSibling.style.display=\'flex\'">'+
        '<span class="ent-logo-fallback">'+mark+'</span>'+
      '</span>';
    }
    return '<span class="ent-logo"><span class="ent-logo-fallback" style="display:flex">'+mark+'</span></span>';
  }

  function expCard(x, full){
    var list = full ? (x.full || x.bullets) : (x.home || x.bullets);
    var companyPart = x.url ? '<a href="'+x.url+'" target="_blank" rel="noopener">'+x.company+'</a>' : x.company;
    var loc = x.location ? x.location : "";
    return '<article class="entry entry-card">'+
      logoBadge(x)+
      '<div class="entry-body">'+
        '<div class="entry-top"><span class="entry-org">'+companyPart+'</span><span class="entry-when">'+x.dates+'</span></div>'+
        '<div class="entry-role">'+x.role+'</div>'+
        (loc ? '<div class="entry-loc">'+loc+'</div>' : '') +
        liList(list, x.aside) +
      '</div>'+
    '</article>';
  }

  function projCard(p, full){
    var list = full ? p.full : p.home;
    var repo = p.repo ? ' \u2014 <a class="repo-inline" href="'+p.repo+'" target="_blank" rel="noopener">repo \u2197</a>' : '';
    return '<article class="entry"><div class="entry-head"><span class="entry-title"><b>'+p.title+'</b>'+repo+'</span></div>'+
      liList(list, p.aside) + '</article>';
  }

  function viewAll(href, label){ return '<a class="view-all" href="'+href+'">'+label+' <span class="arr">\u2192</span></a>'; }

  function renderRail(){
    var c = siteData.contact;
    var now = siteData.current.map(function(x){
      return x.role + " @ " + x.org;
    }).join("<br>");
    el("rail").innerHTML =
      '<div class="rail-head">'+
        '<a href="https://vdkarthikeya.github.io/" class="avatar-link" aria-label="Visit vdkarthikeya.github.io">'+
          '<div class="avatar">'+
            '<img class="photo" src="'+siteData.photo+'" alt="'+siteData.name+'" loading="eager" decoding="async" onerror="this.style.display=\'none\';this.closest(\'.avatar\').classList.add(\'logo-on\')">'+
            '<div class="logo"><span class="dv">DV</span></div>'+
          '</div></a>'+
        '<h1>'+siteData.name.replace(/ ([^ ]+)$/,"<br>$1")+'</h1>'+
      '</div>'+
      '<div class="rail-meta">'+
        '<a href="mailto:'+c.email+'"><span class="rm-ico">'+ICON.email+'</span>'+c.email+'</a>'+
        '<a href="'+c.github+'" target="_blank" rel="noopener"><span class="rm-ico">'+ICON.github+'</span>'+c.githubLabel+'</a>'+
        '<a href="'+c.linkedin+'"><span class="rm-ico">'+ICON.linkedin+'</span>'+c.linkedinLabel+'</a>'+
        '<a href="'+siteData.resume+'" target="_blank" rel="noopener"><span class="rm-ico">'+ICON.resume+'</span>R\u00e9sum\u00e9 \u2197</a>'+
      '</div>'+
      '<p class="now"><b>Currently</b><br>'+now+'</p>';
  }

  function renderHome(){
    var c = siteData.contact;
    var fe = siteData.experiences.filter(function(x){return x.featured;}).slice(0,LIMIT);
    var fp = siteData.projects.filter(function(p){return p.featured;}).slice(0,LIMIT);
    var skills = siteData.skills.map(function(s){
      return '<div class="skill-row"><span class="k">'+s.group+'</span><span class="v">'+s.items.join(", ")+'</span></div>';
    }).join("");
    var socials = '<div class="socials">'+
      '<a href="'+c.github+'" target="_blank" rel="noopener" aria-label="GitHub">'+ICON.github+'</a>'+
      '<a href="'+c.linkedin+'" target="_blank" rel="noopener" aria-label="LinkedIn">'+ICON.linkedin+'</a>'+
      '<a href="mailto:'+c.email+'" aria-label="Email">'+ICON.email+'</a></div>';
    el("page-home").innerHTML =
      '<p class="greet">'+siteData.greeting+'</p>'+
      '<p class="intro">'+siteData.intro+'</p>'+
      '<p class="sect-label">Experience</p>'+ fe.map(function(x){return expCard(x,false);}).join("") + viewAll("#experience","View all experience") +
      '<p class="sect-label gap">Projects</p>'+ fp.map(function(p){return projCard(p,false);}).join("") + viewAll("#projects","View all projects") +
      '<p class="sect-label gap">Skills</p>'+ skills + socials;
  }

  function renderAbout(){
    var a = siteData.about;
    var bio = '<div class="about-bio">'+a.bio.map(function(p){return "<p>"+p+"</p>";}).join("")+'</div>';

    var edu = '<div class="tl">' + a.education.map(function(e){
      var stat = (e.gpaValue) ? '<div class="stat">'+e.gpaValue+'<span class="max"> / '+e.gpaMax+'</span></div>' : '';
      return '<div class="tl-item"><span class="tl-dot"></span>'+
        '<div class="edu-when">'+e.dates+'</div>'+
        '<div class="tl-head"><span class="edu-school">'+e.school+'</span>'+stat+'</div>'+
        '<div class="edu-degree">'+e.degree+'</div>'+
        '<div class="edu-loc">'+e.location+'</div>'+
        (e.courses ? viewAll("#courses","View all courses") : "")+
        '</div>';
    }).join("") + '</div>';

    el("page-about").innerHTML = '<p class="sect-label">About</p>'+bio+'<p class="sect-label gap">Education</p>'+edu;
  }

  function renderCourses(){
    var terms = siteData.about.terms.map(function(t){
      var rows = t.rows.map(function(r){
        return '<div class="course-row"><span class="code">'+r.code+'</span><span class="ctitle">'+r.title+'</span>'+
          '<span class="grade'+(r.muted?' muted':'')+'">'+r.grade+'</span></div>';
      }).join("");
      var note = t.note ? '<div class="tnote">'+t.note+'</div>' : "";
      return '<div class="term"><div class="term-head"><div class="thead">'+t.term+'</div>'+note+'</div><div class="term-rows">'+rows+'</div></div>';
    }).join("");
    el("page-courses").innerHTML = '<p class="sect-label">Coursework &amp; Grades</p>'+terms;
  }

  function renderExperience(){ el("page-experience").innerHTML = '<p class="sect-label">Experience</p>'+ siteData.experiences.map(function(x){return expCard(x,true);}).join(""); }
  function renderProjects(){ el("page-projects").innerHTML = '<p class="sect-label">Projects</p>'+ siteData.projects.map(function(p){return projCard(p,true);}).join(""); }

  function show(page){
    if (PAGES.indexOf(page)===-1) page="home";
    PAGES.forEach(function(p){ var n=el("page-"+p); if(n) n.classList.toggle("active", p===page); });
    document.querySelectorAll('.pill button[data-page]').forEach(function(b){ b.classList.toggle("active", b.dataset.page===page); });
    window.scrollTo({top:0, behavior:"auto"});
  }
  function route(){ show((location.hash||"#home").replace("#","")); }

  document.addEventListener("DOMContentLoaded", function(){
    renderRail(); renderHome(); renderAbout(); renderCourses(); renderExperience(); renderProjects();
    document.querySelectorAll('.pill button[data-page]').forEach(function(b){
      b.addEventListener("click", function(){ location.hash = "#"+b.dataset.page; });
    });
    window.addEventListener("hashchange", route);
    var tb=el("themeBtn"), ico=el("themeIco");
    tb.addEventListener("click", function(){ var dark=document.body.classList.toggle("dark"); ico.textContent = dark ? "\u263e" : "\u2600"; });
    route();
  });
})();
