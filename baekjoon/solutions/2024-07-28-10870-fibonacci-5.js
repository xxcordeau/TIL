// https://www.acmicpc.net/problem/10870
// 피보나치 수 5
//
// N이 최대 20이라 재귀로 그냥 풀어도 되지만, 메모이제이션 없이 순수
// 재귀만 써도 충분히 빠르다. fib(0)=0, fib(1)=1 기준으로 fib(n) =
// fib(n-1) + fib(n-2).

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function solve(lines) {
  const n = Number(lines[0].trim());
  return String(fib(n));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
