// https://www.acmicpc.net/problem/2609
// 최대공약수와 최소공배수
//
// 유클리드 호제법으로 최대공약수 먼저 구하고, 최소공배수는
// (두 수의 곱) / 최대공약수로 바로 계산.

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ').map(Number);
  const g = gcd(a, b);
  const l = (a * b) / g;
  return `${g}\n${l}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
