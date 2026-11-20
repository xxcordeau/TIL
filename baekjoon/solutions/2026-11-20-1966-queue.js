// https://www.acmicpc.net/problem/1966
// 프린터 큐
//
// 우선순위 큐 시뮬레이션 문제.
// 큐에서 꺼낸 문서보다 우선순위 높은 게 있으면 다시 뒤에 넣고,
// 없으면 출력하고 카운트를 올린다. 목표 문서가 출력될 때 카운트를 리턴.

function solve(lines) {
  const T = parseInt(lines[0].trim(), 10);
  const result = [];
  for (let t = 0; t < T; t++) {
    const [N, M] = lines[1 + t*2].trim().split(' ').map(Number);
    const priorities = lines[2 + t*2].trim().split(' ').map(Number);
    const queue = priorities.map((p, i) => [p, i]);
    let count = 0;
    while (true) {
      const [p, idx] = queue.shift();
      if (queue.some(([pp]) => pp > p)) {
        queue.push([p, idx]);
      } else {
        count++;
        if (idx === M) { result.push(count); break; }
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