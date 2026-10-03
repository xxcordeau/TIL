// https://www.acmicpc.net/problem/2193
// 이친수
//
// 0으로 시작하지 않고, 1이 연속으로 나타나지 않는 n자리 수의 개수.
// dp[i][j]: i번째 자리가 j일 때의 경우의 수
// dp[i][0] = dp[i-1][0] + dp[i-1][1], dp[i][1] = dp[i-1][0]

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  if (n === 1) return '1';
  const dp = Array.from({ length: n + 1 }, () => [0n, 0n]);
  dp[1][1] = 1n;
  for (let i = 2; i <= n; i++) {
    dp[i][0] = dp[i - 1][0] + dp[i - 1][1];
    dp[i][1] = dp[i - 1][0];
  }
  return String(dp[n][0] + dp[n][1]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
