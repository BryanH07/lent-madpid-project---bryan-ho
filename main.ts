namespace SpriteKind {
    export const NotSentient = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    music.baDing.play()
    pause(500)
    pause(2000)
    scene.setBackgroundColor(8)
    tiles.setTilemap(tilemap`level10`)
    hero.setPosition(10, 92)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (hero.vy == 0) {
        hero.vy = -125
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.castle.tilePath2, function (sprite, location) {
    music.playMelody("C5 A B G A F G E ", 120)
    music.wawawawaa.play()
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    music.wawawawaa.play()
    info.changeLifeBy(-1)
    hero.setPosition(10, 92)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    music.playMelody("G B G D G G G G ", 120)
    effects.confetti.endScreenEffect()
    pause(1000)
    game.over(true)
})
info.onLifeZero(function () {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    music.baDing.play()
    pause(500)
    pause(2000)
    scene.setBackgroundColor(8)
    tiles.setTilemap(tilemap`level5`)
    hero.setPosition(10, 92)
})
let hero: Sprite = null
effects.confetti.startScreenEffect(500)
music.playMelody("G G B G D G B G ", 200)
scene.setBackgroundColor(8)
hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f f . . . . . 
    . . . f f e e e e f 2 f . . . . 
    . . f f e e e e f 2 2 2 f . . . 
    . . f e e e f f e e e e f . . . 
    . . f f f f e e 2 2 2 2 e f . . 
    . . f e 2 2 2 f f f f e 2 f . . 
    . f f f f f f f e e e f f f . . 
    . f f e 4 4 e b f 4 4 e e f . . 
    . f e e 4 d 4 1 f d d e f . . . 
    . . f e e e e e d d d f . . . . 
    . . . . f 4 d d e 4 e f . . . . 
    . . . . f e d d e 2 2 f . . . . 
    . . . f f f e e f 5 5 f f . . . 
    . . . f f f f f f f f f f . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
hero.setPosition(2, 111)
tiles.setTilemap(tilemap`level1`)
scene.cameraFollowSprite(hero)
controller.moveSprite(hero, 100, 0)
hero.ay = 300
info.setLife(3)
