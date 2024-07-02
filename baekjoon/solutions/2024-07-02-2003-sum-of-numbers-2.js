// https://www.acmicpc.net/problem/2003
// 수들의 합 2
//
// 연속된 구간의 합이 M이 되는 경우의 수를 구하는 문제. 투 포인터로
// 오른쪽 끝을 늘려가면서 구간합이 M보다 커지면 왼쪽 끝을 줄이는
// 방식으로 O(N)에 처리.

function solve(lines) {
  const [, m] = lines[0].trim().split(' ').map(Number);
  const nums = lines[1].trim().split(' ').map(Number);

  let left = 0;
  let sum = 0;
  let count = 0;

  for (let right = 0; right < nums.length; right++) {
    sum += nums[right];

    while (sum > m && left <= right) {
      sum -= nums[left];
      left++;
    }

    if (sum === m) count++;
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
