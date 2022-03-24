///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const gradient_penalty =
    (() => {
        return [
            template.default_page(
                'Gradient Penalty',
                template.div_hc(0)([
                    html.img({ src: './img/gp-1.png', style: [css.w.percent(100)] }),
                ]),
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
                            html.td({ style: [css.w.percent(65)] })([
                                html.img({ src: './img/gp-weight.png', style: [css.w.percent(90)] }),
                            ]),
                            html.td({ class: ["text-lg"], style: [css.tx.justify(), css.w.percent(35)] })([
                                html.p()`The weights are evenly distributed around 0, which makes the model more robust.`,
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
                            html.td({ style: [css.w.percent(55)] })([
                                html.img({ src: './img/wc-vs-gp-gradient.png', style: [css.w.percent(95)] }),
                            ]),
                            html.td({ class: ["text-lg"], style: [css.tx.justify()] })([
                                html.p()`Even in a deep model, Gradient Penalty can keep the gradient stable without vanishing or exploding like Weight Clipping.`,
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