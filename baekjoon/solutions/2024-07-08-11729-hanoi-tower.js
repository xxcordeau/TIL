// https://www.acmicpc.net/problem/11729
// 하노이 탑 이동 순서
//
// 전형적인 하노이 탑 재귀. n개의 원판을 from에서 to로 옮기려면,
// 위에 있는 n-1개를 먼저 by로 옮기고, 맨 아래 원판을 from에서 to로
// 옮긴 다음, by에 있던 n-1개를 다시 to로 옮기면 된다. 이동 횟수는
// 2^n - 1번.

function solve(lines) {
  const n = Number(lines[0].trim());
  const moves = [];

  function hanoi(count, from, by, to) {
    if (count === 0) return;
    hanoi(count - 1, from, to, by);
    moves.push(`${from} ${to}`);
    hanoi(count - 1, by, from, to);
  }

  hanoi(n, 1, 2, 3);

  const total = 2 ** n - 1;
  return total + '\n' + moves.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
