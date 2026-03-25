import Grid from "../../core/Grid.js";

export default class GameplayScreen {
    constructor() {
        this.numOfGrids = 5;
        this.grids = [];
        this.screen = document.querySelector('#screen-gameplay');
        this.gridContainer = this.screen.querySelector('#grid-container');
    }

    renderGrids() {
        for (let i = 1; i <= this.numOfGrids; i++) {
            this.grids.push(new Grid());
            const gridElement = document.createElement('div');
            gridElement.id = `grid-${i}`;
            gridElement.classList.add('grid');
            const currentGrid = this.grids[i-1];

            currentGrid.gridState.forEach((row, x) => {
                row.forEach((_, y) => {
                    const cellElement = document.createElement('button');
                    cellElement.classList.add('cell');
                    gridElement.appendChild(cellElement);
                    cellElement.addEventListener('click', () => {
                        currentGrid.gridState[x][y] = true;
                        cellElement.classList.toggle('marked', true);
                        console.log(`Clicked grid-${i}: row ${x}, column ${y}`);
                        console.log(`Grid state: ${currentGrid.gridState}`)
                    });
                });
            });

            this.gridContainer.appendChild(gridElement);
        }
        
    }

    clearGrids() {
        this.grids = [];
        this.gridContainer.innerHTML = '';
    }
}