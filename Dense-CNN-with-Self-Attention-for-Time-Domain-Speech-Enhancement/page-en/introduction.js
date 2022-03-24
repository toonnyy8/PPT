///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const introduction = (() => {
    return [
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `When the voice is polluted by background noise, not only the magnitude will be affected,`,
                `but also the phase will also change, but the risk of adjusting the phase is extremely high,`,
                `and it is very likely that the voice quality will become very bad.`,
            ])
        ),
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `On the other hand, when processing signals in the time domain, the magnitude and phase can be changed together,`,
                `and it is safer than processing the phase in the frequency domain.`, html.br(), html.br(),
                `Therefore, this paper proposes a time-domain speech enhancement model that combines Dense CNN and Self Attention,`,
                `and uses a new loss function that simultaneously constrains speech and background sounds.`
            ])
        ),
    ]
})()