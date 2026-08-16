// https://school.programmers.co.kr/learn/courses/30/lessons/12933
// 정수 내림차순으로 배치하기
//
// 자릿수를 쪼개서 큰 순서대로 정렬한 다음 다시 이어붙이고 숫자로 변환.
// 문자열 정렬은 사전순이라 숫자 비교로 바꿔서 정렬해야 함.

function solution(n) {
  const digits = String(n).split('');
  digits.sort((a, b) => b - a);
  return Number(digits.join(''));
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(118372)); // 873211
}
