// https://www.acmicpc.net/problem/1912
// 연속합
//
// 카데인 알고리즘(Kadane's algorithm). 지금까지의 누적합이 오히려
// 마이너스면 미련없이 버리고 현재 원소부터 새로 시작, 아니면 계속
// 이어붙이면서 매 순간의 최댓값을 갱신.

function solve(lines) {
  const n = Number(lines[0].trim());
  const arr = lines[1].trim().split(' ').map(Number);

  let current = arr[0];
  let best = arr[0];

  for (let i = 1; i < n; i++) {
    current = Math.max(arr[i], current + arr[i]);
    best = Math.max(best, current);
  }

  return String(best);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
