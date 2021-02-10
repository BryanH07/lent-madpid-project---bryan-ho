// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile9 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile11 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile12 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile10 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile15 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000002020200000000000202020200000000000202000000000002020200000000000202020203030303030303030303030303030303`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 . . . . . 2 2 2 2 
. . . . . 2 2 . . . . . 2 2 2 . . . . . 
2 2 2 2 . . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.castle.tilePath1,myTiles.tile5], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1400080000000000000000000000000000000000000000000000000405070504000b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001000000000000000002020200030300000202020200000000000202020000000002020200000000000202020202030303030303030303030303030303`, img`
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . 
. . . . . . . . 2 2 2 . . . . . 2 2 2 2 
. . . . . 2 2 2 . . . . 2 2 2 . . . . . 
2 2 2 2 2 . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.collectibleInsignia,sprites.castle.tilePath1,sprites.dungeon.hazardLava0,myTiles.tile7,myTiles.tile8,myTiles.tile9,myTiles.tile10,myTiles.tile11,myTiles.tile12,myTiles.tile15,myTiles.tile16], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
            case "tile5":return tile5;
            case "myTile":
            case "tile6":return tile6;
            case "myTile2":
            case "tile9":return tile9;
            case "myTile4":
            case "tile11":return tile11;
            case "myTile5":
            case "tile12":return tile12;
            case "l":
            case "tile7":return tile7;
            case "e":
            case "tile8":return tile8;
            case "myTile3":
            case "tile10":return tile10;
            case "myTile8":
            case "tile15":return tile15;
            case "myTile9":
            case "tile16":return tile16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
