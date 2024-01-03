// https://school.programmers.co.kr/learn/courses/30/lessons/12943
// 콜라츠 추측
//
// n이 1이 될 때까지 규칙대로 계속 돌리면서 카운트만 세주면 됨.
// 500번 넘게 돌았는데도 1이 안 되면 -1 리턴.

function solution(n) {
  let count = 0;
  let num = n;

  while (num !== 1) {
    if (count >= 500) return -1;
    num = num % 2 === 0 ? num / 2 : num * 3 + 1;
    count++;
  }

  return count;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(6)); // 8
  console.log(solution(16)); // 4
  console.log(solution(626331)); // -1
}
