// https://www.acmicpc.net/problem/1463
// 1로 만들기
//
// BFS 또는 DP로 풀 수 있는 문제. DP로 접근했다.
// dp[i] = i를 1로 만드는 최소 연산 횟수.
// 세 연산(3으로 나누기, 2로 나누기, 1 빼기)에 대해 역방향으로 점화식을 세우면 된다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const dp = new Array(n + 1).fill(Infinity);
  dp[1] = 0;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + 1;
    if (i % 2 === 0) dp[i] = Math.min(dp[i], dp[i / 2] + 1);
    if (i % 3 === 0) dp[i] = Math.min(dp[i], dp[i / 3] + 1);
  }

  return dp[n];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
