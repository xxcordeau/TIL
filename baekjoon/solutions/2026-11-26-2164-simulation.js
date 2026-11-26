// https://www.acmicpc.net/problem/2164
// 카드2 (시뮬레이션)
//
// 1번부터 N번까지 카드를 순서대로 쌓고, 맨 위 카드를 버리고 다음 카드를 맨 아래로 보내는 과정 반복.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const q = Array.from({length: n}, (_, i) => i + 1);
  while (q.length > 1) { q.shift(); q.push(q.shift()); }
  return q[0];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}