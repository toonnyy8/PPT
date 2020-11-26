///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const experiments = (() => {
    return [
        template.page(10)(
            "Experiments",
            html.ul({ class: ["text-lg"], style: [css.p.l(70), css.tx.left()] })([
                html.li()([
                    "Sample rate：16kHz"
                ]),
                html.li()([
                    "Hamming window",
                    html.ul()([
                        html.li()([
                            "size：512"
                        ]),
                        html.li()([
                            "stride：256"
                        ]),
                    ])
                ]),
                html.li()([
                    "Optimizer：Adam",
                ]),
            ])
        ),
        template.page2(0)(
            "Experiments",
            "Data Set",
            html.div({ class: ["text-lg"] })([
                html.ul({ style: [css.p.l(60)] })([
                    html.li()([
                        "語音：WSJ0 SI-84 dataset", html.br(),
                    ]),
                    html.li()(["訓練用噪音：", template.a("https://www.sound-ideas.com/")`10000 non-speech sounds from Sound Ideas`]),
                    html.li()(["測試用噪音：", template.a("https://auditec.com/")`babble and cafeteria noises from an Auditec CD`])
                ]),
            ]),
        ),
        template.page(0)(
            "Experiments",
            template.div_hc(0)([
                html.img({ src: './img/loss-vs.png', style: [css.w.percent(65)] }),
            ]),
        ),
        template.page(0)(
            "Experiments",
            template.div_hc(0)([
                html.img({ src: './img/experiments-1.png', style: [css.w.percent(100)] }),
            ]),
        ),
        template.page(0)(
            "Experiments",
            template.div_hc(0)([
                html.img({ src: './img/experiments-2.png', style: [css.w.percent(100)] }),
            ]),
        ),
        template.page(0)(
            "Experiments",
            template.div_hc(0)([
                html.img({ src: './img/alpha.png', style: [css.w.percent(65)] }),
            ]),
        ),
        template.page2(0)(
            "Experiments",
            "Demo",
            html.div()([
                html.br(),
                html.a({ class: ["text-xl"], href: "https://web.cse.ohio-state.edu/~wang.77/pnl/demo/PandeyDCN.html", style: [css.tx.color(40, 40, 40)] })
                    `https://web.cse.ohio-state.edu/~wang.77/pnl/demo/PandeyDCN.html`,
            ]),
        ),
    ]
})()