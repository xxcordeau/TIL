// https://www.acmicpc.net/problem/11053
// 가장 긴 증가하는 부분 수열
//
// dp[i] = i번째 원소로 끝나는 증가 부분수열의 최대 길이. 앞의 원소들
// 중 자신보다 작은 것들의 dp값 + 1 중 최댓값을 취하면 됨. N이 1000
// 이하라 O(N^2)로도 충분하다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const arr = lines[1].trim().split(' ').map(Number);

  const dp = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] < arr[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
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
