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
                        `WGAN uses simple techniques to solve the gradient vanishing problem caused by the discriminator.`
                    ]),
                    html.br(),
                    html.li({})([
                        `The Gradient Penalty brings higher robustness to the model, allowing WGAN training to converge without being affected by the model architecture.`
                    ]),
                ]),
            ]),
        ),
        template.page2(20)(
            "Conclusion",
            "Note",
            html.div({ class: ["text-lg"] })([
                html.ul()([
                    html.li({})([
                        `In WGAN-GP, all Batch Norm are replaced with Layer Norm.`
                    ]),
                    html.li({})([
                        `The paper mentioned that the effect of the two-way Gradient Penalty is better than the one-way Gradient Penalty (which only penalizes the gradient greater than 1).`
                    ]),
                    html.li({})([
                        `Non-linear non-smooth function (e.g. ELU if α != 1) cannot train WGAN-GP.`
                    ]),
                ]),
            ]),
        ),
    ]
})()