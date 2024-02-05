// https://www.acmicpc.net/problem/1008
// A/B
//
// 실수 나눗셈 결과를 출력해야 하는데, 이 문제는 절대/상대 오차
// 10^-9까지 허용하는 스페셜 저지라서 소수점 아래 9자리까지 고정해서
// 찍어주면 안전하다.

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ').map(Number);
  return (a / b).toFixed(9);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
