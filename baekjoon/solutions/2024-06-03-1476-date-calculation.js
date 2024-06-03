// https://www.acmicpc.net/problem/1476
// 날짜 계산
//
// 세 톱니가 각각 15, 28, 19년 주기로 도니까, year를 1부터 하나씩
// 늘려가면서 (year-1)%15+1이 E와 같고 나머지 두 개도 동시에 맞는
// 최초의 해를 찾으면 된다. 문제에서 항상 답이 존재한다고 보장하니
// 그냥 브루트포스로 충분하다.

function solve(lines) {
  const [e, s, m] = lines[0].trim().split(' ').map(Number);

  let year = 1;
  while (true) {
    if (
      (year - 1) % 15 + 1 === e &&
      (year - 1) % 28 + 1 === s &&
      (year - 1) % 19 + 1 === m
    ) {
      return String(year);
    }
    year++;
  }
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
