///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const methodology =
    (() => {
        return [
            template.default_page(
                'Methodology',
                html.p({ style: [css.tx.center(), css.tx.size(12), css.p.t(15)] })([
                    html.a({
                        href: 'https://arxiv.org/abs/1505.04597',
                        style: [css.tx.color(40, 40, 40)]
                    })`U-Net`, html.br(),
                    `+`, html.br(), html.a({
                        href: 'https://arxiv.org/abs/1608.06993',
                        style: [css.tx.color(40, 40, 40)]
                    })`Dense Net`, html.br(),
                    `+`, html.br(), html.a({
                        href: 'https://arxiv.org/abs/1609.05158',
                        style: [css.tx.color(40, 40, 40)]
                    })`Sub-pixel Convolution`, html.br(),
                    `+`, html.br(), html.a({
                        href: 'https://arxiv.org/abs/1706.03762',
                        style: [css.tx.color(40, 40, 40)]
                    })`Self Attention`,
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'Input',
                template.div_hc(0)([
                    html.img({ src: './img/input.png', style: [css.w.percent(100)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'U-Net',
                template.div_hc(0)([
                    html.img({ src: './img/u-net.png', style: [css.w.percent(100)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'Dense Net',
                template.div_hc(0)([
                    html.img({ src: './img/dense-net.png', style: [css.w.percent(100)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'Sub-pixel Convolution',
                template.div_hc(0)([
                    html.img({ src: './img/sub-pixel.png', style: [css.w.percent(70)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'Self Attention',
                template.div_hc(0)([
                    html.p()([
                        'Causal：Softmax(Mask(QK', html.sup()`T`, '))V'
                    ]),
                    html.br(),
                    html.p()([
                        'Non Causal：Softmax(QK', html.sup()`T`, ')V'
                    ]),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'Loss',
                html.ul({ class: ["text-lg"], style: [css.p.l(30)] })([
                    html.li()([
                        `Time-Domain Loss`, html.br(),
                        html.img({ src: './img/loss-t-w.png', style: [css.w.percent(50)] }), html.br(),
                    ]),
                    html.li()([
                        `STFT Magnitude Loss`, html.br(),
                        html.img({ src: './img/loss-sm-w.png', style: [css.w.percent(80)] }), html.br(),
                    ]),
                    html.li()([
                        `Time-frequency Loss`, html.br(),
                        html.img({ src: './img/loss-tf-w.png', style: [css.w.percent(70)] }), html.br(),
                    ]),
                    html.li()([
                        `Phase Constrained Magnitude Loss`, html.br(),
                        html.img({ src: './img/loss-pcm-w.png', style: [css.w.percent(100)] }), html.br(),
                    ]),
                ]),
            ),
            template.page3(0)(
                'Methodology',
                'Loss',
                'PCM Loss',
                template.div_hc(0)([
                    html.img({ src: './img/sm-vs-pcm.png', style: [css.w.percent(80)] })
                ]),
            ),
        ]
    })()