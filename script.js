// ===== 导航栏滚动效果 =====
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', function () {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  // 回到顶部按钮
  var backToTop = document.getElementById('backToTop');
  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

// ===== 移动端菜单切换 =====
navToggle.addEventListener('click', function () {
  navToggle.classList.toggle('active');
  navLinks.classList.toggle('open');
});

// 点击导航链接后关闭菜单
navLinks.querySelectorAll('a').forEach(function (link) {
  link.addEventListener('click', function () {
    navToggle.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== 回到顶部 =====
document.getElementById('backToTop').addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== 导航高亮当前区域 =====
var sections = document.querySelectorAll('section[id]');
var navItems = document.querySelectorAll('.nav-links a');

function highlightNav() {
  var scrollY = window.scrollY + 100;
  sections.forEach(function (section) {
    var top = section.offsetTop;
    var height = section.offsetHeight;
    var id = section.getAttribute('id');
    if (scrollY >= top && scrollY < top + height) {
      navItems.forEach(function (item) {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + id) {
          item.classList.add('active');
        }
      });
    }
  });
}

window.addEventListener('scroll', highlightNav);

// ===== 滚动渐入动画 =====
function initFadeIn() {
  var elements = document.querySelectorAll(
    '.course-card, .reflection-card, .hobby-card, .journal-card, .category-title'
  );
  elements.forEach(function (el) {
    el.classList.add('fade-in');
  });
}

function checkFadeIn() {
  var elements = document.querySelectorAll('.fade-in');
  elements.forEach(function (el) {
    var rect = el.getBoundingClientRect();
    var windowHeight = window.innerHeight;
    if (rect.top < windowHeight - 60) {
      el.classList.add('visible');
    }
  });
}

initFadeIn();
window.addEventListener('scroll', checkFadeIn);
window.addEventListener('load', checkFadeIn);

// ===== 数字递增动画 =====
var animated = false;

function animateNumbers() {
  if (animated) return;
  var stats = document.querySelectorAll('.stat-number');
  if (stats.length === 0) return;

  var firstStat = stats[0];
  var rect = firstStat.getBoundingClientRect();
  if (rect.top < window.innerHeight - 50) {
    animated = true;
    stats.forEach(function (stat) {
      var target = parseInt(stat.getAttribute('data-target'), 10);
      var current = 0;
      var increment = Math.max(1, Math.floor(target / 60));
      var timer = setInterval(function () {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        stat.textContent = current;
      }, 25);
    });
  }
}

window.addEventListener('scroll', animateNumbers);


// ===== Theme toggle =====
(function() {
  var toggle = document.getElementById('themeToggle');
  var html = document.documentElement;
  var saved = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = saved || (prefersDark ? 'dark' : 'light');
  html.setAttribute('data-theme', theme);

  if (toggle) {
    toggle.addEventListener('click', function() {
      var current = html.getAttribute('data-theme');
      var next = current === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
    });
  }
})();

// ===== 日常安排 Tab 切换 =====
(function() {
  var tabs = document.querySelectorAll('.schedule-tab');
  var panels = document.querySelectorAll('.schedule-panel');

  tabs.forEach(function(tab) {
    tab.addEventListener('click', function() {
      var target = tab.getAttribute('data-target');

      tabs.forEach(function(t) { t.classList.remove('active'); });
      panels.forEach(function(p) { p.classList.remove('active'); });

      tab.classList.add('active');
      var panel = document.getElementById(target);
      if (panel) panel.classList.add('active');
    });
  });
})();

// ===== 导航下拉菜单点击交互（移动端） =====
(function() {
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(function(dd) {
    var toggle = dd.querySelector('.nav-dropdown-toggle');
    if (!toggle) return;

    toggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 768) {
        e.preventDefault();
        dd.classList.toggle('open');
      }
    });
  });

  // 点击下拉菜单项后关闭移动端导航
  document.querySelectorAll('.nav-dropdown-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
      navToggle.classList.remove('active');
      navLinks.classList.remove('open');
      dropdowns.forEach(function(dd) { dd.classList.remove('open'); });
    });
  });
})();
