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
                html.span({ class: ["text-2xl"] })([html.br(), 'Discriminator => Critic']),
                template.div_hc(0)([
                    html.p()`Solve the problem of vanishing gradient`,
                    html.ol({ style: [css.tx.justify(), css.p.l(50)] })([
                        html.li()`Remove the Sigmoid in the output.`,
                        html.li()`Remove the log in loss.`,
                    ]),
                    html.img({ src: './img/d2c-2.png', style: [css.w.percent(100)] }),
                ]),
            ),
            template.page2(0)(
                'Wasserstein GAN',
                html.span({ class: ["text-2xl"] })([html.br(), 'Discriminator => Critic']),
                template.div_hc(0)([
                    html.img({ src: './img/wrong-way-to-update.png', style: [css.w.percent(70)] }),
                    html.p({ style: [css.tx.justify()] })`Without restrictions, it may lead to unlimited weight growth.`
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
                                html.p()`Use Weight Clipping in the original WGAN paper to limit the weight.`,
                                html.br(),
                                html.p()`But it will cause the gradient to vanish or explode.`,
                            ])
                        ]),
                    ]),
                ]),
            ),
        ]
    })()