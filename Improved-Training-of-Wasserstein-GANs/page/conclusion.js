///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const conclusion = (() => {
    return [
        template.default_page(
            "Conclusion",
            html.div({ class: ["text-lg"] })([
                html.ul()([
                    // html.li({ style: [css.tx.color(100, 255, 50)] })([
                    //     `使用 WGAN 與 Gradient Penalty`, html.br(), html.br(),
                    // ]),
                    // html.li({ style: [css.tx.color(255, 100, 50)] })([
                    //     `目前的算法對於 time penalty(τ) 非常敏感，需要一個更好的方法來自動調整 time penalty。`, html.br(), html.br(),
                    // ]),
                    html.li({})([
                        `WGAN 利用簡單的技巧解決了辨別器造成的梯度消失問題。`
                    ]),
                    html.br(),
                    html.li({})([
                        `而 Gradient Penalty 為模型帶來更高的強健性，讓 WGAN 的訓練不受模型架構影響收斂。`
                    ]),
                ]),
            ]),
        ),
        template.default_page(
            "Note",
            html.div({ class: ["text-lg"] })([
                html.ul()([
                    html.li({})([
                        `在 WGAN-GP 中，所有的 Batch Norm 都替換成 Layer Norm。`
                    ]),
                    html.li({})([
                        `論文有提到，對實施雙向 Gradient Penalty 的效果比實施單向 Gradient Penalty(只對大於 1 的梯度實施)更好。`
                    ]),
                    html.li({})([
                        `非線性非平滑函數(e.g. ELU if α != 1)無法訓練 WGAN-GP`
                    ]),
                ]),
            ]),
        ),
    ]
})()