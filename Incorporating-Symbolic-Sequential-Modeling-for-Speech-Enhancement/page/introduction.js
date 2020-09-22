///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const introduction = (() => {
    return [
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `Speech Enhancement(語音增強，SE) 的目的是強化在吵雜環境中的語音訊號，`,
                `相等於去噪的效果。`, html.br(), html.br(),
                `如果 SE 做得好，還可以作為 ASR(Automatic Speech Recognition，語音識別) 的前處理系統，以提升 ASR 的效果。`, html.br(), html.br(),
                `而本篇論文嘗試使用 VQ-VAE 的 Symbolic Book 與 Transformer 的 Multi Head Attention(MHA) 來提取聲學單元，`,
                `幫助提升 SE 的效果。`
            ])
        ),
    ]
})()