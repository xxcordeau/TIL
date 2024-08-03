// https://www.acmicpc.net/problem/2566
// 최댓값
//
// 9x9 배열을 그대로 읽으면서 최댓값과 그 위치(행, 열)를 갱신해두면
// 끝까지 다 읽었을 때 최댓값과 위치가 남는다. 행과 열은 1번부터
// 시작한다는 점만 주의하면 된다.

function solve(lines) {
  let max = -Infinity;
  let row = 0;
  let col = 0;

  for (let i = 0; i < 9; i++) {
    const nums = lines[i].trim().split(' ').map(Number);
    for (let j = 0; j < 9; j++) {
      if (nums[j] > max) {
        max = nums[j];
        row = i + 1;
        col = j + 1;
      }
    }
  }

  return `${max}\n${row} ${col}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
