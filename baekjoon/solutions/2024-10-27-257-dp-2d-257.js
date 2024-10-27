// https://www.acmicpc.net/problem/1389
// 케빈 베이컨의 6단계 법칙
//
// 두 대상 사이의 관계를 2차원 표에 채워나가며 구하는 DP 문제.
// dp[i][j]가 앞의 상태들로부터 유도되도록 점화식을 세우고,
// 표를 왼쪽 위에서부터 순서대로 채워서 답을 구한다.

function solve(lines) {
  const s1 = lines[0].trim();
  const s2 = lines[1].trim();
  const n = s1.length;
  const m = s2.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return String(dp[n][m]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
