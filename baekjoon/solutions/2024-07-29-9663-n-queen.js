// https://www.acmicpc.net/problem/9663
// N-Queen
//
// 행마다 퀸을 하나씩 놓는다고 생각하면, 이미 놓은 퀸들과 같은 열이거나
// 대각선 위에 있지만 않으면 된다. 열 사용 여부와 두 방향의 대각선
// 사용 여부를 배열로 체크하면서 백트래킹으로 놓을 수 있는 경우의
// 수를 센다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const col = new Array(n).fill(false);
  const diag1 = new Array(2 * n).fill(false); // row - col + n
  const diag2 = new Array(2 * n).fill(false); // row + col
  let count = 0;

  function backtrack(row) {
    if (row === n) {
      count++;
      return;
    }
    for (let c = 0; c < n; c++) {
      const d1 = row - c + n;
      const d2 = row + c;
      if (col[c] || diag1[d1] || diag2[d2]) continue;
      col[c] = diag1[d1] = diag2[d2] = true;
      backtrack(row + 1);
      col[c] = diag1[d1] = diag2[d2] = false;
    }
  }

  backtrack(0);
  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
