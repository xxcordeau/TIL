// https://school.programmers.co.kr/learn/courses/30/lessons/77484
// 로또의 최고 순위와 최저 순위
//
// 0(지워진 번호)은 뭐든 될 수 있으니까, 최고 순위는 0을 전부 당첨번호로
// 맞았다고 가정하고 계산, 최저 순위는 0을 전부 틀렸다고 가정하고 계산.
// 일치 개수를 순위로 바꾸는 테이블만 하나 만들어두면 편함.

function rank(matchCount) {
  const table = [6, 6, 5, 4, 3, 2, 1];
  return table[matchCount];
}

function solution(lottos, win_nums) {
  const zeroCount = lottos.filter((n) => n === 0).length;
  const matched = lottos.filter((n) => n !== 0 && win_nums.includes(n)).length;

  const best = rank(matched + zeroCount);
  const worst = rank(matched);

  return [best, worst];
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19])); // [3, 5]
  console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 8, 25, 13])); // [1, 6]
}
