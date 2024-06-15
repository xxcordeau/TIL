// https://www.acmicpc.net/problem/10952
// A+B - 4
//
// a b가 계속 주어지다가 0 0이 나오면 종료. 0 0 나오기 전까지
// 각 줄의 합을 출력하면 됨.

function solve(lines) {
  const result = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const [a, b] = line.split(' ').map(Number);
    if (a === 0 && b === 0) break;
    result.push(a + b);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
