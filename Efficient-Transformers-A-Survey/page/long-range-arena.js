///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const long_range_arena =
    (() => {
        return [
            template.default_page(
                'Long Range Arena',
                html.ol({ style: [css.m.l(20)] })([
                    html.li({ style: [css.m.b(5)] })`Long ListOpt`,
                    html.li({ style: [css.m.b(5)] })`Byte-Level Text Classification`,
                    html.li({ style: [css.m.b(5)] })`Byte-Level Document Retrieval`,
                    html.li({ style: [css.m.b(5)] })`Image Classification on Sequences of Pixels`,
                    html.li({ style: [css.m.b(5)] })`Pathfinder`,
                    html.li()([html.del()`Pathfinder-X`]),
                ])
            ),
            template.default_page(
                'Gradient Penalty',
                template.div_hc(0)([
                    html.img({ src: './img/gp-2.png', style: [css.w.percent(100)] }),
                ]),
            ),
            template.page(0)(
                'Gradient Penalty',
                template.div_hc(0)([
                    html.table()([
                        html.tr()([
                            html.td({ style: [css.w.percent(60)] })([
                                html.img({ src: './img/gp-weight.png', style: [css.w.percent(90)] }),
                            ]),
                            html.td({ class: ["text-lg"], style: [css.tx.justify()] })([
                                html.p()`權重均勻的分佈在 0 的周圍，使模型具有更高的強健性。`,
                            ])
                        ]),
                    ]),
                ]),
            ),
            template.page(0)(
                'Gradient Penalty',
                template.div_hc(0)([
                    html.table()([
                        html.tr()([
                            html.td({ style: [css.w.percent(60)] })([
                                html.img({ src: './img/wc-vs-gp-gradient.png', style: [css.w.percent(90)] }),
                            ]),
                            html.td({ class: ["text-lg"], style: [css.tx.justify()] })([
                                html.p()`即便是在深層的模型中，Gradient Penalty 也可以使梯度保持穩定，而不會像 Weight Clipping 一樣發散或消失。`,
                            ])
                        ]),
                    ]),
                ]),
            ),
            template.page(0)(
                'Gradient Penalty',
                template.div_hc(0)([
                    html.table()([
                        html.tr()([
                            html.td({ style: [css.w.percent(10)] })([]),
                            html.td({ style: [css.w.percent(30)] })([
                                html.p()`8 Gaussians`,
                            ]),
                            html.td({ style: [css.w.percent(30)] })([
                                html.p()`25 Gaussians`,
                            ]),
                            html.td({ style: [css.w.percent(30)] })([
                                html.p()`Swiss Roll`,
                            ])
                        ]),
                        html.tr()([
                            html.td({ style: [css.w.percent(10)] })`WC`,
                            html.td({ style: [css.w.percent(30)] })([
                                html.img({ src: './img/8g-wgan.png', style: [css.w.percent(100)] }),
                            ]),
                            html.td({ style: [css.w.percent(30)] })([
                                html.img({ src: './img/25g-wgan.png', style: [css.w.percent(100)] }),
                            ]),
                            html.td({ style: [css.w.percent(30)] })([
                                html.img({ src: './img/sr-wgan.png', style: [css.w.percent(100)] }),
                            ])
                        ]),
                        html.tr()([
                            html.td({ style: [css.w.percent(10)] })`GP`,
                            html.td({ style: [css.w.percent(30)] })([
                                html.img({ src: './img/8g-wgan-gp.png', style: [css.w.percent(100)] }),
                            ]),
                            html.td({ style: [css.w.percent(30)] })([
                                html.img({ src: './img/25g-wgan-gp.png', style: [css.w.percent(100)] }),
                            ]),
                            html.td({ style: [css.w.percent(30)] })([
                                html.img({ src: './img/sr-wgan-gp.png', style: [css.w.percent(100)] }),
                            ])
                        ]),
                    ]),
                ]),
            ),
            template.page2(0)(
                'Gradient Penalty',
                'Loss',
                template.div_hc(0)([
                    html.table()([
                        html.tr()([
                            html.td({ style: [css.w.percent(30)] })`Generate Loss`,
                            html.td({ style: [css.w.percent(70)] })([
                                html.img({ src: './img/g-loss.png', style: [css.w.percent(55)] }),
                            ]),
                        ]),
                        html.tr()([
                            html.td({ style: [css.w.percent(30)] })`Critic Loss`,
                            html.td({ style: [css.w.percent(70)] })([
                                html.img({ src: './img/c-loss.png', style: [css.w.percent(90)] }),
                            ]),
                        ]),
                    ]),
                ]),
            ),
        ]
    })()