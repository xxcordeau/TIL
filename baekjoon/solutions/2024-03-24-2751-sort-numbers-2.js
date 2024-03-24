// https://www.acmicpc.net/problem/2751
// 수 정렬하기 2
//
// 수 정렬하기랑 로직은 똑같은데 N이 훨씬 커질 수 있어서, 입력을
// 한 줄씩 읽지 않고 전체를 한 번에 읽어서 처리하는 게 안전하다.

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
