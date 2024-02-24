// https://www.acmicpc.net/problem/2440
// 별 찍기 - 3
//
// 이번엔 반대로 줄이 내려갈수록 별 개수가 줄어드는 역삼각형.

function solve(lines) {
  const n = Number(lines[0].trim());
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push('*'.repeat(i));
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
