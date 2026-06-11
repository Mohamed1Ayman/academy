// nawawi.js
// ==================== شرح الأربعين النووية - نظام متكامل مع أزرار ====================

let nawawiState = {
  currentHadithId: 1,
  searchQuery: "",
  filteredHadiths: [],
  isSearching: false
};

// ==================== دوال مساعدة ====================
function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ==================== تحديث العداد والقائمة المنسدلة ====================
function updateCounterAndSelect() {
  const currentSpan = document.getElementById("nawawiCurrentNumber");
  const totalSpan = document.getElementById("nawawiTotalCount");
  const selectElement = document.getElementById("nawawiSelect");
  
  const hadiths = nawawiState.isSearching ? nawawiState.filteredHadiths : window.NAWAWI_HADITHS;
  const total = hadiths.length;
  const currentIndex = hadiths.findIndex(h => h.id === nawawiState.currentHadithId);
  const currentNumber = currentIndex !== -1 ? currentIndex + 1 : 1;
  
  if (totalSpan) totalSpan.textContent = total;
  if (currentSpan) currentSpan.textContent = currentNumber;
  
  // تحديث القائمة المنسدلة
  if (selectElement && hadiths.length > 0) {
    selectElement.innerHTML = '<option value="">-- اختر الحديث --</option>' + 
      hadiths.map(h => 
        `<option value="${h.id}" ${h.id === nawawiState.currentHadithId ? 'selected' : ''}>
          الحديث ${h.id}: ${h.title.substring(0, 50)}${h.title.length > 50 ? '...' : ''}
        </option>`
      ).join('');
  }
}

// ==================== الحصول على الفهرس الحالي ====================
function getCurrentIndex() {
  const hadiths = nawawiState.isSearching ? nawawiState.filteredHadiths : window.NAWAWI_HADITHS;
  return hadiths.findIndex(h => h.id === nawawiState.currentHadithId);
}

// ==================== تحديث حالة الأزرار ====================
function updateButtonsState() {
  const prevBtn = document.getElementById("nawawiPrevBtn");
  const nextBtn = document.getElementById("nawawiNextBtn");
  const hadiths = nawawiState.isSearching ? nawawiState.filteredHadiths : window.NAWAWI_HADITHS;
  const currentIndex = getCurrentIndex();
  const total = hadiths.length;
  
  if (prevBtn) {
    prevBtn.disabled = currentIndex <= 0;
    prevBtn.style.opacity = currentIndex <= 0 ? "0.5" : "1";
    prevBtn.style.cursor = currentIndex <= 0 ? "not-allowed" : "pointer";
  }
  if (nextBtn) {
    nextBtn.disabled = currentIndex >= total - 1;
    nextBtn.style.opacity = currentIndex >= total - 1 ? "0.5" : "1";
    nextBtn.style.cursor = currentIndex >= total - 1 ? "not-allowed" : "pointer";
  }
}

