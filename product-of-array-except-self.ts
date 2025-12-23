/*
  Problem: 
  Given an integer array nums, return an array output where output[i] is the product
  of all the elements of nums except nums[i].

  Each product is guaranteed to fit in a 32-bit integer.

  Follow-up: Could you solve it in O(n) time without using the division operation?

  Example 1:
  Input: nums = [1,2,4,6]
  Output: [48,24,12,8]
*/

/* 
  Notes:

  - Basically each element in prefix or suffix must be an already calculated so that 
    nums[i] can just access it via [i - 1] (prefix) or [i + 1] (suffix)
  - Example
    - nums[i] = 2
    - prefix already calculated: 1 
    - suffix already calculated: 12 (4 x 6)
    - since problem is asking everything before (prefix) and after (suffix)
      we have to multiply prefix and suffix
*/

function productOfArrayExceptSelf(nums: number[]) {
  const prefixes: number[] = new Array(nums.length)
  const suffixes: number[] = new Array(nums.length)

  // create prefixes and suffixes so that i - 1 or i + 1 is already calculated when accessed
  for (let i = 0; i < nums.length; i++) {
    const prefix = i === 0 ? nums[i] : nums[i] * prefixes[i - 1]
    prefixes[i] = prefix
  }

  for (let i = nums.length - 1; i >= 0; i--) {
    const suffix = i === nums.length - 1 ? nums[i] : nums[i] * suffixes[i + 1]
    suffixes[i] = suffix
  } 

  // we can reuse nums instead of making a new const since it's not relevant anyway
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      nums[i] = suffixes[i + 1]
      continue;
    }

    if (i === nums.length - 1) {
      nums[i] = prefixes[i - 1]
      continue;
    }

    nums[i] = prefixes[i - 1] * suffixes[i + 1]
  }

  return nums
}

const input = [-1, 1, 0, -3, 3]

const output = productOfArrayExceptSelf(input)
console.log(output)
