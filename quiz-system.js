// ==================== نظام المسابقات الموحد والمتطور ====================
// أكاديمية اتكلم عربي

// ==================== البيانات ====================
const allQuestions = {
  quran: {
    label: "القرآن الكريم",
    icon: "fa-quran",
    description: "اختبر معلوماتك في علوم القرآن الكريم",
    difficulty: "medium",
    color: "#2e7d32",
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
    description: "اختبر معلوماتك في أصول العقيدة الإسلامية",
    difficulty: "medium",
    color: "#9c27b0",
    data: window.aqeedaQuestionsByLevel || { easy: [], medium: [], hard: [] },
  },
  tafseer: {
    label: "التفسير",
    icon: "fa-book-open",
    description: "اختبر معلوماتك في تفسير القرآن الكريم",
    difficulty: "hard",
    color: "#ff9800",
    data: window.tafseerQuestionsByLevel || { easy: [], medium: [], hard: [] },
  },
  math: {
    label: "الحساب",
    icon: "fa-calculator",
    description: "اختبر قدراتك في الحساب والرياضيات",
    difficulty: "easy",
    color: "#2196f3",
    data: { easy: [], medium: [], hard: [] },
    isDynamic: true,
  },
  arabic: {
    label: "النحو العربي",
    icon: "fa-language",
    description: "اختبر مهاراتك في قواعد اللغة العربية",
    difficulty: "medium",
    color: "#00bcd4",
    data: window.arabicQuestionsByLevel || { easy: [], medium: [], hard: [] },
  },
  hadith: {
    label: "الحديث النبوي",
    icon: "fa-scroll",
    description: "اختبر معلوماتك في علم الحديث النبوي",
    difficulty: "medium",
    color: "#607d8b",
    data: window.hadithQuestionsByLevel || { easy: [], medium: [], hard: [] },
  },
};

// ==================== حالة المسابقة ====================
let quizState = {
  currentCategory: "quran",
  currentLevel: "medium",
  currentQuestions: [],
  currentIndex: 0,
  score: 0,
  userAnswers: [],
  answerLocked: false,
  currentMathOperation: "addition",
  quizStarted: false
};

// ==================== عناصر DOM ====================
const quizzesCategoriesGrid = document.getElementById("quizzesCategoriesGrid");
const levelSelector = document.getElementById("levelSelector");
const quizContainer = document.getElementById("quizContainer");
const quizTitle = document.getElementById("quizTitle");
const quizLevelBadge = document.getElementById("quizLevelBadge");
const quizQuestion = document.getElementById("quizQuestion");
const quizOptions = document.getElementById("quizOptions");
const quizCounter = document.getElementById("quizCounter");
const quizProgress = document.getElementById("quizProgress");
const quizPrev = document.getElementById("quizPrev");
const quizNext = document.getElementById("quizNext");
const quizResult = document.getElementById("quizResult");
const quizReset = document.getElementById("quizReset");
const backToQuizzesBtn = document.getElementById("backToQuizzesBtn");
const startQuizBtn = document.getElementById("startQuizBtn");

// ==================== عرض بطاقات المسابقات ====================
function displayQuizzesCategories() {
  if (!quizzesCategoriesGrid) return;
  
  quizzesCategoriesGrid.innerHTML = "";
  
  Object.keys(allQuestions).forEach(key => {
    const quiz = allQuestions[key];
    const card = document.createElement("div");
    card.className = "quiz-category-card";
    card.setAttribute("data-category", key);
    
    card.innerHTML = `
      <div class="quiz-card-icon" style="background: linear-gradient(135deg, ${quiz.color}, ${quiz.color}dd);">
        <i class="fas ${quiz.icon}"></i>
      </div>
      <div class="quiz-card-content">
        <h3>${quiz.label}</h3>
        <p>${quiz.description}</p>
        <div class="quiz-card-stats">
          <span class="quiz-difficulty difficulty-${quiz.difficulty}">
            ${quiz.difficulty === 'easy' ? 'سهل' : quiz.difficulty === 'medium' ? 'متوسط' : 'صعب'}
          </span>
          <span class="quiz-questions-count">
            <i class="fas fa-question-circle"></i> 
            ${getQuestionsCount(key)} سؤال
          </span>
        </div>
      </div>
    `;
    
    card.addEventListener("click", () => {
      selectQuizCategory(key);
    });
    
    quizzesCategoriesGrid.appendChild(card);
  });
}

