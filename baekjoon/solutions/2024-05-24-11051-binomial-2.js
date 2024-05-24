// https://www.acmicpc.net/problem/11051
// 이항 계수 2
//
// N이 커져서 팩토리얼을 그대로 쓰면 안 되고, 파스칼의 삼각형
// 점화식 C(n,k) = C(n-1,k-1) + C(n-1,k)을 DP로 채우면서 매번
// mod 10007을 적용해 값이 커지는 걸 막았다.

function solve(lines) {
  const [n, k] = lines[0].trim().split(' ').map(Number);
  const MOD = 10007;

  const dp = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 0; i <= n; i++) {
    dp[i][0] = 1;
    for (let j = 1; j <= i; j++) {
      dp[i][j] = (dp[i - 1][j - 1] + (dp[i - 1][j] || 0)) % MOD;
    }
  }

  return String(dp[n][k]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
