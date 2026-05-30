// ==================== نظام الاستماع إلى القرآن الكريم ====================
// أكاديمية اتكلم عربي
// يعمل مع MP3Quran API الرسمي

// ==================== حالة التطبيق ====================
let currentAudio = null;
let progressInterval = null;
let isLooping = false;
let currentSurah = null;
let currentSurahName = "";
let currentSurahAyahs = 0;
let currentReciter = null;
let currentServerUrl = null;
let animationFrame = null;
let visualizerBars = [];
let allRecitersList = [];
let currentRecitationFilter = "all";
let filteredRecitersForDropdown = [];

// ==================== قائمة السور ====================
const surahs = [
    { number: 1, name: "الفاتحة", ayahs: 7 },
    { number: 2, name: "البقرة", ayahs: 286 },
    { number: 3, name: "آل عمران", ayahs: 200 },
    { number: 4, name: "النساء", ayahs: 176 },
    { number: 5, name: "المائدة", ayahs: 120 },
    { number: 6, name: "الأنعام", ayahs: 165 },
    { number: 7, name: "الأعراف", ayahs: 206 },
    { number: 8, name: "الأنفال", ayahs: 75 },
    { number: 9, name: "التوبة", ayahs: 129 },
    { number: 10, name: "يونس", ayahs: 109 },
    { number: 11, name: "هود", ayahs: 123 },
    { number: 12, name: "يوسف", ayahs: 111 },
    { number: 13, name: "الرعد", ayahs: 43 },
    { number: 14, name: "إبراهيم", ayahs: 52 },
    { number: 15, name: "الحجر", ayahs: 99 },
    { number: 16, name: "النحل", ayahs: 128 },
    { number: 17, name: "الإسراء", ayahs: 111 },
    { number: 18, name: "الكهف", ayahs: 110 },
    { number: 19, name: "مريم", ayahs: 98 },
    { number: 20, name: "طه", ayahs: 135 },
    { number: 21, name: "الأنبياء", ayahs: 112 },
    { number: 22, name: "الحج", ayahs: 78 },
    { number: 23, name: "المؤمنون", ayahs: 118 },
    { number: 24, name: "النور", ayahs: 64 },
    { number: 25, name: "الفرقان", ayahs: 77 },
    { number: 26, name: "الشعراء", ayahs: 227 },
    { number: 27, name: "النمل", ayahs: 93 },
    { number: 28, name: "القصص", ayahs: 88 },
    { number: 29, name: "العنكبوت", ayahs: 69 },
    { number: 30, name: "الروم", ayahs: 60 },
    { number: 31, name: "لقمان", ayahs: 34 },
    { number: 32, name: "السجدة", ayahs: 30 },
    { number: 33, name: "الأحزاب", ayahs: 73 },
    { number: 34, name: "سبأ", ayahs: 54 },
    { number: 35, name: "فاطر", ayahs: 45 },
    { number: 36, name: "يس", ayahs: 83 },
    { number: 37, name: "الصافات", ayahs: 182 },
    { number: 38, name: "ص", ayahs: 88 },
    { number: 39, name: "الزمر", ayahs: 75 },
    { number: 40, name: "غافر", ayahs: 85 },
    { number: 41, name: "فصلت", ayahs: 54 },
    { number: 42, name: "الشورى", ayahs: 53 },
    { number: 43, name: "الزخرف", ayahs: 89 },
    { number: 44, name: "الدخان", ayahs: 59 },
    { number: 45, name: "الجاثية", ayahs: 37 },
    { number: 46, name: "الأحقاف", ayahs: 35 },
    { number: 47, name: "محمد", ayahs: 38 },
    { number: 48, name: "الفتح", ayahs: 29 },
    { number: 49, name: "الحجرات", ayahs: 18 },
    { number: 50, name: "ق", ayahs: 45 },
    { number: 51, name: "الذاريات", ayahs: 60 },
    { number: 52, name: "الطور", ayahs: 49 },
    { number: 53, name: "النجم", ayahs: 62 },
    { number: 54, name: "القمر", ayahs: 55 },
    { number: 55, name: "الرحمن", ayahs: 78 },
    { number: 56, name: "الواقعة", ayahs: 96 },
    { number: 57, name: "الحديد", ayahs: 29 },
    { number: 58, name: "المجادلة", ayahs: 22 },
    { number: 59, name: "الحشر", ayahs: 24 },
    { number: 60, name: "الممتحنة", ayahs: 13 },
    { number: 61, name: "الصف", ayahs: 14 },
    { number: 62, name: "الجمعة", ayahs: 11 },
    { number: 63, name: "المنافقون", ayahs: 11 },
    { number: 64, name: "التغابن", ayahs: 18 },
    { number: 65, name: "الطلاق", ayahs: 12 },
    { number: 66, name: "التحريم", ayahs: 12 },
    { number: 67, name: "الملك", ayahs: 30 },
    { number: 68, name: "القلم", ayahs: 52 },
    { number: 69, name: "الحاقة", ayahs: 52 },
    { number: 70, name: "المعارج", ayahs: 44 },
    { number: 71, name: "نوح", ayahs: 28 },
    { number: 72, name: "الجن", ayahs: 28 },
    { number: 73, name: "المزمل", ayahs: 20 },
    { number: 74, name: "المدثر", ayahs: 56 },
    { number: 75, name: "القيامة", ayahs: 40 },
    { number: 76, name: "الإنسان", ayahs: 31 },
    { number: 77, name: "المرسلات", ayahs: 50 },
    { number: 78, name: "النبأ", ayahs: 40 },
    { number: 79, name: "النازعات", ayahs: 46 },
    { number: 80, name: "عبس", ayahs: 42 },
    { number: 81, name: "التكوير", ayahs: 29 },
    { number: 82, name: "الإنفطار", ayahs: 19 },
    { number: 83, name: "المطففين", ayahs: 36 },
    { number: 84, name: "الإنشقاق", ayahs: 25 },
    { number: 85, name: "البروج", ayahs: 22 },
    { number: 86, name: "الطارق", ayahs: 17 },
    { number: 87, name: "الأعلى", ayahs: 19 },
    { number: 88, name: "الغاشية", ayahs: 26 },
    { number: 89, name: "الفجر", ayahs: 30 },
    { number: 90, name: "البلد", ayahs: 20 },
    { number: 91, name: "الشمس", ayahs: 15 },
    { number: 92, name: "الليل", ayahs: 21 },
    { number: 93, name: "الضحى", ayahs: 11 },
    { number: 94, name: "الشرح", ayahs: 8 },
    { number: 95, name: "التين", ayahs: 8 },
    { number: 96, name: "العلق", ayahs: 19 },
    { number: 97, name: "القدر", ayahs: 5 },
    { number: 98, name: "البينة", ayahs: 8 },
    { number: 99, name: "الزلزلة", ayahs: 8 },
    { number: 100, name: "العاديات", ayahs: 11 },
    { number: 101, name: "القارعة", ayahs: 11 },
    { number: 102, name: "التكاثر", ayahs: 8 },
    { number: 103, name: "العصر", ayahs: 3 },
    { number: 104, name: "الهمزة", ayahs: 9 },
    { number: 105, name: "الفيل", ayahs: 5 },
    { number: 106, name: "قريش", ayahs: 4 },
    { number: 107, name: "الماعون", ayahs: 7 },
    { number: 108, name: "الكوثر", ayahs: 3 },
    { number: 109, name: "الكافرون", ayahs: 6 },
    { number: 110, name: "النصر", ayahs: 3 },
    { number: 111, name: "المسد", ayahs: 5 },
    { number: 112, name: "الإخلاص", ayahs: 4 },
    { number: 113, name: "الفلق", ayahs: 5 },
    { number: 114, name: "الناس", ayahs: 6 }
];

