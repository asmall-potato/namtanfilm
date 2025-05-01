// Initialize i18next when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
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
            "followTitle": "『Pluto Series』について",
            "description": "『Pluto Series』はGMMTV制作の第2作目GLシリーズで、Namtan TipnareeとFilm Rachanunが主演を務めています。",
            "description1": "このドラマは、Chao Planoyの小説『PLUTO: A Story, A Planet, and Love』を原作としており、",
            "description2": "Snap25チームが監督を担当しています。",
            "followTitle2": "公式トレーラーを視聴する",
            "followTitle3": "『Pluto Series』関連",
            "followTitle4": "『Pluto Series』アワード＆実績",
            "xtrend": "X（旧Twitter）トレンド入り<span class='icon' >+</span>",
            "viu": "VIU「最も視聴されたドラマTOP10」ランクイン<span class='icon'>+</span>",
            "awards": "『Pluto Series』受賞歴<span class='icon' >+</span>",
            "awards1": "年間ベストソーシャルクリティーク賞",
            "awards2": "年間ベストシネマトグラフィー賞",
            "awards3": "年間最も人気があった百合シリーズ賞",
            "youtube": "MV再生回数（YouTube）<span class='icon' >+</span>",
            "followTitle5": "配信プラットフォーム",
            "watch": "『Pluto Series』は全世界（タイを除く）で以下のプラットフォームで視聴可能です",
            "gmmtvyt": "GMMTV YouTubeチャンネルで視聴",
            "viuthai": "VIU（タイ国内のみ）で視聴",
            "iQIYI": "iQIYIで視聴",
            "followTitle6": "『Pluto Series』サウンドトラック（OST）",
            "stream": "お気に入りの音楽プラットフォームで再生可能です",
            "princesstale": "เรื่องเล่าของเจ้าหญิง (A Princess' Tale) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan, Film",
            "plutosong": "พลูโต (Pluto) [เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\"] - Namtan, Film",
            "yourstory": "นิยายเรื่องเธอ (Your Story) [เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\"] - Namtan Tipnaree",
            "somewhere": "Somewhere Only We Know (เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\") - Namtan Tipnaree",
            "linger": "รอนะ (Linger) [เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\"] - Film Rachanun"
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
            "followTitle": "TUNGKOL SA Pluto",
            "description": "​​\"Pluto Series\" ay ang ikalawang seryeng sapphic ng GMMTV na pinagbibidahan nina Namtan Tipnaree and Film Rachanun.",
            "description1": "Ang serye ay hango sa nobelang \"PLUTO: A Story, A Planet, and Love\" ni Chao Planoy.",
            "description2": "Ang serye ay idinirek ng Snap25 team",
            "followTitle2": "Panoorin ang Official Trailer",
            "followTitle3": "Kaugnay sa Pluto",
            "followTitle4": "\"Pluto Series\" Engagement Wall",
            "xtrend": "X Trending<span class='icon' >+</span>",
            "viu": "VIU Top 10 Pinakapinanood na Serye at Drama<span class='icon'>+</span>",
            "awards": "Mga Parangal na Tinanggap ng Pluto<span class='icon' >+</span>",
            "awards1": "BEST SOCIAL CRITIQUE OF THE YEAR",
            "awards2": "BEST CINEMATOGRAPHY OF THE YEAR",
            "awards3": "MOST POPULAR YURI SERIES OF THE YEAR AWARD",
            "youtube": "YouTube View ng MV<span class='icon' >+</span>",
            "followTitle5": "Panoorin ang Serye sa mga Streaming Platform",
            "watch": "Maaaring Mapanood ang Pluto Series sa buong mundo (liban sa Thailand) sa YouTube channel ng GMMTV, iQIYI at VIU (Thailand).",
            "gmmtvyt": "Panoorin sa GMMTV YouTube",
            "viuthai": "Panoorin sa VIU (Thailand)",
            "iQIYI": "Panoorin sa iQIYI",
            "followTitle6": "Pakinggan ang Pluto Series OST",
            "stream": "I-stream ang soundtrack sa iyong paboritong music platform",
            "princesstale": "เรื่องเล่าของเจ้าหญิง (A Princess' Tale) Ost.Pluto นิทาน ดวงดาว ความรัก - Namtan, Film",
            "plutosong": "พลูโต (Pluto) [เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\"] - Namtan, Film",
            "yourstory": "นิยายเรื่องเธอ (Your Story) [เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\"] - Namtan Tipnaree",
            "somewhere": "Somewhere Only We Know (เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\") - Namtan Tipnaree",
            "linger": "รอนะ (Linger) [เพลงประกอบซีรีส์ \"Pluto นิทาน ดวงดาว ความรัก\"] - Film Rachanun"
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
