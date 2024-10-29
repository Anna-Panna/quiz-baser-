radio.setGroup(98)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("A", 1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("B", 1)
    }
})
