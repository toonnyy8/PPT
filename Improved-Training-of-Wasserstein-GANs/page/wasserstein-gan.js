///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const wasserstein_gan =
    (() => {
        return [
            template.default_page(
                'Wasserstein GAN',
                template.div_hc(0)([
                    html.img({ src: './img/d2c-1.png', style: [css.w.percent(75)] }),
                ]),
            ),
            template.page2(0)(
                'Wasserstein GAN',
                '判別器 => 評估器',
                template.div_hc(0)([
                    html.p()`解決梯度消失的問題`,
                    html.ol({ style: [css.tx.justify(), css.p.l(100)] })([
                        html.li()`移除輸出的 Sigmoid`,
                        html.li()`移除 loss 的 log`,
                    ]),
                    html.img({ src: './img/d2c-2.png', style: [css.w.percent(100)] }),
                ]),
            ),
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