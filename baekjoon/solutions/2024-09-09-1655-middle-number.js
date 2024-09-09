// https://www.acmicpc.net/problem/1655
// 가운데를 말해요
//
// 숫자가 들어올 때마다 중간값을 바로 뽑아야 하니, 값을 절반으로 나눠서
// 아래쪽 절반은 최대 힙에, 위쪽 절반은 최소 힙에 넣어 관리한다. 두
// 힙의 크기 균형을 맞추고(최대 힙이 같거나 하나 많게), 최대 힙의
// top이 최소 힙의 top보다 커지면 두 값을 교환해서 순서를 맞춘다.

class Heap {
  constructor(cmp) {
    this.arr = [];
    this.cmp = cmp;
  }

  push(val) {
    this.arr.push(val);
    let i = this.arr.length - 1;
    while (i > 0) {
      const parent = (i - 1) >> 1;
      if (this.cmp(this.arr[parent], this.arr[i]) <= 0) break;
      [this.arr[parent], this.arr[i]] = [this.arr[i], this.arr[parent]];
      i = parent;
    }
  }

  pop() {
    const top = this.arr[0];
    const last = this.arr.pop();
    if (this.arr.length > 0) {
      this.arr[0] = last;
      let i = 0;
      while (true) {
        const left = i * 2 + 1;
        const right = i * 2 + 2;
        let smallest = i;
        if (left < this.arr.length && this.cmp(this.arr[left], this.arr[smallest]) < 0) smallest = left;
        if (right < this.arr.length && this.cmp(this.arr[right], this.arr[smallest]) < 0) smallest = right;
        if (smallest === i) break;
        [this.arr[smallest], this.arr[i]] = [this.arr[i], this.arr[smallest]];
        i = smallest;
      }
    }
    return top;
  }

  peek() {
    return this.arr[0];
  }

  size() {
    return this.arr.length;
  }
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const maxHeap = new Heap((a, b) => b - a); // 하위 절반
  const minHeap = new Heap((a, b) => a - b); // 상위 절반
  const out = [];

  for (let i = 1; i <= n; i++) {
    const num = Number(lines[i].trim());

    if (maxHeap.size() === minHeap.size()) {
      maxHeap.push(num);
    } else {
      minHeap.push(num);
    }

    if (minHeap.size() > 0 && maxHeap.peek() > minHeap.peek()) {
      const a = maxHeap.pop();
      const b = minHeap.pop();
      maxHeap.push(b);
      minHeap.push(a);
    }

    out.push(maxHeap.peek());
  }

  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
