radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        kamray += -1
        basic.showLeds(`
            . . . # .
            . . . # .
            # . . # .
            . # . # .
            . . # . .
            `)
        radio.sendNumber(2)
    } else if (receivedNumber == 2) {
        basic.showLeds(`
            . . . # .
            . . . # .
            # . . # .
            . # . # .
            . . # . .
            `)
        kamray += 1
        radio.sendNumber(2)
    } else if (receivedNumber == 0) {
    	
    }
})
let kamray = 0
