// https://school.programmers.co.kr/learn/courses/30/lessons/150370
// 개인정보 수집 유효기간
//
// 한 달을 28일로 계산한다고 했으니까, 날짜를 그냥 "총 일수"로 환산해서
// 비교하면 편함. 수집일 + 유효기간(개월*28일)이 오늘보다 같거나 이전이면
// 파기 대상.

function toDays(dateStr) {
  const [year, month, day] = dateStr.split('.').map(Number);
  return year * 12 * 28 + (month - 1) * 28 + day;
}

function solution(today, terms, privacies) {
  const termMap = {};
  for (const term of terms) {
    const [name, months] = term.split(' ');
    termMap[name] = Number(months);
  }

  const todayDays = toDays(today);
  const result = [];

  privacies.forEach((privacy, index) => {
    const [date, name] = privacy.split(' ');
    const expireDays = toDays(date) + termMap[name] * 28;

    if (expireDays <= todayDays) {
      result.push(index + 1);
    }
  });

  return result;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(
    solution(
      '2022.05.19',
      ['A 6', 'B 12', 'C 3'],
      ['2021.05.02 A', '2021.07.01 B', '2022.02.19 C', '2022.02.20 C']
    )
  ); // [1, 3]
}
