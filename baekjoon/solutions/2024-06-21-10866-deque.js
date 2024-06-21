// https://www.acmicpc.net/problem/10866
// 덱
//
// 명령어대로 push_front, push_back, pop_front, pop_back, size,
// empty, front, back을 처리. 자바스크립트 배열의 push/pop은
// 뒤쪽, unshift/shift는 앞쪽 조작이라 이름 그대로 매핑하면 됨.
// 출력이 필요한 명령(pop_*, size, empty, front, back)만 결과에
// 담는다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const deque = [];
  const result = [];

  for (let i = 1; i <= n; i++) {
    const parts = lines[i].trim().split(' ');
    const cmd = parts[0];

    switch (cmd) {
      case 'push_front':
        deque.unshift(Number(parts[1]));
        break;
      case 'push_back':
        deque.push(Number(parts[1]));
        break;
      case 'pop_front':
        result.push(deque.length === 0 ? -1 : deque.shift());
        break;
      case 'pop_back':
        result.push(deque.length === 0 ? -1 : deque.pop());
        break;
      case 'size':
        result.push(deque.length);
        break;
      case 'empty':
        result.push(deque.length === 0 ? 1 : 0);
        break;
      case 'front':
        result.push(deque.length === 0 ? -1 : deque[0]);
        break;
      case 'back':
        result.push(deque.length === 0 ? -1 : deque[deque.length - 1]);
        break;
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
