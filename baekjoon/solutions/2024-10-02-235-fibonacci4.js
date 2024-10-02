// https://www.acmicpc.net/problem/10826
// 피보나치 4
//
// N이 90까지라서 일반 number로는 자릿수가 넘쳐버린다. BigInt로 반복문
// 돌리면서 두 값만 계속 갱신해주는 방식으로 풀었다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  if (n === 0) return '0';

  let a = 0n;
  let b = 1n;
  for (let i = 2; i <= n; i++) {
    const next = a + b;
    a = b;
    b = next;
  }
  return b.toString();
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
