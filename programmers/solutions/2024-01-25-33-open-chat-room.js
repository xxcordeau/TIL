// https://school.programmers.co.kr/learn/courses/30/lessons/42888
// 오픈채팅방
//
// 두 번 순회하는 방식으로 풀었다. 1차로 record를 훑으면서 각 uid의
// "최종 닉네임"만 map에 계속 덮어써서 저장(Change도 같이 처리).
// 2차로 다시 record를 훑으면서 Enter/Leave인 경우만 최종 닉네임을
// 붙여서 메시지를 만든다. Change는 메시지에 안 남으니까 건너뜀.

function solution(record) {
  const nicknameByUid = {};
  const parsedRecords = record.map((line) => line.split(' '));

  for (const [action, uid, nickname] of parsedRecords) {
    if (action === 'Enter' || action === 'Change') {
      nicknameByUid[uid] = nickname;
    }
  }

  const result = [];

  for (const [action, uid] of parsedRecords) {
    if (action === 'Enter') {
      result.push(`${nicknameByUid[uid]}님이 들어왔습니다.`);
    } else if (action === 'Leave') {
      result.push(`${nicknameByUid[uid]}님이 나갔습니다.`);
    }
  }

  return result;
}

module.exports = solution;

// 간단 검증
if (require.main === module) {
  console.log(
    solution([
      'Enter uid1234 Muzi',
      'Enter uid4567 Prodo',
      'Leave uid1234',
      'Enter uid1234 Prodo',
      'Change uid4567 Ryan',
    ])
  );
  // ["Prodo님이 들어왔습니다.", "Ryan님이 들어왔습니다.", "Prodo님이 나갔습니다.", "Prodo님이 들어왔습니다."]
}
