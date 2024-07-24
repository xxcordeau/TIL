// https://www.acmicpc.net/problem/1927
// 최소 힙
//
// 배열 기반 이진 힙을 직접 구현. 삽입할 때는 맨 끝에 넣고 부모와
// 비교해서 더 작으면 계속 위로 올려주고(sift-up), 삭제할 때는 루트를
// 빼고 마지막 원소를 루트로 올린 다음 자식 중 더 작은 쪽과 비교해서
// 내려준다(sift-down).

class MinHeap {
  constructor() {
    this.heap = [null]; // 1-indexed
  }

  push(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 1 && this.heap[Math.floor(i / 2)] > this.heap[i]) {
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
        if (left < n && this.heap[left] < this.heap[smallest]) smallest = left;
        if (right < n && this.heap[right] < this.heap[smallest]) smallest = right;
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
  const heap = new MinHeap();
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
