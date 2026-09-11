// https://www.acmicpc.net/problem/2609
// 최대공약수와 최소공배수
//
// 유클리드 호제법으로 GCD를 구하고, LCM은 a*b/GCD로 계산한다.
// 재귀로 간단하게 구현할 수 있다.

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ').map(Number);
  const gcd = (x, y) => y === 0 ? x : gcd(y, x % y);
  const g = gcd(a, b);
  return `${g}\n${a * b / g}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}