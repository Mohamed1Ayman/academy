// ==================== نظام المسابقات الموحد ====================

// دمج الأسئلة
const allQuestions = {
  quran: {
    label: " القرآن الكريم",
    icon: "fa-quran",
    data: {
      easy: [
        { text: "ما هي أول سورة في القرآن؟", options: ["الفاتحة", "البقرة", "الإخلاص", "الناس"], correct: 0 },
        { text: "كم عدد السور في القرآن؟", options: ["110", "114", "120", "100"], correct: 1 },
        { text: "ما هي السورة التي تسمى 'قل هو الله أحد'؟", options: ["الفلق", "الناس", "الإخلاص", "الكوثر"], correct: 2 },
        { text: "من هو رسول الله؟", options: ["محمد", "موسى", "عيسى", "إبراهيم"], correct: 0 },
        { text: "ما اسم والد النبي محمد؟", options: ["عبد الله", "أبو طالب", "عبد المطلب", "أبو لهب"], correct: 0 },
        { text: "ما هي السورة التي تبدأ بـ 'الحمد لله'؟", options: ["الإخلاص", "الفاتحة", "الناس", "الفلق"], correct: 1 },
        { text: "كم عدد أجزاء القرآن؟", options: ["20", "25", "30", "35"], correct: 2 },
        { text: "أطول سورة في القرآن هي؟", options: ["آل عمران", "البقرة", "النساء", "المائدة"], correct: 1 },
        { text: "ما هي أول كلمة نزلت من القرآن؟", options: ["الحمد", "بسم", "اقرأ", "قل"], correct: 2 },
        { text: "من هو أول الخلفاء الراشدين؟", options: ["عمر", "عثمان", "علي", "أبو بكر"], correct: 3 },
      ],
      medium: [
        { text: "ما هي السورة التي ليس فيها بسم الله الرحمن الرحيم؟", options: ["الفاتحة", "التوبة", "الإخلاص", "الفلق"], correct: 1 },
        { text: "كم سجدة تلاوة في القرآن؟", options: ["12", "14", "15", "10"], correct: 2 },
        { text: "ما هي أعظم آية في القرآن؟", options: ["آية الكرسي", "آية النور", "آية الدين", "آية الميراث"], correct: 0 },
        { text: "ما معنى اسم الله 'الرحمن'؟", options: ["الشديد العقاب", "الواسع الرحمة", "الغفور", "العزيز"], correct: 1 },
        { text: "من هو كاتب الوحي الذي لقب بترجمان القرآن؟", options: ["علي بن أبي طالب", "عبد الله بن عباس", "زيد بن ثابت", "عبد الله بن مسعود"], correct: 1 },
        { text: "ما هي السورة التي تسمى 'عروس القرآن'؟", options: ["الرحمن", "يس", "الواقعة", "الملك"], correct: 0 },
        { text: "أين نزلت سورة الفاتحة؟", options: ["المدينة", "مكة", "الطائف", "بدر"], correct: 1 },
        { text: "ما هو اسم جبريل عليه السلام في القرآن؟", options: ["الروح الأمين", "ميكائيل", "عزرائيل", "إسرافيل"], correct: 0 },
        { text: "كم مرة ذكر اسم 'محمد' في القرآن؟", options: ["3", "4", "5", "6"], correct: 1 },
        { text: "ما هي السورة التي تسمى 'قلب القرآن'؟", options: ["الفاتحة", "يس", "الملك", "الواقعة"], correct: 1 },
      ],
      hard: [
        { text: "ما معنى 'الصمد' في سورة الإخلاص؟", options: ["الذي لا يحتاج لأحد", "الذي يصمد أمام الأعداء", "الذي لا يأكل", "الذي لا يشرب"], correct: 0 },
        { text: "ما تفسير 'الضالين' في الفاتحة؟", options: ["الذين ضلوا عن الحق", "الذين ضلوا الطريق", "النصارى", "اليهود"], correct: 2 },
        { text: "ما هي 'السبع المثاني'؟", options: ["الفاتحة", "البقرة", "آل عمران", "يس"], correct: 0 },
        { text: "ما هو 'السموم' في سورة الطور؟", options: ["نار جهنم", "الجنة", "الملائكة", "الصبح"], correct: 0 },
        { text: "كم مرة ورد اسم جبريل عليه السلام في القرآن؟", options: ["10 مرات", "7 مرات", "4 مرات", "3 مرات"], correct: 3 },
        { text: "تفسير 'وأنذر عشيرتك الأقربين' نزلت في؟", options: ["دعوة قريش", "دعوة أهل مكة", "دعوة بني هاشم", "دعوة العرب"], correct: 2 },
        { text: "ما معنى 'الرهبان' في سورة المائدة؟", options: ["عباد المسيح", "كهنة اليهود", "علماء المسلمين", "الزهاد"], correct: 0 },
        { text: "تفسير 'كلا إن كتاب الفجار لفي سجين' سجين هي؟", options: ["مكان تحت الأرض", "سجن في جهنم", "كتاب مرقوم", "واد في جهنم"], correct: 3 },
        { text: "ما معنى 'الروح' في القرآن؟", options: ["جبريل", "القرآن", "الروح القدس", "كل ما سبق"], correct: 3 },
        { text: "ما هي السورة التي ليس فيها 'بسم الله' وفيها ذكر القتال؟", options: ["الأنفال", "التوبة", "الحديد", "الحشر"], correct: 1 },
      ],
    },
  },
  aqeeda: {
    label: " العقيدة",
    icon: "fa-mosque",
    data: typeof aqeedaQuestionsByLevel !== 'undefined' ? aqeedaQuestionsByLevel : { easy: [], medium: [], hard: [] },
  },
  tafseer: {
    label: " التفسير",
    icon: "fa-book-open",
    data: typeof tafseerQuestionsByLevel !== 'undefined' ? tafseerQuestionsByLevel : { easy: [], medium: [], hard: [] },
  },
  math: {
    label: " الحساب",
    icon: "fa-calculator",
    data: { easy: [], medium: [], hard: [] },
    isDynamic: true,
  },
    arabic: {
    label: " النحو العربي",
    icon: "fa-language",
    data: typeof arabicQuestionsByLevel !== 'undefined' ? arabicQuestionsByLevel : { easy: [], medium: [], hard: [] },
  },
};

