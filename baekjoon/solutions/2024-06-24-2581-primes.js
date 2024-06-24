// https://www.acmicpc.net/problem/2581
// 소수
//
// M 이상 N 이하 구간에서 소수를 모두 찾아 합과 그 중 최솟값을
// 출력. 소수가 하나도 없으면 -1만 출력. 구간이 최대 10000이라
// 그냥 각 수마다 소수판별해도 충분함.

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

function solve(lines) {
  const m = Number(lines[0].trim());
  const n = Number(lines[1].trim());

  const primes = [];
  for (let i = m; i <= n; i++) {
    if (isPrime(i)) primes.push(i);
  }

  if (primes.length === 0) return '-1';

  const sum = primes.reduce((a, b) => a + b, 0);
  return `${sum}\n${primes[0]}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
