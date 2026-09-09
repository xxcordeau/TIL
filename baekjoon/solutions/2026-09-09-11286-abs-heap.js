// https://www.acmicpc.net/problem/11286
// 절댓값 힙
//
// 절댓값 기준 최솟값을 빠르게 꺼내는 우선순위 큐 문제.
// JS에는 내장 힙이 없어서 배열로 직접 구현했다.
// 비교 기준: 절댓값이 작은 것, 같으면 실제 값이 작은 것.

function solve(lines) {
  const N = parseInt(lines[0].trim(), 10);

  // 최소 힙 직접 구현 (절댓값 기준)
  const heap = [];
  const cmp = (a, b) => {
    if (Math.abs(a) !== Math.abs(b)) return Math.abs(a) < Math.abs(b);
    return a < b;
  };
  const push = (val) => {
    heap.push(val);
    let i = heap.length - 1;
    while (i > 0) {
      const parent = Math.floor((i - 1) / 2);
      if (cmp(heap[i], heap[parent])) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
      } else break;
    }
  };
  const pop = () => {
    if (heap.length === 0) return 0;
    if (heap.length === 1) return heap.pop();
    const top = heap[0];
    heap[0] = heap.pop();
    let i = 0;
    while (true) {
      let smallest = i;
      const l = 2 * i + 1;
      const r = 2 * i + 2;
      if (l < heap.length && cmp(heap[l], heap[smallest])) smallest = l;
      if (r < heap.length && cmp(heap[r], heap[smallest])) smallest = r;
      if (smallest === i) break;
      [heap[i], heap[smallest]] = [heap[smallest], heap[i]];
      i = smallest;
    }
    return top;
  };

  const result = [];
  for (let i = 1; i <= N; i++) {
    const x = parseInt(lines[i].trim(), 10);
    if (x === 0) {
      result.push(pop());
    } else {
      push(x);
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
