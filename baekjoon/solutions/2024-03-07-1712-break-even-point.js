// https://www.acmicpc.net/problem/1712
// 손익분기점
//
// 판매가가 개당 비용보다 작거나 같으면 아무리 팔아도 손익분기점을
// 못 넘기니까 -1. 그 외에는 A / (C-B) 를 계산해서 그보다 큰 최소
// 정수를 구하면 됨 (딱 나누어떨어지면 +1개 더 팔아야 초과).

function solve(lines) {
  const [a, b, c] = lines[0].trim().split(' ').map(Number);

  if (c <= b) {
    return '-1';
  }

  const raw = a / (c - b);
  const count = Number.isInteger(raw) ? raw + 1 : Math.ceil(raw);

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
