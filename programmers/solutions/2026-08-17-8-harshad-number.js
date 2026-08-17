// https://school.programmers.co.kr/learn/courses/30/lessons/12947
// 하샤드 수
//
// 자릿수 합을 구해서 그 값으로 원래 수가 나누어 떨어지는지만 확인하면 되는
// 문제. 자릿수 더하기 문제랑 로직이 거의 똑같음.

function solution(x) {
  const digitSum = String(x)
    .split('')
    .reduce((sum, digit) => sum + Number(digit), 0);

  return x % digitSum === 0;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(10)); // true
  console.log(solution(12)); // true
  console.log(solution(11)); // false
  console.log(solution(13)); // false
}
