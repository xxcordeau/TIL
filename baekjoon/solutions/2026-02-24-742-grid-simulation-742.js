// https://www.acmicpc.net/problem/4335
// 숫자 맞추기
//
// 격자 위에서 상태가 한 단계씩 바뀌어 나가는 시뮬레이션 문제.
// 격자를 2차원 배열로 표현해두고, 규칙에 따라 다음 상태를
// 계산해서 갱신하는 과정을 정해진 횟수만큼 반복했다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(/\s+/).map(Number);
  const grid = [];
  for (let i = 1; i <= n; i++) {
    grid.push(lines[i].trim().split(/\s+/).map(Number));
  }

  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1) count++;
    }
  }
  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
