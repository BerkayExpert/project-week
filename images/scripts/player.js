import { GameObject } from "./game_objects.js";
import { DOWN, LEFT, RIGHT, UP } from "./inputs.js";

export class Player extends GameObject {
    constructor({game, position, scale, sprite}) {
        super(game, position, scale, sprite);

    }

    update() {
        if(this.game.input.lastKey === UP) {
            this.position.y--;
        } else if (this.game.input.lastKey === DOWN) {
            this.position.y++;
        } else if (this.game.input.lastKey === RIGHT) {
            this.position.x++;
        } else if (this.game.input.lastKey === LEFT) {
            this.position.x--;
        } 
    }

    stepRight() {
        this.position.x += 1
    }
}