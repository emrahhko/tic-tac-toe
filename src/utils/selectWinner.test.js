/**
 * @jest-environment jsdom
 */

import { selectWinner } from '../utils/selectWinner';

describe('selectWinner function', () => {
    let cells;
    let winCombinations;
    let playBoard;

    beforeEach(() => {
        winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        playBoard = Array(9).fill(null);
    });

    test('should return null when no winner and no draw', () => {
        cells = [];
        playBoard = ['X', null, null, 'O', null, null, null, null, null];
        const result = selectWinner(cells, winCombinations, 'X', playBoard);
        expect(result).toBe("No one wins, no one loses. It's a tie!");
    });

    test('should return winner message when there is a winner', () => {
        cells = [{ id: '0' }, { id: '1' }, { id: '2' }];
        playBoard = ['X', 'X', 'X', 'O', null, null, null, null, null];
        const result = selectWinner(cells, winCombinations, 'X', playBoard);
        expect(result).toBe('Congratulations! X you win!');
    });

    test('should not declare a winner prematurely', () => {
        cells = [{ id: '0' }, { id: '1' }];
        playBoard = ['X', 'X', null, 'O', null, null, null, null, null];
        const result = selectWinner(cells, winCombinations, 'X', playBoard);
        expect(result).toBe("No one wins, no one loses. It's a tie!");
    });
});
