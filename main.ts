controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        mySprite.vy = -150
    }
})
let mySprite: Sprite = null
scene.setBackgroundColor(6)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . 5 5 5 5 5 . . . . 
    . . . . . . 5 5 5 5 5 5 5 . . . 
    . . . . . . 5 6 5 5 5 6 5 . . . 
    . . . . . . 5 5 5 4 5 5 5 . . . 
    . . . . 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 4 5 5 5 5 5 5 5 . . . 
    . . . 5 5 4 5 4 4 5 5 5 . . . . 
    . . . 5 5 4 4 5 5 5 5 5 . . . . 
    . . . 5 5 5 5 5 5 5 5 5 . . . . 
    . . . . 5 5 5 5 5 5 5 . . . . . 
    . . . . . e . . . e . . . . . . 
    . . . . . e . . . e . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setStayInScreen(true)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 350
scene.cameraFollowSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
info.setLife(5)
game.onUpdate(function () {
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 5 5 5 5 5 . . . . 
        . . . . . . 5 5 5 5 5 5 5 . . . 
        . . . . . . 5 6 5 5 5 6 5 . . . 
        . . . . . . 5 5 5 4 5 5 5 . . . 
        . . . . 5 5 5 5 5 5 5 5 5 . . . 
        . . . 5 5 4 5 5 5 5 5 5 5 . . . 
        . . . 5 5 4 5 4 4 5 5 5 . . . . 
        . . . 5 5 4 4 5 5 5 5 5 . . . . 
        . . . 5 5 5 5 5 5 5 5 5 . . . . 
        . . . . 5 5 5 5 5 5 5 . . . . . 
        . . . . . e . . . e . . . . . . 
        . . . . . e . . . e . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    if (mySprite.vx < 0) {
        mySprite.image.flipX()
    }
    if (mySprite.vy < 0) {
        mySprite.setImage(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . 5 5 5 5 5 . . . . 
            . . . . . . 5 5 5 5 5 5 5 . . . 
            . . . . . . 5 6 5 5 5 6 5 . . . 
            . . . . . . 5 5 5 4 5 5 5 . . . 
            . . . . 5 5 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 5 5 5 5 5 5 . . . 
            . . . 5 5 4 5 4 4 5 5 5 . . . . 
            . . . 5 5 4 4 5 5 5 5 5 . . . . 
            . . . 5 5 5 5 5 5 5 5 5 . . . . 
            . . . . 5 5 5 5 5 5 5 . . . . . 
            . . . . . e . . . e . . . . . . 
            . . . . . e . . . e . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
    }
})
