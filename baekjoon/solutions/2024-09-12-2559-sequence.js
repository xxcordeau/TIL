// https://www.acmicpc.net/problem/2559
// 수열
//
// K일 동안의 온도 변화량 합 중 최댓값을 구하는 문제라 슬라이딩 윈도우로
// 풀면 된다. 처음 K개의 합을 구해두고, 한 칸씩 옮길 때마다 빠지는
// 값을 빼고 새로 들어오는 값을 더해서 최댓값을 갱신한다.

function solve(lines) {
  const [n, k] = lines[0].trim().split(' ').map(Number);
  const temps = lines[1].trim().split(' ').map(Number);

  let windowSum = 0;
  for (let i = 0; i < k; i++) windowSum += temps[i];

  let maxSum = windowSum;
  for (let i = k; i < n; i++) {
    windowSum += temps[i] - temps[i - k];
    if (windowSum > maxSum) maxSum = windowSum;
  }

  return String(maxSum);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
