// ==============================================================================
// 🗺️ 典藏古地图库数据源 (Historic Map Appreciation Data)
// 包含中英双语国际化支持 (Bilingual Support: Chinese & English)
// ==============================================================================

const i18n = {
    zh: {
        siteSubtitle: "East-West Cartographic Heritage · 东西方测绘遗产",
        siteTitle: "古 地 图 赏 析",
        siteTagline: "探索历史的印记 · 重温古代世界的样貌 · 考据东西文明的交汇",
        galleryBadge: "传世舆图 · 宏篇巨帙",
        galleryTitle: "典藏古地图库",
        galleryDesc: "收录十六至十七世纪东西方交流时期的极具学术、艺术与科学价值的高清历史地图，依托金字塔瓦片技术提供毫发毕现的超高清微距观览体验。",
        backToGallery: "返回地图全录",
        quickGuideBadge: "快速导览",
        quickGuideTip: "点击直飞探索区域：",
        fullscreenEnter: "全屏沉浸浏览",
        fullscreenExit: "退出全屏 (ESC)",
        fullscreenBtnFooter: "⛶ 全屏显示",
        fullscreenBtnFooterExit: "✕ 退出全屏",
        fullscreenTip: "💡 提示：支持鼠标滚轮平滑缩放、自由拖拽。按键盘 <b>F</b> 键可快速切换全屏沉浸模式。",
        resetView: "重置全景视口",
        overviewBadge: "地图概述与时代坐标",
        overviewCol1Title: "创制背景",
        overviewCol2Title: "投影与格局",
        overviewCol3Title: "文献与译名地位",
        focalBadge: "图文细读",
        focalTitle: "核心区域深度赏析",
        focalSubtitle: "点击卡片右上角或按钮，可联动主地图飞跃至对应原图细部",
        locateOnMap: "在图中定位",
        clickToFlyHint: "📍 点击局部切片，平滑飞行至该区域",
        locateViewBtn: "在地图中定位查看",
        exploreMapBtn: "进入深度赏析 →",
        clickToExplore: "点击开启探索",
        modernTag: "现代：",
        etymMeaningTag: "词源涵义：",
        footerTagline: "古地图赏析 · 探索历史的每一片疆域",
        footerCopyText: "基于 Leaflet 瓦片金字塔深度图层构建 · 开源托管于 GitHub Pages",
        cardExploreBtn: "进入深度赏析"
    },
    en: {
        siteSubtitle: "East-West Cartographic Heritage · Ancient Masterpieces",
        siteTitle: "HISTORIC MAP APPRECIATION",
        siteTagline: "Exploring footprints of history · Rediscovering ancient worldviews · Tracing East-West encounters",
        galleryBadge: "Monumental Atlases · Living Cartography",
        galleryTitle: "Cartographic Gallery",
        galleryDesc: "Featuring rare 16th-17th century masterworks of East-West cultural exchange. Powered by deep-zoom tile pyramid technology for ultra-high-resolution, macroscopic exploration.",
        backToGallery: "Back to Gallery",
        quickGuideBadge: "Quick Guide",
        quickGuideTip: "Click to navigate to focal area:",
        fullscreenEnter: "Fullscreen (F)",
        fullscreenExit: "Exit Fullscreen (ESC)",
        fullscreenBtnFooter: "⛶ Fullscreen",
        fullscreenBtnFooterExit: "✕ Exit Fullscreen",
        fullscreenTip: "💡 Tip: Scroll mouse wheel to zoom, drag to pan. Press <b>F</b> to toggle fullscreen mode.",
        resetView: "Reset View",
        overviewBadge: "Overview & Historical Milestones",
        overviewCol1Title: "Historical Context",
        overviewCol2Title: "Projection & Spatial Layout",
        overviewCol3Title: "Scholarly Significance",
        focalBadge: "Close Reading",
        focalTitle: "Key Focal Areas & Detailed Analysis",
        focalSubtitle: "Click card button or preview snippet to fly directly to this focal area on the map",
        locateOnMap: "Locate on Map",
        clickToFlyHint: "📍 Click snippet to fly smoothly to this area",
        locateViewBtn: "View Location on Map",
        exploreMapBtn: "Explore Map →",
        clickToExplore: "Click to Explore",
        modernTag: "Modern: ",
        etymMeaningTag: "Etymological Meaning: ",
        footerTagline: "Historic Map Appreciation · Exploring Every Realm of History",
        footerCopyText: "Powered by Leaflet deep-zoom tile pyramid · Open-source on GitHub Pages",
        cardExploreBtn: "Explore Map"
    }
};

