// https://www.acmicpc.net/problem/1697
// 숨바꼭질
//
// 위치를 정점으로 보고 -1, +1, *2 세 가지 이동을 간선으로 생각하면
// 그냥 BFS 최단거리 문제가 된다. 범위를 벗어나지 않게 0~100000으로
// 제한하고 방문 배열로 중복 방문만 막아주면 됨.

function solve(lines) {
  const [n, k] = lines[0].trim().split(' ').map(Number);
  const LIMIT = 100000;

  if (n >= k) {
    return String(n - k);
  }

  const visited = new Array(LIMIT + 1).fill(false);
  const queue = [n];
  visited[n] = true;
  let time = 0;

  while (queue.length > 0) {
    const size = queue.length;

    for (let i = 0; i < size; i++) {
      const pos = queue.shift();
      if (pos === k) {
        return String(time);
      }

      const next = [pos - 1, pos + 1, pos * 2];
      for (const nextPos of next) {
        if (nextPos >= 0 && nextPos <= LIMIT && !visited[nextPos]) {
          visited[nextPos] = true;
          queue.push(nextPos);
        }
      }
    }

    time++;
  }

  return String(time);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
