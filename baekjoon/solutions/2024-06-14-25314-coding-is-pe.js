// https://www.acmicpc.net/problem/25314
// 코딩은 체육과목입니다
//
// N은 항상 4의 배수로 주어짐. "long"을 N/4번 만들어서 공백으로
// 이어붙여 출력하면 끝.

function solve(lines) {
  const n = Number(lines[0].trim());
  const count = n / 4;
  return new Array(count).fill('long').join(' ');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
