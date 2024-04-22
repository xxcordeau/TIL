// https://www.acmicpc.net/problem/1260
// DFS와 BFS
//
// 인접 리스트를 만들 때 각 정점의 이웃을 오름차순으로 정렬해두면,
// 방문할 때 항상 번호가 작은 정점을 먼저 보게 되어 문제 조건을
// 자연스럽게 만족한다. DFS는 재귀로, BFS는 큐로 각각 구현.

function solve(lines) {
  const [n, m, v] = lines[0].trim().split(' ').map(Number);
  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i <= m; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  for (let i = 1; i <= n; i++) {
    graph[i].sort((a, b) => a - b);
  }

  const dfsResult = [];
  const dfsVisited = new Array(n + 1).fill(false);

  function dfs(node) {
    dfsVisited[node] = true;
    dfsResult.push(node);
    for (const next of graph[node]) {
      if (!dfsVisited[next]) dfs(next);
    }
  }
  dfs(v);

  const bfsResult = [];
  const bfsVisited = new Array(n + 1).fill(false);
  const queue = [v];
  bfsVisited[v] = true;

  while (queue.length > 0) {
    const node = queue.shift();
    bfsResult.push(node);
    for (const next of graph[node]) {
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
