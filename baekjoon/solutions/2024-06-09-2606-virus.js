// https://www.acmicpc.net/problem/2606
// 바이러스
//
// 컴퓨터를 노드, 연결을 간선으로 하는 그래프에서 1번 컴퓨터부터
// BFS(또는 DFS)를 돌려서 방문한 컴퓨터 수를 세면 됨. 1번 자기 자신은
// 감염된 컴퓨터 수에 포함하지 않으니 방문 수에서 1을 빼서 출력.

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
  visited[1] = true;
  const queue = [1];
  let count = 0;

  while (queue.length > 0) {
    const cur = queue.shift();
    for (const next of graph[cur]) {
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
