// https://www.acmicpc.net/problem/2164
// 카드2
//
// 맨 위 카드를 버리고, 다음 카드를 맨 아래로 보내는 과정을 반복한다.
// 큐로 시뮬레이션하면 된다. 카드가 1장 남을 때까지 반복.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const queue = [];
  for (let i = 1; i <= n; i++) queue.push(i);

  while (queue.length > 1) {
    queue.shift();
    queue.push(queue.shift());
  }

  return queue[0];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}