// quran-reader.js
// ==================== نظام قارئ القرآن الكريم ====================

const QURAN_API = "https://api.alquran.cloud/v1";

// حالة القارئ
let readerState = {
  surah: null,
  surahName: "",
  startAyah: 1,
  endAyah: 1,
  currentPage: 1,
  ayahsPerPage: 10,
  arabicText: [],
  englishText: [],
};

// ==================== عناصر DOM ====================
const quranReader = document.getElementById("quranReader");
const surahSelector = document.getElementById("surahSelector");
const ayahRangeSelector = document.getElementById("ayahRangeSelector");
const quranDisplay = document.getElementById("quranDisplay");
const quranPagination = document.getElementById("quranPagination");
const loadingQuran = document.getElementById("loadingQuran");
const errorQuran = document.getElementById("errorQuran");

// ==================== قائمة السور ====================
const surahList = [
  { number: 1, name: "الفاتحة", englishName: "Al-Fatiha", ayahs: 7 },
  { number: 2, name: "البقرة", englishName: "Al-Baqarah", ayahs: 286 },
  { number: 3, name: "آل عمران", englishName: "Aal-E-Imran", ayahs: 200 },
  { number: 4, name: "النساء", englishName: "An-Nisa", ayahs: 176 },
  { number: 5, name: "المائدة", englishName: "Al-Ma'idah", ayahs: 120 },
  { number: 6, name: "الأنعام", englishName: "Al-An'am", ayahs: 165 },
  { number: 7, name: "الأعراف", englishName: "Al-A'raf", ayahs: 206 },
  { number: 8, name: "الأنفال", englishName: "Al-Anfal", ayahs: 75 },
  { number: 9, name: "التوبة", englishName: "At-Tawbah", ayahs: 129 },
  { number: 10, name: "يونس", englishName: "Yunus", ayahs: 109 },
  { number: 11, name: "هود", englishName: "Hud", ayahs: 123 },
  { number: 12, name: "يوسف", englishName: "Yusuf", ayahs: 111 },
  { number: 13, name: "الرعد", englishName: "Ar-Ra'd", ayahs: 43 },
  { number: 14, name: "إبراهيم", englishName: "Ibrahim", ayahs: 52 },
  { number: 15, name: "الحجر", englishName: "Al-Hijr", ayahs: 99 },
  { number: 16, name: "النحل", englishName: "An-Nahl", ayahs: 128 },
  { number: 17, name: "الإسراء", englishName: "Al-Isra", ayahs: 111 },
  { number: 18, name: "الكهف", englishName: "Al-Kahf", ayahs: 110 },
  { number: 19, name: "مريم", englishName: "Maryam", ayahs: 98 },
  { number: 20, name: "طه", englishName: "Taha", ayahs: 135 },
  { number: 21, name: "الأنبياء", englishName: "Al-Anbiya", ayahs: 112 },
  { number: 22, name: "الحج", englishName: "Al-Hajj", ayahs: 78 },
  { number: 23, name: "المؤمنون", englishName: "Al-Mu'minun", ayahs: 118 },
  { number: 24, name: "النور", englishName: "An-Nur", ayahs: 64 },
  { number: 25, name: "الفرقان", englishName: "Al-Furqan", ayahs: 77 },
  { number: 26, name: "الشعراء", englishName: "Ash-Shu'ara", ayahs: 227 },
  { number: 27, name: "النمل", englishName: "An-Naml", ayahs: 93 },
  { number: 28, name: "القصص", englishName: "Al-Qasas", ayahs: 88 },
  { number: 29, name: "العنكبوت", englishName: "Al-Ankabut", ayahs: 69 },
  { number: 30, name: "الروم", englishName: "Ar-Rum", ayahs: 60 },
  { number: 31, name: "لقمان", englishName: "Luqman", ayahs: 34 },
  { number: 32, name: "السجدة", englishName: "As-Sajdah", ayahs: 30 },
  { number: 33, name: "الأحزاب", englishName: "Al-Ahzab", ayahs: 73 },
  { number: 34, name: "سبأ", englishName: "Saba", ayahs: 54 },
  { number: 35, name: "فاطر", englishName: "Fatir", ayahs: 45 },
  { number: 36, name: "يس", englishName: "Ya-Sin", ayahs: 83 },
  { number: 37, name: "الصافات", englishName: "As-Saffat", ayahs: 182 },
  { number: 38, name: "ص", englishName: "Sad", ayahs: 88 },
  { number: 39, name: "الزمر", englishName: "Az-Zumar", ayahs: 75 },
  { number: 40, name: "غافر", englishName: "Ghafir", ayahs: 85 },
  { number: 41, name: "فصلت", englishName: "Fussilat", ayahs: 54 },
  { number: 42, name: "الشورى", englishName: "Ash-Shura", ayahs: 53 },
  { number: 43, name: "الزخرف", englishName: "Az-Zukhruf", ayahs: 89 },
  { number: 44, name: "الدخان", englishName: "Ad-Dukhan", ayahs: 59 },
  { number: 45, name: "الجاثية", englishName: "Al-Jathiyah", ayahs: 37 },
  { number: 46, name: "الأحقاف", englishName: "Al-Ahqaf", ayahs: 35 },
  { number: 47, name: "محمد", englishName: "Muhammad", ayahs: 38 },
  { number: 48, name: "الفتح", englishName: "Al-Fath", ayahs: 29 },
  { number: 49, name: "الحجرات", englishName: "Al-Hujurat", ayahs: 18 },
  { number: 50, name: "ق", englishName: "Qaf", ayahs: 45 },
  { number: 51, name: "الذاريات", englishName: "Adh-Dhariyat", ayahs: 60 },
  { number: 52, name: "الطور", englishName: "At-Tur", ayahs: 49 },
  { number: 53, name: "النجم", englishName: "An-Najm", ayahs: 62 },
  { number: 54, name: "القمر", englishName: "Al-Qamar", ayahs: 55 },
  { number: 55, name: "الرحمن", englishName: "Ar-Rahman", ayahs: 78 },
  { number: 56, name: "الواقعة", englishName: "Al-Waqi'ah", ayahs: 96 },
  { number: 57, name: "الحديد", englishName: "Al-Hadid", ayahs: 29 },
  { number: 58, name: "المجادلة", englishName: "Al-Mujadilah", ayahs: 22 },
  { number: 59, name: "الحشر", englishName: "Al-Hashr", ayahs: 24 },
  { number: 60, name: "الممتحنة", englishName: "Al-Mumtahanah", ayahs: 13 },
  { number: 61, name: "الصف", englishName: "As-Saff", ayahs: 14 },
  { number: 62, name: "الجمعة", englishName: "Al-Jumu'ah", ayahs: 11 },
  { number: 63, name: "المنافقون", englishName: "Al-Munafiqun", ayahs: 11 },
  { number: 64, name: "التغابن", englishName: "At-Taghabun", ayahs: 18 },
  { number: 65, name: "الطلاق", englishName: "At-Talaq", ayahs: 12 },
  { number: 66, name: "التحريم", englishName: "At-Tahrim", ayahs: 12 },
  { number: 67, name: "الملك", englishName: "Al-Mulk", ayahs: 30 },
  { number: 68, name: "القلم", englishName: "Al-Qalam", ayahs: 52 },
  { number: 69, name: "الحاقة", englishName: "Al-Haqqah", ayahs: 52 },
  { number: 70, name: "المعارج", englishName: "Al-Ma'arij", ayahs: 44 },
  { number: 71, name: "نوح", englishName: "Nuh", ayahs: 28 },
  { number: 72, name: "الجن", englishName: "Al-Jinn", ayahs: 28 },
  { number: 73, name: "المزمل", englishName: "Al-Muzzammil", ayahs: 20 },
  { number: 74, name: "المدثر", englishName: "Al-Muddaththir", ayahs: 56 },
  { number: 75, name: "القيامة", englishName: "Al-Qiyamah", ayahs: 40 },
  { number: 76, name: "الإنسان", englishName: "Al-Insan", ayahs: 31 },
  { number: 77, name: "المرسلات", englishName: "Al-Mursalat", ayahs: 50 },
  { number: 78, name: "النبأ", englishName: "An-Naba", ayahs: 40 },
  { number: 79, name: "النازعات", englishName: "An-Nazi'at", ayahs: 46 },
  { number: 80, name: "عبس", englishName: "Abasa", ayahs: 42 },
  { number: 81, name: "التكوير", englishName: "At-Takwir", ayahs: 29 },
  { number: 82, name: "الإنفطار", englishName: "Al-Infitar", ayahs: 19 },
  { number: 83, name: "المطففين", englishName: "Al-Mutaffifin", ayahs: 36 },
  { number: 84, name: "الإنشقاق", englishName: "Al-Inshiqaq", ayahs: 25 },
  { number: 85, name: "البروج", englishName: "Al-Buruj", ayahs: 22 },
  { number: 86, name: "الطارق", englishName: "At-Tariq", ayahs: 17 },
  { number: 87, name: "الأعلى", englishName: "Al-A'la", ayahs: 19 },
  { number: 88, name: "الغاشية", englishName: "Al-Ghashiyah", ayahs: 26 },
  { number: 89, name: "الفجر", englishName: "Al-Fajr", ayahs: 30 },
  { number: 90, name: "البلد", englishName: "Al-Balad", ayahs: 20 },
  { number: 91, name: "الشمس", englishName: "Ash-Shams", ayahs: 15 },
  { number: 92, name: "الليل", englishName: "Al-Layl", ayahs: 21 },
  { number: 93, name: "الضحى", englishName: "Ad-Duha", ayahs: 11 },
  { number: 94, name: "الشرح", englishName: "Ash-Sharh", ayahs: 8 },
  { number: 95, name: "التين", englishName: "At-Tin", ayahs: 8 },
  { number: 96, name: "العلق", englishName: "Al-Alaq", ayahs: 19 },
  { number: 97, name: "القدر", englishName: "Al-Qadr", ayahs: 5 },
  { number: 98, name: "البينة", englishName: "Al-Bayyinah", ayahs: 8 },
  { number: 99, name: "الزلزلة", englishName: "Az-Zalzalah", ayahs: 8 },
  { number: 100, name: "العاديات", englishName: "Al-Adiyat", ayahs: 11 },
  { number: 101, name: "القارعة", englishName: "Al-Qari'ah", ayahs: 11 },
  { number: 102, name: "التكاثر", englishName: "At-Takathur", ayahs: 8 },
  { number: 103, name: "العصر", englishName: "Al-Asr", ayahs: 3 },
  { number: 104, name: "الهمزة", englishName: "Al-Humazah", ayahs: 9 },
  { number: 105, name: "الفيل", englishName: "Al-Fil", ayahs: 5 },
  { number: 106, name: "قريش", englishName: "Quraysh", ayahs: 4 },
  { number: 107, name: "الماعون", englishName: "Al-Ma'un", ayahs: 7 },
  { number: 108, name: "الكوثر", englishName: "Al-Kawthar", ayahs: 3 },
  { number: 109, name: "الكافرون", englishName: "Al-Kafirun", ayahs: 6 },
  { number: 110, name: "النصر", englishName: "An-Nasr", ayahs: 3 },
  { number: 111, name: "المسد", englishName: "Al-Masad", ayahs: 5 },
  { number: 112, name: "الإخلاص", englishName: "Al-Ikhlas", ayahs: 4 },
  { number: 113, name: "الفلق", englishName: "Al-Falaq", ayahs: 5 },
  { number: 114, name: "الناس", englishName: "An-Nas", ayahs: 6 },
];

