// https://www.acmicpc.net/problem/10844
// 쉬운 계단 수
//
// 인접한 자리 숫자의 차이가 1인 n자리 수의 개수.
// dp[자릿수][마지막 숫자] 로 정의하고,
// 이전 자리의 숫자 ±1에서 올 수 있다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const MOD = 1000000000n;
  let dp = new Array(10).fill(1n);
  dp[0] = 0n;

  for (let i = 2; i <= n; i++) {
    const next = new Array(10).fill(0n);
    for (let d = 0; d <= 9; d++) {
      if (d > 0) next[d] = (next[d] + dp[d - 1]) % MOD;
      if (d < 9) next[d] = (next[d] + dp[d + 1]) % MOD;
    }
    dp = next;
  }

  let ans = 0n;
  for (const v of dp) ans = (ans + v) % MOD;
  return String(ans);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
