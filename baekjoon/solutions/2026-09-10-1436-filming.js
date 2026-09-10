// https://www.acmicpc.net/problem/1436
// 영화감독 숌
//
// 연속으로 666이 포함된 숫자를 순서대로 세는 브루트포스 문제.
// 1부터 하나씩 올려가면서 문자열에 '666'이 포함되어 있는지 확인한다.
// N이 최대 10000이고 666은 꽤 자주 나오니까 시간 내에 충분히 된다.

function solve(lines) {
  const N = parseInt(lines[0].trim(), 10);
  let count = 0;
  let num = 665;

  while (count < N) {
    num++;
    if (String(num).includes('666')) count++;
  }

  return num;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
