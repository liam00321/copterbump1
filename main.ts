namespace SpriteKind {
    export const cloud = SpriteKind.create()
    export const copter = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.copter, SpriteKind.cloud, function (sprite, otherSprite) {
    sprite.x += -1 * sprite.vx
    sprite.y += -1 * sprite.vy
    sprite.vx = 0
    sprite.vy = 0
    otherSprite.y += -1
    pause(100)
    otherSprite.y += 1
})
game.splash("Cloud Bump", "control pad flying")
scene.setBackgroundColor(9)
let mySprite = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ......ffffffffffffffffffff......
    ......ffffffffffffffffffff......
    ...............ee...............
    .............eeeeee888..........
    ...........eee222229988.........
    ........eeee222222299988........
    .....f.ee2222222222999988.......
    ff..ff.e22222222222999998.......
    .ffffeee222222222229999988......
    .eff2222222222222229999998......
    .effeeee2222222222299999988.....
    .feff..eee22222222229999988.....
    .f..ff...ee2222222222229988.....
    ff........ee2222222222eeee......
    ...........eee22eeeeeee.........
    ..........ff.eeee.....f.........
    ..........f...........ff........
    ........fff............f........
    ........ffffffffffffffff........
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.copter)
mySprite.vx += controller.dx()
mySprite.vy += controller.dy()
mySprite.setStayInScreen(true)
let cloud_1 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................aaaaa...........
    .........aaaaa..a888aaaaa.......
    .........a88aaaaa8888888aa......
    .........a888888888888888a......
    .........a888888888988888a......
    .....aaaaa899888889988888aa.....
    ....aa88888988888998888888a.....
    ....a888888888888888889988a.....
    ....a888888888888888888888a.....
    ....aaaaaaaaaaaaaaaaaaaaaaa.....
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.cloud)
cloud_1.setPosition(20, 30)
let cloud_2 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................aaaaa...........
    .........aaaaa..a888aaaaa.......
    .........a88aaaaa8888888aa......
    .........a888888888888888a......
    .........a888888888988888a......
    .....aaaaa899888889988888aa.....
    ....aa88888988888998888888a.....
    ....a888888888888888889988a.....
    ....a888888888888888888888a.....
    ....aaaaaaaaaaaaaaaaaaaaaaa.....
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.cloud)
cloud_2.setPosition(50, 65)
let cloud_3 = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................aaaaa...........
    .........aaaaa..a888aaaaa.......
    .........a88aaaaa8888888aa......
    .........a888888888888888a......
    .........a888888888988888a......
    .....aaaaa899888889988888aa.....
    ....aa88888988888998888888a.....
    ....a888888888888888889988a.....
    ....a888888888888888888888a.....
    ....aaaaaaaaaaaaaaaaaaaaaaa.....
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.cloud)
cloud_3.setPosition(100, 40)
let landing = sprites.create(img`
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ................................
    ....ff5fff5ff5ff5ff5ff5ff5fff...
    ....ff5ff5ff5ff5ff5ff5ff5ffff...
    .............f....f.............
    .............f....f.............
    .............f....f.............
    .............f....f.............
    ................................
    ................................
    ................................
    ................................
    ................................
    `, SpriteKind.Player)
landing.y = 100
