// https://www.acmicpc.net/problem/1904
// 01타일
//
// 마지막 자리가 1이면 앞의 N-1자리는 자유(dp[n-1]), 마지막 두 자리가
// 01이면 앞의 N-2자리가 자유(dp[n-2])인 식으로 나누면 결국 피보나치와
// 같은 점화식이 나온다. 문제에서 요구하는 나머지 15746으로 매번
// 나눠준다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const MOD = 15746;
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  if (n >= 2) dp[2] = 2;

  for (let i = 3; i <= n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % MOD;
  }

  return String(dp[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