const mapsDataZh = [
    {
        id: "kunyu",
        title: "坤舆万国全图",
        subtitle: "明万历三十年（1602年）北京刻本 · 彭纳投影",
        author: "利玛窦 (Matteo Ricci) & 李之藻 携手创制",
        year: "1602年（明万历三十年）",
        image: "Kunyu_Wanguo_Quantu_thumb.jpg",
        tiles: {
            url: "tiles/kunyu/{z}/{x}/{y}.jpg",
            width: 11726,
            height: 5266,
            maxZoom: 6
        },
        shortDescription: "东亚现存最早、标注最详尽的中文世界全图。融汇中西天学与地学，奠定现代中文世界地理译名体系。",
        
        cardTag: "彭纳投影 · 六条屏刻本",
        badge: "深度解说版 · 1602刻本",
        quickNavTargets: [
            { label: "🇯🇵 日本战国茶道", x: 48.0, y: 34.0, z: 5, desc: "权常在强臣 · 只重金银及古窑器" },
            { label: "🇧🇷 巴西与苏木", x: 90.2, y: 56.3, z: 5, desc: "“此言苏木” · 早期词源学实录" },
            { label: "🪶 北美部族", x: 75.0, y: 29.5, z: 5, desc: "甘那陀村落与东部林地部族" },
            { label: "🌋 太平洋别山", x: 65.0, y: 38.0, z: 5, desc: "西语 Volcán 对音借字 · 赤色火山岛" },
            { label: "🏯 大明京省一统", x: 42.0, y: 36.0, z: 4, desc: "大明居世界中心 · 两京十三布政使司" },
            { label: "🧭 极南假说", x: 50.0, y: 88.0, z: 4, desc: "墨瓦蜡泥加 · 南北半球平衡假说" },
            { label: "🌌 九重天图(右上)", x: 88.5, y: 12.0, z: 5, desc: "右上角 · 托勒密地心说九重宇宙模型" },
            { label: "🌐 北极半球与日蚀(左上)", x: 12.0, y: 14.0, z: 5, desc: "左上角 · 赤道北半地球之图与日月蚀" },
            { label: "🌐 南极半球与节气(左下)", x: 12.0, y: 84.0, z: 5, desc: "左下角 · 赤道南半地球之图与黄赤交角" },
            { label: "🔭 天地仪(右下)", x: 86.0, y: 84.0, z: 5, desc: "右下角 · 浑天仪演象与利玛窦自撰跋文" }
        ],
        scientificSection: {
            badge: "边角彩蛋 · 天象测绘",
            title: "科学附图与测绘工具",
            desc: "利玛窦在整幅地图四角及边缘空白处，精细绘制了托勒密地心说天象、航海求纬术与两极极射投影图，构筑起一部微缩的明末中西天文学与几何大地测量百科。"
        },
        specialFeaturesBadge: "博物图谱",
        specialFeaturesTitle: "神秘海怪与陆地珍禽异兽",
        etymologySection: {
            badge: "词源解密",
            title: "地名密码与音译考据指南",
            subtitle: "利玛窦首创大量沿用至今的现代地理词汇"
        },
        overview: {
            background: "刊印于明万历三十年（1602年），由意大利耶稣会士利玛窦（Matteo Ricci）与明朝太仆寺少卿、工部员外郎李之藻等学者在北京合作刊印。全图共六幅条屏拼合，总幅纵约1.68米，横约3.80米。",
            projection: "采用彭纳投影（伪圆锥投影变形），打破了西方传统以大西洋为中心的视角，特意将中国置于世界地图中央，兼顾了中国士大夫的“天下观”与欧洲大航海时代的最新测绘成果。",
            legacy: "东亚现存最早、标注最为详尽的中文世界全图，开创了大量现代中文地理译名（如大西洋、太平洋、地中海、罗马、尼罗河、赤道、地球等），是明末东西方文明碰撞与科学交汇的历史丰碑。"
        },

        // 核心区域图文细读
        focalAreas: [
            {
                id: "japan",
                name: "日本：战国终局与茶道审美",
                subtitle: "“权常在强臣”与千利休茶道古窑器",
                badge: "东亚 · 扶桑",
                coords: { x: 48.0, y: 34.0, zoom: 5 },
                bgPosition: "48.0% 34.0%",
                bgSize: "550%",
                quote: "日本乃海內一大島，長三千二百里，寬不過六百里。今有六十六州，各有國主，俗尚強力，雖有總王而權常在強臣。其民多習武少習文，土產銀、鐵、好漆。其王生子三十，以王讓之。其國大抵不重寶石，只重金銀及古窑器。",
                sections: [
                    {
                        label: "政局写照",
                        text: "直击战国末期至德川幕府初期的政治现实——天皇虚位（“虽有总王”），实权掌握在大名与征夷大将军手中（“权常在强臣”）。"
                    },
                    {
                        label: "经济与物产",
                        text: "明末石见银山等银矿开采鼎盛，是东亚白银贸易枢纽，故称“土产银、铁”，是沟通明清朝贡与南蛮贸易的物质支柱。"
                    },
                    {
                        label: "文化密码",
                        text: "“不重宝石，只重金银及古窑器”精准捕捉了日本安土桃山时期的茶道文化。织田信长、千利休时代将高丽茶碗、唐物及备前、濑户等古窑器视为至宝，其价值往往可抵一城。"
                    }
                ]
            },
            {
                id: "brazil",
                name: "巴西（伯西尔）：从红木染料到食人传说",
                subtitle: "“此言苏木” · 早期词源学实录与亚马逊原住民",
                badge: "南美 · 亚马逊",
                coords: { x: 90.2, y: 56.3, zoom: 5 },
                bgPosition: "90.2% 56.3%",
                bgSize: "500%",
                quote: "伯西兒，此言蘇木。此國人不作房屋，開地為穴以居，好食人肉，但食男不食女，以鳥毛織衣。",
                sections: [
                    {
                        label: "名字溯源",
                        text: "彼时并无现代主权国家，而是葡萄牙的殖民大区。葡萄牙语 Brasil 本义即指苏木红木（pau-brasil，其树心可提取如炭火般的鲜红染料）。利玛窦敏锐注记“此言苏木”，是世界词源学在中文记载里的极早范例。"
                    },
                    {
                        label: "异域想象",
                        text: "描述穴居、鸟羽织衣及食人习俗，反映了大航海早期探险家对亚马逊流域原住民图皮南巴人（Tupinambá）祭祀性食人习俗的夸张传闻。"
                    }
                ]
            },
            {
                id: "north_america",
                name: "北美东部：原住民部落的“国”之定义",
                subtitle: "“甘那陀”村落 · 詹姆斯敦建立前的林地部族",
                badge: "北美 · 圣劳伦斯",
                coords: { x: 75.0, y: 29.5, zoom: 5 },
                bgPosition: "75.0% 29.5%",
                bgSize: "500%",
                quote: "自墨西加地至此地，其名通名曰甘那陀。兒然各國有本名，其人醇善異方人，至其國者雅能厚待。大約俗以漁獵為業，以魚肉為糧，其內餘人平日相殺戰鬬，惟食蛇蝪、蜘蛛等蟲。",
                sections: [
                    {
                        label: "部落即“国”",
                        text: "此时英国尚未建立詹姆斯敦殖民地（1607年）。图上的“国”并非现代主权国家，而是原住民部族：加拿大（Canada）源于圣劳伦斯易洛魁语 kanata（村落）；摩勿加国（Mohawk，莫霍克）、沙尾乃国（Shawnee，肖尼）、亚伯尔耕国（Apalachee，阿帕拉契）皆为东部林地原住民部族联盟。"
                    },
                    {
                        label: "汉译习惯",
                        text: "利玛窦借用明朝文人习惯，将拉丁文图上的 Provincia 或聚落自称通通赋予“某某国”的形式，形成一派万国来朝的天下视野。"
                    }
                ]
            },
            {
                id: "volcano_island",
                name: "太平洋“别山”：火山而非夏威夷",
                subtitle: "西语 Volcán 对音借字 · 下加利福尼亚西南的喷火之岛",
                badge: "东太平洋 · 索科罗火山",
                coords: { x: 65.0, y: 38.0, zoom: 5 },
                bgPosition: "65.0% 38.0%",
                bgSize: "550%",
                quote: "（位于墨西哥下加利福尼亚半岛西南海域大东洋中，紧邻红色与黄色火山小岛，画有赤红烈焰。）",
                sections: [
                    {
                        label: "方位辨析",
                        text: "位于墨西哥下加利福尼亚半岛西南海域，紧邻红色与黄色小岛。后世曾有学者误将其联想为夏威夷群岛。"
                    },
                    {
                        label: "考证结论",
                        text: "绝非夏威夷（夏威夷群岛至1778年才被英国库克船长发现，相距近4000公里）。“别山”是西班牙语 Volcán（火山）的对音借字（在闽粤对音中格外贴切），对应墨西哥西海岸外的雷维利亚希赫多群岛（Revillagigedo Islands）中的活火山岛（如索科罗岛），图中以红色填色直观表现“喷火之山”。"
                    }
                ]
            },
            {
                id: "ming_china",
                name: "大明帝国：天下之中与两京十三省",
                subtitle: "打破欧洲中心视角 · 经度平移的博弈智慧",
                badge: "华夏 · 天下之中",
                coords: { x: 42.0, y: 36.0, zoom: 4 },
                bgPosition: "42.0% 36.0%",
                bgSize: "400%",
                quote: "大明一統，兩京十三布政使司，並屬國貢市通譯諸夷...",
                sections: [
                    {
                        label: "中央经线平移",
                        text: "欧洲传统世界地图多以本初子午线或大西洋为中心，中国往往被切断或偏居边缘。利玛窦精妙地将太平洋置于画面正中，使大明王朝赫然居于天下枢轴，这一改动既尊重了科学测量，又极大地降低了明代士大夫对异域地理的心理抵触。"
                    },
                    {
                        label: "政区详赡",
                        text: "详尽标注了两京（顺天府、应天府）与十三布政使司的府、州、卫所，长城烽燧蜿蜒绵亘，黄河长江脉络分明，是全图测绘精度与文字密度最高的核心地带。"
                    }
                ]
            },
            {
                id: "magellanica",
                name: "墨瓦蜡泥加：未知的极南南方大陆",
                subtitle: "地心说陆地平衡假说与麦哲伦航行",
                badge: "大洋极南 · 未知之境",
                coords: { x: 50.0, y: 88.0, zoom: 4 },
                bgPosition: "50.0% 88.0%",
                bgSize: "350%",
                quote: "墨瓦蠟泥加，此地在南，至今無人知其境土幾何。往者航海者經其北境，見有火起，故名火地。又見有白鶴，其羽可為褥，其皮可為衣...",
                sections: [
                    {
                        label: "假想陆地",
                        text: "源自欧洲托勒密以来的“陆地对称平衡说”，认为北半球既然有如此庞大的欧亚大陆，南半球必须存在一块同样巨大的未发现大陆（Terra Australis Incognita），以防止地球倾覆。"
                    },
                    {
                        label: "命名致敬",
                        text: "以1520年穿行麦哲伦海峡的葡萄牙航海家麦哲伦（Magellan）命名。利玛窦在此区域画有美洲驼、鸵鸟等珍异生物，直到18世纪末库克船长南极环航，才彻底证伪了这块超级南方大陆的存在。"
                    }
                ]
            }
        ],

        // 科学附图与测绘工具
        scientificGems: [
            {
                name: "九重天图",
                coords: { x: 88.5, y: 12.0, zoom: 5 },
                tag: "右上角 · 天文宇宙论",
                summary: "托勒密地心说九重宇宙模型",
                desc: "位于全图右上角，详细阐述了当时西方古典托勒密-亚里士多德同心球宇宙体系。中心为地球，自内向外依次为月轮天、水星天、金星天、日轮天、火星天、木星天、土星天、二十八宿恒星天以及宗动天，是西方古典宇宙观传入中国的重要原初文献。"
            },
            {
                name: "赤道北半地球之图与日蚀月蚀图",
                coords: { x: 12.0, y: 14.0, zoom: 5 },
                tag: "左上角 · 极射与蚀相",
                summary: "北极正视投影与日蚀月蚀解说",
                desc: "位于全图左上角，包含以北极点为中心的正视半球投影图，直观展现北半球欧亚非美各洲环绕北极的形态。其右侧绘有「日蚀图」与「月蚀图」，配有“问月蚀之理”与“何以知日大于地、地大于月”的天文算理问答。"
            },
            {
                name: "赤道南半地球之图与黄赤中气",
                coords: { x: 12.0, y: 84.0, zoom: 5 },
                tag: "左下角 · 极射与节气",
                summary: "南极正视投影与黄赤交角",
                desc: "位于全图左下角，绘有以南极点为中心的南半球极射半球投影图，直观描绘了极南大洋与冰雪大陆。旁侧附有周天黄赤二道交角错行及二十四节气中气界限示意图。"
            },
            {
                name: "天地仪与利玛窦跋文",
                coords: { x: 86.0, y: 84.0, zoom: 5 },
                tag: "右下角 · 浑天与跋语",
                summary: "天地仪演示与全图终篇题记",
                desc: "位于全图右下角，绘制了以地心为基准演示太阳、月亮运行与寒暑昼夜之理的「天地仪」（浑天仪），右侧题有万历三十年秋《利玛窦自撰跋文》，是整幅全图文献记载的终篇丰碑。"
            }
        ],

        // 神秘海怪与陆地异兽
        mythicalBeasts: [
            {
                name: "大洋海怪与喷水巨鲸",
                desc: "在大西洋与太平洋茫茫万顷的空白处，利玛窦描绘了喷涌水柱的双孔巨鲸、长着海马身躯的怪物和凶猛海兽。这既是大航海版画填充图面空白的传统，也映照出早期水手对未知深海的无上敬畏。"
            },
            {
                name: "极南陆地珍禽异兽",
                desc: "在南半球巨大的“墨瓦蜡泥加”大陆上，画有美洲鸵鸟、单峰骆驼、长角羚羊，甚至还有背生双翼的神秘飞兽。这些图绘将大航海带回的全新生物学知识与古典神话图谱完美交融。"
            }
        ],

        // 地名密码与音译考据表
        etymologyGlossary: [
            {
                ancient: "伯西兒",
                foreign: "Brasil (葡萄牙语)",
                meaning: "pau-brasil (苏木红木，其树心可提炼鲜红染料)",
                modern: "巴西",
                note: "利玛窦注记“此言苏木”，是世界词源学在中文里的极早范例。"
            },
            {
                ancient: "別山",
                foreign: "Volcán (西班牙语)",
                meaning: "火山 (Volcano)",
                modern: "雷维利亚希赫多群岛 (墨西哥火山岛)",
                note: "并非夏威夷，而是西语对音借字，图中以红岛直观描画喷火之山。"
            },
            {
                ancient: "甘那陀",
                foreign: "Canada / kanata (圣劳伦斯易洛魁语)",
                meaning: "聚落、村落 (Village)",
                modern: "加拿大",
                note: "源自探险家卡蒂埃误听，利玛窦以此作为大区域通称。"
            },
            {
                ancient: "摩勿加國",
                foreign: "Mohawk (莫霍克语)",
                meaning: "食肉者 / 燧石之民",
                modern: "莫霍克原住民部落",
                note: "詹姆斯敦殖民前，北美东部林地原住民易洛魁联盟部族。"
            },
            {
                ancient: "羅瑪",
                foreign: "Roma (拉丁语)",
                meaning: "力量 / 罗穆卢斯建立之城",
                modern: "罗马",
                note: "天主教教宗教廷所在圣座，利玛窦注记其为欧洲古贤之都。"
            },
            {
                ancient: "亞細亞",
                foreign: "Asia (古希腊语)",
                meaning: "日出之地、东方 (Orient)",
                modern: "亚洲",
                note: "利玛窦定译，现代中文五大洲名之首。"
            },
            {
                ancient: "太平洋",
                foreign: "El Mar Pacífico",
                meaning: "平静平波之海",
                modern: "太平洋",
                note: "由麦哲伦航行穿越风平浪静之洋面而命名，利玛窦定译。"
            },
            {
                ancient: "地中海",
                foreign: "Mare Mediterraneum",
                meaning: "陆地中间之海",
                modern: "地中海",
                note: "意译神妙，现已成为现代汉语言世界最耳熟能详的地理名称之一。"
            }
        ]
    },
    {
        id: "martini",
        title: "中国新图志 · 中国总图",
        subtitle: "1655年阿姆斯特丹刻本 · 约翰·布劳 (Joan Blaeu) 手工套色铜版",
        author: "卫匡国 (Martino Martini) 主撰 · 约翰·布劳 雕版印行",
        year: "1655年（清顺治十二年）",
        cardTag: "布劳铜版 · 欧洲首部中国分省图集",
        badge: "欧洲中国地理学奠基石 · 1655珍稀铜版",
        image: "Martini_China_1655_thumb.jpg",
        tiles: {
            url: "tiles/martini/{z}/{x}/{y}.jpg",
            width: 7768,
            height: 6126,
            maxZoom: 5
        },
        shortDescription: "欧洲历史上第一部严谨测绘中国全境的科学地图集。融汇明代罗洪先《广舆图》与朱思本舆图精髓，被李约瑟尊为“欧洲中国地理学之父”，开创长达百年的西方中国地图范式。",

        // 快捷跳转导览标签
        quickNavTargets: [
            { label: "🎨 巴洛克华美卷标", x: 23.5, y: 14.5, z: 4, desc: "天使花果与明代儒士仕女 · 荷兰黄金时代铜版巅峰" },
            { label: "🧱 万里长城与大漠", x: 44.0, y: 29.5, z: 5, desc: "垛口敌楼连绵千里 · 农耕与游牧的地理界线" },
            { label: "🏯 京师北直隶", x: 49.5, y: 34.0, z: 5, desc: "北京天朝帝都 · 钦天监实测经纬坐标" },
            { label: "🌊 江南太湖与运河", x: 55.0, y: 55.0, z: 5, desc: "金陵、苏州、杭州、太湖 · 鱼米繁华水网" },
            { label: "🏞️ 黄河九曲星宿海", x: 26.5, y: 35.5, z: 5, desc: "源头星宿海 (Singhai) 与晋陕大峡谷大回环" },
            { label: "🏝️ 台湾与北回归线", x: 59.5, y: 74.5, z: 5, desc: "福尔摩沙 (Formosa) 与朱红北回归线横穿" },
            { label: "⛵ 珠江广州与澳门", x: 44.0, y: 75.0, z: 5, desc: "广州府与东西海上贸易枢纽澳门 (Macao)" },
            { label: "🗾 朝鲜与日本列岛", x: 80.0, y: 38.0, z: 4, desc: "朝鲜半岛正形与日本本州、九州、虾夷地" },
            { label: "🏔️ 西藏与喜马拉雅", x: 17.5, y: 45.0, z: 5, desc: "乌斯藏与雪山之国 · 早期雪域地理记载" },
            { label: "📜 帝国特许印鉴", x: 84.0, y: 89.0, z: 5, desc: "神圣罗马帝国皇帝与荷兰共和国议会特许令" }
        ],

        // 核心概述板块
        overview: {
            background: "1643年意大利耶稣会士卫匡国（Martino Martini，号济泰）抵华，足迹遍及直隶、山东、江南、浙江等省。明清鼎革之际，他搜集研读了朱思本、罗洪先《广舆图》等明代官方与文人舆地文献。1651年受命返欧时，他在阿姆斯特丹与欧洲最负盛名的制图巨擘约翰·布劳（Joan Blaeu）合作，于1655年正式出版划时代的《中国新图志》（Novus Atlas Sinensis），收录于著名的《大地图集》（Atlas Maior）第十卷。",
            projection: "采用经纬度方格坐标体系，第一次将中国“两京十三省”（北直隶、南直隶及十三布政使司）完整且精确地置于近代科学坐标系中。其长城走势、黄河九曲大转弯与源头、长江水网与太湖、东部沿海与台湾、日本列岛的几何经纬关系较以往西方地图有了革命性的跨越。",
            legacy: "英国著名科技史家李约瑟（Joseph Needham）高度赞誉卫匡国为“欧洲关于中国地理学的开拓之父”（Father of Chinese Geography in Europe）。《中国新图志》不仅彻底终结了欧洲长达数百年将“契丹”（Cathay）与“中国”（China）割裂混淆的千古谜题，更成为伏尔泰、莱布尼茨等欧洲启蒙时代思想家认识中国国家地理的最权威经典。"
        },

        // 核心区域图文细读
        focalAreas: [
            {
                id: "martini_cartouche",
                name: "巴洛克华美卷标：中西人物与东学西渐",
                subtitle: "荷兰黄金时代制图艺术巅峰 · 明代汉服儒士与巴洛克花果饰框",
                badge: "艺术版画 · 卷标",
                coords: { x: 23.5, y: 14.5, zoom: 4 },
                bgPosition: "23.5% 14.5%",
                bgSize: "480%",
                quote: "IMPERII SINARVM NOVA DESCRIPTIO（中华帝国新图）",
                sections: [
                    {
                        label: "艺术形制",
                        text: "位于地图左上角，采用典型的荷兰巴洛克涡卷饰框。顶部有两位嬉戏的西方丘比特小天使；卷标左侧绘有身着明代汉服长袍、头戴儒巾的士大夫与端庄贵妇，手捧象征长生延年的仙桃与祥瑞花果；右侧为西洋学者，生动展现了17世纪欧洲对中华文明的崇敬与向往。"
                    },
                    {
                        label: "东方丰饶想象",
                        text: "卷框周遭挂满沉甸甸的柑橘、石榴与葡萄藤蔓，呼应了自《马可·波罗游记》以来西方对东方富庶繁荣、沃野千里的经典记忆。"
                    }
                ]
            },
            {
                id: "martini_great_wall",
                name: "万里长城（Murus Sinicus）：写实还原北境防线",
                subtitle: "连绵千里的砖石垛口与烽燧敌楼 · 农耕与草原的世界界线",
                badge: "北境防线 · 长城",
                coords: { x: 44.0, y: 29.5, zoom: 5 },
                bgPosition: "44.0% 29.5%",
                bgSize: "550%",
                quote: "Murus Sinicus quingentarum leucarum contra Tartarorum incursus（防御鞑靼侵袭之五百里中国长城）",
                sections: [
                    {
                        label: "写实重现",
                        text: "西方早期地图常将长城简绘为抽象虚线或完全忽略。卫匡国根据中国官方舆图与亲身考察，自山海关、居庸关一路向西蜿蜒至嘉峪关，用细腻精工的铜版线条刻画出城墙的垛口、雉堞与关隘敌楼，真实再现了农耕与游牧文明的军事与地理分界线。"
                    },
                    {
                        label: "地缘防御",
                        text: "题记注明“防御鞑靼人侵扰之长城”，生动映衬出当时正值明清交替之际、八旗铁骑入关改朝换代的巨大历史风云。"
                    }
                ]
            },
            {
                id: "martini_peking",
                name: "京师顺天府（Peking）：北直隶帝都风华",
                subtitle: "经纬实测的帝都坐标 · 顺天府与紫禁城中枢",
                badge: "北方首善 · 京畿",
                coords: { x: 49.5, y: 34.0, zoom: 5 },
                bgPosition: "49.5% 34.0%",
                bgSize: "500%",
                quote: "PEKING sive PECHELI, Regia Imperii Sinarum（北京或北直隶，中华帝国之都城）",
                sections: [
                    {
                        label: "经纬实测",
                        text: "标定北京位于北纬 39°55' 左右，这一数据与传教士及钦天监在观象台实测数据惊人一致，彻底摆脱了此前马可·波罗时代将汗八里（Cambaluc）盲目定位在极北纬度的严重失真。"
                    },
                    {
                        label: "政治中枢",
                        text: "以双环城堡图案标示顺天府，周边环绕通州、昌平、涿州等卫所重镇，突显了作为十七世纪东亚乃至世界最宏伟帝都的地缘核心地位。"
                    }
                ]
            },
            {
                id: "martini_jiangnan",
                name: "江南省与太湖水网：东南财赋与名邑",
                subtitle: "南京、苏州、杭州与大运河 · 东方威尼斯的水网纵横",
                badge: "东南财赋 · 江南",
                coords: { x: 55.0, y: 55.0, zoom: 5 },
                bgPosition: "55.0% 55.0%",
                bgSize: "480%",
                quote: "KIANGNAN sive NANKING（江南省或南京）",
                sections: [
                    {
                        label: "水网纵横",
                        text: "极为详尽地描绘了长江口、太湖（Tai hu）水系以及贯通南北的京杭大运河。苏州（Sucheu）、杭州（Hangcheu）两座名城比邻太湖，生动印证了西方对“上有天堂，下有苏杭”的由衷赞美。"
                    },
                    {
                        label: "政区变迁",
                        text: "图上标为清初顺治初年的“江南省”（即明代南直隶），展现出卫匡国敏锐捕捉清初最新政区调整的历史敏感度。"
                    }
                ]
            },
            {
                id: "martini_yellow_river",
                name: "黄河九曲（Croceus Fluvius）与星宿海源头",
                subtitle: "大河大转弯与河源星宿海 · 华夏母亲河的完整复原",
                badge: "母亲河 · 河源",
                coords: { x: 26.5, y: 35.5, zoom: 5 },
                bgPosition: "26.5% 35.5%",
                bgSize: "500%",
                quote: "Croceus fluvius / Hoang（黄水之河 / 黄河）",
                sections: [
                    {
                        label: "几字形大回环",
                        text: "卫匡国在西方地图史上第一次准确绘制了黄河自青藏高原向东流经甘肃、宁夏、内蒙古大回环，再沿晋陕大峡谷南下折向东流入海的宏大走势，精准度令人叹为观止。"
                    },
                    {
                        label: "星宿海",
                        text: "源头处清晰标注了“Singhai”（星宿海），汲取了元代潘昂霄《河源志》与明代《广舆图》中的河源地理知识，纠正了西方早期认为亚洲大河皆出自同一中央湖泊的错误陈规。"
                    }
                ]
            },
            {
                id: "martini_taiwan",
                name: "台湾（Formosa）与朱红北回归线",
                subtitle: "福尔摩沙美丽之岛 · 东西方海图交汇的关键锚点",
                badge: "海疆要塞 · 台湾",
                coords: { x: 59.5, y: 74.5, zoom: 5 },
                bgPosition: "59.5% 74.5%",
                bgSize: "450%",
                quote: "I. FORMOSA（美丽岛）& Tropicus Cancri（北回归线）",
                sections: [
                    {
                        label: "海权地缘",
                        text: "此时正值荷兰东印度公司（VOC）在台湾南部筑大员热兰遮城统治时期，图上精确标出“I. Formosa”（美丽之岛）与澎湖列岛（Pescadores）。"
                    },
                    {
                        label: "北回归线",
                        text: "一条优雅醒目的朱红色弧线（Tropicus Cancri）精准横穿台湾岛中南部与两广，展示了十七世纪欧洲天文学计算黄赤交角的极高精度。"
                    }
                ]
            },
            {
                id: "martini_canton_macao",
                name: "珠江三角洲：广州府与海上门户澳门",
                subtitle: "Canton & Macao · 早期东西方文明碰撞与贸易的第一枢纽",
                badge: "海上丝路 · 门户",
                coords: { x: 44.0, y: 75.0, zoom: 5 },
                bgPosition: "44.0% 75.0%",
                bgSize: "480%",
                quote: "QUANGTUNG / Canton & Macao",
                sections: [
                    {
                        label: "文明交汇",
                        text: "澳门（Macao）作为自1553年葡萄牙人租居以来的天主教远东策源地与东西海上贸易中枢，是耶稣会士利玛窦、卫匡国进入中华大地的第一登陆点。"
                    },
                    {
                        label: "珠江水网",
                        text: "生动刻画了广州府（Canton）周边密布的珠江分汊口门，是当时大航海时代西方商船唯一获准在特定季节停泊交易的东方大港。"
                    }
                ]
            },
            {
                id: "martini_japan_korea",
                name: "朝鲜半岛与日本列岛：东亚地缘全景",
                subtitle: "纠正孤岛谬误的半岛全貌 · 日本战国后幕府列岛",
                badge: "东亚地缘 · 邻邦",
                coords: { x: 80.0, y: 38.0, zoom: 4 },
                bgPosition: "80.0% 38.0%",
                bgSize: "450%",
                quote: "COREA & IAPAN, IESO（朝鲜半岛、日本列岛与虾夷地）",
                sections: [
                    {
                        label: "半岛形态纠偏",
                        text: "朝鲜（COREA）以清晰的半岛形态与辽东大陆紧密相连，彻底纠正了更早期欧洲地图将朝鲜误绘为孤立海岛的严重错误。"
                    },
                    {
                        label: "东瀛列岛",
                        text: "右侧以粉红色与绿色绚丽绘制了日本（IAPAN）本州、四国、九州，以及北方的北海道/库页岛海域（IESO），构成了完整的东亚大明帝国与藩属海邻的全球地缘视野。"
                    }
                ]
            }
        ],

        // 科学成就与制图学跨越
        scientificSection: {
            badge: "制图先声 · 科学跨越",
            title: "制图法则与科学测量成就",
            desc: "卫匡国在《中国新图志》中创造性地将中国传统方志地理学与近代欧洲大地测量学深度熔铸，由荷兰黄金时代地图巨擘布劳工坊雕铜版印行，开创了西方科学绘制亚洲内陆地图的新纪元。"
        },
        scientificGems: [
            {
                name: "明代《广舆图》的经纬度科学重构",
                coords: { x: 38.0, y: 50.0, zoom: 4 },
                tag: "典籍转化 · 坐标革命",
                summary: "计里画方到经纬网格的跨文明转译",
                desc: "卫匡国以明代罗洪先《广舆图》和元代朱思本舆图为骨架，通过传教士在各地实测的天文纬度数据，将中国传统的“计里画方”二维网格创造性地转换为托勒密球形经纬度系统，精度远超同时代西方对亚洲的任何测绘。"
            },
            {
                name: "万里长城（Murus Sinicus）的写实描绘",
                coords: { x: 44.0, y: 29.5, zoom: 5 },
                tag: "防御地貌 · 砖石敌楼",
                summary: "西方第一幅精准还原长城走向的地图",
                desc: "自山海关、古北口经居庸关至嘉峪关，以细腻的阴刻铜版线条逼真刻画了长城的雉堞、垛口与警备敌楼，生动展现了横亘农耕与草原之间的世界中古建筑奇迹。"
            },
            {
                name: "朱红北回归线与热带分界标定",
                coords: { x: 59.5, y: 74.5, zoom: 5 },
                tag: "天象投影 · 节气分界",
                summary: "精准横穿台湾岛与岭南之北回归线",
                desc: "图上以极细致的双轨朱红弧线标示北回归线（Tropicus Cancri），纬度约23°27'，精准穿过台湾岛中南部（嘉义、阿里山一带）与广东中部，体现了极高水准的天文测量与数学投影计算。"
            },
            {
                name: "阿姆斯特丹布劳工坊的铜版印染巅峰",
                coords: { x: 84.0, y: 89.0, zoom: 5 },
                tag: "黄金时代 · 典藏印本",
                summary: "重磅棉浆纸与手工矿物套色艺术",
                desc: "右下角镌刻神圣罗马帝国皇帝与荷兰共和国议会的排他性特许版权令。由荷兰黄金时代最负盛名的布劳（Blaeu）家族精工雕版，采用顶级重磅手工棉浆纸，每一幅府州界限皆由画师手工敷以矿物颜料与金粉，堪称地图艺术史上的殿堂之作。"
            }
        ],

        // 历史风貌与文明交汇
        specialFeaturesBadge: "文明相遇",
        specialFeaturesTitle: "巴洛克艺术与明清历史风貌",
        specialFeatures: [
            {
                name: "巴洛克卷标中的汉服仕女与儒士",
                desc: "卷标左侧绘有明代汉族仕女与穿戴儒冠长袍的士大夫，手捧仙桃与珍果，反映了17世纪西方对于晚明高雅士人阶层与精致生活的浪漫化崇敬。"
            },
            {
                name: "终结“契丹与中国之谜”的千古昭雪",
                desc: "自马可·波罗时代起，欧洲一直将北方的“契丹”（Cathay）与南方的“契纳/大秦”（China）误认为两个完全独立的东方大帝国。卫匡国通过亲历实测与精研中国史地典籍，在《中国新图志》序言与总图中无可辩驳地向全欧宣告‘契丹即中国’，彻底解开了困扰欧洲数百年的历史地理大悬案。"
            }
        ],

        // 地名转写与拉丁考据
        etymologySection: {
            badge: "汉学先河",
            title: "卫匡国首创汉地拉丁对音密码",
            subtitle: "奠定近代西方汉学与中国地名拉丁转写系统"
        },
        etymologyGlossary: [
            {
                ancient: "Peking / Pecheli",
                foreign: "Peking sive Pecheli",
                meaning: "北京 / 北直隶（北方首善之区）",
                modern: "北京 / 京津冀",
                note: "卫匡国根据17世纪明清官话音确立的拼写，奠定了西方称北京为 Peking 长达三个多世纪的历史传统。"
            },
            {
                ancient: "Nanking / Kiang-nan",
                foreign: "Nanking sive Kiangnan",
                meaning: "南京 / 江南省（两江总督驻地）",
                modern: "南京 / 江苏安徽故地",
                note: "明代南直隶，清初顺治年间设江南省。图上清晰标注为清初政区调整后的重要都邑。"
            },
            {
                ancient: "Sucheu & Hangcheu",
                foreign: "Sucheu / Hangcheu",
                meaning: "苏州与杭州（东南名郡）",
                modern: "苏州与杭州",
                note: "马可·波罗笔下的东方威尼斯与天堂行在，卫匡国首次在此图中赋予了现代科学经纬坐标。"
            },
            {
                ancient: "Formosa & Piscatores",
                foreign: "Ilha Formosa & Ilhas dos Pescadores",
                meaning: "美丽之岛（葡萄牙语）与渔民群岛",
                modern: "台湾岛与澎湖列岛",
                note: "记录了17世纪荷兰东印度公司（VOC）在台湾活动时期的经典西文海图命名。"
            },
            {
                ancient: "Croceus Fluvius / Hoang",
                foreign: "Croceus fluvius / Hoang",
                meaning: "黄水之河（Croceus源自拉丁文藏红花黄色）",
                modern: "黄河",
                note: "意译与音译并举，精妙传达了“因泥沙浑黄而称黄河”的地理本质。"
            },
            {
                ancient: "Macao / Amacao",
                foreign: "Macao (源自阿妈阁 / 妈祖庙)",
                meaning: "妈阁之港",
                modern: "澳门",
                note: "自1553年葡萄牙人租居以来，这里成为耶稣会士进入华夏、沟通东西文明的第一始发站。"
            }
        ]
    }
];

