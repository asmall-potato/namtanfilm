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
          "followTitle": "Vote for NamtanFilm",
          "nominee1": "Nominee: <b>Y5 - Namtan Film</b> (Couple Of The Year)",
          "way": "SMS: Type Y5 and send it to 4689191 (6 baht per vote)",
          "deadline1": "Voting Deadline: May 21, 2025, at 23:59",
          "votedesc1": "Voting Breakdown: </br>1. 50% from SMS votes </br>2. 50% from votes on website",
          "votehere": "Vote Here",
          "nominee2": "Nominee: Namtan Tipnaree , Film Rachanun",
          "deadline2": "Voting Deadline: May 22, 2025 until 3PM (BKK)",
          "vote3": "Nominations for BANGKOK PRIDE AWARDS 2025",
          "deadline3": "Nomination Deadline: April 29, 2025",
          "nominatehere": "Nominate Here"

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
          "followTitle": "NamtanFilm 入围奖项投票",
          "nominee1": "入围: <b>Y5 - Namtan Film</b> (年度最佳CP奖)",
          "way": "短信: 输入 Y5 并发送至 4689191 (每次 6 泰铢)",
          "deadline1": "投票截止日期: 2025年5月21日, 晚上 11 点 59 分",
          "votedesc1": "投票规则和评分标准: </br>1. 50% 来自短信 </br>2. 50% 来自网上投票",
          "votehere": "点击投票",
          "nominee2": "入围: Namtan Tipnaree , Film Rachanun",
          "deadline2": "投票截止日期: 2025年5月22日 下午3时正（曼谷时间）",
          "vote3": "BANGKOK PRIDE AWARDS 2025提名",
          "deadline3": "提名截止日期: 2025年4月29日",
          "nominatehere": "点击提名"

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
          "followTitle": "NAMTANFILM 投票キャンペーン",
          "nominee1": "ノミネート: <b>Y5 - Namtan Film</b>  (年間最優秀カップル賞)",
          "way": "SMS投票:「Y5」と入力し 4689191 へ送信（1票6バーツ）",
          "deadline1": "締切: 2025年5月21日 23:59",
          "votedesc1": "集計比率: </br>1. SMS投票: 50% </br>2. ウェブサイト投票: 50%",
          "votehere": "投票はこちら",
          "nominee2": "ノミネート:Namtan Tipnaree , Film Rachanun",
          "deadline2": "締切: 2025年5月22日",
          
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
          "followTitle": "Bumoto Para Kina NamtanFilm",
          "nominee1": "Nominado: <b>Y5 - Namtan Film</b> (Couple Of The Year)",
          "way": "SMS: I-type Y5 at i-send sa 4689191 (1 boto ay 6 baht)",
          "deadline1": "Deadline ng Pagboto: May 21, 2025, 23:59",
          "votedesc1": "Breakdown ng voting: </br>1. 50% mula SMS vote </br>2. 50% mula sa boto sa website",
          "votehere": "Bumoto Dito",
          "nominee2": "Nominado: Namtan Tipnaree , Film Rachanun",
          "deadline2": "Deadline ng Pagboto: Mayo 22, 2025",
    
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
