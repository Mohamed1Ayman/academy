// ==================== نظام الأذكار المتطور ====================
// أكاديمية اتكلم عربي

// ==================== حالة التطبيق ====================
let azkarState = {
  currentCategory: "morning",
  currentAzkar: [],
  displayedCount: 3,
  counters: {}
};

// مفتاح localStorage لحفظ التقدم
const STORAGE_KEY = "azkar_counters";

// ==================== تحميل العدادات من localStorage ====================
function loadCountersFromStorage() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      azkarState.counters = parsed;
    } catch(e) {
      console.error("خطأ في تحميل العدادات:", e);
    }
  }
}

// ==================== حفظ العدادات في localStorage ====================
function saveCountersToStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(azkarState.counters));
}

// ==================== عرض فئات الأذكار ====================
function displayAzkarCategories() {
  const container = document.getElementById("azkarCategoriesList");
  if (!container) {
    console.error("عنصر azkarCategoriesList غير موجود");
    return;
  }
  
  if (typeof azkarData === 'undefined') {
    container.innerHTML = '<div style="color: red;">❌ بيانات الأذكار غير محملة</div>';
    return;
  }
  
  container.innerHTML = "";
  const categories = Object.keys(azkarData);
  
  categories.forEach((key, index) => {
    const category = azkarData[key];
    const categoryCard = document.createElement("div");
    categoryCard.className = `category-card ${index === 0 ? 'active' : ''}`;
    categoryCard.setAttribute("data-category", key);
    categoryCard.innerHTML = `
      <i class="fas ${category.icon || 'fa-heart'}" style="color: ${index === 0 ? 'white' : category.color || '#2e7d32'};"></i>
      <span>${category.name || key}</span>
    `;
    
    categoryCard.addEventListener("click", () => {
      // تحديث الفئة النشطة
      document.querySelectorAll("#azkarCategoriesList .category-card").forEach(card => {
        card.classList.remove("active");
        const icon = card.querySelector("i");
        if (icon) icon.style.color = "";
      });
      categoryCard.classList.add("active");
      const icon = categoryCard.querySelector("i");
      if (icon) icon.style.color = "white";
      
      // تحميل الأذكار الجديدة
      azkarState.currentCategory = key;
      azkarState.displayedCount = 3;
      loadCategoryAzkar(key);
    });
    
    container.appendChild(categoryCard);
  });
}

// ==================== تحميل أذكار فئة معينة ====================
function loadCategoryAzkar(categoryKey) {
  if (typeof azkarData === 'undefined') {
    showError("لم يتم تحميل بيانات الأذكار");
    return;
  }
  
  const categoryData = azkarData[categoryKey];
  if (!categoryData) {
    showError(`لا توجد بيانات للفئة: ${categoryKey}`);
    return;
  }
  
  // تحويل البيانات من الهيكل الجديد
  azkarState.currentAzkar = categoryData.azkar.map((item, index) => ({
    id: item.id || index + 1,
    text: item.text,
    translation: item.translation || "",
    count: item.count || 1,
    reference: item.reference || "",
    benefit: item.benefit || ""
  }));
  
  console.log(`✅ تم تحميل ${azkarState.currentAzkar.length} ذكر من ${categoryData.name}`);
  displayAzkarCards();
}

