// https://www.acmicpc.net/problem/2577
// 숫자의 개수
//
// 세 수를 곱한 다음 문자열로 바꿔서 각 자리 숫자를 세면 됨. 결과값에
// 없는 숫자는 0으로 나와야 하니까 0~9 카운트 배열을 미리 만들어두고
// 시작.

function solve(lines) {
  const a = Number(lines[0].trim());
  const b = Number(lines[1].trim());
  const c = Number(lines[2].trim());

  const product = String(a * b * c);
  const counts = new Array(10).fill(0);

  for (const char of product) {
    counts[Number(char)]++;
  }

  return counts.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
