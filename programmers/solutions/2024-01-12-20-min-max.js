// https://school.programmers.co.kr/learn/courses/30/lessons/12939
// 최댓값과 최솟값
//
// 공백으로 split 해서 숫자 배열로 만든 다음 Math.min/max 써서 최소, 최대
// 뽑고 원하는 문자열 형태로 조립.

function solution(s) {
  const numbers = s.split(' ').map(Number);
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);
  return `${min} ${max}`;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution('1 2 3 4')); // "1 4"
  console.log(solution('-1 -2 -3 -4')); // "-4 -1"
}
