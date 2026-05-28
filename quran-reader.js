// quran-reader.js
// ==================== نظام قارئ القرآن الكريم ====================

let readerState = { surah: null, surahName: "", startAyah: 1, endAyah: 1 };

const quranDisplay = document.getElementById("quranDisplay");
const surahSelector = document.getElementById("surahSelector");

// ==================== قائمة السور الكاملة ====================
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

// ==================== خطوط ====================
let fontSizeArabic = 1.4,
  fontSizeEnglish = 0.9;

function updateFontSizes() {
  document
    .querySelectorAll(".ayah-arabic")
    .forEach((el) => (el.style.fontSize = `${fontSizeArabic}rem`));
  document
    .querySelectorAll(".ayah-english")
    .forEach((el) => (el.style.fontSize = `${fontSizeEnglish}rem`));
  const d1 = document.getElementById("arabicFontSize"),
    d2 = document.getElementById("englishFontSize");
  if (d1) d1.textContent = `${fontSizeArabic.toFixed(1)}rem`;
  if (d2) d2.textContent = `${fontSizeEnglish.toFixed(1)}rem`;
}
function saveFontSettings() {
  localStorage.setItem("quran_font_arabic", fontSizeArabic);
  localStorage.setItem("quran_font_english", fontSizeEnglish);
}
function loadFontSettings() {
  const a = localStorage.getItem("quran_font_arabic"),
    e = localStorage.getItem("quran_font_english");
  if (a) fontSizeArabic = parseFloat(a);
  if (e) fontSizeEnglish = parseFloat(e);
}
function resetFontSizes() {
  fontSizeArabic = 1.4;
  fontSizeEnglish = 0.9;
  updateFontSizes();
  saveFontSettings();
}
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

function addFontControls() {
  const old = document.querySelector(".font-controls");
  if (old) old.remove();
  const html = `<div class="font-controls"><div class="font-control-group"><span class="font-label">🇸🇦 الخط العربي</span><div class="font-buttons"><button onclick="decreaseArabicFont()" class="font-btn"><i class="fas fa-minus"></i></button><span class="font-size-display" id="arabicFontSize">${fontSizeArabic.toFixed(1)}rem</span><button onclick="increaseArabicFont()" class="font-btn"><i class="fas fa-plus"></i></button></div></div><div class="font-control-group"><span class="font-label">🇬🇧 English</span><div class="font-buttons"><button onclick="decreaseEnglishFont()" class="font-btn"><i class="fas fa-minus"></i></button><span class="font-size-display" id="englishFontSize">${fontSizeEnglish.toFixed(1)}rem</span><button onclick="increaseEnglishFont()" class="font-btn"><i class="fas fa-plus"></i></button></div></div><button onclick="resetFontSizes()" class="reset-font-btn"><i class="fas fa-undo-alt"></i> إعادة تعيين</button></div>`;
  const header = document.querySelector(".quran-surah-header");
  if (header) header.insertAdjacentHTML("afterend", html);
}

