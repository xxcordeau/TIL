// https://www.acmicpc.net/problem/2743
// 단어 길이 재기
//
// length 속성 그대로 출력.

function solve(lines) {
  return String(lines[0].trim().length);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
