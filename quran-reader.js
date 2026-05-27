// quran-reader.js
// ==================== نظام قارئ القرآن الكريم ====================

const QURAN_API = "https://api.alquran.cloud/v1";

// حالة القارئ
let readerState = {
  surah: null,
  surahName: "",
  startAyah: 1,
  endAyah: 1,
};

// ==================== عناصر DOM ====================
const quranDisplay = document.getElementById("quranDisplay");
const surahSelector = document.getElementById("surahSelector");

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
  { number: 36, name: "يس", englishName: "Ya-Sin", ayahs: 83 },
  { number: 55, name: "الرحمن", englishName: "Ar-Rahman", ayahs: 78 },
  { number: 56, name: "الواقعة", englishName: "Al-Waqi'ah", ayahs: 96 },
  { number: 67, name: "الملك", englishName: "Al-Mulk", ayahs: 30 },
  { number: 78, name: "النبأ", englishName: "An-Naba", ayahs: 40 },
  { number: 93, name: "الضحى", englishName: "Ad-Duha", ayahs: 11 },
  { number: 94, name: "الشرح", englishName: "Ash-Sharh", ayahs: 8 },
  { number: 97, name: "القدر", englishName: "Al-Qadr", ayahs: 5 },
  { number: 103, name: "العصر", englishName: "Al-Asr", ayahs: 3 },
  { number: 105, name: "الفيل", englishName: "Al-Fil", ayahs: 5 },
  { number: 106, name: "قريش", englishName: "Quraysh", ayahs: 4 },
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
    
    const filteredArabic = arabicData.filter(a => a.numberInSurah >= startAyah && a.numberInSurah <= endAyah);
    const filteredEnglish = englishData.filter(a => a.numberInSurah >= startAyah && a.numberInSurah <= endAyah);
    
    return { arabic: filteredArabic, english: filteredEnglish };
  } catch (error) {
    console.error("Error fetching ayahs:", error);
    throw error;
  }
}

// ==================== متغيرات حجم الخط ====================
let fontSizeArabic = 1.4;
let fontSizeEnglish = 0.9;

function increaseArabicFont() {
  if (fontSizeArabic < 3) { fontSizeArabic += 0.2; updateFontSizes(); saveFontSettings(); }
}
function decreaseArabicFont() {
  if (fontSizeArabic > 1) { fontSizeArabic -= 0.2; updateFontSizes(); saveFontSettings(); }
}
function increaseEnglishFont() {
  if (fontSizeEnglish < 2) { fontSizeEnglish += 0.1; updateFontSizes(); saveFontSettings(); }
}
function decreaseEnglishFont() {
  if (fontSizeEnglish > 0.6) { fontSizeEnglish -= 0.1; updateFontSizes(); saveFontSettings(); }
}

function updateFontSizes() {
  document.querySelectorAll('.ayah-arabic').forEach(el => el.style.fontSize = `${fontSizeArabic}rem`);
  document.querySelectorAll('.ayah-english').forEach(el => el.style.fontSize = `${fontSizeEnglish}rem`);
  const d1 = document.getElementById('arabicFontSize');
  const d2 = document.getElementById('englishFontSize');
  if (d1) d1.textContent = `${fontSizeArabic.toFixed(1)}rem`;
  if (d2) d2.textContent = `${fontSizeEnglish.toFixed(1)}rem`;
}

function saveFontSettings() {
  localStorage.setItem('quran_font_arabic', fontSizeArabic);
  localStorage.setItem('quran_font_english', fontSizeEnglish);
}

function loadFontSettings() {
  const a = localStorage.getItem('quran_font_arabic');
  const e = localStorage.getItem('quran_font_english');
  if (a) fontSizeArabic = parseFloat(a);
  if (e) fontSizeEnglish = parseFloat(e);
}

function resetFontSizes() {
  fontSizeArabic = 1.4; fontSizeEnglish = 0.9;
  updateFontSizes(); saveFontSettings();
}

// ==================== أزرار التحكم بالخط ====================
function addFontControls() {
  const old = document.querySelector('.font-controls');
  if (old) old.remove();
  
  const html = `
    <div class="font-controls">
      <div class="font-control-group">
        <span class="font-label">🇸🇦 الخط العربي</span>
        <div class="font-buttons">
          <button onclick="decreaseArabicFont()" class="font-btn"><i class="fas fa-minus"></i></button>
          <span class="font-size-display" id="arabicFontSize">${fontSizeArabic.toFixed(1)}rem</span>
          <button onclick="increaseArabicFont()" class="font-btn"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <div class="font-control-group">
        <span class="font-label">🇬🇧 English</span>
        <div class="font-buttons">
          <button onclick="decreaseEnglishFont()" class="font-btn"><i class="fas fa-minus"></i></button>
          <span class="font-size-display" id="englishFontSize">${fontSizeEnglish.toFixed(1)}rem</span>
          <button onclick="increaseEnglishFont()" class="font-btn"><i class="fas fa-plus"></i></button>
        </div>
      </div>
      <button onclick="resetFontSizes()" class="reset-font-btn"><i class="fas fa-undo-alt"></i> إعادة تعيين</button>
    </div>
  `;
  
  const header = document.querySelector('.quran-surah-header');
  if (header) header.insertAdjacentHTML('afterend', html);
}

