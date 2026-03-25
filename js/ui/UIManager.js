import ScreenManager from './ScreenManager.js';
import DialogManager from './DialogManager.js';

export default class UIManager {
    constructor() {
        this.screenManager = new ScreenManager();
        this.dialogManager = new DialogManager();

        this.screenManager.titleScreen.btnHowToPlay.addEventListener('click', () => {
            this.dialogManager.dlgHowToPlay.openDialog();
        })
    }

    
}