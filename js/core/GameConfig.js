class GameConfig {
    #numofPlayers
    #numOfGrids
    #numOfRounds
    #playerTurnTimeLimit
    #gameTimeLimit
    #gameMode

    constructor() {
        this.#numOfGrids = 3;
    }

    get numOfGrids() {
        return this.#numOfGrids;
    }

    set numOfGrids(numOfGrids) {
        this.#numOfGrids = numOfGrids;
    }
}

const instance = new GameConfig();
export default instance;