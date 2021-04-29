///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const conclusion = (() => {
    return [
        template.default_page(
            "Conclusion",
            html.div({ class: ["text-lg"] })([
                html.ul()([
                    html.li({})([
                        `No Silver Bullet.`
                    ]),
                    html.br(),
                    html.li({})([
                        `The combination of Local Attention and Global Attention can maintain accuracy while reducing memory complexity, but there is a bottleneck in speed.`
                    ]),
                ]),
            ]),
        ),
        template.default_page(
            "Conclusion",
            html.div({ class: ["text-lg"] })([
                html.ul()([
                    html.li({})([
                        `The method based on Low Rank has excellent speed and low memory complexity on "long sequence tasks", but it is not suitable for autoregressive tasks.`
                    ]),
                    html.br(),
                    html.li({})([
                        `Long sequence autoregressive tasks are suitable for using Recurrence-based methods.`
                    ]),
                ]),
            ]),
        ),
        template.page2(0)(
            "Problem",
            `為何生成任務都要用自回歸模型？`,
            template.div_hc(0)([
                html.img({ src: "./img/problem.png", style: [css.w.percent(65)] })
            ]),
        ),
    ]
})()