// ==================== جلب الآيات من API ====================
async function fetchAyahs(surahNumber, startAyah, endAyah) {
  const url = `${QURAN_API}/surah/${surahNumber}/editions/quran-uthmani,en.asad`;
  
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("فشل في جلب البيانات");
    
    const data = await response.json();
    const arabicData = data.data[0].ayahs;
    const englishData = data.data[1].ayahs;
    
    // تصفية الآيات حسب النطاق المطلوب
    const filteredArabic = arabicData.filter(a => a.numberInSurah >= startAyah && a.numberInSurah <= endAyah);
    const filteredEnglish = englishData.filter(a => a.numberInSurah >= startAyah && a.numberInSurah <= endAyah);
    
    return { arabic: filteredArabic, english: filteredEnglish };
  } catch (error) {
    console.error("Error fetching ayahs:", error);
    throw error;
  }
}

// ==================== عرض الآيات ====================
async function displayQuran(surahNumber, startAyah, endAyah) {
  if (!quranDisplay) return;
  
  // إظهار التحميل
  quranDisplay.innerHTML = `
    <div class="quran-loading">
      <i class="fas fa-spinner fa-spin"></i>
      <p>جاري تحميل الآيات...</p>
    </div>
  `;
  
  try {
    const { arabic, english } = await fetchAyahs(surahNumber, startAyah, endAyah);
    
    const surahInfo = surahList.find(s => s.number === surahNumber);
    
    let html = `
      <div class="quran-surah-header">
        <h2>سورة ${surahInfo.name}</h2>
        <p>${surahInfo.englishName} - ${surahInfo.ayahs} آية</p>
        <p class="basmala">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
      </div>
      <div class="quran-ayahs">
    `;
    
    arabic.forEach((ayah, index) => {
      html += `
        <div class="ayah-card">
          <div class="ayah-number">${ayah.numberInSurah}</div>
          <div class="ayah-arabic">${ayah.text}</div>
          <div class="ayah-english">${english[index]?.text || ""}</div>
        </div>
      `;
    });
    
    html += `</div>`;
    
    quranDisplay.innerHTML = html;
    
    // حفظ الحالة
    readerState.surah = surahNumber;
    readerState.surahName = surahInfo.name;
    readerState.startAyah = startAyah;
    readerState.endAyah = endAyah;
    
  } catch (error) {
    quranDisplay.innerHTML = `
      <div class="quran-error">
        <i class="fas fa-exclamation-triangle"></i>
        <p>حدث خطأ أثناء تحميل الآيات. يرجى المحاولة مرة أخرى.</p>
        <button onclick="retryLoad()" class="retry-btn">إعادة المحاولة</button>
      </div>
    `;
  }
}

