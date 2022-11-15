const grid = document.querySelector('.grid');

const columns = Math.floor(document.body.clientWidth / 103);
const rows = Math.floor(document.body.clientHeight / 103);

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const gridElement = document.createElement('div');
        grid.appendChild(gridElement);
    }
}
