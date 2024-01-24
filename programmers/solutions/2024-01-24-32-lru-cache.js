// https://school.programmers.co.kr/learn/courses/30/lessons/17680
// 캐시
//
// LRU 캐시라 배열을 큐처럼 쓰되, hit이 나면 그 원소를 빼서 맨 뒤로
// 다시 넣어주는 식으로 "최근 사용"을 표현했다. 도시 이름은 대소문자
// 구분 없다고 했으니 비교할 때 전부 소문자로 맞춰서 처리.
// cacheSize가 0이면 캐시가 아예 없는 거라 항상 miss(5) 처리.

function solution(cacheSize, cities) {
  if (cacheSize === 0) {
    return cities.length * 5;
  }

  const cache = [];
  let time = 0;

  for (const rawCity of cities) {
    const city = rawCity.toLowerCase();
    const index = cache.indexOf(city);

    if (index !== -1) {
      // 캐시 히트: 기존 위치에서 빼고 맨 뒤로 이동
      cache.splice(index, 1);
      cache.push(city);
      time += 1;
    } else {
      // 캐시 미스
      if (cache.length >= cacheSize) {
        cache.shift();
      }
      cache.push(city);
      time += 5;
    }
  }

  return time;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(
    solution(3, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])
  ); // 50
  console.log(
    solution(3, ['Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul', 'Jeju', 'Pangyo', 'Seoul'])
  ); // 21
  console.log(
    solution(2, [
      'Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA', 'SanFrancisco', 'Seoul', 'Rome', 'Paris', 'Jeju', 'NewYork', 'Rome',
    ])
  ); // 60
  console.log(solution(0, ['Jeju', 'Pangyo', 'Seoul', 'NewYork', 'LA'])); // 25
}
