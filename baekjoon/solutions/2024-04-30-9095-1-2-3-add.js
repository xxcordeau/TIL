// https://www.acmicpc.net/problem/9095
// 1, 2, 3 더하기
//
// dp[n] = dp[n-1] + dp[n-2] + dp[n-3] (마지막에 1,2,3을 더하는 경우로
// 나눠서 세는 전형적인 DP). 초기값만 잘 잡아주면 됨.

function solve(lines) {
  const t = Number(lines[0].trim());
  const MAX = 11;
  const dp = new Array(MAX + 1).fill(0);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 4;

  for (let i = 4; i <= MAX; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }

  const result = [];
  for (let i = 1; i <= t; i++) {
    const n = Number(lines[i].trim());
    result.push(dp[n]);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
