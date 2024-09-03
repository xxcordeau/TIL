// https://school.programmers.co.kr/learn/courses/30/lessons/76501
// 음양 더하기
//
// signs 배열이 true면 그대로, false면 부호만 바꿔서 더해주면 되는
// 단순한 문제라 reduce로 한 줄에 끝냈다.

function solution(absolutes, signs) {
  return absolutes.reduce((acc, val, i) => acc + (signs[i] ? val : -val), 0);
}

module.exports = solution;
