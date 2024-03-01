// https://www.acmicpc.net/problem/2562
// 최댓값
//
// 9개 수를 순회하면서 최댓값과 그 값의 인덱스(1부터 시작)를 같이
// 갱신하면 한 번에 끝남.

function solve(lines) {
  const numbers = lines
    .slice(0, 9)
    .map((line) => Number(line.trim()));

  let max = numbers[0];
  let maxIndex = 1;

  numbers.forEach((num, i) => {
    if (num > max) {
      max = num;
      maxIndex = i + 1;
    }
  });

  return `${max}\n${maxIndex}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s+/);
  console.log(solve(input));
}
