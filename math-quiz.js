// math-quiz.js
// ==================== أسئلة الحساب ====================

// دالة توليد أسئلة الحساب حسب العملية والمستوى
function generateMathQuestions(operation, level) {
  const questions = [];
  const count = 10; // 10 أسئلة لكل اختبار
  
  for (let i = 0; i < count; i++) {
    let num1, num2, answer, questionText;
    
    switch(level) {
      case 'easy':
        num1 = Math.floor(Math.random() * 10) + 1; // 1-10
        num2 = Math.floor(Math.random() * 10) + 1; // 1-10
        break;
      case 'medium':
        num1 = Math.floor(Math.random() * 50) + 1; // 1-50
        num2 = Math.floor(Math.random() * 25) + 1; // 1-25
        break;
      case 'hard':
        num1 = Math.floor(Math.random() * 100) + 1; // 1-100
        num2 = Math.floor(Math.random() * 50) + 1; // 1-50
        break;
    }
    
    switch(operation) {
      case 'addition':
        answer = num1 + num2;
        questionText = `${num1} + ${num2} = ؟`;
        break;
      case 'subtraction':
        // التأكد أن الناتج موجب
        if (num1 < num2) [num1, num2] = [num2, num1];
        answer = num1 - num2;
        questionText = `${num1} - ${num2} = ؟`;
        break;
      case 'multiplication':
        answer = num1 * num2;
        questionText = `${num1} × ${num2} = ؟`;
        break;
      case 'division':
        // التأكد أن القسمة صحيحة (بدون باقي)
        answer = num2; // المقسوم عليه
        const product = num1 * num2; // المقسوم
        num1 = product;
        questionText = `${num1} ÷ ${num2} = ؟`;
        break;
    }
    
    // توليد خيارات خاطئة
    const options = generateWrongOptions(answer, operation);
    options.push(answer);
    shuffleArray(options);
    
    questions.push({
      text: questionText,
      options: options.map(opt => opt.toString()),
      correct: options.indexOf(answer),
      operation: operation,
      answer: answer
    });
  }
  
  return questions;
}

// توليد خيارات خاطئة
function generateWrongOptions(correctAnswer, operation) {
  const wrongOptions = new Set();
  
  while (wrongOptions.size < 3) {
    let wrong;
    const variation = Math.floor(Math.random() * 20) - 10; // -10 إلى +10
    
    if (variation === 0) {
      wrong = correctAnswer + (Math.floor(Math.random() * 5) + 1);
    } else {
      wrong = correctAnswer + variation;
    }
    
    if (wrong !== correctAnswer && wrong > 0) {
      wrongOptions.add(wrong);
    }
  }
  
  return Array.from(wrongOptions);
}

// خلط المصفوفة
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// بيانات العمليات الحسابية
const mathOperations = {
  addition: { label: " الجمع", icon: "fa-plus", symbol: "+" },
  subtraction: { label: " الطرح", icon: "fa-minus", symbol: "-" },
  multiplication: { label: " الضرب", icon: "fa-xmark", symbol: "×" },
  division: { label: "القسمة", icon: "fa-divide", symbol: "÷" }
};

// بيانات المستويات
const mathLevels = {
  easy: { label: "🌟 سهل", numbers: "1-10", color: "#4CAF50" },
  medium: { label: "⭐ متوسط", numbers: "1-50", color: "#FF9800" },
  hard: { label: "🔥 صعب", numbers: "1-100", color: "#f44336" }
};

// ==================== تصدير الدوال للاستخدام العام ====================
window.generateMathQuestions = generateMathQuestions;
window.mathOperations = mathOperations;
window.mathLevels = mathLevels;

// ==================== بيانات متوافقة مع نظام المسابقات ====================
// نظام المسابقات الجديد بيتوقع بيانات بهذا الشكل
const mathQuestionsByLevel = {
  easy: [],
  medium: [],
  hard: []
};

// دالة للحصول على أسئلة الحساب حسب المستوى
function getMathQuestionsByLevel(level, operation = 'addition') {
  return generateMathQuestions(operation, level);
}

// إضافة دالة مساعدة للحصول على أسئلة عشوائية
function getRandomMathQuestions(count = 10, level = 'medium', operation = 'addition') {
  const questions = generateMathQuestions(operation, level);
  return questions.slice(0, count);
}

// تصدير الدوال الإضافية
window.getMathQuestionsByLevel = getMathQuestionsByLevel;
window.getRandomMathQuestions = getRandomMathQuestions;
window.mathQuestionsByLevel = mathQuestionsByLevel;