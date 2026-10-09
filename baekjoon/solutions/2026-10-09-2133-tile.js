// https://www.acmicpc.net/problem/2133
// 타일 채우기
//
// 3×n 직사각형을 1×2, 2×1 타일로 채우는 경우의 수.
// n이 홀수면 0, 짝수면 점화식 dp[n] = 4*dp[n-2] - dp[n-4] 가 성립한다.
// dp[0]=1, dp[2]=3 을 기저 조건으로 사용한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const MOD = 1000000007;
  if (n % 2 !== 0) return '0';
  if (n === 0) return '1';
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  dp[2] = 3;
  for (let i = 4; i <= n; i += 2) {
    dp[i] = (4 * dp[i - 2] - dp[i - 4] + MOD) % MOD;
  }
  return String(dp[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
