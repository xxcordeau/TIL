// https://www.acmicpc.net/problem/2156
// 포도주 시식
//
// 연속 3잔을 마실 수 없다는 조건이 있는 DP 문제.
// dp[i] = i번째 잔까지 마실 수 있는 최대량.
// dp[i] = max(dp[i-1], dp[i-2]+wine[i], dp[i-3]+wine[i-1]+wine[i])

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const wine = [0];
  for (let i = 1; i <= n; i++) wine.push(parseInt(lines[i].trim(), 10));

  if (n === 1) return wine[1];
  if (n === 2) return wine[1] + wine[2];

  const dp = new Array(n + 1).fill(0);
  dp[1] = wine[1];
  dp[2] = wine[1] + wine[2];
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(dp[i-1], dp[i-2] + wine[i], dp[i-3] + wine[i-1] + wine[i]);
  }
  return dp[n];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}