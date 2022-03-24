///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const experiments = (() => {
    return [
        template.page2(0)(
            "Experiments",
            "Robustness",
            template.div_hc(0)([
                html.img({ src: './img/figure-2-1.png', style: [css.w.percent(100)] }),
            ]),
        ),
        template.page2(0)(
            "Experiments",
            "Robustness",
            template.div_hc(0)([
                html.img({ src: './img/figure-2-2.png', style: [css.w.percent(100)] }),
                html.p({ style: [css.tx.justify()] })`Use Gradient Penalty to apply WGAN to each model architecture.`
            ]),
        ),
        template.page2(0)(
            "Experiments",
            "Inception Score",
            template.div_hc(0)([
                html.table()([
                    html.tr()([
                        html.td({ style: [css.w.percent(65)] })([
                            html.img({ src: './img/inception-score.png', style: [css.w.percent(90)] }),
                        ]),
                        html.td({ style: [css.w.percent(35), css.tx.justify()] })([
                            html.p()`It can reach a level equivalent to DCGCN, and the training convergence is not limited to a certain model architecture.`
                        ]),
                    ]),
                ]),
            ]),
        ),
        template.page2(0)(
            "Experiments",
            "Overfitting",
            template.div_hc(0)([
                html.table()([
                    html.tr()([
                        html.td({ style: [css.w.percent(50)] })`Non Overfitting`,
                        html.td({ style: [css.w.percent(50)] })`Overfitting`
                    ]),
                    html.tr()([
                        html.td({ style: [css.w.percent(50)] })([
                            html.img({ src: './img/non-overfitting.png', style: [css.w.percent(95)] }),
                        ]),
                        html.td({ style: [css.w.percent(50)] })([
                            html.img({ src: './img/overfitting.png', style: [css.w.percent(98)] }),
                        ]),
                    ]),
                ]),
                html.p({ class: ["text-lg"], style: [css.tx.justify()] })`When using WGAN-GP, if there are too few real samples, Critic will overfitting faster than Generator.`
            ]),
        ),
    ]
})()