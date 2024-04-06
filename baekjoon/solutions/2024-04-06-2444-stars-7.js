// https://www.acmicpc.net/problem/2444
// 별 찍기 - 7
//
// 위쪽 절반은 공백이 줄고 별이 늘어나는 마름모 위쪽, 아래쪽 절반은
// 그 반대. i번째 줄(1..N)의 공백은 (N-i)개, 별은 (2i-1)개로 계산하고,
// 아래쪽은 N-1부터 1까지 같은 식을 거꾸로 적용.

function row(n, i) {
  return ' '.repeat(n - i) + '*'.repeat(2 * i - 1);
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= n; i++) {
    result.push(row(n, i));
  }
  for (let i = n - 1; i >= 1; i--) {
    result.push(row(n, i));
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
