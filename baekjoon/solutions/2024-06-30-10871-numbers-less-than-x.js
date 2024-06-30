// https://www.acmicpc.net/problem/10871
// X보다 작은 수
//
// N개의 수 중 X보다 작은 수만 순서대로 골라 출력. filter 후
// 공백으로 이어붙이면 됨.

function solve(lines) {
  const [, x] = lines[0].trim().split(' ').map(Number);
  const nums = lines[1].trim().split(' ').map(Number);

  return nums.filter((n) => n < x).join(' ');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
