// https://school.programmers.co.kr/learn/courses/30/lessons/60058
// 괄호 변환
//
// 문제에서 시키는 대로 그대로 재귀 구현. 빈 문자열이면 그대로 반환,
// 아니면 균형잡힌 문자열이 될 때까지 u, v로 나누고, u가 올바른 괄호
// 문자열이면 u + transform(v), 아니면 뒤집고 뒤집은 문자열 처리하는
// 규칙대로 진행.

function isBalanced(str) {
  let open = 0;
  for (const char of str) {
    if (char === '(') open++;
    else open--;
  }
  return open === 0;
}

function isCorrect(str) {
  let balance = 0;
  for (const char of str) {
    balance += char === '(' ? 1 : -1;
    if (balance < 0) return false;
  }
  return true;
}

function splitUV(p) {
  let balance = 0;
  for (let i = 0; i < p.length; i++) {
    balance += p[i] === '(' ? 1 : -1;
    if (balance === 0) {
      return [p.slice(0, i + 1), p.slice(i + 1)];
    }
  }
  return [p, ''];
}

function transform(p) {
  if (p === '') return '';

  const [u, v] = splitUV(p);

  if (isCorrect(u)) {
    return u + transform(v);
  }

  let result = '(' + transform(v) + ')';
  const inner = u.slice(1, -1);
  for (const char of inner) {
    result += char === '(' ? ')' : '(';
  }
  return result;
}

function solution(p) {
  return transform(p);
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution('(()())()')); // "(()())()"
  console.log(solution(')(')); // "()"
  console.log(solution('()))((()')); // "()(())()"
}
