// https://www.acmicpc.net/problem/7562
// 나이트의 이동
//
// 체스판에서 나이트가 시작 칸에서 목표 칸까지 가는 최소 이동
// 횟수. 나이트가 갈 수 있는 8가지 방향을 정의해두고 BFS로
// 최단거리를 구하면 됨.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];
  let cursor = 1;

  const dx = [1, 1, -1, -1, 2, 2, -2, -2];
  const dy = [2, -2, 2, -2, 1, -1, 1, -1];

  for (let tc = 0; tc < t; tc++) {
    const l = Number(lines[cursor].trim());
    const [x1, y1] = lines[cursor + 1].trim().split(' ').map(Number);
    const [x2, y2] = lines[cursor + 2].trim().split(' ').map(Number);
    cursor += 3;

    const dist = Array.from({ length: l }, () => new Array(l).fill(-1));
    dist[y1][x1] = 0;
    const queue = [[x1, y1]];

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();
      if (cx === x2 && cy === y2) break;

      for (let d = 0; d < 8; d++) {
        const nx = cx + dx[d];
        const ny = cy + dy[d];
        if (nx >= 0 && nx < l && ny >= 0 && ny < l && dist[ny][nx] === -1) {
          dist[ny][nx] = dist[cy][cx] + 1;
          queue.push([nx, ny]);
        }
      }
    }

    result.push(dist[y2][x2]);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
