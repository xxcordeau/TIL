// https://www.acmicpc.net/problem/10817
// 세 수
//
// 정렬해서 가운데 값을 뽑으면 중앙값.

function solve(lines) {
  const numbers = lines[0].trim().split(' ').map(Number).sort((a, b) => a - b);
  return String(numbers[1]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