// ==================== الحصول على عدد الأسئلة ====================
function getQuestionsCount(categoryKey) {
  const quiz = allQuestions[categoryKey];
  if (quiz.isDynamic) return 10;
  if (quiz.data.medium && quiz.data.medium.length > 0) return quiz.data.medium.length;
  if (quiz.data.easy && quiz.data.easy.length > 0) return quiz.data.easy.length;
  return 10;
}

// ==================== محدد العملية الحسابية ====================
function addMathOperationSelector() {
  const old = document.querySelector(".math-operation-selector");
  if (old && old.parentNode) old.remove();

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
    btn.className = `operation-select-btn ${key === quizState.currentMathOperation ? 'active' : ''}`;
    btn.innerHTML = `<i class="fas ${ops[key].icon}"></i> ${ops[key].label}`;

    btn.addEventListener("click", () => {
      quizState.currentMathOperation = key;
      document.querySelectorAll(".operation-select-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
    });
    
    div.appendChild(btn);
  });

  if (levelSelector) {
    levelSelector.appendChild(div);
  }
}

// ==================== توليد أسئلة الحساب ====================
function generateMathQuestions(op, level) {
  const questions = [];
  const count = 10;
  
  for (let i = 0; i < count; i++) {
    let n1, n2, answer, text;
    
    if (level === "easy") { 
      n1 = Math.floor(Math.random() * 10) + 1; 
      n2 = Math.floor(Math.random() * 10) + 1; 
    } else if (level === "medium") { 
      n1 = Math.floor(Math.random() * 50) + 1; 
      n2 = Math.floor(Math.random() * 25) + 1; 
    } else { 
      n1 = Math.floor(Math.random() * 100) + 1; 
      n2 = Math.floor(Math.random() * 50) + 1; 
    }

    switch(op) {
      case "addition":
        answer = n1 + n2;
        text = `${n1} + ${n2} = ؟`;
        break;
      case "subtraction":
        if (n1 < n2) [n1, n2] = [n2, n1];
        answer = n1 - n2;
        text = `${n1} - ${n2} = ؟`;
        break;
      case "multiplication":
        answer = n1 * n2;
        text = `${n1} × ${n2} = ؟`;
        break;
      case "division":
        answer = n2;
        n1 = n1 * n2;
        text = `${n1} ÷ ${n2} = ؟`;
        break;
      default:
        answer = n1 + n2;
        text = `${n1} + ${n2} = ؟`;
    }

    const options = new Set();
    options.add(answer);
    while (options.size < 4) {
      let offset = Math.floor(Math.random() * 20) - 10;
      let wrong = answer + (offset === 0 ? 5 : offset);
      if (wrong > 0 && wrong !== answer) options.add(wrong);
    }
    
    const optionsArray = Array.from(options);
    optionsArray.sort(() => Math.random() - 0.5);
    
    questions.push({
      text: text,
      options: optionsArray.map(o => o.toString()),
      correct: optionsArray.indexOf(answer)
    });
  }
  
  return questions;
}

// ==================== اختيار فئة المسابقة ====================
function selectQuizCategory(categoryKey) {
  const quiz = allQuestions[categoryKey];
  if (!quiz) return;
  
  quizState.currentCategory = categoryKey;
  quizState.currentLevel = "medium";
  
  // تحديث المؤشرات في أزرار المستوى
  document.querySelectorAll(".level-btn").forEach(btn => {
    btn.classList.remove("active");
    if (btn.dataset.level === "medium") btn.classList.add("active");
  });
  
  // إخفاء شبكة المسابقات
  if (quizzesCategoriesGrid) quizzesCategoriesGrid.style.display = "none";
  
  // إظهار اختيار المستوى
  if (levelSelector) {
    levelSelector.style.display = "block";
    
    // تحديث عنوان المسابقة المختارة
    const titleElem = document.getElementById("selectedQuizTitle");
    if (titleElem) {
      titleElem.innerHTML = `
        <i class="fas ${quiz.icon}"></i> ${quiz.label}
        <small>اختر مستوى الصعوبة المناسب لك</small>
      `;
    }
  }
  
  // إخفاء حاوية المسابقة إذا كانت ظاهرة
  if (quizContainer) quizContainer.style.display = "none";
  
  // إضافة محدد العملية الحسابية إذا كانت المسابقة حساب
  if (categoryKey === "math") {
    addMathOperationSelector();
  } else {
    const opSelector = document.querySelector(".math-operation-selector");
    if (opSelector) opSelector.remove();
  }
}

