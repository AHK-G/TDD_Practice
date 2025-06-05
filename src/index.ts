export class Cell {
    private isAlive: boolean = false;
    private coordinates: Position;
    constructor( x: number,  y: number) {
        this.coordinates = new Position(x, y);
    }

    getIsAlive(): boolean {
        return this.isAlive;
    }

    setIsAlive(isAlive: boolean): void {
        this.isAlive = isAlive;
    }

    getCoordinates(): Array<number> {
        const coordinates: Array<number> = [this.coordinates.x, this.coordinates.y];
        return coordinates;
    }

} 

export class Position {
    constructor(public x: number, public y: number) {}
}

export class Rule {
    public static bringBackToLife(cell: Cell): void {
        cell.setIsAlive(true);
    }

    public static unalive(cell: Cell): void {
        cell.setIsAlive(false);
    }
}

