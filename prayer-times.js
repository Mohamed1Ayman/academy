// prayer-times.js
// ==================== نظام مواقيت الصلاة - توقيت 12 ساعة ====================

const prayerContainer = document.getElementById('prayerContainer');

const prayerNamesArabic = {
  Fajr: 'الفجر',
  Sunrise: 'الشروق',
  Dhuhr: 'الظهر',
  Asr: 'العصر',
  Maghrib: 'المغرب',
  Isha: 'العشاء'
};

const prayerIcons = {
  Fajr: 'fa-cloud-moon',
  Sunrise: 'fa-sun',
  Dhuhr: 'fa-sun',
  Asr: 'fa-cloud-sun',
  Maghrib: 'fa-cloud-sun-rain',
  Isha: 'fa-moon'
};

let prayerTimings = {};
let countdownInterval = null;

// ==================== تحويل الوقت من 24 إلى 12 ساعة ====================
function convertTo12Hour(time24) {
  const [hours, minutes] = time24.split(':').map(Number);
  const period = hours >= 12 ? 'مساءً' : 'صباحاً';
  const hours12 = hours % 12 || 12; // 0 يصبح 12
  return `${hours12}:${String(minutes).padStart(2, '0')} ${period}`;
}

// ==================== تحويل الوقت لدقائق للمقارنة ====================
function timeToMinutes(time24) {
  const [hours, minutes] = time24.split(':').map(Number);
  return hours * 60 + minutes;
}

// ==================== جلب مواقيت الصلاة ====================
async function fetchPrayerTimes() {
  if (!prayerContainer) return;
  
  prayerContainer.innerHTML = `
    <div class="prayer-loading-container">
      <div class="prayer-spinner">
        <i class="fas fa-mosque fa-spin"></i>
      </div>
      <p>جاري تحميل مواقيت الصلاة...</p>
    </div>
  `;
  
  try {
    const city = 'Cairo';
    const country = 'Egypt';
    
    const response = await fetch(
      `https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}&method=5`
    );
    const data = await response.json();
    prayerTimings = data.data.timings;
    
    renderPrayerTimes();
    startCountdown();
    
  } catch (error) {
    console.error('Prayer Error:', error);
    prayerContainer.innerHTML = `
      <div class="prayer-error">
        <i class="fas fa-exclamation-triangle"></i>
        <p>تعذر تحميل مواقيت الصلاة</p>
        <button onclick="fetchPrayerTimes()" class="prayer-retry-btn">
          <i class="fas fa-redo"></i> إعادة المحاولة
        </button>
      </div>
    `;
  }
}

// ==================== عرض المواقيت ====================
function renderPrayerTimes() {
  const date = new Date();
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const arabicDate = date.toLocaleDateString('ar-EG', options);
  
  let html = `
    <div class="prayer-date-header">
      <i class="fas fa-calendar-alt"></i>
      <span>${arabicDate}</span>
    </div>
    
    <div class="next-prayer-box" id="nextPrayerBox">
      <div class="next-prayer-label">الصلاة القادمة</div>
      <div class="next-prayer-name" id="nextPrayerName">--</div>
      <div class="countdown-timer" id="countdownTimer">
        <div class="countdown-item">
          <span class="countdown-number" id="countHours">00</span>
          <span class="countdown-label">ساعة</span>
        </div>
        <span class="countdown-separator">:</span>
        <div class="countdown-item">
          <span class="countdown-number" id="countMinutes">00</span>
          <span class="countdown-label">دقيقة</span>
        </div>
        <span class="countdown-separator">:</span>
        <div class="countdown-item">
          <span class="countdown-number" id="countSeconds">00</span>
          <span class="countdown-label">ثانية</span>
        </div>
      </div>
    </div>
    
    <div class="prayer-grid">
  `;
  
  Object.keys(prayerNamesArabic).forEach(key => {
    const time12 = convertTo12Hour(prayerTimings[key]);
    html += `
      <div class="prayer-card" id="prayer-${key}">
        <div class="prayer-icon">
          <i class="fas ${prayerIcons[key]}"></i>
        </div>
        <h4>${prayerNamesArabic[key]}</h4>
        <p class="prayer-time">${time12}</p>
      </div>
    `;
  });
  
  html += '</div>';
  prayerContainer.innerHTML = html;
}

// ==================== العداد التنازلي ====================
function startCountdown() {
  if (countdownInterval) clearInterval(countdownInterval);
  updateCountdown();
  countdownInterval = setInterval(updateCountdown, 1000);
}

function updateCountdown() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  
  const prayerOrder = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
  
  let nextPrayer = null;
  let nextPrayerMinutes = null;
  
  for (const prayer of prayerOrder) {
    const prayerMins = timeToMinutes(prayerTimings[prayer]);
    
    if (prayerMins > currentMinutes) {
      nextPrayer = prayer;
      nextPrayerMinutes = prayerMins;
      break;
    }
  }
  
  if (!nextPrayer) {
    nextPrayer = 'Fajr';
    nextPrayerMinutes = timeToMinutes(prayerTimings['Fajr']) + (24 * 60);
  }
  
  let diffMinutes = nextPrayerMinutes - currentMinutes;
  if (diffMinutes < 0) diffMinutes += 24 * 60;
  
  const totalSeconds = diffMinutes * 60 - now.getSeconds();
  
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  
  const countHours = document.getElementById('countHours');
  const countMinutes = document.getElementById('countMinutes');
  const countSeconds = document.getElementById('countSeconds');
  const nextPrayerName = document.getElementById('nextPrayerName');
  
  if (countHours) countHours.textContent = String(hours).padStart(2, '0');
  if (countMinutes) countMinutes.textContent = String(minutes).padStart(2, '0');
  if (countSeconds) countSeconds.textContent = String(seconds).padStart(2, '0');
  if (nextPrayerName) nextPrayerName.textContent = prayerNamesArabic[nextPrayer];
  
  document.querySelectorAll('.prayer-card').forEach(card => card.classList.remove('active-prayer'));
  const activeCard = document.getElementById(`prayer-${nextPrayer}`);
  if (activeCard) activeCard.classList.add('active-prayer');
}

// ==================== تهيئة ====================
document.addEventListener('DOMContentLoaded', fetchPrayerTimes);