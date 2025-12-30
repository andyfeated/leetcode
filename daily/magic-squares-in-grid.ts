function numMagicSquaresInside(grid: number[][]) {
  let magicSubGrid = 0;

  for (let i = 1; i < grid.length - 1; i++) {
    gridCenter: for (let j = 1; j < grid[i].length - 1; j++) {
      const gridSet = new Set();

      if (grid[i][j] !== 5) {
        continue;
      }

      // Check for duplicate AND 1-9
      for (let k = -1; k < 2; k++) {
        for (let l = -1; l < 2; l++) {
          const cell = grid[i + k][j + l];

          if (cell < 1 || cell > 9) {
            continue gridCenter;
          }

          const existingCell = gridSet.has(cell);

          if (existingCell) {
            continue gridCenter;
          }

          gridSet.add(cell);
        }
      }

      // horizontal sum
      for (let k = -1; k < 2; k++) {
        const a = grid[i + k][j - 1];
        const b = grid[i + k][j];
        const c = grid[i + k][j + 1];

        const sum = a + b + c;

        if (sum !== 15) {
          continue gridCenter;
        }
      }

      // vertical sum
      for (let k = -1; k < 2; k++) {
        const a = grid[i - 1][j + k];
        const b = grid[i][j + k];
        const c = grid[i + 1][j + k];

        const sum = a + b + c;

        if (sum !== 15) {
          continue gridCenter;
        }
      }

      // diagonal sum
      if (grid[i - 1][j - 1] + grid[i][j] + grid[i + 1][j + 1] !== 15) {
        continue gridCenter;
      }
      if (grid[i - 1][j + 1] + grid[i][j] + grid[i + 1][j - 1] !== 15) {
        continue gridCenter;
      }

      magicSubGrid++;
    }
  }

  return magicSubGrid;
}

const grid = [
  [4, 3, 8, 4],
  [9, 5, 1, 9],
  [2, 7, 6, 2],
];

const output = numMagicSquaresInside(grid);
console.log(output);

export {};
