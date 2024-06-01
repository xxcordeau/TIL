// https://www.acmicpc.net/problem/11660
// 구간 합 구하기 4
//
// (1,1)부터 (r,c)까지의 합을 미리 다 구해두는 2차원 누적합 테이블을
// 만들어두면, 임의의 사각형 구간 합은 포함-배제 원리로 누적합 네 개를
// 더하고 빼서 바로 계산할 수 있다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const grid = lines.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));

  const prefix = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  for (let r = 1; r <= n; r++) {
    for (let c = 1; c <= n; c++) {
      prefix[r][c] =
        grid[r - 1][c - 1] + prefix[r - 1][c] + prefix[r][c - 1] - prefix[r - 1][c - 1];
    }
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    const [x1, y1, x2, y2] = lines[1 + n + i].trim().split(' ').map(Number);
    const sum =
      prefix[x2][y2] - prefix[x1 - 1][y2] - prefix[x2][y1 - 1] + prefix[x1 - 1][y1 - 1];
    result.push(sum);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
