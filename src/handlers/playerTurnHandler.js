import { dom } from '../dom.js';
import { data } from '../data.js';
import { selectWinner } from '../utils/selectWinner.js';

export const playerTurnHandler = (e) => {
    const cellEl = e.target;
    const id = cellEl.id;

    if (cellEl.innerText || dom.playerTurn.innerHTML.includes('win')) {
        return;
    }

    cellEl.classList.add(data.turn);
    cellEl.innerHTML = data.turn;
    data.playBoard[id] = data.turn;

    const winResult = selectWinner(
        document.querySelectorAll(`.${data.turn}`),
        data.winCombinations,
        data.turn,
        data.playBoard,
    );

    if (winResult !== null) {
        dom.playerTurn.innerHTML = winResult;
        return;
    }

    data.turn = data.turn === 'O' ? 'X' : 'O';
    dom.playerTurn.innerHTML = `${data.turn}'s turn`;
};
