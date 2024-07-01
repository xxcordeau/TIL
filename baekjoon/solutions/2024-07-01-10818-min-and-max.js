// https://www.acmicpc.net/problem/10818
// 최소, 최대
//
// N개의 정수 중 최솟값과 최댓값을 찾아서 출력. Math.min/max에
// 스프레드로 넘기면 한 줄로 끝남.

function solve(lines) {
  const nums = lines[1].trim().split(' ').map(Number);
  return `${Math.min(...nums)} ${Math.max(...nums)}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
