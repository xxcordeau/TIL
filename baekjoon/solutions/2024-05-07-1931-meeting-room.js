// https://www.acmicpc.net/problem/1931
// 회의실 배정
//
// 끝나는 시간이 빠른 회의부터 고르는 게 항상 유리하다는 그리디.
// 끝나는 시간 기준으로 정렬(같으면 시작 시간 기준)한 다음, 마지막으로
// 고른 회의의 끝나는 시간 이후에 시작하는 회의만 계속 골라나간다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const meetings = lines.slice(1, 1 + n).map((line) => line.trim().split(' ').map(Number));

  meetings.sort((a, b) => (a[1] !== b[1] ? a[1] - b[1] : a[0] - b[0]));

  let count = 0;
  let lastEnd = 0;

  for (const [start, end] of meetings) {
    if (start >= lastEnd) {
      count++;
      lastEnd = end;
    }
  }

  return String(count);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
