// https://www.acmicpc.net/problem/2225
// 합분해
//
// 0~N 사이 정수 K개를 더해 N을 만드는 경우의 수.
// dp[k][n] = 합이 n이 되도록 k개를 고르는 경우의 수.
// dp[k][n] = sum(dp[k-1][0..n])

function solve(lines) {
  const [N, K] = lines[0].trim().split(' ').map(Number);
  const MOD = 1000000000;
  const dp = Array.from({length: K+1}, () => new Array(N+1).fill(0));
  for (let n = 0; n <= N; n++) dp[1][n] = 1;
  for (let k = 2; k <= K; k++) {
    let cumul = 0;
    for (let n = 0; n <= N; n++) {
      cumul = (cumul + dp[k-1][n]) % MOD;
      dp[k][n] = cumul;
    }
  }
  return dp[K][N];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}