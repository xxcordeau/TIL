// https://www.acmicpc.net/problem/2193
// 이친수
//
// 이친수는 0으로 시작하지 않고, 1이 연속으로 두 번 나오지 않는 이진수.
// dp[i][0] = 길이가 i이고 마지막 자리가 0인 이친수 개수
// dp[i][1] = 길이가 i이고 마지막 자리가 1인 이친수 개수
// 마지막이 0이면 그 앞엔 0이든 1이든 아무거나 올 수 있고,
// 마지막이 1이면 그 앞은 반드시 0으로 끝나야 연속 1이 안 생긴다.

function solve(lines) {
  const n = Number(lines[0].trim());

  if (n === 1) return '1';

  const dp0 = [0, 0];
  const dp1 = [0, 1];
  for (let i = 2; i <= n; i++) {
    dp0[i] = dp0[i - 1] + dp1[i - 1];
    dp1[i] = dp0[i - 1];
  }

  return String(dp0[n] + dp1[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
