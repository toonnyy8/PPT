///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const conclusion = (() => {
    return [
        template.default_page(
            "Conclusion",
            html.div({ class: ["text-base"] })([
                html.ul()([
                    html.li({ style: [css.tx.color(100, 255, 50)] })([
                        `本篇論文提出基於時域的 DCN 模型並搭配時頻的損失函數在語音增強的任務中獲得了良好的成果。`, html.br(), html.br(),
                    ]),
                    html.li({ style: [css.tx.color(100, 255, 50)] })([
                        `雖然在 STOI 與 PESQ 的評估指標上，SM loss 具有較好的結果，但在實際由人耳評斷時 PCM loss 更接近乾淨的語音。`, html.br(), html.br(),
                    ]),
                    html.li({ style: [css.tx.color(255, 100, 50)] })([
                        `作者提到，基於 DNN 的語音增強方法不易泛化到未曾學習過的資料上面。`, html.br(), html.br(),
                    ]),
                    html.li({})([
                        `時域的 loss 有助於提升 SNR、頻域 loss 則能使 STOI 與 PESQ 上的分數提升。`
                    ]),
                ]),
            ]),
        ),
    ]
})()