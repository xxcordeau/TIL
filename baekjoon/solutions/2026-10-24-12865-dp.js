// https://www.acmicpc.net/problem/12865
// 평범한 배낭
//
// 0-1 냅색 DP 문제. dp[j]를 무게 j 이하로 담을 수 있는 최대 가치로 정의한다.
// 아이템을 하나씩 보면서 역순으로 갱신하면 같은 아이템을 두 번 쓰는 걸 방지할 수 있다.

function solve(lines) {
  const [N, K] = lines[0].trim().split(' ').map(Number);
  const items = [];
  for (let i = 1; i <= N; i++) {
    const [w, v] = lines[i].trim().split(' ').map(Number);
    items.push([w, v]);
  }

  const dp = new Array(K + 1).fill(0);
  for (const [w, v] of items) {
    for (let j = K; j >= w; j--) {
      dp[j] = Math.max(dp[j], dp[j - w] + v);
    }
  }

  return dp[K];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}