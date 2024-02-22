// https://www.acmicpc.net/problem/2438
// 별 찍기 - 1
//
// i번째 줄에 별을 i개씩 늘려가면서 찍으면 되는 기본 반복문 문제.

function solve(lines) {
  const n = Number(lines[0].trim());
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push('*'.repeat(i));
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
