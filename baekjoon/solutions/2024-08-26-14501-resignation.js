// https://www.acmicpc.net/problem/14501
// 퇴사
//
// 뒤에서부터 채워나가는 DP. dp[i] = i일부터 퇴사일까지 벌 수 있는 최대 수익.
// i일에 시작하는 상담이 기간을 넘기면 그날은 일을 못 하니 dp[i+1]과 같고,
// 넘기지 않으면 그 상담을 하거나(P[i] + dp[i+T[i]]) 안 하거나(dp[i+1]) 중
// 큰 쪽을 고른다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const t = [];
  const p = [];
  for (let i = 1; i <= n; i++) {
    const [ti, pi] = lines[i].trim().split(' ').map(Number);
    t.push(ti);
    p.push(pi);
  }

  const dp = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    if (i + t[i] > n) {
      dp[i] = dp[i + 1];
    } else {
      dp[i] = Math.max(dp[i + 1], p[i] + dp[i + t[i]]);
    }
  }

  return String(dp[0]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
