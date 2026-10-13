// https://www.acmicpc.net/problem/1654
// 랜선 자르기
//
// 이진 탐색으로 최대 길이를 찾는 문제.
// mid 길이로 잘랐을 때 N개 이상 나오면 더 길게, 아니면 더 짧게.
// BigInt 없이도 되는데 곱셈 시 오버플로우 주의.

function solve(lines) {
  const [K, N] = lines[0].trim().split(' ').map(Number);
  const cables = [];
  for (let i = 1; i <= K; i++) cables.push(parseInt(lines[i].trim(), 10));

  let lo = 1;
  let hi = Math.max(...cables);

  while (lo < hi) {
    const mid = Math.floor((lo + hi + 1) / 2);
    const count = cables.reduce((s, c) => s + Math.floor(c / mid), 0);
    if (count >= N) lo = mid;
    else hi = mid - 1;
  }

  return lo;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}