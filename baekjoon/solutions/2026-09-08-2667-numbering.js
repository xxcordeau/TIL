// https://www.acmicpc.net/problem/2667
// 단지번호붙이기
//
// BFS/DFS로 연결된 집들을 한 단지로 묶는 문제.
// 방문 안 한 집에서 BFS를 시작하면서 연결된 집 수를 세고, 단지별로 저장한다.
// 마지막에 단지 수와 각 단지 크기를 오름차순으로 출력.

function solve(lines) {
  const N = parseInt(lines[0].trim(), 10);
  const grid = [];
  for (let i = 1; i <= N; i++) {
    grid.push(lines[i].trim().split('').map(Number));
  }

  const visited = Array.from({ length: N }, () => new Array(N).fill(false));
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  const complexes = [];

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (grid[r][c] === 1 && !visited[r][c]) {
        let cnt = 0;
        const queue = [[r, c]];
        visited[r][c] = true;
        while (queue.length > 0) {
          const [cr, cc] = queue.shift();
          cnt++;
          for (let d = 0; d < 4; d++) {
            const nr = cr + dr[d];
            const nc = cc + dc[d];
            if (nr >= 0 && nr < N && nc >= 0 && nc < N && grid[nr][nc] === 1 && !visited[nr][nc]) {
              visited[nr][nc] = true;
              queue.push([nr, nc]);
            }
          }
        }
        complexes.push(cnt);
      }
    }
  }

  complexes.sort((a, b) => a - b);
  return `${complexes.length}\n${complexes.join('\n')}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
