///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const introduction = (() => {
    return [
        template.page2(20)(
            html.p()([`Efficient`, html.br(),
                `Transformers`]),
            "Introduction",
            html.p({ class: ["text-base"] })([
                `The Transformer proposed in 2017 has a huge impact on deep learning models.`,
                html.br(),
                `Its core method, Self Attention, has achieved excellent performance in NLP or CV related tasks.`,
                html.br(),
                html.br(),
                `However, during the calculation process, an attention matrix of L`, html.sup()`2`,
                ` size will be generated.`,
            ])
        ),
        template.page2(20)(
            html.p()([
                `Efficient`,
                html.br(),
                `Transformers`
            ]),
            "Introduction",
            html.p({ class: ["text-base"] })([
                ` As the input sequence increases, the amount of memory and calculation consumed also increases squarely.`,
                html.br(),
                html.br(),
                `Especially the high memory complexity will seriously hinder the feasibility of Transformer application in long sequence problems.`,
                html.br(),
                html.br(),
                `Therefore, many recent papers have proposed various X-formers to minimize the amount of memory required.`,
            ])
        ),
        template.page2(20)(
            "Long Range Arena",
            "Introduction",
            html.p({ class: ["text-base"] })([
                `However, there is currently no systematic benchmark to evaluate the performance of these models on different tasks.`,
                html.br(),
                html.br(),
                `To this end, Tay et al. proposed Long Range Arena, a benchmark composed of multiple tasks, to evaluate the effects of various X-formers on text, images, inference, and other issues.`,
                html.br(),
                html.br(),
                `This report will introduce Transformer improvement methods and Long Range Arena.`,
            ])
        ),
    ]
})()