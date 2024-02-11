// https://www.acmicpc.net/problem/2739
// 구구단
//
// N단을 1부터 9까지 곱해서 "N * i = 결과" 형식으로 출력.

function solve(lines) {
  const n = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= 9; i++) {
    result.push(`${n} * ${i} = ${n * i}`);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
