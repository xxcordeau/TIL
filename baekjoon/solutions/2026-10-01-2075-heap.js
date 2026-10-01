// https://www.acmicpc.net/problem/2075
// N번째 큰 수
//
// N*N 행렬에서 N번째로 큰 수를 찾는 문제.
// 크기 N의 최소 힙을 유지하면서 모든 원소를 보면 힙에는 상위 N개가 남는다.
// 힙의 루트가 N번째로 큰 수.

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

  for (let i = 1; i <= n; i++) {
    const row = lines[i].trim().split(' ').map(Number);
    for (const v of row) {
      push(v);
      if (heap.length > n) pop();
    }
  }

  return heap[0];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}