function findMaxAverage(nums: number[], k: number) {
  let sum = 0;

  for (let l = 0; l < k; l++) {
    sum = nums[l] + sum;
  }

  let maxAverage = sum / k;

  for (let l = k; l < nums.length; l++) {
    sum = sum - nums[l - k] + nums[l];
    maxAverage = Math.max(maxAverage, sum / k);
  }

  return maxAverage;
}

const input = [-1];
const output = findMaxAverage(input, 1);
console.log(output);

export {};
