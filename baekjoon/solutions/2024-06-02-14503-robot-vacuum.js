// https://www.acmicpc.net/problem/14503
// 로봇 청소기
//
// 문제에서 시키는 규칙을 그대로 시뮬레이션. 방향은 0=북,1=동,2=남,
// 3=서로 두고, 반시계 회전은 (d+3)%4로 표현. 4방향 다 청소됐거나
// 벽이면 후진을 시도하고, 후진마저 막히면 종료.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  let [r, c, d] = lines[1].trim().split(' ').map(Number);
  const grid = lines.slice(2, 2 + n).map((line) => line.trim().split(' ').map(Number));
  const cleaned = Array.from({ length: n }, () => new Array(m).fill(false));

  // 북, 동, 남, 서 순서로 이동 벡터를 정의
  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  let count = 0;

  while (true) {
    if (!cleaned[r][c]) {
      cleaned[r][c] = true;
      count++;
    }

    let moved = false;
    for (let turn = 0; turn < 4; turn++) {
      d = (d + 3) % 4; // 반시계 방향으로 90도 회전
      const nr = r + dr[d];
      const nc = c + dc[d];

      if (grid[nr][nc] === 0 && !cleaned[nr][nc]) {
        r = nr;
        c = nc;
        moved = true;
        break;
      }
    }

    if (moved) continue;

    const backR = r - dr[d];
    const backC = c - dc[d];

    if (grid[backR][backC] === 1) {
      break;
    }

    r = backR;
    c = backC;
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
