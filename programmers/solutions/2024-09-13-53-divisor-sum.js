// https://school.programmers.co.kr/learn/courses/30/lessons/12928
// 약수의 합
//
// n 이하의 수를 하나씩 돌면서 n을 나누어떨어지게 하는 수를 다 더하면
// 되는 간단한 문제. n이 크지 않아서 1부터 n까지 그냥 순회했다.

function solution(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) sum += i;
  }
  return sum;
}

module.exports = solution;
