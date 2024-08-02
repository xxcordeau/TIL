// https://www.acmicpc.net/problem/2740
// 행렬 곱셈
//
// N*M 행렬 A와 M*K 행렬 B가 주어지면 곱은 N*K 행렬이 된다.
// 결과 행렬의 (i, j) 원소는 A의 i번째 행과 B의 j번째 열을
// 내적한 값이므로 삼중 반복문으로 그대로 계산하면 된다.

function solve(lines) {
  let idx = 0;
  const [n, m] = lines[idx++].trim().split(' ').map(Number);
  const a = [];
  for (let i = 0; i < n; i++) {
    a.push(lines[idx++].trim().split(' ').map(Number));
  }
  const [m2, k] = lines[idx++].trim().split(' ').map(Number);
  const b = [];
  for (let i = 0; i < m2; i++) {
    b.push(lines[idx++].trim().split(' ').map(Number));
  }

  const result = [];
  for (let i = 0; i < n; i++) {
    const row = [];
    for (let j = 0; j < k; j++) {
      let sum = 0;
      for (let t = 0; t < m; t++) {
        sum += a[i][t] * b[t][j];
      }
      row.push(sum);
    }
    result.push(row.join(' '));
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
