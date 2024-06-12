// https://school.programmers.co.kr/learn/courses/30/lessons/12937
// 짝수와 홀수
//
// num을 2로 나눈 나머지로 짝수/홀수만 구분하면 되는 간단한 문제.

function solution(num) {
  return num % 2 === 0 ? 'Even' : 'Odd';
}

module.exports = solution;
