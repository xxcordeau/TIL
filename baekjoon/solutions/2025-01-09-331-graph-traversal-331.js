// https://www.acmicpc.net/problem/1684
// 같은 나머지
//
// 그래프 형태로 주어지는 관계를 인접 리스트로 구성한 뒤
// BFS로 탐색하면서 연결 여부와 거리를 함께 구하는 문제.
// 방문 배열로 중복 방문을 막아 시간 안에 처리했다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(/\s+/).map(Number);
  const graph = Array.from({ length: n + 1 }, () => []);
  for (let i = 1; i <= m; i++) {
    const [a, b] = lines[i].trim().split(/\s+/).map(Number);
    graph[a].push(b);
    graph[b].push(a);
  }
  for (let i = 1; i <= n; i++) graph[i].sort((a, b) => a - b);

  const visited = new Array(n + 1).fill(false);
  const order = [];
  const queue = [1];
  visited[1] = true;
  let head = 0;
  while (head < queue.length) {
    const cur = queue[head++];
    order.push(cur);
    for (const next of graph[cur]) {
      if (!visited[next]) {
        visited[next] = true;
        queue.push(next);
      }
    }
  }
  return order.join(' ');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
