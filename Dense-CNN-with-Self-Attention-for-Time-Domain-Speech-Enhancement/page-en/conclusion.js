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
                        `This paper proposes a time-domain-based DCN model with a time-frequency loss function to obtain good results in the task of speech enhancement.`, html.br(), html.br(),
                    ]),
                    html.li({ style: [css.tx.color(0, 150, 50)] })([
                        `Although SM loss has good results in the evaluation indicators of STOI and PESQ, when judged by human ears, the effect of PCM loss is closer to clean speech.`, html.br(), html.br(),
                    ]),
                ]),
            ]),
        ),
        template.default_page(
            "Conclusion",
            html.div({ class: ["text-base"] })([
                html.ul()([
                    html.li({ style: [css.tx.color(255, 0, 50)] })([
                        `The author mentioned that DNN-based speech enhancement methods are not easy to generalize to speech that has not been learned.`, html.br(), html.br(),
                    ]),
                    html.li({})([
                        `Time domain loss can help improve SNR, and frequency domain loss can improve scores on STOI and PESQ.`
                    ]),
                ]),
            ]),
        ),
    ]
})()