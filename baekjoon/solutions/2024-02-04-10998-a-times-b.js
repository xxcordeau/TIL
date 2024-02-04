// https://www.acmicpc.net/problem/10998
// A×B
//
// 마찬가지로 곱셈 버전.

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ').map(Number);
  return String(a * b);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
