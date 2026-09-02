// https://www.acmicpc.net/problem/2579
// 계단 오르기
//
// DP 문제. 세 계단 연속으로 밟으면 안 되고, 마지막 계단은 반드시 밟아야 한다.
// dp[i]를 i번째 계단까지 왔을 때 최댓값으로 정의하면:
//   - dp[i] = max(dp[i-2] + stairs[i], dp[i-3] + stairs[i-1] + stairs[i])
// i-1과 i를 연속으로 밟을 수 있지만, 그 전 i-2는 건너뛰어야 한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const stairs = [0];
  for (let i = 1; i <= n; i++) {
    stairs.push(parseInt(lines[i].trim(), 10));
  }

  if (n === 1) return stairs[1];
  if (n === 2) return stairs[1] + stairs[2];

  const dp = new Array(n + 1).fill(0);
  dp[1] = stairs[1];
  dp[2] = stairs[1] + stairs[2];
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i - 2] + stairs[i], dp[i - 3] + stairs[i - 1] + stairs[i]);
  }

  return dp[n];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
