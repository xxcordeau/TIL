// https://school.programmers.co.kr/learn/courses/30/lessons/12935
// 제일 작은 수 제거하기
//
// 배열에서 최솟값의 인덱스를 찾아 그 자리만 잘라내면 된다. 배열
// 길이가 1이면 지울 게 없으니 규칙대로 [-1]을 돌려준다.

function solution(arr) {
  if (arr.length === 1) return [-1];

  const minVal = Math.min(...arr);
  const idx = arr.indexOf(minVal);

  return [...arr.slice(0, idx), ...arr.slice(idx + 1)];
}

module.exports = solution;
