// https://www.acmicpc.net/problem/1699
// 제곱수의 합
//
// n을 제곱수들의 합으로 나타낼 때 항의 최솟값.
// dp[i] = min(dp[i - j*j] + 1) for j*j <= i
// 라그랑주 사원수 정리에 의해 답은 항상 4 이하다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const dp = new Array(n + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j * j <= i; j++) {
      dp[i] = Math.min(dp[i], dp[i - j * j] + 1);
    }
  }
  return String(dp[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
