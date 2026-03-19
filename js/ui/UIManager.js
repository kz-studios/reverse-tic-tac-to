import Dialogs from './dialogs.js';

export default class UIManager {
    constructor() {
        this.dialogManager = new Dialogs();
        this.btnHowToPlay = document.querySelector('#btn-how-to-play');

        this.btnHowToPlay.addEventListener('click', () => {
            this.dialogManager.dlgHowToPlay.openDialog();
        })
    }

    
}