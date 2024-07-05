// https://www.acmicpc.net/problem/2805
// 나무 자르기
//
// 절단기 높이 h를 이분 탐색으로 찾는 문제. h를 정하면 각 나무에서
// h를 뺀 나머지(음수면 0)를 다 더해서 필요한 나무의 길이 M 이상이
// 되는지 확인하고, 되면 h를 더 올려보고 안 되면 낮춰본다. 가능한
// 값 중 최댓값을 찾으면 됨.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const trees = lines[1].trim().split(' ').map(Number);

  let lo = 0;
  let hi = Math.max(...trees);
  let answer = 0;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    let total = 0;
    for (const t of trees) {
      if (t > mid) total += t - mid;
    }

    if (total >= m) {
      answer = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return String(answer);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
