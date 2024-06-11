// https://www.acmicpc.net/problem/2914
// 저작권
//
// 문장 S와 반복 횟수 N이 주어지면 S를 N번 반복해서 한 줄씩 출력.
// 별거 없고 그냥 반복문 돌리면서 출력하면 됨.

function solve(lines) {
  const s = lines[0].replace(/\r$/, '');
  const n = Number(lines[1].trim());
  const result = [];

  for (let i = 0; i < n; i++) {
    result.push(s);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
