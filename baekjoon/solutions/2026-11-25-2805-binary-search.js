// https://www.acmicpc.net/problem/2805
// 나무 자르기
//
// 절단기 높이 H를 이진 탐색으로 찾는다.
// H로 잘랐을 때 얻는 나무 합이 M 이상이면 H를 높이고, 아니면 낮춘다.

function solve(lines) {
  const [N, M] = lines[0].trim().split(' ').map(Number);
  const trees = lines[1].trim().split(' ').map(Number);
  let lo = 0, hi = Math.max(...trees);
  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    const total = trees.reduce((s, t) => s + Math.max(0, t - mid), 0);
    if (total >= M) lo = mid;
    else hi = mid - 1;
  }
  return lo;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}