// ==================== المتغيرات العامة ====================
let currentCategory = "quran";
let currentLevel = "easy";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let answerLocked = false;
let currentMathOperation = 'addition';

// ==================== عناصر DOM ====================
const levelSelector = document.getElementById("levelSelector");
const quizContainer = document.getElementById("quizContainer");
const quizTitle = document.getElementById("quizTitle");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizCounter = document.getElementById("quizCounter");
const quizProgress = document.getElementById("quizProgress");
const quizNext = document.getElementById("quizNext");
const quizResult = document.getElementById("quizResult");
const quizReset = document.getElementById("quizReset");
const backToLevels = document.getElementById("backToLevels");
const startQuizBtn = document.getElementById("startQuizBtn");

// ==================== إضافة أزرار اختيار نوع المسابقة ====================
function addCategorySelector() {
  const oldSelector = document.querySelector(".quiz-category-selector");
  if (oldSelector) oldSelector.remove();

  const categoryDiv = document.createElement("div");
  categoryDiv.className = "quiz-category-selector";
  categoryDiv.style.cssText = `
    text-align: center; margin-bottom: 1.5rem; display: flex;
    justify-content: center; gap: 1rem; flex-wrap: wrap;
  `;

  Object.keys(allQuestions).forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "category-select-btn";
    btn.style.cssText = `
      padding: 0.8rem 1.5rem; border: 2px solid #2e7d32;
      background: ${key === currentCategory ? "#2e7d32" : "transparent"};
      color: ${key === currentCategory ? "white" : "#2e7d32"};
      border-radius: 50px; cursor: pointer; font-weight: bold;
      font-family: 'Tajawal', sans-serif; font-size: 1rem; transition: all 0.3s;
    `;
    btn.innerHTML = `<i class="fas ${allQuestions[key].icon}"></i> ${allQuestions[key].label}`;

    btn.addEventListener("click", () => {
      currentCategory = key;
      document.querySelectorAll(".category-select-btn").forEach((b, i) => {
        const catKey = Object.keys(allQuestions)[i];
        b.style.background = catKey === key ? "#2e7d32" : "transparent";
        b.style.color = catKey === key ? "white" : "#2e7d32";
      });

      // إظهار/إخفاء محدد العملية الحسابية
      const opSelector = document.querySelector('.math-operation-selector');
      if (key === 'math') {
        if (!opSelector) addMathOperationSelector();
        else opSelector.style.display = 'flex';
      } else {
        if (opSelector) opSelector.style.display = 'none';
      }
    });

    categoryDiv.appendChild(btn);
  });

  const levelButtons = document.querySelector(".level-buttons");
  if (levelButtons) {
    levelButtons.parentNode.insertBefore(categoryDiv, levelButtons);
  }
}

