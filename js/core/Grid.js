export default class Grid {
    constructor() {
        this.isAlive = null;
        this.gridState = null;

        this.reset();
    }

    reset() {
        this.isAlive = true;
        this.gridState = [
            [false, false, false],
            [false, false, false],
            [false, false, false]
        ];
    }
}