// https://www.acmicpc.net/problem/12865
// 평범한 배낭
//
// 0/1 냅색 DP. dp[w] = 무게 w를 넘지 않게 담을 수 있는 최대 가치.
// 물건을 하나씩 보면서 무게를 큰 값부터 줄여가며 갱신해야
// 같은 물건을 두 번 담는 걸 막을 수 있다(1차원 배열로 최적화).

function solve(lines) {
  const [n, k] = lines[0].trim().split(' ').map(Number);
  const items = [];
  for (let i = 1; i <= n; i++) {
    const [w, v] = lines[i].trim().split(' ').map(Number);
    items.push([w, v]);
  }

  const dp = new Array(k + 1).fill(0);

  for (const [w, v] of items) {
    for (let cap = k; cap >= w; cap--) {
      dp[cap] = Math.max(dp[cap], dp[cap - w] + v);
    }
  }

  return String(dp[k]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
