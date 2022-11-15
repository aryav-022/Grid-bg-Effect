const grid = document.querySelector('.grid');

const columns = Math.floor(document.body.clientWidth / 103);
const rows = Math.floor(document.body.clientHeight / 103);

for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
        const gridElement = document.createElement('div');
        grid.appendChild(gridElement);
    }
}

const tiles = grid.children;

for (let tile of tiles) {
    tile.addEventListener('click', () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                setTimeout(() => {
                    const tile = grid.querySelector(`:nth-child(${i*columns + j + 1})`);
                    tile.classList.add('hide');
                }, (i + j) * 100);
            }
        }
    })
}