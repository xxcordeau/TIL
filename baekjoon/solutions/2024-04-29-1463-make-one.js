// https://www.acmicpc.net/problem/1463
// 1로 만들기
//
// dp[i] = i를 1로 만드는 최소 연산 횟수. 1씩 줄이는 건 항상 가능하고,
// 2나 3으로 나누어떨어지면 그 경우도 후보에 넣어서 최솟값을 취하는
// 전형적인 상향식 DP.

function solve(lines) {
  const n = Number(lines[0].trim());
  const dp = new Array(n + 1).fill(0);

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return String(dp[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
