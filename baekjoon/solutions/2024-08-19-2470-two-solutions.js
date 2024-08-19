// https://www.acmicpc.net/problem/2470
// 두 용액
//
// 정렬해두고 양 끝에서 투 포인터로 좁혀가면서 두 값의 합의 절댓값이
// 가장 작아지는 조합을 찾는다. 합이 0보다 크면 오른쪽(큰 값)을 줄이고,
// 0보다 작으면 왼쪽(작은 값)을 늘리는 식으로 움직이면 전체를 한 번만 훑는다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const arr = lines[1].trim().split(' ').map(Number).sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  let best = Infinity;
  let bestPair = [arr[0], arr[n - 1]];

  while (left < right) {
    const sum = arr[left] + arr[right];
    const abs = Math.abs(sum);
    if (abs < best) {
      best = abs;
      bestPair = [arr[left], arr[right]];
    }
    if (sum === 0) break;
    if (sum < 0) left++;
    else right--;
  }

  return `${bestPair[0]} ${bestPair[1]}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
