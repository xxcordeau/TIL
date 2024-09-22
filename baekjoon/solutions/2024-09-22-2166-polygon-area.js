// https://www.acmicpc.net/problem/2166
// 다각형의 면적
//
// 다각형 꼭짓점 좌표가 순서대로 주어질 때 넓이를 구하는 건 신발끈
// 공식(슈레이스 공식)을 쓰면 된다. 인접한 두 점을 교차곱해서 다 더한
// 다음 절댓값을 취하고 2로 나누면 넓이가 나온다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const points = [];
  for (let i = 1; i <= n; i++) {
    const [x, y] = lines[i].trim().split(' ').map(Number);
    points.push([x, y]);
  }

  let sum = 0;
  for (let i = 0; i < n; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[(i + 1) % n];
    sum += x1 * y2 - x2 * y1;
  }

  const area = Math.abs(sum) / 2;

  return area.toFixed(2);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
