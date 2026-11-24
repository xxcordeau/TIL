// https://www.acmicpc.net/problem/1920
// 수 찾기
//
// N개의 수에서 M개의 수가 있는지 이진 탐색으로 확인한다.
// Set으로 풀면 더 간단하지만, 이진 탐색 연습용으로 직접 구현.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const A = lines[1].trim().split(' ').map(Number).sort((a,b) => a-b);
  const m = parseInt(lines[2].trim(), 10);
  const queries = lines[3].trim().split(' ').map(Number);

  const bsearch = (arr, target) => {
    let lo = 0, hi = arr.length - 1;
    while (lo <= hi) {
      const mid = (lo + hi) >> 1;
      if (arr[mid] === target) return 1;
      if (arr[mid] < target) lo = mid + 1;
      else hi = mid - 1;
    }
    return 0;
  };

  return queries.map(q => bsearch(A, q)).join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}