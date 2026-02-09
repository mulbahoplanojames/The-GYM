function luckySevens(arr) {
  const rows = arr.length;
  const cols = arr[0].length;
  let count = 0;

  function isPerfectCube(n) {
    if (n < 0) return false;
    const cubeRoot = Math.cbrt(n);
    return Number.isInteger(cubeRoot);
  }

  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (arr[r][c] === 7) {
        let sum = 0;

        for (const [dr, dc] of directions) {
          const nr = r + dr;
          const nc = c + dc;

          if (
            nr >= 0 &&
            nr < rows &&
            nc >= 0 &&
            nc < cols &&
            typeof arr[nr][nc] === "number"
          ) {
            sum += arr[nr][nc];
          }
        }

        if (isPerfectCube(sum)) {
          count++;
        }
      }
    }
  }

  return count;
}
