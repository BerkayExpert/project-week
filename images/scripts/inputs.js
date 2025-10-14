export const UP = "w";
export const LEFT = "a";
export const DOWN = "s";
export const RIGHT = "d";

export class Input {
    constructor() {
        this.keys = [];
        window.addEventListener("keydown", e => {
            if(e.key.toLowerCase() === UP) {
                this.keyPressed(UP);
            } else if (e.key.toLowerCase() === DOWN) {
                this.keyPressed(DOWN)
            } else if (e.key.toLowerCase() === RIGHT) {
                this.keyPressed(RIGHT)
            } else if (e.key.toLowerCase() === LEFT) {
                this.keyPressed(LEFT)
            }
        });

        window.addEventListener("keyup", e => {
            if(e.key.toLowerCase() === UP) {
                this.keyReleased(UP);
            } else if (e.key.toLowerCase() === DOWN) {
                this.keyReleased(DOWN)
            } else if (e.key.toLowerCase() === RIGHT) {
                this.keyReleased(RIGHT)
            } else if (e.key.toLowerCase() === LEFT) {
                this.keyReleased(LEFT)
            }
        })
    }

    keyPressed(key) {
        if(this.keys.indexOf(key) === -1) {
            this.keys.unshift(key);
        }
    }
    
    keyReleased(key) {
        const index = this.keys.indexOf(key);
        if(index===-1) return;
        this.keys.splice(index, 1);
    }

    get lastKey() {
        return this.keys[0];
    }
}

