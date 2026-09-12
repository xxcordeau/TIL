// https://www.acmicpc.net/problem/1978
// 소수 찾기
//
// 주어진 수들 중 소수의 개수를 세는 문제.
// 각 수에 대해 2부터 sqrt(n)까지 나눠보면서 소수 판별한다.
// N이 최대 100이라 단순 판별로도 충분히 빠르다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const nums = lines[1].trim().split(' ').map(Number);

  const isPrime = (x) => {
    if (x < 2) return false;
    for (let i = 2; i * i <= x; i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  return nums.filter(isPrime).length;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}