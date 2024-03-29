// https://www.acmicpc.net/problem/1075
// 나누기
//
// 일의 자리를 지운 "밑수"에 0~9를 하나씩 붙여보면서 T의 배수가
// 되는 후보들을 만들고, 그 중 원래 N과 차이가 가장 작은 값을
// 찾으면 됨.

function solve(lines) {
  const [n, t] = lines[0].trim().split(' ').map(Number);
  const base = n - (n % 10);

  let minDiff = Infinity;

  for (let d = 0; d <= 9; d++) {
    const candidate = base + d;
    if (candidate % t === 0) {
      minDiff = Math.min(minDiff, Math.abs(n - candidate));
    }
  }

  return String(minDiff);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
