// https://www.acmicpc.net/problem/3052
// 나머지
//
// 10개 수를 42로 나눈 나머지를 각각 구해서 Set에 넣으면 중복이
// 자동으로 제거되니까 Set 크기만 출력하면 됨.

function solve(lines) {
  const remainders = new Set();

  for (let i = 0; i < 10; i++) {
    const num = Number(lines[i].trim());
    remainders.add(((num % 42) + 42) % 42);
  }

  return String(remainders.size);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
