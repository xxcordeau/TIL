// https://www.acmicpc.net/problem/1010
// 다리 놓기
//
// 겹치지 않게 다리를 놓는 경우의 수는 결국 M개 중 N개를 순서
// 상관없이 고르는 조합의 수와 같다는 게 이 문제의 핵심 관찰. 그냥
// 조합 공식 C(M, N)을 계산하면 됨.

function combination(m, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result = (result * (m - i)) / (i + 1);
  }
  return Math.round(result);
}

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const [n, m] = lines[i].trim().split(' ').map(Number);
    result.push(combination(m, n));
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
