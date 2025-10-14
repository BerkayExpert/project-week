import { Input } from "./inputs.js";
import { tile_size } from "./main.js";

export class GameObject {
    constructor(game, position, scale, sprite) {
        this.game = game;
        this.position = position ?? {x:0, y:0};
        this.scale = scale ?? 1;
        this.sprite = sprite ?? {img:""};
        this.image = new Image();
        this.image.src = this.sprite.img;
        this.input = new Input();
    }

    draw(ctx) {
        ctx.fillStyle = 'white';
        ctx.imageSmoothingEnabled = false;
        ctx.fillRect(
            tile_size * this.position.x,
            tile_size * this.position.y,
            tile_size * this.scale,
            tile_size * this.scale
        )
        ctx.drawImage(
            this.image,
            this.position.x * tile_size,
            this.position.y * tile_size,
            tile_size * this.scale,
            tile_size * this.scale
        )
    }
}