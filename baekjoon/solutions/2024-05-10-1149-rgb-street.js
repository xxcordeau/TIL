// https://www.acmicpc.net/problem/1149
// RGB거리
//
// i번째 집을 특정 색으로 칠하는 최소 비용은, 그 색의 비용 + 바로
// 전 집을 "다른 두 색 중 더 싼 쪽"으로 칠했을 때의 최소 비용을
// 더한 값이다. 이걸 각 색마다 갱신해나가는 DP.

function solve(lines) {
  const n = Number(lines[0].trim());
  const costs = lines.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));

  let [r, g, b] = costs[0];

  for (let i = 1; i < n; i++) {
    const [cr, cg, cb] = costs[i];
    const nr = cr + Math.min(g, b);
    const ng = cg + Math.min(r, b);
    const nb = cb + Math.min(r, g);
    r = nr;
    g = ng;
    b = nb;
  }

  return String(Math.min(r, g, b));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
