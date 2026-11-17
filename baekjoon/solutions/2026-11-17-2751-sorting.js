// https://www.acmicpc.net/problem/2751
// 수 정렬하기 2
//
// N개의 수를 오름차순으로 정렬한다. N이 최대 1,000,000이라 O(N log N)이 필요하다.
// JS 내장 sort는 Timsort라서 충분히 빠르다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const nums = [];
  for (let i = 1; i <= n; i++) nums.push(parseInt(lines[i].trim(), 10));
  nums.sort((a, b) => a - b);
  return nums.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}