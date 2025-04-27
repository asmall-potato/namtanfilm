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
            "followTitle": "ABOUT Pluto Series",
            "description": "​​\"Pluto Series\" is GMMTV's second sapphire series, starring by Namtan Tipnaree and Film Rachanun.",
            "description1": "The series is adapted from the novel \"PLUTO: A Story, A Planet, and Love\" written by Chao Planoy.",
            "description2": "The series is directed by the Snap25 team",
            "followTitle2": "Watch the Official Trailer",
            "followTitle3": "Related to Pluto Series",
            "followTitle4": "\"Pluto Series\" Engagement Wall",
            "xtrend": "X Trending<span class='icon' >+</span>",
            "viu": "VIU Top 10 Most-Watched Series and Dramas<span class='icon'>+</span>",
            "awards": "Awards received by the Pluto series<span class='icon' >+</span>",
            "awards1": "BEST SOCIAL CRITIQUE OF THE YEAR",
            "awards2": "BEST CINEMATOGRAPHY OF THE YEAR",
            "awards3": "MOST POPULAR YURI SERIES OF THE YEAR AWARD",
            "youtube": "YouTube View of MV<span class='icon' >+</span>",
            "followTitle5": "Watch the Series on Streaming Platforms",
            "watch": "You can watch the Pluto Series worldwide (except Thailand) on GMMTV's YouTube channel, iQIYI and VIU (Thailand).",
            "gmmtvyt": "Watch on GMMTV YouTube",
            "viuthai": "Watch on VIU (Thailand)",
            "iQIYI": "Watch on iQIYI",
            "followTitle6": "Listen to the Pluto Series OST",
            "stream": "Stream the soundtrack on your favorite music platform",
            "princesstale": "เรื่องเล่าของเจ้าหญิง (A Princess' Tale) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan, Film",
            "plutosong": "พลูโต (Pluto) [เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\"] - Namtan, Film",
            "yourstory": "นิยายเรื่องเธอ (Your Story) [เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\"] - Namtan Tipnaree",
            "somewhere": "Somewhere Only We Know (เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\") - Namtan Tipnaree",
            "linger": "รอนะ (Linger) [เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\"] - Film Rachanun"
           
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
            "followTitle": "关于《冥王星之恋》",
            "description": "​​\"冥王星之恋\" 是GMMTV第二部GL剧集, 由Namtan Tipnaree和Film Rachanun领衔主演",
            "description1": "该剧改编自Chao Planoy所著小说《PLUTO: A Story, A Planet, and Love》",
            "description2": "该剧由Snap25团队执导",
            "followTitle2": "观看官方预告片",
            "followTitle3": "与《冥王星之恋》相关",
            "followTitle4": "\"冥王星之恋\" 成就榜",
            "xtrend": "X趋势<span class='icon'>+</span>",
            "viu": "VIU 热门剧集与电视剧 Top 10<span class='icon'>+</span>",
            "awards": "《冥王星之恋》所获奖项<span class='icon'>+</span>",
            "awards1": "年度最佳社会评论",
            "awards2": "年度最佳摄影",
            "awards3": "年度最受欢迎百合系列奖",
            "youtube": "MV在YouTube上的播放量<span class='icon'>+</span>",
            "followTitle5": "在各大流媒体平台观看《冥王星之恋》",
            "watch": "您可以在GMMTV的YouTube频道 (全球范围内均可观看（泰国除外）)、iQIYI和VIU（泰国）观看《冥王星之恋》。",
            "gmmtvyt": "在GMMTV的YouTube频道观看",
            "viuthai": "在VIU (泰国)观看",
            "iQIYI": "在iQIYI观看",
            "followTitle6": "收听《冥王星之恋》原声带",
            "stream": "在你喜欢的音乐平台上收听《冥王星之恋》原声带",
            "princesstale": "เรื่องเล่าของเจ้าหญิง (A Princess' Tale) 【《冥王星之恋》原声带 】- Namtan, Film",
            "plutosong": "พลูโต (Pluto) 【《冥王星之恋》原声带 】 - Namtan, Film",
            "yourstory": "นิยายเรื่องเธอ (Your Story) 【《冥王星之恋》原声带 】 - Namtan Tipnaree",
            "somewhere": "Somewhere Only We Know 【《冥王星之恋》原声带 】 - Namtan Tipnaree",
            "linger": "รอนะ (Linger) 【《冥王星之恋》原声带 】 - Film Rachanun"
            
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