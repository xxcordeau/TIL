// https://www.acmicpc.net/problem/9184
// 신나는 함수 실행
//
// 재귀 함수 w(a,b,c)를 메모이제이션으로 최적화하는 문제.
// a,b,c 범위가 -50~20이므로 오프셋(+50)을 줘서 배열에 저장한다.

function solve(lines) {
  const OFS = 50;
  const memo = Array.from({ length: 121 }, () =>
    Array.from({ length: 121 }, () => new Array(121).fill(null))
  );

  function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
    if (memo[a + OFS][b + OFS][c + OFS] !== null) return memo[a + OFS][b + OFS][c + OFS];
    let result;
    if (a < b && b < c) {
      result = w(a, b, c - 1) + w(a, b - 1, c - 1) - w(a, b - 1, c);
    } else {
      result = w(a - 1, b, c) + w(a - 1, b - 1, c) + w(a - 1, b, c - 1) - w(a - 1, b - 1, c - 1);
    }
    memo[a + OFS][b + OFS][c + OFS] = result;
    return result;
  }

  const results = [];
  for (const line of lines) {
    const parts = line.trim().split(' ').map(Number);
    if (parts.length < 3) continue;
    const [a, b, c] = parts;
    if (a === -1 && b === -1 && c === -1) break;
    results.push(`w(${a}, ${b}, ${c}) = ${w(a, b, c)}`);
  }
  return results.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
