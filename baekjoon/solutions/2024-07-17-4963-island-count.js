// https://www.acmicpc.net/problem/4963
// 섬의 개수
//
// 상하좌우뿐 아니라 대각선 4방향까지 총 8방향으로 연결된 걸 같은
// 섬으로 봐야 한다. BFS로 아직 안 가본 육지 칸을 찾을 때마다 섬
// 개수를 하나씩 늘리면 된다. w, h가 둘 다 0이 나오면 입력 종료.

function solve(lines) {
  let idx = 0;
  const results = [];
  const dx = [1, -1, 0, 0, 1, 1, -1, -1];
  const dy = [0, 0, 1, -1, 1, -1, 1, -1];

  while (true) {
    const [w, h] = lines[idx++].trim().split(' ').map(Number);
    if (w === 0 && h === 0) break;

    const grid = [];
    for (let y = 0; y < h; y++) {
      grid.push(lines[idx++].trim().split(' ').map(Number));
    }

    const visited = Array.from({ length: h }, () => new Array(w).fill(false));
    let count = 0;

    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        if (grid[y][x] === 1 && !visited[y][x]) {
          count++;
          const queue = [[x, y]];
          visited[y][x] = true;
          while (queue.length > 0) {
            const [cx, cy] = queue.shift();
            for (let d = 0; d < 8; d++) {
              const nx = cx + dx[d];
              const ny = cy + dy[d];
              if (nx >= 0 && nx < w && ny >= 0 && ny < h && grid[ny][nx] === 1 && !visited[ny][nx]) {
                visited[ny][nx] = true;
                queue.push([nx, ny]);
              }
            }
          }
        }
      }
    }

    results.push(count);
  }

  return results.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