// ==================== تحديث عداد السور ====================
function updateSurahCounter() {
    const currentNum = document.getElementById("currentSurahNumber");
    const totalNum = document.getElementById("totalSurahsCount");
    if (currentNum) currentNum.textContent = currentSurah || "0";
    if (totalNum) totalNum.textContent = surahs.length;
}

// ==================== تنسيق الوقت ====================
function formatTime(seconds) {
    if (isNaN(seconds)) return "00:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// ==================== تحديث عداد الآية ====================
function updateCurrentAyahDisplay() {
    const currentAyahEl = document.getElementById("currentAyahDisplay");
    if (!currentAyahEl) return;
    
    if (!currentAudio || !currentAudio.duration || !currentAudio.currentTime) {
        currentAyahEl.textContent = `الآية ? / ${currentSurahAyahs}`;
        return;
    }
    
    const progress = currentAudio.currentTime / currentAudio.duration;
    let currentAyah = Math.floor(progress * currentSurahAyahs) + 1;
    currentAyah = Math.min(currentAyah, currentSurahAyahs);
    currentAyahEl.textContent = `الآية ${currentAyah} / ${currentSurahAyahs}`;
}

// ==================== شريط التقدم ====================
function updateProgressBar() {
    if (!currentAudio || !currentAudio.duration || !currentAudio.currentTime) return;
    
    const progress = (currentAudio.currentTime / currentAudio.duration) * 100;
    const progressFill = document.getElementById("progressFill");
    const progressHandle = document.getElementById("progressHandle");
    
    if (progressFill) progressFill.style.width = `${progress}%`;
    if (progressHandle) progressHandle.style.left = `${progress}%`;
    
    const currentTimeEl = document.getElementById("currentTime");
    const durationTimeEl = document.getElementById("durationTime");
    if (currentTimeEl) currentTimeEl.textContent = formatTime(currentAudio.currentTime);
    if (durationTimeEl && currentAudio.duration) durationTimeEl.textContent = formatTime(currentAudio.duration);
    
    updateCurrentAyahDisplay();
}

function startProgressTracking() {
    if (progressInterval) clearInterval(progressInterval);
    progressInterval = setInterval(updateProgressBar, 200);
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
        if (!currentAudio || !currentAudio.duration) return;
        const rect = progressBar.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percent = Math.max(0, Math.min(1, x / rect.width));
        currentAudio.currentTime = percent * currentAudio.duration;
        updateProgressBar();
    });
    
    let isDragging = false;
    const handle = document.getElementById("progressHandle");
    if (handle) {
        handle.addEventListener("mousedown", (e) => {
            isDragging = true;
            e.preventDefault();
        });
        
        document.addEventListener("mousemove", (e) => {
            if (!isDragging || !currentAudio || !currentAudio.duration) return;
            const rect = progressBar.getBoundingClientRect();
            let x = e.clientX - rect.left;
            x = Math.max(0, Math.min(x, rect.width));
            currentAudio.currentTime = (x / rect.width) * currentAudio.duration;
            updateProgressBar();
        });
        
        document.addEventListener("mouseup", () => {
            isDragging = false;
        });
    }
}

