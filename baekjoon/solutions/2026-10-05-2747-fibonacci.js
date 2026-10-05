// https://www.acmicpc.net/problem/2747
// 피보나치 수
//
// n번째 피보나치 수를 출력하는 문제.
// f(1)=1, f(2)=1, f(n)=f(n-1)+f(n-2)
// n이 최대 45라서 반복문으로 충분하다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  if (n <= 2) return '1';
  let a = 1, b = 1;
  for (let i = 3; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return String(b);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
