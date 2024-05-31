// https://www.acmicpc.net/problem/1074
// Z
//
// 사분면을 재귀적으로 나눠서, 목표 좌표가 어느 사분면에 속하는지
// 확인한 다음 그 사분면 앞에 있는 사분면들의 전체 칸 수(quadrantSize
// * 사분면번호)를 더하고, 나머지는 그 사분면 내부에서 좌표를
// 상대좌표로 바꿔서 재귀적으로 계속 찾아 들어간다.

function z(n, r, c) {
  if (n === 0) return 0;

  const half = 1 << (n - 1);
  const quadrantSize = half * half;

  if (r < half && c < half) return z(n - 1, r, c);
  if (r < half && c >= half) return quadrantSize + z(n - 1, r, c - half);
  if (r >= half && c < half) return quadrantSize * 2 + z(n - 1, r - half, c);
  return quadrantSize * 3 + z(n - 1, r - half, c - half);
}

function solve(lines) {
  const [n, r, c] = lines[0].trim().split(' ').map(Number);
  return String(z(n, r, c));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
