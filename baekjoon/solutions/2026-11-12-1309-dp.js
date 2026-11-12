// https://www.acmicpc.net/problem/1309
// 동물원
//
// 2×N 우리에서 같은 행 또는 열에 인접하지 않게 사자를 배치하는 경우의 수.
// dp[i][0]: i행에 사자 없음, dp[i][1]: 왼쪽에 사자, dp[i][2]: 오른쪽에 사자

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const MOD = 9901;
  const dp = [[1,1,1]];
  for (let i = 1; i < n; i++) {
    const prev = dp[i-1];
    dp.push([
      (prev[0] + prev[1] + prev[2]) % MOD,
      (prev[0] + prev[2]) % MOD,
      (prev[0] + prev[1]) % MOD,
    ]);
  }
  return (dp[n-1][0] + dp[n-1][1] + dp[n-1][2]) % MOD;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}