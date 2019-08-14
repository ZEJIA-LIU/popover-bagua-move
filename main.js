let $button = document.querySelector(".wrapper>button")
let $wrapper = document.querySelector(".wrapper")
let Box = document.querySelector("#Box")
let popover = document.querySelector("#popover")
let dragging = false
let X
let Y

let ButtonSwitch = true
let checkIsMove = false

Box.addEventListener('mousedown', (e) => {
    dragging = true
    X = e.clientX
    Y = e.clientY
})
document.addEventListener('mousemove', (e) => {
    let moveX
    let moveY
    moveX = e.clientX - X
    moveY = e.clientY - Y
    if ((Math.abs(moveX) >= 2 || Math.abs(moveY) >= 2) && dragging) {
        checkIsMove = true
    }
    var BoundingBox = Box.getBoundingClientRect()
    var BoundingPopover = popover.getBoundingClientRect()
    if (dragging === true) {
        Box.style.transform = Box.style.transform +
            `translate(${moveX}px,${moveY}px)`

        X = e.clientX
        Y = e.clientY

    }

    console.log(BoundingBox.right)
    console.log(BoundingPopover.left)


})

document.addEventListener('mouseup', (e) => {
    dragging = false
    setTimeout(() => {
        checkIsMove = false
    }, 0)


})


$button.addEventListener('click', () => {
    if (checkIsMove === true) { return }

    if (ButtonSwitch === true) {
        popover.style.display = "block"
        Box.textContent = "点击关闭八卦"
        ButtonSwitch = false
    } else {
        popover.style.display = "none"
        Box.textContent = "点击开启八卦"
        ButtonSwitch = true
    }
    let ClickDocument = function (e) {
        popover.style.display = "none"
        Box.textContent = "点击开启八卦"
        ButtonSwitch = true
        document.removeEventListener(
            'click', ClickDocument)
    }
    document.addEventListener('click', ClickDocument)
})
$wrapper.addEventListener('click', (e) => {
    e.stopPropagation()
})