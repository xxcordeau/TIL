// https://www.acmicpc.net/problem/2133
// 타일 채우기
//
// 3×N 크기를 1×2, 2×1 타일로 채우는 경우의 수.
// N이 홀수면 0. dp[i] = 3*dp[i-2] + 2*(dp[i-4]+...+dp[0])

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  if (n % 2 !== 0) return 0;
  const dp = new Array(n + 1).fill(0);
  dp[0] = 1; dp[2] = 3;
  for (let i = 4; i <= n; i += 2) {
    dp[i] = 3 * dp[i-2];
    for (let j = i - 4; j >= 0; j -= 2) dp[i] += 2 * dp[j];
  }
  return dp[n];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}