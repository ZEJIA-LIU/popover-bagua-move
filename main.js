let $button = document.querySelector(".wrapper>button")
let $wrapper = document.querySelector(".wrapper")
let Box = document.getElementById('Box')
let ButtonSwitch = true
$button.addEventListener('click', () => {
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