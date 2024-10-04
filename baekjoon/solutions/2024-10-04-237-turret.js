// https://www.acmicpc.net/problem/1002
// 터렛
//
// 두 원이 만나는 교점 개수를 구하는 기하 문제. 중심 사이 거리와 두
// 반지름의 합/차를 비교해서 케이스를 나눴다. 실수 오차 때문에 거리를
// 직접 비교하지 않고 제곱값끼리 비교하는 식으로 처리했다.
// 두 중심이 완전히 같은 경우는 따로 처리해야 한다(반지름 같으면 무한개).

function solve(lines) {
  const t = parseInt(lines[0].trim(), 10);
  const out = [];

  for (let i = 0; i < t; i++) {
    const [x1, y1, r1, x2, y2, r2] = lines[i + 1].trim().split(/\s+/).map(Number);
    const dx = x2 - x1;
    const dy = y2 - y1;
    const d2 = dx * dx + dy * dy;

    if (d2 === 0) {
      out.push(r1 === r2 ? -1 : 0);
      continue;
    }

    const sumR = r1 + r2;
    const diffR = Math.abs(r1 - r2);

    if (d2 === sumR * sumR || d2 === diffR * diffR) {
      out.push(1);
    } else if (diffR * diffR < d2 && d2 < sumR * sumR) {
      out.push(2);
    } else {
      out.push(0);
    }
  }

  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
