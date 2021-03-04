///<reference path="../src/html.js">
///<reference path="../src/css.js">

const title = (() => {
    const span6xl = html.span({ class: ["text-6xl"] })
    const span3xl = html.span({ class: ["text-3xl"] })
    const span2xl = html.span({ class: ["text-2xl"] })
    const spanlg = html.span({ class: ["text-lg"] })
    const pxl_1 = html.p({ class: ["text-xl"], style: [css.tx.left(), css.w.percent(48), css.m.auto()] })
    const pxl_2 = html.p({ class: ["text-xl"], style: [css.p.all(10)] })
    const div_vc = html.div({
        style: [
            css.display.flex(),
            css.flex.wrap.yes(),
            css.align.items.center(),
            css.h.percent(100),
            css.w.percent(100),
        ]
    })
    const div_hc = html.div({
        class: ["text-xl"],
        style: [
            css.p.all(10),
            css.tx.center(),
            css.w.percent(100),
        ]
    })
    return [
        html.page()([
            div_vc([
                div_hc([
                    html.span({ class: ["text-4xl"] })`YONA：You Only Need Attention`,
                    html.hr(),

                ])
            ])
        ]),
        html.page()([
            div_vc([
                div_hc([
                    html.del({ class: ["text-4xl"] })`YONA：You Only Need Attention`,
                    html.br(),
                    html.br(),
                    html.a({ class: ["text-4xl"], href: "https://arxiv.org/abs/1603.08983", style: [css.tx.color(255, 235, 205)] })
                        `Attention is all you need`,
                    html.hr(),

                ])
            ])
        ]),
        html.page()([
            div_vc([
                div_hc([
                    html.table()(
                        [html.tr()([
                            html.td({ style: [css.w.percent(50)] })([
                                html.video({
                                    src: "./img/attention.mp4", autoplay: true, controls: true, loop: true,
                                    style: [css.w.percent(100)]
                                })
                            ]),
                            html.td({ style: [css.w.percent(50)] })([
                                "什麼是注意力吶？"
                            ])
                        ])]
                    ),

                ])
            ])
        ]),
        template.page(0)(
            html.span({ class: ["text-xl"] })`注意力就是給予部分資料更大的權重`,
            template.div_hc(0)([
                html.img({ src: './img/what-is-attention.png', style: [css.w.percent(100)] })
            ]),
        ),
        template.page(0)(
            html.span({ class: ["text-xl"] })`注意力就是給予部分資料更大的權重`,
            template.div_hc(0)([
                html.p()`設定權重的方式百百種`,
                html.br(),
                html.p()`Self Attention 就是其中一種方法`,
                html.br(),
                html.p({ class: ["text-4xl"] })`超級難懂`,
                html.br(),
                html.p({ class: ["text-4xl"] })`超級有效`,

            ]),
        ),
        template.page(0)(
            html.span({ class: ["text-xl"] })`技術晚點再說，先講發展`,
            template.div_hc(0)([
                html.p()`最開始應用在機器翻譯的任務上，並推出了大名鼎鼎的`,
                html.br(),
                html.p({ class: ["text-6xl"] })`Transformer`,
                html.br(),
                html.p()`效果絕佳、一戰成名`,
                html.p()`以更少的訓練成本擊敗了 RNN 系列模型`,
            ]),
        ),
        template.page(0)(
            html.span({ class: ["text-xl"] })`Transformer 切對半`,
            template.div_hc(0)([
                html.p()`Transformer 是由 Encoder(特徵抽取器) 與 Decoder(自回歸模型) 組成的`,
                html.br(),
                html.p()`後來發展成兩派知名語言模型`,
                html.br(),
                html.p({ class: ["text-2xl"] })`BERT (only Encoder)`,
                html.p()`與`,
                html.p({ class: ["text-2xl"] })`GPT (only Decoder)`,
            ]),
        ),
        template.page(0)(
            html.span({ class: ["text-2xl"] })([
                `錢能解決的都不是問題`,
            ]),
            template.div_hc(0)([
                html.img({ src: './img/gpt-3.jpg', style: [css.w.percent(80)] }),
                html.p()`GPT 越長越大`,
            ]),
        ),
        template.page(0)(
            html.span({ class: ["text-2xl"] })([
                `問題是沒錢`,
            ]),
            template.div_hc(0)([
                html.img({ src: './img/switch-transformer.jpg', style: [css.w.percent(80)] }),
                html.p()`NLP(自然語言處理) 已經成為軍備競賽`,
            ]),
        ),
        template.page(0)(
            `只要你有錢，處處都能 Self Attention`,
            template.div_hc(0)([
                html.p()`不只用在 NLP，最近在影像上也開始發展`,
                html.br(),
                html.p()([
                    `影像分類可以用`, html.a({ href: "https://arxiv.org/abs/2010.11929" })`Transformers`,
                    html.br(),
                    `影像分割可以用 TransUNet`
                ]),
                html.br(),
                html.p()`物件偵測的 DETR 與 Context-Transformer`,
                html.br(),
                html.p()([`影像生成的 Taming Transformers、TransGAN、`,
                    html.a({ href: "https://openai.com/blog/image-gpt/" })`ImageGPT`,
                    `、`,
                    html.a({ href: "https://openai.com/blog/dall-e/" })`DALL·E`,
                ]),
            ]),
        ),
        template.page(0)(
            `沒錢只能 QAQ...？`,
            template.div_hc(0)([
                html.p()`便宜的替代方案`,
                html.ol({ style: [css.tx.justify(), css.p.l(120)] })([
                    html.li()`Reformer`,
                    html.li()`Linformer`,
                    html.li()`Performer`,
                    html.li()`Lambda layer`,
                ])
            ]),
        ),
        template.page(0)(
            `回到正題`,
            template.div_hc(0)([
                html.img({ src: './img/what-is-self-attention.png', style: [css.w.percent(80)] }),
            ]),
        ),
        template.page(0)(
            `配對每個 Query 與 Key 之間的相似度`,
            template.div_hc(0)([
                html.img({ src: './img/query-key.png', style: [css.w.percent(80)] }),
                html.p()`Query 與 Key 大多數都源於同樣的資料，所以是 Self`,
            ]),
        ),
    ]
})()