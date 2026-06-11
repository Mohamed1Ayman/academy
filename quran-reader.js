// quran-reader.js
// ==================== نظام قارئ القرآن الكريم (معزول بالكامل) ====================

(function() {
  "use strict";
  
  // ==================== المتغيرات المعزولة ====================
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

  // ==================== دالة التحقق من الاتصال ====================
  function isOnline() {
    return navigator.onLine;
  }

  function showNoInternetMessage() {
    if (!quranDisplay) return;
    quranDisplay.innerHTML = `
      <div class="quran-error" style="text-align: center; padding: 3rem;">
        <i class="fas fa-wifi" style="font-size: 4rem; color: #f44336; margin-bottom: 1rem; display: block;"></i>
        <h3 style="color: #f44336; margin-bottom: 1rem;">⚠️ لا يوجد اتصال بالشبكة</h3>
        <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى</p>
        <button onclick="location.reload()" class="retry-btn" style="background: #2e7d32; color: white; border: none; padding: 0.8rem 2rem; border-radius: 50px; cursor: pointer;">
          <i class="fas fa-sync-alt"></i> إعادة المحاولة
        </button>
      </div>
    `;
  }

  // ==================== البحث عن السور ====================
  function addSearchInterface() {
    const old = document.querySelector(".quran-search-container");
    if (old) old.remove();
    const html = `<div class="quran-search-container"><div class="search-box"><i class="fas fa-search search-icon"></i><input type="text" id="quranSearchInput" placeholder="ابحث عن سورة..." class="quran-search-input" /><button id="clearSearchBtn" class="clear-search-btn" style="display:none;"><i class="fas fa-times"></i></button></div><div id="searchResults" class="search-results" style="display:none;"></div></div>`;
    if (surahSelector) surahSelector.insertAdjacentHTML("beforebegin", html);
  }

  // جعل selectSurahFromSearch متاحة عالمياً
  window.selectSurahFromSearch = function(num) {
    const s = surahList.find(x => x.number === num);
    if (s) {
      displayQuran(num, 1, s.ayahs);
    }
    const searchResults = document.getElementById("searchResults");
    const searchInput = document.getElementById("quranSearchInput");
    if (searchResults) searchResults.style.display = "none";
    if (searchInput) searchInput.value = "";
  };

  // إعادة ربط أحداث البحث
  function reinitSearch() {
    const searchInput = document.getElementById("quranSearchInput");
    const clearBtn = document.getElementById("clearSearchBtn");
    const searchResults = document.getElementById("searchResults");
    
    if (searchInput && !searchInput.hasAttribute("data-bound")) {
      searchInput.setAttribute("data-bound", "true");
      searchInput.addEventListener("input", function() {
        const q = this.value.trim();
        if (clearBtn) clearBtn.style.display = q ? "flex" : "none";
        if (q.length >= 1) {
          const results = surahList.filter(s => 
            s.name.includes(q) || 
            s.englishName.toLowerCase().includes(q.toLowerCase()) || 
            s.number.toString() === q
          );
          if (searchResults) {
            searchResults.style.display = "block";
            searchResults.innerHTML = results.length > 0 ? 
              results.map(s => `
                <div class="search-item" onclick="window.selectSurahFromSearch(${s.number})">
                  <div class="search-item-number">${s.number}</div>
                  <div class="search-item-content">
                    <div class="search-item-title">سورة ${s.name}</div>
                    <div class="search-item-subtitle">${s.englishName} - ${s.ayahs} آية</div>
                  </div>
                  <i class="fas fa-arrow-left"></i>
                </div>
              `).join("") : 
              `<div class="search-no-results"><i class="fas fa-search"></i><p>لا توجد نتائج</p></div>`;
          }
        } else {
          if (searchResults) searchResults.style.display = "none";
        }
      });
    }
    
    if (clearBtn && !clearBtn.hasAttribute("data-bound")) {
      clearBtn.setAttribute("data-bound", "true");
      clearBtn.addEventListener("click", function() {
        const input = document.getElementById("quranSearchInput");
        if (input) input.value = "";
        this.style.display = "none";
        if (searchResults) searchResults.style.display = "none";
      });
    }
  }

  // ==================== نظام التفسير ====================
  const tafsirList = [{ id: "arabic_moyassar", name: "التفسير الميسر", icon: "fa-book-open" }];
  let selectedTafsirId = "arabic_moyassar";
  let tafsirContainer = null;

  function addTafsirSection() {
    let container = document.getElementById("tafsirContainer");
    if (!container) {
      container = document.createElement("div");
      container.id = "tafsirContainer";
      container.className = "tafsir-container";
      container.style.display = "none";
      const quranDisplayEl = document.getElementById("quranDisplay");
      if (quranDisplayEl) quranDisplayEl.insertAdjacentElement("afterend", container);
    }
    tafsirContainer = container;
    return container;
  }

  async function showTafsir(surahNumber, ayahNumber) {
    const container = addTafsirSection();
    if (!container) return;
    
    if (!isOnline()) {
      container.style.display = "block";
      container.innerHTML = `<div class="tafsir-card"><div class="tafsir-header" style="background:#f39c12;"><div class="tafsir-title"><i class="fas fa-wifi"></i><h3>لا يوجد اتصال</h3></div><button class="tafsir-close-btn" onclick="closeTafsir()"><i class="fas fa-times"></i></button></div><p style="text-align:center;padding:2rem;">⚠️ لا يوجد اتصال بالإنترنت لتحميل التفسير</p></div>`;
      return;
    }
    
    container.style.display = "block";
    container.innerHTML = `<div class="tafsir-loading"><i class="fas fa-spinner fa-spin"></i><p>جاري تحميل التفسير...</p></div>`;
    container.scrollIntoView({ behavior: "smooth", block: "center" });

    try {
      const url = `https://quranenc.com/api/v1/translation/aya/${selectedTafsirId}/${surahNumber}/${ayahNumber}`;
      const response = await fetch(url);
      const data = await response.json();
      const surahInfo = surahList.find(s => s.number === surahNumber);
      const tafsirInfo = tafsirList.find(t => t.id === selectedTafsirId) || tafsirList[0];

      if (data.result?.translation) {
        let tafsirText = data.result.translation.replace(/<[^>]*>/g, "");
        container.innerHTML = `<div class="tafsir-card"><div class="tafsir-header"><div class="tafsir-title"><i class="fas ${tafsirInfo.icon}"></i><h3>${tafsirInfo.name}</h3></div><div class="tafsir-ayah-info"><span class="tafsir-badge">📖 ${surahInfo.name}</span><span class="tafsir-badge">🔢 آية ${ayahNumber}</span></div><button class="tafsir-close-btn" onclick="closeTafsir()"><i class="fas fa-times"></i></button></div><div class="tafsir-selector"><label><i class="fas fa-list"></i> اختر التفسير:</label><select id="tafsirSelect" onchange="changeTafsir(${surahNumber}, ${ayahNumber})">${tafsirList.map(t => `<option value="${t.id}" ${t.id === selectedTafsirId ? "selected" : ""}>${t.name}</option>`).join("")}</select></div><div class="tafsir-content">${tafsirText}</div></div>`;
      } else {
        container.innerHTML = `<div class="tafsir-card"><div class="tafsir-header" style="background:#f39c12;"><div class="tafsir-title"><i class="fas fa-info-circle"></i><h3>تفسير غير متاح</h3></div><button class="tafsir-close-btn" onclick="closeTafsir()"><i class="fas fa-times"></i></button></div><div class="tafsir-selector"><label><i class="fas fa-list"></i> جرب تفسيراً آخر:</label><select id="tafsirSelect" onchange="changeTafsir(${surahNumber}, ${ayahNumber})">${tafsirList.map(t => `<option value="${t.id}" ${t.id === selectedTafsirId ? "selected" : ""}>${t.name}</option>`).join("")}</select></div><p style="text-align:center;padding:2rem;">${data.error || "التفسير غير متاح"}</p></div>`;
      }
    } catch (error) {
      container.innerHTML = `<div class="tafsir-card"><div class="tafsir-header" style="background:#f39c12;"><div class="tafsir-title"><i class="fas fa-info-circle"></i><h3>خطأ</h3></div><button class="tafsir-close-btn" onclick="closeTafsir()"><i class="fas fa-times"></i></button></div><p style="text-align:center;padding:2rem;">حدث خطأ في الاتصال</p></div>`;
    }
  }

  function changeTafsir(surahNumber, ayahNumber) {
    const select = document.getElementById("tafsirSelect");
    if (select) { selectedTafsirId = select.value; showTafsir(surahNumber, ayahNumber); }
  }

  function closeTafsir() {
    const container = document.getElementById("tafsirContainer");
    if (container) { container.style.display = "none"; }
  }

  function addTafsirButtons(surahNumber) {
    const ayahCards = document.querySelectorAll(".ayah-card");
    ayahCards.forEach((card) => {
      if (card.querySelector(".tafsir-btn")) return;
      const ayahElement = card.querySelector(".ayah-number");
      if (!ayahElement) return;
      const ayahNumber = Number(ayahElement.textContent.trim().replace(/[^\d]/g, ""));
      if (!ayahNumber) return;
      const tafsirBtn = document.createElement("button");
      tafsirBtn.className = "tafsir-btn";
      tafsirBtn.innerHTML = '<i class="fas fa-book-open"></i> تفسير';
      tafsirBtn.onclick = (e) => { e.stopPropagation(); showTafsir(surahNumber, ayahNumber); };
      const wrapper = card.querySelector(".ayah-text-wrapper");
      if (wrapper) wrapper.appendChild(tafsirBtn);
    });
    addTafsirSection();
  }

  // ==================== نظام الاستماع إلى الآيات ====================
  const readerRecitersList = [
    { id: "ar.alafasy", name: "الشيخ مشاري العفاسي", style: "مرتل" },
    { id: "ar.abdurrahmaansudais", name: "الشيخ عبد الرحمن السديس", style: "مرتل" },
    { id: "ar.mahermuaiqly", name: "الشيخ ماهر المعيقلي", style: "مرتل" },
    { id: "ar.husary", name: "الشيخ محمود خليل الحصري", style: "مرتل" },
    { id: "ar.minshawi", name: "الشيخ محمد صديق المنشاوي", style: "مرتل" },
  ];

  let readerAudio = null;
  let readerPlayingAyah = null;
  let readerSelectedReciterId = "ar.alafasy";

  function loadReaderReciterPreference() {
    const saved = localStorage.getItem("readerSelectedReciterId");
    if (saved) readerSelectedReciterId = saved;
  }

  function stopReaderAudio() {
    if (readerAudio) {
      readerAudio.pause();
      readerAudio.currentTime = 0;
      readerAudio = null;
      if (readerPlayingAyah) {
        const btn = document.querySelector(`.listen-btn[data-ayah="${readerPlayingAyah}"]`);
        if (btn) {
          btn.innerHTML = '<i class="fas fa-play"></i> استمع';
          btn.classList.remove("playing");
          btn.disabled = false;
        }
        readerPlayingAyah = null;
      }
      const controls = document.getElementById("readerAudioControls");
      if (controls) controls.style.display = "none";
    }
  }

  async function getReaderAudioUrl(reciterId, surahNumber, ayahNumber) {
    const url = `https://api.alquran.cloud/v1/ayah/${surahNumber}:${ayahNumber}/${reciterId}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.code === 200 && data.data && data.data.audio) return data.data.audio;
      throw new Error("لم يتم العثور على الصوت");
    } catch (error) {
      return `https://cdn.islamic.network/quran/audio/128/${reciterId}/${surahNumber}_${ayahNumber}.mp3`;
    }
  }

  async function playReaderAyah(surahNumber, ayahNumber, buttonElement) {
    if (!isOnline()) {
      alert("⚠️ لا يوجد اتصال بالإنترنت لتشغيل الصوت");
      return;
    }
    
    stopReaderAudio();
    buttonElement.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    buttonElement.disabled = true;
    try {
      const audioUrl = await getReaderAudioUrl(readerSelectedReciterId, surahNumber, ayahNumber);
      readerAudio = new Audio(audioUrl);
      readerAudio.addEventListener("canplay", () => {
        buttonElement.innerHTML = '<i class="fas fa-stop"></i> إيقاف';
        buttonElement.disabled = false;
        buttonElement.classList.add("playing");
      });
      readerAudio.addEventListener("ended", () => {
        buttonElement.innerHTML = '<i class="fas fa-play"></i> استمع';
        buttonElement.classList.remove("playing");
        readerAudio = null;
        readerPlayingAyah = null;
        const controls = document.getElementById("readerAudioControls");
        if (controls) controls.style.display = "none";
      });
      readerAudio.addEventListener("error", () => {
        buttonElement.innerHTML = '<i class="fas fa-play"></i> استمع';
        buttonElement.disabled = false;
        buttonElement.classList.remove("playing");
        alert("عذراً، لا يمكن تشغيل هذه الآية");
      });
      await readerAudio.play();
      readerPlayingAyah = `${surahNumber}_${ayahNumber}`;
      const controls = document.getElementById("readerAudioControls");
      if (controls) controls.style.display = "flex";
    } catch (error) {
      buttonElement.innerHTML = '<i class="fas fa-play"></i> استمع';
      buttonElement.disabled = false;
    }
  }

  function toggleReaderListen(surahNumber, ayahNumber, buttonElement) {
    if (readerPlayingAyah === `${surahNumber}_${ayahNumber}` && readerAudio) {
      stopReaderAudio();
    } else {
      playReaderAyah(surahNumber, ayahNumber, buttonElement);
    }
  }

  function addListenButtons(surahNumber) {
    const ayahCards = document.querySelectorAll(".ayah-card");
    ayahCards.forEach((card) => {
      if (card.querySelector(".listen-btn")) return;
      const ayahElement = card.querySelector(".ayah-number");
      if (!ayahElement) return;
      const ayahNumber = Number(ayahElement.textContent.trim().replace(/[^\d]/g, ""));
      if (!ayahNumber || isNaN(ayahNumber)) return;
      const listenBtn = document.createElement("button");
      listenBtn.className = "listen-btn";
      listenBtn.innerHTML = '<i class="fas fa-play"></i> استمع';
      listenBtn.setAttribute("data-ayah", `${surahNumber}_${ayahNumber}`);
      listenBtn.onclick = (e) => { e.stopPropagation(); toggleReaderListen(surahNumber, ayahNumber, listenBtn); };
      const wrapper = card.querySelector(".ayah-text-wrapper");
      if (wrapper) wrapper.appendChild(listenBtn);
    });
    if (!document.querySelector(".reciter-selector-container") && document.querySelector(".quran-surah-header")) addReciterSelector();
  }

  function addReciterSelector() {
    const old = document.querySelector(".reciter-selector-container");
    if (old) old.remove();
    const container = document.createElement("div");
    container.className = "reciter-selector-container";
    container.innerHTML = `<div class="reciter-selector-header"><i class="fas fa-headphones"></i><span>اختر القارئ للاستماع</span></div><div class="reciter-selector-wrapper"><select id="readerReciterSelect" class="reciter-select">${readerRecitersList.map(r => `<option value="${r.id}" ${r.id === readerSelectedReciterId ? "selected" : ""}>🎙️ ${r.name} (${r.style})</option>`).join("")}</select><div class="audio-controls" id="readerAudioControls" style="display: none;"><button class="stop-audio-btn" onclick="stopReaderAudio()"><i class="fas fa-stop"></i> إيقاف</button></div></div>`;
    const header = document.querySelector(".quran-surah-header");
    if (header && header.parentNode) header.parentNode.insertBefore(container, header.nextSibling);
    const select = document.getElementById("readerReciterSelect");
    if (select) select.addEventListener("change", (e) => { readerSelectedReciterId = e.target.value; localStorage.setItem("readerSelectedReciterId", readerSelectedReciterId); });
  }

  function addReaderAudioStyles() {
    if (document.getElementById("readerAudioStyles")) return;
    const style = document.createElement("style");
    style.id = "readerAudioStyles";
    style.textContent = `.reciter-selector-container{background:linear-gradient(135deg,var(--card-bg),var(--bg-secondary));border-radius:20px;padding:0.8rem 1.2rem;margin:1rem 0;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:0.5rem;border:1px solid var(--border-color)}.reciter-selector-header{display:flex;align-items:center;gap:0.5rem;font-weight:bold;color:#2e7d32;font-size:0.9rem}.reciter-select{padding:0.4rem 0.8rem;border-radius:50px;border:1px solid #2e7d32;background:var(--bg-primary);color:var(--text-primary);font-size:0.8rem;cursor:pointer}.listen-btn{background:linear-gradient(135deg,#2196f3,#1976d2);color:white;border:none;padding:0.25rem 0.6rem;border-radius:50px;cursor:pointer;font-size:0.65rem;transition:all 0.3s;display:inline-flex;align-items:center;gap:0.2rem;margin-left:0.5rem}.listen-btn.playing{background:linear-gradient(135deg,#f44336,#d32f2f);animation:readerPulse 1s ease infinite}@keyframes readerPulse{0%,100%{box-shadow:0 0 0 0 rgba(244,67,54,0.4)}50%{box-shadow:0 0 0 3px rgba(244,67,54,0)}}.stop-audio-btn{background:#f44336;color:white;border:none;padding:0.3rem 0.8rem;border-radius:50px;cursor:pointer;font-size:0.8rem}@media (max-width:768px){.reciter-selector-container{flex-direction:column;align-items:stretch}.listen-btn{padding:0.2rem 0.5rem;font-size:0.6rem}}`;
    document.head.appendChild(style);
  }

 // ==================== عرض الآيات (نسخة مصححة - بدون مشكلة البسملة) ====================
async function displayQuran(surahNumber, startAyah, endAyah) {
  if (!quranDisplay) return;
  
  if (!isOnline()) {
    showNoInternetMessage();
    return;
  }
  
  quranDisplay.innerHTML = `<div class="quran-loading"><i class="fas fa-spinner fa-spin"></i><p>جاري تحميل الآيات...</p></div>`;

  try {
    // استخدام API Quran.com الموثوق
    const response = await fetch(`https://api.alquran.cloud/v1/surah/${surahNumber}/editions/quran-uthmani,en.sahih`);
    
    if (!response.ok) throw new Error("فشل في تحميل البيانات");
    
    const data = await response.json();
    
    if (!data.data || !data.data[0] || !data.data[0].ayahs) {
      throw new Error("البيانات غير صحيحة");
    }
    
    const arabicAyahs = data.data[0].ayahs;
    const englishAyahs = data.data[1].ayahs;
    
    const surahInfo = surahList.find((s) => s.number === surahNumber);
    
    // التحقق من صحة النطاق
    const maxAyah = surahInfo ? surahInfo.ayahs : arabicAyahs.length;
    const validStart = Math.max(1, startAyah);
    const validEnd = Math.min(maxAyah, endAyah);
    
    if (validStart > validEnd) {
      quranDisplay.innerHTML = `<div class="quran-error"><i class="fas fa-exclamation-triangle"></i><p>نطاق آيات غير صحيح</p></div>`;
      return;
    }

    let html = `<div class="quran-surah-header"><h2>سورة ${surahInfo.name}</h2><p>${surahInfo.englishName} - ${surahInfo.ayahs} آية</p>`;
    
    // ✅ إضافة البسملة فقط إذا كانت السورة غير التوبة وبداية العرض من الآية 1
    const showBasmala = (surahNumber !== 9 && validStart === 1);
    if (showBasmala) {
      html += `<p class="basmala">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>`;
    }
    html += `</div><div class="quran-ayahs">`;
    
    let count = 0;

    // عرض الآيات في النطاق المحدد
    for (let i = validStart - 1; i < validEnd; i++) {
      const arabicVerse = arabicAyahs[i];
      const englishVerse = englishAyahs[i];
      
      if (arabicVerse) {
        count++;
        let arabicText = arabicVerse.text;
        let translationText = englishVerse ? englishVerse.text : "";
        
        // ✅ تنظيف البسملة من أول آية (إزالة البسملة نهائياً من النص)
        // لأننا أضفناها بشكل منفصل في الهيدر
        if (i === 0) {
          // إزالة البسملة من بداية النص
          arabicText = arabicText.replace(/^بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ\s*/i, "");
          arabicText = arabicText.replace(/^بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ\s*/i, "");
          arabicText = arabicText.trim();
        }
        
        // ✅ إزالة البسملة من الترجمة أيضاً إذا كانت موجودة
        if (i === 0) {
          translationText = translationText.replace(/^In the name of Allah, the Most Gracious, the Most Merciful\s*/i, "");
          translationText = translationText.replace(/^In the name of God, the Gracious, the Merciful\s*/i, "");
          translationText = translationText.trim();
        }
        
        html += `
          <div class="ayah-card" id="ayah-${i + 1}">
            <div class="ayah-number">${i + 1}</div>
            <div class="ayah-text-wrapper">
              <div class="ayah-arabic">${arabicText || "..."}</div>
              <div class="ayah-english">${translationText || ""}</div>
            </div>
          </div>
        `;
      }
    }
    
    if (count === 0) {
      html += `<p style="text-align:center;padding:2rem;">لا توجد آيات في هذا النطاق</p>`;
    }
    
    html += `</div>`;
    quranDisplay.innerHTML = html;

    readerState = { surah: surahNumber, surahName: surahInfo.name, startAyah: validStart, endAyah: validEnd };

    setTimeout(() => {
      addTafsirButtons(surahNumber);
      addListenButtons(surahNumber);
    }, 100);
    
  } catch (error) {
    console.error("خطأ في تحميل الآيات:", error);
    if (!isOnline()) {
      showNoInternetMessage();
    } else {
      quranDisplay.innerHTML = `<div class="quran-error"><i class="fas fa-exclamation-triangle"></i><p>حدث خطأ أثناء تحميل الآيات: ${error.message}</p><button onclick="location.reload()" class="retry-btn">إعادة المحاولة</button></div>`;
    }
  }
}

  // ==================== بناء واجهة الاختيار (محسنة) ====================
  function buildQuranSelector() {
    if (!surahSelector) return;
    surahSelector.innerHTML = `<h3>اختر السورة والآيات</h3><div class="selector-form"><div class="form-group"><label>اختر السورة:</label><select id="surahSelect" class="quran-select"><option value="">-- اختر سورة --</option>${surahList.map(s => `<option value="${s.number}">${s.number}. ${s.name} (${s.ayahs} آية)</option>`).join("")}</select></div><div class="form-group" id="ayahRangeGroup" style="display:none;"><label>نطاق الآيات:</label><div class="range-inputs"><input type="number" id="rangeStart" min="1" value="1" placeholder="من" /><span>إلى</span><input type="number" id="rangeEnd" min="1" value="1" placeholder="إلى" /></div><small id="rangeInfo"></small></div><button id="loadQuranBtn" class="load-quran-btn"><i class="fas fa-book-open"></i> عرض الآيات</button></div>`;

    const ss = document.getElementById("surahSelect"), rs = document.getElementById("rangeStart"), re = document.getElementById("rangeEnd"), ag = document.getElementById("ayahRangeGroup"), ri = document.getElementById("rangeInfo"), lb = document.getElementById("loadQuranBtn");
    
    ss.addEventListener("change", () => {
      const n = parseInt(ss.value);
      if (n) {
        const s = surahList.find(x => x.number === n);
        ag.style.display = "block";
        re.max = s.ayahs;
        rs.max = s.ayahs;
        rs.value = 1;
        re.value = s.ayahs;
        ri.textContent = `السورة تحتوي على ${s.ayahs} آية`;
      } else { 
        ag.style.display = "none"; 
      }
    });
    
    lb.addEventListener("click", () => {
      const n = parseInt(ss.value);
      const s = parseInt(rs.value);
      const e = parseInt(re.value);
      
      if (!n) { 
        alert("اختر سورة"); 
        return; 
      }
      
      const maxAyah = surahList.find(x => x.number === n).ayahs;
      
      if (isNaN(s)) { 
        alert("أدخل رقم آية صحيح"); 
        return; 
      }
      if (isNaN(e)) { 
        alert("أدخل رقم آية صحيح"); 
        return; 
      }
      if (s < 1 || s > maxAyah) { 
        alert(`الآية من يجب أن تكون بين 1 و ${maxAyah}`); 
        return; 
      }
      if (e < 1 || e > maxAyah) { 
        alert(`الآية إلى يجب أن تكون بين 1 و ${maxAyah}`); 
        return; 
      }
      if (s > e) { 
        alert("رقم الآية (من) يجب أن يكون أقل من (إلى)"); 
        return; 
      }
      
      displayQuran(n, s, e);
    });
    
    addSearchInterface();
  }

  // ==================== تهيئة الصفحة ====================
  loadReaderReciterPreference();
  addReaderAudioStyles();

  document.addEventListener("DOMContentLoaded", () => {
    if (surahSelector) buildQuranSelector();
    setTimeout(reinitSearch, 500);
  });

  // مراقبة إضافة عنصر البحث
  const searchObserver = new MutationObserver(function() {
    if (document.getElementById("quranSearchInput") && !document.getElementById("quranSearchInput").hasAttribute("data-bound")) {
      reinitSearch();
    }
  });
  searchObserver.observe(document.body, { childList: true, subtree: true });

  // تصدير الدوال المهمة
  window.QuranReader = {
    displayQuran,
    buildQuranSelector,
    closeTafsir
  };

})();

// ==================== تصدير دالة closeTafsir للنطاق العام ====================
window.closeTafsir = function() {
  const container = document.getElementById("tafsirContainer");
  if (container) {
    container.style.display = "none";
  }
};

// أيضاً تأكد من أن دالة changeTafsir متاحة
window.changeTafsir = function(surahNumber, ayahNumber) {
  if (typeof selectedTafsirId !== 'undefined') {
    const select = document.getElementById("tafsirSelect");
    if (select) {
      selectedTafsirId = select.value;
      if (typeof showTafsir === 'function') {
        showTafsir(surahNumber, ayahNumber);
      }
    }
  }
};