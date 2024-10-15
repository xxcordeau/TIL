// https://school.programmers.co.kr/learn/courses/30/lessons/12973
// 짝지어 제거하기
//
// 스택을 쓰면 딱 맞는 문제다. 문자를 하나씩 보면서 스택 맨 위랑
// 같으면 짝이 맞은 거니까 pop, 다르면 push. 끝까지 다 처리했는데
// 스택이 비어있으면 전부 짝지어 없앨 수 있었다는 뜻이라 성공.

function solution(s) {
  const stack = [];
  for (const ch of s) {
    if (stack.length > 0 && stack[stack.length - 1] === ch) {
      stack.pop();
    } else {
      stack.push(ch);
    }
  }
  return stack.length === 0 ? 1 : 0;
}

module.exports = solution;

if (require.main === module) {
  console.log(solution('baabaa')); // 1
  console.log(solution('cdcd')); // 0
}
