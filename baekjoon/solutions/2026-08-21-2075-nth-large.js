// https://www.acmicpc.net/problem/2075
// N번째 큰 수
//
// N*N개 숫자 중 N번째로 큰 값을 찾는 문제라 정렬로 다 때려박으면
// 메모리가 부담스럽다. 크기 N짜리 최소 힙을 유지하면서, 힙이 꽉 찼을 때
// 새 숫자가 힙의 최솟값보다 크면 최솟값을 빼고 새 숫자를 넣는 식으로
// "지금까지 본 것 중 가장 큰 N개"를 유지하면 끝에 힙의 최솟값이 정답이다.

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

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const heap = new MinHeap();

  let idx = 1;
  for (let row = 0; row < n; row++) {
    const nums = lines[idx].trim().split(' ').map(Number);
    idx++;
    for (const num of nums) {
      if (heap.size() < n) {
        heap.push(num);
      } else if (num > heap.peek()) {
        heap.pop();
        heap.push(num);
      }
    }
  }

  return String(heap.peek());
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
