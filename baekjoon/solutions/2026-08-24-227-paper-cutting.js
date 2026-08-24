// https://www.acmicpc.net/problem/2630
// 색종이 만들기
//
// 전형적인 분할정복 문제. 현재 범위의 칸이 전부 같은 색이면 그대로 세고,
// 하나라도 다른 색이 섞여 있으면 가로/세로로 절반씩 나눠서 4등분한 다음
// 각 조각에 대해 똑같은 과정을 재귀적으로 반복하면 된다. 종이 크기가
// 항상 2의 거듭제곱이라서 절반씩 나눠도 딱 떨어지는 게 포인트.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const grid = [];
  for (let i = 0; i < n; i++) {
    grid.push(lines[i + 1].trim().split(/\s+/).map(Number));
  }

  let white = 0;
  let blue = 0;

  function cut(x, y, size) {
    const color = grid[y][x];
    let uniform = true;

    outer:
    for (let i = y; i < y + size; i++) {
      for (let j = x; j < x + size; j++) {
        if (grid[i][j] !== color) {
          uniform = false;
          break outer;
        }
      }
    }

    if (uniform) {
      if (color === 0) white++;
      else blue++;
      return;
    }

    const half = size / 2;
    cut(x, y, half);
    cut(x + half, y, half);
    cut(x, y + half, half);
    cut(x + half, y + half, half);
  }

  cut(0, 0, n);

  return `${white}\n${blue}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
