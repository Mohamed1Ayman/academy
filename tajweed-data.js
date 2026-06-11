// ==================== قاعدة بيانات أحكام التجويد المتكاملة والشاملة ====================
// أكاديمية اتكلم عربي - النسخة الموسعة المتوافقة مع نظام العرض

const tajweedDatabase = {
  // ==================== 1. مخارج الحروف ====================
  makharij: {
    name: "مخارج الحروف",
    icon: "fa-mouth",
    color: "#2196f3",
    description: "تعلم مخارج الحروف العربية بالتفصيل - من أين يخرج كل حرف وكيف تنطقه بشكل صحيح",
    fullIntroduction: `
      <div class="tajweed-intro">
        <h3>📖 مقدمة في مخارج الحروف</h3>
        <p>مخارج الحروف هي المواضع التي تخرج منها الحروف عند النطق بها. وقد قسّم علماء التجويد مخارج الحروف إلى <strong>17 مخرجاً رئيسياً</strong>.</p>
      </div>
    `,
    chapters: {
      1: { name: "الجوف (حروف المد)", start: 1, end: 3 },
      2: { name: "أقصى الحلق", start: 4, end: 5 },
      3: { name: "وسط الحلق", start: 6, end: 7 },
      4: { name: "أدنى الحلق", start: 8, end: 9 },
      5: { name: "أقصى اللسان", start: 10, end: 11 },
      6: { name: "وسط اللسان", start: 12, end: 14 },
      7: { name: "حافة اللسان", start: 15, end: 16 },
      8: { name: "طرف اللسان", start: 17, end: 26 },
      9: { name: "الشفتان", start: 27, end: 29 },
      10: { name: "الخيشوم (الغنة)", start: 30, end: 30 }
    },
    rules: {
      1: [ // الجوف - 3 أحكام
        { id: 1, title: "الألف (ا) - حرف مد", text: "يخرج من الجوف (تجويف الفم والحلق) بشرط أن يكون ساكناً وما قبله مفتوح", example: "قَالَ - كِتَاب", level: "مبتدئ", detailedExplanation: { definition: "الألف حرف مد يخرج من الجوف" } },
        { id: 2, title: "الواو (و) - حرف مد", text: "يخرج من الجوف بشرط أن يكون ساكناً وما قبله مضموم", example: "يَقُولُ - رَسُول", level: "مبتدئ", detailedExplanation: { definition: "الواو حرف مد يخرج من الجوف" } },
        { id: 3, title: "الياء (ي) - حرف مد", text: "يخرج من الجوف بشرط أن يكون ساكناً وما قبله مكسور", example: "قِيلَ - كَرِيم", level: "مبتدئ", detailedExplanation: { definition: "الياء حرف مد يخرج من الجوف" } }
      ],
      2: [ // أقصى الحلق - 2 حكم
        { id: 4, title: "الهمزة (ء)", text: "يخرج من أقصى الحلق (أعمق نقطة في الحلق)", example: "أَمَان - أَحَد", level: "مبتدئ", detailedExplanation: { definition: "الهمزة حرف شديد مجهور" } },
        { id: 5, title: "الهاء (ه)", text: "يخرج من أقصى الحلق", example: "هُوَ - هَادٍ", level: "مبتدئ", detailedExplanation: { definition: "الهاء حرف رخو مهموس" } }
      ],
      3: [ // وسط الحلق - 2 حكم
        { id: 6, title: "العين (ع)", text: "يخرج من وسط الحلق", example: "عِلْم - عَلِمَ", level: "مبتدئ", detailedExplanation: { definition: "العين حرف مجهور" } },
        { id: 7, title: "الحاء (ح)", text: "يخرج من وسط الحلق", example: "حُبّ - حَمِيد", level: "مبتدئ", detailedExplanation: { definition: "الحاء حرف مهموس" } }
      ],
      4: [ // أدنى الحلق - 2 حكم
        { id: 8, title: "الغين (غ)", text: "يخرج من أدنى الحلق", example: "غَفُور - غَيْر", level: "مبتدئ", detailedExplanation: { definition: "الغين حرف مجهور" } },
        { id: 9, title: "الخاء (خ)", text: "يخرج من أدنى الحلق", example: "خَلَقَ - خَبِير", level: "مبتدئ", detailedExplanation: { definition: "الخاء حرف مهموس" } }
      ],
      5: [ // أقصى اللسان - 2 حكم
        { id: 10, title: "القاف (ق)", text: "يخرج من أقصى اللسان مع ما يحاذيه من الحنك الأعلى", example: "قُرْآن - قَلَم", level: "مبتدئ", detailedExplanation: { definition: "القاف حرف شديد مجهور مطبق" } },
        { id: 11, title: "الكاف (ك)", text: "يخرج من أقصى اللسان قليلاً مع ما يحاذيه من الحنك", example: "كِتَاب - كَرِيم", level: "مبتدئ", detailedExplanation: { definition: "الكاف حرف شديد مهموس" } }
      ],
      6: [ // وسط اللسان - 3 أحكام
        { id: 12, title: "الجيم (ج)", text: "يخرج من وسط اللسان مع ما يحاذيه من الحنك", example: "جَمِيل - جَنَّة", level: "مبتدئ", detailedExplanation: { definition: "الجيم حرف مجهور" } },
        { id: 13, title: "الشين (ش)", text: "يخرج من وسط اللسان", example: "شَكُور - شَرِيف", level: "مبتدئ", detailedExplanation: { definition: "الشين حرف مهموس" } },
        { id: 14, title: "الياء (ي) غير المدية", text: "يخرج من وسط اللسان", example: "يَوْم - يَقِين", level: "مبتدئ", detailedExplanation: { definition: "الياء حرف مجهور" } }
      ],
      7: [ // حافة اللسان - 2 حكم
        { id: 15, title: "الضاد (ض)", text: "يخرج من حافة اللسان مع ما يحاذيه من الأضراس", example: "ضَالِّين - ضَرَبَ", level: "متقدم", detailedExplanation: { definition: "الضاد حرف مجهور مطبق" } },
        { id: 16, title: "اللام (ل)", text: "يخرج من حافة اللسان", example: "لِسَان - لَيْل", level: "مبتدئ", detailedExplanation: { definition: "اللام حرف مجهور" } }
      ],
      8: [ // طرف اللسان - 10 أحكام
        { id: 17, title: "النون (ن)", text: "يخرج من طرف اللسان", example: "نُور - نَبِي", level: "مبتدئ", detailedExplanation: { definition: "النون حرف مجهور" } },
        { id: 18, title: "الراء (ر)", text: "يخرج من طرف اللسان", example: "رَحْمَة - رَبِّ", level: "مبتدئ", detailedExplanation: { definition: "الراء حرف مجهور" } },
        { id: 19, title: "التاء (ت)", text: "يخرج من طرف اللسان", example: "تَوْبَة - تَقْوَى", level: "مبتدئ", detailedExplanation: { definition: "التاء حرف مهموس" } },
        { id: 20, title: "الدال (د)", text: "يخرج من طرف اللسان", example: "دِين - دُنْيَا", level: "مبتدئ", detailedExplanation: { definition: "الدال حرف مجهور" } },
        { id: 21, title: "الصاد (ص)", text: "يخرج من طرف اللسان", example: "صِرَاط - صَبْر", level: "متوسط", detailedExplanation: { definition: "الصاد حرف مجهور مطبق" } },
        { id: 22, title: "السين (س)", text: "يخرج من طرف اللسان", example: "سَلَام - سَمَاء", level: "مبتدئ", detailedExplanation: { definition: "السين حرف مهموس" } },
        { id: 23, title: "الزاي (ز)", text: "يخرج من طرف اللسان", example: "زَكَاة - زِينَة", level: "مبتدئ", detailedExplanation: { definition: "الزاي حرف مجهور" } },
        { id: 24, title: "الظاء (ظ)", text: "يخرج من طرف اللسان", example: "ظَالِم - ظَفَر", level: "متقدم", detailedExplanation: { definition: "الظاء حرف مجهور مطبق" } },
        { id: 25, title: "الذال (ذ)", text: "يخرج من طرف اللسان", example: "ذِكْر - ذَهَب", level: "مبتدئ", detailedExplanation: { definition: "الذال حرف مجهور" } },
        { id: 26, title: "الثاء (ث)", text: "يخرج من طرف اللسان", example: "ثَوَاب - ثَقَف", level: "مبتدئ", detailedExplanation: { definition: "الثاء حرف مهموس" } }
      ],
      9: [ // الشفتان - 3 أحكام
        { id: 27, title: "الباء (ب)", text: "يخرج من الشفتين", example: "بِسْم - بَرَكَة", level: "مبتدئ", detailedExplanation: { definition: "الباء حرف مجهور" } },
        { id: 28, title: "الميم (م)", text: "يخرج من الشفتين", example: "مُحَمَّد - مَكَّة", level: "مبتدئ", detailedExplanation: { definition: "الميم حرف مجهور" } },
        { id: 29, title: "الواو (و) غير المدية", text: "يخرج من الشفتين", example: "وَلِيّ - وَرَق", level: "مبتدئ", detailedExplanation: { definition: "الواو حرف مجهور" } }
      ],
      10: [ // الخيشوم - 1 حكم
        { id: 30, title: "الغنة", text: "تخرج من الخيشوم (الأنف)", example: "إِنَّ - مِمَّا", level: "مبتدئ", detailedExplanation: { definition: "الغنة صفة لازمة للنون والميم" } }
      ]
    }
  },

  // ==================== 2. أحكام النون الساكنة والتنوين ====================
  noonSakinah: {
    name: "أحكام النون الساكنة والتنوين",
    icon: "fa-dove",
    color: "#4caf50",
    description: "تعلم أحكام النون الساكنة والتنوين الأربعة",
    fullIntroduction: `<div class="tajweed-intro"><h3>📖 أحكام النون الساكنة والتنوين</h3><p>لها أربعة أحكام: الإظهار، الإدغام، الإقلاب، الإخفاء.</p></div>`,
    chapters: {
      1: { name: "الإظهار الحلقي", start: 1, end: 1 },
      2: { name: "الإدغام بغنة", start: 2, end: 2 },
      3: { name: "الإدغام بغير غنة", start: 3, end: 3 },
      4: { name: "الإقلاب", start: 4, end: 4 },
      5: { name: "الإخفاء الحقيقي", start: 5, end: 5 }
    },
    rules: {
      1: [{ id: 1, title: "الإظهار الحلقي", text: "إظهار النون الساكنة والتنوين عند حروف الحلق الستة", example: "مِنْ أَحَدٍ", level: "مبتدئ", detailedExplanation: { letters: "ء، ه، ع، ح، غ، خ" } }],
      2: [{ id: 2, title: "الإدغام بغنة", text: "إدغام النون الساكنة والتنوين في حروف (ي، ن، م، و) مع الغنة", example: "مِنْ نَفْسٍ", level: "متوسط", detailedExplanation: { letters: "ي، ن، م، و" } }],
      3: [{ id: 3, title: "الإدغام بغير غنة", text: "إدغام النون الساكنة والتنوين في حرفي (ل، ر) بدون غنة", example: "مِنْ رَبِّهِمْ", level: "متوسط", detailedExplanation: { letters: "ل، ر" } }],
      4: [{ id: 4, title: "الإقلاب", text: "قلب النون الساكنة أو التنوين ميماً عند حرف الباء", example: "مِنْ بَعْدِ", level: "متوسط", detailedExplanation: { letters: "ب" } }],
      5: [{ id: 5, title: "الإخفاء الحقيقي", text: "إخفاء النون الساكنة والتنوين عند 15 حرفاً", example: "مِنْ ثَمَرَاتٍ", level: "متقدم", detailedExplanation: { letters: "ت، ث، ج، د، ذ، ز، س، ش، ص، ض، ط، ظ، ف، ق، ك" } }]
    }
  },

  // ==================== 3. أحكام الميم الساكنة ====================
  meemSakinah: {
    name: "أحكام الميم الساكنة",
    icon: "fa-moon",
    color: "#ff9800",
    description: "تعلم أحكام الميم الساكنة الثلاثة",
    fullIntroduction: `<div class="tajweed-intro"><h3>📖 أحكام الميم الساكنة</h3><p>لها ثلاثة أحكام: الإخفاء الشفوي، الإدغام المثلي، الإظهار الشفوي.</p></div>`,
    chapters: {
      1: { name: "الإخفاء الشفوي", start: 1, end: 1 },
      2: { name: "الإدغام المثلي", start: 2, end: 2 },
      3: { name: "الإظهار الشفوي", start: 3, end: 3 }
    },
    rules: {
      1: [{ id: 1, title: "الإخفاء الشفوي", text: "إخفاء الميم الساكنة عند حرف الباء مع الغنة", example: "تَرْمِيهِم بِحِجَارَةٍ", level: "متوسط", detailedExplanation: { letters: "ب" } }],
      2: [{ id: 2, title: "الإدغام المثلي", text: "إدغام الميم الساكنة في الميم المتحركة", example: "لَهُمْ مَا", level: "متوسط", detailedExplanation: { letters: "م" } }],
      3: [{ id: 3, title: "الإظهار الشفوي", text: "إظهار الميم الساكنة عند باقي الحروف", example: "أَمْ يَقُولُونَ", level: "مبتدئ", detailedExplanation: { letters: "جميع الحروف ما عدا م، ب" } }]
    }
  },

  // ==================== 4. أحكام المد ====================
  mudood: {
    name: "أحكام المد",
    icon: "fa-waveform",
    color: "#9c27b0",
    description: "تعلم أحكام المد بأنواعه",
    fullIntroduction: `<div class="tajweed-intro"><h3>📖 أحكام المد</h3><p>ينقسم المد إلى أصلي وفرعي.</p></div>`,
    chapters: {
      1: { name: "المد الأصلي", start: 1, end: 1 },
      2: { name: "المد المتصل", start: 2, end: 2 },
      3: { name: "المد المنفصل", start: 3, end: 3 },
      4: { name: "المد العارض للسكون", start: 4, end: 4 },
      5: { name: "مد البدل", start: 5, end: 5 },
      6: { name: "المد اللازم", start: 6, end: 6 }
    },
    rules: {
      1: [{ id: 1, title: "المد الأصلي (الطبيعي)", text: "مد مقداره حركتان", example: "قَالَ", level: "مبتدئ", detailedExplanation: { amount: "حركتان" } }],
      2: [{ id: 2, title: "المد المتصل", text: "مد واجب مقداره 4-5 حركات", example: "جَاءَ", level: "متقدم", detailedExplanation: { amount: "4-5 حركات" } }],
      3: [{ id: 3, title: "المد المنفصل", text: "مد جائز مقداره 4-5 حركات", example: "إِنَّا أَعْطَيْنَاكَ", level: "متقدم", detailedExplanation: { amount: "4-5 حركات" } }],
      4: [{ id: 4, title: "المد العارض للسكون", text: "مد يظهر عند الوقف على حرف ساكن", example: "الْعَالَمِينْ", level: "متقدم", detailedExplanation: { amount: "2-4-6 حركات" } }],
      5: [{ id: 5, title: "مد البدل", text: "مد في الكلمات التي فيها همز قبل حرف مد", example: "آمَنَ", level: "متقدم", detailedExplanation: { amount: "حركتان" } }],
      6: [{ id: 6, title: "المد اللازم", text: "مد يلزم مده 6 حركات", example: "الْحَاقَّة", level: "متقدم", detailedExplanation: { amount: "6 حركات" } }]
    }
  }
};

// تصدير البيانات
if (typeof window !== 'undefined') {
  window.tajweedDatabase = tajweedDatabase;
}