// https://www.acmicpc.net/problem/1735
// 분수의 덧셈
//
// 분수 두 개를 더한 다음 기약분수로 만들면 되는 문제. 통분은 그냥
// 분모끼리 곱해서 만들고, 분자는 교차곱해서 더하면 된다. 그 다음
// 분자와 분모의 최대공약수로 나눠주면 기약분수가 완성된다.

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solve(lines) {
  const [a1, a2] = lines[0].trim().split(' ').map(Number);
  const [b1, b2] = lines[1].trim().split(' ').map(Number);

  let num = a1 * b2 + b1 * a2;
  let den = a2 * b2;

  const g = gcd(num, den);
  num /= g;
  den /= g;

  return `${num} ${den}`;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
