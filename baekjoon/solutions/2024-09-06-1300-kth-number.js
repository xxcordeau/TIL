// https://www.acmicpc.net/problem/1300
// K번째 수
//
// N이 커지면 N*N개를 다 만들어서 정렬할 수 없으니 이분 탐색으로
// 접근한다. 값 X를 기준으로 "X 이하인 원소가 몇 개인가"는 각 행마다
// min(N, X/i)개씩 있다는 걸 이용해서 빠르게 셀 수 있고, 이 개수가
// K 이상이 되는 최소 X가 정답이다.

function countLessEqual(n, x) {
  let cnt = 0;
  for (let i = 1; i <= n; i++) {
    cnt += Math.min(n, Math.floor(x / i));
  }
  return cnt;
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const k = Number(lines[1].trim());

  let lo = 1;
  let hi = n * n;

  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (countLessEqual(n, mid) >= k) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return String(lo);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
