// ==================== نظام الاستماع إلى القرآن الكريم ====================
// أكاديمية اتكلم عربي

// ==================== بيانات القراء ====================
const reciters = [
  {
    id: "ar.alafasy",
    name: "مشاري راشد العفاسي",
    style: "مجود",
    icon: "fa-microphone-alt",
  },

  {
    id: "ar.mahermuaiqly",
    name: "ماهر المعيقلي",
    style: "مجود",
    icon: "fa-microphone-alt",
  },

  {
    id: "ar.minshawi",
    name: "محمد صديق المنشاوي",
    style: "مرتل",
    icon: "fa-microphone-alt",
  },
  {
    id: "ar.husary",
    name: "محمود خليل الحصري",
    style: "مرتل",
    icon: "fa-microphone-alt",
  },
];

// ==================== قائمة كاملة بالسور (114 سورة) ====================
const surahs = [
  { number: 1, name: "الفاتحة", ayahs: 7, startVerse: 1 },
  { number: 2, name: "البقرة", ayahs: 286, startVerse: 8 },
  { number: 3, name: "آل عمران", ayahs: 200, startVerse: 294 },
  { number: 4, name: "النساء", ayahs: 176, startVerse: 494 },
  { number: 5, name: "المائدة", ayahs: 120, startVerse: 670 },
  { number: 6, name: "الأنعام", ayahs: 165, startVerse: 790 },
  { number: 7, name: "الأعراف", ayahs: 206, startVerse: 955 },
  { number: 8, name: "الأنفال", ayahs: 75, startVerse: 1161 },
  { number: 9, name: "التوبة", ayahs: 129, startVerse: 1236 },
  { number: 10, name: "يونس", ayahs: 109, startVerse: 1365 },
  { number: 11, name: "هود", ayahs: 123, startVerse: 1474 },
  { number: 12, name: "يوسف", ayahs: 111, startVerse: 1597 },
  { number: 13, name: "الرعد", ayahs: 43, startVerse: 1708 },
  { number: 14, name: "إبراهيم", ayahs: 52, startVerse: 1751 },
  { number: 15, name: "الحجر", ayahs: 99, startVerse: 1803 },
  { number: 16, name: "النحل", ayahs: 128, startVerse: 1902 },
  { number: 17, name: "الإسراء", ayahs: 111, startVerse: 2030 },
  { number: 18, name: "الكهف", ayahs: 110, startVerse: 2141 },
  { number: 19, name: "مريم", ayahs: 98, startVerse: 2251 },
  { number: 20, name: "طه", ayahs: 135, startVerse: 2349 },
  { number: 21, name: "الأنبياء", ayahs: 112, startVerse: 2484 },
  { number: 22, name: "الحج", ayahs: 78, startVerse: 2596 },
  { number: 23, name: "المؤمنون", ayahs: 118, startVerse: 2674 },
  { number: 24, name: "النور", ayahs: 64, startVerse: 2792 },
  { number: 25, name: "الفرقان", ayahs: 77, startVerse: 2856 },
  { number: 26, name: "الشعراء", ayahs: 227, startVerse: 2933 },
  { number: 27, name: "النمل", ayahs: 93, startVerse: 3160 },
  { number: 28, name: "القصص", ayahs: 88, startVerse: 3253 },
  { number: 29, name: "العنكبوت", ayahs: 69, startVerse: 3341 },
  { number: 30, name: "الروم", ayahs: 60, startVerse: 3410 },
  { number: 31, name: "لقمان", ayahs: 34, startVerse: 3470 },
  { number: 32, name: "السجدة", ayahs: 30, startVerse: 3504 },
  { number: 33, name: "الأحزاب", ayahs: 73, startVerse: 3534 },
  { number: 34, name: "سبأ", ayahs: 54, startVerse: 3607 },
  { number: 35, name: "فاطر", ayahs: 45, startVerse: 3661 },
  { number: 36, name: "يس", ayahs: 83, startVerse: 3706 },
  { number: 37, name: "الصافات", ayahs: 182, startVerse: 3789 },
  { number: 38, name: "ص", ayahs: 88, startVerse: 3971 },
  { number: 39, name: "الزمر", ayahs: 75, startVerse: 4059 },
  { number: 40, name: "غافر", ayahs: 85, startVerse: 4134 },
  { number: 41, name: "فصلت", ayahs: 54, startVerse: 4219 },
  { number: 42, name: "الشورى", ayahs: 53, startVerse: 4273 },
  { number: 43, name: "الزخرف", ayahs: 89, startVerse: 4326 },
  { number: 44, name: "الدخان", ayahs: 59, startVerse: 4415 },
  { number: 45, name: "الجاثية", ayahs: 37, startVerse: 4474 },
  { number: 46, name: "الأحقاف", ayahs: 35, startVerse: 4511 },
  { number: 47, name: "محمد", ayahs: 38, startVerse: 4546 },
  { number: 48, name: "الفتح", ayahs: 29, startVerse: 4584 },
  { number: 49, name: "الحجرات", ayahs: 18, startVerse: 4613 },
  { number: 50, name: "ق", ayahs: 45, startVerse: 4631 },
  { number: 51, name: "الذاريات", ayahs: 60, startVerse: 4676 },
  { number: 52, name: "الطور", ayahs: 49, startVerse: 4736 },
  { number: 53, name: "النجم", ayahs: 62, startVerse: 4785 },
  { number: 54, name: "القمر", ayahs: 55, startVerse: 4847 },
  { number: 55, name: "الرحمن", ayahs: 78, startVerse: 4902 },
  { number: 56, name: "الواقعة", ayahs: 96, startVerse: 4980 },
  { number: 57, name: "الحديد", ayahs: 29, startVerse: 5076 },
  { number: 58, name: "المجادلة", ayahs: 22, startVerse: 5105 },
  { number: 59, name: "الحشر", ayahs: 24, startVerse: 5127 },
  { number: 60, name: "الممتحنة", ayahs: 13, startVerse: 5151 },
  { number: 61, name: "الصف", ayahs: 14, startVerse: 5164 },
  { number: 62, name: "الجمعة", ayahs: 11, startVerse: 5178 },
  { number: 63, name: "المنافقون", ayahs: 11, startVerse: 5189 },
  { number: 64, name: "التغابن", ayahs: 18, startVerse: 5200 },
  { number: 65, name: "الطلاق", ayahs: 12, startVerse: 5218 },
  { number: 66, name: "التحريم", ayahs: 12, startVerse: 5230 },
  { number: 67, name: "الملك", ayahs: 30, startVerse: 5242 },
  { number: 68, name: "القلم", ayahs: 52, startVerse: 5272 },
  { number: 69, name: "الحاقة", ayahs: 52, startVerse: 5324 },
  { number: 70, name: "المعارج", ayahs: 44, startVerse: 5376 },
  { number: 71, name: "نوح", ayahs: 28, startVerse: 5420 },
  { number: 72, name: "الجن", ayahs: 28, startVerse: 5448 },
  { number: 73, name: "المزمل", ayahs: 20, startVerse: 5476 },
  { number: 74, name: "المدثر", ayahs: 56, startVerse: 5496 },
  { number: 75, name: "القيامة", ayahs: 40, startVerse: 5552 },
  { number: 76, name: "الإنسان", ayahs: 31, startVerse: 5592 },
  { number: 77, name: "المرسلات", ayahs: 50, startVerse: 5623 },
  { number: 78, name: "النبأ", ayahs: 40, startVerse: 5673 },
  { number: 79, name: "النازعات", ayahs: 46, startVerse: 5713 },
  { number: 80, name: "عبس", ayahs: 42, startVerse: 5759 },
  { number: 81, name: "التكوير", ayahs: 29, startVerse: 5801 },
  { number: 82, name: "الإنفطار", ayahs: 19, startVerse: 5830 },
  { number: 83, name: "المطففين", ayahs: 36, startVerse: 5849 },
  { number: 84, name: "الإنشقاق", ayahs: 25, startVerse: 5885 },
  { number: 85, name: "البروج", ayahs: 22, startVerse: 5910 },
  { number: 86, name: "الطارق", ayahs: 17, startVerse: 5932 },
  { number: 87, name: "الأعلى", ayahs: 19, startVerse: 5949 },
  { number: 88, name: "الغاشية", ayahs: 26, startVerse: 5968 },
  { number: 89, name: "الفجر", ayahs: 30, startVerse: 5994 },
  { number: 90, name: "البلد", ayahs: 20, startVerse: 6024 },
  { number: 91, name: "الشمس", ayahs: 15, startVerse: 6044 },
  { number: 92, name: "الليل", ayahs: 21, startVerse: 6059 },
  { number: 93, name: "الضحى", ayahs: 11, startVerse: 6080 },
  { number: 94, name: "الشرح", ayahs: 8, startVerse: 6091 },
  { number: 95, name: "التين", ayahs: 8, startVerse: 6099 },
  { number: 96, name: "العلق", ayahs: 19, startVerse: 6107 },
  { number: 97, name: "القدر", ayahs: 5, startVerse: 6126 },
  { number: 98, name: "البينة", ayahs: 8, startVerse: 6131 },
  { number: 99, name: "الزلزلة", ayahs: 8, startVerse: 6139 },
  { number: 100, name: "العاديات", ayahs: 11, startVerse: 6147 },
  { number: 101, name: "القارعة", ayahs: 11, startVerse: 6158 },
  { number: 102, name: "التكاثر", ayahs: 8, startVerse: 6169 },
  { number: 103, name: "العصر", ayahs: 3, startVerse: 6177 },
  { number: 104, name: "الهمزة", ayahs: 9, startVerse: 6180 },
  { number: 105, name: "الفيل", ayahs: 5, startVerse: 6189 },
  { number: 106, name: "قريش", ayahs: 4, startVerse: 6194 },
  { number: 107, name: "الماعون", ayahs: 7, startVerse: 6198 },
  { number: 108, name: "الكوثر", ayahs: 3, startVerse: 6205 },
  { number: 109, name: "الكافرون", ayahs: 6, startVerse: 6208 },
  { number: 110, name: "النصر", ayahs: 3, startVerse: 6214 },
  { number: 111, name: "المسد", ayahs: 5, startVerse: 6217 },
  { number: 112, name: "الإخلاص", ayahs: 4, startVerse: 6222 },
  { number: 113, name: "الفلق", ayahs: 5, startVerse: 6226 },
  { number: 114, name: "الناس", ayahs: 6, startVerse: 6231 },
];

