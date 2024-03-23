// https://www.acmicpc.net/problem/2750
// 수 정렬하기
//
// 그냥 배열에 담아서 sort 한 번 돌리면 끝나는 워밍업용 정렬 문제.

function solve(lines) {
  const n = Number(lines[0].trim());
  const numbers = lines.slice(1, 1 + n).map((line) => Number(line.trim()));
  numbers.sort((a, b) => a - b);
  return numbers.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
