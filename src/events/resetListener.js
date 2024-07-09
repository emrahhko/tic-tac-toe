import { dom } from '../dom.js';
import { clearBoardHandler } from '../handlers/clearBoardHandler.js';

export const resetListener = () => {
    dom.resetBtn.addEventListener('click', clearBoardHandler);
};
