// https://school.programmers.co.kr/learn/courses/30/lessons/12912
// 두 정수 사이의 합
//
// a, b 대소관계가 정해져있지 않아서 먼저 작은 값과 큰 값을 나눠준 다음
// 등차수열 합 공식으로 바로 계산했다. 굳이 반복문 돌 필요 없이
// (min+max)*(개수)/2 로 끝.

function solution(a, b) {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const count = max - min + 1;
  return ((min + max) * count) / 2;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(3, 5)); // 12
  console.log(solution(3, 3)); // 3
  console.log(solution(5, 3)); // 12
}
