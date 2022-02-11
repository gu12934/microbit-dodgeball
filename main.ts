input.onButtonPressed(Button.A, function () {
    player.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    if (numBalls < 1) {
        numBalls += 1
        Ball = game.createSprite(player.get(LedSpriteProperty.X), player.get(LedSpriteProperty.Y))
        while (Ball.get(LedSpriteProperty.Y) > 0) {
            Ball.change(LedSpriteProperty.Y, -1)
            basic.pause(100)
        }
        Ball.set(LedSpriteProperty.Brightness, 0)
        radio.sendValue("ballX", Ball.get(LedSpriteProperty.X))
    }
})
input.onButtonPressed(Button.B, function () {
    player.change(LedSpriteProperty.X, 1)
})
radio.onReceivedValue(function (name, value) {
    switchxposition = Math.abs(value - 4)
    if (name == 0) {
        incomingBall = game.createSprite(switchxposition, 0)
        basic.pause(100)
        while (incomingBall.get(LedSpriteProperty.Y) < 4) {
            incomingBall.change(LedSpriteProperty.Y, 1)
            if (incomingBall.isTouching(player)) {
                radio.sendValue("winner", 1)
                basic.showNumber(game.score())
                basic.pause(2000)
            } else {
                basic.pause(100)
            }
        }
        incomingBall.set(LedSpriteProperty.Brightness, 0)
    }
    if (name == 0) {
        game.addScore(1)
        basic.pause(100)
        basic.showNumber(game.score())
    }
})
let incomingBall: game.LedSprite = null
let switchxposition = 0
let Ball: game.LedSprite = null
let numBalls = 0
let player: game.LedSprite = null
radio.setGroup(1)
player = game.createSprite(2, 4)
basic.forever(function () {
	
})
