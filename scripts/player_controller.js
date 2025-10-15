import { columns, game_height, game_width, rows, tile_size } from "./main.js";

export const up = "w";
export const left = 'a';
export const down = 's';
export const right = 'd';
export let velocity = 1;

export class playerController {
    constructor(player) {
        this.player = player;
        this.collision_state = 0;

        window.addEventListener('keydown', e => {
            let row_pos = rows - 1;
            let column_pos = columns - 1;

            if(e.key.toLowerCase() === right && this.player.position.x < column_pos && this.collision_state != 1){

                this.player.position.x += 1;
            } 
            if (e.key.toLowerCase() === left && this.player.position.x > 0 && this.collision_state != 3) {
                
                this.player.position.x -= 1;
            } 
            if (e.key.toLowerCase() === up && this.player.position.y > 0 && this.collision_state != 4) {
                this.player.position.y -= 1;
            } 
            if (e.key.toLowerCase() === down && this.player.position.y < row_pos && this.collision_state != 2) {
                this.player.position.y += 1;
            }
        });
    }

}
