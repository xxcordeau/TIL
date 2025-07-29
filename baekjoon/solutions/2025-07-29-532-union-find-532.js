// https://www.acmicpc.net/problem/2697
// 다음수 구하기
//
// 여러 원소들이 같은 집합인지 반복해서 물어보는 문제라
// 유니온 파인드(서로소 집합)로 각 연산을 처리했다.
// 경로 압축을 적용해서 find 연산이 느려지지 않도록 했다.

function solve(lines) {
  const [n, m] = lines[0].trim().split(/\s+/).map(Number);
  const parent = new Array(n + 1);
  for (let i = 0; i <= n; i++) parent[i] = i;

  function find(x) {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  function union(a, b) {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[ra] = rb;
  }

  const results = [];
  for (let i = 1; i <= m; i++) {
    const [op, a, b] = lines[i].trim().split(/\s+/).map(Number);
    if (op === 0) {
      union(a, b);
    } else {
      results.push(find(a) === find(b) ? 'YES' : 'NO');
    }
  }
  return results.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
