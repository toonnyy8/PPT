///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const conclusion = (() => {
    return [
        template.default_page(
            "Conclusion",
            html.div({ class: ["text-base"] })([
                html.ul()([
                    html.li({ style: [css.tx.color(0, 150, 50)] })([
                        `Allowing the model to increase or decrease the number of thoughts based on the complexity of the problem can indeed improve the effect.`, html.br(), html.br(),
                    ]),
                    html.li({ style: [css.tx.color(255, 0, 50)] })([
                        `The current algorithm is very sensitive to time penalty(τ), and a better method is needed to automatically adjust time penalty.`, html.br(), html.br(),
                    ]),
                    html.li({})([
                        `Ponder times may be used as a standard to distinguish structure and noise.`
                    ]),
                ]),
            ]),
        ),
    ]
})()