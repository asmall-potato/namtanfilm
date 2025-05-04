// film_i18next.js
document.addEventListener('DOMContentLoaded', function() {
    // Get language from sessionStorage (clears when browser closes)
  const savedLang = sessionStorage.getItem('selectedLanguage') || 'en';
    i18next.init({
        lng: savedLang,
        debug: false,
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
            
                    // Personal Info
                    "filmName": "FILM RACHANUN",
                    "background": "Background",
                    "born": "Born: July 14, 2000",
                    "height": "Height: 164cm",
                    "agency": "Agency: GMMTV",
                    "profileDetail": "Profile Detail",
                    
                    // Drama Series
                    "dramaSeries": "Drama Series",
                    "year2019": "Year 2019:",
                    "darkBlueKiss": "Dark Blue Kiss - Namwan - Guest Role (Ep. 12)",
                    "year2020": "Year 2020:",
                    "angelBesideMe": "Angel Beside Me - Bitoey - Guest Role (Ep. 1-6)",
                    "2gether":"​2gether - Earn - Support Role",
                    "imteemetoo": "I'm Tee, Me Too - Looksorn - Guest Role (Ep, 2, 5, 8)",
                    "year2021": "Year 2021:",
                    "thedebut": "The Debut - Farn - Support Role",
                    "thecomments": "The Comments - Theerata / 'Toon' - Main Role",
                    "notme": "Not Me - Eugene - Support Role",
                    "year2022": "Year 2022:",
                    "the3gentlebros": "The Three GentleBros - Nareeya / 'View' - Main Role",
                    "year2023": "Year 2023:",
                    "dirtylaundry": "Dirty Laundry - Neon - Main Role",
                    "doublesavage": "Double Savage - 'Rung' Rungtawan - Main Role",
                    "homeschool": "Home School - Maki - Main Role",
                    "wednesdayclub": "Wednesday Club - Tam - Main Role",
                    "lasttwilight": "Last Twilight - Gee - Support Role",
                    "year2024": "Year 2024:",
                    "myprecious": "My Precious - Lin - Main Role",
                    "ployyearbook": "Ploy's Yearbook - 'Ploy' Pandara - Main Role",
                    "pluto": "Pluto Series - 'May' Metavee - Main Role",
                    "year2025": "Year 2025:",
                    "girlrules": "Girl Rules Series - Bambi - Main Role",
                    
                    //movie
                    "movie": "Movie",
                    "2gethermovie": "2gether: The Movie - Earn - Support Role",
                    "mypreciousmovie": "My Precious - Lin - Main Role",

                    // Songs
                    "songs": "Song",
                    "firstLove": "\"รักแรก (First Love) (หลิน Version)\" (OST My Precious The Series)",
                    "princessTale": "\"เรื่องเล่าของเจ้าหญิง (A Princess' Tale)\" with Namtan Tipnaree (OST Pluto Series)",
                    "plutoSong": "\"พลูโต (Pluto)\" with Namtan Tipnaree (OST Pluto Series)",
                    "linger": "\"รอนะ (Linger)\" (OST Pluto Series)"
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

                    // Personal Info
                    "filmName": "FILM RACHANUN",
                    "background": "背景",
                    "born": "出生: 2000年7月14日",
                    "height": "身高: 164厘米",
                    "agency": "经纪公司: GMMTV",
                    "profileDetail": "个人资料详情",
                    
                    "dramaSeries": "电视剧",
                    "year2019": "2019年：",
                    "darkBlueKiss": "深蓝之吻 - Namwan - 客串（第12集）",
                    "year2020": "2020年：",
                    "angelBesideMe": "天使在身边 - Bitoey - 客串（第1-6集）",
                    "2gether": "假偶天成 - Earn - 配角",
                    "imteemetoo": "I'm Tee, Me Too - Looksorn - 客串（第2, 5, 8集）",
                    "year2021": "2021年：",
                    "thedebut": "偶像的代价 - Farn - 配角",
                    "thecomments": "键盘侠 - Theerata（Toon） - 主演",
                    "notme": "他不是我 - Eugene - 配角",
                    "year2022": "2022年：",
                    "the3gentlebros": "绅士三兄弟 - Nareeya（View） - 主演",
                    "year2023": "2023年：",
                    "dirtylaundry": "午夜系列之脏脏洗衣店 - Neon - 主演",
                    "doublesavage": "骨肉相残 - 'Rung' Rungtawan - 主演",
                    "homeschool": "家庭学校 - Maki - 主演",
                    "wednesdayclub": "周三俱乐部 - Tam - 主演",
                    "lasttwilight": "不曾遗忘的暮色 - Gee - 配角",
                    "year2024": "2024年：",
                    "myprecious": "那些年，我们一起追的女孩 - Lin - 主演",
                    "ployyearbook": "人生纪念册 - 'Ploy' Pandara - 主演",
                    "pluto": "冥王星之恋 - 'May' Metavee - 主演",
                    "year2025": "2025年：",
                    "girlrules": "女生规则：禁爱游戏 - Bambi - 主演",

                    //电影
                    "movie": "电影",
                    "2gethermovie": "只因我们天生一对 - Earn - 配角",
                    "mypreciousmovie": "那些年，我们一起追的女孩 - Lin - 主演",
                    
                    // Songs
                    "songs": "歌曲",
                    "firstLove": "\"รักแรก (First Love) (หลิน Version)\" (《My Precious》原声带)",
                    "princessTale": "\"เรื่องเล่าของเจ้าหญิง (A Princess' Tale)\" 与Namtan Tipnaree (《Pluto》原声带)",
                    "plutoSong": "\"พลูโต (Pluto)\" 与Namtan Tipnaree (《Pluto》原声带)",
                    "linger": "\"รอนะ (Linger)\" (《Pluto》原声带)"
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
                  // Personal Info
                  "filmName": "FILM RACHANUN",
                  "background": "経歴",
                  "born": "生年月日：2000年7月14日",
                  "height": "身長：164cm",
                  "agency": "所属：GMMTV",
                  "profileDetail": "プロフィールの詳細",
                  
                  "dramaSeries": "ドラマ",
                  "year2019": "2019年：",
                  "darkBlueKiss": "『Dark Blue Kiss』 - Namwan（第12話 ゲスト出演）",
                  "year2020": "2020年：",
                  "angelBesideMe": "『Angel Beside Me』 - Bitoey（第1～6話 ゲスト出演）",
                  "2gether": "『2gether』 - Earn（脇役）",
                  "imteemetoo": "『I'm Tee, Me Too』 - Looksorn（第2、5、8話ゲスト出演）",
                  "year2021": "2021年：",
                  "thedebut": "『The Debut』 - Farn（脇役）",
                  "thecomments": "『The Comments』 - Theerata / 「Toon」（主役）",
                  "notme": "『Not Me』 - Eugene（脇役）",
                  "year2022": "2022年：",
                  "the3gentlebros": "『The Three GentleBros』 - Nareeya / 「View」（主役）",
                  "year2023": "2023年：",
                  "dirtylaundry": "『Dirty Laundry』 - Neon（主役）",
                  "doublesavage": "『Double Savage』 - 「Rung」Rungtawan（主役）",
                  "homeschool": "『Home School』 - Maki（主役）",
                  "wednesdayclub": "『Wednesday Club』 - Tam（主役）",
                  "lasttwilight": "『Last Twilight』 - Gee（脇役）",
                  "year2024": "2024年：",
                  "myprecious": "『My Precious』 - Lin（主役）",
                  "ployyearbook": "『Ploy's Yearbook』 - 「Ploy」Pandara（主役）",
                  "pluto": "『Pluto Series』 - 「May」Metavee（主役）",
                  "year2025": "2025年：",
                  "girlrules": "『Girl Rules Series』 - Bambi（主役）",

                  //电影
                  "movie": "映画",
                  "2gethermovie": "『2gether: The Movie』 - Earn（脇役）",
                  "mypreciousmovie": "『My Precious』 - Lin（主役）",
                  
                  // Songs
                  "songs": "曲",
                  "firstLove": " 「รักแรก (First Love) (หลิน Version)」 （『My Precious The Series』OST）",
                  "princessTale": "「เรื่องเล่าของเจ้าหญิง (A Princess' Tale)」 with Namtan Tipnaree（『Pluto Series』OST）",
                  "plutoSong": "「พลูโต (Pluto)」 with Namtan Tipnaree（『Pluto Series』OST）",
                  "linger": "「รอนะ (Linger)」（『Pluto Series』OST）"
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
                  // Personal Info
                  "filmName": "FILM RACHANUN",
                  "background": "Background",
                  "born": "Pinanganak: Hulyo 24, 2000",
                  "height": "Taas: 5\"3",
                  "agency": "Kumpanya: GMMTV",
                  "profileDetail": "Detalye ng Profile",
                  
                  // Drama Series
                  "dramaSeries": "Seryeng Drama",
                  "year2019": "2019:",
                  "darkBlueKiss": "Dark Blue Kiss - Namwan - Guest Role (Ep. 12)",
                  "year2020": "2020:",
                  "angelBesideMe": "Angel Beside Me - Bitoey - Guest Role (Ep. 1-6)",
                  "2gether":"​2gether - Earn - Support Role",
                  "imteemetoo": "I'm Tee, Me Too - Looksorn - Guest Role (Ep, 2, 5, 8)",
                  "year2021": "2021:",
                  "thedebut": "The Debut - Farn - Support Role",
                  "thecomments": "The Comments - Theerata / 'Toon' - Main Role",
                  "notme": "Not Me - Eugene - Support Role",
                  "year2022": "2022:",
                  "the3gentlebros": "The Three GentleBros - Nareeya / 'View' - Main Role",
                  "year2023": "2023:",
                  "dirtylaundry": "Dirty Laundry - Neon - Main Role",
                  "doublesavage": "Double Savage - 'Rung' Rungtawan - Main Role",
                  "homeschool": "Home School - Maki - Main Role",
                  "wednesdayclub": "Wednesday Club - Tam - Main Role",
                  "lasttwilight": "Last Twilight - Gee - Support Role",
                  "year2024": "2024:",
                  "myprecious": "My Precious - Lin - Main Role",
                  "ployyearbook": "Ploy's Yearbook - 'Ploy' Pandara - Main Role",
                  "pluto": "Pluto Series - 'May' Metavee - Main Role",
                  "year2025": "2025:",
                  "girlrules": "Girl Rules Series - Bambi - Main Role",
                  
                  //movie
                  "movie": "Pelikula",
                  "2gethermovie": "2gether: The Movie - Earn - Support Role",
                  "mypreciousmovie": "My Precious - Lin - Main Role",

                  // Songs
                  "songs": "Kanta",
                  "firstLove": "\"รักแรก (First Love) (หลิน Version)\" (OST My Precious The Series)",
                  "princessTale": "\"เรื่องเล่าของเจ้าหญิง (A Princess' Tale)\" with Namtan Tipnaree (OST Pluto Series)",
                  "plutoSong": "\"พลูโต (Pluto)\" with Namtan Tipnaree (OST Pluto Series)",
                  "linger": "\"รอนะ (Linger)\" (OST Pluto Series)"
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
                  // Personal Info
                  "filmName": "FILM RACHANUN",
                  "background": "Background",
                  "born": "Nata:14 Luglio,2000",
                  "height": "Altezza:164cm",
                  "agency": "Agencia:GMMTV ",
                  "profileDetail": "Dettagli profilo ",
                  
                  // Drama Series
                  "dramaSeries": "serie Drammatiche",
                  "year2019": "Anno 2019:",
                  "darkBlueKiss": "Dark Blue Kiss - Namwan - ruolo si supporto (ep 12)",
                  "year2020": "Anno 2020:",
                  "angelBesideMe": "Angel Beside Me - Bitoey - ruolo di supporto (ep 1-6)",
                  "2gether":"​2gether - Earn - ruolo di supporto ",
                  "imteemetoo": "I'm Tee, Me Too - Looksorn - ruolo di supporto (Ep, 2, 5, 8)",
                  "year2021": "Anno 2021:",
                  "thedebut": "The Debut - Farn -  ruolo di supporto ",
                  "thecomments": "The Comments - Theerata / 'Toon' - ruolo principale ",
                  "notme": "Not Me - Eugene - ruolo di supporto",
                  "year2022": "Anno 2022:",
                  "the3gentlebros": "The Three GentleBros - Nareeya / 'View' - ruolo principale ",
                  "year2023": "Anno 2023:",
                  "dirtylaundry": "Dirty Laundry - Neon - ruolo principale ",
                  "doublesavage": "Double Savage - 'Rung' Rungtawan - ruolo principale ",
                  "homeschool": "Home School - Maki - ruolo principale ",
                  "wednesdayclub": "Wednesday Club - Tam - ruolo principale ",
                  "lasttwilight": "Last Twilight - Gee - ruolo di supporto ",
                  "year2024": "Anno 2024:",
                  "myprecious": "My Precious - Lin - ruolo principale ",
                  "ployyearbook": "Ploy's Yearbook - 'Ploy' Pandara - ruolo principale ",
                  "pluto": "Pluto Series - 'May' Metavee - ruolo principale ",
                  "year2025": "Anno 2025:",
                  "girlrules": "Girl Rules Series - Bambi - ruolo principale ",
                  
                  //movie
                  "movie": "Film",
                  "2gethermovie": "2gether: The Movie - Earn - ruolo di supporto",
                  "mypreciousmovie": "My Precious - Lin - ruolo principale ",

                  // Songs
                  "songs": "canzoni",
                  "firstLove": "\"รักแรก (First Love) (หลิน Version)\" (OST My Precious la serie)",
                  "princessTale": "\"เรื่องเล่าของเจ้าหญิง (A Princess' Tale)\" with Namtan Tipnaree (OST Pluto la serie)",
                  "plutoSong": "\"พลูโต (Pluto)\" with Namtan Tipnaree (OST Pluto la serie)",
                  "linger": "\"รอนะ (Linger)\" (OST Pluto la serie)"
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
