// https://www.acmicpc.net/problem/2864
// 5와 6의 차이
//
// 최솟값을 만들려면 모든 6을 5로, 최댓값을 만들려면 모든 5를 6으로
// 바꾼 다음 두 수를 각각 더하면 됨.

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ');

  const toMin = (s) => Number(s.split('').map((c) => (c === '6' ? '5' : c)).join(''));
  const toMax = (s) => Number(s.split('').map((c) => (c === '5' ? '6' : c)).join(''));

  const min = toMin(a) + toMin(b);
  const max = toMax(a) + toMax(b);

  return `${min} ${max}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
