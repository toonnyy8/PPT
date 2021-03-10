///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const introduction = (() => {
    return [
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `GAN 雖然是種強大的生成模型，但卻容易因為梯度消失導致訓練不穩定。`,
                html.br(),
                html.br(),
                `而 WGAN 利用一些簡單的改動便大幅改善原始 GAN 的問題。`,
                html.br(),
                html.br(),
                `然而在 WGAN 使用的權重剪裁，還是有可能導致梯度發散或消失。`,
                html.br(),
                html.br(),
                `為此，本論文改用「梯度懲罰」的損失函數來約束權重，使得 WGAN 可以穩定收斂。`,
            ])
        ),
    ]
})()