// ==================== بدء المسابقة ====================
function startQuiz() {
  const activeLevel = document.querySelector(".level-btn.active");
  quizState.currentLevel = activeLevel ? activeLevel.dataset.level : "medium";
  
  const category = allQuestions[quizState.currentCategory];
  
  if (quizState.currentCategory === "math") {
    quizState.currentQuestions = generateMathQuestions(quizState.currentMathOperation, quizState.currentLevel);
  } else {
    const questionsData = category.data[quizState.currentLevel];
    if (!questionsData || questionsData.length === 0) {
      alert(`لا توجد أسئلة متاحة لمستوى ${quizState.currentLevel} في قسم ${category.label}`);
      return;
    }
    quizState.currentQuestions = [...questionsData];
  }
  
  if (quizState.currentQuestions.length === 0) {
    alert("لا توجد أسئلة متاحة");
    return;
  }
  
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.userAnswers = new Array(quizState.currentQuestions.length).fill(null);
  quizState.answerLocked = false;
  quizState.quizStarted = true;
  
  if (levelSelector) levelSelector.style.display = "none";
  if (quizContainer) {
    quizContainer.style.display = "block";
    quizContainer.classList.add("active");
  }
  
  const levelNames = { easy: "سهل", medium: "متوسط", hard: "صعب" };
  const levelIcon = { easy: "🌟", medium: "⭐", hard: "🔥" };
  if (quizTitle) quizTitle.innerHTML = `<i class="fas ${category.icon}"></i> ${category.label}`;
  if (quizLevelBadge) {
    quizLevelBadge.style.display = "inline-block";
    quizLevelBadge.innerHTML = `${levelIcon[quizState.currentLevel]} مستوى ${levelNames[quizState.currentLevel]}`;
  }
  
  if (quizPrev) quizPrev.style.display = "inline-flex";
  
  loadQuestion();
}

// ==================== تحميل السؤال ====================
function loadQuestion() {
  if (quizState.currentIndex >= quizState.currentQuestions.length) {
    showResult();
    return;
  }
  
  const q = quizState.currentQuestions[quizState.currentIndex];
  if (!q) {
    showResult();
    return;
  }
  
  quizState.answerLocked = false;
  
  if (quizQuestion) quizQuestion.innerHTML = `<i class="fas fa-question-circle" style="color: #2e7d32;"></i> ${q.text}`;
  
  if (quizOptions) {
    quizOptions.innerHTML = "";
    const letters = ["أ", "ب", "ج", "د"];
    
    q.options.forEach((opt, idx) => {
      const isSelected = quizState.userAnswers[quizState.currentIndex] === idx;
      const optionDiv = document.createElement("div");
      optionDiv.className = `option ${isSelected ? 'selected' : ''}`;
      optionDiv.innerHTML = `<span style="font-weight: bold; margin-left: 10px;">${letters[idx]}.</span> ${opt}`;
      optionDiv.onclick = () => selectAnswer(idx);
      quizOptions.appendChild(optionDiv);
    });
  }
  
  updateProgress();
  
  if (quizPrev) quizPrev.disabled = quizState.currentIndex === 0;
  if (quizNext) {
    quizNext.innerHTML = quizState.currentIndex === quizState.currentQuestions.length - 1 
      ? '<i class="fas fa-check"></i> إنهاء' 
      : 'التالي <i class="fas fa-arrow-left"></i>';
  }
}

