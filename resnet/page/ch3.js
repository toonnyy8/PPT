///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const ch3 = (() => {
    return [
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-4xl"] })`加碼：更多種 Block`,
                ])
            ])
        ]),
        template.page(0)(
            "DenseNet",
            template.div_hc(0)([
                html.img({ style: [css.w.percent(100)], src: "./img/dense-block.png" })
            ])),
        template.page(0)(
            "DenseNet",
            html.ul({ style: [css.m.l(20)] })([
                html.li()`除了做到恆等映射外，還充分整合了各種感受野的特徵。`,
                html.br(),
                html.li()`只要更少的權重與計算量就能做的比 ResNet 更好。`,
            ])),
        template.page(0)(
            "VoVNet",
            template.div_hc(0)([
                html.img({ style: [css.w.percent(70)], src: "./img/vov-block.png" }),
            ])),
        template.page(0)(
            "VoVNet",
            html.ul({ style: [css.m.l(80)] })([
                html.li()`繼承 DenseNet 的優點。`,
                html.br(),
                html.li()`比 DenseNet 更快速輕量。`,
            ])),
        template.page(0)(
            "小挑戰",
            html.ul({ style: [css.m.l(30)] })([
                html.li()`請規劃一個實驗，來證明模型是不是越深越好。`,
                html.li()`請規劃一個實驗，向大家說明 shortcut 是否有效。`,
                html.li()`請比較 residual block 與另外一種 conv block 的效果。`,
            ])),
    ]
})()
