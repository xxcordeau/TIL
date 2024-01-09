// https://school.programmers.co.kr/learn/courses/30/lessons/12922
// 수박수박수박수박수박수?
//
// "수박"을 필요한 만큼 반복해서 만든 다음 길이 n에 맞춰 자르면 끝.
// n이 홀수든 짝수든 slice로 잘라내면 알아서 처리됨.

function solution(n) {
  const repeated = '수박'.repeat(Math.ceil(n / 2));
  return repeated.slice(0, n);
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(3)); // "수박수"
  console.log(solution(4)); // "수박수박"
}