// ==================== الموجات الصوتية ====================
function initAudioVisualizer() {
    const container = document.getElementById("audioVisualizer");
    if (!container) return;
    
    container.innerHTML = "";
    visualizerBars = [];
    
    for (let i = 0; i < 30; i++) {
        const bar = document.createElement("div");
        bar.className = "visualizer-bar";
        visualizerBars.push(bar);
        container.appendChild(bar);
    }
    
    function animate() {
        if (!visualizerBars.length) {
            animationFrame = requestAnimationFrame(animate);
            return;
        }
        
        const isPlaying = currentAudio && !currentAudio.paused && currentAudio.currentTime > 0;
        
        visualizerBars.forEach((bar, index) => {
            let height;
            if (isPlaying) {
                const time = Date.now() * 0.006;
                const factor = Math.sin(time + index * 0.2) * 0.5 + Math.sin(time * 1.7 + index * 0.15) * 0.3;
                height = 8 + (factor + 0.5) * 25;
                height = Math.max(6, Math.min(45, height));
            } else {
                const time = Date.now() * 0.003;
                height = 6 + Math.sin(time + index * 0.3) * 3;
            }
            bar.style.height = `${height}px`;
        });
        
        animationFrame = requestAnimationFrame(animate);
    }
    
    animate();
}