// ==================== عرض الآيات باستخدام Quran.com API ====================
async function displayQuran(surahNumber, startAyah, endAyah) {
  if (!quranDisplay) return;

  quranDisplay.innerHTML = `
    <div class="quran-loading">
      <i class="fas fa-spinner fa-spin"></i>
      <p>جاري تحميل الآيات...</p>
    </div>
  `;

  try {
    // ==================== جلب النص العربي ====================
    const arabicResponse = await fetch(
      `https://api.quran.com/api/v4/quran/verses/uthmani?chapter_number=${surahNumber}`,
    );

    // ==================== جلب الترجمة ====================
   const translationResponse = await fetch(
  `https://api.quran.com/api/v4/quran/translations/85?chapter_number=${surahNumber}`,
);

    if (!arabicResponse.ok || !translationResponse.ok) {
      throw new Error("فشل في تحميل البيانات");
    }

    const arabicData = await arabicResponse.json();
    const translationData = await translationResponse.json();

    const verses = arabicData.verses;
    const translations = translationData.translations;

    const surahInfo = surahList.find((s) => s.number === surahNumber);

    // ==================== الهيدر ====================
    let html = `
      <div class="quran-surah-header">

        <h2>
          سورة ${surahInfo.name}
        </h2>

        <p>
          ${surahInfo.englishName}
          -
          ${surahInfo.ayahs} آية
        </p>
    `;

    // ==================== البسملة ====================
    if (surahNumber !== 9 && startAyah === 1) {
      html += `
        <p class="basmala">
          بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
        </p>
      `;
    }

    html += `
      </div>

      <div class="quran-ayahs">
    `;

    // ==================== عرض الآيات ====================
    let count = 0;

    verses.forEach((verse, index) => {
      const verseNumber = index + 1;

      if (verseNumber >= startAyah && verseNumber <= endAyah) {
        count++;

        let arabicText = verse.text_uthmani;

        // حذف البسملة من أول آية
        if (surahNumber !== 1 && surahNumber !== 9 && verseNumber === 1) {
          arabicText = arabicText
            .replace("بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ", "")
            .trim();
        }

        html += `
          <div class="ayah-card">

            <div class="ayah-number">
              ${verseNumber}
            </div>

            <div class="ayah-text-wrapper">

              <div class="ayah-arabic">
                ${arabicText}
              </div>

              <div class="ayah-english">
                ${translations[index]?.text || ""}
              </div>

            </div>

          </div>
        `;
      }
    });

    // ==================== لا توجد آيات ====================
    if (count === 0) {
      html += `
        <p style="text-align:center;padding:2rem;">
          لا توجد آيات في هذا النطاق
        </p>
      `;
    }

    html += `</div>`;

    quranDisplay.innerHTML = html;

    // ==================== حفظ الحالة ====================
    readerState = {
      surah: surahNumber,
      surahName: surahInfo.name,
      startAyah,
      endAyah,
    };

    // ==================== تحديث الخطوط ====================
    setTimeout(() => {
      updateFontSizes();
      addFontControls();
    }, 100);
  } catch (error) {
    console.error(error);

    quranDisplay.innerHTML = `
      <div class="quran-error">

        <i class="fas fa-exclamation-triangle"></i>

        <p>
          حدث خطأ أثناء تحميل الآيات
        </p>

        <button
          onclick="retryLoad()"
          class="retry-btn"
        >
          إعادة المحاولة
        </button>

      </div>
    `;
  }
}
// ==================== البحث عن السور ====================
function addSearchInterface() {
  const old = document.querySelector(".quran-search-container");
  if (old) old.remove();
  const html = `<div class="quran-search-container"><div class="search-box"><i class="fas fa-search search-icon"></i><input type="text" id="quranSearchInput" placeholder="ابحث عن سورة..." class="quran-search-input" /><button id="clearSearchBtn" class="clear-search-btn" style="display:none;"><i class="fas fa-times"></i></button></div><div id="searchResults" class="search-results" style="display:none;"></div></div>`;
  if (surahSelector) surahSelector.insertAdjacentHTML("beforebegin", html);

  const si = document.getElementById("quranSearchInput");
  const cb = document.getElementById("clearSearchBtn");
  const sr = document.getElementById("searchResults");

  if (si) {
    si.addEventListener("input", () => {
      const q = si.value.trim();
      if (cb) cb.style.display = q ? "flex" : "none";
      if (q.length >= 1) {
        const results = surahList.filter(
          (s) =>
            s.name.includes(q) ||
            s.englishName.toLowerCase().includes(q.toLowerCase()) ||
            s.number.toString() === q,
        );
        sr.style.display = "block";
        sr.innerHTML =
          results.length > 0
            ? results
                .map(
                  (s) =>
                    `<div class="search-item" onclick="selectSurahFromSearch(${s.number})"><div class="search-item-number">${s.number}</div><div class="search-item-content"><div class="search-item-title">سورة ${s.name}</div><div class="search-item-subtitle">${s.englishName} - ${s.ayahs} آية</div></div><i class="fas fa-arrow-left"></i></div>`,
                )
                .join("")
            : `<div class="search-no-results"><i class="fas fa-search"></i><p>لا توجد نتائج</p></div>`;
      } else {
        sr.style.display = "none";
      }
    });
    if (cb)
      cb.addEventListener("click", () => {
        si.value = "";
        cb.style.display = "none";
        sr.style.display = "none";
      });
  }
}

function selectSurahFromSearch(num) {
  const s = surahList.find((x) => x.number === num);
  if (s) displayQuran(num, 1, Math.min(s.ayahs, 20));
  document.getElementById("searchResults").style.display = "none";
  document.getElementById("quranSearchInput").value = "";
}

/// ==================== نظام التفسير - QuranEnc API (مُصحح) ====================

// قائمة التفاسير المتاحة
const tafsirList = [
  {
    id: "arabic_moyassar",
    name: "التفسير الميسر",
    icon: "fa-book-open",
  },
];
let selectedTafsirId = "arabic_moyassar"; // السعدي افتراضياً

