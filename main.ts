scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.gameOver(true)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    game.splash("+2 seconds and +1 point!")
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeCountdownBy(2)
    info.changeScoreBy(1)
    mySprite.sayText("We got this!", 1000, false)
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.splash("-2 seconds and -1 point!")
    sprites.destroy(otherSprite, effects.spray, 500)
    info.changeCountdownBy(-2)
    info.changeScoreBy(-1)
    mySprite.sayText("AHHHHH", 1000, false)
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.UntilDone)
})
let mySprite: Sprite = null
game.splash("Held captive by his owner, Mr. Duck always dreamt of leaving his prison like live.")
game.splash("One day, while walking around his \"cell\", Mr. Duck comes upon a secret passage that leads to a maze!")
game.splash("With hope to escape imprisonment, Mr. Duck embarks on his journey to possibly clear all levels of the maze and possibly reach freedom!")
game.splash("Join him on his journey!")
scene.setBackgroundColor(3)
tiles.setCurrentTilemap(tilemap`level1`)
mySprite = sprites.create(img`
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 d 4 c . . 
    . . . . b 5 5 1 f f d d 4 4 4 b 
    . . . . b 5 5 d f b 4 4 4 4 b . 
    . . . b d 5 5 5 5 4 4 4 4 b . . 
    . . b d d 5 5 5 5 5 5 5 5 b . . 
    . b d d d d 5 5 5 5 5 5 5 5 b . 
    b d d d b b b 5 5 5 5 5 5 5 b . 
    c d d b 5 5 d c 5 5 5 5 5 5 b . 
    c b b d 5 d c d 5 5 5 5 5 5 b . 
    . b 5 5 b c d d 5 5 5 5 5 d b . 
    b b c c c d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairNorth)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
let timeScoreUp = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . b d b c . . . . . 
    . . . . b b c 5 5 5 c b b . . . 
    . . . . b 5 5 5 1 5 5 5 b . . . 
    . . . c c 5 5 5 1 5 5 5 c c . . 
    . . b b 5 5 5 1 1 1 5 5 5 b b . 
    . . d d 5 1 1 1 1 1 1 1 5 d d . 
    . . b b 5 5 5 1 1 1 5 5 5 b b . 
    . . . c c 5 5 5 1 5 5 5 c c . . 
    . . . . b 5 5 5 1 5 5 5 b . . . 
    . . . . b b c 5 5 5 c b b . . . 
    . . . . . . c b d b c . . . . . 
    . . . . . . . b d b . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(timeScoreUp, sprites.dungeon.chestOpen)
let timeScoreUp2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . b b . b b b . . . . . 
    . . . . b 1 1 b 1 1 1 b . . . . 
    . . b b 3 1 1 d d 1 d d b b . . 
    . b 1 1 d d b b b b b 1 1 b . . 
    . b 1 1 1 b . . . . . b d d b . 
    . . 3 d d b . . . . . b d 1 1 b 
    . b 1 d 3 . . . . . . . b 1 1 b 
    . b 1 1 b . . . . . . b b 1 d b 
    . b 1 d b . . . . . . b d 3 d b 
    . b b d d b . . . . b d d d b . 
    . b d d d d b . b b 3 d d 3 b . 
    . . b d d 3 3 b d 3 3 b b b . . 
    . . . b b b d d d d d b . . . . 
    . . . . . . b b b b b . . . . . 
    `, SpriteKind.Food)
tiles.placeOnRandomTile(timeScoreUp2, sprites.dungeon.chestOpen)
let badGuy = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . b b b b . . . . . . . . 
    . . . b 3 3 3 3 b b b b . . . . 
    . . b b 3 3 3 3 3 3 1 1 b c c . 
    . . b 3 3 3 3 3 3 1 1 1 3 c c c 
    . . b 1 1 3 3 3 3 3 3 3 3 3 b c 
    . . c 1 1 3 3 3 b c c c c b b f 
    . c c 3 3 3 b b d d d c c c b f 
    c b 3 3 b b d d d d d d b c b f 
    c 3 3 c b d d d d d d d d b c . 
    f 3 c c c d d d d d d c c d c . 
    f b c c c d d c c d d d d d f . 
    f b c c c d d d d d b b b d f . 
    f f b b c f f b d d d d d c . . 
    . f f f f d d b b d d d b f . . 
    . . . . f d d d b c c f f f . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(badGuy, sprites.swamp.swampTile0)
let badGuy2 = sprites.create(img`
    . . f f f . . . . . . . . f f f 
    . f f c c . . . . . . f c b b c 
    f f c c . . . . . . f c b b c . 
    f c f c . . . . . . f b c c c . 
    f f f c c . c c . f c b b c c . 
    f f c 3 c c 3 c c f b c b b c . 
    f f b 3 b c 3 b c f b c c b c . 
    . c b b b b b b c b b c c c . . 
    . c 1 b b b 1 b b c c c c . . . 
    c b b b b b b b b b c c . . . . 
    c b c b b b c b b b b f . . . . 
    f b 1 f f f 1 b b b b f c . . . 
    f b b b b b b b b b b f c c . . 
    . f b b b b b b b b c f . . . . 
    . . f b b b b b b c f . . . . . 
    . . . f f f f f f f . . . . . . 
    `, SpriteKind.Enemy)
tiles.placeOnRandomTile(badGuy2, sprites.swamp.swampTile0)
info.startCountdown(20)
info.setScore(0)
