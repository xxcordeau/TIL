// https://www.acmicpc.net/problem/1780
// 종이의 개수
//
// 분할정복 문제. 현재 범위가 전부 같은 숫자면 그 숫자 카운트를 올리고,
// 아니면 9등분해서 재귀적으로 확인한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const paper = [];
  for (let i = 1; i <= n; i++) {
    paper.push(lines[i].trim().split(/\s+/).map(Number));
  }

  const cnt = { '-1': 0, '0': 0, '1': 0 };

  function check(r, c, size) {
    const val = paper[r][c];
    let uniform = true;
    outer: for (let i = r; i < r + size; i++) {
      for (let j = c; j < c + size; j++) {
        if (paper[i][j] !== val) { uniform = false; break outer; }
      }
    }
    if (uniform) { cnt[String(val)]++; return; }
    const s = size / 3;
    for (let i = 0; i < 3; i++)
      for (let j = 0; j < 3; j++)
        check(r + i * s, c + j * s, s);
  }

  check(0, 0, n);
  return `${cnt['-1']}\n${cnt['0']}\n${cnt['1']}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}