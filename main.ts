radio.setGroup(98)
basic.forever(function () {
    basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00)
    if (input.buttonIsPressed(Button.A)) {
        radio.sendValue("A", 1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendValue("B", 1)
    }
})
