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

    const PEdot = (pos1, pos2, dmodel, maxLen) => {
        let sum = 0
        for (let i = 0;i < dmodel;i++) {
            if (i % 2 == 0) {
                sum += Math.sin(pos1 / (maxLen ** (i / dmodel))) * Math.sin(pos2 / (maxLen ** (i / dmodel)))
            } else if (i % 2 == 1) {
                sum += Math.cos(pos1 / (maxLen ** ((i - 1) / dmodel))) * Math.cos(pos2 / (maxLen ** ((i - 1) / dmodel)))
            }
        }
        return sum
    }
    const initNumInp = () => {
        let el = document.createElement("input")
        el.classList.add("text-lg")
        el.style.cssText = css.w.mm(30)
        el.type = "number"
        el.value = "0"
        el.min = 0
        return el
    }
    const pos1Inp = initNumInp()
    const pos2Inp = initNumInp()
    const dmodelInp = initNumInp()
    dmodelInp.value = 256
    const maxLenInp = initNumInp()
    maxLenInp.value = 10000
    const peOut = document.createElement("p")
    peOut.classList.add("text-lg")
    const peBn = document.createElement("button")
    peBn.innerText = "calc"
    peBn.style.cssText = css.w.mm(80) + css.h.mm(10) + css.tx.size(8) + css.bg.color(100, 200, 255) + css.tx.color(255, 255, 255)

    peBn.onclick = (e) => {
        const out = PEdot(
            Number(pos1Inp.value),
            Number(pos2Inp.value),
            Number(dmodelInp.value),
            Number(maxLenInp.value),
        )
        peOut.innerText = out
    }

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
                    html.a({ class: ["text-4xl"], href: "https://arxiv.org/abs/1706.03762", style: [css.tx.color(255, 235, 205)] })
                        `Attention is all you need`,
                    html.hr(),
                    html.span()`Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N. Gomez, Lukasz Kaiser, Illia Polosukhin`
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
                    `影像分類可以用 `, html.a({ href: "https://arxiv.org/abs/2010.11929" })`Vision Transformer`,
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
            `情況1：輸入一組 Feature Vector`,
            template.div_hc(0)([
                html.img({ src: './img/from-one.png', style: [css.w.percent(70)] }),
            ]),
        ),
        template.page(0)(
            `情況2：輸入兩組 Feature Vector`,
            template.div_hc(0)([
                html.img({ src: './img/from-two.png', style: [css.w.percent(70)] }),
            ]),
        ),
        template.page(0)(
            `Query、Key 與 Value`,
            template.div_hc(0)([
                html.img({ src: './img/query-key-value-1.png', style: [css.w.percent(80)] }),
                html.p()`Query 與 Key 大多數都源於同樣的資料，所以稱為 Self`,
            ]),
        ),
        template.page(0)(
            `配對每個 Query 與 Key 之間的相似度`,
            template.div_hc(0)([
                html.img({ src: './img/query-key.png', style: [css.w.percent(80)] }),
            ]),
        ),
        template.page(0)(
            `再透過相似度合成每個 Key 對應的 Value`,
            template.div_hc(0)([
                html.img({ src: './img/query-key-value-2.png', style: [css.w.percent(60)] }),
            ]),
        ),
        template.page(0)(
            `換個說法就是`,
            template.div_hc(0)([
                html.img({ src: './img/explosion-1.png', style: [css.w.percent(80)] }),
                // html.img({ src: './img/explosion.gif', style: [css.w.percent(80)] }),
            ]),
        ),
        template.page(0)(
            `Explosion！！！`,
            template.div_hc(0)([
                html.img({ src: './img/explosion-2.png', style: [css.w.percent(50)] }),
                html.img({ src: './img/explosion.gif', style: [css.w.percent(50)] }),
            ]),
        ),
        template.page(0)(
            `我，不想延畢 == 不，我想延畢...？`,
            template.div_hc(0)([
                html.table()(
                    [html.tr()([
                        html.td({ style: [css.w.percent(50)] })([
                            html.img({ src: './img/position.png', style: [css.w.percent(100)] }),
                        ]),
                        html.td({ style: [css.w.percent(45)] })([
                            html.p()([`在沒有`, html.span({ class: ["text-2xl"], style: [css.tx.color(100, 200, 255)] })`外加資訊`, `的情況下`]),
                            html.br(),
                            html.p()([`前面所使用的計算方式`,
                                html.span({ class: ["text-2xl"], style: [css.tx.color(255, 100, 100)] })`無法判斷`,
                                `不同位置有什麼不一樣`]),
                        ])
                    ])]
                ),
            ]),
        ),
        template.page(0)(
            `Position Encoding`,
            template.div_hc(0)([
                html.img({ src: './img/position-encoding.png', style: [css.w.percent(100)] }),
            ]),
        ),
        template.page(0)(
            `Position Encoding`,
            template.div_hc(0)([
                html.div({ style: [css.tx.right(), css.m.r(100)] })([
                    html.span()`position 1：`, pos1Inp,
                    html.br(),
                    html.span()`position 2：`, pos2Inp,
                    html.br(),
                    html.span()([`d`, html.sub()`model`, `：`]), dmodelInp,
                    html.br(),
                    html.span()`max length：`, maxLenInp,
                    html.br(),
                    html.br(),
                    peBn,
                    html.br(),
                    html.br(),
                    peOut
                ])
            ]),
        ),
        template.page(0)(
            `直接加上 PE`,
            template.div_hc(0)([
                html.div()([
                    html.img({ src: './img/use-pe.png', style: [css.w.percent(50)] }),
                ])
            ]),
        ),
    ]
})()