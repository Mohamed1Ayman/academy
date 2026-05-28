// hadith-system.js
// ==================== موسوعة الحديث الشريف - نظام الأبواب ====================

const HADITH_API =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1/editions";

// قائمة كتب الحديث
const hadithBooks = [
  {
    id: "bukhari",
    name: "صحيح البخاري",
    nameEn: "Sahih Bukhari",
    file: "ara-bukhari",
    icon: "fa-book",
  },
  {
    id: "muslim",
    name: "صحيح مسلم",
    nameEn: "Sahih Muslim",
    file: "ara-muslim",
    icon: "fa-book-open",
  },
  {
    id: "tirmidhi",
    name: "سنن الترمذي",
    nameEn: "Sunan Tirmidhi",
    file: "ara-tirmidhi",
    icon: "fa-bookmark",
  },
  {
    id: "abudaud",
    name: "سنن أبي داود",
    nameEn: "Sunan Abu Dawud",
    file: "ara-abudawud",
    icon: "fa-book-journal-whills",
  },
];

// ==================== نظام الأبواب ====================
const hadithChapters = {
  bukhari: {
    1: { name: "كتاب بدء الوحي", start: 1, end: 6 },
    2: { name: "كتاب الإيمان", start: 7, end: 58 },
    3: { name: "كتاب العلم", start: 59, end: 99 },
    4: { name: "كتاب الوضوء", start: 100, end: 199 },
    5: { name: "كتاب الغسل", start: 200, end: 230 },
    6: { name: "كتاب الحيض", start: 231, end: 260 },
    7: { name: "كتاب التيمم", start: 261, end: 275 },
    8: { name: "كتاب الصلاة", start: 276, end: 380 },
    9: { name: "كتاب مواقيت الصلاة", start: 381, end: 420 },
    10: { name: "كتاب الأذان", start: 421, end: 500 },
    11: { name: "كتاب الجمعة", start: 501, end: 530 },
    12: { name: "كتاب العيدين", start: 531, end: 550 },
    13: { name: "كتاب الزكاة", start: 551, end: 620 },
    14: { name: "كتاب الحج", start: 621, end: 750 },
    15: { name: "كتاب الصوم", start: 751, end: 800 },
    16: { name: "كتاب البيوع", start: 801, end: 900 },
    17: { name: "كتاب النكاح", start: 901, end: 950 },
    18: { name: "كتاب الطلاق", start: 951, end: 1000 },
  },
  muslim: {
    1: { name: "كتاب الإيمان", start: 1, end: 100 },
    2: { name: "كتاب الطهارة", start: 101, end: 180 },
    3: { name: "كتاب الحيض", start: 181, end: 220 },
    4: { name: "كتاب الصلاة", start: 221, end: 350 },
    5: { name: "كتاب المساجد", start: 351, end: 420 },
    6: { name: "كتاب الجمعة", start: 421, end: 450 },
    7: { name: "كتاب العيدين", start: 451, end: 470 },
    8: { name: "كتاب الزكاة", start: 471, end: 550 },
    9: { name: "كتاب الصيام", start: 551, end: 600 },
    10: { name: "كتاب الحج", start: 601, end: 750 },
    11: { name: "كتاب النكاح", start: 751, end: 850 },
    12: { name: "كتاب الطلاق", start: 851, end: 900 },
    13: { name: "كتاب البيوع", start: 901, end: 1000 },
  },
  nawawi: {
    1: { name: "الأحاديث 1-10", start: 1, end: 10 },
    2: { name: "الأحاديث 11-20", start: 11, end: 20 },
    3: { name: "الأحاديث 21-30", start: 21, end: 30 },
    4: { name: "الأحاديث 31-42", start: 31, end: 42 },
  },
  tirmidhi: {
    1: { name: "كتاب الطهارة", start: 1, end: 100 },
    2: { name: "كتاب الصلاة", start: 101, end: 250 },
    3: { name: "كتاب الزكاة", start: 251, end: 300 },
    4: { name: "كتاب الصوم", start: 301, end: 400 },
    5: { name: "كتاب الحج", start: 401, end: 550 },
    6: { name: "كتاب البيوع", start: 551, end: 650 },
    7: { name: "كتاب النكاح", start: 651, end: 750 },
  },
  abudaud: {
    1: { name: "كتاب الطهارة", start: 1, end: 120 },
    2: { name: "كتاب الصلاة", start: 121, end: 300 },
    3: { name: "كتاب الزكاة", start: 301, end: 380 },
    4: { name: "كتاب الصوم", start: 381, end: 480 },
    5: { name: "كتاب الحج", start: 481, end: 650 },
    6: { name: "كتاب النكاح", start: 651, end: 750 },
    7: { name: "كتاب الطلاق", start: 751, end: 850 },
  },
};

