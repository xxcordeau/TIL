// https://www.acmicpc.net/problem/10845
// 큐
//
// 스택 문제랑 거의 똑같은 구조인데, pop/front가 배열의 "맨 앞"을
// 봐야 해서 shift를 쓴다. 원래 큐를 배열 shift로 구현하면 느리지만
// (100,000개 정도는) 검증용으로는 충분하다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const queue = [];
  const result = [];

  for (let i = 1; i <= n; i++) {
    const parts = lines[i].trim().split(' ');
    const command = parts[0];

    if (command === 'push') {
      queue.push(Number(parts[1]));
    } else if (command === 'pop') {
      result.push(queue.length === 0 ? -1 : queue.shift());
    } else if (command === 'size') {
      result.push(queue.length);
    } else if (command === 'empty') {
      result.push(queue.length === 0 ? 1 : 0);
    } else if (command === 'front') {
      result.push(queue.length === 0 ? -1 : queue[0]);
    } else if (command === 'back') {
      result.push(queue.length === 0 ? -1 : queue[queue.length - 1]);
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
