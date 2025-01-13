radio.onReceivedNumber(function (receivedNumber) {
    if (!(isTreasure)) {
        if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -95) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                `)
        } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -75) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                `)
        } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -60) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . . . .
                . # # # .
                # # # # #
                `)
        } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -50) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . # # # .
                # # # # #
                # # # # #
                `)
        } else if (radio.receivedPacket(RadioPacketProperty.SignalStrength) < -40) {
            basic.showLeds(`
                . . . . .
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                `)
        } else {
            basic.showLeds(`
                . # # # .
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
        }
    }
})
input.onButtonPressed(Button.A, function () {
    isTreasure = false
})
input.onButtonPressed(Button.B, function () {
    isTreasure = true
    Power += 1
    if (Power > 7) {
        Power = 0
    }
    basic.showNumber(Power)
    radio.setTransmitPower(Power)
    basic.showIcon(randint(0, 40))
})
let Power = 0
let isTreasure = false
isTreasure = true
radio.setGroup(53)
Power = 1
radio.setTransmitPower(Power)
basic.forever(function () {
    if (isTreasure) {
        radio.sendNumber(0)
        basic.pause(200)
    }
})
