import TitleScreen from './screens/TitleScreen.js';
import GameplayScreen from './screens/GameplayScreen.js';

export default class ScreenManager {
    constructor() {
        this.titleScreen = new TitleScreen();
        this.gameplayScreen = new GameplayScreen();
        this.screens = document.querySelectorAll('.screen');

        this.titleScreen.btnPlay.addEventListener('click', () => {
            this.gameplayScreen.clear();
            this.gameplayScreen.grid.reset();
            this.gameplayScreen.render();
            this.switch('screen-gameplay');
        })

        // Dev functions
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                if (this.titleScreen.screen.classList.contains('active')) return;
                this.switch('screen-title');
            }
        });
    }

    switch(targetScreen) {
        this.screens.forEach((screen, _) => {
            if (screen.id === targetScreen) {
                screen.classList.replace('hidden', 'active');
            } else {
                screen.classList.replace('active', 'hidden');
            }
        });
    }
}