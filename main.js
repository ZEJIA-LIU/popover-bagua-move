let $button = document.querySelector(".wrapper>button")
let $wrapper = document.querySelector(".wrapper")
let $box = document.querySelector("#box")
let ButtonSwitch = true
let dragging = false
let X
let Y
$box.addEventListener('mousedown', (e) => {
    dragging = true
    X = e.clientX
    Y = e.clientY
})
document.addEventListener('mousemove', (e) => {
    let moveX = e.clientX - X
    let moveY = e.clientY - Y
    if (dragging === true) {
        $button.style.transform = $button.style.transform + `translate(${moveX}px,${moveY}px)`
    }
    X = e.clientX
    Y = e.clientY
})

document.addEventListener('mouseup', () => {
    dragging = false
})


$button.addEventListener('click', () => {
    if (ButtonSwitch === true) {
        popover.style.display = "block"
        BoxSwitch.testContest = "点击关闭八卦"
        ButtonSwitch = false
    } else {
        popover.style.display = "none"
        BoxSwitch.testContest = "点击开启八卦"
        ButtonSwitch = true
    }
    let ClickDocument = function (e) {
        popover.style.display = "none"
        BoxSwitch.testContest = "点击开启八卦"
        ButtonSwitch = true
        document.removeEventListener(
            'click', ClickDocument)
    }
    document.addEventListener('click', ClickDocument)
})
$wrapper.addEventListener('click', (e) => {
    e.stopPropagation()

})