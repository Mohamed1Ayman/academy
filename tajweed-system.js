// ==================== نظام أحكام التجويد المتطور ====================
// أكاديمية اتكلم عربي

// ==================== حالة التطبيق ====================
let tajweedState = {
  currentCategory: null,
  currentChapter: null,
  currentRules: [],
  displayedCount: 3,
  rulesPerPage: 3,
  isLoading: false
};

// ==================== عرض الأقسام الرئيسية ====================
function displayTajweedCategories() {
  const container = document.getElementById("tajweedDisplay");
  if (!container) return;
  
  if (typeof tajweedDatabase === 'undefined') {
    container.innerHTML = `
      <div class="tajweed-loading">
        <i class="fas fa-exclamation-triangle"></i>
        <p>❌ لم يتم تحميل بيانات التجويد</p>
      </div>
    `;
    return;
  }
  
  tajweedState.currentCategory = null;
  tajweedState.currentChapter = null;
  tajweedState.displayedCount = 3;
  
  let html = `
    <div class="tajweed-header">
      <h2><i class="fas fa-quran"></i> أقسام أحكام التجويد</h2>
      <p>اختر القسم الذي تريد تعلمه</p>
    </div>
    
    <div class="tajweed-categories-slider" id="tajweedCategoriesSlider">
  `;
  
  Object.keys(tajweedDatabase).forEach((key, index) => {
    const cat = tajweedDatabase[key];
    html += `
      <div class="tajweed-category-card" onclick="loadTajweedCategory('${key}')" data-category="${key}">
        <i class="fas ${cat.icon}"></i>
        <span>${cat.name}</span>
      </div>
    `;
  });
  
  html += `
    </div>
    
    <div class="tajweed-welcome">
      <i class="fas fa-hand-peace"></i>
      <h3>مرحباً بك في قسم أحكام التجويد</h3>
      <p>اختر أحد الأقسام أعلاه لبدء التعلم</p>
    </div>
  `;
  
  container.innerHTML = html;
}

// ==================== تحميل قسم معين ====================
function loadTajweedCategory(categoryKey) {
  const category = tajweedDatabase[categoryKey];
  if (!category) return;
  
  tajweedState.currentCategory = categoryKey;
  tajweedState.currentChapter = null;
  
  document.querySelectorAll('.tajweed-category-card').forEach(card => {
    card.classList.remove('active');
    if (card.getAttribute('data-category') === categoryKey) {
      card.classList.add('active');
    }
  });
  
  displayChapters(category);
}

// ==================== عرض الأبواب الفرعية ====================
function displayChapters(category) {
  const container = document.getElementById("tajweedDisplay");
  
  let html = `
    <div class="tajweed-header">
      <button class="tajweed-nav-btn" onclick="displayTajweedCategories()">
        <i class="fas fa-arrow-right"></i> جميع الأقسام
      </button>
      <h2><i class="fas ${category.icon}"></i> ${category.name}</h2>
      <p>${category.description}</p>
    </div>
    
    <div style="margin-bottom: 1rem;">
      <button class="tajweed-nav-btn" onclick="showAllRulesInCategory('${tajweedState.currentCategory}')">
        <i class="fas fa-list"></i> عرض جميع الأحكام
      </button>
    </div>
    
    <h3 style="margin: 1rem 0; color: var(--tajweed-green);">
      <i class="fas fa-folder-open"></i> الأبواب والفصول
    </h3>
    
    <div class="tajweed-rules-grid">
  `;
  
  Object.keys(category.chapters).forEach(key => {
    const chapter = category.chapters[key];
    html += `
      <div class="tajweed-category-card" onclick="loadChapter('${tajweedState.currentCategory}', '${key}')" style="min-width: auto; justify-content: flex-start;">
        <i class="fas fa-book"></i>
        <span>${chapter.name}</span>
        <small style="margin-right: auto; color: var(--tajweed-green);">${chapter.start}-${chapter.end}</small>
      </div>
    `;
  });
  
  html += `
    </div>
  `;
  
  container.innerHTML = html;
}

// ==================== عرض جميع الأحكام ====================
function showAllRulesInCategory(categoryKey) {
  const category = tajweedDatabase[categoryKey];
  if (!category) return;
  
  let allRules = [];
  Object.keys(category.chapters).forEach(chapterKey => {
    if (category.rules && category.rules[chapterKey]) {
      allRules = [...allRules, ...category.rules[chapterKey]];
    }
  });
  
  tajweedState.currentRules = allRules;
  tajweedState.displayedCount = 3;
  displayRulesList(category);
}

