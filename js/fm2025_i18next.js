// Initialize i18next when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
// awards2025_i18next.js
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
        "titlehz1": "Dream Vacation-Film Fan Appreciation Party",
        "ticketsalesph": "Ticket sales: May 14, 2025,12:00PM at wishusluck.helixpay.ph"
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
        "titlehz1": "梦幻假期-Film粉丝答谢会",
        "ticketsalesph": "票务销售： 2025年5月14日, 中午12:00，在wishusluck.helixpay.ph"
        
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
        "followTitle": "ファンミーティング",
        "description": "国内外ファンミーティング",
        "year": "（2025年）",
        "ticketsales": "チケット販売開始：2025年4月19日 午前10:00（バンコク時間） ThaiTicketMajor にて",
        "getticket": "チケット購入はこちら → ThaiTicketMajor", 
        "getticket2": "チケット購入はこちら → ticket board",
        "venue": "会場：The Venetian Theatre（ザ・ヴェネチアン・マカオ）",
        "ticketsales2": "チケット販売開始：2025年3月19日 15:00（Cotaiticketing・Damaiにて）",
        "venue2": "会場：Straits Culture and Art Center オペラハウス",
        "ticketsales4": "チケット販売開始：2025年4月2日 18:00（GMT+8）秀動ShowStartにて",
        "venue3": "会場：ベンタイン劇場（ホーチミン市）",
        "ticketsales5": "チケット販売開始：2025年3月8日 12:00（Ticketboxにて）",
        "description1": "全世界ライブ配信：TTM LIVE にて",
        "ticketsales6": "チケット販売開始：2025年2月9日 12:30（バンコク時間）",
        "getticket4": "チケット購入はこちら",
        "ticketsales3": "チケット販売開始：2025年4月2日 19:00（GMT+8）秀動ShowStartにて",
        "venuehz": "会場：杭州市（浙江省）",
        "ticketsaleshz": "チケット販売開始：2025年5月1日（木）12:00（Xiaomang APPにて）",
        "ticketsaleshz1": "チケット販売開始：2025年5月2日（金）12:00（Xiaomang APPにて）",
        "titlehz": "Sweet Journey - Namtan ファン感謝イベント",
        "titlehz1": "Dream Vacation - Film ファン感謝イベント"
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
        "followTitle": "FAN MEETING",
        "description": "Local & Overseas fan meeting",
        "year": "(Year 2025)",
        "ticketsales": "Bentahan ng Ticket: 19 ABRIL 2025, 10 AM (BKK Time) sa ThaiTicketMajor",
        "getticket": "Bumili ng ticket sa ThaiTicketMajor", 
        "getticket2": "Bumili ng ticket sa ticket board",
        "venue": "The Venetian Theatre, The Venetian Macao",
        "ticketsales2": "Bentahan ng Ticket: 3:00PM, Marso 19, 2025 sa Cotaiticketing at Damai",
        "venue2": "Straits Culture and Art Center Opera House",
        "ticketsales4": "Bentahan ng Ticket: 6:00PM(GMT+8), Abril 2, 2025 sa 秀动ShowStart",
        "venue3": "BEN THANH THEATER, HO CHI MINH CITY",
        "ticketsales5": "Simula ng Bentahan ng Ticket: 12:00, 08/03/2025 sa Ticketbox",
        "description1": "Worldwide live streaming sa TTM LIVE",
        "ticketsales6": "Bentahan ng Ticket: PEBRERO 9, 2025, 12:30 PM (BKK Time)",
        "getticket4": "Bumili ng ticket dito",
        "ticketsales3": "Bentahan ng Ticket: 7:00PM(GMT+8), Abril 2, 2025 sa 秀动ShowStart",
        "venuehz": "Hangzhou, Zhejiang Province",
        "ticketsaleshz": "Bentahan ng Ticket: Huwebes, Mayo 1, 2025,12:00 sa Xiaomang APP",
        "ticketsaleshz1": "Bentahan ng Ticket: Biyernes, Mayo 2, 2025, 12:00 sa Xiaomang APP",
        "titlehz": "Sweet Journey - Namtan Fan Appreciation Party",
        "titlehz1": "Dream Vacation-Film Fan Appreciation Party"
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
            "followTitle": "FAN MEETING",
            "description": "fan meeting locali e oltre oceano ",
            "year": "(Anno 2025)",
            "ticketsales": "biglietti in vendita:19 aprile 2025 alle 10:00(orario di BKK) al ThaiTicketMajor",
            "getticket": "compra il tuo biglietto al ThaiThicketMajor", 
            "getticket2": "prendi il tuo biglietto alla ticket board ",
            "venue": "il Venetian Theatre,il Venetian Macao",
            "ticketsales2": "biglietti in vendita:dalle 15:00 ,il 19 Marzo 2025 su Cotaiticketing e Damai",
            "venue2": "Straits Culture and Art Center Opera House",
            "ticketsales4": "biglietti in vendita:dalle 18:00(GMT+8),2Aprile 2025 su 秀动ShowStart",
            "venue3": "Ben Thanh Theater,citta' di HO CHI MINH ",
            "ticketsales5": "biglietti in vendita dalle 12:00 dell' 8 Marzo 2025 su Ticketbox",
            "description1": "streaming della live mondiale su TTM LIVE",
            "ticketsales6": "biglietti in vendita:il 9Febbraio 2025 alle 00:30 (BKK)",
            "getticket4": "acquista i tuoi biglietti qui",
            "ticketsales3": "biglietti in vendita:dalle 19(GMT+8) il 2 aprile 2025 su 秀动ShowStart",
            "venuehz": "Hangzhou, Provincia di Zhejiang ",
            "ticketsaleshz": "biglietti in vendita:giovedì 1 Maggio 2025 alle 12:00 sull' App xiaomang",
            "ticketsaleshz1": "biglietti in vendita:venerdì 2 Maggio 2025 alle 12:00 sull' app Xiaomang ",
            "titlehz": "Sweet journey-festa di Apprezzamento per Namtan ",
            "titlehz1": "Dream Vacation-festa di Apprezzamento per Film"
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
