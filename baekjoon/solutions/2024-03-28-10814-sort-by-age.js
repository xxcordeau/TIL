// https://www.acmicpc.net/problem/10814
// 나이순 정렬
//
// 나이 기준으로만 정렬하되, 같은 나이는 입력 순서를 유지해야 하는
// "안정 정렬"이 필요한 문제. 자바스크립트 Array.sort는 안정 정렬이
// 보장되니까 나이만 비교해주면 순서가 자동으로 유지된다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const members = lines.slice(1, 1 + n).map((line) => {
    const [age, ...nameParts] = line.trim().split(' ');
    return { age: Number(age), name: nameParts.join(' ') };
  });

  members.sort((a, b) => a.age - b.age);

  return members.map((m) => `${m.age} ${m.name}`).join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
