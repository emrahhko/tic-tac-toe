export const selectWinner = (cells, winCombinations, playerTurn, playBoard) => {
    const turnsId = new Set(Array.from(cells).map((element) => element.id));

    for (const item of winCombinations) {
        let isWinner = true;
        for (const num of item) {
            if (!turnsId.has(`${num}`)) {
                isWinner = false;
                break;
            }
        }
        if (isWinner) {
            return `Congratulations! ${playerTurn} you win!`;
        }
    }

    const isDraw = playBoard.every((cell) => cell !== '');
    if (isDraw) {
        return "No one wins, no one loses. It's a tie!";
    }

    return null;
};
