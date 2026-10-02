// https://www.acmicpc.net/problem/11727
// 2×n 타일링 2
//
// 2×1, 1×2, 2×2 타일로 2×n 직사각형을 채우는 경우의 수.
// dp[i] = dp[i-1] + 2*dp[i-2] 점화식을 사용한다.
// 1×2 타일 하나, 또는 2×1 두 개 or 2×2 하나를 붙이는 방식이다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const MOD = 10007;
  if (n === 1) return '1';
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 3;
  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + 2 * dp[i - 2]) % MOD;
  }
  return String(dp[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