// ==================== حالة التطبيق ====================
let audioState = {
  currentReciter: "ar.alafasy",
  currentSurah: null,
  currentSurahName: "",
  currentAyahsCount: 0,
  currentPlaylist: [],
  currentTrackIndex: 0,
  isPlaying: false,
};

let currentAudio = null;
let progressInterval = null;
let isLooping = false; // هل التكرار مفعل؟

// ==================== حساب رقم الآية العالمي ====================
function getGlobalVerseNumber(surahNumber, ayahNumber) {
  const surah = surahs.find((s) => s.number === surahNumber);
  if (!surah) return ayahNumber;
  return surah.startVerse + ayahNumber - 1;
}

// ==================== بناء قائمة التشغيل ====================
function buildPlaylist(surahNumber, startAyah, endAyah) {
  const playlist = [];
  for (let i = startAyah; i <= endAyah; i++) {
    const globalVerse = getGlobalVerseNumber(surahNumber, i);
    const url = `https://cdn.islamic.network/quran/audio/128/${audioState.currentReciter}/${globalVerse}.mp3`;
    playlist.push({
      surah: surahNumber,
      ayah: i,
      globalVerse: globalVerse,
      url: url,
    });
  }
  return playlist;
}

// ==================== تحديث عداد السور ====================
function updateSurahCounter() {
  const currentNum = document.getElementById("currentSurahNumber");
  const totalNum = document.getElementById("totalSurahsCount");
  if (currentNum) currentNum.textContent = audioState.currentSurah || "0";
  if (totalNum) totalNum.textContent = surahs.length;
}

