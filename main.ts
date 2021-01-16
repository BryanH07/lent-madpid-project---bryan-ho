effects.confetti.startScreenEffect(500)
music.playMelody("G G B G D G B G ", 200)
scene.setBackgroundColor(8)
let hero = sprites.create(img`
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
hero.setPosition(5, 102)
tiles.setTilemap(tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000003030300000000000303030300000000000303000000000003030300000000000303030302020202020202020202020202020202`, img`
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . 2 2 2 . . . . . 2 2 2 2 
    . . . . . 2 2 . . . . . 2 2 2 . . . . . 
    2 2 2 2 . . . . . . . . . . . . . . . . 
    `, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava0,sprites.castle.tilePath1], TileScale.Sixteen))
scene.cameraFollowSprite(hero)
controller.moveSprite(hero)
