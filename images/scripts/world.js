import {tile_size, columns, rows} from "./main.js";

export class World {
    constructor(level1) {
        this.level1 = {}
    }

    drawGrid(ctx) {
        for(let row = 0; row < rows; row++) {
            for(let col = 0; col < columns; col++) {
                ctx.strokeRect(
                    col * tile_size,
                    row * tile_size,
                    tile_size,
                    tile_size
                )
            }
        }
    }
}
