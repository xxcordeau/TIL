// https://www.acmicpc.net/problem/1012
// 유기농 배추
//
// 배추가 심어진 칸들을 상하좌우로 이어진 덩어리로 묶었을 때
// 덩어리의 개수가 필요한 배추흰지렁이 수. 그래프 탐색(BFS)으로
// 방문 안 한 배추 칸을 찾을 때마다 카운트를 늘리고 그 칸에서
// 이어진 칸들을 전부 방문 처리하면 됨.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];
  let cursor = 1;

  for (let tc = 0; tc < t; tc++) {
    const [m, n, k] = lines[cursor].trim().split(' ').map(Number);
    cursor++;

    const grid = Array.from({ length: n }, () => new Array(m).fill(false));
    for (let i = 0; i < k; i++) {
      const [x, y] = lines[cursor].trim().split(' ').map(Number);
      grid[y][x] = true;
      cursor++;
    }

    const visited = Array.from({ length: n }, () => new Array(m).fill(false));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let count = 0;

    for (let y = 0; y < n; y++) {
      for (let x = 0; x < m; x++) {
        if (grid[y][x] && !visited[y][x]) {
          count++;
          visited[y][x] = true;
          const queue = [[x, y]];

          while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            for (let d = 0; d < 4; d++) {
              const nx = cx + dx[d];
              const ny = cy + dy[d];
              if (
                nx >= 0 && nx < m && ny >= 0 && ny < n &&
                grid[ny][nx] && !visited[ny][nx]
              ) {
                visited[ny][nx] = true;
                queue.push([nx, ny]);
              }
            }
          }
        }
      }
    }

    result.push(count);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
