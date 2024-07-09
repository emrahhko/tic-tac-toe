import { dom } from '../dom.js';
import { createBoard } from '../components/createBoard.js';

export const loadHandler = () => {
    const gameBoard = createBoard();
    dom.board.innerHTML = '';
    dom.board.append(gameBoard);
    dom.playerTurn.innerHTML = "O's turn";
};
