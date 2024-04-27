// https://www.acmicpc.net/problem/7576
// 토마토
//
// 익어있는 토마토가 여러 개일 수 있으니까 그 칸들을 전부 시작점으로
// 큐에 넣고 한꺼번에 BFS(멀티소스 BFS)를 돌린다. 그러면 각 칸에 도달한
// "날짜"가 자동으로 최단 시간이 되고, 마지막에 가장 큰 값이 답.
// 안 익은 토마토가 하나라도 남아있으면 -1.

function solve(lines) {
  const [m, n] = lines[0].trim().split(' ').map(Number);
  const grid = lines.slice(1, 1 + n).map((line) => line.trim().split(/\s+/).map(Number));

  const queue = [];
  for (let r = 0; r < n; r++) {
    for (let c = 0; c < m; c++) {
      if (grid[r][c] === 1) {
        queue.push([r, c]);
      }
    }
  }

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  let maxDay = 0;

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 && nr < n && nc >= 0 && nc < m &&
        grid[nr][nc] === 0
      ) {
        grid[nr][nc] = grid[r][c] + 1;
        maxDay = Math.max(maxDay, grid[nr][nc] - 1);
        queue.push([nr, nc]);
      }
    }
  }

  const hasUnripe = grid.some((row) => row.includes(0));
  return String(hasUnripe ? -1 : maxDay);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
