// https://www.acmicpc.net/problem/9461
// 파도반 수열
//
// 초항 세 개(P(1)=P(2)=P(3)=1)를 채워두고 P(n)=P(n-2)+P(n-3) 점화식대로
// 쭉 채워나가면 된다. n이 100까지 가서 값이 커질 수 있어 BigInt 사용.

function solve(lines) {
  const t = Number(lines[0].trim());
  const MAX = 100;
  const dp = new Array(MAX + 1).fill(0n);
  dp[1] = 1n;
  dp[2] = 1n;
  dp[3] = 1n;

  for (let i = 4; i <= MAX; i++) {
    dp[i] = dp[i - 2] + dp[i - 3];
  }

  const result = [];
  for (let i = 1; i <= t; i++) {
    const n = Number(lines[i].trim());
    result.push(dp[n].toString());
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