// ==================== عرض الآيات ====================
async function displayQuran(surahNumber, startAyah, endAyah) {
  if (!quranDisplay) return;
  
  quranDisplay.innerHTML = `<div class="quran-loading"><i class="fas fa-spinner fa-spin"></i><p>جاري تحميل الآيات...</p></div>`;
  
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
    
    readerState.surah = surahNumber;
    readerState.surahName = surahInfo.name;
    readerState.startAyah = startAyah;
    readerState.endAyah = endAyah;
    
    setTimeout(() => { updateFontSizes(); addFontControls(); }, 100);
    
  } catch (error) {
    quranDisplay.innerHTML = `<div class="quran-error"><i class="fas fa-exclamation-triangle"></i><p>حدث خطأ. حاول مرة أخرى.</p><button onclick="retryLoad()" class="retry-btn">إعادة المحاولة</button></div>`;
  }
}

function retryLoad() {
  if (readerState.surah) displayQuran(readerState.surah, readerState.startAyah, readerState.endAyah);
}

// ==================== البحث ====================
function addSearchInterface() {
  const oldSearch = document.querySelector('.quran-search-container');
  if (oldSearch) oldSearch.remove();
  
  const searchHTML = `
    <div class="quran-search-container">
      <div class="search-box">
        <i class="fas fa-search search-icon"></i>
        <input type="text" id="quranSearchInput" placeholder="ابحث عن سورة..." class="quran-search-input" />
        <button id="clearSearchBtn" class="clear-search-btn" style="display:none;"><i class="fas fa-times"></i></button>
      </div>
      <div id="searchResults" class="search-results" style="display:none;"></div>
    </div>
  `;
  
  if (surahSelector) surahSelector.insertAdjacentHTML('beforebegin', searchHTML);
  
  const searchInput = document.getElementById('quranSearchInput');
  const clearBtn = document.getElementById('clearSearchBtn');
  const searchResults = document.getElementById('searchResults');
  
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      const query = searchInput.value.trim();
      if (clearBtn) clearBtn.style.display = query ? 'flex' : 'none';
      
      if (query.length >= 1) {
        const results = surahList.filter(s => 
          s.name.includes(query) || 
          s.englishName.toLowerCase().includes(query.toLowerCase()) ||
          s.number.toString() === query
        );
        
        if (results.length > 0) {
          searchResults.style.display = 'block';
          searchResults.innerHTML = results.map(s => `
            <div class="search-item" onclick="selectSurahFromSearch(${s.number})">
              <div class="search-item-number">${s.number}</div>
              <div class="search-item-content">
                <div class="search-item-title">سورة ${s.name}</div>
                <div class="search-item-subtitle">${s.englishName} - ${s.ayahs} آية</div>
              </div>
              <i class="fas fa-arrow-left"></i>
            </div>
          `).join('');
        } else {
          searchResults.style.display = 'block';
          searchResults.innerHTML = `<div class="search-no-results"><i class="fas fa-search"></i><p>لا توجد نتائج</p></div>`;
        }
      } else {
        searchResults.style.display = 'none';
      }
    });
    
    if (clearBtn) {
      clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none';
        searchResults.style.display = 'none';
      });
    }
  }
}

function selectSurahFromSearch(surahNumber) {
  const surah = surahList.find(s => s.number === surahNumber);
  if (surah) displayQuran(surahNumber, 1, Math.min(surah.ayahs, 20));
  
  const searchResults = document.getElementById('searchResults');
  const searchInput = document.getElementById('quranSearchInput');
  if (searchResults) searchResults.style.display = 'none';
  if (searchInput) searchInput.value = '';
}

// ==================== بناء واجهة الاختيار ====================
function buildQuranSelector() {
  if (!surahSelector) return;
  
  surahSelector.innerHTML = `
    <h3>اختر ما تريد قراءته بتحديد السورة و الايات التي تريدها </h3>
    <div class="selector-form">
      <div class="form-group">
        <label>اختر السورة:</label>
        <select id="surahSelect" class="quran-select">
          <option value="">-- اختر سورة --</option>
          ${surahList.map(s => `<option value="${s.number}">${s.number}. ${s.name} (${s.ayahs} آية)</option>`).join('')}
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
      <button id="loadQuranBtn" class="load-quran-btn"><i class="fas fa-book-open"></i> عرض الآيات</button>
    </div>
  `;
  
  const surahSelect = document.getElementById("surahSelect");
  const rangeStart = document.getElementById("rangeStart");
  const rangeEnd = document.getElementById("rangeEnd");
  const ayahRangeGroup = document.getElementById("ayahRangeGroup");
  const rangeInfo = document.getElementById("rangeInfo");
  const loadBtn = document.getElementById("loadQuranBtn");
  
  surahSelect.addEventListener("change", () => {
    const num = parseInt(surahSelect.value);
    if (num) {
      const surah = surahList.find(s => s.number === num);
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
    const num = parseInt(surahSelect.value);
    const start = parseInt(rangeStart.value);
    const end = parseInt(rangeEnd.value);
    if (!num) { alert("الرجاء اختيار سورة"); return; }
    const surah = surahList.find(s => s.number === num);
    if (start < 1 || end > surah.ayahs || start > end) { alert("نطاق غير صحيح"); return; }
    displayQuran(num, start, end);
  });
  
  // إضافة البحث
  addSearchInterface();
}

// ==================== تهيئة ====================
document.addEventListener('DOMContentLoaded', () => {
  loadFontSettings();
  if (surahSelector) buildQuranSelector();
});