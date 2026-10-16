// https://www.acmicpc.net/problem/11724
// 연결 요소의 개수
//
// 방향 없는 그래프에서 연결된 덩어리가 몇 개인지 세는 문제.
// 방문 안 한 노드마다 BFS/DFS를 시작하면 그게 하나의 연결 요소다.

function solve(lines) {
  const [N, M] = lines[0].trim().split(' ').map(Number);
  const graph = Array.from({ length: N + 1 }, () => []);

  for (let i = 1; i <= M; i++) {
    const [u, v] = lines[i].trim().split(' ').map(Number);
    graph[u].push(v);
    graph[v].push(u);
  }

  const visited = new Array(N + 1).fill(false);
  let count = 0;

  for (let i = 1; i <= N; i++) {
    if (!visited[i]) {
      count++;
      const queue = [i];
      visited[i] = true;
      while (queue.length > 0) {
        const cur = queue.shift();
        for (const next of graph[cur]) {
          if (!visited[next]) {
            visited[next] = true;
            queue.push(next);
          }
        }
      }
    }
  }

  return count;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}