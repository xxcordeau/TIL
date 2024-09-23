// https://school.programmers.co.kr/learn/courses/30/lessons/12912
// 짝수의 합
//
// n 이하의 짝수를 다 더하는 문제라 1부터 n까지 돌면서 짝수만 더해도
// 되고, 등차수열 합 공식을 써도 되지만 그냥 반복문으로 간단하게 처리했다.

function solution(n) {
  let sum = 0;
  for (let i = 2; i <= n; i += 2) {
    sum += i;
  }
  return sum;
}

module.exports = solution;
