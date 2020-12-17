///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const conclusion = (() => {
    return [
        template.default_page(
            "Conclusion",
            html.p({ style: [css.p.t(1)] })([
                html.ul({ style: [css.tx.size(8)] })([
                    html.li({ style: [css.tx.color(50, 125, 50)] })([
                        `Lambda Layer can be understood as a better Channel + Spatial Attention.`,
                        html.br(),
                        html.br(),
                    ]),
                    html.li({ style: [css.tx.color(50, 125, 50)] })([
                        `Compared with Linear Attention, Lambda Layer has the ability to focus better position.`,
                        html.br(),
                        html.br(),
                    ]),
                    html.li({ style: [css.tx.color(50, 125, 50)] })([
                        `Lighter and faster than Self Attention.`,
                        html.br(),
                        html.br(),
                    ]),
                ]),
            ])
        ),
    ]
})()
