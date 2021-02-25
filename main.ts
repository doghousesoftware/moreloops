input.onPinPressed(TouchPin.P0, function () {
    foo = 4
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(foo)
        foo += -1
    }
})
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        basic.showNumber(k)
        k += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    while (k <= 4) {
        basic.showNumber(k)
        k += 1
    }
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 4; index++) {
        basic.showNumber(index)
    }
})
let foo = 0
let k = 0
k = 0