let hadithState = {
  book: "bukhari",
  chapter: null,
  rangeStart: 1,
  rangeEnd: 10,
};
let cachedHadith = {};

const hadithDisplay = document.getElementById("hadithDisplay");
const hadithSelector = document.getElementById("hadithSelector");

// ==================== جلب الأحاديث ====================
async function loadHadithBook(bookId) {
  if (cachedHadith[bookId]) return cachedHadith[bookId];

  const bookInfo = hadithBooks.find((b) => b.id === bookId);
  const url = `${HADITH_API}/${bookInfo.file}.json`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    cachedHadith[bookId] = data.hadiths || data;
    return cachedHadith[bookId];
  } catch (error) {
    console.error("Error loading hadith:", error);
    return null;
  }
}

// ==================== عرض الأحاديث ====================
async function displayHadith(book, start, end, chapterName) {
  if (!hadithDisplay) return;

  hadithDisplay.innerHTML = `
    <div class="hadith-loading">
      <i class="fas fa-spinner fa-spin"></i>
      <p>جاري تحميل الأحاديث...</p>
    </div>
  `;

  const hadiths = await loadHadithBook(book);

  if (!hadiths) {
    hadithDisplay.innerHTML = `
      <div class="hadith-error">
        <i class="fas fa-exclamation-triangle"></i>
        <p>تعذر تحميل الأحاديث</p>
        <button onclick="retryLoadHadith()" class="retry-btn">إعادة المحاولة</button>
      </div>
    `;
    return;
  }

  const bookInfo = hadithBooks.find((b) => b.id === book);
  const selectedHadiths = hadiths.slice(start - 1, end);

  let html = `
    <div class="hadith-book-header">
      <h2>📚 ${bookInfo.name}</h2>
      ${chapterName ? `<p class="hadith-chapter-name">📖 ${chapterName}</p>` : ""}
      <p>${bookInfo.nameEn} - الأحاديث ${start} إلى ${end} (من ${hadiths.length})</p>
    </div>
    
    <!-- أزرار الأبواب -->
    <div class="hadith-chapters-bar">
      <button class="chapter-nav-btn" onclick="showChaptersList()">
        <i class="fas fa-list"></i> الأبواب
      </button>
      <button class="chapter-nav-btn" onclick="displayHadith('${book}', 1, 10)">
        <i class="fas fa-book"></i> كل الأحاديث
      </button>
    </div>
    
    <div class="hadith-list">
  `;

  selectedHadiths.forEach((h, index) => {
    const hadithNumber = start + index;
    const text = h.text || h.arabic || h.hadith_arabic || "";

    html += `
      <div class="hadith-card">
        <div class="hadith-number">${hadithNumber}</div>
        <div class="hadith-content">
          <div class="hadith-arabic">${text}</div>
          ${h.narrator ? `<div class="hadith-narrator">📜 ${h.narrator}</div>` : ""}
        </div>
      </div>
    `;
  });

  html += `</div>`;

  // أزرار التنقل
  html += `
    <div class="hadith-pagination">
      <button onclick="loadPrevPage()" ${start <= 1 ? "disabled" : ""}>
        <i class="fas fa-arrow-right"></i> السابق
      </button>
      <span>${start} - ${end} من ${hadiths.length}</span>
      <button onclick="loadNextPage()" ${end >= hadiths.length ? "disabled" : ""}>
        التالي <i class="fas fa-arrow-left"></i>
      </button>
    </div>
  `;

  hadithDisplay.innerHTML = html;
  hadithState = {
    book,
    chapter: chapterName || null,
    rangeStart: start,
    rangeEnd: end,
  };
}

