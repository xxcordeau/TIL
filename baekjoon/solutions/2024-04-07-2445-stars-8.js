// https://www.acmicpc.net/problem/2445
// 별 찍기 - 8
//
// 왼쪽 별 i개 + 가운데 공백 2*(N-i)개 + 오른쪽 별 i개로 한 줄을
// 만들고, 1부터 N까지 늘렸다가 다시 N-1부터 1까지 줄이면 모래시계
// 모양이 완성된다.

function row(n, i) {
  return '*'.repeat(i) + ' '.repeat(2 * (n - i)) + '*'.repeat(i);
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