// ==================== عرض الحديث الحالي ====================
function displayCurrentHadith() {
  const hadiths = nawawiState.isSearching ? nawawiState.filteredHadiths : window.NAWAWI_HADITHS;
  const hadith = hadiths.find(h => h.id === nawawiState.currentHadithId);
  const displayArea = document.getElementById("nawawiDisplayArea");
  
  if (!displayArea) return;
  
  if (!hadith || hadiths.length === 0) {
    displayArea.innerHTML = `
      <div class="nawawi-no-results">
        <i class="fas fa-search"></i>
        <h3>لا توجد نتائج</h3>
        <p>لم يتم العثور على أحاديث مطابقة لبحثك</p>
        <button class="nawawi-nav-btn nawawi-reset-btn" onclick="resetSearch()">
          <i class="fas fa-sync-alt"></i> عرض الكل
        </button>
      </div>
    `;
    updateCounterAndSelect();
    return;
  }
  
  let html = `
    <div class="nawawi-hadith-card">
      <div class="nawawi-hadith-header">
        <span class="nawawi-hadith-number">الحديث ${hadith.id}</span>
        <span class="nawawi-hadith-grade" style="background: ${hadith.gradeColor};">${hadith.grade}</span>
      </div>
      <div class="nawawi-hadith-content">
        <div class="nawawi-hadith-title">📖 ${escapeHtml(hadith.title)}</div>
        <div class="nawawi-hadith-text">${escapeHtml(hadith.text)}</div>
        <div class="nawawi-hadith-narrator">
          <i class="fas fa-user-alt"></i> الراوي: ${escapeHtml(hadith.narrator)}
        </div>
        
        <div class="nawawi-explanation-card">
          <div class="nawawi-explanation-header">
            <i class="fas fa-comment-dots"></i>
            <h3>📖 شرح الحديث</h3>
          </div>
          <div class="nawawi-explanation-text">${escapeHtml(hadith.explanation)}</div>
        </div>
  `;
  
  // عرض الفوائد
  if (hadith.benefits && hadith.benefits.length > 0) {
    html += `
      <div class="nawawi-benefits-card">
        <div class="nawawi-benefits-header">
          <i class="fas fa-lightbulb"></i>
          <h3>💡 فوائد الحديث</h3>
        </div>
        <ul class="nawawi-benefits-list">
          ${hadith.benefits.map(b => `<li>${escapeHtml(b)}</li>`).join('')}
        </ul>
      </div>
    `;
  }
  
  // عرض معاني الكلمات
  if (hadith.wordsMeanings && hadith.wordsMeanings.length > 0) {
    html += `
      <div class="nawawi-words-card">
        <div class="nawawi-words-header">
          <i class="fas fa-language"></i>
          <h3>🔤 معاني الكلمات</h3>
        </div>
        <div class="nawawi-words-grid">
          ${hadith.wordsMeanings.map(w => `
            <div class="nawawi-word-item">
              <div class="nawawi-word">📖 ${escapeHtml(w.word)}</div>
              <div class="nawawi-meaning">${escapeHtml(w.meaning)}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }
  
  html += `</div></div>`;
  displayArea.innerHTML = html;
  
  updateCounterAndSelect();
  updateButtonsState();
}

// ==================== الانتقال إلى حديث محدد ====================
function goToHadith(hadithId) {
  if (!hadithId) return;
  hadithId = parseInt(hadithId);
  const hadiths = nawawiState.isSearching ? nawawiState.filteredHadiths : window.NAWAWI_HADITHS;
  const exists = hadiths.some(h => h.id === hadithId);
  
  if (exists) {
    nawawiState.currentHadithId = hadithId;
    displayCurrentHadith();
  }
}

// ==================== الحديث التالي ====================
function nextHadith() {
  const hadiths = nawawiState.isSearching ? nawawiState.filteredHadiths : window.NAWAWI_HADITHS;
  const currentIndex = getCurrentIndex();
  
  if (currentIndex < hadiths.length - 1) {
    nawawiState.currentHadithId = hadiths[currentIndex + 1].id;
    displayCurrentHadith();
  }
}

// ==================== الحديث السابق ====================
function previousHadith() {
  const hadiths = nawawiState.isSearching ? nawawiState.filteredHadiths : window.NAWAWI_HADITHS;
  const currentIndex = getCurrentIndex();
  
  if (currentIndex > 0) {
    nawawiState.currentHadithId = hadiths[currentIndex - 1].id;
    displayCurrentHadith();
  }
}

// ==================== البحث في الأحاديث ====================
function searchHadiths() {
  const searchInput = document.getElementById("nawawiSearchInput");
  const query = searchInput?.value.trim().toLowerCase() || "";
  
  if (!query) {
    resetSearch();
    return;
  }
  
  const filtered = window.NAWAWI_HADITHS.filter(h => 
    h.title.toLowerCase().includes(query) ||
    h.text.toLowerCase().includes(query) ||
    h.explanation.toLowerCase().includes(query) ||
    h.narrator.toLowerCase().includes(query)
  );
  
  if (filtered.length === 0) {
    nawawiState.isSearching = true;
    nawawiState.filteredHadiths = [];
    nawawiState.currentHadithId = null;
    displayCurrentHadith();
    updateCounterAndSelect();
    return;
  }
  
  nawawiState.isSearching = true;
  nawawiState.filteredHadiths = filtered;
  nawawiState.currentHadithId = filtered[0].id;
  
  displayCurrentHadith();
  updateButtonsState();
}

