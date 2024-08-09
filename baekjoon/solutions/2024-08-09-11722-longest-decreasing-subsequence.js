// https://www.acmicpc.net/problem/11722
// 가장 긴 감소하는 부분 수열
//
// 가장 긴 증가하는 부분 수열(11053)과 완전히 같은 구조인데
// 비교 부등호만 반대로 뒤집으면 된다. dp[i]는 i번째 원소로
// 끝나는 가장 긴 감소하는 부분 수열의 길이이고, 자신보다 앞에
// 있으면서 값이 더 큰 원소들의 dp값 중 최댓값 + 1로 갱신한다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const a = lines[1].trim().split(' ').map(Number);
  const dp = new Array(n).fill(1);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (a[j] > a[i] && dp[j] + 1 > dp[i]) {
        dp[i] = dp[j] + 1;
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
