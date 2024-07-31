// https://www.acmicpc.net/problem/5086
// 배수와 약수
//
// 두 수 A, B가 0 0으로 끝날 때까지 계속 들어온다. B가 A로 나누어
// 떨어지면 A는 B의 약수(factor)이고, A가 B로 나누어 떨어지면
// A는 B의 배수(multiple)이다. 두 조건 다 아니면 neither.
// A와 B가 같을 때는 factor 조건이 먼저 걸리므로 factor로 출력된다.

function solve(lines) {
  const result = [];

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    const [a, b] = trimmed.split(' ').map(Number);
    if (a === 0 && b === 0) break;

    if (b % a === 0) {
      result.push('factor');
    } else if (a % b === 0) {
      result.push('multiple');
    } else {
      result.push('neither');
    }
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