// ==================== اختيار الإجابة ====================
function selectAnswer(selectedIndex) {
  if (quizState.answerLocked) return;
  
  const q = quizState.currentQuestions[quizState.currentIndex];
  const isCorrect = selectedIndex === q.correct;
  
  if (isCorrect) quizState.score++;
  quizState.userAnswers[quizState.currentIndex] = selectedIndex;
  quizState.answerLocked = true;
  
  const options = document.querySelectorAll("#quizOptions .option");
  options.forEach((opt, idx) => {
    opt.style.pointerEvents = "none";
    if (idx === q.correct) {
      opt.classList.add("correct-highlight");
    }
    if (idx === selectedIndex && idx !== q.correct) {
      opt.classList.add("wrong-highlight");
    }
  });
  
  const feedback = isCorrect 
    ? '<span style="color: #4caf50;"><i class="fas fa-check-circle"></i> إجابة صحيحة! ✓</span>'
    : `<span style="color: #f44336;"><i class="fas fa-times-circle"></i> خطأ! الإجابة الصحيحة: ${q.options[q.correct]}</span>`;
  
  if (quizQuestion) {
    quizQuestion.innerHTML = `<i class="fas fa-question-circle" style="color: #2e7d32;"></i> ${q.text}<br><br><div style="font-size: 0.9rem; margin-top: 0.5rem;">${feedback}</div>`;
  }
}

// ==================== السؤال التالي ====================
function nextQuestion() {
  if (!quizState.answerLocked && quizState.userAnswers[quizState.currentIndex] === null) {
    alert("الرجاء اختيار إجابة قبل المتابعة");
    return;
  }
  
  if (quizState.currentIndex < quizState.currentQuestions.length - 1) {
    quizState.currentIndex++;
    loadQuestion();
  } else {
    showResult();
  }
}

// ==================== السؤال السابق ====================
function previousQuestion() {
  if (quizState.currentIndex > 0) {
    quizState.currentIndex--;
    loadQuestion();
  }
}

// ==================== عرض النتيجة ====================
function showResult() {
  const total = quizState.currentQuestions.length;
  const percentage = Math.round((quizState.score / total) * 100);
  
  let message = "";
  let stars = "";
  
  if (percentage >= 80) {
    message = "ممتاز! 🎉 أداء رائع، استمر بهذا المستوى";
    stars = "★★★★★";
  } else if (percentage >= 60) {
    message = "جيد جداً! 👍 يمكنك تحسين أدائك أكثر";
    stars = "★★★★☆";
  } else if (percentage >= 40) {
    message = "جيد! 📚 حاول مراجعة المواد مرة أخرى";
    stars = "★★★☆☆";
  } else {
    message = "تحتاج إلى مزيد من المذاكرة 💪 لا تيأس، حاول مرة أخرى";
    stars = "★★☆☆☆";
  }
  
  if (quizResult) {
    quizResult.style.display = "block";
    quizResult.innerHTML = `
      <h2><i class="fas fa-trophy" style="color: #ffd700;"></i> نتيجة المسابقة</h2>
      <div class="result-score">${quizState.score} / ${total}</div>
      <div class="result-stars">${stars}</div>
      <div class="result-message">${message}</div>
      <div class="result-details">
        <p>📊 نسبة الإجابات الصحيحة: ${percentage}%</p>
        <p>📖 عدد الأسئلة: ${total}</p>
        <p>🎯 مستوى الصعوبة: ${quizState.currentLevel === 'easy' ? 'سهل' : quizState.currentLevel === 'medium' ? 'متوسط' : 'صعب'}</p>
      </div>
    `;
  }
  
  if (quizNext) quizNext.disabled = true;
  if (quizPrev) quizPrev.disabled = true;
  if (quizProgress) quizProgress.style.width = "100%";
}

// ==================== إعادة المسابقة ====================
function resetQuiz() {
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.userAnswers = new Array(quizState.currentQuestions.length).fill(null);
  quizState.answerLocked = false;
  
  if (quizResult) {
    quizResult.style.display = "none";
    quizResult.innerHTML = "";
  }
  
  if (quizNext) quizNext.disabled = false;
  if (quizPrev) quizPrev.disabled = false;
  
  loadQuestion();
}

