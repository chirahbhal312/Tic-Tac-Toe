const cells = document.querySelectorAll('[data-cell]');
const board = document.querySelector('.board');
const resetBtn = document.getElementById('resetBtn');
const message = document.getElementById('message');

let currentPlayer = 'X';

const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

function checkWin() {
    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return (
            cells[a].textContent &&
            cells[a].textContent === cells[b].textContent &&
            cells[a].textContent === cells[c].textContent
        );
    });
}

function checkDraw() {
    return [...cells].every(cell => cell.textContent);
}

function handleClick(e) {
    const cell = e.target;
    if (cell.textContent) return;

    cell.textContent = currentPlayer;

    if (checkWin()) {
        message.textContent = `${currentPlayer} wins!`;
        cells.forEach(cell => cell.removeEventListener('click', handleClick));
    } else if (checkDraw()) {
        message.textContent = `It's a draw!`;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function resetGame() {
    cells.forEach(cell => cell.textContent = '');
    message.textContent = '';
    currentPlayer = 'X';
    cells.forEach(cell => cell.addEventListener('click', handleClick));
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
resetBtn.addEventListener('click', resetGame);

resetGame();