// ==================== إضافة محدد العملية الحسابية ====================
function addMathOperationSelector() {
  const oldSelector = document.querySelector('.math-operation-selector');
  if (oldSelector) oldSelector.remove();

  const operationDiv = document.createElement('div');
  operationDiv.className = 'math-operation-selector';
  operationDiv.style.cssText = `
    text-align: center; margin-bottom: 1.5rem; display: flex;
    justify-content: center; gap: 0.8rem; flex-wrap: wrap;
    padding: 1rem; background: var(--bg-primary); border-radius: 15px;
    border: 1px solid var(--border-color);
  `;

  const operations = {
    addition: { label: " الجمع", icon: "fa-plus" },
    subtraction: { label: " الطرح", icon: "fa-minus" },
    multiplication: { label: " الضرب", icon: "fa-xmark" },
    division: { label: " القسمة", icon: "fa-divide" }
  };

  Object.keys(operations).forEach((key) => {
    const btn = document.createElement('button');
    btn.className = 'operation-select-btn';
    btn.style.cssText = `
      padding: 0.7rem 1.2rem; border: 2px solid #2e7d32;
      background: ${key === currentMathOperation ? "#2e7d32" : "transparent"};
      color: ${key === currentMathOperation ? "white" : "#2e7d32"};
      border-radius: 50px; cursor: pointer; font-weight: bold;
      font-family: 'Tajawal', sans-serif; font-size: 0.95rem; transition: all 0.3s;
    `;
    btn.innerHTML = `<i class="fas ${operations[key].icon}"></i> ${operations[key].label}`;

    btn.addEventListener('click', () => {
      currentMathOperation = key;
      document.querySelectorAll('.operation-select-btn').forEach((b, i) => {
        const opKey = Object.keys(operations)[i];
        b.style.background = opKey === key ? "#2e7d32" : "transparent";
        b.style.color = opKey === key ? "white" : "#2e7d32";
      });
    });

    operationDiv.appendChild(btn);
  });

  const categorySelector = document.querySelector('.quiz-category-selector');
  if (categorySelector) {
    categorySelector.insertAdjacentElement('afterend', operationDiv);
  }
}

// ==================== توليد أسئلة الحساب ====================
function generateMathQuestions(operation, level) {
  const questions = [];
  const count = 10;

  for (let i = 0; i < count; i++) {
    let num1, num2, answer, questionText;

    switch (level) {
      case 'easy':
        num1 = Math.floor(Math.random() * 10) + 1;
        num2 = Math.floor(Math.random() * 10) + 1;
        break;
      case 'medium':
        num1 = Math.floor(Math.random() * 50) + 1;
        num2 = Math.floor(Math.random() * 25) + 1;
        break;
      case 'hard':
        num1 = Math.floor(Math.random() * 100) + 1;
        num2 = Math.floor(Math.random() * 50) + 1;
        break;
    }

    switch (operation) {
      case 'addition':
        answer = num1 + num2;
        questionText = `${num1} + ${num2} = ؟`;
        break;
      case 'subtraction':
        if (num1 < num2) [num1, num2] = [num2, num1];
        answer = num1 - num2;
        questionText = `${num1} - ${num2} = ؟`;
        break;
      case 'multiplication':
        answer = num1 * num2;
        questionText = `${num1} × ${num2} = ؟`;
        break;
      case 'division':
        answer = num2;
        const product = num1 * num2;
        num1 = product;
        questionText = `${num1} ÷ ${num2} = ؟`;
        break;
    }

    const options = new Set();
    while (options.size < 3) {
      const variation = Math.floor(Math.random() * 20) - 10;
      let wrong = answer + (variation === 0 ? 5 : variation);
      if (wrong !== answer && wrong > 0) options.add(wrong);
    }
    const allOptions = [...options, answer];
    allOptions.sort(() => Math.random() - 0.5);

    questions.push({
      text: questionText,
      options: allOptions.map(opt => opt.toString()),
      correct: allOptions.indexOf(answer),
    });
  }

  return questions;
}

// ==================== اختيار المستوى ====================
let selectedLevel = "easy";
document.querySelectorAll(".level-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".level-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    selectedLevel = btn.dataset.level;
  });
});

