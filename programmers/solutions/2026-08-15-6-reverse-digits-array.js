// https://school.programmers.co.kr/learn/courses/30/lessons/12932
// 자연수 뒤집어 배열로 만들기
//
// 문자열로 바꿔서 뒤집고, 각 글자를 다시 숫자로 매핑해주면 됨.

function solution(n) {
  return String(n)
    .split('')
    .reverse()
    .map(Number);
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(12345)); // [5,4,3,2,1]
  console.log(solution(87654321)); // [1,2,3,4,5,6,7,8]
}
