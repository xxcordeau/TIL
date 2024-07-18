// https://www.acmicpc.net/problem/11403
// 경로 찾기
//
// 정점 개수가 100개밖에 안 되니까 플로이드-워셜을 그냥 돌리면 된다.
// i에서 j로 가는 간선이 있으면 reach[i][j]=1로 시작하고, 경유지 k를
// 하나씩 늘려가면서 reach[i][k]와 reach[k][j]가 둘 다 참이면
// reach[i][j]도 참으로 갱신.

function solve(lines) {
  let idx = 0;
  const n = Number(lines[idx++].trim());
  const reach = [];

  for (let i = 0; i < n; i++) {
    reach.push(lines[idx++].trim().split(' ').map(Number));
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      if (!reach[i][k]) continue;
      for (let j = 0; j < n; j++) {
        if (reach[k][j]) reach[i][j] = 1;
      }
    }
  }

  return reach.map((row) => row.join(' ')).join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
