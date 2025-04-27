// Initialize i18next when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
// awards2025_i18next.js
i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: {
        // NAVIGATION
        "nav_home": "Home",
        "nav_series": "Series",
        "nav_pluto_series": "Pluto Series",
        "nav_girl_rules": "Girl Rules Series",
        "nav_livecount": "Live Count",
        "nav_livecount_pluto": "Pluto Series",
        "nav_awards": "Awards",
        "nav_awards2025": "Awards (Y2025)",
        "nav_fm": "Fan Meeting",
        "nav_fm2025": "2025",
        "nav_video": "Video",
        "nav_video2024": "Video (Y2024)",
        "nav_video2025": "Video (Y2025)",
        "nav_magazine": "Magazine",
        "nav_magazine2024": "Magazine (Y2024)",
        "nav_magazine2025": "Magazine (Y2025)",
        "nav_brands": "Brands",
        "nav_brands2024": "Brands (Y2024)",
        "nav_brands2025": "Brands (Y2025)",
        "nav_vote": "Voting",
        "nav_social": "Social Media",
        "nav_articles": "Articles",
        "nav_trend": "Trend X Highest Rank",
        "nav_trend2024": "Trend(2024)",
        "nav_trend2025": "Trend(2025)",
        "nav_soldout": "Sold Out",

        //-------
        "followTitle": "FAN MEETING",
        "description": "Local & Overseas fan meeting",
        "year": "(Year 2025)",
        "ticketsales": "Tickets on sale : 19 APRIL 2025 AT 10 AM (BKK Time) AT ThaiTicketMajor",
        "getticket": "Get your ticket at ThaiTicketMajor", 
        "getticket2": "Get your ticket at ticket board",
        "venue": "The Venetian Theatre, The Venetian Macao",
        "ticketsales2": "Ticket sales: 3:00PM, 19th March 2025 on Cotaiticketing and Damai",
        "venue2": "Straits Culture and Art Center Opera House",
        "ticketsales4": "Ticket sales: 6:00PM(GMT+8), 2nd April 2025 on 秀动ShowStart",
        "venue3": "BEN THANH THEATER, HO CHI MINH CITY",
        "ticketsales5": "Ticket sales opening time: 12:00 on 08/03/2025 on Ticketbox",
        "description1": "Worldwide live streaming via TTM LIVE",
        "ticketsales6": "Tickets on sale : 9 FEBRUARY 2025 AT 12:30 PM (BKK Time)",
        "getticket4": "Get your ticket at here",
        "ticketsales3": "Ticket sales: 7:00PM(GMT+8), 2nd April 2025 on 秀动ShowStart",
        "venuehz": "Hangzhou, Zhejiang Province",
        "ticketsaleshz": "Ticket sales: Thursday, May 1, 2025,12:00 at Xiaomang APP",
        "ticketsaleshz1": "Ticket sales: Friday, May 2, 2025, 12:00 at Xiaomang APP",
        "titlehz": "Sweet Journey - Namtan Fan Appreciation Party",
        "titlehz1": "Dream Vacation-Film Fan Appreciation Party"
      }
    },
    zh: {
      translation: {
        // NAVIGATION
        "nav_home": "首页",
        "nav_series": "剧集",
        "nav_pluto_series": "冥王星之恋",
        "nav_girl_rules": "女生规则",
        "nav_livecount": "实时数据",
        "nav_livecount_pluto": "实时数据(冥王星之恋)",
        "nav_awards": "奖项",
        "nav_awards2025": "奖项 (2025年)",
        "nav_fm": "粉丝见面会",
        "nav_fm2025": "2025",
        "nav_video": "视频",
        "nav_video2024": "视频 (2024年)",
        "nav_video2025": "视频 (2025年)",
        "nav_magazine": "杂志",
        "nav_magazine2024": "杂志 (2024年)",
        "nav_magazine2025": "杂志 (2025年)",
        "nav_brands": "品牌",
        "nav_brands2024": "品牌 (Y2024)",
        "nav_brands2025": "品牌 (2025年)",
        "nav_vote": "投票",
        "nav_social": "社交媒体",
        "nav_articles": "文章",
        "nav_trend": "趋势 x 最高排名",
        "nav_trend2024": "趋势(2024年)",
        "nav_trend2025": "趋势(2025年)",
        "nav_soldout": "售罄",

        //-------
        "followTitle": "粉丝见面会",
        "description": "国内与国外粉丝见面会",
        "year": "(2025年)",
        "ticketsales": "票务销售：2025年4月19日 上午10点（曼谷时间）在ThaiTicketMajor网站开售。",
        "getticket": "在ThaiTicketMajor购买票。", 
        "getticket2": "在Ticket Board购买票。",
        "venue": "威尼斯人剧场",
        "ticketsales2": "票务销售：2025年3月19日下午3点，开始在Cotaiticketing和大麦网站售票。",
        "venue2": "海峡文化艺术中心歌剧院",
        "venue3": "Ben Thanh剧院，胡志明市",
        "ticketsales4": "票务销售：2025年4月2日下午6点（GMT+8），在秀动ShowStart开售。",
        "ticketsales5": "票务销售开启时间：2025年3月8日12:00，在Ticketbox开售。",
        "description1": "通过TTM LIVE进行全球直播",
        "ticketsales6": "票务销售：2025年2月9日 中午12:30（曼谷时间）开售。",
        "getticket4": "在这里购买票",
        "ticketsales3": "票务销售：2025年4月2日 下午7:00（GMT+8），在秀动ShowStart网站开售。",
        "venuehz": "浙江杭州",
        "ticketsaleshz": "票务销售: 2025年5月1日（周四）12:00 在小芒APP",
        "ticketsaleshz1": "票务销售: 2025年5月2日（周五）12:00 在小芒APP",
        "titlehz": "甜蜜旅程-Namtan粉丝答谢会",
        "titlehz1": "梦幻假期-Film粉丝答谢会"
        
      }
    }
  }
}, function(err, t) {
  updateAllContent(); // Update translatable elements after initialization
});

