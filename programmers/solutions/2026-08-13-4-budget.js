// https://school.programmers.co.kr/learn/courses/30/lessons/12982
// 예산
//
// 최대한 많은 부서를 지원해주려면 당연히 금액이 적은 부서부터 지원해주는 게
// 유리함. 오름차순으로 정렬하고 앞에서부터 예산이 허락하는 만큼 계속 더해가면서
// 몇 개까지 지원 가능한지 세면 끝나는 문제.

function solution(d, budget) {
  const sorted = [...d].sort((a, b) => a - b);

  let count = 0;
  let sum = 0;

  for (const amount of sorted) {
    sum += amount;
    if (sum > budget) break;
    count++;
  }

  return count;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution([1, 3, 2, 5, 4], 9)); // 3
  console.log(solution([2, 2, 3, 3], 10)); // 4
}
