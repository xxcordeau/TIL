// https://www.acmicpc.net/problem/2920
// 음계
//
// 8개의 수가 주어졌을 때 1,2,...,8 순서로 오름차순이면 ascending,
// 8,7,...,1 순서로 내림차순이면 descending, 둘 다 아니면 mixed를
// 출력하면 됨. 그냥 배열이 [1..8]인지 [8..1]인지 비교하면 끝.

function solve(lines) {
  const nums = lines[0].trim().split(' ').map(Number);
  const asc = [1, 2, 3, 4, 5, 6, 7, 8];
  const desc = [8, 7, 6, 5, 4, 3, 2, 1];

  const isAsc = nums.every((v, i) => v === asc[i]);
  const isDesc = nums.every((v, i) => v === desc[i]);

  if (isAsc) return 'ascending';
  if (isDesc) return 'descending';
  return 'mixed';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
