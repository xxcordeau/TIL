// https://school.programmers.co.kr/learn/courses/30/lessons/120863
// 다항식 더하기
//
// "+"로 항을 나눈 다음, 각 항을 계수와 문자(x 유무)로 분리해서
// x항끼리 계수를 더하고 상수항끼리 더한다. 계수가 1이면 숫자를
// 생략하는 표기 규칙이 있어서 출력할 때 예외 처리를 해줘야 한다.

function solution(polynomial) {
  const terms = polynomial.replace(/\s/g, '').split('+');

  let xCoef = 0;
  let constant = 0;

  for (const term of terms) {
    if (term.includes('x')) {
      const coefStr = term.replace('x', '');
      const coef = coefStr === '' ? 1 : Number(coefStr);
      xCoef += coef;
    } else {
      constant += Number(term);
    }
  }

  const parts = [];
  if (xCoef === 1) {
    parts.push('x');
  } else if (xCoef !== 0) {
    parts.push(`${xCoef}x`);
  }

  if (constant !== 0 || parts.length === 0) {
    parts.push(String(constant));
  }

  return parts.join(' + ');
}

module.exports = solution;

if (require.main === module) {
  console.log(solution('3x + 7 + x')); // "4x + 7"
  console.log(solution('x + x')); // "2x"
  console.log(solution('x + 3 + 2x + 5')); // "3x + 8"
}