// ==================== بناء واجهة الاختيار ====================
function buildQuranSelector() {
  if (!surahSelector) return;
  
  surahSelector.innerHTML = `
    <h3>اختر ما تريد قراءته</h3>
    <div class="selector-form">
      <div class="form-group">
        <label>اختر السورة:</label>
        <select id="surahSelect" class="quran-select">
          <option value="">-- اختر سورة --</option>
          ${surahList.map(s => `
            <option value="${s.number}">${s.number}. ${s.name} (${s.ayahs} آية)</option>
          `).join('')}
        </select>
      </div>
      
      <div class="form-group" id="ayahRangeGroup" style="display:none;">
        <label>نطاق الآيات:</label>
        <div class="range-inputs">
          <input type="number" id="rangeStart" min="1" value="1" placeholder="من" />
          <span>إلى</span>
          <input type="number" id="rangeEnd" min="1" value="1" placeholder="إلى" />
        </div>
        <small id="rangeInfo"></small>
      </div>
      
      <button id="loadQuranBtn" class="load-quran-btn">
        <i class="fas fa-book-open"></i> عرض الآيات
      </button>
    </div>
  `;
  
  // الأحداث
  const surahSelect = document.getElementById("surahSelect");
  const rangeStart = document.getElementById("rangeStart");
  const rangeEnd = document.getElementById("rangeEnd");
  const ayahRangeGroup = document.getElementById("ayahRangeGroup");
  const rangeInfo = document.getElementById("rangeInfo");
  const loadBtn = document.getElementById("loadQuranBtn");
  
  surahSelect.addEventListener("change", () => {
    const surahNumber = parseInt(surahSelect.value);
    if (surahNumber) {
      const surah = surahList.find(s => s.number === surahNumber);
      ayahRangeGroup.style.display = "block";
      rangeEnd.value = surah.ayahs;
      rangeStart.max = surah.ayahs;
      rangeEnd.max = surah.ayahs;
      rangeInfo.textContent = `السورة تحتوي على ${surah.ayahs} آية`;
    } else {
      ayahRangeGroup.style.display = "none";
    }
  });
  
  loadBtn.addEventListener("click", () => {
    const surahNumber = parseInt(surahSelect.value);
    const start = parseInt(rangeStart.value);
    const end = parseInt(rangeEnd.value);
    
    if (!surahNumber) {
      alert("الرجاء اختيار سورة");
      return;
    }
    
    const surah = surahList.find(s => s.number === surahNumber);
    
    if (start < 1 || end > surah.ayahs || start > end) {
      alert("الرجاء إدخال نطاق آيات صحيح");
      return;
    }
    
    displayQuran(surahNumber, start, end);
  });
}

