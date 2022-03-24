///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const methodology =
    (() => {
        return [
            template.default_page(
                'Methodology',
                template.div_hc(0)([
                    html.img({ src: './img/act-rnn-1.png', style: [css.w.percent(85)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'ACT',
                template.div_hc(0)([
                    html.img({ src: './img/act-rnn-2.png', style: [css.w.percent(85)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'ACT',
                template.div_hc(0)([
                    html.img({ src: './img/act-rnn-3.png', style: [css.w.percent(100)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'Repeat Times',
                template.div_hc(0)([
                    html.br(),
                    html.br(),
                    html.img({ src: './img/repeat-times.png', style: [css.w.percent(100)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'Halting Probability',
                template.div_hc(0)([
                    html.img({ src: './img/halting-probability.png', style: [css.w.percent(90)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'Remainder',
                template.div_hc(0)([
                    html.img({ src: './img/remainder.png', style: [css.w.percent(70)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'Output & State',
                template.div_hc(0)([
                    html.img({ src: './img/output-and-state.png', style: [css.w.percent(50)] }),
                ]),
            ),
            template.page2(0)(
                'Methodology',
                'Loss',
                template.div_hc(0)([
                    html.img({ src: './img/loss.png', style: [css.w.percent(100)] }),
                ]),
            ),
            template.page3(0)(
                'Methodology',
                'Loss',
                'Ponder Loss',
                template.div_hc(0)([
                    html.img({ src: './img/loss-ponder-1.png', style: [css.w.percent(80)] }),
                ]),
            ),
            template.page3(0)(
                'Methodology',
                'Loss',
                'Ponder Loss',
                template.div_hc(0)([
                    html.img({ src: './img/loss-ponder-2.png', style: [css.w.percent(90)] }),
                ]),
            ),
            template.page3(0)(
                'Methodology',
                'Loss',
                'Ponder Loss',
                template.div_hc(0)([
                    html.img({ src: './img/loss-ponder-3.png', style: [css.w.percent(80)] }),
                ]),
            ),
        ]
    })()