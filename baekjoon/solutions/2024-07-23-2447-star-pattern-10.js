// https://www.acmicpc.net/problem/2447
// 별 찍기 - 10
//
// N은 항상 3의 거듭제곱이라, 좌표 (y, x)를 3진법처럼 계속 3으로
// 나눠가면서 각 자리가 (1,1)(가운데)이면 그 칸은 무조건 빈칸이 된다.
// 한 번이라도 가운데를 거치면 별을 안 찍는 식으로 재귀 없이도 판별
// 가능해서, 그냥 좌표마다 이 규칙을 적용해서 채운다.

function isBlank(y, x) {
  while (y > 0 || x > 0) {
    if (y % 3 === 1 && x % 3 === 1) return true;
    y = Math.floor(y / 3);
    x = Math.floor(x / 3);
  }
  return false;
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const rows = [];

  for (let y = 0; y < n; y++) {
    let row = '';
    for (let x = 0; x < n; x++) {
      row += isBlank(y, x) ? ' ' : '*';
    }
    rows.push(row);
  }

  return rows.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
