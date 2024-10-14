// https://school.programmers.co.kr/learn/courses/30/lessons/68935
// 3진법 뒤집기
//
// n을 3진법 문자열로 바꾼 다음 순서를 뒤집고, 그 문자열을 다시
// 3진법 숫자로 해석해서 10진수로 돌려주면 된다. JS 내장 toString(3)
// 이랑 parseInt(str, 3)으로 변환이 바로 되니까 코드가 짧아진다.

function solution(n) {
  const base3 = n.toString(3);
  const reversed = base3.split('').reverse().join('');
  return parseInt(reversed, 3);
}

module.exports = solution;

if (require.main === module) {
  console.log(solution(45)); // 7
  console.log(solution(125)); // 229
}
