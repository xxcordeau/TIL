// https://www.acmicpc.net/problem/2588
// 곱셈
//
// 초등학교 때 배우는 세로 곱셈 그대로. 둘째 수의 일의자리, 십의자리,
// 백의자리를 각각 첫 번째 수랑 곱해서 한 줄씩 출력하고, 마지막에
// 전체 곱을 출력.

function solve(lines) {
  const a = Number(lines[0].trim());
  const b = lines[1].trim();

  const ones = Number(b[2]);
  const tens = Number(b[1]);
  const hundreds = Number(b[0]);

  const result = [a * ones, a * tens, a * hundreds, a * Number(b)];
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
