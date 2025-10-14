import { GameObject } from "./game_objects.js";
import { Input } from "./inputs.js";
import { Player} from "./player.js";
import { World } from "./world.js";

export const tile_size = 32;
export const columns = 20;
export const rows = 20;
const game_width = tile_size * columns;
const game_height = tile_size * rows;

window.addEventListener('load', function() {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext('2d');
    canvas.width = game_width;
    canvas.height = game_height;

    class Game {
        constructor() {
            this.world = new World();
            this.player = new Player({
                game: this,
                sprite: {
                    img: "images/spider.png"
                },
                position: {x: 0, y: 0}
            });
            this.input = new Input();
        }
        render(ctx){
            this.player.update();
            this.world.drawGrid(ctx);
            this.player.draw(ctx);
        }
    }
    
    const game = new Game();
    game.render(ctx);
    
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, game_width, game_height)
        game.render(ctx);
    }
    this.requestAnimationFrame(animate);
    

    
});