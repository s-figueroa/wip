// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`320010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002020600000000000000000000000000000000000000000000000000000000000000000000000000000000000000000202060303030000000000000000000000000000000000000000000000000000000000000202020602020202020202060202030303040404000000000000000000000000000000000000000000000000000000000002030303030303030303030303030304040404040400000000000000000000000000000000000000000000000000000000020304040404040404040404040404040404040404040000000000000000000000000000000000000000000000000000020203040404040404040404040404040404040404040404000000000000000000000000000000000000000000000000000203030404040404040404040404040404040404040404040400000000000000000000000000000000000000000202060602030404040404040404040404040404040404040404040404040000000000000000000000000000000000000006030303030304040404040404040404040404040404040404040404040404000000000000000000000000000000000000000304040404040404040404040404040404040404040404040404040404040406020607020600000202020200000002000000040404040404040404040404040404040404040404040404040404040404040101010101010101010101010101010101010105050505050505050505050505050505050505050505050505050505050505`, img`
..................................................
..................................................
..................................................
..................................................
..................................................
...............................................222
............................................222222
..............................22222222222222222222
.............................222222222222222222222
............................2222222222222222222222
..........................222222222222222222222222
.........................2222222222222222222222222
....................222222222222222222222222222222
...................2222222222222222222222222222222
...................2222222222222222222222222222222
22222222222222222222222222222222222222222222222222
`, [myTiles.transparency16,myTiles.tile1,myTiles.tile2,myTiles.tile5,myTiles.tile6,myTiles.tile3,myTiles.tile4,myTiles.tile7], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile5":
            case "tile7":return tile7;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
