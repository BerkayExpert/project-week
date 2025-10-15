import { playerController } from "./player_controller.js";
import { Player } from "./player.js";
import { World } from "./world.js";
import { Wall } from "./wall.js";

//Maakt variablen die je in andere bestanden ook kan gebruiken.
export let tile_size;
export let rows;
export let columns; 
export let game_width;
export let game_height


//Als alles op een website wordt geladen maakt die een functie
window.addEventListener('load', function() {
    let canvas = document.getElementById('canvas');
    
    class Game {
        //Configureert de class
        constructor(tile_size_v, rows_v, columns_v) {
            //Neemt de tile_size en stelt hem gelijk aan de tile size die
            //je invoert. Als je niks invoert wordt het 32.
            this.tile_size = tile_size_v ?? 32;
            this.columns = columns_v ?? 20;
            this.rows = rows_v ?? 20;
            this.game_widtho = this.columns * this.tile_size;
            this.game_heighto = this.rows * this.tile_size;
            this.collisions = [];

            this.collision_layer = new Array(this.rows).fill(null).map(() => new Array(this.columns).fill(0));
            console.log(this.collision_layer);
            

            tile_size = this.tile_size;
            rows = this.rows;
            columns = this.columns;
            game_width = this.game_widtho;
            game_height = this.game_heighto;

            //Canvas grootte gelijk zetten aan het aantal rijeen * 
            //aantal pixels per tile in de grid.
            canvas.width = this.columns * this.tile_size;
            canvas.height = this.rows * this.tile_size;

            let ctx = canvas.getContext('2d');

            //Creerert de wereld en dus de grid.
            this.world = new World(this.tile_size, this.columns, this.rows);
            this.world.drawGrid(ctx);

            //Creeerert de speler en geeft hem de positie 0,0.
            this.player = new Player({
                position: {x:0, y:0}
            });
            //Geeft de player_controller een speler.
            this.player_controller = new playerController(this.player);

            //Creerert de muur.
            for (let index = 0; index < 3; index++) {
                let wall = new Wall({
                    position: {x: index, y:2}
                });
                this.collisions.push(wall);
                
            }

            

            //Tekent de speler
            this.player.draw(ctx);

            //Maakt een loop van 60 fps.
            requestAnimationFrame(() => this.update(ctx));
    
        }

        update(ctx) {
            requestAnimationFrame(() => this.update(ctx));

            for (let y = 0; y < this.collision_layer.length; y++) {
                for (let x = 0; x < this.collision_layer[y].length; x++) {
                    if (y >= 0 && y < this.rows && x - 1 >= 0 && this.collision_layer[y][x - 1] === 1)
                    this.collision_layer[y][x] = 0;
                }
            }

            

            this.collision_layer[this.player.position.y][20-(rows - this.player.position.x)]= 2;

            this.collisions.forEach((element,i) => {
                
                this.collision_layer[element.position.y][20-(rows - element.position.x)]= 1;
                
            });
            
            //Verwijdert alles op de scherm en tekent alles terug.
            ctx.clearRect(0,0, game_width, game_height)

            this.collisions.forEach(element => {
                element.draw(ctx);
            });
            
            this.player.draw(ctx);
            this.world.drawGrid(ctx);
            this.detectCollision(this.player, this.collisions)
        }

        detectCollision(player, collision) {
            collision.forEach(element => {
                if(this.collision_layer[player.position.y][20-(rows - this.player.position.x - 1)]==1) {
                    this.player_controller.collision_state = 1;
                } else if (this.collision_layer[player.position.y][20-(rows - this.player.position.x + 1)]==1) {
                    this.player_controller.collision_state = 3;
                } else if (this.collision_layer[player.position.y -1][20-(rows - this.player.position.x)]==1) {
                    this.player_controller.collision_state = 4;
                } else if (this.collision_layer[player.position.y + 1][20 - (rows - this.player.position.x)] == 1) {
                    this.player_controller.collision_state = 2;
                }
                else {
                    this.player_controller.collision_state = 0;
                }
            });
            
        }
    }
    
    const game = new Game(32, 20, 20);
})
