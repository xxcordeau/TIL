// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 완주하지 못한 선수
//
// participant랑 completion을 그냥 정렬해서 앞에서부터 하나씩 비교하면
// 어디서 이름이 안 맞는지 바로 찾을 수 있음. participant가 completion보다
// 하나 더 기니까 마지막까지 다 맞았으면 남은 마지막 사람이 정답.
// 동명이인 있어도 정렬 비교라 문제없이 처리됨.

function solution(participant, completion) {
  const p = [...participant].sort();
  const c = [...completion].sort();

  for (let i = 0; i < c.length; i++) {
    if (p[i] !== c[i]) {
      return p[i];
    }
  }

  return p[p.length - 1];
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // "leo"
  console.log(
    solution(
      ["marina", "josipa", "nikola", "vinko", "filipa"],
      ["josipa", "filipa", "marina", "nikola"]
    )
  ); // "vinko"
  console.log(solution(["mislav", "stanko", "mislav", "ana"], ["stanko", "ana", "mislav"])); // "mislav"
}
