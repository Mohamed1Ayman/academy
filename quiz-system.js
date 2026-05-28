// ==================== نظام المسابقات الموحد ====================

const allQuestions = {
  quran: {
    label: "القرآن الكريم",
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
    label: "العقيدة",
    icon: "fa-mosque",
    data: window.aqeedaQuestionsByLevel || { easy: [], medium: [], hard: [] },
  },
  tafseer: {
    label: "التفسير",
    icon: "fa-book-open",
    data: window.tafseerQuestionsByLevel || { easy: [], medium: [], hard: [] },
  },
  math: {
    label: "الحساب",
    icon: "fa-calculator",
    data: { easy: [], medium: [], hard: [] },
    isDynamic: true,
  },
  arabic: {
    label: "النحو العربي",
    icon: "fa-language",
    data: window.arabicQuestionsByLevel || { easy: [], medium: [], hard: [] },
  },
 
  hadith: {
    label: "الحديث",
    icon: "fa-scroll",
    data: window.hadithQuestionsByLevel || { easy: [], medium: [], hard: [] },
  },
};

let currentCategory = "quran";
let currentLevel = "easy";
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let userAnswers = [];
let answerLocked = false;
let currentMathOperation = "addition";

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
  const old = document.querySelector(".quiz-category-selector");
  if (old) old.remove();

  const div = document.createElement("div");
  div.className = "quiz-category-selector";
  div.style.cssText = "text-align:center;margin-bottom:1.5rem;display:flex;justify-content:center;gap:0.6rem;flex-wrap:wrap;";

  Object.keys(allQuestions).forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "category-select-btn";
    btn.style.cssText = `padding:0.6rem 1.2rem;border:2px solid #2e7d32;background:${key === currentCategory ? "#2e7d32" : "transparent"};color:${key === currentCategory ? "white" : "#2e7d32"};border-radius:50px;cursor:pointer;font-weight:bold;font-family:'Tajawal',sans-serif;font-size:0.9rem;transition:all 0.3s;`;
    btn.innerHTML = `<i class="fas ${allQuestions[key].icon}"></i> ${allQuestions[key].label}`;

    btn.addEventListener("click", () => {
      currentCategory = key;
      document.querySelectorAll(".category-select-btn").forEach((b, i) => {
        const ck = Object.keys(allQuestions)[i];
        b.style.background = ck === key ? "#2e7d32" : "transparent";
        b.style.color = ck === key ? "white" : "#2e7d32";
      });
      const op = document.querySelector(".math-operation-selector");
      if (key === "math") {
        if (!op) addMathOperationSelector();
        else op.style.display = "flex";
      } else {
        if (op) op.style.display = "none";
      }
    });
    div.appendChild(btn);
  });

  const lb = document.querySelector(".level-buttons");
  if (lb) lb.parentNode.insertBefore(div, lb);
}

// ==================== محدد العملية الحسابية ====================
function addMathOperationSelector() {
  const old = document.querySelector(".math-operation-selector");
  if (old) old.remove();

  const div = document.createElement("div");
  div.className = "math-operation-selector";
  div.style.cssText = "text-align:center;margin-bottom:1.5rem;display:flex;justify-content:center;gap:0.6rem;flex-wrap:wrap;padding:0.8rem;background:var(--bg-primary);border-radius:15px;border:1px solid var(--border-color);";

  const ops = {
    addition: { label: "الجمع", icon: "fa-plus" },
    subtraction: { label: "الطرح", icon: "fa-minus" },
    multiplication: { label: "الضرب", icon: "fa-xmark" },
    division: { label: "القسمة", icon: "fa-divide" },
  };

  Object.keys(ops).forEach((key) => {
    const btn = document.createElement("button");
    btn.className = "operation-select-btn";
    btn.style.cssText = `padding:0.5rem 1rem;border:2px solid #2e7d32;background:${key === currentMathOperation ? "#2e7d32" : "transparent"};color:${key === currentMathOperation ? "white" : "#2e7d32"};border-radius:50px;cursor:pointer;font-weight:bold;font-family:'Tajawal',sans-serif;font-size:0.85rem;`;
    btn.innerHTML = `<i class="fas ${ops[key].icon}"></i> ${ops[key].label}`;

    btn.addEventListener("click", () => {
      currentMathOperation = key;
      document.querySelectorAll(".operation-select-btn").forEach((b, i) => {
        const ok = Object.keys(ops)[i];
        b.style.background = ok === key ? "#2e7d32" : "transparent";
        b.style.color = ok === key ? "white" : "#2e7d32";
      });
    });
    div.appendChild(btn);
  });

  const cs = document.querySelector(".quiz-category-selector");
  if (cs) cs.insertAdjacentElement("afterend", div);
}

