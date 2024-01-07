// https://school.programmers.co.kr/learn/courses/30/lessons/12919
// 서울에서 김서방 찾기
//
// indexOf로 "Kim" 위치 찾아서 문자열 템플릿에 끼워넣기만 하면 되는
// 워밍업 문제.

function solution(seoul) {
  const x = seoul.indexOf('Kim');
  return `김서방은 ${x}에 있다`;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(['Jane', 'Kim'])); // "김서방은 1에 있다"
}