// ==================== الرجوع لقائمة المسابقات من داخل المسابقة ====================
function backToQuizzes() {
  if (quizContainer) {
    quizContainer.style.display = "none";
    quizContainer.classList.remove("active");
  }
  
  if (quizzesCategoriesGrid) quizzesCategoriesGrid.style.display = "grid";
  if (levelSelector) levelSelector.style.display = "none";
  
  quizState.quizStarted = false;
  quizState.currentQuestions = [];
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.userAnswers = [];
  
  if (quizResult) {
    quizResult.style.display = "none";
    quizResult.innerHTML = "";
  }
  
  if (quizProgress) quizProgress.style.width = "0%";
  
  const opSelector = document.querySelector(".math-operation-selector");
  if (opSelector) opSelector.remove();
}

// ==================== زر الرجوع من اختيار المستوى ====================
function backToQuizzesFromLevel() {
  // إخفاء اختيار المستوى
  if (levelSelector) levelSelector.style.display = "none";
  
  // إظهار شبكة المسابقات
  if (quizzesCategoriesGrid) quizzesCategoriesGrid.style.display = "grid";
  
  // إخفاء حاوية المسابقة إذا كانت ظاهرة
  if (quizContainer) {
    quizContainer.style.display = "none";
    quizContainer.classList.remove("active");
  }
  
  // إخفاء النتيجة إذا كانت ظاهرة
  if (quizResult) {
    quizResult.style.display = "none";
    quizResult.innerHTML = "";
  }
  
  // إعادة تعيين حالة المسابقة
  quizState.quizStarted = false;
  quizState.currentQuestions = [];
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.userAnswers = [];
  
  // إعادة تعيين شريط التقدم
  if (quizProgress) quizProgress.style.width = "0%";
  
  // إزالة محدد العملية الحسابية
  const opSelector = document.querySelector(".math-operation-selector");
  if (opSelector) opSelector.remove();
}

// ==================== تحديث شريط التقدم ====================
function updateProgress() {
  const progress = ((quizState.currentIndex + 1) / quizState.currentQuestions.length) * 100;
  if (quizProgress) quizProgress.style.width = `${progress}%`;
  if (quizCounter) {
    quizCounter.innerHTML = `<i class="fas fa-question-circle"></i> السؤال ${quizState.currentIndex + 1} / ${quizState.currentQuestions.length}`;
  }
}

// ==================== ربط الأحداث ====================
function bindEvents() {
  // زر الرجوع من اختيار المستوى
  const backFromLevelBtn = document.getElementById("backToQuizzesFromLevel");
  if (backFromLevelBtn) {
    backFromLevelBtn.addEventListener("click", backToQuizzesFromLevel);
  }
  
  // زر الرجوع من داخل المسابقة
  if (backToQuizzesBtn) {
    backToQuizzesBtn.addEventListener("click", backToQuizzes);
  }
  
  // أزرار المستوى
  document.querySelectorAll(".level-btn").forEach(btn => {
    btn.addEventListener("click", function() {
      document.querySelectorAll(".level-btn").forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      quizState.currentLevel = this.dataset.level;
    });
  });
  
  // زر بدء المسابقة
  if (startQuizBtn) startQuizBtn.addEventListener("click", startQuiz);
  
  // أزرار التنقل
  if (quizNext) quizNext.addEventListener("click", nextQuestion);
  if (quizPrev) quizPrev.addEventListener("click", previousQuestion);
  if (quizReset) quizReset.addEventListener("click", resetQuiz);
}

// ==================== تهيئة النظام ====================
function initQuizSystem() {
  displayQuizzesCategories();
  bindEvents();
  
  if (levelSelector) levelSelector.style.display = "none";
  if (quizContainer) quizContainer.style.display = "none";
}

// بدء النظام عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", initQuizSystem);

// تصدير الدوال للاستخدام العام
window.initQuizSystem = initQuizSystem;
window.startQuiz = startQuiz;
window.resetQuiz = resetQuiz;
window.backToQuizzes = backToQuizzes;
window.backToQuizzesFromLevel = backToQuizzesFromLevel;
window.selectQuizCategory = selectQuizCategory;