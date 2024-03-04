// https://www.acmicpc.net/problem/11720
// 숫자의 합
//
// 붙어있는 숫자 문자열을 한 글자씩 쪼개서 숫자로 바꾼 다음 다 더하면
// 끝.

function solve(lines) {
  const digits = lines[1].trim().split('');
  return String(digits.reduce((sum, d) => sum + Number(d), 0));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
