// https://www.acmicpc.net/problem/2225
// 합분해
//
// dp[i][j] = 정수 i개를 더해서(0 이상, 순서 구분) j를 만드는 방법의
// 수. dp[i][j] = dp[i][j-1](마지막 수를 1 늘리는 경우) + dp[i-1][j]
// (새로운 수 하나를 0부터 시작하는 경우)로 나눠서 채우는 DP.

function solve(lines) {
  const [n, k] = lines[0].trim().split(' ').map(Number);
  const MOD = 1000000000;

  const dp = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));
  dp[0][0] = 1;

  for (let i = 1; i <= k; i++) {
    for (let j = 0; j <= n; j++) {
      dp[i][j] = dp[i - 1][j];
      if (j > 0) {
        dp[i][j] = (dp[i][j] + dp[i][j - 1]) % MOD;
      }
    }
  }

  return String(dp[k][n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
