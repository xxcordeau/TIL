// https://www.acmicpc.net/problem/11055
// 가장 큰 증가하는 부분 수열
//
// LIS랑 똑같은 틀인데, 길이 대신 "합"을 최대화하는 버전. dp[i]는
// arr[i]로 끝나는 증가 부분수열의 최대 합이고, 앞쪽에서 자신보다
// 작은 값들의 dp 중 최댓값에 자기 자신을 더해서 갱신한다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const arr = lines[1].trim().split(' ').map(Number);

  const dp = arr.slice();

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + arr[i]);
      }
    }
  }

  return String(Math.max(...dp));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
