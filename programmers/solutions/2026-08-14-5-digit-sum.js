// https://school.programmers.co.kr/learn/courses/30/lessons/12931
// 자릿수 더하기
//
// 그냥 숫자를 문자열로 바꿔서 한 글자씩 숫자로 변환해 더하면 끝나는
// 아주 간단한 문제.

function solution(n) {
  return String(n)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(123)); // 6
  console.log(solution(987)); // 24
}