// ==================== تحميل باب معين ====================
function loadChapter(categoryKey, chapterKey) {
  const category = tajweedDatabase[categoryKey];
  const chapter = category.chapters[chapterKey];
  
  let rules = [];
  if (category.rules && category.rules[chapterKey]) {
    rules = category.rules[chapterKey];
  }
  
  tajweedState.currentChapter = chapterKey;
  tajweedState.currentRules = rules;
  tajweedState.displayedCount = 3;
  
  displayRulesList(category, chapter);
}

// ==================== عرض قائمة الأحكام ====================
function displayRulesList(category, chapter = null) {
  const container = document.getElementById("tajweedDisplay");
  const visibleRules = tajweedState.currentRules.slice(0, tajweedState.displayedCount);
  const hasMore = tajweedState.displayedCount < tajweedState.currentRules.length;
  
  // تخزين القواعد في متغير عام للوصول إليها
  window.currentDetailedRules = tajweedState.currentRules;
  
  let html = `
    <div class="tajweed-header">
      <button class="tajweed-nav-btn" onclick="loadTajweedCategory('${tajweedState.currentCategory}')">
        <i class="fas fa-arrow-right"></i> الأبواب
      </button>
      <button class="tajweed-nav-btn tajweed-back-btn" onclick="displayTajweedCategories()">
        <i class="fas fa-home"></i> الرئيسية
      </button>
      <h2><i class="fas ${category.icon}"></i> ${chapter ? chapter.name : category.name}</h2>
      <p>${chapter ? `أحكام ${chapter.name}` : category.description}</p>
    </div>
    
    <div class="tajweed-quick-nav">
      <label><i class="fas fa-search"></i> اذهب إلى حكم:</label>
      <select id="tajweedQuickSelect" onchange="goToRule(this.value)">
        <option value="">-- اختر الحكم --</option>
        ${tajweedState.currentRules.map((rule, idx) => `<option value="${idx}">${idx + 1}. ${rule.title}</option>`).join('')}
      </select>
    </div>
    
    <div class="tajweed-rules-grid" id="tajweedRulesGrid">
  `;
  
  visibleRules.forEach((rule, index) => {
    const levelClass = rule.level === 'مبتدئ' ? 'level-beginner' : (rule.level === 'متوسط' ? 'level-intermediate' : 'level-advanced');
    const levelText = rule.level || 'مبتدئ';
    
    // ✅ تخزين ruleId بشكل آمن
    const ruleId = index;
    
    html += `
      <div class="tajweed-rule-card" data-rule-index="${index}" style="animation-delay: ${index * 0.1}s">
        <div class="tajweed-rule-card-header">
          <div class="tajweed-rule-number">${index + 1}</div>
          <div class="tajweed-rule-level ${levelClass}">${levelText}</div>
        </div>
        <div class="tajweed-rule-card-content">
          <h4 class="tajweed-rule-title">
            <i class="fas fa-star-of-life"></i> ${sanitizeText(rule.title)}
          </h4>
          <p class="tajweed-rule-text">${sanitizeText((rule.text || "").substring(0, 120))}${(rule.text || "").length > 120 ? '...' : ''}</p>
          <div class="tajweed-rule-example">
            📖 ${sanitizeText(rule.example || "مثال")}
            <small>مثال من القرآن الكريم</small>
          </div>
          <button class="tajweed-details-btn" onclick="showRuleDetailsById(${ruleId})">
            <i class="fas fa-info-circle"></i> شرح تفصيلي
          </button>
        </div>
      </div>
    `;
  });
  
  html += `
    </div>
  `;
  
  if (hasMore) {
    html += `
      <div class="tajweed-load-more-wrapper">
        <button class="tajweed-load-more-btn" onclick="loadMoreRules()" id="loadMoreBtn">
          <i class="fas fa-arrow-down"></i> تحميل المزيد من الأحكام
          <span class="load-more-count">(${tajweedState.displayedCount} / ${tajweedState.currentRules.length})</span>
        </button>
      </div>
    `;
  }
  
  html += `
    <div style="text-align: center; margin-top: 1rem; padding: 1rem; border-top: 1px solid var(--border-color);">
      <small style="color: var(--text-secondary);">
        <i class="fas fa-book"></i> عدد الأحكام: ${tajweedState.currentRules.length} حكم
      </small>
    </div>
  `;
  
  container.innerHTML = html;
}

