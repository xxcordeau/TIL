// https://www.acmicpc.net/problem/11054
// 가장 긴 바이토닉 부분 수열
//
// 바이토닉 수열은 어떤 지점까지 증가하다가 그 이후로 감소하는
// 수열이다. 각 인덱스를 정점으로 본다고 하면, 왼쪽에서 오른쪽으로
// 가장 긴 증가하는 부분 수열의 길이(inc)와 오른쪽에서 왼쪽으로
// 가장 긴 증가하는 부분 수열의 길이(dec, 즉 왼쪽에서 보면 감소)를
// 각각 구해서 inc[i] + dec[i] - 1의 최댓값을 구하면 된다.

function solve(lines) {
  const n = Number(lines[0].trim());
  const a = lines[1].trim().split(' ').map(Number);

  const inc = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (a[j] < a[i] && inc[j] + 1 > inc[i]) inc[i] = inc[j] + 1;
    }
  }

  const dec = new Array(n).fill(1);
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j > i; j--) {
      if (a[j] < a[i] && dec[j] + 1 > dec[i]) dec[i] = dec[j] + 1;
    }
  }

  let best = 0;
  for (let i = 0; i < n; i++) {
    best = Math.max(best, inc[i] + dec[i] - 1);
  }

  return String(best);
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
