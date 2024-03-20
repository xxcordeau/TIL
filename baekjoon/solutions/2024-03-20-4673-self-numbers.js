// https://www.acmicpc.net/problem/4673
// 셀프 넘버
//
// 1부터 10000까지 각 수 m에 대해 생성값 d(m) = m + 자릿수 합을 구해서
// "생성된 적 있는 수"로 표시해두고, 마지막에 표시가 안 된 수들만
// 걸러내면 그게 셀프 넘버.

function digitSum(num) {
  return String(num)
    .split('')
    .reduce((sum, d) => sum + Number(d), 0);
}

function solve() {
  const LIMIT = 10000;
  const isGenerated = new Array(LIMIT + 1).fill(false);

  for (let m = 1; m <= LIMIT; m++) {
    const generated = m + digitSum(m);
    if (generated <= LIMIT) {
      isGenerated[generated] = true;
    }
  }

  const selfNumbers = [];
  for (let n = 1; n <= LIMIT; n++) {
    if (!isGenerated[n]) {
      selfNumbers.push(n);
    }
  }

  return selfNumbers.join('\n');
}

module.exports = solve;

if (require.main === module) {
  console.log(solve());
}
