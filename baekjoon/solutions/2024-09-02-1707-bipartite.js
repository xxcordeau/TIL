// https://www.acmicpc.net/problem/1707
// 이분 그래프
//
// 이분 그래프인지 확인하는 건 결국 인접한 정점끼리 다른 색으로 칠할
// 수 있는지 확인하는 것과 같다. BFS로 색을 번갈아 칠하면서 이미 칠한
// 인접 정점의 색이 같으면 이분 그래프가 아니다. 그래프가 여러 개의
// 연결 요소로 나뉠 수 있으니 안 칠해진 정점마다 새로 BFS를 시작한다.

function solve(lines) {
  let idx = 0;
  const k = Number(lines[idx++].trim());
  const results = [];

  for (let t = 0; t < k; t++) {
    const [v, e] = lines[idx++].trim().split(' ').map(Number);
    const adj = Array.from({ length: v + 1 }, () => []);

    for (let i = 0; i < e; i++) {
      const [a, b] = lines[idx++].trim().split(' ').map(Number);
      adj[a].push(b);
      adj[b].push(a);
    }

    const color = new Array(v + 1).fill(-1);
    let bipartite = true;

    for (let start = 1; start <= v && bipartite; start++) {
      if (color[start] !== -1) continue;
      color[start] = 0;
      const queue = [start];

      while (queue.length > 0 && bipartite) {
        const cur = queue.shift();
        for (const next of adj[cur]) {
          if (color[next] === -1) {
            color[next] = 1 - color[cur];
            queue.push(next);
          } else if (color[next] === color[cur]) {
            bipartite = false;
            break;
          }
        }
      }
    }

    results.push(bipartite ? 'YES' : 'NO');
  }

  return results.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
