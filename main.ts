controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    controller.moveSprite(Ev3tec7s_Spaceship)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`laser`, Ev3tec7s_Spaceship, 200, 0)
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    controller.moveSprite(Ev3tec7s_Spaceship)
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
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(assets.image`Madhavs plane`, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setFlag(SpriteFlag.AutoDestroy, false)
    bogey.setPosition(160, randint(5, 115))
})
