// https://school.programmers.co.kr/learn/courses/30/lessons/12916
// 문자열 내 p와 y의 개수
//
// 대소문자 구분 없이 세야 하니까 전부 소문자로 바꾸고 나서 p 개수랑
// y 개수를 비교하면 끝.

function solution(s) {
  const lower = s.toLowerCase();
  const pCount = lower.split('').filter((c) => c === 'p').length;
  const yCount = lower.split('').filter((c) => c === 'y').length;
  return pCount === yCount;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution('pPoooyY')); // true
  console.log(solution('Pyy')); // false
}
