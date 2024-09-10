// https://www.acmicpc.net/problem/3273
// 두 수의 합
//
// 서로 다른 수들로 이루어진 수열에서 합이 X가 되는 쌍의 개수를 구하는
// 문제. 정렬한 다음 양쪽 끝에서 포인터를 좁혀가면 O(N log N)에 풀 수
// 있다. 합이 X보다 작으면 왼쪽을 오른쪽으로, 크면 오른쪽을 왼쪽으로
// 옮기고, 같으면 카운트하고 양쪽 다 옮긴다.

function solve(lines) {
  let idx = 0;
  const n = Number(lines[idx++].trim());
  const arr = lines[idx++].trim().split(' ').map(Number);
  const x = Number(lines[idx++].trim());

  arr.sort((a, b) => a - b);

  let left = 0;
  let right = n - 1;
  let count = 0;

  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === x) {
      count++;
      left++;
      right--;
    } else if (sum < x) {
      left++;
    } else {
      right--;
    }
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
