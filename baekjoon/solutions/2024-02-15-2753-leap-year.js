// https://www.acmicpc.net/problem/2753
// 윤년
//
// 윤년 판별 공식 그대로: 4의 배수면서 100의 배수가 아니거나, 400의
// 배수면 윤년.

function solve(lines) {
  const year = Number(lines[0].trim());
  const isLeap = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return isLeap ? '1' : '0';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
