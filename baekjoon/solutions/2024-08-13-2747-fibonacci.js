// https://www.acmicpc.net/problem/2747
// 피보나치 수
//
// n이 45까지밖에 안 돼서 그냥 반복문으로 아래서부터 채워 올라가면 된다.
// 재귀로 짜면 같은 값을 계속 다시 계산해서 느려지니까 배열에 저장해가면서 푼다.

function solve(lines) {
  const n = Number(lines[0].trim());

  if (n === 0) return '0';
  if (n === 1) return '1';

  const fib = [0, 1];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }

  return String(fib[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
