///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const experiments = (() => {
    return [
        template.default_page(
            "Experiments",
            html.p({ style: [css.tx.size(12), css.p.t(1)] })([
                html.ul({ style: [css.tx.left(), css.m.l(80)] })([
                    html.li()`vs Baseline ${html.br()}${html.br()}`,
                    html.li()`Content vs Position ${html.br()}${html.br()}`,
                    html.li()`Normalization ${html.br()}${html.br()}`,
                    html.li()`Other`,
                ]),
            ])
        ),
        template.page3(0)(
            "Experiments",
            "vs Baseline",
            "Classification",
            template.div_hc(0)([
                html.img({ src: "./img/lambda_vs_baseline-classification.png", style: [css.w.percent(90)] }),
            ])
        ),
        template.page3(0)(
            "Experiments",
            "vs Baseline",
            `Detection`,
            template.div_hc(0)([
                html.img({
                    src: "./img/lambda_vs_baseline-detection.png",
                    style: [css.w.percent(90)],
                }),
            ])
        ),
        template.page3(0)(
            "Experiments",
            "vs Baseline",
            `Segmentation`,
            template.div_hc(0)([
                html.img({
                    src: "./img/lambda_vs_baseline-segmentation.png",
                    style: [css.w.percent(90)],
                }),
            ])
        ),
        template.page3(0)(
            "Experiments",
            "vs Baseline",
            `Training`,
            template.div_hc(0)([
                html.img({
                    src: "./img/training.png",
                    style: [css.w.percent(70)],
                }),
            ])
        ),
        template.page2(0)(
            "Experiments",
            "Content vs Position",
            template.div_hc(0)([
                html.img({
                    src: "./img/content_vs_position.png",
                    style: [css.w.percent(90)],
                }),
                html.br(),
                html.br(),
                html.div({ style: [css.tx.size(8)] })`Position Lambda 提供的資訊比起 Content Lambda 更為重要`,
            ])
        ),
        template.page2(0)(
            "Experiments",
            "Normalization",
            template.div_hc(0)([
                html.img({
                    src: "./img/normalization_schemes.png",
                    style: [css.w.percent(90)],
                }),
                html.br(),
                html.br(),
                html.div({ style: [css.tx.size(10)] })`對 K 進行規範是有必要的`,
            ])
        ),
        template.page2(0)(
            "Experiments",
            "Other",
            template.div_hc(0)([
                html.img({
                    src: "./img/lambda_vs_conv.png",
                    style: [css.w.percent(70)],
                }),
                html.br(),
                html.br(),
                html.div({ style: [css.tx.size(9)] })`Lambda Layer 放至於 Convolution 之後會有比較好的效果`,
            ])
        ),
        template.page2(0)(
            "Experiments",
            "Other",
            template.div_hc(0)([
                html.img({
                    src: "./img/powerful.png",
                    style: [css.w.percent(100)],
                }),
                html.br(),
                html.br(),
                html.div({
                    style: [css.tx.left(), css.tx.size(8)],
                })`Lambda 具有比 Self Attention 更高的速度、正確率與更低的記憶體消耗量。`,
            ])
        ),
        template.page2(0)(
            "Experiments",
            "Other",
            template.div_hc(0)([
                html.img({
                    src: "./img/tradeoff.png",
                    style: [css.w.percent(70)],
                }),
            ])
        ),
        template.page3(0)(
            "Experiments",
            "Other",
            "Receptive Field",
            template.div_hc(0)([
                html.img({
                    src: "./img/position_lambda_scope_size.png",
                    style: [css.w.percent(100)],
                }),
                html.br(),
                html.br(),
                html.div({
                    style: [ css.tx.size(10)],
                })`在實驗中，Position Lambda 的感受野並非是越大越好。`,
            ])
        ),
    ]
})()