// ==================== إعادة المحاولة ====================
function retryLoad() {
  if (readerState.surah) {
    displayQuran(readerState.surah, readerState.startAyah, readerState.endAyah);
  }
}

// ==================== تهيئة الصفحة ====================
if (surahSelector) {
  buildQuranSelector();
}

// ==================== متغيرات حجم الخط ====================
let fontSizeArabic = 1.4; // الحجم الافتراضي للعربي (rem)
let fontSizeEnglish = 0.9; // الحجم الافتراضي للإنجليزي (rem)

// ==================== دوال التحكم في حجم الخط ====================
function increaseArabicFont() {
  if (fontSizeArabic < 3) {
    fontSizeArabic += 0.2;
    updateFontSizes();
    saveFontSettings();
  }
}

function decreaseArabicFont() {
  if (fontSizeArabic > 1) {
    fontSizeArabic -= 0.2;
    updateFontSizes();
    saveFontSettings();
  }
}

function increaseEnglishFont() {
  if (fontSizeEnglish < 2) {
    fontSizeEnglish += 0.1;
    updateFontSizes();
    saveFontSettings();
  }
}

function decreaseEnglishFont() {
  if (fontSizeEnglish > 0.6) {
    fontSizeEnglish -= 0.1;
    updateFontSizes();
    saveFontSettings();
  }
}

