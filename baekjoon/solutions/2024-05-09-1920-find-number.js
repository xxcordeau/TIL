// https://www.acmicpc.net/problem/1920
// 수 찾기
//
// 집합 A를 정렬해두고 B의 각 원소마다 이분 탐색으로 존재 여부를
// 확인. N, M이 십만까지 갈 수 있어서 일반 배열 includes로 하나하나
// 찾으면 느리니까 직접 이분 탐색을 구현했다.

function binarySearch(sortedArr, target) {
  let lo = 0;
  let hi = sortedArr.length - 1;

  while (lo <= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (sortedArr[mid] === target) return true;
    if (sortedArr[mid] < target) lo = mid + 1;
    else hi = mid - 1;
  }

  return false;
}

function solve(lines) {
  const n = Number(lines[0].trim());
  const a = lines[1].trim().split(' ').map(Number).sort((x, y) => x - y);
  const m = Number(lines[2].trim());
  const b = lines[3].trim().split(' ').map(Number);

  return b.map((target) => (binarySearch(a, target) ? 1 : 0)).join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
