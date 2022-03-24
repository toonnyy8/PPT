///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const introduction = (() => {
    return [
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `Although GAN is a powerful generative model, its training is unstable due to the gradient vanishing.`,
                html.br(),
                html.br(),
                `WGAN uses some simple changes to greatly reduce the gradient vanishing problem of the original GAN.`,
                html.br(),
                html.br(),
                `However, the weight clipping used in WGAN may still cause the gradient to vanish or explode.`,
                html.br(),
                html.br(),
                `For this reason, this paper uses the "gradient penalty" loss function to constrain the weights so that WGAN can converge stably.`,
            ])
        ),
    ]
})()