// ==================== بدء المسابقة ====================
startQuizBtn.addEventListener("click", () => {
  currentLevel = selectedLevel;

  if (currentCategory === 'math') {
    currentQuestions = generateMathQuestions(currentMathOperation, currentLevel);
  } else {
    if (!allQuestions[currentCategory] || !allQuestions[currentCategory].data[currentLevel]) {
      alert("لا توجد أسئلة متاحة لهذا القسم حالياً");
      return;
    }
    currentQuestions = [...allQuestions[currentCategory].data[currentLevel]];
  }

  currentIndex = 0;
  score = 0;
  userAnswers = new Array(currentQuestions.length).fill(null);
  answerLocked = false;

  levelSelector.style.display = "none";
  quizContainer.classList.add("active");

  const categoryLabel = allQuestions[currentCategory].label;
  if (currentLevel === "easy") quizTitle.textContent = `🌟 ${categoryLabel} - مستوى سهل`;
  else if (currentLevel === "medium") quizTitle.textContent = `⭐ ${categoryLabel} - مستوى متوسط`;
  else quizTitle.textContent = `🔥 ${categoryLabel} - مستوى صعب`;

  loadQuestion();
});

// ==================== تحميل السؤال ====================
function loadQuestion() {
  if (currentIndex >= currentQuestions.length) { showResult(); return; }
  answerLocked = false;
  const q = currentQuestions[currentIndex];
  quizQuestion.innerHTML = `<strong>${q.text}</strong>`;
  quizOptions.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const optDiv = document.createElement("div");
    optDiv.className = "option";
    optDiv.innerHTML = `${String.fromCharCode(65 + idx)}. ${opt}`;
    optDiv.onclick = () => selectAnswer(idx);
    quizOptions.appendChild(optDiv);
  });

  updateProgress();
  quizNext.disabled = false;
}

// ==================== اختيار الإجابة ====================
function selectAnswer(selected) {
  if (answerLocked) return;
  const q = currentQuestions[currentIndex];
  const isCorrect = selected === q.correct;
  if (isCorrect) score++;
  userAnswers[currentIndex] = selected;
  answerLocked = true;

  const optionsDivs = document.querySelectorAll("#quizOptions .option");
  optionsDivs.forEach((opt, idx) => {
    opt.style.pointerEvents = "none";
    if (idx === q.correct) opt.classList.add("correct-highlight");
    if (idx === selected && idx !== q.correct) opt.classList.add("wrong-highlight");
  });

  if (isCorrect) {
    quizQuestion.innerHTML = `<strong>${q.text}</strong><br><span style="color: #4CAF50;">✅ إجابة صحيحة!</span>`;
  } else {
    quizQuestion.innerHTML = `<strong>${q.text}</strong><br><span style="color: #f44336;">❌ إجابة خاطئة! الإجابة الصحيحة: ${q.options[q.correct]}</span>`;
  }
}

// ==================== السؤال التالي ====================
function nextQuestion() {
  if (!answerLocked && userAnswers[currentIndex] === null) return;
  currentIndex++;
  if (currentIndex < currentQuestions.length) loadQuestion();
  else showResult();
}

// ==================== عرض النتيجة ====================
function showResult() {
  const wrongAnswers = currentQuestions.length - score;
  const percentage = Math.round((score / currentQuestions.length) * 100);
  let message = "";

  if (currentCategory === 'math') {
    if (percentage >= 90) message = "🏆 عبقري الرياضيات! أداء مذهل 🏆";
    else if (percentage >= 70) message = "👍 ممتاز! مهارات حسابية قوية 👍";
    else if (percentage >= 50) message = "📖 جيد! تدرب أكثر لتحسين مستواك 📖";
    else message = "💪 استمر في التدريب! الرياضيات تحتاج ممارسة 💪";
  } else {
    if (percentage >= 80) message = "🏆 ممتاز! حفظك الله وأعلى درجاتك 🏆";
    else if (percentage >= 60) message = "👍 جيد جداً! واصل المذاكرة 👍";
    else if (percentage >= 40) message = "📖 جيد! حاول مرة أخرى 📖";
    else message = "💪 لا تيأس! استمر في التعلم وحاول مرة أخرى 💪";
  }

  quizResult.innerHTML = `
    <div style="background:#2E7D32; color:white; padding:1.5rem; border-radius:15px;">
        ✅ عدد الإجابات الصحيحة: ${score} / ${currentQuestions.length}<br>
        ❌ عدد الإجابات الخاطئة: ${wrongAnswers}<br>
        🎯 الدرجة النهائية: ${score} من ${currentQuestions.length}<br>
        📊 النسبة المئوية: ${percentage}%<br>
        ${message}
    </div>`;
  quizNext.disabled = true;
  document.getElementById("quizProgress").style.width = "100%";
}

