// https://www.acmicpc.net/problem/9095
// 1, 2, 3 더하기
//
// n을 1, 2, 3의 합으로 나타내는 경우의 수를 구하는 DP 문제.
// dp[n] = dp[n-1] + dp[n-2] + dp[n-3] 점화식이 성립한다.
// 초기값: dp[1]=1, dp[2]=2, dp[3]=4

function solve(lines) {
  const T = parseInt(lines[0].trim(), 10);
  const dp = [0, 1, 2, 4];
  for (let i = 4; i <= 10; i++) dp[i] = dp[i-1] + dp[i-2] + dp[i-3];

  const result = [];
  for (let t = 1; t <= T; t++) {
    result.push(dp[parseInt(lines[t].trim(), 10)]);
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}