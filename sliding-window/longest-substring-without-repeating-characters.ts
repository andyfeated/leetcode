function lengthOfLongestSubstring(s: string) {
  let l = 0;
  let longestSubstring = 0;
  let hashSet = new Set();

  for (let r = 0; r < s.length; r++) {
    while (hashSet.has(s[r])) {
      hashSet.delete(s[l]);
      l++;
    }

    const length = r - l + 1;
    longestSubstring = Math.max(longestSubstring, length);

    hashSet.add(s[r]);
  }

  return longestSubstring;
}

const input = "adujdfxz";
const output = lengthOfLongestSubstring(input);

console.log("output", output);
export {};
