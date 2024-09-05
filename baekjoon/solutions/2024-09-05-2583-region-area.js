// https://www.acmicpc.net/problem/2583
// 영역 구하기
//
// M x N 모눈종이를 1칸짜리 격자로 만들어서 직사각형이 덮는 칸은 1로
// 표시해두고, 나머지 0인 칸들을 DFS로 묶어서 각 영역의 넓이를 구하면
// 된다. 마지막에 넓이 순으로 정렬해서 출력하면 끝.

function solve(lines) {
  let idx = 0;
  const [m, n, k] = lines[idx++].trim().split(' ').map(Number);

  const grid = Array.from({ length: m }, () => new Array(n).fill(0));

  for (let i = 0; i < k; i++) {
    const [x1, y1, x2, y2] = lines[idx++].trim().split(' ').map(Number);
    for (let x = x1; x < x2; x++) {
      for (let y = y1; y < y2; y++) {
        grid[x][y] = 1;
      }
    }
  }

  const visited = Array.from({ length: m }, () => new Array(n).fill(false));
  const areas = [];
  const dirs = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];

  for (let x = 0; x < m; x++) {
    for (let y = 0; y < n; y++) {
      if (grid[x][y] !== 0 || visited[x][y]) continue;

      let area = 0;
      const stack = [[x, y]];
      visited[x][y] = true;

      while (stack.length > 0) {
        const [cx, cy] = stack.pop();
        area++;

        for (const [dx, dy] of dirs) {
          const nx = cx + dx;
          const ny = cy + dy;
          if (nx >= 0 && nx < m && ny >= 0 && ny < n && !visited[nx][ny] && grid[nx][ny] === 0) {
            visited[nx][ny] = true;
            stack.push([nx, ny]);
          }
        }
      }

      areas.push(area);
    }
  }

  areas.sort((a, b) => a - b);

  return `${areas.length}\n${areas.join(' ')}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
