// https://www.acmicpc.net/problem/2446
// 별 찍기 - 9
//
// 오른쪽 정렬을 유지하면서 별 개수만 1..N..1로 늘렸다 줄이는 버전.
// 왼쪽 공백은 (N-i)개, 별은 i개로 계산.

function row(n, i) {
  return ' '.repeat(n - i) + '*'.repeat(i);
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(row(n, i));
  }
  for (let i = n - 1; i >= 1; i--) {
    result.push(row(n, i));
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
