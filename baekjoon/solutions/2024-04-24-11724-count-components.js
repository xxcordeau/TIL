// https://www.acmicpc.net/problem/11724
// 연결 요소의 개수
//
// 아직 방문 안 한 정점을 하나 찾을 때마다 그 정점에서 BFS로 갈 수
// 있는 곳을 전부 방문 처리하고 컴포넌트 개수를 하나 늘리는 식으로
// 반복.

function solve(lines) {
  const [n, m] = lines[0].trim().split(' ').map(Number);
  const graph = Array.from({ length: n + 1 }, () => []);

  for (let i = 1; i <= m; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }

  const visited = new Array(n + 1).fill(false);
  let components = 0;

  for (let start = 1; start <= n; start++) {
    if (visited[start]) continue;

    components++;
    const queue = [start];
    visited[start] = true;

    while (queue.length > 0) {
      const node = queue.shift();
      for (const next of graph[node]) {
        if (!visited[next]) {
          visited[next] = true;
          queue.push(next);
        }
      }
    }
  }

  return String(components);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
