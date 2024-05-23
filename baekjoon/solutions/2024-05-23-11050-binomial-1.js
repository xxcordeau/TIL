// https://www.acmicpc.net/problem/11050
// 이항 계수 1
//
// N이 작아서 팩토리얼을 그대로 구해도 오버플로우 걱정이 없다.
// N!/(K!*(N-K)!) 공식대로 계산.

function factorial(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

function solve(lines) {
  const [n, k] = lines[0].trim().split(' ').map(Number);
  const result = factorial(n) / (factorial(k) * factorial(n - k));
  return String(result);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
