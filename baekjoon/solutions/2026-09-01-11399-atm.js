// https://www.acmicpc.net/problem/11399
// ATM
//
// 각 사람이 기다리는 시간의 합을 최소화하려면, 처리 시간이 짧은 사람을 먼저 세우면 된다.
// 정렬 후 누적합을 구해서 전부 더하면 된다.
// 그리디 + 누적합 조합의 대표적인 문제.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const p = lines[1].trim().split(' ').map(Number);
  p.sort((a, b) => a - b);

  let total = 0;
  let cumul = 0;
  for (const t of p) {
    cumul += t;
    total += cumul;
  }

  return total;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
