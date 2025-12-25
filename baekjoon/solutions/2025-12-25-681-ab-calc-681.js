// https://www.acmicpc.net/problem/3282
// ROOMS
//
// 두 정수를 입력받아서 결과를 계산하는 간단한 구현 문제라
// 따로 복잡한 알고리즘 없이 입력을 파싱해서 바로 계산하면 된다.

function solve(lines) {
  const [a, b] = lines[0].trim().split(/\s+/).map(Number);
  return String(a + b);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
