// https://school.programmers.co.kr/learn/courses/30/lessons/42586
// 기능개발
//
// 각 작업이 100%가 되기까지 남은 일수를 먼저 계산해두고, 앞에서부터
// 순회하면서 "지금까지 본 것 중 가장 늦게 끝나는 날"을 기준으로 묶는다.
// 그 기준보다 늦게 끝나는 작업을 만나면 새로운 배포 묶음을 시작.

function solution(progresses, speeds) {
  const daysLeft = progresses.map((p, i) => Math.ceil((100 - p) / speeds[i]));

  const result = [];
  let deadline = daysLeft[0];
  let count = 0;

  for (const days of daysLeft) {
    if (days <= deadline) {
      count++;
    } else {
      result.push(count);
      deadline = days;
      count = 1;
    }
  }

  result.push(count);
  return result;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution([93, 30, 55], [1, 30, 5])); // [2, 1]
  console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1])); // [1, 3, 2]
}
