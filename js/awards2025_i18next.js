// Initialize i18next when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
// awards2025_i18next.js
    // Get language from sessionStorage (clears when browser closes)
  const savedLang = sessionStorage.getItem('selectedLanguage') || 'en';
    i18next.init({
      lng: savedLang,
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
        "followTitle": "Awards",
        "description": "Awards that received by Namtan Tipnaree & Film Rachanun </br></br> (Year 2025)",
        "awardTitle": "HUB AWARDS 2024 - BEST CINEMATOGRAPHY OF THE YEAR",
        "awardTitle2": "HUB AWARDS 2024 - MOST AWAITED SERIES OF 2025", 
        "awardTitle3": "HUB AWARDS 2024 - BEST SOCIAL CRITIQUE OF THE YEAR",
        "awardTitle4": "MELLOW POP BEST COUPLE OF THE MONTH (NOVEMBER 2024)",
        "winner": "PLUTO",
        "winner2": "GIRL RULES",
        "small_desc": "*This award is chosen by Technical Jury*"
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
        "followTitle": "奖项",
        "description": "Namtan Tipnaree和Film Rachanun获得的奖项 </br></br> (2025年)",
        "awardTitle": "HUB AWARDS 2024 - 年度最佳摄影",
        "awardTitle2": "HUB AWARDS 2024 - 2025年最受期待剧集",
        "awardTitle3": "HUB AWARDS 2024 - 年度最佳社会评论",
        "awardTitle4": "MELLOW POP 本月最佳情侣 (2024年11月)",
        "winner": "PLUTO",
        "winner2": "GIRL RULES", 
        "small_desc": "*此奖项由技术评审团选出*"
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
        "followTitle": "アワード",
        "description": "Namtan Tipnaree & Film Rachanunが受賞したアワード   </br></br> (2025年)",
        "awardTitle": "HUB AWARDS 2024 - 最優秀撮影賞（2024年）",
        "awardTitle2": "HUB AWARDS 2024 - 2025年最も期待されるシリーズ賞",
        "awardTitle3": "HUB AWARDS 2024 - ベストソーシャルクリティーク賞",
        "awardTitle4": "MELLOW POP ベストカップル賞（2024年11月）",
        "winner": "PLUTO",
        "winner2": "GIRL RULES", 
        "small_desc": "*このアワードは専門審査員によって選出されました*"
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
        "followTitle": "Mga Parangal",
        "description": "Mga parangal na natanggap nina Namtan Tipnaree & Film Rachanun </br></br> (Y2025)",
        "awardTitle": "HUB AWARDS 2024 - BEST CINEMATOGRAPHY OF THE YEAR",
        "awardTitle2": "HUB AWARDS 2024 - MOST AWAITED SERIES OF 2025",
        "awardTitle3": "HUB AWARDS 2024 - BEST SOCIAL CRITIQUE OF THE YEAR",
        "awardTitle4": "MELLOW POP BEST COUPLE OF THE MONTH (NOVEMBER 2024)",
        "winner": "PLUTO",
        "winner2": "GIRL RULES", 
        "small_desc": "*Ang parangal na ito ay pinili ng Technical Jury*"
      }
    },
    ita: {
          translation: {

            // NAVIGATION
            "nav_home": "casa",
            "nav_series": "serie",
            "nav_pluto_series": "la serie \"Pluto\"",
            "nav_girl_rules": "la serie \"Girl Rules\"",
            "nav_livecount": "conteggio live",
            "nav_livecount_pluto": "Conteggio live(Pluto)",
            "nav_awards": "premi",
            "nav_awards2025": "premi (anno 2025)",
            "nav_fm": "incontro con i fan",
            "nav_fm2025": "2025",
            "nav_video": "video",
            "nav_video2024": "video (anno 2024)",
            "nav_video2025": "video (anno 2025)",
            "nav_magazine": "rivista",
            "nav_magazine2024": "rivista (anno 2024)",
            "nav_magazine2025": "rivista (anno 2025)",
            "nav_brands": "marchi",
            "nav_brands2024": "marchi (anno 2024)",
            "nav_brands2025": "marchi (anno 2025)",
            "nav_vote": "votazione ",
            "nav_social": "Social Media",
            "nav_articles": "articoli",
            "nav_trend": "trend X la prima posizione ",
            "nav_trend2024": "Trend(2024)",
            "nav_trend2025": "Trend(2025)",
            "nav_soldout": "tutto esaurito",

            //-------
            "followTitle": "premi",
            "description": "premi ricevuti da Namtan Tipnaree e Film Rachanun </br></br> (2025)",
            "awardTitle": "HUB AWARDS 2024-miglior cinematografia dell'anno",
            "awardTitle2": "HUB AWARDS 2024-la più attesa serie del 2025",
            "awardTitle3": "HUB AWARDS 2024-miglior critica sociale dell'anno",
            "awardTitle4": "Mellow pop miglior coppia del mese (Novembre 2024)",
            "winner": "PLUTO",
            "winner2": "GIRL RULES", 
            "small_desc": "*questo premio è scelto dalla giuria tecnica *"
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
: savedLang === 'tl'
? 'FILIPINO'
: 'Italian';
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

    // Save language in sessionStorage (clears on browser close)
    sessionStorage.setItem('selectedLanguage', lang);

    //Use the new lang, not savedLang
    const displayText = lang === 'en' 
            ? 'ENGLISH' 
            : lang === 'zh' 
            ? '中文' 
            : lang === 'ja' 
            ? '日本語' 
            : savedLang === 'tl'
            ? 'FILIPINO'
            : 'Italian';
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
  
  // Save language in sessionStorage (clears on browser close)
  sessionStorage.setItem('selectedLanguage', lang);

  // Update button text
  const displayText = lang === 'en' 
            ? 'ENGLISH' 
            : lang === 'zh' 
            ? '中文' 
            : lang === 'ja' 
            ? '日本語' 
            : savedLang === 'tl'
            ? 'FILIPINO'
            : 'Italian';
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
