// https://www.acmicpc.net/problem/1330
// 두 수 비교하기
//
// 두 수 대소관계를 비교해서 부등호 혹은 == 출력. 삼항 연산자 두 번이면
// 충분.

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ').map(Number);
  if (a > b) return '>';
  if (a < b) return '<';
  return '==';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
