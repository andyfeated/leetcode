function isValidSudoku(board: string[][]) {
  const horizontalSet = new Set();
  const verticalSet = new Set();
  const boxSet = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];

      if (cell === ".") {
        continue;
      }

      const boxRow = Math.floor(i / 3);
      const boxCol = Math.floor(j / 3);
      const box = boxRow * 3 + boxCol;

      const boxKey = `${box}_${cell}`;
      const horizontalKey = `${i}_${cell}`;
      const verticalKey = `${j}_${cell}`;

      const isInhorizontalSet = horizontalSet.has(horizontalKey);
      const isInverticalSet = verticalSet.has(verticalKey);
      const isInBox = boxSet.has(boxKey);

      if (!isInhorizontalSet) {
        horizontalSet.add(horizontalKey);
      } else {
        return false;
      }

      if (!isInverticalSet) {
        verticalSet.add(verticalKey);
      } else {
        return false;
      }

      if (!isInBox) {
        boxSet.add(boxKey);
      } else {
        return false;
      }
    }
  }

  return true;
}

const board = [
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
];

const output = isValidSudoku(board);
console.log("output", output);

export {};
