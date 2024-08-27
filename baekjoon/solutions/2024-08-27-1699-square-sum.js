// https://www.acmicpc.net/problem/1699
// 제곱수의 합
//
// dp[i] = i를 제곱수들의 합으로 표현할 때 필요한 최소 개수.
// dp[0] = 0에서 시작해서, i까지 뺄 수 있는 제곱수 j*j를 하나씩 시도하며
// dp[i] = min(dp[i], dp[i - j*j] + 1) 로 갱신해나간다.

function solve(lines) {
  const n = Number(lines[0].trim());
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
