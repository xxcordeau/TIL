// https://www.acmicpc.net/problem/2742
// 기찍 N
//
// N 찍기랑 반대로 N부터 1까지 내림차순으로 출력하는 것만 다르다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
