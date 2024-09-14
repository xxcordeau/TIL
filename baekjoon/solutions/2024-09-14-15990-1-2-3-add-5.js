// https://www.acmicpc.net/problem/15990
// 1, 2, 3 더하기 5
//
// 그냥 1,2,3 더하기 DP에 "바로 직전에 쓴 수는 다시 못 쓴다"는 조건이
// 붙은 버전이다. dp[i][j]를 "합이 i이고 마지막에 j를 사용한 경우의
// 수"로 두면, dp[i][j]는 j를 제외한 나머지 두 수로 dp[i-j][*]를
// 더한 값이 된다. i-j가 0이면 그 자체로 한 가지 방법이 추가된다.

const MOD = 1000000009n;
const MAXN = 100000;

function buildDp() {
  const dp = Array.from({ length: MAXN + 1 }, () => [0n, 0n, 0n]); // index 0,1,2 -> last used 1,2,3

  for (let i = 1; i <= MAXN; i++) {
    for (let j = 1; j <= 3; j++) {
      if (i - j < 0) continue;
      let sum = 0n;
      for (let k = 1; k <= 3; k++) {
        if (k === j) continue;
        if (i - j === 0) continue; // 아래에서 별도 처리
        sum = (sum + dp[i - j][k - 1]) % MOD;
      }
      if (i - j === 0) {
        sum = 1n;
      }
      dp[i][j - 1] = sum;
    }
  }

  return dp;
}

function solve(lines) {
  const dp = buildDp();
  const t = Number(lines[0].trim());
  const out = [];

  for (let i = 1; i <= t; i++) {
    const n = Number(lines[i].trim());
    const answer = (dp[n][0] + dp[n][1] + dp[n][2]) % MOD;
    out.push(answer.toString());
  }

  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
