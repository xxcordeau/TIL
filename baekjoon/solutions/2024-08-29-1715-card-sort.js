// https://www.acmicpc.net/problem/1715
// 카드 정렬하기
//
// 매번 가장 작은 두 묶음을 합치는 게 최선이라 최소 힙을 쓴다.
// 힙에서 두 개를 꺼내 더한 값을 answer에 누적하고, 그 합쳐진 묶음을
// 다시 힙에 넣는 과정을 묶음이 하나 남을 때까지 반복한다.

class MinHeap {
  constructor() {
    this.heap = [];
  }

  push(val) {
    this.heap.push(val);
    let i = this.heap.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.heap[parent] <= this.heap[i]) break;
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop() {
    const top = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      let i = 0;
      while (true) {
        const left = i * 2 + 1;
        const right = i * 2 + 2;
        let smallest = i;
        if (left < this.heap.length && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < this.heap.length && this.heap[right] < this.heap[smallest]) smallest = right;
        if (smallest === i) break;
        [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
        i = smallest;
      }
    }
    return top;
  }

  size() {
    return this.heap.length;
  }
}

function solve(lines) {
  const n = Number(lines[0].trim());

  if (n === 1) return '0';

  const heap = new MinHeap();
  for (let i = 1; i <= n; i++) heap.push(Number(lines[i].trim()));

  let total = 0;
  while (heap.size() > 1) {
    const a = heap.pop();
    const b = heap.pop();
    const merged = a + b;
    total += merged;
    heap.push(merged);
  }

  return String(total);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