// ==================== دالة تنظيف النصوص ====================
function sanitizeText(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
    .replace(/\\/g, '&#92;');
}

// ==================== عرض شرح تفصيلي بواسطة ID ====================
function showRuleDetailsById(ruleId) {
  const rule = tajweedState.currentRules[ruleId];
  if (!rule) return;
  
  let modal = document.getElementById('tajweedDetailModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'tajweedDetailModal';
    modal.className = 'tajweed-detail-modal';
    document.body.appendChild(modal);
  }
  
  let html = `
    <div class="tajweed-detail-content">
      <div class="tajweed-detail-header">
        <h3><i class="fas fa-info-circle"></i> ${sanitizeText(rule.title)}</h3>
        <button class="tajweed-detail-close" onclick="closeRuleDetails()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="tajweed-detail-body">
        <h4><i class="fas fa-graduation-cap"></i> التعريف</h4>
        <p>${sanitizeText(rule.text || "لا يوجد شرح متاح")}</p>
        
        <h4><i class="fas fa-quran"></i> مثال من القرآن</h4>
        <div class="tajweed-detail-example">
          ${sanitizeText(rule.example || "لا يوجد مثال")}
        </div>
  `;
  
  if (rule.detailedExplanation) {
    const exp = rule.detailedExplanation;
    
    if (exp.definition) {
      html += `<h4><i class="fas fa-book-open"></i> الشرح المفصل</h4><p>${sanitizeText(exp.definition)}</p>`;
    }
    
    if (exp.howToPronounce) {
      html += `<h4><i class="fas fa-microphone-alt"></i> طريقة النطق</h4><p>${sanitizeText(exp.howToPronounce)}</p>`;
    }
    
    if (exp.letters) {
      html += `<p><strong>🔤 الحروف:</strong> ${sanitizeText(exp.letters)}</p>`;
    }
    
    if (exp.condition) {
      html += `<p><strong>📌 الشرط:</strong> ${sanitizeText(exp.condition)}</p>`;
    }
    
    if (exp.commonMistakes && exp.commonMistakes.length) {
      html += `<h4><i class="fas fa-exclamation-triangle"></i> أخطاء شائعة يجب تجنبها</h4><ul style="padding-right: 1.5rem; line-height: 1.8;">`;
      exp.commonMistakes.forEach(m => {
        html += `<li>${sanitizeText(m)}</li>`;
      });
      html += `</ul>`;
    }
    
    if (exp.trainingTips && exp.trainingTips.length) {
      html += `<h4><i class="fas fa-chalkboard-user"></i> نصائح تدريبية</h4><ul style="padding-right: 1.5rem; line-height: 1.8;">`;
      exp.trainingTips.forEach(t => {
        html += `<li>${sanitizeText(t)}</li>`;
      });
      html += `</ul>`;
    }
    
    if (exp.scholarQuote) {
      html += `<div class="scholar-quote"><i class="fas fa-quote-right"></i> ${sanitizeText(exp.scholarQuote)}</div>`;
    }
  }
  
  html += `
        <div style="margin-top: 1.5rem; padding: 1rem; background: rgba(46, 125, 50, 0.1); border-radius: 16px;">
          <p><i class="fas fa-chalkboard-user"></i> <strong>تذكير:</strong> إتقان هذا الحكم يحتاج إلى تدريب مستمر، فلا تيأس وكرر المحاولة.</p>
        </div>
      </div>
    </div>
  `;
  
  modal.innerHTML = html;
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ==================== عرض شرح تفصيلي (للتوافق مع البحث) ====================
function showRuleDetails(rule) {
  // تخزين القاعدة مؤقتاً ثم عرضها
  if (rule && rule.id !== undefined) {
    // البحث عن القاعدة في القائمة الحالية
    const foundIndex = tajweedState.currentRules.findIndex(r => r.id === rule.id);
    if (foundIndex !== -1) {
      showRuleDetailsById(foundIndex);
      return;
    }
  }
  
  // إذا لم نجدها، نضيفها مؤقتاً
  if (rule) {
    const tempId = tajweedState.currentRules.length;
    tajweedState.currentRules.push(rule);
    showRuleDetailsById(tempId);
    tajweedState.currentRules.pop();
  }
}

// ==================== تحميل المزيد من الأحكام ====================
function loadMoreRules() {
  if (tajweedState.isLoading) return;
  
  tajweedState.isLoading = true;
  const loadMoreBtn = document.getElementById("loadMoreBtn");
  
  if (loadMoreBtn) {
    loadMoreBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> جاري التحميل...';
    loadMoreBtn.disabled = true;
  }
  
  setTimeout(() => {
    tajweedState.displayedCount += 3;
    const category = tajweedDatabase[tajweedState.currentCategory];
    displayRulesList(category);
    tajweedState.isLoading = false;
  }, 300);
}

// ==================== الانتقال إلى حكم معين ====================
function goToRule(ruleIndex) {
  if (!ruleIndex || ruleIndex === "") return;
  showRuleDetailsById(parseInt(ruleIndex));
}

// ==================== إغلاق شرح تفصيلي ====================
function closeRuleDetails() {
  const modal = document.getElementById('tajweedDetailModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// ==================== البحث في الأحكام ====================
function searchTajweed(keyword) {
  if (!keyword || keyword.trim() === "") {
    if (tajweedState.currentCategory) {
      loadTajweedCategory(tajweedState.currentCategory);
    } else {
      displayTajweedCategories();
    }
    return;
  }
  
  const results = [];
  const searchTerm = keyword.toLowerCase();
  
  Object.keys(tajweedDatabase).forEach(catKey => {
    const category = tajweedDatabase[catKey];
    
    Object.keys(category.chapters || {}).forEach(chapKey => {
      const rules = category.rules?.[chapKey] || [];
      
      rules.forEach(rule => {
        if (rule.title?.toLowerCase().includes(searchTerm) || 
            rule.text?.toLowerCase().includes(searchTerm)) {
          results.push({
            categoryName: category.name,
            ...rule
          });
        }
      });
    });
  });
  
  const container = document.getElementById("tajweedDisplay");
  
  if (results.length === 0) {
    container.innerHTML = `
      <div class="tajweed-header">
        <button class="tajweed-nav-btn" onclick="displayTajweedCategories()">
          <i class="fas fa-arrow-right"></i> جميع الأقسام
        </button>
        <h2>🔍 نتائج البحث عن: "${sanitizeText(keyword)}"</h2>
        <p style="color: #f44336;">❌ لا توجد نتائج</p>
      </div>
    `;
    return;
  }
  
  // تخزين نتائج البحث مؤقتاً
  window.searchResults = results;
  
  let html = `
    <div class="tajweed-header">
      <button class="tajweed-nav-btn" onclick="displayTajweedCategories()">
        <i class="fas fa-arrow-right"></i> جميع الأقسام
      </button>
      <h2>🔍 نتائج البحث عن: "${sanitizeText(keyword)}"</h2>
      <p>وجدنا ${results.length} نتيجة</p>
    </div>
    
    <div class="tajweed-rules-grid">
  `;
  
  results.slice(0, 6).forEach((result, idx) => {
    html += `
      <div class="tajweed-rule-card" style="animation-delay: ${idx * 0.1}s">
        <div class="tajweed-rule-card-header">
          <div class="tajweed-rule-number">${idx + 1}</div>
          <div class="tajweed-rule-level level-beginner">${sanitizeText(result.categoryName)}</div>
        </div>
        <div class="tajweed-rule-card-content">
          <h4 class="tajweed-rule-title">
            <i class="fas fa-book"></i> ${sanitizeText(result.title)}
          </h4>
          <p class="tajweed-rule-text">${sanitizeText((result.text || "").substring(0, 100))}...</p>
          <div class="tajweed-rule-example">
            📖 ${sanitizeText(result.example || "مثال")}
          </div>
          <button class="tajweed-details-btn" onclick='showSearchResultDetails(${idx})'>
            <i class="fas fa-info-circle"></i> شرح تفصيلي
          </button>
        </div>
      </div>
    `;
  });
  
  html += `</div>`;
  container.innerHTML = html;
}

// ==================== عرض تفاصيل نتيجة البحث ====================
function showSearchResultDetails(index) {
  if (window.searchResults && window.searchResults[index]) {
    const rule = window.searchResults[index];
    // إضافة القاعدة مؤقتاً للعرض
    const tempId = tajweedState.currentRules.length;
    tajweedState.currentRules.push(rule);
    showRuleDetailsById(tempId);
    tajweedState.currentRules.pop();
  }
}

// ==================== إضافة واجهة البحث ====================
function addTajweedSearch() {
  const selector = document.getElementById("tajweedSelector");
  if (!selector) return;
  
  const searchHTML = `
    <div class="tajweed-search-container">
      <div class="tajweed-search-box">
        <i class="fas fa-search tajweed-search-icon"></i>
        <input type="text" id="tajweedSearchInput" class="tajweed-search-input" placeholder="ابحث عن حكم تجويدي...">
        <button id="clearTajweedSearch" class="tajweed-clear-search" style="display: none;">
          <i class="fas fa-times"></i>
        </button>
      </div>
    </div>
  `;
  
  selector.innerHTML = searchHTML;
  
  const searchInput = document.getElementById("tajweedSearchInput");
  const clearBtn = document.getElementById("clearTajweedSearch");
  
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      const val = e.target.value;
      if (clearBtn) clearBtn.style.display = val ? "block" : "none";
      searchTajweed(val);
    });
  }
  
  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        clearBtn.style.display = "none";
        if (tajweedState.currentCategory) {
          loadTajweedCategory(tajweedState.currentCategory);
        } else {
          displayTajweedCategories();
        }
      }
    });
  }
}

