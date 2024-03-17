// https://www.acmicpc.net/problem/10951
// A+B - 4
//
// 몇 개가 들어올지 모르니까 입력 전체를 줄 단위로 받아서 빈 줄만
// 걸러내고 순서대로 처리하면 EOF까지 자연스럽게 처리된다.

function solve(lines) {
  const result = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') continue;

    const [a, b] = trimmed.split(' ').map(Number);
    result.push(a + b);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
