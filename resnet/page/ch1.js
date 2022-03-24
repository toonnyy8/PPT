///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const ch1 = (() => {
    return [
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-4xl"] })`問題：模型是不是越深越好`
                ])
            ])
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-2xl"] })`答案是否定的`,
                    html.br(),
                    html.br(),
                    html.img({ style: [css.w.percent(70)], src: "./img/plain-cnn-error.png" })
                ])
            ])
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-2xl"] })`可以看到，增加層數反而使 error 增加了`,
                    html.br(),
                    html.br(),
                    html.img({ style: [css.w.percent(70)], src: "./img/plain-cnn-error.png" })
                ])
            ])
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-2xl"] })`這個現象是源於`,
                    html.br(),
                    html.br(),
                    html.span({ class: ["text-4xl"] })`梯度消失`,
                    html.br(),
                    html.span({ class: ["text-4xl"] })`Vanishing Gradient`,
                ])
            ])
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.img({ style: [css.w.percent(80)], src: "./img/vg-1.png" })
                ])
            ])
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.img({ style: [css.w.percent(90)], src: "./img/vg-2.png" })
                ])
            ])
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.img({ style: [css.w.percent(90)], src: "./img/vg-3.png" })
                ])
            ])
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-2xl"] })`越靠前面的 layer 更新越慢`,
                    html.br(),
                    html.br(),
                    html.img({ style: [css.w.percent(60)], src: "./img/vanishing-gradient.png" })
                ])
            ])
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-2xl"] })`超有效又簡單的解決方案`,
                    html.br(),
                    html.br(),
                    html.span({ class: ["text-4xl"] })`Residual Block`,
                    html.br(),
                    html.br(),
                    html.span({ class: ["text-2xl"] })`白話文：加一個 shortcut`,
                ])
            ])
        ]),
    ]
})()
