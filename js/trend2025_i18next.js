// Initialize i18next when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  // Get language from sessionStorage (clears when browser closes)
  const savedLang = sessionStorage.getItem('selectedLanguage') || 'en';
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
          "followTitle": "Trend X Highest Rank (Year 2025)",
          "description": "Follow <a href='https://x.com/NamtanFilmTrend' target='_blank' rel='noopener noreferrer'>@NamtanFilmTrend</a> to stay updated with the latest trending activities.",
          "jan": "January 2025<span class='icon'>+</span>",
          "feb": "February 2025<span class='icon'>+</span>",
          "march": "March 2025<span class='icon'>+</span>",
          "apr": "April 2025<span class='icon'>+</span>",
          "may": "May 2025<span class='icon'>+</span>",
          "june": "June 2025<span class='icon'>+</span>",
          "july": "July 2025<span class='icon'>+</span>",
          "aug": "August 2025<span class='icon'>+</span>",
          "sep": "September 2025<span class='icon'>+</span>",
          "oct": "October 2025<span class='icon'>+</span>",
          "nov": "November 2025<span class='icon'>+</span>",
          "dec": "December 2025<span class='icon'>+</span>",

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
          "followTitle": "趋势 × 最高排名（2025年）",
          "description": "关注 <a href='https://x.com/NamtanFilmTrend' target='_blank' rel='noopener noreferrer'>@NamtanFilmTrend</a> 获取最新趋势活动",
          "jan": "2025年一月份<span class='icon'>+</span>",
          "feb": "2025年二月份<span class='icon'>+</span>",
          "march": "2025年三月份<span class='icon'>+</span>",
          "apr": "2025年四月份<span class='icon'>+</span>",
          "may": "2025年五月份<span class='icon'>+</span>",
          "june": "2025年六月份<span class='icon'>+</span>",
          "july": "2025年七月份<span class='icon'>+</span>",
          "aug": "2025年八月份<span class='icon'>+</span>",
          "sep": "2025年九月份<span class='icon'>+</span>",
          "oct": "2025年十月份<span class='icon'>+</span>",
          "nov": "2025年十一月份<span class='icon'>+</span>",
          "dec": "2025年十二月份<span class='icon'>+</span>",
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
          "followTitle": "トレンドX最高順位（2025年）",
          "description": "最新のトレンド情報は <a href='https://x.com/NamtanFilmTrend' target='_blank' rel='noopener noreferrer'>@NamtanFilmTrend</a>をフォローしてチェック！.",
          "jan": "2025年1月<span class='icon'>+</span>",
          "feb": "2025年2月<span class='icon'>+</span>",
          "march": "2025年3月<span class='icon'>+</span>",
          "apr": "2025年4月<span class='icon'>+</span>",
          "may": "2025年5月<span class='icon'>+</span>",
          "june": "2025年6月<span class='icon'>+</span>",
          "july": "2025年7月<span class='icon'>+</span>",
          "aug": "2025年8月<span class='icon'>+</span>",
          "sep": "2025年9月<span class='icon'>+</span>",
          "oct": "2025年10月<span class='icon'>+</span>",
          "nov": "2025年11月<span class='icon'>+</span>",
          "dec": "2025年12月<span class='icon'>+</span>",
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
          "followTitle": "Pinakamataas na Trend sa X (2025))",
          "description": "Sundan si <a href='https://x.com/NamtanFilmTrend' target='_blank' rel='noopener noreferrer'>@NamtanFilmTrend</a> para manatiling updated sa mga pinakabagong trending activities.",
          "jan": "Enero 2025<span class='icon'>+</span>",
          "feb": "Pebrero 2025<span class='icon'>+</span>",
          "march": "Marso 2025<span class='icon'>+</span>",
          "apr": "Abril 2025<span class='icon'>+</span>",
          "may": "Mayo 2025<span class='icon'>+</span>",
          "june": "Hunyo 2025<span class='icon'>+</span>",
          "july": "Hulyo 2025<span class='icon'>+</span>",
          "aug": "Agosto 2025<span class='icon'>+</span>",
          "sep": "Setyembre 2025<span class='icon'>+</span>",
          "oct": "Oktubre 2025<span class='icon'>+</span>",
          "nov": "Nobyembre 2025<span class='icon'>+</span>",
          "dec": "Disyembre 2025<span class='icon'>+</span>",
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

      // Save language in sessionStorage (clears on browser close)
    sessionStorage.setItem('selectedLanguage', lang);

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
    
    // Save language in sessionStorage (clears on browser close)
    sessionStorage.setItem('selectedLanguage', lang);
    
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