// ==================== دعم السحب والتمرير للموبايل ====================
function initTajweedSlider() {
    const slider = document.querySelector('.tajweed-categories-slider');
    if (!slider) return;
    
    const container = slider.parentElement;
    if (container && !container.querySelector('.tajweed-scroll-btn')) {
        const leftBtn = document.createElement('button');
        leftBtn.className = 'tajweed-scroll-btn';
        leftBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        leftBtn.onclick = () => {
            slider.scrollBy({ left: -250, behavior: 'smooth' });
        };
        
        const rightBtn = document.createElement('button');
        rightBtn.className = 'tajweed-scroll-btn';
        rightBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        rightBtn.onclick = () => {
            slider.scrollBy({ left: 250, behavior: 'smooth' });
        };
        
        const wrapper = document.createElement('div');
        wrapper.className = 'tajweed-slider-container';
        slider.parentNode.insertBefore(wrapper, slider);
        wrapper.appendChild(leftBtn);
        wrapper.appendChild(slider);
        wrapper.appendChild(rightBtn);
    }
    
    const checkScroll = () => {
        const btns = document.querySelectorAll('.tajweed-scroll-btn');
        if (btns.length >= 2) {
            btns[0].disabled = slider.scrollLeft <= 0;
            btns[1].disabled = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth - 5;
        }
    };
    
    slider.addEventListener('scroll', checkScroll);
    setTimeout(checkScroll, 100);
}

