// https://www.acmicpc.net/problem/1748
// 수 이어 쓰기 1
//
// N이 1억까지라 직접 문자열로 이어붙이면 느리다. 자릿수별로
// 몇 개의 수가 존재하는지 계산해서 (개수 * 자릿수)를 더해주면 된다.
// 예를 들어 두 자리 수는 10~99까지 90개이고 각각 2자리를 차지한다.

function solve(lines) {
  const n = Number(lines[0].trim());
  let total = 0;
  let digits = 1;
  let start = 1;

  while (start <= n) {
    const end = Math.min(n, start * 10 - 1);
    const count = end - start + 1;
    total += count * digits;
    digits++;
    start *= 10;
  }

  return String(total);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
