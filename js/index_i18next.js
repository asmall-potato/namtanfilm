// Centralize i18next initialization
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
  
                    // index page
                    "description": "Namtan Tipnaree & Film Rachanun are GMMTV artists.",
                    "description1": "They are the second official GL cp from GMMTV.",
                    "collaboratetitle": "Collaborative series",
                    "description2": "Last Twilight",
                    "description3": "Ploy's Yearbook",
                    "description4": "Pluto Series",
                    "description5": "Girl Rules Series",
                    "mascot": "Fandom Name & Mascot:",
                    "schedule": "FOLLOW THEIR LATEST SCHEDULE",
                    "profile": "NAMTANFILM's PROFILE",
                    "clickprofile": "Click to view their profile",
                    "info": "To get the latest info, follow on:",
                    "xaccount": "X Account",
                    "gmmtvofficial": "GMMTV Official Account",
                    "officialfc": "Official Fanclub",
                    "officialTA": "Official Trending Account",
                    "gmmtvshop": "Get NamtanFilm's official merchandise at",
                    "globalofc": "Global Lunar Support"
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
  
                    // index page
                    "description": "Namtan Tipnaree 和 Film Rachanun 是GMMTV旗下艺人",
                    "description1": "他们是GMMTV的第二对官方GL荧幕情侣",
                    "collaboratetitle": "合作剧集",
                    "description2": "不曾遗忘的暮色",
                    "description3": "人生纪念册",
                    "description4": "冥王星之恋",
                    "description5": "女生规则：禁爱游戏",
                    "mascot": "粉丝名 & 吉祥物:",
                    "schedule": "关注她们最新的行程",
                    "profile": "NAMTANFILM的个人简介",
                    "clickprofile": "点击查看他们的个人资料",
                    "info": "获取最新信息，请关注：",
                    "xaccount": "X账号",
                    "gmmtvofficial": "GMMTV官方账号",
                    "officialfc": "官方粉丝站",
                    "officialTA": "官方刷趋号",
                    "gmmtvshop": "点击以下购买NamtanFilm的官方周边商品",
                    "globalofc": "全球LUNAR官方粉丝站"
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
                    "description": "Namtan TipnareeとFilm Rachanunは、GMMTVのアーティストです。",
                    "description1": "彼女たちはGMMTVが公式に認めた2組目のGLスクリーンカップルです。",
                    "collaboratetitle": "共同シリーズ",
                    "description2": "Last Twilight",
                    "description3": "Ploy's Yearbook",
                    "description4": "Pluto Series",
                    "description5": "Girl Rules Series",
                    "mascot": "ファンダム名 & マスコット:",
                    "schedule": "最新スケジュールをチェック",
                    "profile": "NAMTANFILM プロフィール",
                    "clickprofile": "プロフィールを見るにはクリック",
                    "info": "最新情報はこちらでチェック:",
                    "xaccount": "X（旧Twitter）アカウント",
                    "gmmtvofficial": "GMMTV公式アカウント",
                    "officialfc": "公式ファンクラブ",
                    "officialTA": "トレンド公式アカウント",
                    "gmmtvshop": "NAMTANFILM 公式グッズはこちらで購入",
                    "globalofc": "世界Lunarファンクラブ"
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
                    "description": "Sina Namtan Tipnaree & Film Rachanun ay mga artista ng GMMTV.",
                    "description1": "Sila ang pangalawang opisyal na GL cp ng GMMTV.",
                    "collaboratetitle": "Seryeng kolaborasyon",
                    "description2": "Last Twilight",
                    "description3": "Ploy's Yearbook",
                    "description4": "Pluto Series",
                    "description5": "Girl Rules Series",
                    "mascot": "Pangalan ng Fandom & Mascot:",
                    "schedule": "SUNDAN ANG KANILANG PINAKABAGONG SCHEDULE",
                    "profile": "PROFILE nina NAMTANFIL",
                    "clickprofile": "I-click para makita ang kanilang profile",
                    "info": "Para sa pinakabagong impormasyon, sundan ang:",
                    "xaccount": "X Account",
                    "gmmtvofficial": "GMMTV Official Account",
                    "officialfc": "Official Fanclub",
                    "officialTA": "Official Trending Account",
                    "gmmtvshop": "Bumil ng opisyal na merchandise nina NamtanFilm sa",
                    "globalofc": "Global Lunar Support"
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
