// https://www.acmicpc.net/problem/2747
// 피보나치 수
//
// n번째 피보나치 수를 구하는 기본 DP 문제.
// 반복문으로 아래서부터 채워올라가면 된다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  if (n <= 1) return n;
  let a = 0, b = 1;
  for (let i = 2; i <= n; i++) [a, b] = [b, a + b];
  return b;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}