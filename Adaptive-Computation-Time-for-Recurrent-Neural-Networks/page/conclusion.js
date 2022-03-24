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
                        `讓模型依據問題的複雜度自行增減思考次數確實能提升效果。`, html.br(), html.br(),
                    ]),
                    html.li({ style: [css.tx.color(255, 100, 50)] })([
                        `目前的算法對於 time penalty(τ) 非常敏感，需要一個更好的方法來自動調整 time penalty。`, html.br(), html.br(),
                    ]),
                    html.li({})([
                        `Ponder times 或許可以做為一種區分結構和噪聲的標準。`
                    ]),
                ]),
            ]),
        ),
    ]
})()