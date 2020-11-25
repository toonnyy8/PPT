///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const introduction = (() => {
    return [
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `當語音受到背景噪音污染時，不只是頻率的大小會受到影響，連同相位也會跟著改變，`,
                `但是調整相位的風險極大，很有可能會使語音品質變得非常糟。`, html.br(), html.br(),
                `而從在時域處理訊號時，可以將頻率的大小與相位一同改變，而且比從頻域處理相位更加安全。`, html.br(), html.br(),
                `因此本篇論文提出了一種結合了 Dense CNN 與 Self Attention 的時域語音增強模型，並使用了對語音及背景音同時約束的新損失函數。`
            ])
        ),
    ]
})()