/**
 * @jest-environment jsdom
 */

import { createBoard } from './createBoard.js';

describe('createBoard function', () => {
    const cellContainer = createBoard();

    test('nodeName -> DIV', () => {
        expect(cellContainer.nodeName).toEqual('DIV');
    });

    test('className -> cellContainer', () => {
        expect(cellContainer.className).toEqual('cellContainer');
    });

    test('childElementCount -> 9', () => {
        expect(cellContainer.childElementCount).toEqual(9);
    });

    test('cells should have correct ids and class names', () => {
        const cells = cellContainer.children;
        for (let i = 0; i < cells.length; i++) {
            const cell = cells[i];
            expect(cell.nodeName).toEqual('DIV');
            expect(cell.classList.contains('cell')).toBe(true);
            expect(cell.id).toEqual(i.toString());
        }
    });
});
