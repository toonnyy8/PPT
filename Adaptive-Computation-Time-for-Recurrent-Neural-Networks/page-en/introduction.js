///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const introduction = (() => {
    return [
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `Even in the same type of task, different cases have different complexity.`, html.br(),
                `However, traditional deep learning methods use the same amount of calculation to process,
                which is obviously unreasonable.`, html.br(), html.br(),

                `Therefore, this paper proposes a method to make neural network adaptive computation times.`, html.br(),
                `Using this method, you can spend appropriate calculation costs on cases of different complexity and achieve good results.`,
            ])
        ),
    ]
})()