// https://www.acmicpc.net/problem/1747
// 소수 & 팰린드롬
//
// N부터 하나씩 올려가면서 소수이면서 동시에 앞뒤로 뒤집어도 같은
// 수(팰린드롬)인 첫 번째 수를 찾으면 된다. N이 최대 백만 정도라
// 그냥 순차 탐색 + 시도 나눗셈 소수판별로도 충분히 빠르게 끝난다.

function isPrime(x) {
  if (x < 2) return false;
  if (x < 4) return true;
  if (x % 2 === 0) return false;
  for (let i = 3; i * i <= x; i += 2) {
    if (x % i === 0) return false;
  }
  return true;
}

function isPalindrome(x) {
  const s = String(x);
  return s === s.split('').reverse().join('');
}

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  let x = n;
  while (!(isPrime(x) && isPalindrome(x))) x++;
  return String(x);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