// ==================== إعادة تعيين البحث ====================
function resetSearch() {
  const searchInput = document.getElementById("nawawiSearchInput");
  if (searchInput) searchInput.value = "";
  
  nawawiState.isSearching = false;
  nawawiState.filteredHadiths = [];
  nawawiState.currentHadithId = 1;
  
  displayCurrentHadith();
}

// ==================== إنشاء واجهة التحكم ====================
function buildNawawiInterface() {
  const container = document.getElementById("nawawiContainer");
  if (!container) {
    console.error("❌ عنصر nawawiContainer غير موجود");
    return;
  }
  
  // تنظيف المحتوى السابق
  container.innerHTML = "";
  
  // إنشاء واجهة التحكم
  const controlsDiv = document.createElement("div");
  controlsDiv.className = "nawawi-controls";
  controlsDiv.innerHTML = `
    <div class="nawawi-control-row">
      <div class="nawawi-search-box">
        <i class="fas fa-search"></i>
        <input type="text" id="nawawiSearchInput" class="nawawi-search-input" placeholder="ابحث في الأحاديث... (عنوان، نص، شرح، راوي)" />
      </div>
      <select id="nawawiSelect" class="nawawi-hadith-select">
        <option value="">-- اختر الحديث --</option>
      </select>
    </div>
    
    <div class="nawawi-nav-buttons">
      <button id="nawawiPrevBtn" class="nawawi-nav-btn">
        <i class="fas fa-arrow-right"></i> السابق
      </button>
      <button id="nawawiResetBtn" class="nawawi-nav-btn nawawi-reset-btn">
        <i class="fas fa-sync-alt"></i> عرض الكل
      </button>
      <button id="nawawiNextBtn" class="nawawi-nav-btn">
        التالي <i class="fas fa-arrow-left"></i>
      </button>
    </div>
    
    <div class="nawawi-counter">
      <i class="fas fa-list"></i>
      الحديث <span id="nawawiCurrentNumber">1</span> من <span id="nawawiTotalCount">${window.NAWAWI_TOTAL || 0}</span>
    </div>
  `;
  
  container.appendChild(controlsDiv);
  
  // إضافة حاوية عرض الحديث
  const hadithDisplayDiv = document.createElement("div");
  hadithDisplayDiv.id = "nawawiDisplayArea";
  hadithDisplayDiv.className = "nawawi-display-area";
  container.appendChild(hadithDisplayDiv);
  
  // ربط الأحداث (باستخدام setTimeout للتأكد من وجود العناصر)
  setTimeout(() => {
    const searchInput = document.getElementById("nawawiSearchInput");
    const hadithSelect = document.getElementById("nawawiSelect");
    const prevBtn = document.getElementById("nawawiPrevBtn");
    const nextBtn = document.getElementById("nawawiNextBtn");
    const resetBtn = document.getElementById("nawawiResetBtn");
    
    if (searchInput) searchInput.addEventListener("input", searchHadiths);
    if (hadithSelect) hadithSelect.addEventListener("change", (e) => {
      if (e.target.value) goToHadith(parseInt(e.target.value));
    });
    if (prevBtn) prevBtn.addEventListener("click", previousHadith);
    if (nextBtn) nextBtn.addEventListener("click", nextHadith);
    if (resetBtn) resetBtn.addEventListener("click", resetSearch);
    
    console.log("✅ تم ربط الأحداث بنجاح");
  }, 100);
  
  // عرض أول حديث
  displayCurrentHadith();
}

// ==================== تهيئة القسم ====================
document.addEventListener("DOMContentLoaded", () => {
  console.log("🚀 بدء تهيئة قسم الأربعين النووية");
  
  if (window.NAWAWI_HADITHS && window.NAWAWI_HADITHS.length > 0) {
    console.log(`✅ تم تحميل ${window.NAWAWI_HADITHS.length} حديث`);
    buildNawawiInterface();
  } else {
    console.error("❌ البيانات غير متاحة");
    const container = document.getElementById("nawawiContainer");
    if (container) {
      container.innerHTML = `
        <div class="nawawi-loading">
          <div class="nawawi-loading-spinner"></div>
          <p>جاري تحميل البيانات...</p>
        </div>
      `;
    }
  }
});

// تصدير الدوال للاستخدام العام
window.goToHadith = goToHadith;
window.nextHadith = nextHadith;
window.previousHadith = previousHadith;
window.searchHadiths = searchHadiths;
window.resetSearch = resetSearch;