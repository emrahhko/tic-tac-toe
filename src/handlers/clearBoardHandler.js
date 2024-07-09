import { dom } from '../dom.js';
import { data } from '../data.js';

export const clearBoardHandler = () => {
    const cellElements = document.querySelectorAll('.cell');
    cellElements.forEach((cellEl) => {
        cellEl.innerHTML = '';
        cellEl.className = 'cell';
    });

    data.playBoard = Array(9).fill('');
    data.turn = 'O';
    dom.playerTurn.innerHTML = "O's turn";
};
