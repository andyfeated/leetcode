function maxArea(height: number[]) {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    const area = Math.min(height[left], height[right]) * (right - left);

    if (area > maxArea) {
      maxArea = area;
    }

    if (height[left] < height[right]) {
      left++;
      continue;
    } else {
      right--;
      continue;
    }
  }

  return maxArea;
}

const height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const output = maxArea(height);

console.log(output);

export {};
