namespace SpriteKind {
    export const Cursor = SpriteKind.create()
    export const BattleMenuText = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
}
function moveBattleMenuSelection(direction: number) {
    if (direction == 0) {
        if (selectedMenuItem == MenuItem4) {
            selectedMenuItem = MenuItem1
        } else if (selectedMenuItem == MenuItem3) {
            selectedMenuItem = MenuItem2
        }
    } else if (direction == 1) {
        if (selectedMenuItem == MenuItem1) {
            selectedMenuItem = MenuItem2
        } else if (selectedMenuItem == MenuItem4) {
            selectedMenuItem = MenuItem3
        }
    } else if (direction == 2) {
        if (selectedMenuItem == MenuItem1) {
            selectedMenuItem = MenuItem4
        } else if (selectedMenuItem == MenuItem2) {
            selectedMenuItem = MenuItem3
        }
    } else {
        if (selectedMenuItem == MenuItem2) {
            selectedMenuItem = MenuItem1
        } else if (selectedMenuItem == MenuItem3) {
            selectedMenuItem = MenuItem4
        }
    }
    cursor.right = selectedMenuItem.left
    cursor.y = selectedMenuItem.y
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    moveBattleMenuSelection(0)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene2 = "battle mode"
    game.setDialogCursor(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 1 1 1 1 1 1 1 1 . . . 
        . . . 1 f f f f f f f f 1 . . . 
        . . . . 1 f f f f f f 1 . . . . 
        . . . . . 1 f f f f 1 . . . . . 
        . . . . . . 1 f f 1 . . . . . . 
        . . . . . . . 1 1 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    game.setDialogFrame(img`
        ..ffffffffffffffffffff..
        .fc111111111111111111cf.
        fc1cffffffffffffffffc1cf
        f1cffffffffffffffffffc1f
        f1fc1111111111111111cf1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1f111111111111111111f1f
        f1fc1111111111111111cf1f
        fc1ffffffffffffffffff1cf
        ffc111111111111111111cff
        .ffffffffffffffffffffff.
        ..ffffffffffffffffffff..
        `)
    if (scene2 == "battle mode") {
        if (selectedMenuItem == MenuItem1) {
            game.showLongText("Info", DialogLayout.Bottom)
        } else if (selectedMenuItem == MenuItem2) {
            game.showLongText("Info", DialogLayout.Bottom)
        } else if (selectedMenuItem == MenuItem4) {
            game.showLongText("Info", DialogLayout.Bottom)
        } else {
            game.showLongText("Info", DialogLayout.Bottom)
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scene2 = "battle mode"
    if (scene2 == "battle mode") {
        if (selectedMenuItem == MenuItem1) {

        } else if (selectedMenuItem == MenuItem2) {

        } else if (selectedMenuItem == MenuItem3) {

        } else {

        }
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    moveBattleMenuSelection(3)
})
function createBattleMenu() {
    MenuItem1 = createMenuItemSprite("MenuItem1")
    MenuItem1.left = 15
    MenuItem1.top = 60
    MenuItem2 = createMenuItemSprite("MenuItem2")
    MenuItem2.left = 95
    MenuItem2.top = 60
    MenuItem3 = createMenuItemSprite("MenuItem3")
    MenuItem3.left = 95
    MenuItem3.top = 90
    MenuItem4 = createMenuItemSprite("MenuItem4")
    MenuItem4.left = 15
    MenuItem4.top = 90
    battleMenuIsOpen = true
    selectedMenuItem = MenuItem1
    cursor = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . 1 f 1 . . . . . . . . . 
        . . . . 1 f f 1 . . . . . . . . 
        . . . . 1 f f f 1 . . . . . . . 
        . . . . 1 f f f f 1 . . . . . . 
        . . . . 1 f f f f 1 . . . . . . 
        . . . . 1 f f f 1 . . . . . . . 
        . . . . 1 f f 1 . . . . . . . . 
        . . . . 1 f 1 . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    cursor.right = selectedMenuItem.left
    cursor.y = selectedMenuItem.y
    animation.runImageAnimation(
        cursor,
        [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        . . . . . 1 f 1 . . . . . . . . 
        . . . . . 1 f f 1 . . . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 f f f f 1 . . . . . 
        . . . . . 1 f f f f 1 . . . . . 
        . . . . . 1 f f f 1 . . . . . . 
        . . . . . 1 f f 1 . . . . . . . 
        . . . . . 1 f 1 . . . . . . . . 
        . . . . . 1 1 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . 1 f 1 . . . . . . . . . 
        . . . . 1 f f 1 . . . . . . . . 
        . . . . 1 f f f 1 . . . . . . . 
        . . . . 1 f f f f 1 . . . . . . 
        . . . . 1 f f f f 1 . . . . . . 
        . . . . 1 f f f 1 . . . . . . . 
        . . . . 1 f f 1 . . . . . . . . 
        . . . . 1 f 1 . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . 1 f 1 . . . . . . . . . . 
        . . . 1 f f 1 . . . . . . . . . 
        . . . 1 f f f 1 . . . . . . . . 
        . . . 1 f f f f 1 . . . . . . . 
        . . . 1 f f f f 1 . . . . . . . 
        . . . 1 f f f 1 . . . . . . . . 
        . . . 1 f f 1 . . . . . . . . . 
        . . . 1 f 1 . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . 1 f 1 . . . . . . . . . . . 
        . . 1 f f 1 . . . . . . . . . . 
        . . 1 f f f 1 . . . . . . . . . 
        . . 1 f f f f 1 . . . . . . . . 
        . . 1 f f f f 1 . . . . . . . . 
        . . 1 f f f 1 . . . . . . . . . 
        . . 1 f f 1 . . . . . . . . . . 
        . . 1 f 1 . . . . . . . . . . . 
        . . 1 1 . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . 1 f 1 . . . . . . . . . . 
        . . . 1 f f 1 . . . . . . . . . 
        . . . 1 f f f 1 . . . . . . . . 
        . . . 1 f f f f 1 . . . . . . . 
        . . . 1 f f f f 1 . . . . . . . 
        . . . 1 f f f 1 . . . . . . . . 
        . . . 1 f f 1 . . . . . . . . . 
        . . . 1 f 1 . . . . . . . . . . 
        . . . 1 1 . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . 1 f 1 . . . . . . . . . 
        . . . . 1 f f 1 . . . . . . . . 
        . . . . 1 f f f 1 . . . . . . . 
        . . . . 1 f f f f 1 . . . . . . 
        . . . . 1 f f f f 1 . . . . . . 
        . . . . 1 f f f 1 . . . . . . . 
        . . . . 1 f f 1 . . . . . . . . 
        . . . . 1 f 1 . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
        50,
        true
    )
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    moveBattleMenuSelection(1)
})
function openOverworld() {
    createBattleMenu()
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    moveBattleMenuSelection(2)
})
function createMenuItemSprite(text: string) {
    newMenuItem = textsprite.create(text, 0, 1)
    newMenuItem.setMaxFontHeight(8)
    newMenuItem.setBorder(1, 1, 2)
    newMenuItem.setKind(SpriteKind.BattleMenuText)
    return newMenuItem
}
let newMenuItem: TextSprite = null
let battleMenuIsOpen = false
let scene2 = ""
let cursor: Sprite = null
let MenuItem2: TextSprite = null
let MenuItem1: TextSprite = null
let MenuItem3: TextSprite = null
let MenuItem4: TextSprite = null
let selectedMenuItem: TextSprite = null
openOverworld()