// ==================== الانتقال للسورة التالية ====================
function nextSurah() {
  if (!audioState.currentSurah) return;

  const currentIndex = surahs.findIndex(
    (s) => s.number === audioState.currentSurah,
  );
  const nextIndex = currentIndex + 1;

  if (nextIndex < surahs.length) {
    const nextSurahData = surahs[nextIndex];

    audioState.currentSurah = nextSurahData.number;
    audioState.currentSurahName = nextSurahData.name;
    audioState.currentAyahsCount = nextSurahData.ayahs;

    const surahNameEl = document.getElementById("selectedSurahName");
    if (surahNameEl) surahNameEl.textContent = `سورة ${nextSurahData.name}`;

    document.querySelectorAll(".surah-card").forEach((card) => {
      card.classList.remove("active");
      if (parseInt(card.dataset.surah) === nextSurahData.number) {
        card.classList.add("active");
      }
    });

    const startInput = document.getElementById("startAyah");
    const endInput = document.getElementById("endAyah");
    if (startInput) startInput.value = 1;
    if (endInput) {
      endInput.value = nextSurahData.ayahs;
      endInput.max = nextSurahData.ayahs;
    }
    if (startInput) startInput.max = nextSurahData.ayahs;

    updateSurahCounter();

    loadAudio();
    setTimeout(() => startSurah(), 500);

    updateStatus(`⏩ انتقل إلى سورة ${nextSurahData.name}`, "success");
  } else {
    updateStatus("🏁 هذه آخر سورة في القرآن الكريم", "success");
  }
}

