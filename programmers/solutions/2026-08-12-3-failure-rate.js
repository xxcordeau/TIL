// https://school.programmers.co.kr/learn/courses/30/lessons/42889
// 실패율
//
// 스테이지별로 "도달한 사람 수"만 알면 실패율은 바로 나옴.
// 뒤에서부터 생각하면 편한데, 나는 그냥 앞에서부터 스테이지 1..N까지 돌면서
// 현재 남아있는 인원(total)에서 그 스테이지에 머물러 있는 사람 수를 나눠서
// 실패율을 구하고, 다음 스테이지로 넘어가기 전에 total에서 빼주는 식으로 처리했다.
// 정렬은 실패율 내림차순인데, 같은 실패율이면 스테이지 번호 오름차순이어야 해서
// 애초에 배열을 1번 스테이지부터 순서대로 채워넣고 stable sort에 맡기면 됨.

function solution(N, stages) {
  const stageCount = new Array(N + 2).fill(0);
  for (const s of stages) {
    stageCount[s]++;
  }

  let remaining = stages.length;
  const failRates = [];

  for (let stage = 1; stage <= N; stage++) {
    const stuck = stageCount[stage];
    const rate = remaining === 0 ? 0 : stuck / remaining;
    failRates.push({ stage, rate });
    remaining -= stuck;
  }

  failRates.sort((a, b) => b.rate - a.rate);

  return failRates.map((f) => f.stage);
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3])); // [3,4,2,1,5]
  console.log(solution(4, [4, 4, 4, 4, 4])); // [4,1,2,3]
}
