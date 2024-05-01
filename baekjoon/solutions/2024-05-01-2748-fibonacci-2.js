// https://www.acmicpc.net/problem/2748
// 피보나치 수 2
//
// n이 90까지 갈 수 있어서 일반 Number로는 오차가 날 수 있으니까
// BigInt로 DP 배열을 채워서 정확하게 계산했다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const dp = [0n, 1n];

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n].toString();
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