// تحديث أحجام الخطوط في الصفحة
function updateFontSizes() {
  const arabicTexts = document.querySelectorAll('.ayah-arabic');
  const englishTexts = document.querySelectorAll('.ayah-english');
  
  arabicTexts.forEach(el => {
    el.style.fontSize = `${fontSizeArabic}rem`;
  });
  
  englishTexts.forEach(el => {
    el.style.fontSize = `${fontSizeEnglish}rem`;
  });
  
  // تحديث عرض الأحجام الحالية
  updateFontSizeDisplay();
}

// عرض الأحجام الحالية
function updateFontSizeDisplay() {
  const arabicSizeDisplay = document.getElementById('arabicFontSize');
  const englishSizeDisplay = document.getElementById('englishFontSize');
  
  if (arabicSizeDisplay) {
    arabicSizeDisplay.textContent = `${fontSizeArabic.toFixed(1)}rem`;
  }
  if (englishSizeDisplay) {
    englishSizeDisplay.textContent = `${fontSizeEnglish.toFixed(1)}rem`;
  }
}

// حفظ إعدادات الخط
function saveFontSettings() {
  localStorage.setItem('quran_font_arabic', fontSizeArabic);
  localStorage.setItem('quran_font_english', fontSizeEnglish);
}

// تحميل إعدادات الخط المحفوظة
function loadFontSettings() {
  const savedArabic = localStorage.getItem('quran_font_arabic');
  const savedEnglish = localStorage.getItem('quran_font_english');
  
  if (savedArabic) fontSizeArabic = parseFloat(savedArabic);
  if (savedEnglish) fontSizeEnglish = parseFloat(savedEnglish);
  
  updateFontSizeDisplay();
}

// إعادة تعيين الخطوط للوضع الافتراضي
function resetFontSizes() {
  fontSizeArabic = 1.4;
  fontSizeEnglish = 0.9;
  updateFontSizes();
  saveFontSettings();
}

// ==================== تحديث دالة عرض الآيات ====================
// أضف هذا داخل دالة displayQuran بعد عرض الآيات:

// داخل displayQuran، بعد quranDisplay.innerHTML = html;
setTimeout(() => {
  updateFontSizes();
  addFontControls();
}, 100);

