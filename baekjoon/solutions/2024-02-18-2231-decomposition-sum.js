// https://www.acmicpc.net/problem/2231
// 분해합
//
// N이 백만까지라 1부터 N까지 전부 돌면서 "M + M의 각 자리수 합"이
// N이 되는 가장 작은 M을 찾으면 됨. 생성자는 N보다 항상 작으니까
// N까지만 돌아도 충분하고, 못 찾으면 0을 리턴.

function digitSum(num) {
  return String(num)
    .split('')
    .reduce((sum, d) => sum + Number(d), 0);
}

function solve(lines) {
  const n = Number(lines[0].trim());

  for (let m = 1; m < n; m++) {
    if (m + digitSum(m) === n) {
      return String(m);
    }
  }

  return '0';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
