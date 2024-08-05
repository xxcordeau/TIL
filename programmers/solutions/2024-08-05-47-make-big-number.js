// https://school.programmers.co.kr/learn/courses/30/lessons/42883
// 큰 수 만들기
//
// 앞에서부터 하나씩 보면서, 스택에 쌓인 마지막 숫자보다 지금
// 숫자가 더 크면 아직 k(제거 가능 횟수)가 남아있는 한 스택에서
// 계속 빼내는 그리디 방식. 이렇게 하면 자리 순서를 지키면서
// 가장 큰 수를 만들 수 있다. 끝까지 다 봤는데 k가 남으면
// 뒤에서부터 잘라내면 된다.

function solution(number, k) {
  const stack = [];
  let remaining = k;

  for (const digit of number) {
    while (remaining > 0 && stack.length > 0 && stack[stack.length - 1] < digit) {
      stack.pop();
      remaining--;
    }
    stack.push(digit);
  }

  if (remaining > 0) {
    stack.length -= remaining;
  }

  return stack.join('');
}

module.exports = solution;

if (require.main === module) {
  console.log(solution('1924', 2)); // "94"
  console.log(solution('1231234', 3)); // "3234"
  console.log(solution('4177252841', 4)); // "775841"
}
