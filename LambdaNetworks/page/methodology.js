///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const methodology = (() => {
    return [
        template.default_page(
            "Methodology",
            html.p({ style: [css.tx.center(), css.tx.size(12), css.p.t(15)] })([
                `Content Lambda`,
                html.br(),
                `+`,
                html.br(),
                `Position Lambda`,
            ])
        ),
        template.page2(0)("Methodology", "Content Lambda", template.div_hc(40)([`對 Feature「Map」的匹配`])),
        template.page2(0)("Methodology", "Position Lambda", template.div_hc(40)([`對 Feature「Map」的匹配`])),
    ]
})()
