// https://www.acmicpc.net/problem/2579
// 계단 오르기
//
// i번째 계단에 도착하는 방법은 두 가지: (i-2)번째에서 한 번에 두 칸
// 올라오거나, (i-3)번째에서 (i-1)번째를 거쳐 두 번에 나눠 올라오는
// 경우(단, 이땐 세 칸 연속으로 밟으면 안 되니까 i-1은 반드시 거침).
// 이 두 경우 중 점수가 더 큰 쪽을 선택하는 DP.

function solve(lines) {
  const n = Number(lines[0].trim());
  const stairs = lines.slice(1, 1 + n).map((line) => Number(line.trim()));

  const dp = new Array(n + 1).fill(0);
  dp[1] = stairs[0];
  if (n >= 2) dp[2] = stairs[0] + stairs[1];

  for (let i = 3; i <= n; i++) {
    const viaTwoBack = dp[i - 2] + stairs[i - 1];
    const viaThreeBack = dp[i - 3] + stairs[i - 2] + stairs[i - 1];
    dp[i] = Math.max(viaTwoBack, viaThreeBack);
  }

  return String(dp[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
