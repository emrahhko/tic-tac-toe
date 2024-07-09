import { loadHandler } from '../handlers/loadHandler.js';

export const loadListener = () => {
    window.addEventListener('load', loadHandler);
};
