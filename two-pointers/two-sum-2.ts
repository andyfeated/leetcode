function twoSum(numbers: number[], target: number) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    const sum = numbers[l] + numbers[r];

    if (target > sum) {
      l++;
    }

    if (target < sum) {
      r--;
    }

    if (target === sum) {
      return [l + 1, r + 1];
    }
  }
}

const input = [2, 7, 11, 15];
const target = 9;

const output = twoSum(input, target);
console.log(output);

export {};