// ==================== عرض كروت الأذكار ====================
function displayAzkarCards() {
  const container = document.getElementById("azkarCardsGrid");
  const loadMoreWrapper = document.getElementById("loadMoreWrapper");
  
  if (!container) {
    console.error("عنصر azkarCardsGrid غير موجود");
    return;
  }
  
  const { currentAzkar, displayedCount } = azkarState;
  const visibleAzkar = currentAzkar.slice(0, displayedCount);
  
  if (!currentAzkar || currentAzkar.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; grid-column: 1/-1;">
        <i class="fas fa-dove" style="font-size: 3rem; color: #2e7d32;"></i>
        <p>لا توجد أذكار في هذه الفئة حالياً</p>
      </div>
    `;
    if (loadMoreWrapper) loadMoreWrapper.style.display = "none";
    return;
  }
  
  container.innerHTML = visibleAzkar.map((zekr, index) => {
    const counterKey = `${azkarState.currentCategory}_${zekr.id}`;
    const currentCount = azkarState.counters[counterKey] || 0;
    const isCompleted = currentCount >= zekr.count;
    
    // تنسيق النص مع الحفاظ على الأسطر
    const formattedText = (zekr.text || "").replace(/\n/g, "<br>");
    
    return `
      <div class="zekr-card" style="animation-delay: ${index * 0.1}s">
        <div class="zekr-card-header">
          <div class="zekr-number">${zekr.id}</div>
          <div class="zekr-category-badge">
            <i class="fas ${getCategoryIcon(azkarState.currentCategory)}"></i>
            ${getCategoryName(azkarState.currentCategory)}
          </div>
        </div>
        <div class="zekr-content">
          <div class="zekr-text">${formattedText}</div>
          ${zekr.translation ? `
            <div class="zekr-translation">
              <i class="fas fa-language"></i> ${zekr.translation}
            </div>
          ` : ''}
          <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 0.5rem 0;">
            <div class="zekr-count">
              <i class="fas fa-repeat"></i>
              عدد مرات الذكر: ${zekr.count}
            </div>
            ${zekr.reference ? `<div class="azkar-reference"><i class="fas fa-book"></i> ${zekr.reference}</div>` : ''}
          </div>
          ${zekr.benefit ? `
            <div class="azkar-benefit">
              <i class="fas fa-lightbulb"></i> ${zekr.benefit}
            </div>
          ` : ''}
          <div class="zekr-actions">
            <button class="btn-count" onclick="incrementCounter('${counterKey}', ${zekr.count})">
              <i class="fas fa-check-circle"></i>
              تم
            </button>
            <div class="counter-display">
              ${currentCount} / ${zekr.count}
            </div>
          </div>
          ${isCompleted ? '<div style="color: #4caf50; text-align: center; margin-top: 0.5rem; font-size: 0.85rem;"><i class="fas fa-check-circle"></i> ✓ مكتمل</div>' : ''}
        </div>
      </div>
    `;
  }).join("");
  
  // إظهار أو إخفاء زر المزيد
  if (loadMoreWrapper) {
    if (displayedCount < currentAzkar.length) {
      loadMoreWrapper.style.display = "block";
    } else {
      loadMoreWrapper.style.display = "none";
    }
  }
}

// ==================== دوال مساعدة ====================
function getCategoryIcon(categoryKey) {
  if (typeof azkarData !== 'undefined' && azkarData[categoryKey]) {
    return azkarData[categoryKey].icon || "fa-heart";
  }
  return "fa-heart";
}

function getCategoryName(categoryKey) {
  if (typeof azkarData !== 'undefined' && azkarData[categoryKey]) {
    return azkarData[categoryKey].name || categoryKey;
  }
  return categoryKey;
}

// ==================== عرض رسالة خطأ ====================
function showError(message) {
  const container = document.getElementById("azkarCardsGrid");
  if (container) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem; grid-column: 1/-1; background: #ffebee; border-radius: 20px;">
        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; color: #f44336;"></i>
        <p style="color: #c62828;">❌ ${message}</p>
        <button onclick="location.reload()" style="margin-top: 1rem; padding: 0.5rem 1.5rem; background: #2e7d32; color: white; border: none; border-radius: 25px; cursor: pointer;">
          <i class="fas fa-sync-alt"></i> إعادة تحميل
        </button>
      </div>
    `;
  }
}

// ==================== زيادة العداد ====================
function incrementCounter(counterKey, maxCount) {
  const current = azkarState.counters[counterKey] || 0;
  
  if (current < maxCount) {
    azkarState.counters[counterKey] = current + 1;
    saveCountersToStorage();
    displayAzkarCards();
    
    // تأثير عند الإكمال
    if (current + 1 === maxCount) {
      const cards = document.querySelectorAll(".zekr-card");
      const lastCard = cards[cards.length - 1];
      if (lastCard) {
        lastCard.style.transform = "scale(1.02)";
        setTimeout(() => {
          lastCard.style.transform = "";
        }, 300);
      }
    }
  }
}

// ==================== تحميل المزيد من الأذكار ====================
function loadMoreAzkar() {
  const btn = document.getElementById("loadMoreAzkarBtn");
  const spinner = btn?.querySelector(".fa-spinner");
  
  if (spinner) spinner.style.display = "inline-block";
  
  setTimeout(() => {
    azkarState.displayedCount += 3;
    displayAzkarCards();
    if (spinner) spinner.style.display = "none";
  }, 300);
}

// ==================== إعادة تعيين العدادات ====================
function resetAllCounters() {
  if (confirm("هل تريد إعادة تعيين جميع العدادات؟ سيتم فقدان التقدم الحالي.")) {
    azkarState.counters = {};
    saveCountersToStorage();
    displayAzkarCards();
    alert("✅ تم إعادة تعيين جميع العدادات");
  }
}

