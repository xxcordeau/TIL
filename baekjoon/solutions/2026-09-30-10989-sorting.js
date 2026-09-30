// https://www.acmicpc.net/problem/10989
// 수 정렬하기 3
//
// 수가 최대 10000이라서 카운팅 정렬이 적합하다.
// 각 숫자의 빈도를 세고, 1부터 10000까지 순서대로 빈도만큼 출력.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const cnt = new Array(10001).fill(0);

  for (let i = 1; i <= n; i++) {
    cnt[parseInt(lines[i].trim(), 10)]++;
  }

  const result = [];
  for (let i = 1; i <= 10000; i++) {
    for (let j = 0; j < cnt[i]; j++) result.push(i);
  }

  return result.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}