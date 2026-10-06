// https://www.acmicpc.net/problem/11052
// 카드 구매하기
//
// N개의 카드를 사기 위해 지불할 수 있는 금액의 최댓값.
// dp[i]: i개를 살 때 최대 금액
// dp[i] = max(dp[i-j] + P[j]) for j = 1..i

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const P = [0, ...lines[1].trim().split(' ').map(Number)];
  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + P[j]);
    }
  }
  return String(dp[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
