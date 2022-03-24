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
                html.div({ style: [css.tx.size(8)] })`Position Lambda is more important than Content Lambda.`,
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
                html.div({ style: [css.tx.size(10)] })`It is necessary to regulate K.`,
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
                html.div({ style: [css.tx.size(9)] })`Lambda Layer will have better results after Convolution.`,
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
                })`Lambda has higher speed, accuracy and lower memory consumption than Self Attention.`,
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
                    style: [css.tx.size(10)],
                })`In the experiment, the receptive field of Position Lambda is not the bigger the better.`,
            ])
        ),
    ]
})()
