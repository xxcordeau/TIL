// https://www.acmicpc.net/problem/14681
// 사분면 고르기
//
// x, y 부호 조합으로 사분면 결정. 좌표축 위에 있는 경우는 없다고
// 했으니 부호만 보고 4가지 케이스로 나누면 됨.

function solve(lines) {
  const x = Number(lines[0].trim());
  const y = Number(lines[1].trim());

  if (x > 0 && y > 0) return '1';
  if (x < 0 && y > 0) return '2';
  if (x < 0 && y < 0) return '3';
  return '4';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
