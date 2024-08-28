// https://www.acmicpc.net/problem/2217
// 로프
//
// 로프 k개를 동시에 쓰면 각 로프가 버틸 수 있는 최대 무게 중
// 가장 약한 로프 기준으로 무게가 나눠서 걸리기 때문에,
// 그 로프의 하중 * k가 그 조합으로 들 수 있는 최대 중량이 된다.
// 로프를 무게 내림차순으로 정렬해두면, 앞에서부터 몇 개를 쓸지
// 하나씩 늘려가며 (그 시점 로프 무게) * (사용 개수)의 최댓값을 구하면 된다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const weights = [];
  for (let i = 1; i <= n; i++) weights.push(Number(lines[i].trim()));

  weights.sort((a, b) => b - a);

  let best = 0;
  for (let i = 0; i < n; i++) {
    best = Math.max(best, weights[i] * (i + 1));
  }

  return String(best);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