function addSwipeIndicator() {
    const sliderContainer = document.querySelector('.tajweed-categories-slider');
    if (!sliderContainer) return;
    if (document.querySelector('.tajweed-swipe-indicator')) return;
    
    const indicator = document.createElement('div');
    indicator.className = 'tajweed-swipe-indicator';
    indicator.innerHTML = `
        <i class="fas fa-arrow-left"></i>
        <span>اسحب لليمين لمشاهدة المزيد</span>
        <i class="fas fa-arrow-right"></i>
    `;
    sliderContainer.parentElement.insertAdjacentElement('afterend', indicator);
}

// ==================== إغلاق المودال بالضغط على ESC ====================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeRuleDetails();
  }
});

// ==================== تهيئة النظام ====================
function initTajweedSystem() {
  console.log("📖 بدء تشغيل نظام التجويد المتطور");
  
  if (typeof tajweedDatabase === 'undefined') {
    console.error("❌ tajweedDatabase غير موجود");
    return;
  }
  
  addTajweedSearch();
  displayTajweedCategories();
  
  setTimeout(() => {
    initTajweedSlider();
    addSwipeIndicator();
  }, 500);
}

// ==================== تصدير الدوال ====================
window.initTajweedSystem = initTajweedSystem;
window.displayTajweedCategories = displayTajweedCategories;
window.loadTajweedCategory = loadTajweedCategory;
window.loadChapter = loadChapter;
window.showAllRulesInCategory = showAllRulesInCategory;
window.loadMoreRules = loadMoreRules;
window.showRuleDetailsById = showRuleDetailsById;
window.showRuleDetails = showRuleDetails;
window.closeRuleDetails = closeRuleDetails;
window.goToRule = goToRule;
window.searchTajweed = searchTajweed;
window.showSearchResultDetails = showSearchResultDetails;

// ==================== بدء النظام ====================
if (document.readyState === 'loading') {
  document.addEventListener("DOMContentLoaded", initTajweedSystem);
} else {
  initTajweedSystem();
}