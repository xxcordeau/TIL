// https://www.acmicpc.net/problem/4153
// 직각삼각형
//
// "0 0 0"이 나올 때까지 반복. 세 변 중 가장 긴 변의 제곱이 나머지
// 두 변의 제곱의 합과 같으면 직각삼각형(피타고라스 정리).

function solve(lines) {
  const result = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '') continue;

    const sides = trimmed.split(' ').map(Number);
    if (sides.every((s) => s === 0)) break;

    sides.sort((a, b) => a - b);
    const [a, b, c] = sides;

    result.push(a * a + b * b === c * c ? 'Right' : 'Wrong');
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
