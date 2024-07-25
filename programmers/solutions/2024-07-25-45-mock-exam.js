// https://school.programmers.co.kr/learn/courses/30/lessons/42840
// 모의고사
//
// 세 사람이 찍는 패턴은 고정된 길이로 반복되니까, 문제 번호를 각자의
// 패턴 길이로 나눈 나머지로 인덱스를 잡아서 답과 비교하면 된다. 맞은
// 개수를 세어서 최댓값을 찾고, 그 최댓값과 같은 사람들만 오름차순으로
// 반환.

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const scores = [0, 0, 0];

  answers.forEach((answer, i) => {
    patterns.forEach((pattern, personIdx) => {
      if (pattern[i % pattern.length] === answer) {
        scores[personIdx]++;
      }
    });
  });

  const maxScore = Math.max(...scores);
  const winners = [];
  scores.forEach((score, i) => {
    if (score === maxScore) winners.push(i + 1);
  });

  return winners;
}

module.exports = solution;

if (require.main === module) {
  console.log(solution([1, 2, 3, 4, 4, 5])); // [1]
  console.log(solution([1, 3, 2, 4, 2])); // [1, 2, 3]
}
