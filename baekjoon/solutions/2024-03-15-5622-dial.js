// https://www.acmicpc.net/problem/5622
// 다이얼
//
// 알파벳마다 대응하는 다이얼 숫자를 표로 만들어두고, 이름의 각 글자를
// 표에서 찾아 (숫자+1)초씩 더해주면 됨.

function solve(lines) {
  const groups = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ'];
  const dialNumber = {};

  groups.forEach((group, i) => {
    for (const char of group) {
      dialNumber[char] = i + 2;
    }
  });

  const name = lines[0].trim();
  let total = 0;

  for (const char of name) {
    total += dialNumber[char] + 1;
  }

  return String(total);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
