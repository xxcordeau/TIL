// https://www.acmicpc.net/problem/2178
// 미로 탐색
//
// (1,1)에서 (N,M)까지의 최단 거리를 BFS로 구하는 문제.
// BFS는 가중치가 없는 그래프에서 최단 경로를 보장한다.
// 이동할 때마다 이전 거리 + 1을 저장하면서 목적지에 도달하면 바로 출력.

function solve(lines) {
  const [N, M] = lines[0].trim().split(' ').map(Number);
  const maze = [];
  for (let i = 1; i <= N; i++) {
    maze.push(lines[i].trim().split('').map(Number));
  }

  const dist = Array.from({ length: N }, () => new Array(M).fill(-1));
  dist[0][0] = 1;
  const queue = [[0, 0]];
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    for (let d = 0; d < 4; d++) {
      const nr = r + dr[d];
      const nc = c + dc[d];
      if (nr >= 0 && nr < N && nc >= 0 && nc < M && maze[nr][nc] === 1 && dist[nr][nc] === -1) {
        dist[nr][nc] = dist[r][c] + 1;
        queue.push([nr, nc]);
      }
    }
  }

  return dist[N - 1][M - 1];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
