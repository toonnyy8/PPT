///<reference path="../src/html.js">
///<reference path="../src/css.js">
///<reference path="./template.js">

const introduction = (() => {
    return [
        template.default_page(
            "Introduction",
            html.p({ class: ["text-base"] })([
                `利用 Self Attention 獲得上下文資訊對提升模型正確率確實是有幫助的。`,
                html.br(),
                html.br(),
                `但要消耗的記憶體量使其難以應用於超長序列及多維度(如圖像)任務上。`,
                html.br(),
                html.br(),
                `因此，作者提出 lambda network 這個架構，在能獲取上下文資訊的同時減少了記憶體消耗量並提升了運算速度。`,
            ])
        ),
    ]
})()
