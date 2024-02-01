// https://school.programmers.co.kr/learn/courses/30/lessons/42577
// 전화번호 목록
//
// 정렬해두면 접두어 관계인 번호들은 서로 인접하게 붙는다는 점을 이용.
// 오름차순 정렬 후 바로 옆 번호끼리만 접두어인지 검사하면 전체 쌍을
// 다 비교할 필요가 없어서 효율적이다.

function solution(phoneBook) {
  const sorted = [...phoneBook].sort();

  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i + 1].startsWith(sorted[i])) {
      return false;
    }
  }

  return true;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(solution(['119', '97674223', '1195524421'])); // false
  console.log(solution(['123', '456', '789'])); // true
  console.log(solution(['12', '123', '1235', '567', '88'])); // false
}
