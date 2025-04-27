// Initialize i18next when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    i18next.init({
      lng: 'en',
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
            "followTitle": "AWARDS",
            "description": "AWARDS (Year 2025)"
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
            "description": "奖项（2025年）"
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