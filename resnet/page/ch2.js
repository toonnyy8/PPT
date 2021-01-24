///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const ch2 = (() => {
    return [
        template.page(0)(
            "Shortcut Forward",
            template.div_hc(0)([
                html.img({ style: [css.w.percent(55)], src: "./img/res-block.png" })
            ])),
        template.page(0)(
            "Shortcut Backward",
            template.div_hc(0)([
                html.img({ style: [css.w.percent(55)], src: "./img/backward.png" }),
            ])),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-2xl"] })`shortcut 達成了`,
                    html.br(),
                    html.br(),
                    html.span({ class: ["text-4xl"] })`恆等映射`,
                    html.br(),
                    html.span({ class: ["text-4xl"] })`Identity Mappings`,
                    html.br(),
                    html.br(),
                    html.span({ class: ["text-2xl"] })`消除了冗於結構的負面影響`,
                ])
            ])
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-2xl"] })`人為設計的多層結構，不一定每一層都有用處`,
                    html.br(),
                    html.img({ style: [css.w.percent(90)], src: "./img/more-res-1.png" }),
                ])
            ])
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-2xl"] })`模型只要將冗於的部分歸 0 就不會受到拖累`,
                    html.br(),
                    html.img({ style: [css.w.percent(90)], src: "./img/more-res-2.png" }),
                ])
            ])
        ]),
        template.page(0)(
            "ResNet 效果",
            template.div_hc(0)([
                html.img({ style: [css.w.percent(70)], src: "./img/res-net-error.png" }),
            ])),
        template.page(0)(
            "PlainCNN vs ResNet",
            template.div_hc(0)([
                html.img({ style: [css.w.percent(50)], src: "./img/plain-cnn-error.png" }),
                html.img({ style: [css.w.percent(50)], src: "./img/res-net-error.png" }),
            ])),
        template.page(0)(
            "Shortcut 越乾淨越好",
            template.div_hc(0)([
                html.img({ style: [css.w.percent(90)], src: "./img/clean-shortcut.png" }),
            ])),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-2xl"] })`更多詳細的實驗請看`,
                    html.br(),
                    html.a({ class: ["text-2xl"], href: "https://arxiv.org/abs/1512.03385" })`Deep Residual Learning for Image Recognition`,
                    html.br(),
                    html.span({ class: ["text-2xl"] })`與`,
                    html.br(),
                    html.a({ class: ["text-2xl"], href: "https://arxiv.org/abs/1603.05027" })`Identity Mappings in Deep Residual Networks`,
                ])
            ]),
        ]),
        html.page()([
            template.div_vc([
                template.div_hc(0)([
                    html.span({ class: ["text-2xl"] })`參考`,
                    html.br(),
                    html.a({ class: ["text-2xl"], href: "https://allen108108.github.io/blog/2019/11/14/[論文] Identity Mappings in Deep Residual Networks/" })`Identity Mappings in Deep Residual Networks 論文介紹`,
                ])
            ])
        ]),
    ]
})()