// ==================== تشغيل النظام ====================
function initAzkarSystem() {
  console.log("🔁 بدء تشغيل نظام الأذكار...");
  
  // إخفاء التحميل والخطأ
  const loadingDiv = document.getElementById("azkarLoading");
  const errorDiv = document.getElementById("azkarError");
  if (loadingDiv) loadingDiv.style.display = "none";
  if (errorDiv) errorDiv.style.display = "none";
  
  // التحقق من وجود البيانات
  if (typeof azkarData === 'undefined') {
    console.error("❌ azkarData غير موجود!");
    showError("لم يتم تحميل بيانات الأذكار. تأكد من وجود ملف azkar-data.js");
    return;
  }
  
  console.log("✅ تم تحميل azkarData بنجاح");
  console.log("📋 الفئات المتاحة:", Object.keys(azkarData));
  
  loadCountersFromStorage();
  displayAzkarCategories();
  
  // تحميل أول فئة بشكل افتراضي
  const firstCategory = Object.keys(azkarData)[0];
  if (firstCategory) {
    azkarState.currentCategory = firstCategory;
    loadCategoryAzkar(firstCategory);
  }
  
  // ربط زر المزيد
  const loadMoreBtn = document.getElementById("loadMoreAzkarBtn");
  if (loadMoreBtn) {
    const newBtn = loadMoreBtn.cloneNode(true);
    loadMoreBtn.parentNode.replaceChild(newBtn, loadMoreBtn);
    newBtn.addEventListener("click", loadMoreAzkar);
  }
}

// ==================== تصدير الدوال ====================
window.incrementCounter = incrementCounter;
window.loadMoreAzkar = loadMoreAzkar;
window.initAzkarSystem = initAzkarSystem;
window.resetAllCounters = resetAllCounters;

// بدء النظام عند تحميل الصفحة
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", initAzkarSystem);
} else {
  initAzkarSystem();
}

// ==================== دعم السحب والتمرير للموبايل - قسم الأذكار ====================

function initAzkarSlider() {
    const slider = document.querySelector('.azkar-categories-slider');
    if (!slider) return;
    
    // تجنب إضافة الأزرار أكثر من مرة
    const container = slider.parentElement;
    if (container && !container.querySelector('.azkar-scroll-btn')) {
        // زر التمرير لليسار
        const leftBtn = document.createElement('button');
        leftBtn.className = 'azkar-scroll-btn';
        leftBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        leftBtn.onclick = () => {
            slider.scrollBy({ left: -200, behavior: 'smooth' });
        };
        
        // زر التمرير لليمين
        const rightBtn = document.createElement('button');
        rightBtn.className = 'azkar-scroll-btn';
        rightBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        rightBtn.onclick = () => {
            slider.scrollBy({ left: 200, behavior: 'smooth' });
        };
        
        // إضافة الأزرار قبل وبعد الشريط
        const wrapper = document.createElement('div');
        wrapper.className = 'azkar-slider-container';
        slider.parentNode.insertBefore(wrapper, slider);
        wrapper.appendChild(leftBtn);
        wrapper.appendChild(slider);
        wrapper.appendChild(rightBtn);
    }
    
    const checkScroll = () => {
        const btns = document.querySelectorAll('.azkar-scroll-btn');
        if (btns.length >= 2) {
            btns[0].disabled = slider.scrollLeft <= 0;
            btns[1].disabled = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5;
        }
    };
    
    slider.addEventListener('scroll', checkScroll);
    setTimeout(checkScroll, 100);
}

function addAzkarSwipeIndicator() {
    const sliderContainer = document.querySelector('.azkar-categories-slider');
    if (!sliderContainer) return;
    if (document.querySelector('.azkar-swipe-indicator')) return;
    
    const indicator = document.createElement('div');
    indicator.className = 'azkar-swipe-indicator';
    indicator.innerHTML = `
        <i class="fas fa-arrow-left"></i>
        <span>اسحب لليمين لمشاهدة المزيد</span>
        <i class="fas fa-arrow-right"></i>
    `;
    sliderContainer.parentElement.insertAdjacentElement('afterend', indicator);
}

// تحديث دالة displayAzkarCategories لتشغيل الأزرار
const originalDisplayAzkarCategories = displayAzkarCategories;
displayAzkarCategories = function() {
    originalDisplayAzkarCategories();
    setTimeout(() => {
        initAzkarSlider();
        addAzkarSwipeIndicator();
    }, 200);
};

// تحديث دالة displayAzkarCards لتشغيل الأزرار
const originalDisplayAzkarCards = displayAzkarCards;
displayAzkarCards = function() {
    originalDisplayAzkarCards();
    setTimeout(() => {
        initAzkarSlider();
        addAzkarSwipeIndicator();
    }, 200);
};

// دالة منفصلة لتهيئة أزرار الأذكار
function initAzkarMobileSupport() {
    setTimeout(() => {
        initAzkarSlider();
        addAzkarSwipeIndicator();
    }, 500);
}

// إضافة استدعاء التهيئة بعد تحميل الصفحة
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAzkarMobileSupport);
} else {
    initAzkarMobileSupport();
}