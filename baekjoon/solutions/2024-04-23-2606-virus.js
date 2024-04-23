// https://www.acmicpc.net/problem/2606
// 바이러스
//
// 1번 정점에서 DFS(또는 BFS)로 갈 수 있는 정점을 다 방문 표시하고,
// 1번 자신을 뺀 방문한 정점 개수를 세면 감염된 컴퓨터 수가 된다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const m = Number(lines[1].trim());
  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 0; i < m; i++) {
    const [a, b] = lines[2 + i].trim().split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Array(n + 1).fill(false);
  const queue = [1];
  visited[1] = true;
  let count = 0;

  while (queue.length > 0) {
    const node = queue.shift();
    for (const next of graph[node]) {
      if (!visited[next]) {
        visited[next] = true;
        count++;
        queue.push(next);
      }
    }
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
