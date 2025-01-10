// https://www.acmicpc.net/problem/1694
// Chessboard in FEN
//
// 약수, 배수, 최대공약수 같은 수론적 성질을 이용하는 문제.
// 유클리드 호제법으로 GCD를 구하고 이를 이용해 나머지 값을
// 유도하는 방식으로 풀었다.

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solve(lines) {
  const [a, b] = lines[0].trim().split(/\s+/).map(Number);
  const g = gcd(a, b);
  const l = (a / g) * b;
  return `${g}\n${l}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
