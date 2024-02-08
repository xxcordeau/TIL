// https://www.acmicpc.net/problem/2741
// N 찍기
//
// 1부터 N까지 그냥 순서대로 출력. N이 10만까지 갈 수 있어서 매번
// console.log 하지 않고 배열에 모았다가 한 번에 join해서 출력하는 게
// 훨씬 빠르다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(i);
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
