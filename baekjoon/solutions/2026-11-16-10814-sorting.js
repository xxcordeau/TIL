// https://www.acmicpc.net/problem/10814
// 나이순 정렬
//
// 나이 오름차순, 같으면 가입 순서(입력 순서) 유지.
// JS의 sort는 stable sort라서 입력 순서 유지가 보장된다.

function solve(lines) {
  const n = parseInt(lines[0].trim(), 10);
  const members = [];
  for (let i = 1; i <= n; i++) {
    const [age, name] = lines[i].trim().split(' ');
    members.push([parseInt(age, 10), name]);
  }
  members.sort((a, b) => a[0] - b[0]);
  return members.map(([age, name]) => `${age} ${name}`).join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}