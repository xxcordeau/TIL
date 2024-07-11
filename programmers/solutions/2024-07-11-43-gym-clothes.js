// https://school.programmers.co.kr/learn/courses/30/lessons/42862
// 체육복
//
// 여벌이 있으면서 도난도 당한 학생은 자기 옷으로 해결되니까 먼저
// 빼주고, 도난당한 학생들을 번호 순서대로 보면서 바로 앞 번호나 뒤
// 번호 중 여벌이 남아있는 학생을 찾아 빌려주는 그리디로 처리한다.
// 그리디로 앞번호부터 우선 확인해도 결과는 같다.

function solution(n, lost, reserve) {
  const lostSet = new Set(lost);
  const reserveSet = new Set(reserve);

  const actualLost = [...lostSet].filter((x) => !reserveSet.has(x));
  const actualReserve = [...reserveSet].filter((x) => !lostSet.has(x));

  actualLost.sort((a, b) => a - b);

  let answer = n - actualLost.length;
  const reserveLeft = new Set(actualReserve);

  for (const student of actualLost) {
    if (reserveLeft.has(student - 1)) {
      reserveLeft.delete(student - 1);
      answer++;
    } else if (reserveLeft.has(student + 1)) {
      reserveLeft.delete(student + 1);
      answer++;
    }
  }

  return answer;
}

module.exports = solution;

if (require.main === module) {
  console.log(solution(5, [2, 4], [1, 3, 5])); // 5
  console.log(solution(5, [2, 4], [3])); // 4
  console.log(solution(3, [3], [1])); // 2
}
