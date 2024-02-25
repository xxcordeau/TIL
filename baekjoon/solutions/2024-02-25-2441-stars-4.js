// https://www.acmicpc.net/problem/2441
// 별 찍기 - 4
//
// 별 찍기 - 3의 오른쪽 정렬 버전. 줄이 내려갈수록 왼쪽 공백이 늘어남.

function solve(lines) {
  const n = Number(lines[0].trim());
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(' '.repeat(n - i) + '*'.repeat(i));
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