// ==================== إضافة أزرار التحكم بالخط ====================
function addFontControls() {
  // إزالة الأزرار القديمة إذا وجدت
  const oldControls = document.querySelector('.font-controls');
  if (oldControls) oldControls.remove();
  
  const controlsHTML = `
    <div class="font-controls">
      <div class="font-control-group">
        <span class="font-label">🇸🇦 الخط العربي</span>
        <div class="font-buttons">
          <button onclick="decreaseArabicFont()" class="font-btn" title="تصغير الخط العربي">
            <i class="fas fa-minus"></i>
          </button>
          <span class="font-size-display" id="arabicFontSize">${fontSizeArabic.toFixed(1)}rem</span>
          <button onclick="increaseArabicFont()" class="font-btn" title="تكبير الخط العربي">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
      
      <div class="font-control-group">
        <span class="font-label">🇬🇧 English Text</span>
        <div class="font-buttons">
          <button onclick="decreaseEnglishFont()" class="font-btn" title="تصغير الخط الإنجليزي">
            <i class="fas fa-minus"></i>
          </button>
          <span class="font-size-display" id="englishFontSize">${fontSizeEnglish.toFixed(1)}rem</span>
          <button onclick="increaseEnglishFont()" class="font-btn" title="تكبير الخط الإنجليزي">
            <i class="fas fa-plus"></i>
          </button>
        </div>
      </div>
      
      <button onclick="resetFontSizes()" class="reset-font-btn" title="إعادة تعيين الخطوط">
        <i class="fas fa-undo-alt"></i> إعادة تعيين
      </button>
    </div>
  `;
  
  // إدراج الأزرار قبل الآيات
  const quranDisplay = document.getElementById('quranDisplay');
  const surahHeader = quranDisplay.querySelector('.quran-surah-header');
  
  if (surahHeader) {
    surahHeader.insertAdjacentHTML('afterend', controlsHTML);
  }
}

// ==================== تحديث دالة displayQuran ====================
// استبدل دالة displayQuran القديمة بهذه:

async function displayQuran(surahNumber, startAyah, endAyah) {
  if (!quranDisplay) return;
  
  quranDisplay.innerHTML = `
    <div class="quran-loading">
      <i class="fas fa-spinner fa-spin"></i>
      <p>جاري تحميل الآيات...</p>
    </div>
  `;
  
  try {
    const { arabic, english } = await fetchAyahs(surahNumber, startAyah, endAyah);
    
    const surahInfo = surahList.find(s => s.number === surahNumber);
    
    let html = `
      <div class="quran-surah-header">
        <h2>سورة ${surahInfo.name}</h2>
        <p>${surahInfo.englishName} - ${surahInfo.ayahs} آية</p>
        ${surahNumber !== 9 ? '<p class="basmala">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>' : ''}
      </div>
      <div class="quran-ayahs">
    `;
    
    arabic.forEach((ayah, index) => {
      html += `
        <div class="ayah-card">
          <div class="ayah-number">${ayah.numberInSurah}</div>
          <div class="ayah-text-wrapper">
            <div class="ayah-arabic">${ayah.text}</div>
            <div class="ayah-english">${english[index]?.text || ""}</div>
          </div>
        </div>
      `;
    });
    
    html += `</div>`;
    
    quranDisplay.innerHTML = html;
    
    // حفظ الحالة
    readerState.surah = surahNumber;
    readerState.surahName = surahInfo.name;
    readerState.startAyah = startAyah;
    readerState.endAyah = endAyah;
    
    // تطبيق أحجام الخطوط وإضافة أزرار التحكم
    setTimeout(() => {
      updateFontSizes();
      addFontControls();
    }, 100);
    
  } catch (error) {
    quranDisplay.innerHTML = `
      <div class="quran-error">
        <i class="fas fa-exclamation-triangle"></i>
        <p>حدث خطأ أثناء تحميل الآيات. يرجى المحاولة مرة أخرى.</p>
        <button onclick="retryLoad()" class="retry-btn">إعادة المحاولة</button>
      </div>
    `;
  }
}

// ==================== تحميل الإعدادات عند بدء الصفحة ====================
document.addEventListener('DOMContentLoaded', () => {
  loadFontSettings();
});