// ==================== تفعيل/إلغاء التكرار ====================
function toggleLoop() {
  isLooping = !isLooping;
  const loopBtn = document.getElementById("loopBtn");
  if (loopBtn) {
    if (isLooping) {
      loopBtn.classList.add("active");
      loopBtn.innerHTML = '<i class="fas fa-infinity"></i> إلغاء التكرار';
      updateStatus("🔄 تم تفعيل تكرار السورة", "success");
    } else {
      loopBtn.classList.remove("active");
      loopBtn.innerHTML = '<i class="fas fa-infinity"></i> تكرار';
      updateStatus("⏹️ تم إلغاء تكرار السورة", "info");
    }
  }
}

// ==================== عرض القراء ====================
function displayReciters() {
  const container = document.getElementById("recitersGrid");
  if (!container) return;

  container.innerHTML = reciters
    .map(
      (reciter) => `
        <div class="reciter-card ${reciter.id === audioState.currentReciter ? "active" : ""}" data-reciter="${reciter.id}">
            <i class="fas ${reciter.icon}"></i>
            <div class="reciter-name">${reciter.name}</div>
            <div class="reciter-style">${reciter.style}</div>
        </div>
    `,
    )
    .join("");

  document.querySelectorAll(".reciter-card").forEach((card) => {
    card.addEventListener("click", () => {
      const reciterId = card.dataset.reciter;
      audioState.currentReciter = reciterId;

      document
        .querySelectorAll(".reciter-card")
        .forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      const reciter = reciters.find((r) => r.id === reciterId);
      const reciterNameEl = document.getElementById("selectedReciterName");
      if (reciterNameEl) reciterNameEl.textContent = reciter?.name || "";

      if (audioState.currentSurah) loadAudio();
    });
  });
}

// ==================== عرض السور ====================
function displaySurahs() {
  const container = document.getElementById("surahsGrid");
  if (!container) return;

  container.innerHTML = surahs
    .map(
      (surah) => `
        <div class="surah-card" data-surah="${surah.number}" data-name="${surah.name}" data-ayahs="${surah.ayahs}">
            <span class="surah-number">${surah.number}</span>
            <span class="surah-name">${surah.name}</span>
            <span class="surah-ayahs">${surah.ayahs} آية</span>
        </div>
    `,
    )
    .join("");

  document.querySelectorAll(".surah-card").forEach((card) => {
    card.addEventListener("click", () => {
      const surahNumber = parseInt(card.dataset.surah);
      const surahName = card.dataset.name;
      const ayahsCount = parseInt(card.dataset.ayahs);

      audioState.currentSurah = surahNumber;
      audioState.currentSurahName = surahName;
      audioState.currentAyahsCount = ayahsCount;

      document
        .querySelectorAll(".surah-card")
        .forEach((c) => c.classList.remove("active"));
      card.classList.add("active");

      const surahNameEl = document.getElementById("selectedSurahName");
      if (surahNameEl) surahNameEl.textContent = `سورة ${surahName}`;

      const startInput = document.getElementById("startAyah");
      const endInput = document.getElementById("endAyah");
      if (startInput) {
        startInput.value = 1;
        startInput.max = ayahsCount;
      }
      if (endInput) {
        endInput.value = ayahsCount;
        endInput.max = ayahsCount;
      }

      updateSurahCounter();
      loadAudio();
    });
  });
}

