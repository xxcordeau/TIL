// https://www.acmicpc.net/problem/10844
// 쉬운 계단 수
//
// 인접한 자리의 차가 1인 N자리 수의 개수.
// dp[i][j]: i자리이고 끝이 j인 계단 수의 개수.
// dp[i][j] = dp[i-1][j-1] + dp[i-1][j+1]

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const MOD = BigInt(1000000000);
  const dp = Array.from({length: n+1}, () => new Array(10).fill(BigInt(0)));
  for (let j = 1; j <= 9; j++) dp[1][j] = BigInt(1);
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j <= 9; j++) {
      if (j > 0) dp[i][j] = (dp[i][j] + dp[i-1][j-1]) % MOD;
      if (j < 9) dp[i][j] = (dp[i][j] + dp[i-1][j+1]) % MOD;
    }
  }
  let ans = BigInt(0);
  for (let j = 0; j <= 9; j++) ans = (ans + dp[n][j]) % MOD;
  return ans.toString();
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}