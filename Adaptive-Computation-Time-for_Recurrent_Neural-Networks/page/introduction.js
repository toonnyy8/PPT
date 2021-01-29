///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const introduction = (() => {
    return [
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `即使是在同類型的任務上，不同案例所具有的複雜度也不相同。`,
                `但傳統深度學習方法卻是使用相同的計算量來處理，這明顯是不合理的。`, html.br(), html.br(),
                `因此，本篇論文提出了一種讓類神經網路自適應計算次數的方法，`,
                `運用此方法便可在複雜度不同的案例上花費適當的計算成本，並取得良好的成果。`
            ])
        ),
    ]
})()