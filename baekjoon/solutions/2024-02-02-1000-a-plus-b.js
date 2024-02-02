// https://www.acmicpc.net/problem/1000
// A+B
//
// 백준 입문 첫 문제. 표준입력으로 들어온 한 줄을 공백 기준으로 쪼개서
// 숫자 두 개로 바꾼 다음 더해서 출력하면 끝.

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ').map(Number);
  return String(a + b);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
