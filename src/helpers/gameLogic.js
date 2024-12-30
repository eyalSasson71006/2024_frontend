
export function moveLeft(grid) {
    let newGrid = JSON.parse(JSON.stringify(grid));
    let isChanged = false;
    for (let i = 0; i < newGrid.length; i++) {
        let a = 0;
        for (let j = 1; j < newGrid[i].length; j++) {
            if (newGrid[i][j] != 0) {
                if (newGrid[i][a] == newGrid[i][j]) {
                    newGrid[i][a] *= 2;
                    if (a != j) newGrid[i][j] = 0;
                    a++;
                    isChanged = true;
                } else if (newGrid[i][a] == 0) {
                    newGrid[i][a] = newGrid[i][j];
                    if (a != j) newGrid[i][j] = 0;
                    isChanged = true;
                } else {
                    newGrid[i][a + 1] = newGrid[i][j];
                    if (a + 1 != j) newGrid[i][j] = 0;
                    a++;
                }
            }
        }
    }
    return isChanged ? addRandomTile(newGrid) : newGrid;
}

export function moveRight(grid) {
    let newGrid = JSON.parse(JSON.stringify(grid));
    let isChanged = false;
    for (let i = 0; i < newGrid.length; i++) {
        let a = newGrid[i].length - 1;
        for (let j = newGrid[i].length - 2; j >= 0; j--) {
            if (newGrid[i][j] != 0) {
                if (newGrid[i][a] == newGrid[i][j]) {
                    newGrid[i][a] *= 2;
                    if (a != j) newGrid[i][j] = 0;
                    a--;
                    isChanged = true;
                } else if (newGrid[i][a] == 0) {
                    newGrid[i][a] = newGrid[i][j];
                    if (a != j) newGrid[i][j] = 0;
                    isChanged = true;
                } else {
                    newGrid[i][a - 1] = newGrid[i][j];
                    if (a - 1 != j) newGrid[i][j] = 0;
                    a--;
                }
            }
        }
    }
    return isChanged ? addRandomTile(newGrid) : newGrid;
}

export function moveDown(grid) {
    let newGrid = JSON.parse(JSON.stringify(grid));
    let isChanged = false;
    for (let i = 0; i < newGrid[0].length; i++) {
        let a = newGrid.length - 1;
        for (let j = newGrid.length - 2; j >= 0; j--) {
            if (newGrid[j][i] != 0) {
                if (newGrid[a][i] == newGrid[j][i]) {
                    newGrid[a][i] *= 2;
                    if (a != j) newGrid[j][i] = 0;
                    a--;
                    isChanged = true;
                } else if (newGrid[a][i] == 0) {
                    newGrid[a][i] = newGrid[j][i];
                    if (a != j) newGrid[j][i] = 0;
                    isChanged = true;
                } else {
                    newGrid[a - 1][i] = newGrid[j][i];
                    if (a - 1 != j) newGrid[j][i] = 0;
                    a--;
                }
            }
        }
    }
    return isChanged ? addRandomTile(newGrid) : newGrid;
}

export function moveUp(grid) {
    let newGrid = JSON.parse(JSON.stringify(grid));
    let isChanged = false;
    for (let i = 0; i < newGrid[0].length; i++) {
        let a = 0;
        for (let j = 1; j < newGrid.length; j++) {
            if (newGrid[j][i] != 0) {
                if (newGrid[a][i] == newGrid[j][i]) {
                    newGrid[a][i] *= 2;
                    if (a != j) newGrid[j][i] = 0;
                    a++;
                    isChanged = true;
                } else if (newGrid[a][i] == 0) {
                    newGrid[a][i] = newGrid[j][i];
                    if (a != j) newGrid[j][i] = 0;
                    isChanged = true;
                } else {
                    newGrid[a + 1][i] = newGrid[j][i];
                    if (a + 1 != j) newGrid[j][i] = 0;
                    a++;
                }
            }
        }
    }
    return isChanged ? addRandomTile(newGrid) : newGrid;
}

export function addRandomTile(grid) {
    const emptyTiles = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 0) emptyTiles.push({ row: i, col: j });
        }
    }
    if (emptyTiles.length === 0) return grid;

    const { row, col } = emptyTiles[Math.floor(Math.random() * emptyTiles.length)];
    const newGrid = JSON.parse(JSON.stringify(grid));
    newGrid[row][col] = Math.random() > 0.5 ? 2 : 4;
    return newGrid;
}


export function checkWin(grid) {
    for (let i = 0; i < grid.length; i++) {
        if (grid[i].includes(2048)) {
            return true;
        }
    }
    return false;
}

export function checkLose(grid) {
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (
                grid[i][j] == 0 ||
                (grid[i][j + 1] && grid[i][j] == grid[i][j + 1]) ||
                (grid[i + 1] && grid[i][j] == grid[i + 1][j])
            ) return false;
        }
    }
    return true;
}
