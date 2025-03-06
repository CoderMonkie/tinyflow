import { defineConfig } from 'vitepress';

const gitee_icon_svg =
    '\n' +
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<svg width="90px" height="90px" viewBox="0 0 90 90" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">\n' +
    '    <!-- Generator: Sketch 61.2 (89653) - https://sketch.com -->\n' +
    '    <title>Gitee</title>\n' +
    '    <g id="LOGO" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">\n' +
    '        <g id="Artboard" transform="translate(-532.000000, -431.000000)">\n' +
    '            <g id="logo" transform="translate(532.000000, 431.000000)">\n' +
    '                <g id="Group">\n' +
    '                    <circle id="Combined-Shape" fill="#C71D23" cx="44.8544363" cy="44.8544363" r="44.8544363"></circle>\n' +
    '                    <path d="M67.558546,39.8714292 L42.0857966,39.8714292 C40.8627004,39.8720094 39.8710953,40.8633548 39.8701949,42.0864508 L39.8687448,47.623783 C39.867826,48.8471055 40.8592652,49.8390642 42.0825879,49.8393845 C42.0827874,49.8393846 42.0829869,49.8393846 42.0831864,49.8387862 L57.5909484,49.838657 C58.8142711,49.8386283 59.8059783,50.830319 59.8059885,52.0536417 C59.8059885,52.0536479 59.8059885,52.053654 59.8059701,52.0536602 L59.8059701,52.6073539 L59.8059701,52.6073539 L59.8059701,53.161115 C59.8059701,56.8310831 56.8308731,59.80618 53.160905,59.80618 L32.1165505,59.80618 C30.8934034,59.806119 29.9018373,58.8145802 29.9017425,57.5914331 L29.9011625,36.5491188 C29.9008781,32.8791508 32.8758931,29.9039718 36.5458611,29.9038706 C36.5459222,29.9038706 36.5459833,29.9038706 36.5460443,29.9040538 L67.5523638,29.9040538 C68.77515,29.9026795 69.7666266,28.9118177 69.7687593,27.6890325 L69.7721938,22.1516997 C69.774326,20.928378 68.7832423,19.9360642 67.5599198,19.9353054 C67.5594619,19.9353051 67.5590039,19.935305 67.558546,19.9366784 L36.5479677,19.9366784 C27.3730474,19.9366784 19.935305,27.3744208 19.935305,36.549341 L19.935305,67.558546 C19.935305,68.7818687 20.927004,69.7735676 22.1503267,69.7735676 L54.8224984,69.7735676 C63.079746,69.7735676 69.7735676,63.079746 69.7735676,54.8224984 L69.7735676,42.0864509 C69.7735676,40.8631282 68.7818687,39.8714292 67.558546,39.8714292 Z" id="G" fill="#FFFFFF"></path>\n' +
    '                </g>\n' +
    '                <path d="M129.679951,79.4117647 C136.422068,79.4117647 141.804525,78.0966654 145.827321,75.4664668 C149.850118,72.8362683 151.861516,69.4304983 151.861516,65.249157 C151.861516,58.5050581 146.827402,55.1330086 136.759174,55.1330086 L136.759174,55.1330086 L130.556426,55.1330086 C128.488844,55.1330086 127.005578,54.9306857 126.106629,54.5260397 C125.20768,54.1213938 124.758206,53.4469839 124.758206,52.50281 C124.758206,51.5586362 125.050364,50.7718247 125.634681,50.1423754 C125.859418,49.8726115 126.151577,49.7826901 126.511156,49.8726115 C127.949474,50.2772574 129.320372,50.4795804 130.623848,50.4795804 C135.253434,50.4795804 139.017783,49.366804 141.916893,47.1412514 C144.816004,44.9156988 146.265559,41.6223305 146.265559,37.2611465 C146.265559,35.6425628 145.9734,34.2038217 145.389084,32.9449232 C145.344136,32.8550019 145.355373,32.7538404 145.422794,32.6414387 C145.490215,32.5290371 145.591347,32.4728363 145.726189,32.4728363 L145.726189,32.4728363 L147.276876,32.4728363 C148.400562,32.4728363 149.344459,32.0906707 150.108565,31.3263395 C150.872672,30.5620082 151.254725,29.6178344 151.254725,28.4938179 L151.254725,28.4938179 L151.254725,27.5496441 C151.254725,26.4705882 150.872672,25.5376546 150.108565,24.750843 C149.344459,23.9640315 148.400562,23.5706257 147.276876,23.5706257 L147.276876,23.5706257 L137.365964,23.5706257 C137.051332,23.5706257 136.714226,23.525665 136.354647,23.4357437 C134.601696,22.8962158 132.69143,22.6264519 130.623848,22.6264519 C127.702264,22.6264519 125.02789,23.1322593 122.600728,24.1438741 C120.173566,25.1554889 118.162168,26.7740727 116.566534,28.9996253 C114.970899,31.225178 114.173082,33.8666167 114.173082,36.9239416 C114.173082,39.0370925 114.667504,40.9704009 115.656348,42.7238666 C116.645192,44.4773323 117.881247,45.8935931 119.364512,46.9726489 C119.454407,47.0176096 119.499355,47.0850506 119.499355,47.1749719 C119.499355,47.2648932 119.454407,47.3548145 119.364512,47.4447359 C118.105984,48.343949 117.094666,49.434245 116.33056,50.7156238 C115.566453,51.9970026 115.1844,53.3121019 115.1844,54.6609217 C115.1844,57.5384039 116.33056,59.7639565 118.622879,61.3375796 C118.712774,61.3825403 118.757722,61.4612214 118.757722,61.5736231 C118.757722,61.6860247 118.712774,61.7871862 118.622879,61.8771075 C116.824982,62.7763207 115.465321,63.8778569 114.543899,65.181716 C113.622476,66.4855751 113.161765,67.9243162 113.161765,69.4979393 C113.161765,71.7459723 113.925871,73.63432 115.454084,75.1629824 C116.982298,76.6916448 118.948748,77.7819408 121.353437,78.4338704 C123.758125,79.0857999 126.53363,79.4117647 129.679951,79.4117647 Z M130.623848,43.0610716 C129.140582,43.0610716 127.938238,42.5327838 127.016815,41.4762083 C126.095392,40.4196328 125.634681,38.9022106 125.634681,36.9239416 C125.634681,34.9906332 126.095392,33.4956913 127.016815,32.4391158 C127.938238,31.3825403 129.140582,30.8542525 130.623848,30.8542525 C132.107113,30.8542525 133.309457,31.3713001 134.23088,32.4053953 C135.152303,33.4394904 135.613014,34.9456725 135.613014,36.9239416 C135.613014,38.9022106 135.152303,40.4196328 134.23088,41.4762083 C133.309457,42.5327838 132.107113,43.0610716 130.623848,43.0610716 Z M131.567744,71.7234919 C129.005739,71.7234919 126.971868,71.3750468 125.466128,70.6781566 C123.960389,69.9812664 123.207519,68.9359311 123.207519,67.5421506 C123.207519,66.4181341 123.724415,65.3615586 124.758206,64.3724241 C124.893048,64.2375422 125.095312,64.1701012 125.364996,64.1701012 L125.364996,64.1701012 L125.56726,64.1701012 C126.690946,64.3949045 128.398949,64.5073061 130.691269,64.5073061 L130.691269,64.5073061 L134.399433,64.5073061 C136.377121,64.5073061 137.826676,64.7096291 138.748098,65.114275 C139.669521,65.5189209 140.130232,66.2607718 140.130232,67.3398277 C140.130232,68.5987261 139.332415,69.6440614 137.736781,70.4758336 C136.141147,71.3076058 134.084801,71.7234919 131.567744,71.7234919 Z M164.19959,17.9055826 C166.222225,17.9055826 167.88528,17.321094 169.188756,16.1521169 C170.492232,14.9831398 171.14397,13.4769577 171.14397,11.6335706 C171.14397,9.79018359 170.492232,8.27276133 169.188756,7.08130386 C167.88528,5.88984638 166.222225,5.29411765 164.19959,5.29411765 C162.132007,5.29411765 160.435241,5.88984638 159.109291,7.08130386 C157.783342,8.27276133 157.120367,9.79018359 157.120367,11.6335706 C157.120367,13.4769577 157.783342,14.9831398 159.109291,16.1521169 C160.435241,17.321094 162.132007,17.9055826 164.19959,17.9055826 Z M166.289646,62.6863994 C167.368385,62.6863994 168.301044,62.2929936 169.087624,61.5061821 C169.874205,60.7193706 170.267495,59.7864369 170.267495,58.707381 L170.267495,58.707381 L170.267495,27.3473211 C170.267495,26.2682653 169.874205,25.3353316 169.087624,24.54852 C168.301044,23.7617085 167.368385,23.3683027 166.289646,23.3683027 L166.289646,23.3683027 L162.042112,23.3683027 C160.918426,23.3683027 159.97453,23.7617085 159.210423,24.54852 C158.446317,25.3353316 158.064263,26.2682653 158.064263,27.3473211 L158.064263,27.3473211 L158.064263,58.707381 C158.064263,59.7864369 158.446317,60.7193706 159.210423,61.5061821 C159.97453,62.2929936 160.918426,62.6863994 162.042112,62.6863994 L162.042112,62.6863994 L166.289646,62.6863994 Z M195.617855,63.6305732 C197.325857,63.6305732 199.011387,63.4732109 200.674442,63.1584863 C201.753181,62.9786437 202.584709,62.3941551 203.169025,61.4050206 C203.573552,60.7306107 203.775816,60.0337205 203.775816,59.3143499 C203.775816,58.9996253 203.753342,58.6624204 203.708395,58.3027351 L203.708395,58.3027351 L203.43871,57.2236793 C203.213973,56.2795054 202.65213,55.5264144 201.753181,54.9644061 C200.854232,54.4023979 199.842914,54.0989135 198.719228,54.0539528 C195.617855,53.9190708 194.067168,51.8958411 194.067168,47.9842638 L194.067168,47.9842638 L194.067168,33.4844511 C194.067168,33.1697265 194.224484,33.0123642 194.539116,33.0123642 L194.539116,33.0123642 L199.326019,33.0123642 C200.404758,33.0123642 201.337417,32.6189584 202.123997,31.8321469 C202.910578,31.0453353 203.303868,30.1124016 203.303868,29.0333458 L203.303868,29.0333458 L203.303868,27.3473211 C203.303868,26.2682653 202.910578,25.3353316 202.123997,24.54852 C201.337417,23.7617085 200.404758,23.3683027 199.326019,23.3683027 L199.326019,23.3683027 L194.539116,23.3683027 C194.224484,23.3683027 194.067168,23.2109404 194.067168,22.8962158 L194.067168,22.8962158 L194.067168,17.0288498 C194.067168,15.9048333 193.673877,14.9606594 192.887297,14.1963282 C192.100717,13.431997 191.168057,13.0498314 190.089319,13.0498314 L190.089319,13.0498314 L187.796999,13.0498314 C186.673313,13.0498314 185.684469,13.4207568 184.830467,14.1626077 C183.976466,14.9044586 183.45957,15.8373923 183.279781,16.9614088 L183.279781,16.9614088 L182.538148,22.8962158 C182.4932,23.2109404 182.290937,23.3907831 181.931357,23.4357437 L181.931357,23.4357437 L180.38067,23.5706257 C179.256984,23.660547 178.313088,24.1213938 177.548981,24.953166 C176.784875,25.7849382 176.402821,26.7628325 176.402821,27.886849 L176.402821,27.886849 L176.402821,29.0333458 C176.402821,30.1124016 176.796111,31.0453353 177.582692,31.8321469 C178.369272,32.6189584 179.301932,33.0123642 180.38067,33.0123642 L180.38067,33.0123642 L181.257145,33.0123642 C181.571778,33.0123642 181.729094,33.1697265 181.729094,33.4844511 L181.729094,33.4844511 L181.729094,48.1191457 C181.729094,53.0198576 182.85278,56.8302735 185.100152,59.5503934 C187.347524,62.2705133 190.853425,63.6305732 195.617855,63.6305732 Z M228.586806,63.6305732 C232.182602,63.6305732 235.73345,62.798801 239.239351,61.1352567 C240.228195,60.6856501 240.857459,59.8988385 241.127144,58.774822 C241.261986,58.4151368 241.329407,58.0554515 241.329407,57.6957662 C241.329407,57.0213563 241.127144,56.3469464 240.722617,55.6725365 L240.722617,55.6725365 L240.520353,55.2678906 C239.980984,54.3237167 239.194403,53.6942675 238.160612,53.3795429 C237.66619,53.2446609 237.171768,53.1772199 236.677346,53.1772199 C236.09303,53.1772199 235.531187,53.2671413 234.991817,53.4469839 C233.463604,53.9865118 231.890443,54.2562758 230.272335,54.2562758 C224.968537,54.2562758 221.754794,51.8958411 220.631108,47.1749719 C220.586161,47.0400899 220.608635,46.9164481 220.698529,46.8040465 C220.788424,46.6916448 220.900793,46.635444 221.035635,46.635444 L221.035635,46.635444 L239.576457,46.635444 C240.74509,46.635444 241.778882,46.2645185 242.677831,45.5226677 C243.576779,44.7808168 244.048728,43.8478831 244.093675,42.7238666 L244.093675,42.7238666 L244.093675,41.4424878 C244.093675,35.7774447 242.655357,31.1914575 239.77872,27.684526 C236.902084,24.1775946 232.721971,22.4241289 227.238383,22.4241289 C224.856168,22.4241289 222.552612,22.907456 220.327713,23.8741102 C218.102814,24.8407643 216.125127,26.1895841 214.39465,27.9205695 C212.664173,29.6515549 211.270803,31.8321469 210.214538,34.4623454 C209.158273,37.092544 208.63014,39.9587861 208.63014,43.0610716 C208.63014,49.4005245 210.506696,54.4136381 214.259808,58.1004121 C218.01292,61.7871862 222.788586,63.6305732 228.586806,63.6305732 Z M233.171446,38.6774073 L220.833372,38.6774073 C220.51874,38.6774073 220.361424,38.5650056 220.361424,38.3402023 C220.361424,36.4968153 221.237899,34.8557512 222.990849,33.4170101 C224.249378,32.3379543 225.755117,31.7984264 227.508067,31.7984264 C229.530703,31.7984264 231.047679,32.3716748 232.058996,33.5181716 C233.070314,34.6646684 233.62092,36.204571 233.710815,38.1378794 L233.710815,38.1378794 L233.710815,38.2053203 C233.710815,38.520045 233.531025,38.6774073 233.171446,38.6774073 L233.171446,38.6774073 Z M269.713719,63.6305732 C273.309515,63.6305732 276.860363,62.798801 280.366264,61.1352567 C281.355108,60.6856501 281.984372,59.8988385 282.254057,58.774822 C282.388899,58.4151368 282.45632,58.0554515 282.45632,57.6957662 C282.45632,57.0213563 282.254057,56.3469464 281.84953,55.6725365 L281.84953,55.6725365 L281.647266,55.2678906 C281.107897,54.3237167 280.321317,53.6942675 279.287525,53.3795429 C278.793103,53.2446609 278.298682,53.1772199 277.80426,53.1772199 C277.219943,53.1772199 276.6581,53.2671413 276.11873,53.4469839 C274.590517,53.9865118 273.017357,54.2562758 271.399249,54.2562758 C266.09545,54.2562758 262.881708,51.8958411 261.758021,47.1749719 C261.713074,47.0400899 261.735548,46.9164481 261.825443,46.8040465 C261.915337,46.6916448 262.027706,46.635444 262.162548,46.635444 L262.162548,46.635444 L280.70337,46.635444 C281.872004,46.635444 282.905795,46.2645185 283.804744,45.5226677 C284.703693,44.7808168 285.175641,43.8478831 285.220588,42.7238666 L285.220588,42.7238666 L285.220588,41.4424878 C285.220588,35.7774447 283.78227,31.1914575 280.905633,27.684526 C278.028997,24.1775946 273.848884,22.4241289 268.365296,22.4241289 C265.983081,22.4241289 263.679525,22.907456 261.454626,23.8741102 C259.229728,24.8407643 257.25204,26.1895841 255.521563,27.9205695 C253.791087,29.6515549 252.397716,31.8321469 251.341451,34.4623454 C250.285186,37.092544 249.757053,39.9587861 249.757053,43.0610716 C249.757053,49.4005245 251.633609,54.4136381 255.386721,58.1004121 C259.139833,61.7871862 263.915499,63.6305732 269.713719,63.6305732 Z M274.298359,38.6774073 L261.960285,38.6774073 C261.645653,38.6774073 261.488337,38.5650056 261.488337,38.3402023 C261.488337,36.4968153 262.364812,34.8557512 264.117762,33.4170101 C265.376291,32.3379543 266.88203,31.7984264 268.634981,31.7984264 C270.657616,31.7984264 272.174592,32.3716748 273.18591,33.5181716 C274.197227,34.6646684 274.747833,36.204571 274.837728,38.1378794 L274.837728,38.1378794 L274.837728,38.2053203 C274.837728,38.520045 274.657938,38.6774073 274.298359,38.6774073 L274.298359,38.6774073 Z" id="gitee" fill="#FFFFFF" fill-rule="nonzero"></path>\n' +
    '            </g>\n' +
    '        </g>\n' +
    '    </g>\n' +
    '</svg>';

