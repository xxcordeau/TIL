// https://www.acmicpc.net/problem/1931
// 회의실 배정
//
// 종료 시간이 빠른 순으로 정렬하고, 종료 시간이 같으면 시작 시간이 빠른 순으로 정렬한다.
// 앞에서부터 훑으면서 현재 끝난 시간 이후에 시작하는 회의만 선택하면 최대 개수가 나온다.
// 종료 시간 기준 그리디가 항상 최적해를 주는 고전 문제.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const meetings = [];
  for (let i = 1; i <= n; i++) {
    const [s, e] = lines[i].trim().split(' ').map(Number);
    meetings.push([s, e]);
  }

  meetings.sort((a, b) => {
    if (a[1] !== b[1]) return a[1] - b[1];
    return a[0] - b[0];
  });

  let count = 0;
  let endTime = 0;

  for (const [s, e] of meetings) {
    if (s >= endTime) {
      count++;
      endTime = e;
    }
  }

  return count;
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