// ==================== إعادة المسابقة ====================
function resetQuiz() {
  currentIndex = 0;
  score = 0;
  userAnswers = new Array(currentQuestions.length).fill(null);
  answerLocked = false;
  quizResult.innerHTML = "";
  quizNext.disabled = false;
  loadQuestion();
}

function backToSelection() {
  levelSelector.style.display = "block";
  quizContainer.classList.remove("active");
  quizResult.innerHTML = "";
}

function updateProgress() {
  const percent = (currentIndex / currentQuestions.length) * 100;
  quizProgress.style.width = `${percent}%`;
  quizCounter.innerHTML = `السؤال ${currentIndex + 1} / ${currentQuestions.length}`;
}

quizNext.addEventListener("click", nextQuestion);
quizReset.addEventListener("click", resetQuiz);
backToLevels.addEventListener("click", backToSelection);

// ==================== نظام الأذكار ====================
let currentAzkarCategory = "أذكار الصباح";

const azkarCategories = [
  { key: "أذكار الصباح", label: "☀️ أذكار الصباح", icon: "fa-sun" },
  { key: "أذكار المساء", label: "🌙 أذكار المساء", icon: "fa-moon" },
  { key: "أذكار بعد السلام من الصلاة المفروضة", label: "🤲 أذكار بعد الصلاة", icon: "fa-mosque" },
  { key: "أذكار الطعام", label: "🍽️ أذكار الطعام", icon: "fa-utensils" },
  { key: "أذكار النوم", label: "😴 أذكار النوم", icon: "fa-bed" },
];

const azkarContainer = document.getElementById("azkarContainer");
const azkarCategoriesDiv = document.getElementById("azkarCategories");
const azkarLoading = document.getElementById("azkarLoading");
const azkarError = document.getElementById("azkarError");

// إخفاء اللودر فوراً
if (azkarLoading) azkarLoading.style.display = "none";
if (azkarError) azkarError.style.display = "none";

// بناء أزرار الفئات
function buildCategoryButtons() {
  if (!azkarCategoriesDiv) return;
  azkarCategoriesDiv.innerHTML = "";
  
  azkarCategories.forEach((cat) => {
    const btn = document.createElement("button");
    btn.className = "azkar-category-btn";
    btn.innerHTML = `<i class="fas ${cat.icon}"></i> ${cat.label}`;
    
    if (cat.key === currentAzkarCategory) {
      btn.classList.add("active");
    }
    
    btn.addEventListener("click", () => {
      currentAzkarCategory = cat.key;
      document.querySelectorAll(".azkar-category-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      displayAzkar(currentAzkarCategory);
    });
    
    azkarCategoriesDiv.appendChild(btn);
  });
}

// عرض الأذكار
function displayAzkar(category) {
  if (!azkarContainer) return;
  azkarContainer.innerHTML = "";

  // التحقق من وجود البيانات
  if (typeof azkarData === 'undefined') {
    azkarContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #f44336;">
        ❌ لم يتم تحميل بيانات الأذكار. تأكد من وجود ملف azkar-data.js
      </div>
    `;
    return;
  }

  const data = azkarData[category];

  if (!data || data.length === 0) {
    azkarContainer.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 2rem; color: var(--text-secondary);">
        لا توجد أذكار متاحة حالياً في هذا القسم
      </div>
    `;
    return;
  }

  data.forEach((zekr) => {
    // تخطي العناصر الفارغة
    if (!zekr.content || zekr.category === "stop" || zekr.content.trim() === "") {
      return;
    }

    const card = document.createElement("div");
    card.className = "azkar-card";

    card.innerHTML = `
      <div class="azkar-text">${zekr.content.replace(/\n/g, "<br>")}</div>
      <div class="azkar-meta">
        ${zekr.category ? `<span class="azkar-badge">📂 ${zekr.category}</span>` : ""}
        ${zekr.count && zekr.count !== "stop" ? `<span class="azkar-count">🔁 يكرر: ${zekr.count} مرة</span>` : ""}
        ${zekr.reference && zekr.reference !== "stop" ? `<span class="azkar-reference">📚 ${zekr.reference}</span>` : ""}
      </div>
      ${zekr.description && zekr.description !== "stop" ? `<div class="azkar-benefit">💡 ${zekr.description}</div>` : ""}
    `;

    azkarContainer.appendChild(card);
  });
}

// ==================== باقي الأنظمة (الأذكار، الوضع الليلي، إلخ) ====================
// [... نفس الكود السابق للأذكار والوضع الليلي ...]

// ==================== الوضع الليلي والنهاري ====================
const themeToggle = document.getElementById("themeToggle");
const body = document.body;

// تحميل الوضع المحفوظ
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  body.classList.remove("light-mode");
}

