// https://www.acmicpc.net/problem/9020
// 골드바흐의 추측
//
// n의 절반 근처에서부터 양쪽으로 벌려가면서 두 수 다 소수인 조합을
// 찾으면, 그게 자동으로 차이가 최소인 조합이 된다.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const n = Number(lines[i].trim());
    const half = Math.floor(n / 2);

    for (let diff = 0; diff <= half; diff++) {
      const a = half - diff;
      const b = n - a;
      if (isPrime(a) && isPrime(b)) {
        result.push(`${a} ${b}`);
        break;
      }
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
