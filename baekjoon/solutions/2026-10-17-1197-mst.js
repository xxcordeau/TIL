// https://www.acmicpc.net/problem/1197
// 최소 스패닝 트리
//
// 크루스칼 알고리즘으로 MST를 구한다.
// 간선을 가중치 기준으로 정렬한 뒤, Union-Find로 사이클 없이 연결한다.

function solve(lines) {
  const [V, E] = lines[0].trim().split(' ').map(Number);
  const edges = [];
  for (let i = 1; i <= E; i++) {
    const [a, b, c] = lines[i].trim().split(' ').map(Number);
    edges.push([c, a, b]);
  }
  edges.sort((a, b) => a[0] - b[0]);

  const parent = Array.from({ length: V + 1 }, (_, i) => i);
  const find = (x) => parent[x] === x ? x : (parent[x] = find(parent[x]));
  const union = (x, y) => { parent[find(x)] = find(y); };

  let total = 0;
  for (const [w, a, b] of edges) {
    if (find(a) !== find(b)) {
      union(a, b);
      total += w;
    }
  }

  return total;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}