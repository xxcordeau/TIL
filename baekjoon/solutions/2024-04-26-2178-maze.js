// https://www.acmicpc.net/problem/2178
// 미로 탐색
//
// (0,0)에서 BFS 돌리면서 각 칸까지의 거리를 누적. 도착 칸의 거리가
// 곧 지나야 하는 칸 수(시작 칸 포함)가 된다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const grid = lines.slice(1, 1 + n).map((line) => line.trim().split('').map(Number));
  const distance = Array.from({ length: n }, () => new Array(m).fill(0));

  const queue = [[0, 0]];
  distance[0][0] = 1;

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];

  while (queue.length > 0) {
    const [r, c] = queue.shift();

    for (const [dr, dc] of directions) {
      const nr = r + dr;
      const nc = c + dc;

      if (
        nr >= 0 && nr < n && nc >= 0 && nc < m &&
        grid[nr][nc] === 1 && distance[nr][nc] === 0
      ) {
        distance[nr][nc] = distance[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  return String(distance[n - 1][m - 1]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
