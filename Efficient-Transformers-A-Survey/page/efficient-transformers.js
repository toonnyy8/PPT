///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const efficient_transformers =
    (() => {
        const fixed_patterns = [
            template.page(0)(
                'Fixed Patterns',
                template.div_hc(0)([
                    html.img({ src: './img/Fixed-Patterns.png', style: [css.w.percent(55)] }),
                ]),
            ),
            template.page2(0)(
                'Fixed',
                "Image Transformer",
                template.div_hc(0)([
                    html.table()([
                        html.tr()([
                            html.td({ style: [css.w.percent(60)] })([
                                html.img({ src: './img/Image-Transformer.png', style: [css.w.percent(90)] }),
                            ]),
                            html.td({ class: ["text-lg"], style: [css.tx.justify()] })([
                                html.p()`Fixed Patterns 利用只計算部分位置的之間的注意力權重，來降低計算量。`,
                            ])
                        ]),
                    ]),
                ]),
            ),
            template.page2(0)(
                'Fixed',
                "Shortcomings",
                template.div_hc(0)([
                    "固定的關注區塊無法處理所有狀況，會有缺失的資訊"
                ]),
            ),
        ]
        const learnable_patterns = [
            template.page(0)(
                'Learnable Patterns',
                template.div_hc(0)([
                    html.img({ src: './img/Learnable-Patterns.png', style: [css.w.percent(55)] }),
                ]),
            ),
            template.page3(0)(
                'Learnable',
                "Reformer",
                "Sort",
                template.div_hc(0)([
                    html.img({ src: './img/Reformer-sort.png', style: [css.w.percent(90)] }),
                    html.p({ class: ["text-lg"] })([
                        "依據每個 key、query 的相似度，將其分組",
                        html.ul({ style: [css.tx.left(), css.p.l(40)] })([
                            html.li()`在 Reformer 中使用 Locality Sensitive Hash 分組`,
                            html.li()`Routing Transformer 則是用 k-means 分組`
                        ]),
                    ])

                ]),
            ),
            template.page3(0)(
                'Learnable',
                "Reformer",
                "Attention",
                template.div_hc(0)([
                    html.img({ src: './img/Reformer-attention.png', style: [css.w.percent(90)] }),
                    html.p({ class: ["text-lg"] })([
                        "進行組內的 Self Attention",
                        html.br(),
                        html.br(),
                        `不同組代表`,
                        html.span({ style: [css.tx.color(255, 100, 100)] })`相似度低`,
                        `，沒有互相匹配的必要`
                    ])
                ]),
            ),
            template.page2(0)(
                'Fixed',
                "Shortcomings",
                template.div_hc(0)([
                    "在分組的過程中會產生 overhead，導致計算速度無法提升。"
                ]),
            ),
        ]
        const memory = [
            template.page(0)(
                'Memory',
                template.div_hc(0)([
                    html.img({ src: './img/Memory.png', style: [css.w.percent(55)] }),
                ]),
            ),
            template.page2(0)(
                'Memory',
                "Set Transformer",
                template.div_hc(0)([
                    html.img({ src: './img/Set-Transformer.png', style: [css.w.percent(100)] }),

                ]),
            ),
            template.page2(0)(
                'Memory',
                "Global-Attention",
                template.div_hc(0)([
                    html.img({ src: './img/Global-Attention.png', style: [css.w.percent(80)] }),

                ]),
            ),
            template.page2(0)(
                'Memory',
                "Big Bird",
                template.div_hc(0)([
                    html.img({ src: './img/BigBird.png', style: [css.w.percent(100)] }),

                ]),
            ),
            template.page2(0)(
                'Fixed',
                "Shortcomings",
                template.div_hc(0)([
                    "雖然能獲得全域資訊，但會因為壓縮導致其有所缺損。",
                    html.br(),
                    "因為所有資訊都混和在一起，因此無法處理自回歸任務(無法遮罩)。"
                ]),
            ),
        ]
        const low_rank = [
            template.page(0)(
                'Low Rank & Kernel',
                template.div_hc(0)([
                    html.img({ src: './img/Low-Rank.png', style: [css.w.percent(55)] }),
                ]),
            ),
            template.page2(0)(
                html.div()(['Low Rank', html.br(), '& Kernel']),
                "No Attention Matrix",
                template.div_hc(0)([
                    html.img({ src: './img/Low-Rank-1.png', style: [css.w.percent(65)] }),

                ]),
            ),
            template.page2(0)(
                html.div()(['Low Rank', html.br(), '& Kernel']),
                "kernel function：σ",
                template.div_hc(0)([
                    html.img({ src: './img/Low-Rank-2.png', style: [css.w.percent(80)] }),

                ]),
            ),
            template.page(0)(
                'Low Rank & Kernel',
                template.div_hc(0)([
                    "藉由壓縮 Keys 與 Values 的全域資訊到少量向量中，來降低對大範圍注意力所消耗的資源",
                    "移除 softmax，使 K 與 V 可以先相乘"
                ]),
            ),
            template.page2(0)(
                'Fixed',
                "Shortcomings",
                template.div_hc(0)([
                    "在沒有注意力矩陣的情況下，難以並行性訓練自回歸任務。"
                ]),
            ),
        ]
        const recurrence = [
            template.page(0)(
                'Recurrence',
                template.div_hc(0)([
                    html.img({ src: './img/Recurrence.png', style: [css.w.percent(55)] }),
                ]),
            ),
            template.page(0)(
                'Recurrence',
                template.div_hc(0)([
                    "將輸入分段計算，並將前一段輸入所得之 hidden vector 加入本次計算中，就能增加關注的距離",
                ]),
            ),
            template.page2(0)(
                'Recurrence',
                'Transformer XL',
                template.div_hc(0)([
                    html.img({ src: './img/Recurrence-1.png', style: [css.w.percent(70)] }),
                ]),
            ),
            template.page2(0)(
                'Recurrence',
                'Transformer XL',
                template.div_hc(0)([
                    html.img({ src: './img/Recurrence-2.png', style: [css.w.percent(70)] }),
                ]),
            ),
            template.page2(0)(
                'Recurrence',
                'Transformer XL',
                template.div_hc(0)([
                    html.img({ src: './img/Recurrence-3.png', style: [css.w.percent(70)] }),
                ]),
            ),
        ]
        return [
            html.page()([
                template.div_hc(0)([
                    html.img({ src: './img/Taxonomy-of-Efficient-Transformer-Architectures.png', style: [css.w.percent(85)] }),
                ]),
            ]),
            ...fixed_patterns,
            ...learnable_patterns,
            ...memory,
            ...low_rank,
            ...recurrence,
            template.page2(0)(
                'Wasserstein GAN',
                '判別器 => 評估器',
                template.div_hc(0)([
                    html.img({ src: './img/wrong-way-to-update.png', style: [css.w.percent(80)] }),
                    html.p()`不做限制的話可能會導致權重無限制增長`
                ]),
            ),
            template.page2(0)(
                'Wasserstein GAN',
                'Weight Clipping',
                template.div_hc(0)([
                    html.table()([
                        html.tr()([
                            html.td({ style: [css.w.percent(60)] })([
                                html.img({ src: './img/weight-clipping.png', style: [css.w.percent(90)] }),
                            ]),
                            html.td({ class: ["text-lg"], style: [css.tx.justify()] })([
                                html.p()`在 WGAN 原文中使用 Weight Clipping 來限制權重大小。`,
                                html.br(),
                                html.p()`但卻會造成梯度消失或爆炸。`,
                            ])
                        ]),
                    ]),
                ]),
            ),
        ]
    })()