// ==================== عرض قائمة الأبواب ====================
function showChaptersList() {
  const book = hadithState.book;
  const chapters = hadithChapters[book];

  if (!chapters) {
    alert("الأبواب غير متاحة لهذا الكتاب حالياً");
    return;
  }

  const bookInfo = hadithBooks.find((b) => b.id === book);

  let html = `
    <div class="hadith-book-header">
      <h2>📚 ${bookInfo.name}</h2>
      <p>📂 الأبواب والفصول</p>
    </div>
    
    <div class="hadith-chapters-bar">
      <button class="chapter-nav-btn" onclick="displayHadith('${book}', 1, 10)">
        <i class="fas fa-arrow-right"></i> رجوع للأحاديث
      </button>
    </div>
    
    <div class="chapters-grid">
  `;

  Object.keys(chapters).forEach((key) => {
    const chapter = chapters[key];
    html += `
      <div class="chapter-card" onclick="loadChapter('${book}', '${key}')">
        <div class="chapter-number">${key}</div>
        <div class="chapter-content">
          <h4>${chapter.name}</h4>
          <p>الأحاديث: ${chapter.start} - ${chapter.end}</p>
        </div>
        <i class="fas fa-arrow-left chapter-arrow"></i>
      </div>
    `;
  });

  html += `</div>`;
  hadithDisplay.innerHTML = html;
}

// ==================== تحميل باب معين ====================
function loadChapter(book, chapterKey) {
  const chapters = hadithChapters[book];
  const chapter = chapters[chapterKey];

  if (chapter) {
    displayHadith(book, chapter.start, chapter.end, chapter.name);
  }
}

// ==================== التنقل ====================
function loadNextPage() {
  const { book, rangeStart, rangeEnd } = hadithState;
  const step = rangeEnd - rangeStart + 1;
  displayHadith(book, rangeStart + step, rangeEnd + step, hadithState.chapter);
}

function loadPrevPage() {
  const { book, rangeStart, rangeEnd } = hadithState;
  const step = rangeEnd - rangeStart + 1;
  displayHadith(
    book,
    Math.max(1, rangeStart - step),
    rangeEnd - step,
    hadithState.chapter,
  );
}

function retryLoadHadith() {
  displayHadith(
    hadithState.book,
    hadithState.rangeStart,
    hadithState.rangeEnd,
    hadithState.chapter,
  );
}

