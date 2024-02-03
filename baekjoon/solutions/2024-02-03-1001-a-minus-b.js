// https://www.acmicpc.net/problem/1001
// A-B
//
// A+B랑 똑같은 구조인데 빼기만 하면 됨.

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ').map(Number);
  return String(a - b);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
