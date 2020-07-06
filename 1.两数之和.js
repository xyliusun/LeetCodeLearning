/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// 暴力穷举法
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i += 1) {
//     for (let j = i + 1; j < nums.length; j += 1) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j]
//       }
//     }
//   }
// };


// 用map遍历一次
var twoSum = function (nums, target) {
  const result = {};
  for (let i = 0; i < nums.length; i += 1) {
    if (result[target - nums[i]] !== undefined) {
      return [result[target - nums[i]], i]
    } else {
      result[nums[i]] = i;
    }
  }
};
// @lc code=end

