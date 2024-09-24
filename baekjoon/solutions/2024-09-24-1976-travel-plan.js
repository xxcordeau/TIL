// https://www.acmicpc.net/problem/1976
// 여행가자
//
// 도시 간 연결 관계를 유니온 파인드로 묶어두고, 여행 계획에 있는
// 도시들이 전부 같은 집합에 속하는지만 확인하면 되는 문제. 인접
// 행렬을 훑으면서 연결된 도시끼리 union 해주고, 계획에 있는 도시를
// 하나씩 find해서 대표 원소가 다 같은지 검사했다.

function solve(lines) {
  let idx = 0;
  const n = Number(lines[idx++].trim());
  const m = Number(lines[idx++].trim());

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

  for (let i = 1; i <= n; i++) {
    const row = lines[idx++].trim().split(' ').map(Number);
    for (let j = 0; j < n; j++) {
      if (row[j] === 1) union(i, j + 1);
    }
  }

  const plan = lines[idx++].trim().split(' ').map(Number);
  const rep = find(plan[0]);
  let possible = true;
  for (const city of plan) {
    if (find(city) !== rep) possible = false;
  }

  return possible ? 'YES' : 'NO';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
