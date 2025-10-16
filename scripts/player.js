import { GameObject } from "./game_objects.js";
import { tile_size } from "./main.js";
import { playerController } from "./player_controller.js";

export class Player extends GameObject {
    constructor({position, player_controller, texture}) {
        
        super(position, player_controller);
        this.player_controller = new playerController(this);
        this.texture = new Image();
        this.loaded = false;
        this.texture.src = texture;


        this.texture.onload = () => {
            this.loaded = true;
        }
    }

    draw(ctx) {
        ctx.fillStyle = "green";
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