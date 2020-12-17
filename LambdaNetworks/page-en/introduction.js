///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const introduction = (() => {
    return [
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `Using Self Attention to obtain contextual information is indeed helpful to improve the accuracy of the model.`,
                html.br(),
                html.br(),
                html.br(),
                `However, the amount of memory to be consumed makes it difficult to apply to very long sequences and multi-dimensional (such as images) tasks.`,
            ])
        ),
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `Therefore, the author proposes the architecture of lambda network, which can obtain contextual information while reducing memory consumption and increasing computing speed.`,
            ])
        ),
    ]
})()
