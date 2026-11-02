// https://www.acmicpc.net/problem/1003
// 피보나치 함수
//
// fibonacci(n) 호출 시 0과 1이 각각 몇 번 출력되는지 구하는 문제.
// dp로 각 n에서의 (0 출력 횟수, 1 출력 횟수)를 미리 계산해두면 된다.

function solve(lines) {
  const T = parseInt(lines[0].trim(), 10);
  const dp = [[1,0],[0,1]];
  for (let i = 2; i <= 40; i++) dp[i] = [dp[i-1][0]+dp[i-2][0], dp[i-1][1]+dp[i-2][1]];
  const result = [];
  for (let t = 1; t <= T; t++) {
    const n = parseInt(lines[t].trim(), 10);
    result.push(dp[n][0] + ' ' + dp[n][1]);
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}