// https://www.acmicpc.net/problem/10950
// A+B - 3
//
// 11021이랑 거의 같은데 "Case #x:" 접두어 없이 그냥 결과값만 출력하면
// 되는 버전.

function solve(lines) {
  const t = Number(lines[0].trim());
  const result = [];

  for (let i = 1; i <= t; i++) {
    const [a, b] = lines[i].trim().split(' ').map(Number);
    result.push(a + b);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
