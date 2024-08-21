// https://www.acmicpc.net/problem/2108
// 통계학
//
// 산술평균, 중앙값, 최빈값, 범위 네 개를 각각 구하면 되는데
// 최빈값이 좀 까다롭다. 가장 많이 나온 값이 여러 개면 그중 두 번째로
// 작은 값을 출력해야 한다는 조건이 있어서, 빈도수 기준으로 정렬한 뒤
// 최빈값 후보들을 모아서 두 번째 걸 골라야 한다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const arr = [];
  for (let i = 1; i <= n; i++) arr.push(Number(lines[i].trim()));

  const sorted = [...arr].sort((a, b) => a - b);

  // 산술평균 (반올림)
  const sum = arr.reduce((a, b) => a + b, 0);
  const mean = Math.round(sum / n);

  // 중앙값
  const median = sorted[Math.floor((n - 1) / 2)];

  // 최빈값
  const freq = new Map();
  for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1);
  const maxFreq = Math.max(...freq.values());
  const modes = [...freq.keys()].filter((k) => freq.get(k) === maxFreq).sort((a, b) => a - b);
  const mode = modes.length === 1 ? modes[0] : modes[1];

  // 범위
  const range = sorted[n - 1] - sorted[0];

  return `${mean}\n${median}\n${mode}\n${range}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
