// https://www.acmicpc.net/problem/1965
// 상자넣기
//
// 가장 긴 증가하는 부분 수열(LIS) 문제와 동일하다.
// dp[i]를 i번째 상자로 끝나는 최장 수열 길이로 정의하고
// 앞에서부터 확인하면서 더 작은 상자가 있으면 갱신한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const boxes = lines[1].trim().split(' ').map(Number);
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (boxes[j] < boxes[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
    }
  }

  return Math.max(...dp);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}