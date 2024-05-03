// https://www.acmicpc.net/problem/11726
// 2×n 타일링
//
// n번째 칸을 세로 타일 하나로 채우거나(dp[n-1] 상태에서), 가로 타일
// 두 개로 채우는(dp[n-2] 상태에서) 경우로 나누면 dp[n]=dp[n-1]+dp[n-2],
// 사실상 피보나치랑 같은 점화식. 매 단계 나머지 연산으로 나눠서
// 오버플로우 방지.

function solve(lines) {
  const n = Number(lines[0].trim());
  const MOD = 10007;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;
  if (n >= 1) dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }

  return String(dp[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
