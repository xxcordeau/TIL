// https://www.acmicpc.net/problem/2110
// 공유기 설치
//
// 공유기 간 최소 거리의 최댓값을 이진 탐색으로 찾는다.
// mid 거리 이상 떨어지도록 공유기를 설치했을 때 C개 이상 설치 가능하면
// 더 큰 거리를 시도하고, 아니면 줄인다.

function solve(lines) {
  const [N, C] = lines[0].trim().split(' ').map(Number);
  const houses = [];
  for (let i = 1; i <= N; i++) houses.push(parseInt(lines[i].trim(), 10));
  houses.sort((a, b) => a - b);

  let lo = 1;
  let hi = houses[N - 1] - houses[0];

  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    let count = 1;
    let last = houses[0];
    for (let i = 1; i < N; i++) {
      if (houses[i] - last >= mid) {
        count++;
        last = houses[i];
      }
    }
    if (count >= C) lo = mid;
    else hi = mid - 1;
  }

  return lo;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}