// https://vitepress.dev/reference/site-config
export default defineConfig({
    lastUpdated: true,
    title: 'Tinyflow',
    locales: {
        en: {
            label: 'English',
            lang: 'en',
            title: 'Tinyflow',
            titleTemplate: ':title - Tinyflow Official website',
            description: 'An AI workflow orchestration framework',
            themeConfig: {
                editLink: {
                    pattern: 'https://github.com/tinyflow-ai/tinyflow/edit/main/docs/:path',
                },
            }
        },
        zh: {
            titleTemplate: ':title - Tinyflow 官方网站',
            description: '一个 AI 工作流编排框架',
            label: '简体中文',
            lang: 'zh',

            themeConfig: {
                outline: {
                    label: '章节'
                },
                editLink: {
                    pattern: 'https://gitee.com/tinyflow-ai/tinyflow/edit/main/docs/:path',
                    text: '编辑当前页面'
                },

                nav: [
                    { text: '首页', link: '/' },
                    { text: '帮助文档', link: '/zh/what-is-tinyflow' },
                    {
                        text: 'ChangeLog',
                        link: 'https://github.com/tinyflow-ai/tinyflow/blob/main/changes.md'
                    }
                ],

                sidebar: [
                    {
                        text: '快速开始',
                        items: [
                            { text: 'Tinyflow 是什么', link: '/zh/what-is-tinyflow' },
                            { text: '快速开始', link: '/zh/quick-start' },
                            { text: '微信交流群', link: '/zh/communication' }
                        ]
                    },
                    {
                        text: '前端集成',
                        items: [
                            { text: '与 Vue 集成', link: '/zh/integration/vue' },
                            { text: '与 React 集成', link: '/zh/integration/react' },
                            { text: '与 Svelte 集成', link: '/zh/integration/svelte' },
                            { text: '与原生 JS 集成', link: '/zh/integration/native' },
                        ]
                    },
                    {
                        text: '后端集成',
                        items: [
                            { text: '与 Java 项目集成', link: '/zh/integration/java' },
                            { text: '与 Node.js 项目集成', link: '/zh/integration/nodejs' },
                            { text: '与 Python 项目集成', link: '/zh/integration/python' },
                        ]
                    },
                    {
                        text: '核心元素',
                        items: [
                            { text: '链条（Chain）', link: '/zh/core/llms' },
                            { text: '边（Edge）', link: '/zh/core/llms' },
                            { text: '节点（Node）', link: '/zh/core/memory' },
                            { text: '上下文（Context）', link: '/zh/core/embedding' },
                            { text: '监听器（Listener）', link: '/zh/core/embedding' },
                            { text: '执行条件（Condition）', link: '/zh/core/chain' }
                        ]
                    },
                ]
            }
        }
    },

    themeConfig: {
        // logo:'/assets/images/logo.png',
        search: {
            provider: 'local'
        },
        editLink: {
            pattern: 'https://github.com/tinyflow-ai/tinyflow/edit/main/docs/:path'
        },
        socialLinks: [
            { icon: { svg: gitee_icon_svg }, link: 'https://gitee.com/tinyflow-ai/tinyflow' },
            { icon: 'github', link: 'https://github.com/tinyflow-ai/tinyflow' }
        ],

        nav: [
            { text: 'Home', link: '/' },
            { text: 'Document', link: '/intro/what-is-agentsflex' },
            {
                text: 'ChangeLog',
                link: 'https://github.com/tinyflow-ai/tinyflow/blob/main/changes.md'
            }
        ],

        sidebar: [
            {
                text: 'Quick Start',
                items: [
                    { text: 'What is Tinyflow', link: '/intro/what-is-tinyflow' },
                    { text: 'Quick Start', link: '/intro/getting-started' },
                    { text: 'Maven Dependencies', link: '/intro/maven' },
                    { text: 'Communication', link: '/intro/communication' }
                ]
            },
            {
                text: 'Core Modules',
                items: [
                    { text: 'LLMs', link: '/core/llms' },
                    { text: 'Memory', link: '/core/memory' },
                    { text: 'Embedding', link: '/core/embedding' },
                    { text: 'Store', link: '/core/store' },
                    { text: 'Document', link: '/core/document' },
                    { text: 'Chain', link: '/core/chain' }
                ]
            },
            {
                text: 'Samples',
                items: [
                    { text: 'Simple Chat', link: '/samples/chat' },
                    { text: 'Chat With Histories', link: '/samples/chat-with-memory' },
                    { text: 'RAG Application', link: '/samples/rag' }
                ]
            }
        ],

        footer: {
            copyright:
                'Copyright © 2022-present Tinyflow AI. ' +
                '<span style="display: flex;align-items: center;justify-content: center;">' +
                '<span style="font-size: 12px;margin-right:10px;"><a style="color:#777" target="_blank" rel="noopener" href="http://beian.miit.gov.cn/">黔ICP备19009310号-16 </a></span>' +
                '</span>'
        }
    },
    head: [
        ['link', { rel: 'icon', href: '/assets/images/logo02.png' }],

        [
            // 添加百度统计
            'script',
            {},
            `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?7eaa4416bdf71eb6486a55f8d71f3397";
        var s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
      })();
        `
        ],

        [
            // 自动跳转 https
            'script',
            {},
            `
        if (location.protocol !== 'https:' && location.hostname != 'localhost') {
            location.href = 'https://' + location.hostname + location.pathname + location.search;
        }
        `
        ]
    ]
});
