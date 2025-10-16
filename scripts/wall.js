import { GameObject } from "./game_objects.js";
import { tile_size } from "./main.js";

export class Wall extends GameObject {
    constructor({position, texture}) {
        super(position);
        this.texture = new Image();
        this.loaded = false;
        this.texture.src = texture;


        this.texture.onload = () => {
            this.loaded = true;
        }
    }

    draw(ctx) {
        ctx.fillStyle = "white";
        ctx.imageSmoothingEnabled = false;
        ctx.fillRect(
            tile_size * this.position.x,
            tile_size * this.position.y,
            tile_size,
            tile_size
        )

        if(this.loaded) {
            ctx.drawImage(
                this.texture,
                tile_size * this.position.x,
                tile_size * this.position.y,
                tile_size,
                tile_size
            )
        }
        
        
    }

}