// https://www.acmicpc.net/problem/2775
// 부녀회장이 될테야
//
// apt(0, n) = n (0층 n호에는 n명이 산다), apt(k, 1) = 1
// (모든 층 1호는 1명), apt(k, n) = apt(k-1, 1) + ... + apt(k-1, n)
// 규칙 그대로 아래층부터 채워나가는 DP. k, n 모두 최대 14라
// 테이블을 통째로 만들어도 충분히 빠름.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let tc = 1; tc <= t; tc++) {
    const k = Number(lines[tc * 2 - 1].trim());
    const n = Number(lines[tc * 2].trim());

    const table = Array.from({ length: k + 1 }, () => new Array(n + 1).fill(0));
    for (let j = 1; j <= n; j++) table[0][j] = j;

    for (let i = 1; i <= k; i++) {
      table[i][1] = 1;
      for (let j = 2; j <= n; j++) {
        table[i][j] = table[i][j - 1] + table[i - 1][j];
      }
    }

    result.push(table[k][n]);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
