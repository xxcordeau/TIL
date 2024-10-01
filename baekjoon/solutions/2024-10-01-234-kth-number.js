// https://www.acmicpc.net/problem/11004
// K번째 수
//
// 그냥 정렬해서 K번째 값을 꺼내면 되는 문제. N이 커도 sort 한 번이면
// 충분히 빠르게 풀린다.

function solve(lines) {
  const [, k] = lines[0].trim().split(/\s+/).map(Number);
  const arr = lines[1].trim().split(/\s+/).map(Number);
  arr.sort((a, b) => a - b);
  return String(arr[k - 1]);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
