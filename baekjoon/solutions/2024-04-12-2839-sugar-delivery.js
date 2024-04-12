// https://www.acmicpc.net/problem/2839
// 설탕 배달
//
// 5킬로 봉지를 최대한 많이 쓰는 게 항상 유리하니까, 5로 나눈 몫부터
// 하나씩 줄여가면서 남는 양이 3의 배수가 되는 지점을 찾으면 최소
// 봉지 개수가 나온다. 끝까지 못 찾으면 -1.

function solve(lines) {
  const n = Number(lines[0].trim());

  for (let fiveCount = Math.floor(n / 5); fiveCount >= 0; fiveCount--) {
    const remainder = n - fiveCount * 5;
    if (remainder % 3 === 0) {
      return String(fiveCount + remainder / 3);
    }
  }

  return '-1';
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
