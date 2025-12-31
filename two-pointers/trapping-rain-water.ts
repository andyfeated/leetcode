function trap(height: number[]) {
  let allTrappedWater = 0;
  const prefixes: number[] = new Array(height.length);
  const suffixes: number[] = new Array(height.length);

  for (let i = 0; i < height.length; i++) {
    const prefix = i === 0 ? height[i] : Math.max(prefixes[i - 1], height[i]);
    prefixes[i] = prefix;
  }

  for (let i = height.length - 1; i >= 0; i--) {
    const suffix =
      i === height.length - 1
        ? height[i]
        : Math.max(suffixes[i + 1], height[i]);

    suffixes[i] = suffix;
  }

  for (let i = 1; i < height.length - 1; i++) {
    const waterLevel = Math.min(prefixes[i - 1], suffixes[i + 1]);
    const trappedWater = Math.max(waterLevel - height[i], 0);

    allTrappedWater += trappedWater;
  }

  return allTrappedWater;
}

const input = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const output = trap(input);
console.log(output);

export {};
