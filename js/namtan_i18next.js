// film_i18next.js
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
                    // Personal Info
                    "background": "Background",
                    "born": "Born: July 1, 1996",
                    "height": "Height: 169cm",
                    "agency": "Agency: GMMTV",
                    "profileDetail": "Profile Detail",
                    "personalbrand": "Personal Brand: angelplays.club",
                    
                    // Drama Series
                    // Drama Series
                    "dramaSeries": "Drama Series",
                    "year2016": "Year 2016:",
                    "uprince1": "U-Prince: The Lovely Geologist - Bell - Supporting Role",
                    "uprince2": "U-Prince: The Foxy Pilot - Bell - Guest Role",

                    "year2017": "Year 2017:",
                    "uprince3": "U-Prince: The Playful Comm-Arts - Bell - Guest Role",
                    "puppyhoney2": "Senior Secret Love: Puppy Honey 2 - Friend - Support Role",
                    "uprince4": "U-Prince: The Crazy Artist - Bell - Support Role",
                    "uprince5": "U-Prince: The Badly Politics - Bell - Support Role",
                    "slamdance": "Slam Dance - Woon - Support Role",
                    "uprince6": "U-Prince: The Ambitious Boss - Bell - Support Role",
                    "loser": "My Dear Loser: Edge of 17 - On - Guest Role (Ep. 5, 6)",
                    "lsls": "Love Songs Love Series: Oh - Fon - Main Role",
                    "loser2": "My Dear Loser: Monster Romance - On - Support Role",
                    "loser3": "My Dear Loser: Happy Ever After - On - Guest Role (Ep. 12)",

                    "year2018": "Year 2018:",
                    "wakeup": "Wake Up Ladies - Tata - Main Role",
                    "friendzone": "Friend Zone - Boom - Main Role",

                    "year2019": "Year 2019:",
                    "wolf": "Wolf - Pin - Guest Role (Ep. 8-9)",
                    "lovebeyond": "Love Beyond Frontier - Pat - Main Role",
                    "gift": "A Gift to the People You Hate - \"Bell\" Punnapa Siripattana - Main Role",

                    "year2020": "Year 2020:",
                    "whoareyou": "Who Are You - \"Meen\" Meennara Nunnitisopa | \"Mind\" Manita Euarak - Main Role",
                    "gifted":"The Gifted Graduation - ​\"Nate\" Nayanate Jiraarpa - Guest Role (Ep. 1, 8, 11)",
                    "friendzone2": "Friend Zone 2: Dangerous Area - Boom - Main Role",
                    "wakeup2": "Wake Up Ladies Season 2: Very Complicated - Tata - Main Role",
                    "romanticblue": "Romantic Blue - Pond - Main Role",

                    "year2021": "Year 2021:",
                    "theplayer": "The Player - \"Giwi\" / Gewalin - Main Role",

                    "year2022": "Year 2022:",
                    "drag": "Drag, I Love You - Paranee / \"Parn\" - Support Role",
                    "mongkut": "Mongkut Karma - Ning - Support Role",
                    "mamago": "Mama Gogo - Kiwi - Guest Role (Ep. 12)",
                    "vice": "Vice Versa - Paeng Piyada - Support Role",
                    "goodolddays": "Good Old Days - Kai - Main Role",
                    "donovan": "My Dear Donovan - Pemanee / \"Pam\" - Main Role",

                    "year2023": "Year 2023:",
                    "museum": "Midnight Museum - June - Support Role",
                    "umg": "UMG - Fahsai - Main Role",
                    "enigma": "Enigma - Anya - Guest Role (Ep. 4)",
                    "twilight": "Last Twilight - Phojai - Support Role",
                
                    "year2024": "Year 2024:",
                    "ployyearbook": "Ploy's Yearbook - \"Ploy\" Ploypang - Main Role",
                    "lawless": "Law-less - Phraochanok - Main Role",
                    "plutoseries": "Pluto Series - Ai-oon | Oab-oom - Main Role",

                    "year2025": "Year 2025:",
                    "breakup": "Break Up Service - (TBA) - Guest Role",
                    "girlrules": "Girl Rules Series - Prim - Main Role",
                    "enigma2": "Enigma 2 - Anya - Support Role",
                    
                    // Songs
                    "songs": "Song",
                    "pam": "\"ถ้าเราไม่รู้จักกัน (PAM VERSION)\" (OST My Dear Donovan)",
                    "princesstale": "\"เรื่องเล่าของเจ้าหญิง (A Princess' Tale)\" with Film Rachanun (OST Pluto Series)",
                    "plutosong": "\"พลูโต (Pluto)\" with Film Rachanun (OST Pluto Series)",
                    "yourstory": "\"นิยายเรื่องเธอ (Your Story)\" (OST Pluto Series)",
                    "somewhere": "\"Somewhere only we know\" (OST Pluto Series)",
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
                    "background": "背景",
                    "born": "出生: 1996年7月1日",
                    "height": "身高: 169厘米",
                    "agency": "经纪公司: GMMTV",
                    "profileDetail": "个人资料详情",
                    "personalbrand": "个人品牌：angelplays.club",
                    
                    // Drama Series
                    "dramaSeries": "电视剧",
                    "year2016": "2016年:",
                    "uprince1": "王子学院之呆萌霸王龙 - Bell - 配角",
                    "uprince2": "王子学院之习滑飞行员 - Bell - 特别出演",

                    "year2017": "2017年:",
                    "uprince3": "王子学院之顽皮艺术生 - Bell - 特别出演",
                    "puppyhoney2": "秘恋之我亲爱的狗狗2 - Friend - 配角",
                    "uprince4": "王子学院之嬉皮艺术家 - Bell - 配角",
                    "uprince5": "王子学院之非常政治 - Bell - 配角",
                    "slamdance": "舞动奇迹 - Woon - 配角",
                    "uprince6": "王子学院之雄心领袖 - Bell - 配角",
                    "loser": "我亲爱的失败者 – 十七岁的你我 - On - 特别出演 (Ep. 5, 6)",
                    "lsls": "Love Songs Love Series: Oh - Fon - 主演",
                    "loser2": "我亲爱的失败者 – 怪物浪漫 - On - 配角",
                    "loser3": "我亲爱的失败者 – 永远幸福快乐 - On - 特别出演（Ep. 12）",

                    "year2018": "2018年:",
                    "wakeup": "女人的觉醒 - Tata - 主演",
                    "friendzone": "朋友界限 - Boom - 主演",

                    "year2019": "2019年:",
                    "wolf": "Wolf - Pin - 特别出演 (Ep. 8-9)",
                    "lovebeyond": "爱超越天际 - Pat - 主演",
                    "gift": "死亡礼物 - \"Bell\" Punnapa Siripattana - 主演",

                    "year2020": "2020年:",
                    "whoareyou": "世界上的另一个我 - \"Meen\" Meennara Nunnitisopa | \"Mind\" Manita Euarak - 主演",
                    "gifted":"特长生2 - ​\"Nate\" Nayanate Jiraarpa - 特别出演（第1集、第8集、第11集）",
                    "friendzone2": "朋友界限2：危险领域 - Boom - 主演",
                    "wakeup2": "女人的觉醒：非常复杂 - Tata - 主演",
                    "romanticblue": "浪漫的蓝色 - Pond - 主演",

                    "year2021": "2021年:",
                    "theplayer": "绝命玩家 - \"Giwi\" / Gewalin - 主演",

                    "year2022": "2022年:",
                    "drag": "卡巴莱天使 - Paranee / \"Parn\" - 配角",
                    "mongkut": "罪孽王冠 - Ning - 配角",
                    "mamago": "Mama Gogo - Kiwi - 特别出演 (Ep. 12)",
                    "vice": "反之亦爱 - Paeng Piyada - 配角",
                    "goodolddays": "记忆杂货铺 - Kai - 主演",
                    "donovan": "我亲爱的Donovan - Pemanee / \"Pam\" - 主演",

                    "year2023": "2023年:",
                    "museum": "午夜博物馆 - June - 配角",
                    "umg": "来路不明的神秘女友 - Fahsai - 主演",
                    "enigma": "咒中人 - Anya - 特别出演 (Ep. 4)",
                    "twilight": "不曾遗忘的暮色 - Phojai - 配角",
                
                    "year2024": "2024年:",
                    "ployyearbook": "人生纪念册 - \"Ploy\" Ploypang - 主演",
                    "lawless": "泰版武法律师 - Phraochanok - 主演",
                    "plutoseries": "冥王星之恋 - Ai-oon | Oab-oom - 主演",

                    "year2025": "2025年:",
                    "breakup": "分手服务 - (待公布) - 特别出演",
                    "girlrules": "女生规则：禁爱游戏 - Prim - 主演",
                    "enigma2": "咒中人2 - Anya - 配角",
                    
                    // Songs
                    "songs": "歌曲",
                    "pam": "\"如果我们不曾相识 (PAM 版本)\" (《我亲爱的Donovan》原声带)",
                    "princesstale": "\"公主的故事 (A Princess' Tale)\" with Film Rachanun (《冥王星之恋》原声带)",
                    "plutosong": "\"Pluto\" with Film Rachanun (《冥王星之恋》原声带)",
                    "yourstory": "\"你的故事 (Your Story)\" (《冥王星之恋》原声带)",
                    "somewhere": "\"Somewhere only we know\" (《冥王星之恋》原声带)",
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
                  "background": "経歴",
                  "born": "生年月日：1996年7月1日",
                  "height": "身長：169cm",
                  "agency": "所属：GMMTV",
                  "profileDetail": "プロフィールの詳細",
                  "personalbrand": "Personal Brand: angelplays.club",
                  
                  // Drama Series
                  "dramaSeries": "ドラマ",
                  "year2016": "2016年：",
                  "uprince1": "『U-Prince: The Lovely Geologist』 - Bell（脇役）",
                  "uprince2": "『U-Prince: The Foxy Pilot』 - Bell（ゲスト出演）",

                  "year2017": "2017年：",
                  "uprince3": "『U-Prince: The Playful Comm-Arts』 - Bell（ゲスト出演）",
                  "puppyhoney2": "『Senior Secret Love: Puppy Honey 2』- Friend（脇役）",
                  "uprince4": "『U-Prince: The Crazy Artist』 - Bell（脇役）",
                  "uprince5": "『U-Prince: The Badly Politics』 - Bell（脇役）",
                  "slamdance": "『Slam Dance』- Woon（脇役）",
                  "uprince6": "『U-Prince: The Ambitious Boss』 - Bell（脇役）",
                  "loser": "『My Dear Loser: Edge of 17』- On（第5、6話ゲスト出演）",
                  "lsls": "『Love Songs Love Series: Oh』- Fon（主役）",
                  "loser2": "『My Dear Loser: Monster Romance』- On（脇役）",
                  "loser3": "『My Dear Loser: Happy Ever After』- On（第12話ゲスト出演）",

                  "year2018": "2018年：",
                  "wakeup": "『Wake Up Ladies』- Tata（主役）",
                  "friendzone": "『Friend Zone』- Boom（主役）",

                  "year2019": "2019年：",
                  "wolf": "『Wolf』 - Pin（第8～9話 ゲスト出演）",
                  "lovebeyond": "『Love Beyond Frontier』- Pat（主役）",
                  "gift": "『A Gift to the People You Hate』- \"Bell\" Punnapa Siripattana（主役）",

                  "year2020": "2020年：",
                  "whoareyou": "『Who Are You』 - \"Meen\" Meennara Nunnitisopa | \"Mind\" Manita Euarak（主役）",
                  "gifted":"『The Gifted Graduation』- ​\"Nate\" Nayanate Jiraarpa（第1、8、11話ゲスト出演）",
                  "friendzone2": "『Friend Zone 2: Dangerous Area』- Boom（主役）",
                  "wakeup2": "『Wake Up Ladies Season 2: Very Complicated』- Tata（主役）",
                  "romanticblue": "『Romantic Blue』- Pond（主役）",

                  "year2021": "2021年：",
                  "theplayer": "『The Player』- \"Giwi\" / Gewalin（主役）",

                  "year2022": "2022年：",
                  "drag": "『Drag, I Love You』- Paranee / \"Parn\" （脇役）",
                  "mongkut": "『Mongkut Karma』- Ning（脇役）",
                  "mamago": "『Mama Gogo』- Kiwi（第12話ゲスト出演）",
                  "vice": "『Vice Versa』 - Paeng Piyada（脇役）",
                  "goodolddays": "『Good Old Days』- Kai（主役）",
                  "donovan": "『My Dear Donovan』- Pemanee / \"Pam\"（主役）",

                  "year2023": "2023年：",
                  "museum": "『Midnight Museum』 - June（脇役）",
                  "umg": "『UMG』 - Fahsai（主役）",
                  "enigma": "『Enigma』 - Anya（第4話ゲスト出演）",
                  "twilight": "『Last Twilight』- Phojai（脇役）",
              
                  "year2024": "2024年：",
                  "ployyearbook": "『Ploy's Yearbook』- \"Ploy\" Ploypang（主役）",
                  "lawless": "『Law-less』- Phraochanok（主役）",
                  "plutoseries": "『Pluto Series』- Ai-oon | Oab-oom（主役）",

                  "year2025": "2025年：",
                  "breakup": "『Break Up Service』（未発表）（ゲスト出演）",
                  "girlrules": "『Girl Rules Series』- Prim（主役）",
                  "enigma2": "『Enigma 2』 - Anya（脇役）",
                  
                  // Songs
                  "songs": "曲",
                  "pam": "\"ถ้าเราไม่รู้จักกัน (PAM VERSION)\" （『My Dear Donovan』OST）",
                  "princesstale": "\"เรื่องเล่าของเจ้าหญิง (A Princess' Tale)\" with Film Rachanun（『Pluto Series』OST）",
                  "plutosong": "\"พลูโต (Pluto)\" with Film Rachanun（『Pluto Series』OST）",
                  "yourstory": "\"นิยายเรื่องเธอ (Your Story)\"（『Pluto Series』OST）",
                  "somewhere": "\"Somewhere only we know\" （『Pluto Series』OST）",
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
                  "background": "Background",
                  "born": "Ipinanganak: Hulyo 1, 1996",
                  "height": "Taas: 5'5",
                  "agency": "Kumpanya: GMMTV",
                  "profileDetail": "Mga Detalye ng Profile",
                  "personalbrand": "Personal Brand: angelplays.club",  
                  
                  // Drama Series
                  "dramaSeries": "Seryeng Drama",
                  "year2016": "2016:",
                  "uprince1": "U-Prince: The Lovely Geologist - Bell - Supporting Role",
                  "uprince2": "U-Prince: The Foxy Pilot - Bell - Guest Role",

                  "year2017": "2017:",
                  "uprince3": "U-Prince: The Playful Comm-Arts - Bell - Guest Role",
                  "puppyhoney2": "Senior Secret Love: Puppy Honey 2 - Friend - Support Role",
                  "uprince4": "U-Prince: The Crazy Artist - Bell - Support Role",
                  "uprince5": "U-Prince: The Badly Politics - Bell - Support Role",
                  "slamdance": "Slam Dance - Woon - Support Role",
                  "uprince6": "U-Prince: The Ambitious Boss - Bell - Support Role",
                  "loser": "My Dear Loser: Edge of 17 - On - Guest Role (Ep. 5, 6)",
                  "lsls": "Love Songs Love Series: Oh - Fon - Main Role",
                  "loser2": "My Dear Loser: Monster Romance - On - Support Role",
                  "loser3": "My Dear Loser: Happy Ever After - On - Guest Role (Ep. 12)",

                  "year2018": "2018:",
                  "wakeup": "Wake Up Ladies - Tata - Main Role",
                  "friendzone": "Friend Zone - Boom - Main Role",

                  "year2019": "2019:",
                  "wolf": "Wolf - Pin - Guest Role (Ep. 8-9)",
                  "lovebeyond": "Love Beyond Frontier - Pat - Main Role",
                  "gift": "A Gift to the People You Hate - \"Bell\" Punnapa Siripattana - Main Role",

                  "year2020": "2020:",
                  "whoareyou": "Who Are You - \"Meen\" Meennara Nunnitisopa | \"Mind\" Manita Euarak - Main Role",
                  "gifted":"The Gifted Graduation - ​\"Nate\" Nayanate Jiraarpa - Guest Role (Ep. 1, 8, 11)",
                  "friendzone2": "Friend Zone 2: Dangerous Area - Boom - Main Role",
                  "wakeup2": "Wake Up Ladies Season 2: Very Complicated - Tata - Main Role",
                  "romanticblue": "Romantic Blue - Pond - Main Role",

                  "year2021": "2021:",
                  "theplayer": "The Player - \"Giwi\" / Gewalin - Main Role",

                  "year2022": "2022:",
                  "drag": "Drag, I Love You - Paranee / \"Parn\" - Support Role",
                  "mongkut": "Mongkut Karma - Ning - Support Role",
                  "mamago": "Mama Gogo - Kiwi - Guest Role (Ep. 12)",
                  "vice": "Vice Versa - Paeng Piyada - Support Role",
                  "goodolddays": "Good Old Days - Kai - Main Role",
                  "donovan": "My Dear Donovan - Pemanee / \"Pam\" - Main Role",

                  "year2023": "2023:",
                  "museum": "Midnight Museum - June - Support Role",
                  "umg": "UMG - Fahsai - Main Role",
                  "enigma": "Enigma - Anya - Guest Role (Ep. 4)",
                  "twilight": "Last Twilight - Phojai - Support Role",
              
                  "year2024": "2024:",
                  "ployyearbook": "Ploy's Yearbook - \"Ploy\" Ploypang - Main Role",
                  "lawless": "Law-less - Phraochanok - Main Role",
                  "plutoseries": "Pluto Series - Ai-oon | Oab-oom - Main Role",

                  "year2025": "2025:",
                  "breakup": "Break Up Service - (TBA) - Guest Role",
                  "girlrules": "Girl Rules Series - Prim - Main Role",
                  "enigma2": "Enigma 2 - Anya - Support Role",
                  
                  // Songs
                  "songs": "Kanta",
                  "pam": "\"ถ้าเราไม่รู้จักกัน (PAM VERSION)\" (OST My Dear Donovan)",
                  "princesstale": "\"เรื่องเล่าของเจ้าหญิง (A Princess' Tale)\" with Film Rachanun (OST Pluto Series)",
                  "plutosong": "\"พลูโต (Pluto)\" with Film Rachanun (OST Pluto Series)",
                  "yourstory": "\"นิยายเรื่องเธอ (Your Story)\" (OST Pluto Series)",
                  "somewhere": "\"Somewhere only we know\" (OST Pluto Series)",
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
