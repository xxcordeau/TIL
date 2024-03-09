// https://www.acmicpc.net/problem/2480
// 주사위 세개
//
// 세 눈이 다 같은 경우, 두 개만 같은 경우, 다 다른 경우 순서로
// 조건을 나눠서 각각 규칙대로 상금을 계산.

function solve(lines) {
  const dice = lines[0].trim().split(' ').map(Number);
  const [a, b, c] = dice;

  if (a === b && b === c) {
    return String(10000 + a * 1000);
  }

  if (a === b || b === c || a === c) {
    const same = a === b ? a : b === c ? b : a;
    return String(1000 + same * 100);
  }

  return String(Math.max(a, b, c) * 100);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
