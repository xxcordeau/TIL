// https://school.programmers.co.kr/learn/courses/30/lessons/12903
// 가운데 글자 가져오기
//
// 문자열 길이가 홀수면 정중앙 한 글자, 짝수면 중앙 두 글자를 반환한다.
// 길이를 2로 나눈 몫을 기준으로 slice 범위를 잡으면 두 경우 다 처리된다.

function solution(s) {
  const mid = Math.floor(s.length / 2);
  if (s.length % 2 === 0) {
    return s.slice(mid - 1, mid + 1);
  }
  return s.slice(mid, mid + 1);
}

module.exports = solution;

if (require.main === module) {
  console.log(solution("abcde")); // "c"
  console.log(solution("qwer"));  // "we"
}
