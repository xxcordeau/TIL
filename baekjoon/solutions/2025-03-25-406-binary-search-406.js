// https://www.acmicpc.net/problem/2034
// 반음
//
// 정답 후보가 될 수 있는 값의 범위가 정해져 있고, 특정 값이
// 조건을 만족하는지 여부가 단조적으로 변하기 때문에 이분 탐색으로
// 조건을 만족하는 경계값을 찾는 방식(파라메트릭 서치)을 썼다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const arr = lines[1].trim().split(/\s+/).map(Number);

  function isPossible(mid) {
    let total = 0;
    for (const v of arr) {
      total += Math.floor(v / mid);
    }
    return total >= n;
  }

  let lo = 1;
  let hi = Math.max(...arr);
  let ans = 1;
  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (mid > 0 && isPossible(mid)) {
      ans = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return String(ans);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
