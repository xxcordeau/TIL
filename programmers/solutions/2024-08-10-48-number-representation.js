// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 숫자의 표현
//
// 1부터 n까지의 자연수 중 연속된 수들을 더해서 n을 만드는 경우의
// 수를 구하는 문제. 시작하는 숫자를 1부터 하나씩 늘려가면서
// 누적합이 n을 넘지 않는 동안 계속 더해보고, 정확히 n이 되면
// 카운트를 하나 늘리는 방식으로 모든 시작점을 확인한다.

function solution(n) {
  let count = 0;

  for (let start = 1; start <= n; start++) {
    let sum = 0;
    for (let num = start; num <= n; num++) {
      sum += num;
      if (sum === n) {
        count++;
        break;
      }
      if (sum > n) break;
    }
  }

  return count;
}

module.exports = solution;

if (require.main === module) {
  console.log(solution(15)); // 4
}
