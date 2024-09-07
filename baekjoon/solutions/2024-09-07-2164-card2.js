// https://www.acmicpc.net/problem/2164
// 카드2
//
// 맨 위 카드를 버리고, 그다음 카드는 맨 아래로 보내는 걸 그대로
// 큐로 시뮬레이션하면 된다. 배열 shift/push는 느릴 수 있어서 인덱스
// 두 개로 앞뒤를 가리키는 큐를 직접 구현했다.

function solve(lines) {
  const n = Number(lines[0].trim());

  const queue = new Array(n * 2);
  for (let i = 0; i < n; i++) queue[i] = i + 1;

  let front = 0;
  let back = n; // [front, back) 범위가 유효한 큐 내용

  while (back - front > 1) {
    front++; // 맨 위 카드 버리기
    queue[back] = queue[front]; // 다음 카드를 맨 아래로 이동
    back++;
    front++;
  }

  return String(queue[front]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