// ==================== عرض التفسير ====================
async function showTafsir(surahNumber, ayahNumber) {
  const tafsirContainer = document.getElementById("tafsirContainer");
  if (!tafsirContainer) return;

  tafsirContainer.style.display = "block";
  tafsirContainer.innerHTML = `
    <div class="tafsir-loading">
      <i class="fas fa-spinner fa-spin"></i>
      <p>جاري تحميل التفسير...</p>
    </div>
  `;

  tafsirContainer.scrollIntoView({ behavior: "smooth", block: "center" });

  try {
    // الصيغة الصحيحة لـ QuranEnc API
    const url = `https://quranenc.com/api/v1/translation/aya/${selectedTafsirId}/${surahNumber}/${ayahNumber}`;
    console.log("Fetching:", url);

    const response = await fetch(url);

    const data = await response.json();

    console.log("URL:", url);
    console.log("DATA:", data);

    console.log("Response:", data);

    const surahInfo = surahList.find((s) => s.number === surahNumber);
    const tafsirInfo =
      tafsirList.find((t) => t.id === selectedTafsirId) || tafsirList[0];

    if (data.result?.translation) {
      let tafsirText = data.result.translation;

      // تنظيف النص من HTML
      tafsirText = tafsirText.replace(/<[^>]*>/g, "");

      tafsirContainer.innerHTML = `
        <div class="tafsir-card">
          <div class="tafsir-header">
            <div class="tafsir-title">
              <i class="fas ${tafsirInfo.icon}"></i>
              <h3>${tafsirInfo.name}</h3>
            </div>
            <div class="tafsir-ayah-info">
              <span class="tafsir-badge">📖 ${surahInfo.name}</span>
              <span class="tafsir-badge">🔢 آية ${ayahNumber}</span>
            </div>
            <button class="tafsir-close-btn" onclick="closeTafsir()">
              <i class="fas fa-times"></i>
            </button>
          </div>
          
          <div class="tafsir-selector">
            <label><i class="fas fa-list"></i> اختر التفسير:</label>
            <select id="tafsirSelect" onchange="changeTafsir(${surahNumber}, ${ayahNumber})">
              ${tafsirList
                .map(
                  (t) => `
                <option value="${t.id}" ${t.id === selectedTafsirId ? "selected" : ""}>
                  ${t.name}
                </option>
              `,
                )
                .join("")}
            </select>
          </div>
          
          <div class="tafsir-content">${tafsirText}</div>
        </div>
      `;
    } else {
      showNoTafsirMessage(
        surahNumber,
        ayahNumber,
        data.error || "التفسير غير متاح",
      );
    }
  } catch (error) {
    console.error("Tafsir Error:", error);
    showNoTafsirMessage(surahNumber, ayahNumber, "خطأ في الاتصال");
  }
}

// ==================== رسالة لا يوجد تفسير ====================
function showNoTafsirMessage(surahNumber, ayahNumber, message) {
  const tafsirContainer = document.getElementById("tafsirContainer");
  if (!tafsirContainer) return;

  tafsirContainer.innerHTML = `
    <div class="tafsir-card">
      <div class="tafsir-header" style="background: #f39c12;">
        <div class="tafsir-title">
          <i class="fas fa-info-circle"></i>
          <h3>تفسير غير متاح</h3>
        </div>
        <button class="tafsir-close-btn" onclick="closeTafsir()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      
      <div class="tafsir-selector">
        <label><i class="fas fa-list"></i> جرب تفسيراً آخر:</label>
        <select id="tafsirSelect" onchange="changeTafsir(${surahNumber}, ${ayahNumber})">
          ${tafsirList
            .map(
              (t) => `
            <option value="${t.id}" ${t.id === selectedTafsirId ? "selected" : ""}>
              ${t.name}
            </option>
          `,
            )
            .join("")}
        </select>
      </div>
      
      <p style="text-align:center;padding:2rem;color:var(--text-secondary);">
        <i class="fas fa-search" style="font-size:2rem;display:block;margin-bottom:1rem;"></i>
        ${message}
        <br><br>
        <small>جرب تفسيراً آخر أو آية أخرى.</small>
      </p>
    </div>
  `;
}

// ==================== تغيير التفسير ====================
function changeTafsir(surahNumber, ayahNumber) {
  const select = document.getElementById("tafsirSelect");
  if (select) {
    selectedTafsirId = select.value;
    showTafsir(surahNumber, ayahNumber);
  }
}

