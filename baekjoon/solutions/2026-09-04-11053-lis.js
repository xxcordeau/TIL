// https://www.acmicpc.net/problem/11053
// 가장 긴 증가하는 부분 수열
//
// dp[i]를 i번째 원소로 끝나는 LIS의 길이로 정의한다.
// i보다 앞에 있는 원소 j에 대해, A[j] < A[i]이면 dp[i]를 dp[j]+1로 갱신할 수 있다.
// O(N^2) 풀이로도 N이 1000이라 충분히 통과된다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const A = lines[1].trim().split(' ').map(Number);
  const dp = new Array(n).fill(1);

  for (let i = 1; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (A[j] < A[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }

  return Math.max(...dp);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
