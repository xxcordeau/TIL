// https://school.programmers.co.kr/learn/courses/30/lessons/60057
// 문자열 압축
//
// 자를 수 있는 단위 길이(1부터 문자열 길이의 절반까지)를 다 시도해보면서
// 그 단위로 압축했을 때 길이가 얼마나 나오는지 비교, 가장 짧은 걸 리턴.
// 압축 로직은 단순하게 앞 청크랑 현재 청크가 같으면 반복 횟수를 세고,
// 다르면 지금까지 모은 걸 결과에 붙이는 식으로 처리.

function compress(s, unit) {
  let result = '';
  let prevChunk = s.slice(0, unit);
  let count = 1;

  for (let i = unit; i < s.length; i += unit) {
    const chunk = s.slice(i, i + unit);

    if (chunk === prevChunk) {
      count++;
    } else {
      result += (count > 1 ? count : '') + prevChunk;
      prevChunk = chunk;
      count = 1;
    }
  }

  result += (count > 1 ? count : '') + prevChunk;
  return result.length;
}

function solution(s) {
  let minLength = s.length;

  for (let unit = 1; unit <= Math.floor(s.length / 2); unit++) {
    const compressedLength = compress(s, unit);
    minLength = Math.min(minLength, compressedLength);
  }

  return minLength;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution('aabbaccc')); // 7
  console.log(solution('ababcdcdababcdcd')); // 9
  console.log(solution('abcabcdede')); // 8
  console.log(solution('abcabcabcabcdededededede')); // 14
  console.log(solution('xababcdcdababcdcd')); // 17
}
