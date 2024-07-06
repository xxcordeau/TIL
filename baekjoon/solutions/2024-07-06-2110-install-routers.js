// https://www.acmicpc.net/problem/2110
// 공유기 설치
//
// 집 좌표를 정렬해두고, 공유기 사이의 최소 거리 d를 이분 탐색으로
// 찾는다. d가 주어지면 앞에서부터 그 거리 이상 떨어진 집에만 공유기를
// 놓는 그리디로 몇 개나 설치할 수 있는지 세고, C개 이상이면 d를 더
// 키워보고 아니면 줄인다.

function solve(lines) {
  const [n, c] = lines[0].trim().split(' ').map(Number);
  const houses = [];
  for (let i = 1; i <= n; i++) houses.push(Number(lines[i].trim()));
  houses.sort((a, b) => a - b);

  function countRouters(d) {
    let count = 1;
    let last = houses[0];
    for (let i = 1; i < houses.length; i++) {
      if (houses[i] - last >= d) {
        count++;
        last = houses[i];
      }
    }
    return count;
  }

  let lo = 1;
  let hi = houses[houses.length - 1] - houses[0];
  let answer = 0;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (countRouters(mid) >= c) {
      answer = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  return String(answer);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
