// Initialize i18next when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
// awards2025_i18next.js
const savedLang = localStorage.getItem('selectedLanguage') || 'en';
    i18next.init({
      lng: savedLang,
      debug: true,
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
        "followTitle": "Live Count",
        "description": "MV & Official Trailer Live Count (YT)",
        "plutotrailer": "[Official Trailer] Pluto นิทาน ดวงดาว ความรัก",
        "princesstalemv": "เรื่องเล่าของเจ้าหญิง (A Princess' Tale) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan, Film",
        "plutomv": "พลูโต (Pluto) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan Tipnaree, Film Rachanun",
        "yourstorymv": "นิยายเรื่องเธอ (Your Story) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan Tipnaree",
        "somewheremv": "Somewhere only we know Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan Tipnaree",
        "lingermv": "รอนะ (Linger) Ost.Pluto นิทาน ดวงดาว ความรัก - Film Rachanun",
        "Xlivecount": "X Live Follower Counter",
        "tiktoklivecount": "TikTok Live Follower Counter",
        "iglivecount": "Instagram Live Follower Counter"
        

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
        "followTitle": "实时计数",
        "description": "MV 和官方预告片实时计数（YT）",
        "plutotrailer": "《冥王星之恋》官方预告片",
        "princesstalemv": "关于公主的故事 （冥王星之恋原声带）- Namtan, Film",
        "plutomv": "Pluto（冥王星之恋原声带） - Namtan Tipnaree, Film Rachanun",
        "yourstorymv": "Your Story（冥王星之恋原声带） - Namtan Tipnaree",
        "somewheremv": "Somewhere only we know （冥王星之恋原声带） - Namtan Tipnaree",
        "lingermv": "Linger（冥王星之恋原声带） - Film Rachanun",
        "Xlivecount": "X实时粉丝计数器",
        "tiktoklivecount": "TikTok实时粉丝计数器",
        "iglivecount": "Instagram实时粉丝计数器"

      }
    },
    ja: {
      translation: {

        // NAVIGATION
        "nav_home": "ホーム",
        "nav_series": "シリーズ",
        "nav_pluto_series": "Pluto Series",
        "nav_girl_rules": "Girl Rules Series",
        "nav_livecount": "リアルタイムデータ",
        "nav_livecount_pluto": "リアルタイムデータ(Pluto Series)",
        "nav_awards": "アワード",
        "nav_awards2025": "アワード（2025年）",
        "nav_fm": "ファンミーティング",
        "nav_fm2025": "2025",
        "nav_video": "ビデオ",
        "nav_video2024": "ビデオ（2024年）",
        "nav_video2025": "ビデオ（2025年）",
        "nav_magazine": "雑誌",
        "nav_magazine2024": "雑誌（2024年）",
        "nav_magazine2025": "雑誌（2025年）",
        "nav_brands": "ブランド",
        "nav_brands2024": "ブランド（2024年）",
        "nav_brands2025": "ブランド（2025年）",
        "nav_vote": "投票",
        "nav_social": "ソーシャルメディア",
        "nav_articles": "記事",
        "nav_trend": "トレンドX最高順位",
        "nav_trend2024": "トレンド（2024年）",
        "nav_trend2025": "トレンド（2025年）",
        "nav_soldout": "完売",

        //-------
        "followTitle": "リアルタイムデータ",
        "description": "MV & 公式トレーラー 再生回数 (YouTube)",
        "plutotrailer": "[Official Trailer] Pluto นิทาน ดวงดาว ความรัก",
        "princesstalemv": "เรื่องเล่าของเจ้าหญิง (A Princess' Tale) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan, Film",
        "plutomv": "พลูโต (Pluto) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan Tipnaree, Film Rachanun",
        "yourstorymv": "นิยายเรื่องเธอ (Your Story) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan Tipnaree",
        "somewheremv": "Somewhere only we know Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan Tipnaree",
        "lingermv": "รอนะ (Linger) Ost.Pluto นิทาน ดวงดาว ความรัก - Film Rachanun",
        "Xlivecount": "X（旧Twitter） フォロワー数",
        "tiktoklivecount": "TikTok フォロワー数",
        "iglivecount": "Instagram フォロワー数"
      }
    },
    tl: {
      translation: {

        // NAVIGATION
        "nav_home": "Home",
        "nav_series": "Mga Serye",
        "nav_pluto_series": "Pluto",
        "nav_girl_rules": "Girl Rules",
        "nav_livecount": "Live Count",
        "nav_livecount_pluto": "Live Count(Pluto)",
        "nav_awards": "Mga Parangal",
        "nav_awards2025": "Mga Parangal (2025)",
        "nav_fm": "Fan Meeting",
        "nav_fm2025": "2025",
        "nav_video": "Bidyo",
        "nav_video2024": "Bidyo (2024)",
        "nav_video2025": "Bidyo (2025)",
        "nav_magazine": "Magasin",
        "nav_magazine2024": "Magasin (2024)",
        "nav_magazine2025": "Magasin (2025)",
        "nav_brands": "Brands",
        "nav_brands2024": "Brands (Y2024)",
        "nav_brands2025": "Brands (Y2025)",
        "nav_vote": "Botohan",
        "nav_social": "Social Media",
        "nav_articles": "Mga Artikulo",
        "nav_trend": "Pinakamataas na Trend sa X",
        "nav_trend2024": "Trend(2024)",
        "nav_trend2025": "Trend(2025)",
        "nav_soldout": "Sold Out",

        //-------
        "followTitle": "Live Count",
        "description": "MV & Official Trailer Live Count (YT)",
        "plutotrailer": "[Official Trailer] Pluto นิทาน ดวงดาว ความรัก",
        "princesstalemv": "เรื่องเล่าของเจ้าหญิง (A Princess' Tale) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan, Film",
        "plutomv": "พลูโต (Pluto) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan Tipnaree, Film Rachanun",
        "yourstorymv": "นิยายเรื่องเธอ (Your Story) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan Tipnaree",
        "somewheremv": "Somewhere only we know Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan Tipnaree",
        "lingermv": "รอนะ (Linger) Ost.Pluto นิทาน ดวงดาว ความรัก - Film Rachanun",
        "Xlivecount": "X Live Follower Counter",
        "tiktoklivecount": "TikTok Live Follower Counter",
        "iglivecount": "Instagram Live Follower Counter"
      }
    }
  }
}, function(err, t) {
  updateAllContent(); // Update translatable elements after initialization
});

// Set button text on page load
//Add this inside the callback after i18next.init(...), right before or after updateAllContent();:
const displayText = savedLang === 'en' 
? 'ENGLISH' 
: savedLang === 'zh' 
? '中文' 
: savedLang === 'ja' 
? '日本語' 
: 'FILIPINO';
document.querySelector('.current-language').textContent = displayText;


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

    //Save selected language to localStorage
    localStorage.setItem('selectedLanguage', lang);

    //Use the new lang, not savedLang
    const displayText = lang === 'en' 
        ? 'ENGLISH' 
        : lang === 'zh' 
        ? '中文' 
        : lang === 'ja' 
        ? '日本語' 
        : 'FILIPINO';
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
document.querySelectorAll('[data-i18n], [data-i18n-nav]').forEach(element => {
const key = element.getAttribute('data-i18n') || element.getAttribute('data-i18n-nav');

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
  const displayText = lang === 'en' 
  ? 'ENGLISH' 
  : lang === 'zh' 
  ? '中文' 
  : lang === 'ja' 
  ? '日本語' 
  : 'FILIPINO';
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
