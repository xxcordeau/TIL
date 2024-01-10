// https://school.programmers.co.kr/learn/courses/30/lessons/86051
// 없는 숫자 더하기
//
// 0~9까지 다 더한 값에서 numbers에 있는 숫자들의 합을 빼면 없는 숫자들의
// 합이 바로 나옴. 굳이 하나씩 찾아다닐 필요 없음.

function solution(numbers) {
  const fullSum = 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9;
  const givenSum = numbers.reduce((sum, n) => sum + n, 0);
  return fullSum - givenSum;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution([1, 2, 3, 4, 6, 7, 8, 0])); // 14
  console.log(solution([5, 8, 4, 0, 6, 7, 9])); // 6
}
