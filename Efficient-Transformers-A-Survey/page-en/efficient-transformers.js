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
                                html.img({ src: './img/Image-Transformer.png', style: [css.w.percent(80)] }),
                            ]),
                            html.td({ class: ["text-lg"], style: [css.tx.justify()] })([
                                html.p()`Fixed Patterns uses only partial areas of the attention weight to reduce the amount of calculation.`,
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
            template.page3(0)(
                'Learnable',
                "Reformer",
                "Sort",
                template.div_hc(0)([
                    html.img({ src: './img/Reformer-sort.png', style: [css.w.percent(90)] }),
                    html.p({ class: ["text-lg"] })([
                        "Group each key and query according to their similarity",
                        html.ul({ style: [css.tx.left(), css.p.l(40)] })([
                            html.li()`Use Locality Sensitive Hash grouping in Reformer`,
                            html.br(),
                            html.li()`Routing Transformer uses k-means grouping`
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
                        "Self Attention in the group",
                        html.br(),
                        html.br(),
                        `Different groups represent `,
                        html.span({ style: [css.tx.color(255, 100, 100)] })`low similarity`,
                        `, and there is no need to match each other`
                    ])
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
                "Global Attention",
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
                "Linformer",
                template.div_hc(0)([
                    html.img({ src: './img/Linformer.png', style: [css.w.percent(100)] }),

                ]),
            ),
            template.page2(0)(
                html.div()(['Low Rank', html.br(), '& Kernel']),
                html.div({ style: [css.tx.left(), css.p.l(70)] })(['Linear Transformer', html.br(), 'Performer']),
                template.div_hc(0)([
                    html.img({ src: './img/Linear-Transformer.png', style: [css.w.percent(95)] }),

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
            template.page2(0)(
                'Recurrence',
                'Compressive Transformer',
                template.div_hc(0)([
                    html.img({ src: './img/Compressive-Transformer.png', style: [css.w.percent(100)] }),
                ]),
            ),
        ]
        const shortcomings = [
            template.page(0)(
                "Shortcomings",
                template.div_hc(0)([
                    html.ul({ class: ["text-lg"], style: [css.tx.left(), css.p.l(10)] })([
                        html.li()([
                            `Fixed Patterns`,
                            html.ul()([
                                html.li()([
                                    html.span({ style: [css.tx.color(100, 200, 255)] })`The fixed focus area`,
                                    ' is prone to ',
                                    html.span({ style: [css.tx.color(255, 100, 100)] })`lack of information`,
                                    '.'
                                ])
                            ])
                        ]),
                        html.br(),
                        html.li()([
                            `Learnable Patterns`,
                            html.ul()([
                                html.li()([
                                    html.span({ style: [css.tx.color(100, 200, 255)] })`In the process of grouping`,
                                    ', overhead will be generated, and the ',
                                    html.span({ style: [css.tx.color(255, 100, 100)] })`calculation speed`,
                                    ' cannot be improved.'
                                ])
                            ])
                        ]),
                        html.br(),
                        html.li()([
                            `Memory`,
                            html.ul()([
                                html.li()([
                                    'Because ',
                                    html.span({ style: [css.tx.color(100, 200, 255)] })`the context information is compressed`,
                                    ', it cannot be directly applied to ',
                                    html.span({ style: [css.tx.color(255, 100, 100)] })`autoregressive tasks`,
                                    '.'
                                ]),
                                html.li()([
                                    'And compression will also cause ',
                                    html.span({ style: [css.tx.color(255, 100, 100)] })`information loss`,
                                    '.'
                                ]),
                            ])
                        ])
                    ])
                ]),
            ),
            template.page(0)(
                "Shortcomings",
                template.div_hc(0)([
                    html.ul({ class: ["text-lg"], style: [css.tx.left(), css.p.l(30)] })([
                        html.li()([
                            `Low Rank & Kernel`,
                            html.ul({})([
                                html.li()([
                                    'It is difficult to implement ',
                                    html.span({ style: [css.tx.color(255, 100, 100)] })`parallel training`,
                                    ' in autoregressive tasks.'
                                ]),
                                html.br(),
                                html.li()([
                                    "Performer's query and key ",
                                    html.span({ style: [css.tx.color(255, 100, 100)] })`need a greater depth`,
                                    ' after conversion to maintain accuracy.',
                                ]),
                                html.br(),
                                html.li()([
                                    'Linformer compresses the length L of keys&values to k, but in order to maintain accuracy, ',
                                    html.span({ style: [css.tx.color(255, 100, 100)] })`the size of k is still related to L`,
                                    '.'
                                ])
                            ])
                        ]),
                    ])
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
            ...shortcomings,
        ]
    })()