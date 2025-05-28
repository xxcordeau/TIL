// https://www.acmicpc.net/problem/2371
// 파일 구별하기
//
// 문자열을 앞에서부터 한 글자씩 훑으면서 조건에 맞게
// 가공하는 구현 문제. 특수한 경우(빈 문자열, 연속된 같은 문자 등)를
// 먼저 정리하고 나머지는 순차적으로 처리했다.

function solve(lines) {
  const s = lines[0].trim();
  return s.toUpperCase();
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
