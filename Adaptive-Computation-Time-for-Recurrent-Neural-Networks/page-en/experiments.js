///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const experiments = (() => {
    return [
        template.page2(0)(
            "Experiments",
            "Parity",
            template.div_hc(0)([
                html.img({ src: './img/parity.png', style: [css.w.percent(65)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Parity",
            "Time Penalty",
            template.div_hc(0)([
                html.img({ src: './img/parity-time-penalty.png', style: [css.w.percent(100)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Parity",
            "Ponder",
            template.div_hc(0)([
                html.img({ src: './img/parity-ponder.png', style: [css.w.percent(75)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Parity",
            "Ponder",
            template.div_hc(0)([
                html.img({ src: './img/parity-ponder-2.png', style: [css.w.percent(100)] }),
            ]),
        ),

        template.page2(0)(
            "Experiments",
            "Addition",
            template.div_hc(0)([
                html.img({ src: './img/addition.png', style: [css.w.percent(70)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Addition",
            "Time Penalty",
            template.div_hc(0)([
                html.img({ src: './img/addition-time-penalty.png', style: [css.w.percent(100)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Addition",
            "Ponder",
            template.div_hc(0)([
                html.img({ src: './img/addition-ponder.png', style: [css.w.percent(75)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Addition",
            "Ponder",
            template.div_hc(0)([
                html.img({ src: './img/addition-ponder-2.png', style: [css.w.percent(100)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Addition",
            "Ponder",
            template.div_hc(0)([
                html.img({ src: './img/addition-ponder-3.png', style: [css.w.percent(100)] }),
            ]),
        ),

        template.page2(0)(
            "Experiments",
            "Sort",
            template.div_hc(0)([
                html.img({ src: './img/sort.png', style: [css.w.percent(70)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Sort",
            "Time Penalty",
            template.div_hc(0)([
                html.img({ src: './img/sort-time-penalty.png', style: [css.w.percent(100)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Sort",
            "Ponder",
            template.div_hc(0)([
                html.img({ src: './img/sort-ponder.png', style: [css.w.percent(75)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Sort",
            "Ponder",
            template.div_hc(0)([
                html.img({ src: './img/sort-ponder-2.png', style: [css.w.percent(100)] }),
            ]),
        ),

        template.page2(0)(
            "Experiments",
            "Wiki Char Pred",
            template.div_hc(0)([
                html.br(),
                html.br(),
                html.span({ class: ["text-6xl"] })`Model：LSTM`
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Wiki Char Pred",
            "Time Penalty",
            template.div_hc(0)([
                html.img({ src: './img/wiki-char-pred-time-penalty.png', style: [css.w.percent(100)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Wiki Char Pred",
            "Ponder",
            template.div_hc(0)([
                html.img({ src: './img/wiki-char-pred-ponder.png', style: [css.w.percent(75)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Wiki Char Pred",
            "Ponder",
            template.div_hc(0)([
                html.img({ src: './img/wiki-char-pred-ponder-2.png', style: [css.w.percent(100)] }),
            ]),
        ),
        template.page3(0)(
            "Experiments",
            "Wiki Char Pred",
            "Ponder",
            template.div_hc(0)([
                html.img({ src: './img/wiki-char-pred-ponder-3.png', style: [css.w.percent(100)] }),
            ]),
        ),
    ]
})()