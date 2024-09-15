// https://www.acmicpc.net/problem/11052
// 카드 구매하기
//
// dp[i]를 "카드 i장을 살 때 최대 금액"이라 하면, 마지막에 j장짜리
// 카드팩을 하나 사는 경우를 다 시도해서 dp[i-j] + P[j] 중 최댓값을
// 고르면 된다. 카드팩은 몇 번이든 살 수 있으니 배낭 문제와 비슷한
// 방식으로 아래에서부터 채워나간다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const price = [0, ...lines[1].trim().split(' ').map(Number)]; // price[1..n]

  const dp = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      dp[i] = Math.max(dp[i], dp[i - j] + price[j]);
    }
  }

  return String(dp[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