const mapsDataEn = [
    {
        id: "kunyu",
        title: "Kunyu Wanguo Quantu (1602)",
        subtitle: "Woodblock Edition of 1602 (Ming Wanli 30) · Pseudocylindrical Projection",
        author: "Matteo Ricci & Li Zhizao",
        year: "1602 (Ming Wanli 30)",
        image: "Kunyu_Wanguo_Quantu_thumb.jpg",
        tiles: {
            url: "tiles/kunyu/{z}/{x}/{y}.jpg",
            width: 11726,
            height: 5266,
            maxZoom: 6
        },
        shortDescription: "The earliest surviving and most comprehensive Chinese-language world map in East Asia. Fusing Western cosmology with Chinese geography, it established modern Chinese geographical nomenclature.",
        
        cardTag: "Penn Projection · Six-Panel Screen",
        badge: "Scholarly Edition · 1602 Woodblock",
        quickNavTargets: [
            { label: "🇯🇵 Tea Masters in Japan", x: 48.0, y: 34.0, z: 5, desc: "Military shoguns hold real power · Valuing antique tea ceramics over gems" },
            { label: "🇧🇷 Brazil & Brazilwood", x: 90.2, y: 56.3, z: 5, desc: "'Meaning brazilwood' · An early milestone in global toponymic etymology" },
            { label: "🪶 North American Tribes", x: 75.0, y: 29.5, z: 5, desc: "The 'Kanata' settlement and eastern woodland confederacies" },
            { label: "🌋 Volcán of the Pacific", x: 65.0, y: 38.0, z: 5, desc: "Spanish loan-transliteration for Pacific volcanic islands" },
            { label: "🏯 Ming Empire at Center", x: 42.0, y: 36.0, z: 4, desc: "China positioned at the center of the world map · Two capitals and 13 provinces" },
            { label: "🧭 Terra Australis Hypothesis", x: 50.0, y: 88.0, z: 4, desc: "Magellanica · Renaissance theory of southern hemispheric land mass" },
            { label: "🌌 Nine Heavens (Top-Right)", x: 88.5, y: 12.0, z: 5, desc: "Ptolemaic geocentric model of celestial spheres" },
            { label: "🌐 North Pole & Eclipse (Top-Left)", x: 12.0, y: 14.0, z: 5, desc: "North polar azimuthal projection and lunar/solar eclipse diagrams" },
            { label: "🌐 South Pole & Solstices (Bottom-Left)", x: 12.0, y: 84.0, z: 5, desc: "South polar projection, ecliptic obliquity, and seasonal markers" },
            { label: "🔭 Armillary Sphere (Bottom-Right)", x: 86.0, y: 84.0, z: 5, desc: "Armillary sphere astronomical instrument and Ricci's postscript" }
        ],
        scientificSection: {
            badge: "Corner Vignettes · Celestial Cartography",
            title: "Astronomical Diagrams & Cartographic Instruments",
            desc: "Across the margins and corners, Ricci incorporated Ptolemaic celestial spheres, latitude determination methods, and polar azimuthal projections, creating an encyclopedia of late Ming astronomy and spherical geodesy."
        },
        specialFeaturesBadge: "Natural History",
        specialFeaturesTitle: "Marine Leviathans & Mythical Terrestrial Fauna",
        etymologySection: {
            badge: "Etymology Guide",
            title: "Deciphering Place Names & Transliteration Guide",
            subtitle: "Ricci pioneered many geographic terms still used in Chinese today"
        },
        overview: {
            background: "Printed in Beijing in 1602 (30th year of the Wanli reign) through the collaboration of Italian Jesuit Matteo Ricci and Ming official Li Zhizao. Assembled across six hanging scrolls, the complete composition measures approximately 1.68 meters high by 3.80 meters wide.",
            projection: "Employing a modified pseudocylindrical projection (Penn projection), Ricci shifted the central meridian to place China at the center of the world map, harmonizing the traditional Chinese concept of 'All Under Heaven' (Tianxia) with the latest European maritime discoveries.",
            legacy: "As the earliest and most detailed Chinese-language world map in East Asia, it coined countless modern Chinese geographical names (such as Atlantic, Pacific, Mediterranean, Rome, Nile, Equator, and Earth). It remains an enduring monument to late Ming East-West cultural and scientific exchange."
        },

        // 核心区域图文细读
        focalAreas: [
            {
                id: "japan",
                name: "Japan: Sengoku Endgame & Chanoyu Aesthetics",
                subtitle: "'Real power resides in strong ministers' & Sen no Rikyu's tea wares",
                badge: "East Asia · Cipangu",
                coords: { x: 48.0, y: 34.0, zoom: 5 },
                bgPosition: "48.0% 34.0%",
                bgSize: "550%",
                quote: "Japan is a large island in the sea, 3,200 li in length and no more than 600 li wide. It is divided into 66 provinces, each governed by its own lord. By custom they prize strength in arms; though there is an overarching monarch, true power rests with mighty ministers. The people practice martial arts rather than scholarship. The soil yields silver, iron, and fine lacquer. The people generally disregard precious stones, valuing only gold, silver, and antique ceramic vessels.",
                sections: [
                    {
                        label: "Political Landscape",
                        text: "Directly portrays the late Sengoku to early Tokugawa reality: the Emperor holds symbolic reign ('though there is an overarching monarch'), while de facto power rests with warlord daimyos and the Shogun ('true power rests with mighty ministers')."
                    },
                    {
                        label: "Economy & Silver",
                        text: "During the late Ming, Japan's Iwami Ginzan silver mine was in full boom, serving as East Asia's silver hub. Ricci notes 'the soil yields silver and iron', representing the material backbone of the Nanban trade."
                    },
                    {
                        label: "Cultural Code",
                        text: "'Valuing only gold, silver, and antique ceramics' accurately captures Azuchi-Momoyama tea ceremony culture (Chanoyu). Under Oda Nobunaga and Sen no Rikyu, Korean tea bowls and Bizen/Seto ceramics were prized more than fortified castles."
                    }
                ]
            },
            {
                id: "brazil",
                name: "Brazil (Brasil): From Brazilwood Dye to Cannibal Lore",
                subtitle: "'Meaning brazilwood' · An early milestone in global toponymic etymology",
                badge: "South America · Amazonia",
                coords: { x: 90.2, y: 56.3, zoom: 5 },
                bgPosition: "90.2% 56.3%",
                bgSize: "500%",
                quote: "Brasil: this word denotes 'brazilwood' (red dye wood). The inhabitants build no houses, but dwell in earthen caverns. They are fond of human flesh, devouring men but sparing women, and weave their garments from avian plumage.",
                sections: [
                    {
                        label: "Toponymic Etymology",
                        text: "Portuguese 'Brasil' originates from 'pau-brasil', a tree yielding fiery red textile dye. Ricci's gloss 'this word denotes brazilwood' is one of the earliest examples of global toponymic etymology recorded in the Chinese language."
                    },
                    {
                        label: "Explorers' Imaginaries",
                        text: "Accounts of cave-dwelling, feather weaving, and cannibalism echo early European maritime travelogues concerning the ritual cannibalism of the Tupinambá people in the Amazon basin."
                    }
                ]
            },
            {
                id: "north_america",
                name: "Eastern North America: Defining 'Nation' via Native Tribes",
                subtitle: "The 'Kanata' settlement · Woodland confederacies before Jamestown",
                badge: "North America · St. Lawrence",
                coords: { x: 75.0, y: 29.5, zoom: 5 },
                bgPosition: "75.0% 29.5%",
                bgSize: "500%",
                quote: "From the lands of Mexico to this realm, the general region is termed Kanata. Yet each nation possesses its own native name; the inhabitants are gentle and hospitable toward strangers. They sustain themselves primarily by fishing and hunting, while inland clans clash incessantly in combat...",
                sections: [
                    {
                        label: "Tribes as 'Nations'",
                        text: "Created before the founding of Jamestown (1607). The map's 'nations' are Indigenous confederacies: 'Canada' derives from St. Lawrence Iroquoian 'kanata' (village); Mohawk, Shawnee, and Apalachee were eastern woodland tribal leagues."
                    },
                    {
                        label: "Translation Conventions",
                        text: "Borrowing Ming literati conventions, Ricci translated Western 'provincia' or tribal designations with the Chinese character 'Guo' (Country/Nation), creating a cosmopolitan vision of 'All Nations under Heaven'."
                    }
                ]
            },
            {
                id: "volcano_island",
                name: "Pacific 'Bieshan': Volcano Island, Not Hawaii",
                subtitle: "Spanish 'Volcán' transliteration · Active volcanic isles off Baja California",
                badge: "East Pacific · Socorro Island",
                coords: { x: 65.0, y: 38.0, zoom: 5 },
                bgPosition: "65.0% 38.0%",
                bgSize: "550%",
                quote: "(Located in the Eastern Pacific southwest of Baja California, positioned beside red and yellow volcanic islands crowned with fiery vermilion crests.)",
                sections: [
                    {
                        label: "Geographical Disambiguation",
                        text: "Situated in the Pacific southwest of the Baja California Peninsula. Later commentators occasionally misidentified it with the Hawaiian Islands."
                    },
                    {
                        label: "Philological Conclusion",
                        text: "It is definitively not Hawaii (which Cook encountered only in 1778, 4,000 km away). 'Bieshan' is a Chinese phonetic loan-character transliteration for Spanish 'Volcán' (volcano), corresponding to the volcanic Revillagigedo Islands (Socorro Island)."
                    }
                ]
            },
            {
                id: "ming_china",
                name: "The Great Ming Empire: Center of the World and Two Capitals",
                subtitle: "Transcending Eurocentric bounds · Strategic longitude adjustment",
                badge: "Middle Kingdom · All Under Heaven",
                coords: { x: 42.0, y: 36.0, zoom: 4 },
                bgPosition: "42.0% 36.0%",
                bgSize: "400%",
                quote: "The Great Ming encompasses two capitals, thirteen provincial administration commissions, together with tribute-bearing dependencies and surrounding barbarian vassals...",
                sections: [
                    {
                        label: "Meridian Shift",
                        text: "European world maps traditionally centered on the Atlantic or prime meridian, pushing China to the far edge. Ricci shifted the central meridian to the Pacific, placing China at the heart of the world map—respecting scientific spherical projection while honoring the Chinese worldview."
                    },
                    {
                        label: "Administrative Precision",
                        text: "Painstakingly records the Two Capitals (Shuntian and Yingtian) and Thirteen Provincial Administration Commissions, with watchtowers along the Great Wall and the arterial Yellow and Yangtze rivers."
                    }
                ]
            },
            {
                id: "magellanica",
                name: "Magellanica: The Hypothetical Great Southern Continent",
                subtitle: "Ptolemaic terrestrial counterweight & Ferdinand Magellan",
                badge: "Southern Ocean · Terra Australis",
                coords: { x: 50.0, y: 88.0, zoom: 4 },
                bgPosition: "50.0% 88.0%",
                bgSize: "350%",
                quote: "Magellanica in the South: to this day none know how far its territories extend. Early navigators sailing past its northern shore beheld fires arising, hence naming it Tierra del Fuego...",
                sections: [
                    {
                        label: "Theoretical Continent",
                        text: "Rooted in Ptolemy's symmetry theory: since vast landmasses existed in the Northern Hemisphere, an equivalent southern continent (Terra Australis Incognita) was presumed necessary to balance the globe."
                    },
                    {
                        label: "Homage to Magellan",
                        text: "Named in honor of Ferdinand Magellan, who traversed the Strait of Magellan in 1520. Ricci populated it with ostriches and llamas, a geographic myth finally dispelled only by Captain Cook in the late 18th century."
                    }
                ]
            }
        ],

        // 科学附图与测绘工具
        scientificGems: [
            {
                name: "The Nine Heavens Celestial Sphere",
                coords: { x: 88.5, y: 12.0, zoom: 5 },
                tag: "Top Right · Ptolemaic Cosmology",
                summary: "Geocentric model of nested celestial spheres",
                desc: "Positioned in the upper right corner, detailing the classical Ptolemaic-Aristotelian concentric cosmos. Earth rests at the center, surrounded outward by the spheres of the Moon, Mercury, Venus, the Sun, Mars, Jupiter, Saturn, the Fixed Stars, and the Primum Mobile."
            },
            {
                name: "North Polar Hemisphere & Eclipse Diagrams",
                coords: { x: 12.0, y: 14.0, zoom: 5 },
                tag: "Top Left · Polar Azimuthal & Eclipses",
                summary: "North polar projection and solar/lunar eclipse explanations",
                desc: "Located in the top left corner, featuring a north polar azimuthal projection showing Eurasia, Africa, and the Americas circling the pole, alongside diagrams explaining the mechanics of solar and lunar eclipses."
            },
            {
                name: "South Polar Hemisphere & Obliquity Diagram",
                coords: { x: 12.0, y: 84.0, zoom: 5 },
                tag: "Bottom Left · Southern Pole & Solstices",
                summary: "South polar projection and ecliptic coordinates",
                desc: "Located in the lower left corner, displaying the south polar projection of the southern oceans and hypothetical continent, accompanied by a chart illustrating the intersection of the celestial equator and ecliptic."
            },
            {
                name: "Armillary Sphere & Ricci's Postscript",
                coords: { x: 86.0, y: 84.0, zoom: 5 },
                tag: "Bottom Right · Instruments & Dedication",
                summary: "Demonstration of the armillary sphere and final inscription",
                desc: "Located in the lower right corner, presenting an armillary sphere used to illustrate celestial mechanics, day/night cycles, and seasons, accompanied by Matteo Ricci's celebrated 1602 dedication essay."
            }
        ],

        // 神秘海怪与陆地异兽
        mythicalBeasts: [
            {
                name: "Oceanic Leviathans & Spouting Whales",
                desc: "Across the vast ocean expanses, Ricci illustrated twin-spout whales, sea monsters, and caravel galleons, reflecting the Renaissance maritime tradition of embellishing cartographic uncharted waters."
            },
            {
                name: "Exotic Fauna of the Southern Continent",
                desc: "Across the southern continent of Magellanica, illustrations include American rheas, camels, antelopes, and winged chimeras, blending Renaissance zoological discoveries with classical myth."
            }
        ],

        // 地名密码与音译考据表
        etymologyGlossary: [
            {
                ancient: "伯西兒 (Boxier)",
                foreign: "Brasil (Portuguese)",
                meaning: "pau-brasil (brazilwood, producing vibrant red dye)",
                modern: "Brazil",
                note: "Ricci specifically annotated 'this word denotes brazilwood', a premier milestone in Chinese toponymic etymology."
            },
            {
                ancient: "別山 (Bieshan)",
                foreign: "Volcán (Spanish)",
                meaning: "Volcano",
                modern: "Revillagigedo Islands (Volcanic isles of Mexico)",
                note: "A phonetic transcription of Spanish 'Volcán', depicted with red volcanic peaks."
            },
            {
                ancient: "甘那陀 (Gannatuo)",
                foreign: "Canada / kanata (St. Lawrence Iroquoian)",
                meaning: "Settlement, village",
                modern: "Canada",
                note: "Originating from Jacques Cartier's misunderstanding of the Iroquois term for a village."
            },
            {
                ancient: "摩勿加國 (Mowujia)",
                foreign: "Mohawk (Iroquoian)",
                meaning: "Flint people / man-eaters",
                modern: "Mohawk Native Tribe",
                note: "Reflecting eastern woodland Native American tribal confederacies prior to English permanent colonies."
            },
            {
                ancient: "羅瑪 (Luoma)",
                foreign: "Roma (Latin)",
                meaning: "Strength / City founded by Romulus",
                modern: "Rome",
                note: "Seat of the Catholic Church; Ricci described it as the capital of ancient European sages."
            },
            {
                ancient: "亞細亞 (Yaxiya)",
                foreign: "Asia (Ancient Greek)",
                meaning: "Land of the sunrise / The Orient",
                modern: "Asia",
                note: "Standardized into Chinese by Matteo Ricci, founding modern continental naming."
            },
            {
                ancient: "太平洋 (Taiping Yang)",
                foreign: "El Mar Pacífico (Spanish)",
                meaning: "The Peaceful Ocean",
                modern: "Pacific Ocean",
                note: "Named by Ferdinand Magellan for its serene waters; transliterated and coined into Chinese by Ricci."
            },
            {
                ancient: "地中海 (Dizhong Hai)",
                foreign: "Mare Mediterraneum (Latin)",
                meaning: "Sea in the midst of land",
                modern: "Mediterranean Sea",
                note: "An inspired literal semantic translation that has become the standard term in Chinese."
            }
        ]
    },
    {
        id: "martini",
        title: "Novus Atlas Sinensis · General Map of China (1655)",
        subtitle: "Martino Martini & Joan Blaeu · Amsterdam Hand-Colored Copper Engraving",
        author: "Martino Martini (Author) · Joan Blaeu (Engraver & Publisher)",
        year: "1655 (Qing Shunzhi 12)",
        cardTag: "Blaeu Copperplate · First European Atlas of China",
        badge: "Foundational European Sinology · 1655 Engraving",
        image: "Martini_China_1655_thumb.jpg",
        tiles: {
            url: "tiles/martini/{z}/{x}/{y}.jpg",
            width: 7768,
            height: 6126,
            maxZoom: 5
        },
        shortDescription: "The first scientifically rigorous atlas of China in European history. Synthesizing Luo Hongxian's Guang Yu Tu with Western geodesy, Joseph Needham hailed Martini as the 'Father of Chinese Geography in Europe'.",

        // 快捷跳转导览标签
        quickNavTargets: [
            { label: "🎨 Baroque Cartouche", x: 23.5, y: 14.5, z: 4, desc: "Baroque cherubs, fruit garlands, and Ming scholars in traditional robes" },
            { label: "🧱 The Great Wall & Gobi", x: 44.0, y: 29.5, z: 5, desc: "Hundreds of miles of masonry battlements and frontier watchtowers" },
            { label: "🏯 Imperial Capital Peking", x: 49.5, y: 34.0, z: 5, desc: "The imperial capital situated with measured astronomical coordinates" },
            { label: "🌊 Jiangnan Canals & Lake Tai", x: 55.0, y: 55.0, z: 5, desc: "Nanking, Suzhou, Hangzhou, and Lake Tai waterway network" },
            { label: "🏞️ Yellow River & Sea of Stars", x: 26.5, y: 35.5, z: 5, desc: "Singhai headwaters and the great Ordos Loop" },
            { label: "🏝️ Formosa & Tropic of Cancer", x: 59.5, y: 74.5, z: 5, desc: "Island of Formosa traversed by the vermilion Tropic of Cancer" },
            { label: "⛵ Pearl River & Macao", x: 44.0, y: 75.0, z: 5, desc: "Canton Prefecture and the maritime trade gateway of Macao" },
            { label: "🗾 Korea & Japan", x: 80.0, y: 38.0, z: 4, desc: "Correct peninsular form of Korea with Honshu, Kyushu, and Ezo" },
            { label: "🏔️ Tibet & Himalayas", x: 17.5, y: 45.0, z: 5, desc: "U-Tsang and the snowy kingdoms of high Asia" },
            { label: "📜 Imperial Privilege Seal", x: 84.0, y: 89.0, z: 5, desc: "Copyright privileges granted by the Holy Roman Emperor and Dutch Republic" }
        ],

        // 核心概述板块
        overview: {
            background: "In 1643, Italian Jesuit Martino Martini arrived in China, traveling extensively through Zhili, Shandong, Jiangnan, and Zhejiang. During the tumultuous Ming-Qing dynastic transition, he collected and translated Chinese administrative atlases, notably Luo Hongxian's Guang Yu Tu (based on Zhu Siben's 14th-century survey). Returning to Europe in 1651, Martini partnered with Joan Blaeu in Amsterdam to publish the monumental Novus Atlas Sinensis in 1655 as Volume X of the celebrated Atlas Maior.",
            projection: "Martini plotted China's Two Capitals and Thirteen Provinces onto a rigorous spherical graticule (latitude-longitude grid), marking an unprecedented leap forward in European cartography of Asian landmasses.",
            legacy: "Historian of science Joseph Needham hailed Martini as the 'Father of Chinese Geography in Europe'. The atlas definitively settled the centuries-old puzzle in Europe by demonstrating that 'Cathay' and 'China' were one and the same realm, becoming the foundational reference for Enlightenment thinkers such as Leibniz and Voltaire."
        },

        // 核心区域图文细读
        focalAreas: [
            {
                id: "martini_cartouche",
                name: "Baroque Cartouche: Sino-European Encounters",
                subtitle: "Peak Dutch Golden Age engraving · Ming scholars in Hanfu & Baroque fruit garlands",
                badge: "Engraving Art · Title Cartouche",
                coords: { x: 23.5, y: 14.5, zoom: 4 },
                bgPosition: "23.5% 14.5%",
                bgSize: "480%",
                quote: "IMPERII SINARVM NOVA DESCRIPTIO (A New Description of the Chinese Empire)",
                sections: [
                    {
                        label: "Artistic Design",
                        text: "Positioned in the upper left corner, framed by exquisite Dutch Baroque volutes. Two cherubs play at the top; on the left stand a Ming scholar in traditional Confucian robes and a noblewoman holding longevity peaches and auspicious fruits; on the right stands a Western scholar, symbolizing 17th-century European admiration for Chinese civilization."
                    },
                    {
                        label: "Allegory of Abundance",
                        text: "Lush garlands of citrus, pomegranates, and grapevines drape around the frame, reflecting the enduring Western perception of China as an exceedingly fertile, prosperous land."
                    }
                ]
            },
            {
                id: "martini_great_wall",
                name: "The Great Wall (Murus Sinicus): Realistic Frontier Defenses",
                subtitle: "Masonry battlements and watchtowers · Dividing farming civilization from the steppe",
                badge: "Northern Frontier · Great Wall",
                coords: { x: 44.0, y: 29.5, zoom: 5 },
                bgPosition: "44.0% 29.5%",
                bgSize: "550%",
                quote: "Murus Sinicus quingentarum leucarum contra Tartarorum incursus (The Chinese Wall of Five Hundred Leagues against Tartar Incursions)",
                sections: [
                    {
                        label: "Realistic Rendering",
                        text: "Earlier European maps often depicted the Great Wall as an abstract dashed line. Martini faithfully traced its path from Shanhaiguan and Gubeikou past Juyongguan to Jiayuguan, rendering individual battlements and fortified watchtowers."
                    },
                    {
                        label: "Strategic Boundary",
                        text: "The inscription designates it as built 'against Tartar incursions', vividly mirroring the dramatic Ming-Qing dynastic transition taking place during Martini's travels in China."
                    }
                ]
            },
            {
                id: "martini_peking",
                name: "Imperial Capital Peking: Heart of the Northern Empire",
                subtitle: "The imperial capital situated with measured astronomical coordinates",
                badge: "Imperial Capital · Pecheli",
                coords: { x: 49.5, y: 34.0, zoom: 5 },
                bgPosition: "49.5% 34.0%",
                bgSize: "500%",
                quote: "PEKING sive PECHELI, Regia Imperii Sinarum (Peking or Pecheli, Royal Seat of the Chinese Empire)",
                sections: [
                    {
                        label: "Astronomical Measurement",
                        text: "Located accurately near 39°55' North, matching calculations made by Jesuit astronomers at the Beijing Ancient Observatory, breaking free from Marco Polo's exaggerated northern placement of Cambaluc."
                    },
                    {
                        label: "Administrative Center",
                        text: "Marked with double fortified ramparts and surrounded by garrison towns such as Tongzhou, Changping, and Zhuozhou, underscoring Beijing's role as East Asia's paramount metropolis."
                    }
                ]
            },
            {
                id: "martini_jiangnan",
                name: "Jiangnan Waterways: Nanking, Lake Tai, and the Grand Canal",
                subtitle: "Nanking, Suzhou, Hangzhou, Lake Tai · The prosperous water network of Southeast China",
                badge: "Southeast · Kiangnan",
                coords: { x: 55.0, y: 55.0, zoom: 5 },
                bgPosition: "55.0% 55.0%",
                bgSize: "480%",
                quote: "KIANGNAN sive NANKING (Jiangnan or Nanking Province)",
                sections: [
                    {
                        label: "Dense Canal Network",
                        text: "Intricately delineates the Yangtze estuary, Lake Tai (Tai hu), and the Grand Canal. Suzhou and Hangzhou flank Lake Tai, echoing the classic adage 'In heaven there is paradise; on earth there are Suzhou and Hangzhou'."
                    },
                    {
                        label: "Administrative Evolution",
                        text: "Labeled as 'Jiangnan Province' (established in the early Shunzhi reign over the former Ming Southern Zhili), demonstrating Martini's keen awareness of contemporary Qing administrative reforms."
                    }
                ]
            },
            {
                id: "martini_yellow_river",
                name: "The Yellow River (Croceus Fluvius) & The Great Ordos Loop",
                subtitle: "Headwaters at the 'Sea of Stars' (Singhai) and the Shanxi-Shaanxi canyon loop",
                badge: "Great Rivers · Yellow River",
                coords: { x: 26.5, y: 35.5, zoom: 5 },
                bgPosition: "26.5% 35.5%",
                bgSize: "500%",
                quote: "Croceus fluvius / Hoang (The Saffron River / Yellow River)",
                sections: [
                    {
                        label: "The Great Ordos Loop",
                        text: "For the first time in Western cartographic history, Martini mapped the dramatic rectangular Ordos Loop of the Yellow River flowing north through Ningxia and Inner Mongolia before bending south through the Shanxi-Shaanxi gorges."
                    },
                    {
                        label: "Source at Sea of Stars",
                        text: "The headwaters are explicitly labeled 'Singhai' (Sea of Stars / Xingxiuhai in Qinghai), integrating Yuan-Ming Chinese hydrological research to debunk the ancient Western myth of a single central Asian lake."
                    }
                ]
            },
            {
                id: "martini_taiwan",
                name: "Formosa & The Tropic of Cancer: VOC Dutch Colony in the East",
                subtitle: "Ilha Formosa crossed by the vermilion Tropic of Cancer (Tropicus Cancri)",
                badge: "Maritime Frontier · Formosa",
                coords: { x: 59.5, y: 74.5, zoom: 5 },
                bgPosition: "59.5% 74.5%",
                bgSize: "450%",
                quote: "I. FORMOSA (Beautiful Island) & Tropicus Cancri",
                sections: [
                    {
                        label: "Maritime Geopolitics",
                        text: "Published during the era when the Dutch East India Company (VOC) maintained Fort Zeelandia in southern Taiwan. The map accurately situates 'I. Formosa' and the Pescadores (Penghu)."
                    },
                    {
                        label: "The Vermilion Tropic Line",
                        text: "A prominent red line (Tropicus Cancri) bisects central-southern Taiwan (near Chiayi) and Guangdong, demonstrating high precision in astronomical latitude calculation."
                    }
                ]
            },
            {
                id: "martini_canton_macao",
                name: "Canton & Macao: The Jesuit Bridgehead in South China",
                subtitle: "Canton Prefecture and the maritime trade gateway of Macao",
                badge: "Maritime Gateway · Macao",
                coords: { x: 44.0, y: 75.0, zoom: 5 },
                bgPosition: "44.0% 75.0%",
                bgSize: "480%",
                quote: "QUANGTUNG / Canton & Macao",
                sections: [
                    {
                        label: "Crossroads of Civilizations",
                        text: "Settled by the Portuguese in 1553, Macao served as the primary Jesuit springboard into China for figures like Matteo Ricci and Martino Martini, as well as the hub of trans-Pacific and Indian Ocean trade."
                    },
                    {
                        label: "Pearl River Delta",
                        text: "Depicts the branching estuary channels of the Pearl River leading to Canton, the exclusive trading port where European merchantmen were permitted seasonal commerce."
                    }
                ]
            },
            {
                id: "martini_japan_korea",
                name: "The Korean Peninsula & Japan: Correcting Island Misconceptions",
                subtitle: "Correct peninsular depiction of Korea with Honshu, Kyushu, and Ezo",
                badge: "East Asian Geopolitics · Neighbors",
                coords: { x: 80.0, y: 38.0, zoom: 4 },
                bgPosition: "80.0% 38.0%",
                bgSize: "450%",
                quote: "COREA & IAPAN, IESO (Korea, Japan, and Ezo/Hokkaido)",
                sections: [
                    {
                        label: "Peninsular Correction",
                        text: "Korea (COREA) is correctly connected to Liaodong and mainland Asia as a peninsula, definitively overturning early European maps that mistook it for an isolated offshore island."
                    },
                    {
                        label: "The Japanese Archipelago",
                        text: "On the right, Honshu, Shikoku, and Kyushu are rendered alongside northern Hokkaido/Sakhalin (IESO), presenting a comprehensive regional panorama of East Asia."
                    }
                ]
            }
        ],

        // 科学成就与制图学跨越
        scientificSection: {
            badge: "Cartographic Milestones",
            title: "Cartographic Principles & Scientific Measurements",
            desc: "Martini creatively fused traditional Chinese local gazetteers with Western geodesy, engraved by Blaeu's workshop to usher in a new era of Asian mapping."
        },
        scientificGems: [
            {
                name: "Transforming Guang Yu Tu into a Graticule Grid",
                coords: { x: 38.0, y: 50.0, zoom: 4 },
                tag: "Graticule Revolution",
                summary: "Translating Chinese grid plotting into latitude and longitude",
                desc: "Using Luo Hongxian's Guang Yu Tu as a core source, Martini converted China's traditional 'Ji Li Hua Fang' (square grid) measurements into a spherical Ptolemaic latitude-longitude graticule with unprecedented mathematical accuracy."
            },
            {
                name: "Realistic Depiction of the Great Wall (Murus Sinicus)",
                coords: { x: 44.0, y: 29.5, zoom: 5 },
                tag: "Military Architecture",
                summary: "The first Western map accurately tracing the Great Wall",
                desc: "From Shanhaiguan through Gubeikou and Juyongguan to Jiayuguan, the engraving depicts crenellations, ramparts, and guard towers, celebrating this monumental defensive frontier."
            },
            {
                name: "Vermilion Tropic of Cancer & Astronomical Boundary",
                coords: { x: 59.5, y: 74.5, zoom: 5 },
                tag: "Astronomical Alignment",
                summary: "Accurately traversing southern Taiwan and Guangdong",
                desc: "The double-line vermilion Tropic of Cancer (at approximately 23°27' N) crosses Taiwan and southern China, reflecting advanced mathematical projection and solar calculation."
            },
            {
                name: "Amsterdam Blaeu Workshop's Engraving Masterpiece",
                coords: { x: 84.0, y: 89.0, zoom: 5 },
                tag: "Golden Age Masterpiece",
                summary: "Heavy rag paper and mineral pigment hand-coloring",
                desc: "Bearing official copyright privileges from the Holy Roman Emperor and Dutch Republic, Joan Blaeu's workshop printed on heavy rag paper with hand-applied mineral gouache and gold leaf, making this volume a pinnacle of European cartographic art."
            }
        ],

        // 历史风貌与文明交汇
        specialFeaturesBadge: "Civilizational Encounters",
        specialFeaturesTitle: "Baroque Aesthetics & Historical Vistas",
        specialFeatures: [
            {
                name: "Ming Scholars & Noblewomen in Baroque Cartouche",
                desc: "The title cartouche features Ming gentry in traditional Confucian caps and robes alongside a noblewoman with longevity peaches, expressing 17th-century European fascination with Chinese high culture."
            },
            {
                name: "Definitively Unraveling the Cathay-China Mystery",
                desc: "Since Marco Polo's time, Europeans believed 'Cathay' in the north and 'China' in the south were separate realms. Through geographical fieldwork and textual study, Martini conclusively proved that Cathay was China, settling a centuries-old European intellectual debate."
            }
        ],

        // 地名转写与拉丁考据
        etymologySection: {
            badge: "Early Sinology",
            title: "Martini's Latin-Chinese Toponymic Transcriptions",
            subtitle: "Laying the foundation for early modern Western transliteration of Chinese geography"
        },
        etymologyGlossary: [
            {
                ancient: "Peking / Pecheli",
                foreign: "Peking sive Pecheli",
                meaning: "Beijing / Northern Zhili",
                modern: "Beijing / Capital Metropolitan Region",
                note: "Established the Romanization 'Peking' based on 17th-century Mandarin phonology, which prevailed in the West for over three centuries."
            },
            {
                ancient: "Nanking / Kiang-nan",
                foreign: "Nanking sive Kiangnan",
                meaning: "Nanjing / Jiangnan Province",
                modern: "Nanjing / Jiangsu & Anhui",
                note: "Reflects the early Qing administrative reorganization of the former Ming Southern Zhili into Jiangnan Province."
            },
            {
                ancient: "Sucheu & Hangcheu",
                foreign: "Sucheu / Hangcheu",
                meaning: "Suzhou and Hangzhou",
                modern: "Suzhou & Hangzhou",
                note: "Marco Polo's fabled cities of southern commerce, placed on a modern mathematical graticule for the first time."
            },
            {
                ancient: "Formosa & Piscatores",
                foreign: "Ilha Formosa & Ilhas dos Pescadores",
                meaning: "Beautiful Island (Portuguese) & Fishermen's Isles",
                modern: "Taiwan & Penghu Islands",
                note: "Captures Dutch East India Company (VOC) terminology during their presence on the island."
            },
            {
                ancient: "Croceus Fluvius / Hoang",
                foreign: "Croceus fluvius / Hoang",
                meaning: "Saffron-Colored River (Croceus from Latin saffron-yellow)",
                modern: "The Yellow River",
                note: "Combining semantic Latin translation with phonetic Romanization of Chinese 'Huang'."
            },
            {
                ancient: "Macao / Amacao",
                foreign: "Macao (derived from A-Ma Temple)",
                meaning: "Port of Goddess A-Ma (Mazu)",
                modern: "Macao (Macau)",
                note: "The primary springboard for European missionaries and scholars entering Ming and Qing China."
            }
        ]
    }
];

// Unified mapsData dictionary with backward-compatible array methods
const mapsData = {
    zh: mapsDataZh,
    en: mapsDataEn
};

// Polyfill array methods on mapsData for backward compatibility
mapsData.forEach = function(...args) { return mapsDataZh.forEach(...args); };
mapsData.find = function(...args) { return mapsDataZh.find(...args); };
mapsData.map = function(...args) { return mapsDataZh.map(...args); };
mapsData[0] = mapsDataZh[0];
mapsData[1] = mapsDataZh[1];
mapsData.length = 2;
