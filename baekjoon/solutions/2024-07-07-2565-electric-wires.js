// https://www.acmicpc.net/problem/2565
// 전깃줄
//
// 왼쪽 전봇대 번호 기준으로 정렬한 다음, 오른쪽 전봇대 번호들의
// 최장 증가 부분 수열(LIS) 길이를 구하면 그게 안 끊어도 되는 전선
// 개수다. 전체 전선 개수에서 LIS 길이를 빼면 없애야 하는 최소
// 개수가 나온다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const pairs = [];
  for (let i = 1; i <= n; i++) {
    pairs.push(lines[i].trim().split(' ').map(Number));
  }
  pairs.sort((a, b) => a[0] - b[0]);

  const rights = pairs.map((p) => p[1]);
  const dp = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (rights[j] < rights[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
      }
    }
  }

  const lis = Math.max(...dp);
  return String(n - lis);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
