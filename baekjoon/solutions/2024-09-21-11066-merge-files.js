// https://www.acmicpc.net/problem/11066
// 파일 합치기
//
// 두 파일을 합칠 때 드는 비용이 두 파일 크기의 합이라, 어떤 순서로
// 합치느냐에 따라 총 비용이 달라진다. 구간 [i, j]를 하나로 합치는
// 최소 비용을 dp[i][j]로 두고, 중간 지점 k를 어디서 나누느냐를 다
// 시도해서 dp[i][k] + dp[k+1][j] + (구간 합) 중 최솟값을 구하는
// 구간 DP로 풀었다.

function solve(lines) {
  let idx = 0;
  const t = Number(lines[idx++].trim());
  const out = [];

  for (let tc = 0; tc < t; tc++) {
    const k = Number(lines[idx++].trim());
    const sizes = lines[idx++].trim().split(' ').map(Number);

    const prefix = new Array(k + 1).fill(0);
    for (let i = 0; i < k; i++) prefix[i + 1] = prefix[i] + sizes[i];
    const rangeSum = (i, j) => prefix[j + 1] - prefix[i];

    const dp = Array.from({ length: k }, () => new Array(k).fill(0));

    for (let len = 2; len <= k; len++) {
      for (let i = 0; i + len - 1 < k; i++) {
        const j = i + len - 1;
        let best = Infinity;
        for (let m = i; m < j; m++) {
          const cost = dp[i][m] + dp[m + 1][j] + rangeSum(i, j);
          if (cost < best) best = cost;
        }
        dp[i][j] = best;
      }
    }

    out.push(String(dp[0][k - 1]));
  }

  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
