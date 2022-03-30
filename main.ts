input.onButtonPressed(Button.A, function () {
    I2C_LCD1602.ShowString("Hello", 0, 0)
    for (let index = 0; index < 4; index++) {
        I2C_LCD1602.shr()
        basic.pause(1000)
    }
})
I2C_LCD1602.LcdInit(39)
I2C_LCD1602.on()
I2C_LCD1602.BacklightOn()
I2C_LCD1602.ShowString("Hello", 0, 0)
basic.pause(2000)
I2C_LCD1602.clear()
basic.forever(function () {
	
})
