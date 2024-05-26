// https://www.acmicpc.net/problem/11060
// 점프 점프
//
// dp[i] = 1번 칸에서 i번 칸까지 오는 최소 점프 횟수. 앞쪽 칸들 중
// 자신에게 도달 가능한(즉 그 칸에서 점프거리가 충분한) 칸들의
// dp값 + 1 중 최솟값을 취하는 O(N^2) DP.

function solve(lines) {
  const n = Number(lines[0].trim());
  const jump = lines[1].trim().split(' ').map(Number);

  const dp = new Array(n).fill(Infinity);
  dp[0] = 0;

  for (let i = 0; i < n; i++) {
    if (dp[i] === Infinity) continue;
    for (let step = 1; step <= jump[i] && i + step < n; step++) {
      dp[i + step] = Math.min(dp[i + step], dp[i] + 1);
    }
  }

  return String(dp[n - 1] === Infinity ? -1 : dp[n - 1]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
