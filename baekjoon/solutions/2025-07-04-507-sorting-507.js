// https://www.acmicpc.net/problem/2597
// 줄자접기
//
// N개의 값을 입력받아 정렬한 뒤 그대로 출력하는 문제.
// 값의 범위가 크지 않다면 기본 내장 정렬로 충분하지만,
// 여기서는 카운팅 정렬 스타일로 처리해서 속도를 확보했다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(Number(lines[i].trim()));
  }
  arr.sort((a, b) => a - b);
  return arr.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
