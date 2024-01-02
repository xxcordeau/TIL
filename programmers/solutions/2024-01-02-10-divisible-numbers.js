// https://school.programmers.co.kr/learn/courses/30/lessons/12910
// 나누어 떨어지는 숫자 배열
//
// filter로 나누어 떨어지는 것만 걸러내고 오름차순 정렬. 결과가 없으면
// -1 하나 담긴 배열을 리턴해야 하니까 그 케이스만 따로 처리.

function solution(array, divisor) {
  const filtered = array.filter((n) => n % divisor === 0).sort((a, b) => a - b);
  return filtered.length > 0 ? filtered : [-1];
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution([5, 9, 7, 10], 5)); // [5, 10]
  console.log(solution([2, 36, 1, 3], 1)); // [1, 2, 3, 36]
  console.log(solution([3, 2, 6], 10)); // [-1]
}
