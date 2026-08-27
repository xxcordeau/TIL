// https://www.acmicpc.net/problem/1012
// 유기농 배추
//
// 배추밭에서 배추가 연결된 구역이 몇 개인지 세는 BFS 문제.
// 상하좌우로 인접한 배추들이 하나의 덩어리를 이루고, 그 덩어리 수가 곧 지렁이 수다.
// 방문한 칸은 다시 방문하지 않도록 체크하면서 BFS 돌리면 된다.

function solve(lines) {
  let idx = 0;
  const T = parseInt(lines[idx++].trim(), 10);
  const results = [];

  for (let t = 0; t < T; t++) {
    const [M, N, K] = lines[idx++].trim().split(' ').map(Number);
    const field = Array.from({ length: N }, () => new Array(M).fill(0));

    for (let i = 0; i < K; i++) {
      const [x, y] = lines[idx++].trim().split(' ').map(Number);
      field[y][x] = 1;
    }

    const visited = Array.from({ length: N }, () => new Array(M).fill(false));
    const dx = [1, -1, 0, 0];
    const dy = [0, 0, 1, -1];
    let count = 0;

    for (let y = 0; y < N; y++) {
      for (let x = 0; x < M; x++) {
        if (field[y][x] === 1 && !visited[y][x]) {
          count++;
          const queue = [[y, x]];
          visited[y][x] = true;
          while (queue.length > 0) {
            const [cy, cx] = queue.shift();
            for (let d = 0; d < 4; d++) {
              const ny = cy + dy[d];
              const nx = cx + dx[d];
              if (ny >= 0 && ny < N && nx >= 0 && nx < M && field[ny][nx] === 1 && !visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.push([ny, nx]);
              }
            }
          }
        }
      }
    }

    results.push(count);
  }

  return results.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
