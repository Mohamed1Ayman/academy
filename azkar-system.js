// ==================== نظام الأذكار ====================
// إخفاء اللودر والخطأ فوراً
const azkarLoading = document.getElementById("azkarLoading");
const azkarError = document.getElementById("azkarError");
if (azkarLoading) azkarLoading.style.display = "none";
if (azkarError) azkarError.style.display = "none";

let currentAzkarCategory = "أذكار الصباح";
const azkarCategories = [
  { key: "أذكار الصباح", label: " أذكار الصباح", icon: "fa-sun" },
  { key: "أذكار المساء", label: "أذكار المساء", icon: "fa-moon" },
  { key: "أذكار بعد السلام من الصلاة المفروضة", label: " أذكار بعد الصلاة", icon: "fa-mosque" },
  { key: "أذكار الطعام", label: "أذكار الطعام", icon: "fa-utensils" },
  { key: "أذكار النوم", label: " أذكار النوم", icon: "fa-bed" },
];

function buildCategoryButtons() {
  const div = document.getElementById("azkarCategories"); if (!div) return; div.innerHTML = "";
  azkarCategories.forEach(cat => {
    const btn = document.createElement("button"); btn.className = "azkar-category-btn";
    btn.innerHTML = `<i class="fas ${cat.icon}"></i> ${cat.label}`;
    if (cat.key === currentAzkarCategory) btn.classList.add("active");
    btn.addEventListener("click", () => { currentAzkarCategory = cat.key; document.querySelectorAll(".azkar-category-btn").forEach(b=>b.classList.remove("active")); btn.classList.add("active"); displayAzkar(currentAzkarCategory); });
    div.appendChild(btn);
  });
}

function displayAzkar(category) {
  const container = document.getElementById("azkarContainer"); if (!container) return; container.innerHTML = "";
  if (typeof azkarData === 'undefined') { container.innerHTML = '<div style="text-align:center;padding:2rem;color:#f44336;">❌ لم يتم تحميل بيانات الأذكار</div>'; return; }
  const data = azkarData[category];
  if (!data || data.length === 0) { container.innerHTML = '<div style="text-align:center;padding:2rem;">لا توجد أذكار</div>'; return; }
  data.forEach(zekr => {
    if (!zekr.content || zekr.category === "stop" || zekr.content.trim() === "") return;
    const card = document.createElement("div"); card.className = "azkar-card";
    card.innerHTML = `<div class="azkar-text">${zekr.content.replace(/\n/g,"<br>")}</div><div class="azkar-meta">${zekr.category?`<span class="azkar-badge">📂 ${zekr.category}</span>`:""}${zekr.count&&zekr.count!=="stop"?`<span class="azkar-count">🔁 ${zekr.count} مرة</span>`:""}${zekr.reference&&zekr.reference!=="stop"?`<span class="azkar-reference">📚 ${zekr.reference}</span>`:""}</div>${zekr.description&&zekr.description!=="stop"?`<div class="azkar-benefit">💡 ${zekr.description}</div>`:""}`;
    container.appendChild(card);
  });
}