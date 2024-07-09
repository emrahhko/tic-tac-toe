import { playerTurnHandler } from '../handlers/playerTurnHandler.js';

export const createBoard = () => {
    const cellContainer = document.createElement('div');
    cellContainer.className = 'cellContainer';

    for (let i = 0; i < 9; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.id = i;
        cellContainer.append(cell);
        cell.addEventListener('click', playerTurnHandler);
    }
    return cellContainer;
};

export default createBoard;
