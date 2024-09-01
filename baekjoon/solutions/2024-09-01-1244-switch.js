// https://www.acmicpc.net/problem/1244
// 스위치 켜기와 끄기
//
// 남학생은 자기가 받은 수의 배수 번호 스위치를 전부 뒤집으면 되고,
// 여학생은 받은 번호를 기준으로 좌우 대칭으로 뒤집어 나가되 상태가
// 달라지거나 범위를 벗어나면 멈추는 식으로 처리하면 된다. 1-indexed로
// 다루는 게 헷갈리지 않아서 배열 앞에 더미 값을 하나 넣고 시작했다.

function solve(lines) {
  let idx = 0;
  const n = Number(lines[idx++].trim());
  const sw = [0, ...lines[idx++].trim().split(' ').map(Number)];
  const m = Number(lines[idx++].trim());

  for (let q = 0; q < m; q++) {
    const [gender, num] = lines[idx++].trim().split(' ').map(Number);

    if (gender === 1) {
      for (let i = num; i <= n; i += num) {
        sw[i] = 1 - sw[i];
      }
    } else {
      sw[num] = 1 - sw[num];
      let l = num - 1;
      let r = num + 1;
      while (l >= 1 && r <= n && sw[l] === sw[r]) {
        sw[l] = 1 - sw[l];
        sw[r] = 1 - sw[r];
        l--;
        r++;
      }
    }
  }

  const out = [];
  for (let i = 1; i <= n; i += 20) {
    out.push(sw.slice(i, i + 20).join(' '));
  }

  return out.join('\n');
}

module.exports = solve;

if (require.main === module) {
  const input = require('fs').readFileSync('/dev/stdin').toString().split('\n');
  console.log(solve(input));
}
