// https://www.acmicpc.net/problem/11279
// 최대 힙
//
// 최대 힙을 배열로 직접 구현. 0이 들어오면 최댓값을 꺼내서
// 출력(비어있으면 0), 양수가 들어오면 삽입. 삽입/삭제 모두
// 일반적인 이진 힙 방식으로 부모/자식 인덱스를 비교하며
// 위/아래로 이동시키는 방식.

class MaxHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let i = this.heap.length - 1;
    while (i > 1 && this.heap[Math.floor(i / 2)] < this.heap[i]) {
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
        let largest = i;
        if (left < n && this.heap[left] > this.heap[largest]) largest = left;
        if (right < n && this.heap[right] > this.heap[largest]) largest = right;
        if (largest === i) break;
        [this.heap[largest], this.heap[i]] = [this.heap[i], this.heap[largest]];
        i = largest;
      }
    }

    return top;
  }
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const heap = new MaxHeap();
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
