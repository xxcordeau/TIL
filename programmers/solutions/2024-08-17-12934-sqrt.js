// https://school.programmers.co.kr/learn/courses/30/lessons/12934
// 정수 제곱근 판별
//
// n이 어떤 정수의 제곱인지 확인하려면 그냥 Math.sqrt로 제곱근을 구해서
// 정수인지 보면 된다. 정수면 (루트+1)^2, 아니면 -1을 리턴.

function solution(n) {
  const root = Math.sqrt(n);
  if (Number.isInteger(root)) {
    return (root + 1) ** 2;
  }
  return -1;
}

module.exports = solution;

if (require.main === module) {
  console.log(solution(121)); // 144
  console.log(solution(3));   // -1
}
