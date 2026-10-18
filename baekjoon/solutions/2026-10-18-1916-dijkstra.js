// https://www.acmicpc.net/problem/1916
// 최소비용 구하기
//
// 다익스트라 알고리즘으로 출발 도시에서 도착 도시까지의 최소 비용을 구한다.
// 우선순위 큐 대신 배열 기반으로 구현했다. N이 최대 1000이라 O(N^2)도 통과된다.

function solve(lines) {
  const N = parseInt(lines[0].trim(), 10);
  const M = parseInt(lines[1].trim(), 10);
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 2; i < 2 + M; i++) {
    const [u, v, w] = lines[i].trim().split(' ').map(Number);
    graph[u].push([v, w]);
  }

  const [start, end] = lines[2 + M].trim().split(' ').map(Number);
  const INF = Infinity;
  const dist = new Array(N + 1).fill(INF);
  const visited = new Array(N + 1).fill(false);
  dist[start] = 0;

  for (let i = 0; i < N; i++) {
    let u = -1;
    for (let j = 1; j <= N; j++) {
      if (!visited[j] && (u === -1 || dist[j] < dist[u])) u = j;
    }
    if (u === -1 || dist[u] === INF) break;
    visited[u] = true;
    for (const [v, w] of graph[u]) {
      if (dist[u] + w < dist[v]) dist[v] = dist[u] + w;
    }
  }

  return dist[end];
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}