// ==================== تحديث حالة الأزرار ====================
function enableButtons(enabled) {
    const buttons = ["playBtn", "pauseBtn", "repeatBtn", "loopBtn", "nextSurahBtn"];
    buttons.forEach(btnId => {
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

// ==================== الانتقال للسورة التالية ====================
function nextSurah() {
    if (!currentSurah) return;
    
    const currentIndex = surahs.findIndex(s => s.number === currentSurah);
    const nextIndex = currentIndex + 1;
    
    if (nextIndex < surahs.length) {
        const nextSurahData = surahs[nextIndex];
        currentSurah = nextSurahData.number;
        currentSurahName = nextSurahData.name;
        currentSurahAyahs = nextSurahData.ayahs;
        
        updateSurahCounter();
        
        const surahNameEl = document.getElementById("selectedSurahName");
        if (surahNameEl) surahNameEl.textContent = `سورة ${nextSurahData.name}`;
        
        document.querySelectorAll(".surah-card").forEach(card => {
            card.classList.remove("active");
            if (parseInt(card.dataset.surah) === nextSurahData.number) {
                card.classList.add("active");
            }
        });
        
        playSurah();
        updateStatus(`⏩ انتقل إلى سورة ${nextSurahData.name}`, "success");
    } else {
        updateStatus("🏁 هذه آخر سورة في القرآن الكريم", "success");
    }
}

// ==================== تشغيل السورة ====================
function playSurah() {
    if (!currentSurah) {
        updateStatus("❌ يرجى اختيار سورة أولاً", "error");
        return;
    }
    
    if (!currentServerUrl) {
        updateStatus("❌ يرجى اختيار قارئ أولاً", "error");
        return;
    }
    
    const surahNum = currentSurah.toString().padStart(3, '0');
    const url = `${currentServerUrl}${surahNum}.mp3`;
    console.log("🎵 تحميل من:", url);
    
    updateStatus("⏳ جاري تحميل السورة...", "loading");
    
    if (currentAudio) {
        currentAudio.pause();
        currentAudio = null;
    }
    
    currentAudio = new Audio(url);
    
    currentAudio.addEventListener("canplay", () => {
        updateProgressBar();
        startProgressTracking();
        updateStatus(`✅ جاهز: سورة ${currentSurahName}`, "success");
        enableButtons(true);
    });
    
    currentAudio.addEventListener("timeupdate", updateProgressBar);
    
    // الانتقال التلقائي للسورة التالية عند انتهاء السورة
    currentAudio.addEventListener("ended", () => {
        if (isLooping) {
            currentAudio.currentTime = 0;
            currentAudio.play();
            updateStatus("🔄 إعادة تشغيل السورة (تكرار)", "success");
        } else {
            nextSurah();
        }
    });
    
    currentAudio.addEventListener("error", (e) => {
        console.error("خطأ في التحميل:", e);
        updateStatus("❌ خطأ في تحميل السورة", "error");
        enableButtons(false);
    });
    
    currentAudio.play().catch(error => {
        console.error("فشل التشغيل:", error);
        updateStatus("⚠️ لا يمكن تشغيل السورة. تأكد من الاتصال بالإنترنت", "error");
    });
    
    updateStatus(`🎧 تشغيل سورة ${currentSurahName}`, "playing");
    enableButtons(true);
}

// ==================== أزرار التحكم ====================
function togglePlay() {
    if (!currentAudio) {
        playSurah();
    } else if (currentAudio.paused) {
        currentAudio.play();
        startProgressTracking();
        updateStatus("🎧 استئناف التشغيل...", "playing");
    } else {
        currentAudio.pause();
        stopProgressTracking();
        updateStatus("⏸ تم الإيقاف مؤقتاً", "info");
    }
}

function repeatSurah() {
    if (currentAudio) {
        currentAudio.currentTime = 0;
        currentAudio.play();
        startProgressTracking();
        updateStatus("🔄 إعادة تشغيل السورة", "success");
    } else if (currentSurah) {
        playSurah();
    }
}

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

// ==================== عرض السور ====================
function displaySurahs() {
    const container = document.getElementById("surahsGrid");
    if (!container) return;
    
    container.innerHTML = surahs.map(surah => `
        <div class="surah-card" data-surah="${surah.number}" data-name="${surah.name}" data-ayahs="${surah.ayahs}">
            <span class="surah-number">${surah.number}</span>
            <span class="surah-name">${surah.name}</span>
            <span class="surah-ayahs">${surah.ayahs} آية</span>
        </div>
    `).join("");
    
    document.querySelectorAll(".surah-card").forEach(card => {
        card.addEventListener("click", () => {
            const surahNumber = parseInt(card.dataset.surah);
            const surahName = card.dataset.name;
            const ayahsCount = parseInt(card.dataset.ayahs);
            
            currentSurah = surahNumber;
            currentSurahName = surahName;
            currentSurahAyahs = ayahsCount;
            
            document.querySelectorAll(".surah-card").forEach(c => c.classList.remove("active"));
            card.classList.add("active");
            
            const surahNameEl = document.getElementById("selectedSurahName");
            if (surahNameEl) surahNameEl.textContent = `سورة ${surahName}`;
            
            updateSurahCounter();
            playSurah();
        });
    });
}

function initSurahSearch() {
    const searchInput = document.getElementById("surahSearchInput");
    if (!searchInput) return;
    
    searchInput.addEventListener("input", (e) => {
        const keyword = e.target.value.toLowerCase();
        document.querySelectorAll(".surah-card").forEach(card => {
            const name = card.querySelector(".surah-name")?.textContent.toLowerCase() || "";
            const num = card.querySelector(".surah-number")?.textContent || "";
            card.style.display = (name.includes(keyword) || num.includes(keyword)) ? "flex" : "none";
        });
    });
}

function bindAudioControls() {
    const playBtn = document.getElementById("playBtn");
    const pauseBtn = document.getElementById("pauseBtn");
    const repeatBtn = document.getElementById("repeatBtn");
    const loopBtn = document.getElementById("loopBtn");
    const nextSurahBtn = document.getElementById("nextSurahBtn");
    
    if (playBtn) playBtn.addEventListener("click", togglePlay);
    if (pauseBtn) pauseBtn.addEventListener("click", () => {
        if (currentAudio) {
            currentAudio.pause();
            stopProgressTracking();
            updateStatus("⏸ تم الإيقاف مؤقتاً", "info");
        }
    });
    if (repeatBtn) repeatBtn.addEventListener("click", repeatSurah);
    if (loopBtn) loopBtn.addEventListener("click", toggleLoop);
    if (nextSurahBtn) nextSurahBtn.addEventListener("click", nextSurah);
}

// ==================== إدارة Dropdown Menu ====================
function initReciterDropdown() {
    const dropdownSelected = document.getElementById("dropdownSelected");
    const dropdownMenu = document.getElementById("dropdownMenu");
    const dropdownIcon = document.getElementById("dropdownIcon");
    const reciterSearchInput = document.getElementById("reciterSearchInput");
    
    if (dropdownSelected) {
        // إزالة أي مستمعين سابقين
        const newDropdownSelected = dropdownSelected.cloneNode(true);
        dropdownSelected.parentNode.replaceChild(newDropdownSelected, dropdownSelected);
        
        newDropdownSelected.addEventListener("click", (e) => {
            e.preventDefault();
            e.stopPropagation();
            dropdownMenu.classList.toggle("show");
            if (dropdownIcon) dropdownIcon.classList.toggle("rotated");
        });
    }
    
    // إغلاق القائمة عند النقر خارجها
    document.addEventListener("click", (e) => {
        if (!dropdownSelected?.contains(e.target) && !dropdownMenu?.contains(e.target)) {
            dropdownMenu?.classList.remove("show");
            if (dropdownIcon) dropdownIcon?.classList.remove("rotated");
        }
    });
    
    if (reciterSearchInput) {
        reciterSearchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterDropdownReciters(searchTerm);
        });
    }
}

function filterDropdownReciters(searchTerm) {
    const filtered = allRecitersList.filter(reciter => {
        const name = reciter.name.toLowerCase();
        const style = reciter.moshaf?.[0]?.name?.toLowerCase() || "";
        return name.includes(searchTerm) || style.includes(searchTerm);
    });
    
    filteredRecitersForDropdown = filtered;
    updateDropdownItems(filtered);
}

function updateDropdownItems(recitersList) {
    const container = document.getElementById("dropdownItems");
    if (!container) return;
    
    if (recitersList.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; color: var(--text-secondary);">
                <i class="fas fa-search" style="font-size: 1.5rem; display: block; margin-bottom: 0.5rem;"></i>
                لا توجد نتائج
            </div>
        `;
        return;
    }
    
    container.innerHTML = recitersList.map(reciter => {
        const moshaf = reciter.moshaf?.[0];
        const isActive = currentReciter && currentReciter.id === reciter.id;
        
        return `
            <div class="dropdown-item ${isActive ? 'active' : ''}" data-reciter-id="${reciter.id}" data-server="${moshaf?.server || ''}">
                <div class="item-info">
                    <div class="item-name">${reciter.name}</div>
                    <div class="item-style">${moshaf?.name?.substring(0, 30) || 'مرتل'}</div>
                </div>
                <i class="fas fa-check-circle item-check"></i>
            </div>
        `;
    }).join("");
    
    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.addEventListener("click", () => {
            const reciterId = parseInt(item.dataset.reciterId);
            const selectedReciter = allRecitersList.find(r => r.id === reciterId);
            const serverUrl = item.dataset.server;
            
            if (selectedReciter) {
                selectReciterFromDropdown(selectedReciter, serverUrl);
                const dropdownMenu = document.getElementById("dropdownMenu");
                const dropdownIcon = document.getElementById("dropdownIcon");
                dropdownMenu?.classList.remove("show");
                dropdownIcon?.classList.remove("rotated");
            }
        });
    });
}

function selectReciterFromDropdown(reciter, serverUrl) {
    currentReciter = reciter;
    currentServerUrl = serverUrl;
    
    const selectedText = document.getElementById("selectedReciterText");
    const selectedStyle = document.getElementById("selectedReciterStyle");
    const reciterNameEl = document.getElementById("selectedReciterName");
    
    if (selectedText) selectedText.textContent = reciter.name;
    if (selectedStyle) selectedStyle.textContent = reciter.moshaf?.[0]?.name?.substring(0, 30) || 'مرتل';
    if (reciterNameEl) reciterNameEl.textContent = reciter.name;
    
    document.querySelectorAll(".reciter-card").forEach(card => {
        card.classList.remove("active");
        if (parseInt(card.dataset.reciterId) === reciter.id) {
            card.classList.add("active");
        }
    });
    
    document.querySelectorAll(".dropdown-item").forEach(item => {
        item.classList.remove("active");
        if (parseInt(item.dataset.reciterId) === reciter.id) {
            item.classList.add("active");
        }
    });
    
    if (currentSurah) playSurah();
}

function updateDropdownSelectedReciter() {
    if (currentReciter) {
        const selectedText = document.getElementById("selectedReciterText");
        const selectedStyle = document.getElementById("selectedReciterStyle");
        if (selectedText) selectedText.textContent = currentReciter.name;
        if (selectedStyle) selectedStyle.textContent = currentReciter.moshaf?.[0]?.name?.substring(0, 30) || 'مرتل';
    }
}

// ==================== جلب القراء من API ====================
async function fetchRecitersFromAPI() {
    const apiUrl = 'https://mp3quran.net/api/v3/reciters?language=ar';
    
    try {
        updateStatus("⏳ جاري تحميل قائمة القراء...", "loading");
        const response = await fetch(apiUrl);
        const data = await response.json();
        
        if (data && data.reciters && data.reciters.length > 0) {
            allRecitersList = data.reciters.filter(reciter => {
                const moshaf = reciter.moshaf?.[0];
                return moshaf && moshaf.surah_total === 114;
            });
            
            buildFilterOptions();
            applyRecitationFilter();
            
            filteredRecitersForDropdown = [...allRecitersList];
            initReciterDropdown();
            updateDropdownItems(allRecitersList);
            updateDropdownSelectedReciter();
            
            updateStatus(`✅ تم تحميل ${allRecitersList.length} قارئ`, "success");
            return allRecitersList;
        } else {
            throw new Error("لا توجد بيانات");
        }
    } catch (error) {
        console.error("خطأ في جلب القراء:", error);
        updateStatus("❌ خطأ في تحميل القراء. جرب تحديث الصفحة", "error");
        return [];
    }
}

// ==================== بناء خيارات الفلتر ====================
function buildFilterOptions() {
    const filterContainer = document.getElementById("recitationFilters");
    if (!filterContainer) return;
    
    const recitations = new Set();
    recitations.add("all");
    
    allRecitersList.forEach(reciter => {
        const moshafName = reciter.moshaf?.[0]?.name || "";
        if (moshafName.includes("حفص")) recitations.add("hafs");
        if (moshafName.includes("ورش")) recitations.add("warsh");
        if (moshafName.includes("قالون")) recitations.add("qalon");
        if (moshafName.includes("الدوري")) recitations.add("douri");
    });
    
    const filterLabels = {
        all: "الكل",
        hafs: "رواية حفص",
        warsh: "رواية ورش",
        qalon: "رواية قالون",
        douri: "رواية الدوري"
    };
    
    filterContainer.innerHTML = Array.from(recitations).map(key => `
        <button class="filter-btn ${key === currentRecitationFilter ? 'active' : ''}" data-filter="${key}">
            ${filterLabels[key] || key}
        </button>
    `).join("");
    
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            const filterValue = btn.dataset.filter;
            currentRecitationFilter = filterValue;
            
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            applyRecitationFilter();
        });
    });
}

function applyRecitationFilter() {
    let filteredReciters = [...allRecitersList];
    
    if (currentRecitationFilter !== "all") {
        const filterMap = { hafs: "حفص", warsh: "ورش", qalon: "قالون", douri: "الدوري" };
        const searchTerm = filterMap[currentRecitationFilter];
        if (searchTerm) {
            filteredReciters = filteredReciters.filter(reciter => {
                const moshafName = reciter.moshaf?.[0]?.name || "";
                return moshafName.includes(searchTerm);
            });
        }
    }
    
    displayRecitersFromData(filteredReciters);
    filteredRecitersForDropdown = filteredReciters;
    updateDropdownItems(filteredReciters);
}

function displayRecitersFromData(recitersList) {
    const container = document.getElementById("recitersGrid");
    if (!container) return;
    
    if (recitersList.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 2rem; grid-column: 1/-1; color: var(--text-secondary);">
                <i class="fas fa-search" style="font-size: 2rem; margin-bottom: 0.5rem; display: block;"></i>
                لا يوجد قراء في هذه الرواية
            </div>
        `;
        return;
    }
    
    container.innerHTML = recitersList.map(reciter => {
        const moshaf = reciter.moshaf?.[0];
        const isActive = currentReciter && currentReciter.id === reciter.id;
        
        return `
            <div class="reciter-card ${isActive ? 'active' : ''}" data-reciter-id="${reciter.id}" data-server="${moshaf?.server || ''}">
                <i class="fas fa-microphone-alt"></i>
                <div class="reciter-name" title="${reciter.name}">${reciter.name}</div>
                <div class="reciter-style">${moshaf?.name?.substring(0, 20) || 'مرتل'}</div>
            </div>
        `;
    }).join("");
    
    document.querySelectorAll(".reciter-card").forEach(card => {
        card.addEventListener("click", () => {
            const reciterId = parseInt(card.dataset.reciterId);
            const selectedReciter = recitersList.find(r => r.id === reciterId);
            const serverUrl = card.dataset.server;
            
            if (selectedReciter) {
                selectReciterFromDropdown(selectedReciter, serverUrl);
            }
        });
    });
}

// ==================== إضافة عداد الآية ====================
function addCurrentAyahDisplay() {
    const playerCard = document.querySelector(".player-card");
    if (playerCard && !document.getElementById("currentAyahDisplay")) {
        const displayDiv = document.createElement("div");
        displayDiv.className = "current-ayah-container";
        displayDiv.innerHTML = '<span id="currentAyahDisplay" class="current-ayah-text">الآية 0 / 0</span>';
        const progressContainer = document.querySelector(".progress-container");
        if (progressContainer) {
            progressContainer.insertAdjacentElement("beforebegin", displayDiv);
        }
    }
}

// ==================== تهيئة النظام ====================
async function initQuranAudioSystem() {
    console.log("🎧 بدء تشغيل نظام الاستماع إلى القرآن (MP3Quran API)");
    
    displaySurahs();
    initSurahSearch();
    bindAudioControls();
    initProgressBarDrag();
    addCurrentAyahDisplay();
    initAudioVisualizer();
    
    await fetchRecitersFromAPI();
    
    updateSurahCounter();
    enableButtons(false);
}

// تصدير الدوال
window.initQuranAudioSystem = initQuranAudioSystem;

// بدء النظام
if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initQuranAudioSystem);
} else {
    initQuranAudioSystem();
}