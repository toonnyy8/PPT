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
                        `本篇論文提出基於時域的 DCN 模型配和時頻的損失函數在語音增強的任務中獲得了良好的成果。`, html.br(), html.br(),
                    ]),
                    html.li({ style: [css.tx.color(255, 100, 50)] })([
                        `作者提到，基於 DNN 的語音增強方法不易泛化到未曾學習過的資料上面。`, html.br(), html.br(),
                    ]),
                ]),
            ]),
        ),
    ]
})()