// تبديل الوضع
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");
    
    // حفظ التفضيل
    const currentTheme = body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", currentTheme);
  });
}

// ==================== القائمة للموبايل ====================
const menuIcon = document.getElementById("menuIcon");
const navLinksEl = document.getElementById("navLinks");

if (menuIcon && navLinksEl) {
  menuIcon.addEventListener("click", () => {
    navLinksEl.classList.toggle("active");
  });
}

// ==================== التنقل السلس ====================
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      if (navLinksEl) navLinksEl.classList.remove("active");
    }
  });
});

// ==================== نموذج الاتصال ====================
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("شكراً لتواصلك معنا! سنرد عليك قريباً إن شاء الله");
    e.target.reset();
  });
}

window.addEventListener("DOMContentLoaded", () => {
  addCategorySelector();
  buildCategoryButtons();
  displayAzkar("أذكار الصباح");
});

// ==================== Dropdown Mobile (إصلاح نهائي) ====================
document.addEventListener('DOMContentLoaded', function() {
  const dropdowns = document.querySelectorAll('.dropdown');
  const navLinksEl = document.getElementById('navLinks');
  
  dropdowns.forEach(dropdown => {
    const toggle = dropdown.querySelector('.dropdown-toggle');
    
    if (toggle) {
      toggle.addEventListener('click', function(e) {
        if (window.innerWidth <= 1024) {
          e.preventDefault();
          e.stopPropagation();
          
          const isActive = dropdown.classList.contains('active');
          
          // قفل كل القوائم أولاً
          dropdowns.forEach(d => d.classList.remove('active'));
          
          // فتح القائمة الحالية لو كانت مقفولة
          if (!isActive) {
            dropdown.classList.add('active');
          }
        }
      });
    }
  });
  
  // الضغط على الروابط داخل القائمة
  document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
      // سيب الرابط يشتغل عادي
      setTimeout(() => {
        dropdowns.forEach(d => d.classList.remove('active'));
        if (navLinksEl && window.innerWidth <= 1024) {
          navLinksEl.classList.remove('active');
        }
      }, 200);
    });
  });
  
  // الضغط بره القائمة
  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 1024) {
      if (!e.target.closest('.dropdown')) {
        dropdowns.forEach(d => d.classList.remove('active'));
      }
    }
  });
});

// ==================== التنقل لأقسام المسابقات من القائمة المنسدلة ====================
document.querySelectorAll('.dropdown-menu a[href="#quiz"]').forEach(link => {
  link.addEventListener('click', function(e) {
    const categoryMap = {
      'مسابقة القرآن': 'quran',
      'مسابقة العقيدة': 'aqeeda',
      'مسابقة التفسير': 'tafseer',
      'مسابقة الحساب': 'math',
      'مسابقة النحو': 'arabic'
    };
    
    const text = this.textContent.trim();
    const category = categoryMap[text];
    
    if (category && typeof currentCategory !== 'undefined') {
      e.preventDefault();
      currentCategory = text.includes('الحساب') ? 'math' : 
                        text.includes('العقيدة') ? 'aqeeda' :
                        text.includes('التفسير') ? 'tafseer' :
                        text.includes('النحو') ? 'arabic' : 'quran';
      
      // تحديث الأزرار
      document.querySelectorAll('.category-select-btn').forEach((btn, i) => {
        const catKey = Object.keys(allQuestions)[i];
        btn.style.background = catKey === currentCategory ? '#2e7d32' : 'transparent';
        btn.style.color = catKey === currentCategory ? 'white' : '#2e7d32';
      });
      
      // إغلاق القائمة
      dropdowns.forEach(d => d.classList.remove('active'));
      if (navLinksEl) navLinksEl.classList.remove('active');
      
      // تمرير للقسم
      const quizSection = document.getElementById('quiz');
      if (quizSection) {
        setTimeout(() => {
          quizSection.scrollIntoView({ behavior: 'smooth' });
        }, 300);
      }
    }
  });
});


