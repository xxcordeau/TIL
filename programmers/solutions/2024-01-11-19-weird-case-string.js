// https://school.programmers.co.kr/learn/courses/30/lessons/12930
// 이상한 문자 만들기
//
// 공백 기준으로 단어를 나누는 게 아니라, 전체 문자열을 한 글자씩 보면서
// 단어가 바뀔 때(공백을 만날 때)마다 인덱스를 0으로 리셋해주는 방식으로 풀었다.
// 짝수 인덱스는 대문자, 홀수 인덱스는 소문자.

function solution(s) {
  let result = '';
  let index = 0;

  for (const char of s) {
    if (char === ' ') {
      result += char;
      index = 0;
    } else {
      result += index % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
      index++;
    }
  }

  return result;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution('try hello world')); // "TrY HeLlO WoRlD"
}
