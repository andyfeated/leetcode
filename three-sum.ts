/* 
  Problem:
  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] 
  where nums[i] + nums[j] + nums[k] == 0, and the indices i, j, and k are all distinct.

  The output should not contain any duplicate triplets. You may return the output 
  and the triplets in any order.

  Example 1:

  Input: nums = [-1,0,1,2,-1,-4]

  Output: [[-1,-1,2],[-1,0,1]]
*/

/*
  Notes:
  - Left should never be a value that was accessed by i already
  - To prevent duplciates, we have to skip values already processed
   previously by the same index
   - Example: [-3, -3, -3, 0, 3, 3]
      - i = -3, l = -3, r = 3 (sum: -3)
      - l is supposed to go to the next -3 but since it's the same
        value as the previous one, we will skip and go directly to 0
*/

function threeSum(nums: number[]) {
  // Javascript here has a skill issue and won't sort properly
  const sortedNums = nums.sort((a, b) => a - b);
  const output: number[][] = [];

  for (let i = 0; i < sortedNums.length; i++) {
    // Left should always be AFTER i
    let left = i + 1;
    let right = sortedNums.length - 1;

    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) {
      continue;
    }

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      // skip if same value as prev
      if (
        right < nums.length - 1 &&
        sortedNums[right] === sortedNums[right + 1]
      ) {
        right--;
        continue;
      }

      // need to check i + 1 since i + 1 is the very first valid value of left
      // as it cannot be i
      if (left > i + 1 && sortedNums[left] === sortedNums[left - 1]) {
        left++;
        continue;
      }

      // adjust pointers depending on sum
      // we can only do this because array is sorted already
      if (sum > 0) {
        right--;
        continue;
      }

      if (sum < 0) {
        left++;
        continue;
      }

      if (sum === 0) {
        output.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        right--;

        continue;
      }
    }
  }

  return output;
}

const input = [2, -3, 0, -2, -5, -5, -4, 1, 2, -2, 2, 0, 2, -4, 5, 5, -10];
const output = threeSum(input);
console.log("here", output);

export {};
