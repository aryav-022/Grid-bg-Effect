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

const safeTiles = [
    [1,1], [2,1], [3,1], [4,1],
    [1,4], [1,6], [2,3], [2,4], [2,5], [2,6], [2,7], [3,3], [3,4], [3,5], [3,6], [3,7], [4,4], [4,5], [4,6], [5,5],
    [1,9], [2,9], [3,9], [4,9], [4,10], [4,11], [3,11], [2,11], [1,11]
]

for (let tile of tiles) {
    tile.addEventListener('click', () => {
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < columns; j++) {
                let safe = false;
                safeTiles.forEach(safeTile => {
                    if (safeTile[0] === i && safeTile[1] === j) safe = true;
                })
                if (safe) continue;
                setTimeout(() => {
                    const tile = grid.querySelector(`:nth-child(${i*columns + j + 1})`);
                    tile.classList.toggle('hide');
                }, (i + j) * 100);
            }
        }
        // tile.classList.add('hide');
    })
}