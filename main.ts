input.onButtonPressed(Button.A, function () {
    if (intVariable != 3) {
        basic.showString("True")
    } else {
        basic.showString("False")
    }
})
input.onButtonPressed(Button.B, function () {
    intVariable = 3
})
let intVariable = 0
intVariable = 6
