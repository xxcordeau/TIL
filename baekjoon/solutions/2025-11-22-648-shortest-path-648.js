// https://www.acmicpc.net/problem/3187
// 양치기 꿍
//
// 가중치가 있는 그래프에서 한 정점으로부터의 최단 거리를
// 구하는 문제라 다익스트라 알고리즘을 사용했다.
// 우선순위 큐 대신 간단히 배열에서 최솟값을 찾는 방식으로
// 구현했다.

function solve(lines) {
  const [v, e] = lines[0].trim().split(/\s+/).map(Number);
  const start = parseInt(lines[1].trim(), 10);
  const graph = Array.from({ length: v + 1 }, () => []);
  for (let i = 0; i < e; i++) {
    const [a, b, w] = lines[2 + i].trim().split(/\s+/).map(Number);
    graph[a].push([b, w]);
  }

  const INF = Infinity;
  const dist = new Array(v + 1).fill(INF);
  const visited = new Array(v + 1).fill(false);
  dist[start] = 0;

  for (let i = 0; i < v; i++) {
    let cur = -1;
    let best = INF;
    for (let j = 1; j <= v; j++) {
      if (!visited[j] && dist[j] < best) {
        best = dist[j];
        cur = j;
      }
    }
    if (cur === -1) break;
    visited[cur] = true;
    for (const [next, w] of graph[cur]) {
      if (dist[cur] + w < dist[next]) {
        dist[next] = dist[cur] + w;
      }
    }
  }

  const out = [];
  for (let i = 1; i <= v; i++) {
    out.push(dist[i] === INF ? 'INF' : dist[i]);
  }
  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
