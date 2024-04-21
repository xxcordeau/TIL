// https://www.acmicpc.net/problem/1966
// 프린터 큐
//
// (중요도, 원래 인덱스) 쌍을 큐에 넣고 시뮬레이션. 맨 앞을 꺼내서
// 남은 것들 중 더 중요한 게 있으면 다시 뒤로, 없으면 인쇄 카운트를
// 올리고, 그 문서가 우리가 찾던 인덱스면 그 시점의 카운트가 답.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];
  let cursor = 1;

  for (let tc = 0; tc < t; tc++) {
    const [n, m] = lines[cursor].trim().split(' ').map(Number);
    const priorities = lines[cursor + 1].trim().split(' ').map(Number);
    cursor += 2;

    const queue = priorities.map((p, idx) => ({ priority: p, index: idx }));
    let printedCount = 0;

    while (queue.length > 0) {
      const front = queue.shift();
      const hasHigherLater = queue.some((doc) => doc.priority > front.priority);

      if (hasHigherLater) {
        queue.push(front);
      } else {
        printedCount++;
        if (front.index === m) {
          result.push(printedCount);
          break;
        }
      }
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
