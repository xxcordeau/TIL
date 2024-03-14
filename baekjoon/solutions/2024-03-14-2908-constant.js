// https://www.acmicpc.net/problem/2908
// 상수
//
// 세 자리 숫자를 뒤집는 건 문자열로 바꿔서 reverse 해버리면 가장
// 간단하다. 두 개 다 뒤집은 다음 큰 값을 리턴.

function solve(lines) {
  const [a, b] = lines[0].trim().split(' ');
  const reversedA = Number(a.split('').reverse().join(''));
  const reversedB = Number(b.split('').reverse().join(''));
  return String(Math.max(reversedA, reversedB));
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
