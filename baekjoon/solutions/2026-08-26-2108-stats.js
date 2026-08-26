// https://www.acmicpc.net/problem/2108
// 통계학
//
// 산술평균, 중앙값, 최빈값, 범위를 구하는 문제다.
// 최빈값이 여러 개면 두 번째로 작은 값을 출력해야 하는 게 함정.
// 정렬 후 빈도 계산해서 각 항목을 순서대로 출력하면 된다.
// 평균은 반올림, 나머지는 그냥 정수 처리.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const nums = [];
  for (let i = 1; i <= n; i++) {
    nums.push(parseInt(lines[i].trim(), 10));
  }
  nums.sort((a, b) => a - b);

  // 산술평균 (반올림)
  const mean = Math.round(nums.reduce((s, v) => s + v, 0) / n);

  // 중앙값
  const median = nums[Math.floor(n / 2)];

  // 최빈값
  const freq = {};
  for (const v of nums) freq[v] = (freq[v] || 0) + 1;
  const maxFreq = Math.max(...Object.values(freq));
  const modes = Object.keys(freq)
    .filter(k => freq[k] === maxFreq)
    .map(Number)
    .sort((a, b) => a - b);
  const mode = modes.length > 1 ? modes[1] : modes[0];

  // 범위
  const range = nums[n - 1] - nums[0];

  return `${mean}\n${median}\n${mode}\n${range}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
