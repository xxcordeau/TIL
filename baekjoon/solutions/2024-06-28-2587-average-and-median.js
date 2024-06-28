// https://www.acmicpc.net/problem/2587
// 대표값2
//
// 정수 5개가 주어지면 산술평균(반올림)과 중앙값을 출력. 평균은
// 5개 합을 5로 나눈 뒤 반올림, 중앙값은 정렬해서 가운데 값.

function solve(lines) {
  const nums = [];
  for (let i = 0; i < 5; i++) {
    nums.push(Number(lines[i].trim()));
  }

  const sum = nums.reduce((a, b) => a + b, 0);
  const average = Math.round(sum / 5);

  const sorted = [...nums].sort((a, b) => a - b);
  const median = sorted[2];

  return `${average}\n${median}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
