// https://www.acmicpc.net/problem/11727
// 2×n 타일링 2
//
// 2×n 직사각형을 1×2, 2×1, 2×2 타일로 채우는 방법의 수.
// 맨 오른쪽에 세로로 선 1×2 타일 하나를 붙이면 2×(n-1) 채우는
// 방법 수만큼, 가로로 누운 2×1 타일 두 개 혹은 2×2 타일 하나를
// 붙이면 2×(n-2) 채우는 방법 수의 두 배만큼 경우가 생긴다.
// 즉 d[n] = d[n-1] + 2*d[n-2], 10007로 나눈 나머지를 출력한다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const MOD = 10007;

  if (n === 1) return '1';

  const d = [0, 1, 3];
  for (let i = 3; i <= n; i++) {
    d[i] = (d[i - 1] + 2 * d[i - 2]) % MOD;
  }

  return String(d[n]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
