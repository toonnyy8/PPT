///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const architecture =
    (() => {
        return [
            template.page(0)(
                'Architecture',
                template.div_hc(0)([html.img({ src: './img/complete-model.png', style: [css.w.percent(100)] })]),
            ),
            template.page2(0)(
                'Architecture',
                '1 x 3 Conv',
                template.div_hc(0)([
                    html.img({ src: './img/1x3conv.png', style: [css.w.percent(60)] })
                ]),
            ),
            template.page2(0)(
                'Architecture',
                'Self Attention Shape',
                template.div_hc(0)([
                    html.img({ src: './img/self-attention-reshape.png', style: [css.w.percent(75)] })
                ]),
            ),
            template.page2(0)(
                'Architecture',
                'Self Attention Shape',
                template.div_hc(0)([
                    html.img({ src: './img/self-attention-shape.png', style: [css.w.percent(25)] })
                ]),
            ),
            template.page2(0)(
                'Architecture',
                'Dense Net Conv',
                template.div_hc(0)([html.img({ src: './img/dense-net-conv.png', style: [css.w.percent(70)] })]),
            ),
            template.page3(0)(
                'Architecture',
                'Dense Net Conv',
                'Causal',
                template.div_hc(0)([html.img({ src: './img/causal-conv.png', style: [css.w.percent(60)] })]),
            ),
        ]
    })()