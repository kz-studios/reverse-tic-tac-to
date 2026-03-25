import Grid from "../../core/Grid.js";

export default class GameplayScreen {
    constructor() {
        this.grid = new Grid();
        this.screen = document.querySelector('#screen-gameplay');
    }

    render() {
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid');

        this.grid.gridState.forEach((row, x) => {
            row.forEach((_, y) => {
                const cellElement = document.createElement('button');
                cellElement.classList.add('cell');
                gridElement.appendChild(cellElement);
                cellElement.addEventListener('click', () => {
                    this.grid.gridState[x][y] = true;
                    cellElement.classList.toggle('marked', true);
                    console.log(`Clicked row ${x}, column ${y}`);
                    console.log(`Grid state: ${this.grid.gridState}`)
                });
            });
        });

        this.screen.appendChild(gridElement);
    }

    clear() {
        const elementToRemove = this.screen.querySelector('.grid');
        if (elementToRemove) {
            elementToRemove.remove();
        }
    }
}