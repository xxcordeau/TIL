// https://www.acmicpc.net/problem/11650
// 좌표 정렬하기
//
// x 좌표 기준으로 정렬하고, x가 같으면 y 기준으로 정렬한다.
// JS sort 기본 동작이 문자열 비교라서 비교 함수를 꼭 넣어야 한다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const points = [];
  for (let i = 1; i <= n; i++) {
    const [x, y] = lines[i].trim().split(' ').map(Number);
    points.push([x, y]);
  }

  points.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : a[1] - b[1]);
  return points.map(([x, y]) => `${x} ${y}`).join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}