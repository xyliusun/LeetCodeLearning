/*
 * @lc app=leetcode.cn id=63 lang=javascript
 *
 * [63] 不同路径 II
 */

// @lc code=start

// MARK: 解法一
/**
 * 这样自底向上的递归会存在大量的重复计算，所以用下，
 * 成绩：
41/41 cases passed (72 ms)
Your runtime beats 72.75 % of javascript submissions
Your memory usage beats 15.38 % of javascript submissions (35.8 MB)
 */

// // cache
// let gridCache = {}

// // f(m,n) = f(m-1, n) + f(m, n-1)
// function f(m, n, obstacleGrid) {
//   const currCache = gridCache[m + ',' + n];
//   if ( currCache !== undefined) return currCache;
//   if (n<0 || m<0) return 0;
//   if (obstacleGrid[m][n] === 1) return 0;
//   if (n ===0 && m === 0) return 1;
//   const result = f(m-1, n, obstacleGrid) + f(m, n-1, obstacleGrid);
//   gridCache[m + ',' + n] = result;
//   return result;
// }
// /**
//  * @param {number[][]} obstacleGrid
//  * @return {number}
//  */
// var uniquePathsWithObstacles = function(obstacleGrid) {
//   gridCache = {};
//   return f(obstacleGrid.length - 1, obstacleGrid[0].length - 1, obstacleGrid)
// };


// MARK: 解法二
/**
 * 自上到下
 * 成绩：
41/41 cases passed (84 ms)
Your runtime beats 24.9 % of javascript submissions
Your memory usage beats 7.69 % of javascript submissions (36.1 MB)
 */

const initialize2DArray = (w, h, val = null) =>
  Array(h)
    .fill()
    .map(() => Array(w).fill(val));

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  const m = obstacleGrid.length, n = obstacleGrid[0].length;
  const dp = initialize2DArray(n, m, 0);

  // 定义 dp 数组并初始化第 1 行和第 1 列。
  for (let i = 0; i < m && obstacleGrid[i][0] == 0; i++) {
    dp[i][0] = 1;
  }
  for (let j = 0; j < n && obstacleGrid[0][j] == 0; j++) {
    dp[0][j] = 1;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (obstacleGrid[i][j] == 0) {
        dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
      }
    }
  }

  return dp[m - 1][n - 1]
};

// @lc code=end