// ==================== البحث في السور ====================
function initSurahSearch() {
  const searchInput = document.getElementById("surahSearchInput");
  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const keyword = e.target.value.toLowerCase();
    document.querySelectorAll(".surah-card").forEach((card) => {
      const surahName =
        card.querySelector(".surah-name")?.textContent.toLowerCase() || "";
      const surahNumber =
        card.querySelector(".surah-number")?.textContent || "";
      card.style.display =
        surahName.includes(keyword) || surahNumber.includes(keyword)
          ? "flex"
          : "none";
    });
  });
}

// ==================== شريط التقدم ====================
function formatTime(seconds) {
  if (isNaN(seconds)) return "00:00";
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

function updateProgressBar() {
  if (!currentAudio || !currentAudio.duration || !currentAudio.currentTime)
    return;

  const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
  const progressFill = document.getElementById("progressFill");
  const progressHandle = document.getElementById("progressHandle");

  if (progressFill) {
    progressFill.style.width = `${progress}%`;
    if (!currentAudio.paused) {
      progressFill.classList.add("playing");
    } else {
      progressFill.classList.remove("playing");
    }
  }

  if (progressHandle) {
    progressHandle.style.right = `${100 - progress}%`;
  }

  const currentTimeEl = document.getElementById("currentTime");
  const durationTimeEl = document.getElementById("durationTime");
  if (currentTimeEl)
    currentTimeEl.textContent = formatTime(currentAudio.currentTime);
  if (durationTimeEl && currentAudio.duration)
    durationTimeEl.textContent = formatTime(currentAudio.duration);
}

function startProgressTracking() {
  if (progressInterval) clearInterval(progressInterval);
  progressInterval = setInterval(updateProgressBar, 500);
}

function stopProgressTracking() {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
}

function initProgressBarDrag() {
  const progressBar = document.getElementById("progressBar");
  if (!progressBar) return;

  progressBar.addEventListener("click", (e) => {
    if (!currentAudio) return;

    const rect = progressBar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const percent = x / width;
    const seekTime = percent * currentAudio.duration;

    currentAudio.currentTime = seekTime;
    updateProgressBar();
  });
}

// ==================== تشغيل الآية الحالية ====================
function playCurrentTrack() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  if (audioState.currentTrackIndex >= audioState.currentPlaylist.length) {
    if (isLooping) {
      // تكرار السورة الحالية
      audioState.currentTrackIndex = 0;
      playCurrentTrack();
      updateStatus("🔄 إعادة تشغيل السورة (تكرار)", "success");
    } else {
      // محاولة الانتقال للسورة التالية تلقائياً
      const currentIndex = surahs.findIndex(
        (s) => s.number === audioState.currentSurah,
      );
      const nextIndex = currentIndex + 1;

      if (nextIndex < surahs.length) {
        // يوجد سورة تالية - انتقل إليها تلقائياً
        const nextSurahData = surahs[nextIndex];

        // تحديث حالة السورة
        audioState.currentSurah = nextSurahData.number;
        audioState.currentSurahName = nextSurahData.name;
        audioState.currentAyahsCount = nextSurahData.ayahs;

        // تحديث الواجهة
        const surahNameEl = document.getElementById("selectedSurahName");
        if (surahNameEl) surahNameEl.textContent = `سورة ${nextSurahData.name}`;

        // تحديث البطاقة النشطة
        document.querySelectorAll(".surah-card").forEach((card) => {
          card.classList.remove("active");
          if (parseInt(card.dataset.surah) === nextSurahData.number) {
            card.classList.add("active");
          }
        });

        // تحديث نطاق الآيات
        const startInput = document.getElementById("startAyah");
        const endInput = document.getElementById("endAyah");
        if (startInput) startInput.value = 1;
        if (endInput) {
          endInput.value = nextSurahData.ayahs;
          endInput.max = nextSurahData.ayahs;
        }
        if (startInput) startInput.max = nextSurahData.ayahs;

        // تحديث العداد
        updateSurahCounter();

        // بناء قائمة التشغيل للسورة الجديدة
        audioState.currentPlaylist = buildPlaylist(
          audioState.currentSurah,
          1,
          audioState.currentAyahsCount,
        );
        audioState.currentTrackIndex = 0;

        updateStatus(
          `⏩ الانتقال التلقائي إلى سورة ${nextSurahData.name}`,
          "success",
        );
        playCurrentTrack();
      } else {
        // آخر سورة في المصحف
        updateStatus(
          "🏆 أكملت تلاوة القرآن كاملاً! بارك الله فيك 🎉",
          "success",
        );
        enableButtons(true);
        audioState.isPlaying = false;
        stopProgressTracking();

        const nextBtn = document.getElementById("nextSurahBtn");
        if (nextBtn) nextBtn.disabled = false;
      }
    }
    return;
  }

  const nextBtn = document.getElementById("nextSurahBtn");
  if (nextBtn && audioState.currentPlaylist.length > 0)
    nextBtn.disabled = false;

  const track = audioState.currentPlaylist[audioState.currentTrackIndex];
  updateStatus(`🎙️ جاري تحميل الآية ${track.ayah}...`, "loading");

  currentAudio = new Audio(track.url);

  currentAudio.addEventListener("loadedmetadata", () => {
    updateProgressBar();
    startProgressTracking();
  });

  currentAudio.addEventListener("timeupdate", updateProgressBar);

  currentAudio.addEventListener("ended", () => {
    audioState.currentTrackIndex++;
    playCurrentTrack();
  });

  currentAudio.addEventListener("error", (e) => {
    console.error("خطأ في تشغيل الآية:", track);
    updateStatus(`⚠️ خطأ في الآية ${track.ayah}، يتم تخطيها`, "error");
    audioState.currentTrackIndex++;
    playCurrentTrack();
  });

  const playPromise = currentAudio.play();

  if (playPromise !== undefined) {
    playPromise
      .then(() => {
        updateStatus(
          `🎧 تشغيل الآية ${track.ayah} من ${audioState.currentSurahName}`,
          "playing",
        );
        audioState.isPlaying = true;
      })
      .catch((error) => {
        console.warn("⚠️ فشل التشغيل:", error);
        updateStatus(
          `⚠️ اضغط على "تشغيل" لبدء سورة ${audioState.currentSurahName}`,
          "error",
        );
        audioState.isPlaying = false;
      });
  }

  updateCurrentAyahDisplay(track.ayah);
}

