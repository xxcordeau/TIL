// https://www.acmicpc.net/problem/2421
// 저금통
//
// n번째 상태가 바로 이전 몇 개의 상태로부터 결정되는 전형적인
// 1차원 DP 문제. dp 배열에 작은 경우부터 차례로 채워나가면
// 마지막 값이 곧 답이 된다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const dp = new Array(n + 1).fill(0);
  if (n >= 1) dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000;
  }
  return String(dp[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
