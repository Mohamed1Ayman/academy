// =========================
// ELEMENTS
// =========================
const menuIcon = document.getElementById("menuIcon");
const navLinks = document.getElementById("navLinks");
const overlay = document.querySelector(".nav-overlay");
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// ==================== الوضع الليلي والنهاري ====================


// تحميل الوضع المحفوظ
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
}

if (themeToggle) {
  themeToggle.onclick = function() {
    if (body.classList.contains("dark-mode")) {
      // تحويل للنهاري
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      localStorage.setItem("theme", "light");
    } else {
      // تحويل لليلي
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    }
  };
}

// =========================
// OPEN / CLOSE MENU
// =========================
function openMenu() {
  navLinks.classList.add("active");
  menuIcon.classList.add("active");
  overlay.classList.add("active");
  body.classList.add("menu-open");
}

function closeMenu() {
  navLinks.classList.remove("active");
  menuIcon.classList.remove("active");
  overlay.classList.remove("active");
  body.classList.remove("menu-open");

  // اقفل كل dropdowns
  document.querySelectorAll(".dropdown").forEach(d => {
    d.classList.remove("active");
  });
}

// toggle menu
menuIcon?.addEventListener("click", () => {
  if (navLinks.classList.contains("active")) {
    closeMenu();
  } else {
    openMenu();
  }
});

overlay?.addEventListener("click", closeMenu);

// =========================
// DROPDOWN MOBILE (FIXED)
// =========================
document.querySelectorAll(".dropdown-toggle").forEach(toggle => {
  toggle.addEventListener("click", (e) => {
    if (window.innerWidth > 1024) return;

    e.preventDefault();
    e.stopPropagation();

    const parent = toggle.closest(".dropdown");

    // اقفل باقي dropdowns
    document.querySelectorAll(".dropdown").forEach(d => {
      if (d !== parent) d.classList.remove("active");
    });

    parent.classList.toggle("active");
  });
});

// =========================
// CLOSE MENU ON LINK CLICK
// =========================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth > 1024) return;

    // لو dropdown toggle ما تقفلش
    if (link.classList.contains("dropdown-toggle")) {
      e.preventDefault();
      return;
    }

    closeMenu();
  });
});

// =========================
// SMOOTH SCROLL (SAFE)
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {

    // استثناء dropdown
    if (this.classList.contains("dropdown-toggle")) return;

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// =========================
// ESC KEY
// =========================
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

window.onload = function() {
  addCategorySelector();
  buildCategoryButtons();
  displayAzkar("أذكار الصباح");
};

// ==================== التوجيه المباشر للمسابقات ====================
function navigateToQuiz(category) {
  // تحديث الفئة الحالية
  if (typeof currentCategory !== 'undefined') {
    currentCategory = category;
  }

  // تحديث أزرار اختيار المسابقة
  document.querySelectorAll('.category-select-btn').forEach((btn, i) => {
    if (typeof allQuestions !== 'undefined') {
      const catKey = Object.keys(allQuestions)[i];
      const isActive = catKey === category;
      btn.style.background = isActive ? '#2e7d32' : 'transparent';
      btn.style.color = isActive ? 'white' : '#2e7d32';
    }
  });

  // إخفاء محدد العمليات الحسابية إذا كان موجود
  const opSelector = document.querySelector('.math-operation-selector');
  if (opSelector) {
    opSelector.style.display = category === 'math' ? 'flex' : 'none';
  }

  // إظهار محدد العمليات إذا كان حساب
  if (category === 'math' && typeof addMathOperationSelector === 'function') {
    if (!document.querySelector('.math-operation-selector')) {
      addMathOperationSelector();
    }
  }

  // تمرير لقسم المسابقات
  const quizSection = document.getElementById('quiz');
  if (quizSection) {
    quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    
    // إضافة تأثير تمييز مؤقت
    quizSection.style.transition = 'all 0.5s ease';
    quizSection.style.boxShadow = '0 0 0 8px rgba(46, 125, 50, 0.3)';
    setTimeout(() => {
      quizSection.style.boxShadow = '';
    }, 2000);
  }

  // إغلاق القائمة المنسدلة إذا كانت مفتوحة
  document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
  if (typeof navLinksEl !== 'undefined' && navLinksEl) {
    navLinksEl.classList.remove('active');
  }
  if (typeof overlay !== 'undefined' && overlay) {
    overlay.classList.remove('active');
  }
  document.body.style.overflow = '';
}

// ==================== ربط روابط الفوتر والقائمة المنسدلة ====================
document.querySelectorAll('[data-quiz-category]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const category = this.getAttribute('data-quiz-category');
    if (category) {
      navigateToQuiz(category);
    }
  });
});