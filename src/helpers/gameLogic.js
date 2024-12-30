
export function moveLeft(grid) {
    let newGrid = [...grid];
    debugger;
    for (let i = 0; i < newGrid.length; i++) {
        let a = 0;
        for (let j = 1; j < newGrid[i].length; j++) {
            if (newGrid[i][j] != 0) {
                if (newGrid[i][a] == newGrid[i][j]) {
                    newGrid[i][a] *= 2;
                    if (a != j) newGrid[i][j] = 0;
                    a++;
                } else if (newGrid[i][a] == 0) {
                    newGrid[i][a] = newGrid[i][j];
                    if (a != j) newGrid[i][j] = 0;
                } else {
                    newGrid[i][a + 1] = newGrid[i][j];
                    if (a + 1 != j) newGrid[i][j] = 0;
                    a++;
                }
            }
        }
    }
    return newGrid;
}

export function moveRight(grid) {
    let newGrid = [...grid];
    debugger;
    for (let i = 0; i < newGrid.length; i++) {
        let a = newGrid[i].length - 1;
        for (let j = newGrid[i].length - 2; j >= 0; j--) {
            if (newGrid[i][j] != 0) {
                if (newGrid[i][a] == newGrid[i][j]) {
                    newGrid[i][a] *= 2;
                    if (a != j) newGrid[i][j] = 0;
                    a--;
                } else if (newGrid[i][a] == 0) {
                    newGrid[i][a] = newGrid[i][j];
                    if (a != j) newGrid[i][j] = 0;
                } else {
                    newGrid[i][a - 1] = newGrid[i][j];
                    if (a - 1 != j) newGrid[i][j] = 0;
                    a--;
                }
            }
        }
    }
    return newGrid;
}

export function moveDown(grid) {
    let newGrid = [...grid];
    debugger;
    for (let i = 0; i < newGrid[0].length; i++) {
        let a = newGrid.length - 1;
        for (let j = newGrid.length - 2; j >= 0; j--) {
            if (newGrid[j][i] != 0) {
                if (newGrid[a][i] == newGrid[j][i]) {
                    newGrid[a][i] *= 2;
                    if (a != j) newGrid[j][i] = 0;
                    a--;
                } else if (newGrid[a][i] == 0) {
                    newGrid[a][i] = newGrid[j][i];
                    if (a != j) newGrid[j][i] = 0;
                } else {
                    newGrid[a - 1][i] = newGrid[j][i];
                    if (a - 1 != j) newGrid[j][i] = 0;
                    a--;
                }
            }
        }
    }
    return newGrid;
}

export function moveUp(grid) {
    let newGrid = [...grid];
    debugger;
    for (let i = 0; i < newGrid[0].length; i++) {
        let a = 0;
        for (let j = 1; j < newGrid.length; j++) {
            if (newGrid[j][i] != 0) {
                if (newGrid[a][i] == newGrid[j][i]) {
                    newGrid[a][i] *= 2;
                    if (a != j) newGrid[j][i] = 0;
                    a++;
                } else if (newGrid[a][i] == 0) {
                    newGrid[a][i] = newGrid[j][i];
                    if (a != j) newGrid[j][i] = 0;
                } else {
                    newGrid[a + 1][i] = newGrid[j][i];
                    if (a + 1 != j) newGrid[j][i] = 0;
                    a++;
                }
            }
        }
    }
    return newGrid;
}