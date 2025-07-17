// https://www.acmicpc.net/problem/2666
// 벽장문의 이동
//
// 각 구간(혹은 선택지)을 특정 기준으로 정렬한 뒤 앞에서부터
// 그리디하게 선택해 나가면 전체 최적해가 되는 문제.
// 정렬 기준을 잘 잡는 게 핵심이라 그 부분에 신경을 썼다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const items = [];
  for (let i = 1; i <= n; i++) {
    const [s, e] = lines[i].trim().split(/\s+/).map(Number);
    items.push([s, e]);
  }
  items.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

  let count = 0;
  let lastEnd = -Infinity;
  for (const [s, e] of items) {
    if (s >= lastEnd) {
      count++;
      lastEnd = e;
    }
  }
  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
