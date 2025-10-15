import { tile_size } from "./main.js"

export class GameObject {
    constructor(position) {
        this.position = position ?? {x:0, y:0}
    }

    draw(ctx) {
        ctx.fillStyle = 'black';
        ctx.fillRect(
            tile_size * this.position.x,
            tile_size * this.position.y,
            tile_size,
            tile_size
        )
    }
}