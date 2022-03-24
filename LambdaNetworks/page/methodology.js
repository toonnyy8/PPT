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
        template.page(0)(
            'Methodology',
            template.div_hc(0)([
                html.img({ src: './img/qkv.png', style: [css.w.percent(90)] })
            ]),
        ),
        template.page(0)(
            'Methodology',
            template.div_hc(0)([
                html.img({ src: './img/q.png', style: [css.w.percent(100)] })
            ]),
        ),
        template.page(0)(
            'Methodology',
            template.div_hc(0)([
                html.img({ src: './img/k.png', style: [css.w.percent(100)] })
            ]),
        ),
        template.page(0)(
            'Methodology',
            template.div_hc(0)([
                html.img({ src: './img/v.png', style: [css.w.percent(100)] })
            ]),
        ),
        template.page(0)(
            'Methodology',
            template.div_hc(0)([
                html.img({ src: './img/lambda.png', style: [css.w.percent(75)] })
            ]),
        ),
        template.page2(0)("Methodology", "Content Lambda", template.div_hc(40)([`對 Feature「Map」的匹配`])),
        template.page2(0)(
            'Methodology',
            "Content Lambda",
            template.div_hc(0)([
                html.img({ src: './img/content_lambda-1.png', style: [css.w.percent(80)] })
            ]),
        ),
        template.page2(0)(
            'Methodology',
            "Content Lambda",
            template.div_hc(0)([
                html.img({ src: './img/content_lambda-2.png', style: [css.w.percent(70)] })
            ]),
        ),
        template.page2(0)(
            'Methodology',
            "Content Lambda",
            template.div_hc(0)([
                html.img({ src: './img/content_lambda-3.png', style: [css.w.percent(80)] })
            ]),
        ),
        template.page2(0)(
            'Methodology',
            "Content Lambda",
            template.div_hc(0)([
                html.img({ src: './img/content_lambda-4.png', style: [css.w.percent(70)] })
            ]),
        ),
        template.page2(0)("Methodology", "Position Lambda", template.div_hc(40)([`對 Feature「Vector」的匹配`])),
        template.page2(0)(
            'Methodology',
            "Position Lambda",
            template.div_hc(0)([
                html.img({ src: './img/position_lambda-1.png', style: [css.w.percent(90)] })
            ]),
        ),
        template.page2(0)(
            'Methodology',
            "Position Lambda",
            template.div_hc(0)([
                html.img({ src: './img/position_lambda-2.png', style: [css.w.percent(70)] })
            ]),
        ),
        template.page2(0)(
            'Methodology',
            "Position Lambda",
            template.div_hc(0)([
                html.img({ src: './img/position_lambda-3.png', style: [css.w.percent(80)] })
            ]),
        ),
    ]
})()
