/**
 * 小镇里有 n 个人，按从 1 到 n 的顺序编号。传言称，这些人中有一个暗地里是小镇法官。
 * 如果小镇法官真的存在，那么：
 * 小镇法官不会信任任何人。
 * 每个人（除了小镇法官）都信任这位小镇法官。
 * 只有一个人同时满足属性 1 和属性 2 。
 * 给你一个数组 trust ，其中 trust[i] = [ai, bi] 表示编号为 ai 的人信任编号为 bi 的人。
 * 如果小镇法官存在并且可以确定他的身份，请返回该法官的编号；否则，返回 -1 。
 * */

/*
* 可以通过统计入度和出度来解决
* */

function findJudge(n: number, trust: number[][]): number {
  let res = -1;
  const inDegree = new Array(n + 1).fill(0);
  const outDegree = new Array(n + 1).fill(0);

  for (let i = 0; i < trust.length; i++) {
    const [a, b] = trust[i];
    inDegree[b]++;
    outDegree[a]++;
  }

  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === n - 1 && outDegree[i] === 0) {
      res = i;
      break;
    }
  }

  return res;
}