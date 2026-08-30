// https://www.acmicpc.net/problem/1260
// DFS와 BFS
//
// DFS/BFS 기본 구현 문제. 방문 순서는 번호가 작은 노드부터.
// DFS는 재귀로, BFS는 큐로 구현했다. 인접 리스트를 미리 정렬해두면
// 매번 정렬할 필요 없이 순서대로 방문할 수 있어서 깔끔하다.

function solve(lines) {
  const [N, M, V] = lines[0].trim().split(' ').map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= M; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= N; i++) graph[i].sort((a, b) => a - b);

  const dfsResult = [];
  const dfsVisited = new Array(N + 1).fill(false);
  function dfs(node) {
    dfsVisited[node] = true;
    dfsResult.push(node);
    for (const next of graph[node]) {
      if (!dfsVisited[next]) dfs(next);
    }
  }
  dfs(V);

  const bfsResult = [];
  const bfsVisited = new Array(N + 1).fill(false);
  const queue = [V];
  bfsVisited[V] = true;
  while (queue.length > 0) {
    const cur = queue.shift();
    bfsResult.push(cur);
    for (const next of graph[cur]) {
      if (!bfsVisited[next]) {
        bfsVisited[next] = true;
        queue.push(next);
      }
    }
  }

  return `${dfsResult.join(' ')}\n${bfsResult.join(' ')}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
