///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const conclusion = (() => {
    return [
        template.default_page(
            "Conclusion",
            html.div({ class: ["text-base"] })([
                html.ul()([
                    html.li({ style: [css.tx.color(100, 255, 50)] })([
                        `可以將 Lambda Layer 理解成為更加優秀的 Channel + Spatial Attention。`,
                        html.br(),
                        html.br(),
                    ]),
                    html.li({ style: [css.tx.color(100, 255, 50)] })([
                        `與 Linear Attention 相比，Lambda Layer 具有更好的位置關注能力。`,
                        html.br(),
                        html.br(),
                    ]),
                    html.li({ style: [css.tx.color(100, 255, 50)] })([
                        `比 Self Attention 更輕便快速。`,
                        html.br(),
                        html.br(),
                    ]),
                ]),
            ])
        ),
    ]
})()
