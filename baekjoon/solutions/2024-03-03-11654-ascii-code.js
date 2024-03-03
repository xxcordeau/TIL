// https://www.acmicpc.net/problem/11654
// 아스키 코드
//
// charCodeAt으로 바로 아스키 값을 뽑으면 끝.

function solve(lines) {
  const char = lines[0].trim();
  return String(char.charCodeAt(0));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
