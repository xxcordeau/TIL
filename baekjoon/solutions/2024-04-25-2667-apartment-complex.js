// https://www.acmicpc.net/problem/2667
// 단지번호붙이기
//
// 지도를 훑다가 아직 안 가본 1인 칸을 만나면 그 칸에서 BFS로 상하좌우
// 연결된 1들을 전부 묶어서 단지 하나로 세고 크기를 기록. 마지막에
// 단지 크기들을 오름차순 정렬해서 출력.

function solve(lines) {
  const n = Number(lines[0].trim());
  const grid = lines.slice(1, 1 + n).map((line) => line.trim().split('').map(Number));
  const visited = Array.from({ length: n }, () => new Array(n).fill(false));

  const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
  const complexSizes = [];

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n; c++) {
      if (grid[r][c] === 1 && !visited[r][c]) {
        let size = 0;
        const queue = [[r, c]];
        visited[r][c] = true;

        while (queue.length > 0) {
          const [cr, cc] = queue.shift();
          size++;

          for (const [dr, dc] of directions) {
            const nr = cr + dr;
            const nc = cc + dc;
            if (
              nr >= 0 && nr < n && nc >= 0 && nc < n &&
              grid[nr][nc] === 1 && !visited[nr][nc]
            ) {
              visited[nr][nc] = true;
              queue.push([nr, nc]);
            }
          }
        }

        complexSizes.push(size);
      }
    }
  }

  complexSizes.sort((a, b) => a - b);

  return `${complexSizes.length}\n${complexSizes.join('\n')}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