// ==================== توليد أسئلة الحساب ====================
function generateMathQuestions(op, lvl) {
  const qs = [];
  for (let i = 0; i < 10; i++) {
    let n1, n2, ans, txt;
    if (lvl === "easy") { n1 = Math.floor(Math.random() * 10) + 1; n2 = Math.floor(Math.random() * 10) + 1; }
    else if (lvl === "medium") { n1 = Math.floor(Math.random() * 50) + 1; n2 = Math.floor(Math.random() * 25) + 1; }
    else { n1 = Math.floor(Math.random() * 100) + 1; n2 = Math.floor(Math.random() * 50) + 1; }

    if (op === "addition") { ans = n1 + n2; txt = `${n1} + ${n2} = ؟`; }
    else if (op === "subtraction") { if (n1 < n2) [n1, n2] = [n2, n1]; ans = n1 - n2; txt = `${n1} - ${n2} = ؟`; }
    else if (op === "multiplication") { ans = n1 * n2; txt = `${n1} × ${n2} = ؟`; }
    else { ans = n2; n1 = n1 * n2; txt = `${n1} ÷ ${n2} = ؟`; }

    const opts = new Set();
    while (opts.size < 3) { const v = Math.floor(Math.random() * 20) - 10; let w = ans + (v === 0 ? 5 : v); if (w !== ans && w > 0) opts.add(w); }
    const all = [...opts, ans];
    all.sort(() => Math.random() - 0.5);

    qs.push({ text: txt, options: all.map((o) => o.toString()), correct: all.indexOf(ans) });
  }
  return qs;
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

  if (currentCategory === "math") {
    currentQuestions = generateMathQuestions(currentMathOperation, currentLevel);
  } else {
    const categoryData = allQuestions[currentCategory]?.data;
    if (!categoryData || !categoryData[currentLevel] || categoryData[currentLevel].length === 0) {
      alert("لا توجد أسئلة متاحة لهذا القسم حالياً");
      return;
    }
    currentQuestions = [...categoryData[currentLevel]];
  }

  if (!currentQuestions || currentQuestions.length === 0) {
    alert("لا توجد أسئلة");
    return;
  }

  currentIndex = 0;
  score = 0;
  userAnswers = new Array(currentQuestions.length).fill(null);
  answerLocked = false;

  levelSelector.style.display = "none";
  quizContainer.classList.add("active");

  const lbl = allQuestions[currentCategory].label;
  if (currentLevel === "easy") quizTitle.textContent = "🌟 " + lbl + " - مستوى سهل";
  else if (currentLevel === "medium") quizTitle.textContent = "⭐ " + lbl + " - مستوى متوسط";
  else quizTitle.textContent = "🔥 " + lbl + " - مستوى صعب";

  loadQuestion();
});

// ==================== تحميل السؤال ====================
function loadQuestion() {
  if (currentIndex >= currentQuestions.length) { showResult(); return; }

  var q = currentQuestions[currentIndex];
  if (!q) { showResult(); return; }

  answerLocked = false;
  quizQuestion.innerHTML = "<strong>" + q.text + "</strong>";
  quizOptions.innerHTML = "";

  q.options.forEach((opt, idx) => {
    var d = document.createElement("div");
    d.className = "option";
    d.innerHTML = String.fromCharCode(65 + idx) + ". " + opt;
    d.onclick = function () { selectAnswer(idx); };
    quizOptions.appendChild(d);
  });

  updateProgress();
  quizNext.disabled = false;
}

// ==================== اختيار الإجابة ====================
function selectAnswer(s) {
  if (answerLocked) return;

  var q = currentQuestions[currentIndex];
  if (!q) return;

  var isCorrect = s === q.correct;
  if (isCorrect) score++;

  userAnswers[currentIndex] = s;
  answerLocked = true;

  document.querySelectorAll("#quizOptions .option").forEach((o, i) => {
    o.style.pointerEvents = "none";
    if (i === q.correct) o.classList.add("correct-highlight");
    if (i === s && i !== q.correct) o.classList.add("wrong-highlight");
  });

  quizQuestion.innerHTML = isCorrect
    ? "<strong>" + q.text + "</strong><br><span style=\"color:#4CAF50;\">✅ إجابة صحيحة!</span>"
    : "<strong>" + q.text + "</strong><br><span style=\"color:#f44336;\">❌ خطأ! الصحيح: " + q.options[q.correct] + "</span>";
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
  var w = currentQuestions.length - score;
  var p = Math.round((score / currentQuestions.length) * 100);
  var m = "";

  if (currentCategory === "math") {
    if (p >= 90) m = "🏆 عبقري!";
    else if (p >= 70) m = "👍 ممتاز!";
    else if (p >= 50) m = "📖 جيد!";
    else m = "💪 استمر!";
  } else if (currentCategory === "english") {
    if (p >= 90) m = "🏆 Excellent! You're an English master!";
    else if (p >= 70) m = "👍 Great job! Keep up the good work!";
    else if (p >= 50) m = "📖 Good! Practice more!";
    else m = "💪 Don't give up! Keep learning!";
  } else {
    if (p >= 80) m = "🏆 ممتاز!";
    else if (p >= 60) m = "👍 جيد!";
    else if (p >= 40) m = "📖 حاول مرة أخرى!";
    else m = "💪 لا تيأس!";
  }

  quizResult.innerHTML = "<div style=\"background:#2E7D32;color:white;padding:1.5rem;border-radius:15px;\">✅ " + score + "/" + currentQuestions.length + "<br>📊 " + p + "%<br>" + m + "</div>";
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
  quizProgress.style.width = ((currentIndex / currentQuestions.length) * 100) + "%";
  quizCounter.innerHTML = "السؤال " + (currentIndex + 1) + " / " + currentQuestions.length;
}

// ==================== مستمعي الأحداث ====================
quizNext.addEventListener("click", nextQuestion);
quizReset.addEventListener("click", resetQuiz);
backToLevels.addEventListener("click", backToSelection);