// https://www.acmicpc.net/problem/11404
// 플로이드
//
// 모든 도시 쌍 간의 최솟값을 플로이드-워셜로 구한다.
// 3중 루프로 경유지 k를 거치는 경우를 전부 확인한다.
// 같은 출발/도착 도시 간 비용은 0으로 처리.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const m = parseInt(lines[1].trim(), 10);
  const INF = 1e9;
  const dist = Array.from({ length: n + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (__, j) => (i === j ? 0 : INF))
  );

  for (let i = 2; i < 2 + m; i++) {
    const [a, b, c] = lines[i].trim().split(' ').map(Number);
    dist[a][b] = Math.min(dist[a][b], c);
  }

  for (let k = 1; k <= n; k++)
    for (let i = 1; i <= n; i++)
      for (let j = 1; j <= n; j++)
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);

  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(dist[i].slice(1).map(v => v === INF ? 0 : v).join(' '));
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}