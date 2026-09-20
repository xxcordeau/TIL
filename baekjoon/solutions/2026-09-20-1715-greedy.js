// https://www.acmicpc.net/problem/1715
// 카드 정렬하기
//
// 매번 가장 작은 두 묶음을 합치면 최솟값이 된다. 허프만 코딩과 같은 원리.
// 최소 힙으로 구현하면 효율적이다. JS 내장 힙이 없어서 직접 구현.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const heap = [];

  const push = (v) => {
    heap.push(v);
    let i = heap.length - 1;
    while (i > 0) {
      const p = Math.floor((i - 1) / 2);
      if (heap[p] > heap[i]) { [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; }
      else break;
    }
  };
  const pop = () => {
    if (heap.length === 1) return heap.pop();
    const top = heap[0];
    heap[0] = heap.pop();
    let i = 0;
    while (true) {
      let s = i, l = 2*i+1, r = 2*i+2;
      if (l < heap.length && heap[l] < heap[s]) s = l;
      if (r < heap.length && heap[r] < heap[s]) s = r;
      if (s === i) break;
      [heap[i], heap[s]] = [heap[s], heap[i]]; i = s;
    }
    return top;
  };

  for (let i = 1; i <= n; i++) push(parseInt(lines[i].trim(), 10));

  let total = 0;
  while (heap.length > 1) {
    const a = pop(), b = pop();
    total += a + b;
    push(a + b);
  }

  return total;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}