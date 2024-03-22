// https://www.acmicpc.net/problem/1978
// 소수 찾기
//
// N개 수 각각에 대해 소수인지 판별하는 함수를 만들어두고, 소수인
// 것만 필터해서 개수를 세면 됨. 수 범위가 작아서 그냥 나누기로
// 판별해도 충분히 빠르다.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const numbers = lines[1].trim().split(' ').map(Number).slice(0, n);
  const primeCount = numbers.filter(isPrime).length;
  return String(primeCount);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
