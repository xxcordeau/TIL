// https://www.acmicpc.net/problem/1436
// 영화감독 숌
//
// "666"이 들어간 수를 작은 것부터 순서대로 셌을 때 N번째 수를
// 찾는 문제. 666부터 하나씩 올려보면서 문자열에 "666"이
// 포함되는지 확인, N개를 찾으면 그 수를 출력.

function solve(lines) {
  const n = Number(lines[0].trim());
  let count = 0;
  let num = 665;

  while (count < n) {
    num++;
    if (String(num).includes('666')) count++;
  }

  return String(num);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
