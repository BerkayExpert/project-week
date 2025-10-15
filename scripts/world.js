export class World {
    constructor(tile_size, columns, rows) {
        this.tile_size = tile_size;
        this.columns = columns;
        this.rows = rows;
    }

    drawGrid(ctx) {
        for(let col = 0; col < this.columns; col++) {
            for(let row = 0; row < this.rows; row++) {
                ctx.strokeRect(
                    this.tile_size * col,
                    this.tile_size * row,
                    this.tile_size,
                    this.tile_size
                );
            }
        }
    }
}