// ==================== إغلاق التفسير ====================
function closeTafsir() {
  const tafsirContainer = document.getElementById("tafsirContainer");
  if (tafsirContainer) {
    tafsirContainer.style.display = "none";
  }
}

// ==================== إضافة حاوية التفسير ====================
function addTafsirSection() {
  let tafsirContainer = document.getElementById("tafsirContainer");

  if (!tafsirContainer) {
    tafsirContainer = document.createElement("div");
    tafsirContainer.id = "tafsirContainer";
    tafsirContainer.className = "tafsir-container";
    tafsirContainer.style.display = "none";

    const quranDisplay = document.getElementById("quranDisplay");
    if (quranDisplay) {
      quranDisplay.insertAdjacentElement("afterend", tafsirContainer);
    }
  }
}

// ==================== إضافة أزرار التفسير للآيات ====================
function addTafsirButtons(surahNumber) {
  const ayahCards = document.querySelectorAll(".ayah-card");

  ayahCards.forEach((card) => {
    if (card.querySelector(".tafsir-btn")) return;

    const ayahElement = card.querySelector(".ayah-number");

    if (!ayahElement) return;

    const ayahText = ayahElement.textContent.trim();

    // استخراج الرقم فقط
    const ayahNumber = Number(ayahText.replace(/[^\d]/g, ""));

    if (!ayahNumber) return;

    const tafsirBtn = document.createElement("button");
    tafsirBtn.className = "tafsir-btn";
    tafsirBtn.innerHTML = '<i class="fas fa-book-open"></i> تفسير';
    tafsirBtn.title = "عرض تفسير الآية";
    tafsirBtn.onclick = (e) => {
      e.stopPropagation();
      showTafsir(surahNumber, ayahNumber);
    };

    const wrapper = card.querySelector(".ayah-text-wrapper");
    if (wrapper) {
      wrapper.appendChild(tafsirBtn);
    }
  });

  addTafsirSection();
}

// ==================== تحديث عرض الآيات ====================
const originalDisplayQuran = displayQuran;
displayQuran = async function (surahNumber, startAyah, endAyah) {
  await originalDisplayQuran(surahNumber, startAyah, endAyah);
  setTimeout(() => {
    addTafsirButtons(surahNumber);
  }, 300);
};

// ==================== بناء واجهة الاختيار ====================
function buildQuranSelector() {
  if (!surahSelector) return;
  surahSelector.innerHTML = `<h3>اختر السورة والآيات</h3><div class="selector-form"><div class="form-group"><label>اختر السورة:</label><select id="surahSelect" class="quran-select"><option value="">-- اختر سورة --</option>${surahList.map((s) => `<option value="${s.number}">${s.number}. ${s.name} (${s.ayahs} آية)</option>`).join("")}</select></div><div class="form-group" id="ayahRangeGroup" style="display:none;"><label>نطاق الآيات:</label><div class="range-inputs"><input type="number" id="rangeStart" min="1" value="1" placeholder="من" /><span>إلى</span><input type="number" id="rangeEnd" min="1" value="1" placeholder="إلى" /></div><small id="rangeInfo"></small></div><button id="loadQuranBtn" class="load-quran-btn"><i class="fas fa-book-open"></i> عرض الآيات</button></div>`;

  const ss = document.getElementById("surahSelect"),
    rs = document.getElementById("rangeStart"),
    re = document.getElementById("rangeEnd"),
    ag = document.getElementById("ayahRangeGroup"),
    ri = document.getElementById("rangeInfo"),
    lb = document.getElementById("loadQuranBtn");

  ss.addEventListener("change", () => {
    const n = parseInt(ss.value);
    if (n) {
      const s = surahList.find((x) => x.number === n);
      ag.style.display = "block";
      re.value = s.ayahs;
      rs.max = s.ayahs;
      re.max = s.ayahs;
      ri.textContent = `السورة تحتوي على ${s.ayahs} آية`;
    } else {
      ag.style.display = "none";
    }
  });

  lb.addEventListener("click", () => {
    const n = parseInt(ss.value),
      s = parseInt(rs.value),
      e = parseInt(re.value);
    if (!n) {
      alert("اختر سورة");
      return;
    }
    if (s < 1 || e > surahList.find((x) => x.number === n).ayahs || s > e) {
      alert("نطاق غير صحيح");
      return;
    }
    displayQuran(n, s, e);
  });
  addSearchInterface();
}

document.addEventListener("DOMContentLoaded", () => {
  loadFontSettings();
  if (surahSelector) buildQuranSelector();
});
