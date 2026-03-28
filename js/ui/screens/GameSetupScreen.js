export default class GameSetupScreen {
    constructor() {
        this.screen = document.querySelector('#screen-game-setup');
        this.settingsForm = this.screen.querySelector('#screen-game-setup-settings-container');
        this.btnBack = this.screen.querySelector('.btn-back');
        this.btnHowToPlay = this.screen.querySelector('.btn-how-to-play');
        this.btnStart = this.screen.querySelector('.btn-start');
    }
}