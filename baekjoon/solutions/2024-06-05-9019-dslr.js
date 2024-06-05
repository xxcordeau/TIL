// https://www.acmicpc.net/problem/9019
// DSLR
//
// 0000~9999를 정점으로 보고 D,S,L,R 네 연산을 간선으로 생각하면
// BFS 최단경로 문제가 된다. 각 상태까지 어떤 연산을 거쳐왔는지
// 문자열로 같이 들고 다니면 마지막에 바로 정답 경로를 얻을 수 있다.

function applyOp(op, n) {
  const s = String(n).padStart(4, '0');

  if (op === 'D') return (n * 2) % 10000;
  if (op === 'S') return n === 0 ? 9999 : n - 1;
  if (op === 'L') return Number(s.slice(1) + s[0]);
  return Number(s[3] + s.slice(0, 3)); // R
}

function bfs(a, b) {
  if (a === b) return '';

  const visited = new Array(10000).fill(false);
  const path = new Array(10000).fill('');
  const queue = [a];
  visited[a] = true;

  while (queue.length > 0) {
    const cur = queue.shift();

    for (const op of ['D', 'S', 'L', 'R']) {
      const next = applyOp(op, cur);
      if (!visited[next]) {
        visited[next] = true;
        path[next] = path[cur] + op;
        if (next === b) return path[next];
        queue.push(next);
      }
    }
  }

  return '';
}

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number);
    result.push(bfs(a, b));
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
