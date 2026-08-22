// https://www.acmicpc.net/problem/1717
// 집합의 표현
//
// 유니온 파인드의 기본 형태 그대로인 문제다. 연산이 0이면 두 원소가
// 속한 집합을 합치고, 1이면 두 원소의 대표 원소가 같은지 비교해서
// 같은 집합인지 판단하면 된다. 경로 압축을 넣어야 n, m이 커져도
// 시간 내에 처리된다.

function solve(lines) {
  let idx = 0;
  const [n, m] = lines[idx++].trim().split(' ').map(Number);

  const parent = Array.from({ length: n + 1 }, (_, i) => i);

  function find(x) {
    if (parent[x] !== x) parent[x] = find(parent[x]);
    return parent[x];
  }

  function union(a, b) {
    const ra = find(a);
    const rb = find(b);
    if (ra !== rb) parent[ra] = rb;
  }

  const out = [];

  for (let i = 0; i < m; i++) {
    const [op, a, b] = lines[idx++].trim().split(' ').map(Number);
    if (op === 0) {
      union(a, b);
    } else {
      out.push(find(a) === find(b) ? 'YES' : 'NO');
    }
  }

  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
