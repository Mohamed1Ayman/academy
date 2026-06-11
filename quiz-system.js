// ==================== نظام المسابقات الموحد والمتطور ====================
// أكاديمية اتكلم عربي

// ==================== البيانات مع إضافة الشرح (explanation) ====================
const allQuestions = {
  quran: {
    label: "القرآن الكريم",
    icon: "fa-quran",
    description: "اختبر معلوماتك في علوم القرآن الكريم",
    difficulty: "medium",
    color: "#2e7d32",
    data: {
      easy: [
        { text: "ما هي أول سورة في القرآن؟", options: ["الفاتحة", "البقرة", "الإخلاص", "الناس"], correct: 0, explanation: "سورة الفاتحة هي أول سورة في القرآن الكريم، وتسمى أيضاً أم الكتاب والسبع المثاني." },
        { text: "كم عدد السور في القرآن؟", options: ["110", "114", "120", "100"], correct: 1, explanation: "عدد سور القرآن الكريم 114 سورة، تبدأ بسورة الفاتحة وتنتهي بسورة الناس." },
        { text: "ما هي السورة التي تسمى 'قل هو الله أحد'؟", options: ["الفلق", "الناس", "الإخلاص", "الكوثر"], correct: 2, explanation: "سورة الإخلاص هي السورة التي تبدأ بـ 'قل هو الله أحد'، وهي تعدل ثلث القرآن." },
        { text: "من هو رسول الله؟", options: ["محمد", "موسى", "عيسى", "إبراهيم"], correct: 0, explanation: "محمد بن عبد الله هو خاتم الأنبياء والمرسلين، أرسله الله رحمة للعالمين." },
        { text: "ما اسم والد النبي محمد؟", options: ["عبد الله", "أبو طالب", "عبد المطلب", "أبو لهب"], correct: 0, explanation: "والد النبي محمد هو عبد الله بن عبد المطلب، توفي قبل ولادة النبي." },
        { text: "ما هي السورة التي تبدأ بـ 'الحمد لله'؟", options: ["الإخلاص", "الفاتحة", "الناس", "الفلق"], correct: 1, explanation: "سورة الفاتحة تبدأ بـ 'الحمد لله رب العالمين'، وهي من أعظم سور القرآن." },
        { text: "كم عدد أجزاء القرآن؟", options: ["20", "25", "30", "35"], correct: 2, explanation: "القرآن الكريم مقسم إلى 30 جزءاً لتسهيل قراءته في شهر رمضان." },
        { text: "أطول سورة في القرآن هي؟", options: ["آل عمران", "البقرة", "النساء", "المائدة"], correct: 1, explanation: "سورة البقرة هي أطول سورة في القرآن، عدد آياتها 286 آية." },
        { text: "ما هي أول كلمة نزلت من القرآن؟", options: ["الحمد", "بسم", "اقرأ", "قل"], correct: 2, explanation: "أول كلمة نزلت من القرآن هي 'اقرأ' من سورة العلق." },
        { text: "من هو أول الخلفاء الراشدين؟", options: ["عمر", "عثمان", "علي", "أبو بكر"], correct: 3, explanation: "أبو بكر الصديق هو أول الخلفاء الراشدين بعد وفاة النبي محمد." },
      ],
      medium: [
        { text: "ما هي السورة التي ليس فيها بسم الله الرحمن الرحيم؟", options: ["الفاتحة", "التوبة", "الإخلاص", "الفلق"], correct: 1, explanation: "سورة التوبة هي السورة الوحيدة في القرآن التي لا تبدأ بالبسملة." },
        { text: "كم سجدة تلاوة في القرآن؟", options: ["12", "14", "15", "10"], correct: 2, explanation: "يوجد 15 موضع سجدة تلاوة في القرآن الكريم." },
        { text: "ما هي أعظم آية في القرآن؟", options: ["آية الكرسي", "آية النور", "آية الدين", "آية الميراث"], correct: 0, explanation: "آية الكرسي هي أعظم آية في القرآن، وتوجد في سورة البقرة." },
        { text: "ما معنى اسم الله 'الرحمن'؟", options: ["الشديد العقاب", "الواسع الرحمة", "الغفور", "العزيز"], correct: 1, explanation: "الرحمن: ذو الرحمة الواسعة التي تشمل جميع الخلائق." },
        { text: "من هو كاتب الوحي الذي لقب بترجمان القرآن؟", options: ["علي بن أبي طالب", "عبد الله بن عباس", "زيد بن ثابت", "عبد الله بن مسعود"], correct: 1, explanation: "عبد الله بن عباس لقب بترجمان القرآن لعلمه الغزير في التفسير." },
        { text: "ما هي السورة التي تسمى 'عروس القرآن'؟", options: ["الرحمن", "يس", "الواقعة", "الملك"], correct: 0, explanation: "سورة الرحمن تسمى 'عروس القرآن' لجمالها وروعتها." },
        { text: "أين نزلت سورة الفاتحة؟", options: ["المدينة", "مكة", "الطائف", "بدر"], correct: 1, explanation: "سورة الفاتحة نزلت في مكة المكرمة." },
        { text: "ما هو اسم جبريل عليه السلام في القرآن؟", options: ["الروح الأمين", "ميكائيل", "عزرائيل", "إسرافيل"], correct: 0, explanation: "جبريل عليه السلام يسمى في القرآن 'الروح الأمين' و 'الروح القدس'." },
        { text: "كم مرة ذكر اسم 'محمد' في القرآن؟", options: ["3", "4", "5", "6"], correct: 1, explanation: "ذكر اسم 'محمد' في القرآن 4 مرات." },
        { text: "ما هي السورة التي تسمى 'قلب القرآن'؟", options: ["الفاتحة", "يس", "الملك", "الواقعة"], correct: 1, explanation: "سورة يس تسمى 'قلب القرآن' لعظم شأنها." },
      ],
      hard: [
        { text: "ما معنى 'الصمد' في سورة الإخلاص؟", options: ["الذي لا يحتاج لأحد", "الذي يصمد أمام الأعداء", "الذي لا يأكل", "الذي لا يشرب"], correct: 0, explanation: "الصمد هو الذي يقصده الخلق في حوائجهم، وهو الغني عن كل شيء." },
        { text: "ما تفسير 'الضالين' في الفاتحة؟", options: ["الذين ضلوا عن الحق", "الذين ضلوا الطريق", "النصارى", "اليهود"], correct: 2, explanation: "الضالين هم النصارى الذين ضلوا عن طريق الحق." },
        { text: "ما هي 'السبع المثاني'؟", options: ["الفاتحة", "البقرة", "آل عمران", "يس"], correct: 0, explanation: "السبع المثاني هي سورة الفاتحة، وتسمى بذلك لتكررها في كل صلاة." },
        { text: "ما هو 'السموم' في سورة الطور؟", options: ["نار جهنم", "الجنة", "الملائكة", "الصبح"], correct: 0, explanation: "السموم هو نار جهنم الحارة التي تنفذ إلى المسام." },
        { text: "كم مرة ورد اسم جبريل عليه السلام في القرآن؟", options: ["10 مرات", "7 مرات", "4 مرات", "3 مرات"], correct: 3, explanation: "ورد اسم جبريل عليه السلام في القرآن 3 مرات." },
        { text: "تفسير 'وأنذر عشيرتك الأقربين' نزلت في؟", options: ["دعوة قريش", "دعوة أهل مكة", "دعوة بني هاشم", "دعوة العرب"], correct: 2, explanation: "نزلت الآية في دعوة بني هاشم أقارب النبي." },
        { text: "ما معنى 'الرهبان' في سورة المائدة؟", options: ["عباد المسيح", "كهنة اليهود", "علماء المسلمين", "الزهاد"], correct: 0, explanation: "الرهبان هم عباد المسيح الذين تفرغوا للعبادة." },
        { text: "تفسير 'كلا إن كتاب الفجار لفي سجين' سجين هي؟", options: ["مكان تحت الأرض", "سجن في جهنم", "كتاب مرقوم", "واد في جهنم"], correct: 3, explanation: "سجين هو وادٍ في جهنم تسيل فيه صديد أهل النار." },
        { text: "ما معنى 'الروح' في القرآن؟", options: ["جبريل", "القرآن", "الروح القدس", "كل ما سبق"], correct: 3, explanation: "الروح في القرآن تطلق على جبريل والقرآن والروح القدس." },
        { text: "ما هي السورة التي ليس فيها 'بسم الله' وفيها ذكر القتال؟", options: ["الأنفال", "التوبة", "الحديد", "الحشر"], correct: 1, explanation: "سورة التوبة هي السورة الوحيدة التي لا تبدأ بالبسملة وفيها أحكام القتال." },
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
  
  // تنظيف المحتوى القديم
  quizzesCategoriesGrid.innerHTML = "";
  
  // إنشاء البطاقات
  Object.keys(allQuestions).forEach((key, index) => {
    const quiz = allQuestions[key];
    const card = document.createElement("div");
    card.className = "quiz-category-card";
    card.setAttribute("data-category", key);
    card.style.setProperty('--card-index', index);
    
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
    
    card.addEventListener("click", (e) => {
      e.stopPropagation();
      selectQuizCategory(key);
    });
    
    quizzesCategoriesGrid.appendChild(card);
  });
  
  // ✨ إضافة أنيميشن ظهور للبطاقات
  const cards = document.querySelectorAll(".quiz-category-card");
  cards.forEach((card, idx) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    setTimeout(() => {
      card.style.transition = "all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)";
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }, idx * 50);
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
      correct: optionsArray.indexOf(answer),
      explanation: `الحل الصحيح: ${n1} ${op === 'addition' ? '+' : op === 'subtraction' ? '-' : op === 'multiplication' ? '×' : '÷'} ${op === 'division' ? answer : n2} = ${answer}`
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
  
  // ✨ أنيميشن إخفاء الشبكة (وليس حذفها)
  if (quizzesCategoriesGrid) {
    quizzesCategoriesGrid.style.transition = "all 0.3s ease";
    quizzesCategoriesGrid.style.opacity = "0";
    quizzesCategoriesGrid.style.transform = "scale(0.95)";
    
    setTimeout(() => {
      quizzesCategoriesGrid.style.display = "none";
    }, 300);
  }
  
  // ✨ إظهار اختيار المستوى
  if (levelSelector) {
    levelSelector.style.display = "block";
    levelSelector.style.opacity = "0";
    levelSelector.style.transform = "translateY(20px)";
    
    setTimeout(() => {
      levelSelector.style.transition = "all 0.3s ease";
      levelSelector.style.opacity = "1";
      levelSelector.style.transform = "translateY(0)";
    }, 50);
    
    const titleElem = document.getElementById("selectedQuizTitle");
    if (titleElem) {
      titleElem.innerHTML = `
        <i class="fas ${quiz.icon}"></i> ${quiz.label}
        <small>اختر مستوى الصعوبة المناسب لك</small>
      `;
    }
  }
  
  // إخفاء حاوية المسابقة
  if (quizContainer) quizContainer.style.display = "none";
  
  // إضافة محدد العملية الحسابية
  if (categoryKey === "math") {
    addMathOperationSelector();
  } else {
    const opSelector = document.querySelector(".math-operation-selector");
    if (opSelector) opSelector.remove();
  }
  
  // التمرير
  setTimeout(() => {
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 100);
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
  
  // إزالة أي رسالة شرح قديمة
  const oldFeedback = document.getElementById("quizFeedback");
  if (oldFeedback) oldFeedback.remove();
  
  loadQuestion();
  
  // 🎯 التمرير إلى أعلى قسم المسابقات
  setTimeout(() => {
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ 
        behavior: "smooth", 
        block: "start",
        inline: "nearest"
      });
    }
  }, 100);
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
  
  // إزالة رسالة الشرح القديمة إذا وجدت
  const oldFeedback = document.getElementById("quizFeedback");
  if (oldFeedback) oldFeedback.remove();
  
  updateProgress();
  
  if (quizPrev) quizPrev.disabled = quizState.currentIndex === 0;
  if (quizNext) {
    quizNext.innerHTML = quizState.currentIndex === quizState.currentQuestions.length - 1 
      ? '<i class="fas fa-check"></i> إنهاء' 
      : 'التالي <i class="fas fa-arrow-left"></i>';
  }
}

// ==================== اختيار الإجابة مع خاصية الشرح (بدون تمرير تلقائي) ====================
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
  
  // إنشاء رسالة الشرح
  const correctLetter = ["أ", "ب", "ج", "د"][q.correct];
  const correctAnswerText = q.options[q.correct];
  
  let feedbackHtml = "";
  if (isCorrect) {
    feedbackHtml = `
      <div id="quizFeedback" style="margin-top: 1.5rem; padding: 1rem; border-radius: 16px; background: linear-gradient(135deg, rgba(76, 175, 80, 0.1), rgba(76, 175, 80, 0.05)); border-right: 4px solid #4caf50; text-align: center;">
        <div style="display: flex; align-items: center; justify-content: center; gap: 0.8rem; flex-wrap: wrap;">
          <span style="background: #4caf50; color: white; padding: 0.5rem 1rem; border-radius: 50px; display: inline-flex; align-items: center; gap: 0.5rem;">
            <i class="fas fa-check-circle"></i> ✅ إجابة صحيحة!
          </span>
          <span style="color: var(--text-primary);">
            📖 ${q.explanation || "أحسنت! هذه هي الإجابة الصحيحة."}
          </span>
        </div>
      </div>
    `;
  } else {
    feedbackHtml = `
      <div id="quizFeedback" style="margin-top: 1.5rem; padding: 1rem; border-radius: 16px; background: linear-gradient(135deg, rgba(244, 67, 54, 0.1), rgba(244, 67, 54, 0.05)); border-right: 4px solid #f44336;">
        <div style="display: flex; flex-direction: column; gap: 0.8rem;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 0.8rem; flex-wrap: wrap;">
            <span style="background: #f44336; color: white; padding: 0.5rem 1rem; border-radius: 50px; display: inline-flex; align-items: center; gap: 0.5rem;">
              <i class="fas fa-times-circle"></i> ❌ إجابة خاطئة!
            </span>
            <span style="background: #4caf50; color: white; padding: 0.5rem 1rem; border-radius: 50px; display: inline-flex; align-items: center; gap: 0.5rem;">
              <i class="fas fa-check-circle"></i> الإجابة الصحيحة: ${correctLetter} - "${correctAnswerText}"
            </span>
          </div>
          <div style="color: var(--text-primary); padding: 0.5rem; text-align: center;">
            📖 ${q.explanation || "راجع المادة مرة أخرى لتتعلم الإجابة الصحيحة."}
          </div>
        </div>
      </div>
    `;
  }
  
  // إضافة رسالة الشرح بعد الخيارات
  if (quizOptions && quizOptions.parentNode) {
    const oldFeedback = document.getElementById("quizFeedback");
    if (oldFeedback) oldFeedback.remove();
    quizOptions.insertAdjacentHTML('afterend', feedbackHtml);
  }
  
  // 🎯 فقط تغيير شكل زر التالي (بدون تمرير!)
  if (quizNext) {
    quizNext.style.background = "linear-gradient(135deg, #2e7d32, #1b5e20)";
    quizNext.style.transform = "scale(1.02)";
    quizNext.style.transition = "all 0.3s ease";
    
    // إزالة تأثير التمرير التلقائي
    setTimeout(() => {
      if (quizNext) {
        quizNext.style.background = "";
        quizNext.style.transform = "";
      }
    }, 500);
  }
  
  // ❌ تم إزالة السطر الذي كان يقوم بالتمرير:
  // quizNext.scrollIntoView({ behavior: "smooth", block: "nearest" });
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
  // ✨ إخفاء المسابقة
  if (quizContainer) {
    quizContainer.style.transition = "all 0.3s ease";
    quizContainer.style.opacity = "0";
    quizContainer.style.transform = "scale(0.95)";
    
    setTimeout(() => {
      quizContainer.style.display = "none";
      quizContainer.classList.remove("active");
      quizContainer.style.opacity = "1";
      quizContainer.style.transform = "scale(1)";
    }, 300);
  }
  
  // ✨ إظهار شبكة المسابقات
  if (quizzesCategoriesGrid) {
    quizzesCategoriesGrid.style.display = "grid";
    quizzesCategoriesGrid.style.opacity = "0";
    quizzesCategoriesGrid.style.transform = "scale(0.95)";
    
    const cards = document.querySelectorAll(".quiz-category-card");
    cards.forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "";
    });
    
    setTimeout(() => {
      quizzesCategoriesGrid.style.transition = "all 0.4s ease";
      quizzesCategoriesGrid.style.opacity = "1";
      quizzesCategoriesGrid.style.transform = "scale(1)";
      
      cards.forEach((card, idx) => {
        setTimeout(() => {
          card.style.transition = "all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, idx * 60);
      });
    }, 50);
  }
  
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
  
  const oldFeedback = document.getElementById("quizFeedback");
  if (oldFeedback) oldFeedback.remove();
  
  setTimeout(() => {
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 150);
}

// ==================== زر الرجوع من اختيار المستوى ====================
function backToQuizzesFromLevel() {
  // ✨ إخفاء اختيار المستوى
  if (levelSelector) {
    levelSelector.style.transition = "all 0.3s ease";
    levelSelector.style.opacity = "0";
    levelSelector.style.transform = "translateY(-20px)";
    
    setTimeout(() => {
      levelSelector.style.display = "none";
      levelSelector.style.opacity = "1";
      levelSelector.style.transform = "translateY(0)";
    }, 300);
  }
  
  // ✨ إظهار شبكة المسابقات مع إعادة ضبط البطاقات
  if (quizzesCategoriesGrid) {
    // أولاً: جعل الشبكة مرئية
    quizzesCategoriesGrid.style.display = "grid";
    quizzesCategoriesGrid.style.opacity = "0";
    quizzesCategoriesGrid.style.transform = "scale(0.95)";
    
    // ثانياً: إعادة ضبط جميع البطاقات (إزالة أي تأثيرات سابقة)
    const cards = document.querySelectorAll(".quiz-category-card");
    cards.forEach(card => {
      card.style.opacity = "0";
      card.style.transform = "translateY(30px)";
      card.style.transition = "";
      card.classList.remove('flip');
      card.style.display = "flex"; // التأكد من ظهور البطاقة
    });
    
    // ثالثاً: تشغيل أنيميشن الظهور
    setTimeout(() => {
      quizzesCategoriesGrid.style.transition = "all 0.4s ease";
      quizzesCategoriesGrid.style.opacity = "1";
      quizzesCategoriesGrid.style.transform = "scale(1)";
      
      // إظهار البطاقات واحدة تلو الأخرى
      cards.forEach((card, idx) => {
        setTimeout(() => {
          card.style.transition = "all 0.4s cubic-bezier(0.34, 1.2, 0.64, 1)";
          card.style.opacity = "1";
          card.style.transform = "translateY(0)";
        }, idx * 60);
      });
    }, 50);
  }
  
  // إخفاء المسابقة
  if (quizContainer) {
    quizContainer.style.display = "none";
    quizContainer.classList.remove("active");
  }
  
  // إخفاء النتيجة
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
  quizState.answerLocked = false;
  
  // إعادة تعيين شريط التقدم
  if (quizProgress) quizProgress.style.width = "0%";
  
  // إزالة محدد العملية الحسابية
  const opSelector = document.querySelector(".math-operation-selector");
  if (opSelector) opSelector.remove();
  
  // إزالة رسالة الشرح
  const oldFeedback = document.getElementById("quizFeedback");
  if (oldFeedback) oldFeedback.remove();
  
  // التمرير
  setTimeout(() => {
    const quizSection = document.getElementById('quiz');
    if (quizSection) {
      quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 150);
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
  
  // التأكد من ظهور الشبكة
  if (quizzesCategoriesGrid) {
    quizzesCategoriesGrid.style.display = "grid";
    quizzesCategoriesGrid.style.opacity = "1";
  }
  
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