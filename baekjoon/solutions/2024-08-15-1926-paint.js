// https://www.acmicpc.net/problem/1926
// 그림
//
// 격자에서 1로 이어진 덩어리(상하좌우로 붙어있는 것)를 그림 하나로 본다.
// BFS로 덩어리를 하나씩 찾아서 방문 처리하면서 크기를 세면
// 그림 개수랑 가장 큰 그림의 크기를 같이 구할 수 있다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const grid = [];
  for (let i = 0; i < n; i++) {
    grid.push(lines[i + 1].trim().split(' ').map(Number));
  }

  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];

  let count = 0;
  let maxSize = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        count++;
        let size = 0;
        const queue = [[i, j]];
        visited[i][j] = true;

        while (queue.length > 0) {
          const [cx, cy] = queue.shift();
          size++;
          for (let d = 0; d < 4; d++) {
            const nx = cx + dx[d];
            const ny = cy + dy[d];
            if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
            if (visited[nx][ny] || grid[nx][ny] === 0) continue;
            visited[nx][ny] = true;
            queue.push([nx, ny]);
          }
        }

        maxSize = Math.max(maxSize, size);
      }
    }
  }

  return `${count}\n${maxSize}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
