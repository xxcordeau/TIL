// https://www.acmicpc.net/problem/2960
// 에라토스테네스의 체
//
// 실제 체 알고리즘 그대로 시뮬레이션하되, 지워질 때마다 카운터를
// 증가시켜서 K번째로 지워지는 순간의 값을 기록해두는 방식으로 풀었다.
// 이미 지워진 수라도 배수를 순회하는 과정에서 다시 "지워짐" 처리
// (카운트 증가)되는 게 이 문제의 포인트.

function solve(lines) {
  const [n, k] = lines[0].trim().split(' ').map(Number);
  const erased = new Array(n + 1).fill(false);

  let count = 0;
  let answer = -1;

  for (let i = 2; i <= n; i++) {
    if (erased[i]) continue;

    for (let j = i; j <= n; j += i) {
      erased[j] = true;
      count++;
      if (count === k) {
        answer = j;
      }
    }

    if (answer !== -1) break;
  }

  return String(answer);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
