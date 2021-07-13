controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    Ev3tec7s_Spaceship.setImage(img`
        . . . . . . . . . . . . . . . . 
        2 2 5 1 1 1 . . . . . . . . . . 
        2 2 5 1 1 1 . . . . . . . . . . 
        . f f . . 1 . . . . . . . . . . 
        . f f . . 1 . . . . . . . . . . 
        . f f f . 1 . . f f f . . . . . 
        f f 4 f . 1 f f 4 4 f 2 2 . . . 
        f 4 4 f . 1 f 4 4 4 f 2 2 . . . 
        f f f f f f f f f f f f f . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 . 
        4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 f 
        f f f f f f f f f 4 4 4 f f f f 
        . . . . f 4 4 f f f f f f . . . 
        . . . f f 4 f f . . . . . . . . 
        . . . f 4 4 f 2 2 . . . . . . . 
        . . . f f f f 2 2 . . . . . . . 
        `)
    controller.moveSprite(Ev3tec7s_Spaceship, 200, 200)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Ev3tec7s_Spaceship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 . . . . . . . . . . 
        . . . 1 1 1 . . . . . . . . . . 
        . f f . . 1 . . . . . . . . . . 
        . f f . . 1 . . . . . . . . . . 
        . f f f . 1 . . f f f . . . . . 
        f f 4 f . 1 f f 4 4 f 2 2 . 2 2 
        f 4 4 f . 1 f 4 4 4 f 2 2 . 2 2 
        f f f f f f f f f f f f f . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 . 
        4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 f 
        f f f f f f f f f 4 4 4 f f f f 
        . . . . f 4 4 f f f f f f . . . 
        . . . f f 4 f f . . . . . . . . 
        . . . f 4 4 f 2 2 . 2 2 . . . . 
        . . . f f f f 2 2 . 2 2 . . . . 
        `)
    projectile = sprites.createProjectileFromSprite(assets.image`laser`, Ev3tec7s_Spaceship, 200, 0)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    Ev3tec7s_Spaceship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 . . . . . . . . . . 
        . . . 1 1 1 . . . . . . . . . . 
        . f f . . 1 . . . . . . . . . . 
        . f f . . 1 . . . . . . . . . . 
        . f f f . 1 . . f f f . . . . . 
        f f 4 f . 1 f f 4 4 f 2 2 . . . 
        f 4 4 f . 1 f 4 4 4 f 2 2 . . . 
        f f f f f f f f f f f f f . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 . 
        4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 f 
        f f f f f f f f f 4 4 4 f f f f 
        . . . . f 4 4 f f f f f f . . . 
        . . . f f 4 f f . . . . . . . . 
        . . . f 4 4 f 2 2 . . . . . . . 
        . . . f f f f 2 2 . . . . . . . 
        `)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    Ev3tec7s_Spaceship.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 . . . . . . . . . . 
        . . . 1 1 1 . . . . . . . . . . 
        . f f . . 1 . . . . . . . . . . 
        . f f . . 1 . . . . . . . . . . 
        . f f f . 1 . . f f f . . . . . 
        f f 4 f . 1 f f 4 4 f 2 2 . . . 
        f 4 4 f . 1 f 4 4 4 f 2 2 . . . 
        f f f f f f f f f f f f f . . . 
        4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 . 
        4 4 4 4 4 4 4 4 4 4 4 4 9 9 9 f 
        f f f f f f f f f 4 4 4 f f f f 
        . . . . f 4 4 f f f f f f . . . 
        . . . f f 4 f f . . . . . . . . 
        . . . f 4 4 f 2 2 . . . . . . . 
        . . . f f f f 2 2 . . . . . . . 
        `)
    controller.moveSprite(Ev3tec7s_Spaceship, 100, 100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let Ev3tec7s_Spaceship: Sprite = null
info.setLife(3)
Ev3tec7s_Spaceship = sprites.create(assets.image`Ev3tec7s plane`, SpriteKind.Player)
controller.moveSprite(Ev3tec7s_Spaceship)
Ev3tec7s_Spaceship.setStayInScreen(true)
Ev3tec7s_Spaceship.say("Tip: Hold X for afterburner!", 5000)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(assets.image`Madhavs plane`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setFlag(SpriteFlag.AutoDestroy, false)
    bogey.setPosition(160, randint(5, 115))
})
