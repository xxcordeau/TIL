// https://school.programmers.co.kr/learn/courses/30/lessons/12917
// 문자열 내림차순으로 배치하기
//
// 문자 하나하나를 배열로 쪼개서 내림차순 정렬 후 다시 합치면 됨.
// 대문자가 소문자보다 작다는 조건은 아스키코드 기본 정렬 순서랑 같아서
// 그냥 기본 문자열 비교로 처리하면 알아서 맞음.

function solution(s) {
  return s
    .split('')
    .sort((a, b) => (a < b ? 1 : a > b ? -1 : 0))
    .join('');
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution('Zbcdefg')); // "gfedcbZ"
}
