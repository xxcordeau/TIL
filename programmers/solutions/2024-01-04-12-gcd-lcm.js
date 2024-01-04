// https://school.programmers.co.kr/learn/courses/30/lessons/12940
// 최대공약수와 최소공배수
//
// 유클리드 호제법으로 최대공약수 구하고, 최소공배수는 (n*m)/최대공약수로
// 바로 계산.

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function solution(n, m) {
  const g = gcd(n, m);
  const l = (n * m) / g;
  return [g, l];
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(3, 12)); // [3, 12]
  console.log(solution(2, 5)); // [1, 10]
}
