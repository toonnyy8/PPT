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
        ]
        const learnable_patterns = [
            template.page(0)(
                'Learnable Patterns',
                template.div_hc(0)([
                    html.img({ src: './img/Learnable-Patterns.png', style: [css.w.percent(55)] }),
                ]),
            ),
            template.page(0)(
                'Learnable Patterns',
                template.div_hc(0)([
                    "降低計算量的原理與 Fixed Patterns 相同，但其關注區域是會變動的"
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
            template.page(0)(
                'Memory',
                template.div_hc(0)([
                    "利用額外加入的資訊(Memory)來提取、補足",
                ]),
            ),
            template.page2(0)(
                'Fixed',
                "Big Bird",
                template.div_hc(0)([
                    html.img({ src: './img/BigBird.png', style: [css.w.percent(100)] }),

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
            template.page(0)(
                'Low Rank & Kernel',
                template.div_hc(0)([
                    "藉由壓縮 Keys 與 Values 的全域資訊到少量向量中，來降低對大範圍注意力所消耗的資源",
                    "移除 softmax，使 K 與 V 可以先相乘"
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
                    "將輸入分段計算，並將前一段輸入所得之 hidden vector 加入本次計算中，就能增加關注的距離",
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