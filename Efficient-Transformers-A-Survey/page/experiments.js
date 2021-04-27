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
                html.p()`利用 Gradient Penalty 可以使 WGAN 泛化到各模型架構`
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
                            html.p()`可以達到與 DCGCN 相當的水平，且訓練收斂性不會限制於模型架構。`
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
                html.p({ class: ["text-lg"] })`當使用 WGAN-GP 時，若真實樣本過少，`,
                html.p({ class: ["text-lg"] })`Critic 會比 Generator 更快發生 Overfitting`
            ]),
        ),
    ]
})()