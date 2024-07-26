// https://www.acmicpc.net/problem/11286
// 절댓값 힙
//
// 1927 최소 힙이랑 구조는 똑같은데, 비교 기준만 "절댓값이 작은 것,
// 절댓값이 같으면 음수가 먼저"로 바꾸면 된다. compare 함수를 하나
// 만들어서 sift-up, sift-down에서 공통으로 쓰면 깔끔하다.

function compare(a, b) {
  const absA = Math.abs(a);
  const absB = Math.abs(b);
  if (absA !== absB) return absA - absB;
  return a - b;
}

class AbsHeap {
  constructor() {
    this.heap = [null]; // 1-indexed
  }

  push(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 1 && compare(this.heap[Math.floor(i / 2)], this.heap[i]) > 0) {
      const parent = Math.floor(i / 2);
      [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
      i = parent;
    }
  }

  pop() {
    if (this.heap.length <= 1) return 0;
    const top = this.heap[1];
    const last = this.heap.pop();
    if (this.heap.length > 1) {
      this.heap[1] = last;
      let i = 1;
      const n = this.heap.length;
      while (true) {
        const left = i * 2;
        const right = i * 2 + 1;
        let smallest = i;
        if (left < n && compare(this.heap[left], this.heap[smallest]) < 0) smallest = left;
        if (right < n && compare(this.heap[right], this.heap[smallest]) < 0) smallest = right;
        if (smallest === i) break;
        [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
        i = smallest;
      }
    }
    return top;
  }
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const heap = new AbsHeap();
  const result = [];

  for (let i = 1; i <= n; i++) {
    const x = Number(lines[i].trim());
    if (x === 0) {
      result.push(heap.pop());
    } else {
      heap.push(x);
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
