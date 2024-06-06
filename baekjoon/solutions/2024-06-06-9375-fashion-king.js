// https://www.acmicpc.net/problem/9375
// 패션왕 신해빈
//
// 위장 문제랑 똑같은 원리. 종류별로 (그 종류를 안 입는 경우까지
// 포함해서) 개수+1을 다 곱한 다음, 아무것도 안 입는 경우 1가지를
// 빼주면 됨.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];
  let cursor = 1;

  for (let tc = 0; tc < t; tc++) {
    const m = Number(lines[cursor].trim());
    const countByType = {};

    for (let i = 1; i <= m; i++) {
      const parts = lines[cursor + i].trim().split(' ');
      const type = parts[parts.length - 1];
      countByType[type] = (countByType[type] || 0) + 1;
    }
    cursor += m + 1;

    const combinations = Object.values(countByType).reduce(
      (acc, count) => acc * (count + 1),
      1
    );

    result.push(combinations - 1);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
