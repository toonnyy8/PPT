///<reference path="./html.js">
///<reference path="./title.js">
///<reference path="./introduction.js">
///<reference path="./methodology.js">

(() => {
    const { render, img } = html
    const control = render(
        ...title,
        ...introduction,
        ...methodology,
        ...architecture,
        ...experiments,
        ...conclusion,
    )
    let pageNum = Number(window.location.href.split('#/')[1] || 1)
    control.jump(pageNum - 1)
    pageNum = control.at() + 1
    window.location.href = `#/${pageNum}`

    let back = () => {
        control.prev()
        pageNum = control.at() + 1
        window.location.href = `#/${pageNum}`
    }
    let forward = () => {
        control.next()
        pageNum = control.at() + 1
        window.location.href = `#/${pageNum}`
    }

    let backB = img({ class: ["page-back-button"], src: "./icon/arrow_back_ios-white-18dp.svg" })
    backB.onclick = back
    let forwardB = img({ class: ["page-forward-button"], src: "./icon/arrow_forward_ios-white-18dp.svg" })
    forwardB.onclick = forward
    document.body.append(backB, forwardB)


    let buf = []
    window.addEventListener('keydown', (e) => {
        console.log(e.key)
        switch (e.key) {
            case 'ArrowLeft':
                {
                    back()
                    break
                }
            case 'ArrowRight':
                {
                    forward()
                    break
                }
            case 'Enter':
                {
                    if (buf.length != 0) {
                        control.jump(Number(buf.reduce((prev, curr) => prev + curr, '')) - 1)
                        pageNum = control.at() + 1
                        window.location.href = `#/${pageNum}`
                        buf = []
                    }
                    break
                }
            default:
                {
                    if (e.key >= '0' && e.key <= '9') {
                        buf = buf.concat(e.key)
                    } else {
                        buf = []
                    }
                }
        }
    })
})()