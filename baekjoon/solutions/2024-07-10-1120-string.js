// https://www.acmicpc.net/problem/1120
// 문자열
//
// 짧은 문자열 B를 긴 문자열 A와 길이를 맞추기 위해 앞뒤에 아무
// 문자나 채워 넣는 문제. B를 A 안에서 왼쪽 끝을 어디에 맞추느냐에
// 따라 겹치는 구간에서 서로 다른 문자 개수가 달라지는데, 가능한
// 모든 위치를 다 시도해서 그 중 최솟값을 구하면 된다.

function solve(lines) {
  const a = lines[0].trim();
  const b = lines[1].trim();
  const diff = a.length - b.length;

  let best = b.length;

  for (let start = 0; start <= diff; start++) {
    let count = 0;
    for (let i = 0; i < b.length; i++) {
      if (a[start + i] !== b[i]) count++;
    }
    if (count < best) best = count;
  }

  return String(best);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