// ==================== البحث ====================
function addSearchInterface() {
  const old = document.querySelector(".hadith-search-container");
  if (old) old.remove();

  const html = `
    <div class="hadith-search-container">
      <div class="search-box">
        <i class="fas fa-search search-icon"></i>
        <input type="text" id="hadithSearchInput" placeholder="ابحث عن حديث..." class="hadith-search-input" />
        <button id="clearHadithSearch" class="clear-search-btn" style="display:none;">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div id="hadithSearchResults" class="search-results" style="display:none;"></div>
    </div>
  `;

  if (hadithSelector) hadithSelector.insertAdjacentHTML("beforebegin", html);

  const si = document.getElementById("hadithSearchInput");
  const cb = document.getElementById("clearHadithSearch");
  const sr = document.getElementById("hadithSearchResults");

  if (si) {
    let timeout;
    si.addEventListener("input", () => {
      const q = si.value.trim();
      if (cb) cb.style.display = q ? "flex" : "none";
      clearTimeout(timeout);
      if (q.length >= 2) {
        timeout = setTimeout(() => searchHadith(q), 500);
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

async function searchHadith(query) {
  const sr = document.getElementById("hadithSearchResults");
  if (!sr) return;
  sr.style.display = "block";
  sr.innerHTML = `<div class="search-loading"><i class="fas fa-spinner fa-spin"></i><p>جاري البحث...</p></div>`;

  const results = [];

  for (const book of hadithBooks) {
    const hadiths = await loadHadithBook(book.id);
    if (hadiths) {
      hadiths.forEach((h, index) => {
        const text = h.text || h.arabic || h.hadith_arabic || "";
        if (text.includes(query)) {
          results.push({
            book: book.id,
            number: index + 1,
            text: text.substring(0, 100),
            bookName: book.name,
          });
        }
      });
    }
  }

  if (results.length > 0) {
    sr.innerHTML = results
      .slice(0, 20)
      .map(
        (r) => `
      <div class="search-item" onclick="loadHadithFromSearch('${r.book}', ${r.number})">
        <div class="search-item-number">${r.number}</div>
        <div class="search-item-content">
          <div class="search-item-title">${r.bookName} - حديث ${r.number}</div>
          <div class="search-item-subtitle">${r.text}...</div>
        </div>
        <i class="fas fa-arrow-left"></i>
      </div>
    `,
      )
      .join("");
  } else {
    sr.innerHTML = `<div class="search-no-results"><i class="fas fa-search"></i><p>لا توجد نتائج</p></div>`;
  }
}

function loadHadithFromSearch(book, number) {
  displayHadith(book, Math.max(1, number - 3), number + 3);
  document.getElementById("hadithSearchResults").style.display = "none";
  document.getElementById("hadithSearchInput").value = "";
}

// ==================== بناء واجهة الاختيار ====================
function buildHadithSelector() {
  if (!hadithSelector) return;

  hadithSelector.innerHTML = `
    <h3>📚 اختر كتاب الحديث</h3>
    <div class="selector-form">
      <div class="form-group">
        <label>اختر الكتاب:</label>
        <select id="hadithBookSelect" class="quran-select">
          ${hadithBooks.map((b) => `<option value="${b.id}" ${b.id === hadithState.book ? "selected" : ""}>${b.name}</option>`).join("")}
        </select>
      </div>
      <div class="form-group">
        <label>نطاق الأحاديث:</label>
        <div class="range-inputs">
          <input type="number" id="hadithStart" min="1" value="1" placeholder="من" />
          <span>إلى</span>
          <input type="number" id="hadithEnd" min="1" value="10" placeholder="إلى" />
        </div>
      </div>
      <button id="loadHadithBtn" class="load-quran-btn">
        <i class="fas fa-book-open"></i> عرض الأحاديث
      </button>
      <button id="showChaptersBtn" class="load-quran-btn" style="background:#ff9800;margin-top:0.5rem;">
        <i class="fas fa-list"></i> عرض الأبواب
      </button>
    </div>
  `;

  document.getElementById("loadHadithBtn").addEventListener("click", () => {
    const book = document.getElementById("hadithBookSelect").value;
    const start = parseInt(document.getElementById("hadithStart").value);
    const end = parseInt(document.getElementById("hadithEnd").value);
    if (start < 1 || start > end) {
      alert("نطاق غير صحيح");
      return;
    }
    displayHadith(book, start, end);
  });

  document.getElementById("showChaptersBtn").addEventListener("click", () => {
    hadithState.book = document.getElementById("hadithBookSelect").value;
    showChaptersList();
  });

  addSearchInterface();
}

document.addEventListener("DOMContentLoaded", () => {
  if (hadithSelector) buildHadithSelector();
});
