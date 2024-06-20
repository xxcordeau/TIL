// https://school.programmers.co.kr/learn/courses/30/lessons/77884
// 약수의 개수와 덧셈
//
// left부터 right까지 돌면서 각 수의 약수 개수를 세서, 짝수개면
// 더하고 홀수개(제곱수인 경우)면 뺀다. 약수 개수는 1부터
// sqrt(n)까지 나눠보면서 세면 됨.

function countDivisors(n) {
  let count = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      count += i * i === n ? 1 : 2;
    }
  }
  return count;
}

function solution(left, right) {
  let answer = 0;
  for (let n = left; n <= right; n++) {
    const divisorCount = countDivisors(n);
    answer += divisorCount % 2 === 0 ? n : -n;
  }
  return answer;
}

module.exports = solution;
