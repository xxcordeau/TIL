// https://www.acmicpc.net/problem/11727
// 2×n 타일링 2
//
// 1×2, 2×1, 2×2 타일로 2×n을 채우는 경우의 수.
// dp[n] = dp[n-1] + 2*dp[n-2] 점화식이 성립한다.
// 10007로 나눈 나머지를 출력해야 한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  if (n === 1) return 1;
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1; dp[2] = 3;
  for (let i = 3; i <= n; i++) dp[i] = (dp[i-1] + 2 * dp[i-2]) % 10007;
  return dp[n];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}