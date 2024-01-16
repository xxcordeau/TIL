// https://school.programmers.co.kr/learn/courses/30/lessons/12948
// 핸드폰 번호 가리기
//
// 뒤 4자리만 남기고 나머지는 * 개수로 채워서 이어붙이면 됨.

function solution(phone_number) {
  const visible = phone_number.slice(-4);
  const hiddenLength = phone_number.length - 4;
  return '*'.repeat(hiddenLength) + visible;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution('01033334444')); // "*******4444"
  console.log(solution('027778888')); // "*****8888"
}
