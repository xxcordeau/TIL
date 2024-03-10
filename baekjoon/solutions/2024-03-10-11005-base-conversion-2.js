// https://www.acmicpc.net/problem/11005
// 진법 변환 2
//
// 자바스크립트 Number.toString(진법)이 딱 이 문제를 위한 기능이라
// 그대로 쓰고, 10 이상 자리는 소문자로 나와서 대문자로 바꿔줬다.

function solve(lines) {
  const [n, b] = lines[0].trim().split(' ').map(Number);
  return n.toString(b).toUpperCase();
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
