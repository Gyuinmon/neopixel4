let strip = neopixel.create(DigitalPin.P0, 6, NeoPixelMode.RGB)
strip.setBrightness(255)
basic.forever(function () {
    if (input.acceleration(Dimension.X) < 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(100)
    }
})