// ==================== عرض الآية الحالية ====================
function updateCurrentAyahDisplay(ayahNumber) {
  const currentAyahEl = document.getElementById("currentAyahDisplay");
  if (currentAyahEl) {
    currentAyahEl.textContent = `الآية ${ayahNumber}`;
  }
}

// ==================== تحميل السورة ====================
function loadAudio() {
  if (!audioState.currentSurah) {
    updateStatus("❌ يرجى اختيار سورة أولاً", "error");
    return;
  }

  updateSurahCounter();

  const loopBtn = document.getElementById("loopBtn");
  const nextBtn = document.getElementById("nextSurahBtn");
  if (loopBtn) loopBtn.disabled = false;
  if (nextBtn) nextBtn.disabled = false;

  const startAyah = parseInt(document.getElementById("startAyah")?.value || 1);
  let endAyah = parseInt(document.getElementById("endAyah")?.value);

  if (isNaN(endAyah) || endAyah > audioState.currentAyahsCount) {
    endAyah = audioState.currentAyahsCount;
    const endInput = document.getElementById("endAyah");
    if (endInput) endInput.value = endAyah;
  }

  if (startAyah > endAyah) {
    updateStatus("❌ رقم البداية يجب أن يكون أقل من رقم النهاية", "error");
    return;
  }

  audioState.currentPlaylist = buildPlaylist(
    audioState.currentSurah,
    startAyah,
    endAyah,
  );
  audioState.currentTrackIndex = 0;

  if (audioState.currentPlaylist.length === 0) {
    updateStatus("❌ لا توجد آيات في هذا النطاق", "error");
    return;
  }

  const reciter = reciters.find((r) => r.id === audioState.currentReciter);
  updateStatus(
    `✅ تم تجهيز ${audioState.currentPlaylist.length} آية. اضغط "تشغيل" للبدء.`,
    "success",
  );
  enableButtons(true);
}

