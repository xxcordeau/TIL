// https://www.acmicpc.net/problem/9251
// LCS
//
// 두 문자열의 최장 공통 부분 수열 길이를 구하는 전형적인 2차원
// DP 문제. dp[i][j]는 첫 번째 문자열의 앞 i글자와 두 번째 문자열의
// 앞 j글자에서의 LCS 길이. 마지막 글자가 같으면 dp[i-1][j-1]+1,
// 다르면 dp[i-1][j]와 dp[i][j-1] 중 큰 값을 가져온다.

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
