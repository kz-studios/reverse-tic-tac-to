import gameConfig from '../../core/GameConfig.js'

export default class GameSetupScreen {
    constructor() {
        this.screen = document.querySelector('#screen-game-setup');
        this.settingsForm = this.screen.querySelector('#screen-game-setup-settings-container');
        this.gameSettingsContainer = this.settingsForm.querySelector('#game-settings-container');
        this.btnBack = this.screen.querySelector('.btn-back');
        this.btnHowToPlay = this.screen.querySelector('.btn-how-to-play');
        this.btnStart = this.screen.querySelector('.btn-start');

        this.gameSettingsContainer.addEventListener('click', (event) => {
            const btn = event.target;
    
            if (!btn.matches('.btn-decrease') && !btn.matches('.btn-increase')) return;

            const controlsContainer = btn.closest('.controls');
            const displaySpan = controlsContainer.querySelector('span');
            const settingKey = controlsContainer.dataset.setting;
            const min = parseInt(controlsContainer.dataset.min);
            const max = parseInt(controlsContainer.dataset.max);
            const step = parseInt(controlsContainer.dataset.step);

            let currentValue = gameConfig[settingKey];
            let newValue;
            if (btn.matches('.btn-decrease') && currentValue !== min) {
                newValue = currentValue - step;
            }
            else if (btn.matches('.btn-increase') && currentValue !== max) {
                newValue = currentValue + step;
            } else return;

            gameConfig[settingKey] = newValue;
            displaySpan.textContent = gameConfig[settingKey];
        })
    }
}