// ==================== أزرار التحكم ====================
function startSurah() {
  if (audioState.currentPlaylist.length === 0) {
    loadAudio();
    return;
  }

  if (currentAudio && audioState.isPlaying) {
    currentAudio.play().catch((e) => console.log);
    updateStatus("🎧 استئناف التشغيل...", "playing");
    startProgressTracking();
  } else if (currentAudio && !audioState.isPlaying) {
    currentAudio.play().catch((e) => console.log);
    updateStatus("🎧 استئناف التشغيل...", "playing");
    audioState.isPlaying = true;
    startProgressTracking();
  } else {
    audioState.currentTrackIndex = 0;
    playCurrentTrack();
  }
}

function pauseSurah() {
  if (currentAudio) {
    currentAudio.pause();
    updateStatus("⏸ تم الإيقاف مؤقتاً", "info");
    audioState.isPlaying = false;
    stopProgressTracking();
    updateProgressBar();
  }
}

function repeatSurah() {
  if (audioState.currentPlaylist.length === 0) {
    loadAudio();
    return;
  }

  if (currentAudio) {
    currentAudio.pause();
    currentAudio = null;
  }

  audioState.currentTrackIndex = 0;
  playCurrentTrack();
  updateStatus("🔄 إعادة تشغيل السورة من البداية", "success");
}

function enableButtons(enabled) {
  const buttons = ["playBtn", "pauseBtn", "repeatBtn"];
  buttons.forEach((btnId) => {
    const btn = document.getElementById(btnId);
    if (btn) btn.disabled = !enabled;
  });
}

function updateStatus(message, type) {
  const statusDiv = document.getElementById("audioStatus");
  if (statusDiv) {
    statusDiv.textContent = message;
    statusDiv.className = `audio-status ${type}`;
  }
}

function bindAudioControls() {
  const playBtn = document.getElementById("playBtn");
  const pauseBtn = document.getElementById("pauseBtn");
  const repeatBtn = document.getElementById("repeatBtn");
  const loopBtn = document.getElementById("loopBtn");
  const nextSurahBtn = document.getElementById("nextSurahBtn");

  if (playBtn) playBtn.addEventListener("click", startSurah);
  if (pauseBtn) pauseBtn.addEventListener("click", pauseSurah);
  if (repeatBtn) repeatBtn.addEventListener("click", repeatSurah);
  if (loopBtn) loopBtn.addEventListener("click", toggleLoop);
  if (nextSurahBtn) nextSurahBtn.addEventListener("click", nextSurah);

  const startInput = document.getElementById("startAyah");
  const endInput = document.getElementById("endAyah");

  if (startInput && endInput) {
    startInput.addEventListener("change", () => {
      if (audioState.currentSurah) loadAudio();
    });
    endInput.addEventListener("change", () => {
      if (audioState.currentSurah) loadAudio();
    });
  }
}

function addCurrentAyahDisplay() {
  const playerCard = document.querySelector(".player-card");
  if (playerCard && !document.getElementById("currentAyahDisplay")) {
    const displayDiv = document.createElement("div");
    displayDiv.className = "current-ayah-container";
    displayDiv.innerHTML =
      '<span id="currentAyahDisplay" class="current-ayah-text"></span>';
    const audioWrapper = document.querySelector(".audio-player-wrapper");
    if (audioWrapper) {
      audioWrapper.insertAdjacentElement("beforebegin", displayDiv);
    }
  }
}

function initProgressBar() {
  initProgressBarDrag();
}

// ==================== تهيئة النظام ====================
function initQuranAudioSystem() {
  console.log("🎧 بدء تشغيل نظام الاستماع إلى القرآن");

  displayReciters();
  displaySurahs();
  initSurahSearch();
  bindAudioControls();
  addCurrentAyahDisplay();
  initProgressBar();

  const reciterNameEl = document.getElementById("selectedReciterName");
  if (reciterNameEl) reciterNameEl.textContent = "مشاري راشد العفاسي";
}

// تصدير الدوال
window.initQuranAudioSystem = initQuranAudioSystem;
window.startSurah = startSurah;
window.pauseSurah = pauseSurah;
window.repeatSurah = repeatSurah;
window.nextSurah = nextSurah;
window.toggleLoop = toggleLoop;

// بدء النظام
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initQuranAudioSystem);
} else {
  initQuranAudioSystem();
}
