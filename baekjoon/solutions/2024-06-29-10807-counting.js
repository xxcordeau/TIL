// https://www.acmicpc.net/problem/10807
// 개수 세기
//
// N개의 정수 중에서 V가 몇 번 나오는지 세는 문제. filter로
// 바로 세면 됨.

function solve(lines) {
  const nums = lines[1].trim().split(' ').map(Number);
  const v = Number(lines[2].trim());

  return String(nums.filter((x) => x === v).length);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
