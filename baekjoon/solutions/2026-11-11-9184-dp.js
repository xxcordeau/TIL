// https://www.acmicpc.net/problem/9184
// 신나는 함수 실행
//
// 재귀 함수 w(a,b,c)의 결과를 메모이제이션으로 빠르게 구하는 문제.
// 조건에 따라 분기하고 한 번 계산한 값은 캐시에 저장한다.

function solve(lines) {
  const cache = {};
  function w(a, b, c) {
    if (a <= 0 || b <= 0 || c <= 0) return 1;
    if (a > 20 || b > 20 || c > 20) return w(20, 20, 20);
    const key = `${a},${b},${c}`;
    if (cache[key] !== undefined) return cache[key];
    let res;
    if (a < b && b < c) res = w(a,b,c-1) + w(a,b-1,c-1) - w(a,b-1,c);
    else res = w(a-1,b,c) + w(a-1,b-1,c) + w(a-1,b,c-1) - w(a-1,b-1,c-1);
    cache[key] = res;
    return res;
  }

  const result = [];
  let idx = 0;
  while (idx < lines.length) {
    const line = lines[idx++].trim();
    if (!line) continue;
    const [a, b, c] = line.split(' ').map(Number);
    if (a === -1 && b === -1 && c === -1) break;
    result.push(`w(${a}, ${b}, ${c}) = ${w(a,b,c)}`);
  }
  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}