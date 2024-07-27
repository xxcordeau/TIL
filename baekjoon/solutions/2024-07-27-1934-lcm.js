// https://www.acmicpc.net/problem/1934
// 최소공배수
//
// 유클리드 호제법으로 최대공약수를 먼저 구하고, 두 수를 곱한 뒤
// 최대공약수로 나누면 최소공배수가 나온다.

function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function solve(lines) {
  const t = Number(lines[0].trim());
  const results = [];

  for (let i = 1; i <= t; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number);
    const g = gcd(a, b);
    results.push((a / g) * b);
  }

  return results.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
