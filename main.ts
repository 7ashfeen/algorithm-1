input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 4; index++) {
        music.ringTone(262)
    }
    for (let index = 0; index < 10; index++) {
        basic.showLeds(`
            # . . . #
            # . . . #
            # # # # #
            # . . . #
            # . . . #
            `)
        basic.showLeds(`
            # # # # #
            . . # . .
            . . # . .
            . . # . .
            # # # # #
            `)
        basic.showIcon(IconNames.Heart)
        basic.showIcon(IconNames.Happy)
        music.play(music.stringPlayable("C D E F F E D C ", 120), music.PlaybackMode.UntilDone)
    }
})
basic.forever(function () {
	
})