// Toggle dropdown visibility
document.querySelector(".language-switcher").addEventListener("click", function () {
  const dropdown = document.getElementById("languageDropdown");
  dropdown.classList.toggle("show");
});

// Switch language and update UI
function switchLanguage(lang) {
  i18next.changeLanguage(lang, (err, t) => {
      if (err) return console.error('Language change failed:', err);
      updateAllContent();

      // Update button text
      const displayText = lang === 'en' ? 'ENGLISH' : '中文';
      document.querySelector('.current-language').textContent = displayText;

      // Close dropdown
      document.getElementById("languageDropdown").classList.remove("show");
  });
  return false;
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
  const dropdown = document.getElementById("languageDropdown");
  const button = document.querySelector('.language-button');
  
  if (!event.target.closest('.language-switcher') && dropdown.classList.contains('show')) {
      dropdown.classList.remove("show");
  }
});
});

// Function to update all translatable content
function updateAllContent() {
// Translate navigation items
document.querySelectorAll('[data-i18n-nav]').forEach(el => {
  el.textContent = i18next.t(el.getAttribute('data-i18n-nav'));
});

// Translate other content
document.querySelectorAll('[data-i18n]').forEach(element => {
  const key = element.getAttribute('data-i18n');
  
  // If the element has a special attribute like data-i18n-html, use innerHTML
  if (element.hasAttribute('data-i18n-html')) {
      element.innerHTML = i18next.t(key);
  } else {
      element.textContent = i18next.t(key);
  }
});
}


// Switch language and update UI
function switchLanguage(lang) {
i18next.changeLanguage(lang, (err, t) => {
  if (err) return console.error('Language change failed:', err);
  updateAllContent();
  
  // Update button text
  const displayText = lang === 'en' ? 'ENGLISH' : '中文';
  document.querySelector('.current-language').textContent = displayText;
  
  // Close dropdown
  document.getElementById("languageDropdown").classList.remove("show");
});
return false;
}

// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
const dropdown = document.getElementById("languageDropdown");
const button = document.querySelector('.language-button');

if (!event.target.closest('.language-switcher') && dropdown.classList.contains('show')) {
  dropdown.classList.remove("show");
}
});