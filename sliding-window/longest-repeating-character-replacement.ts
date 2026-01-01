function characterReplacement(s: string, k: number) {
  let maxLength = 0;

  let l = 0;
  const charArray: number[] = new Array(26).fill(0);
  let mostFreq = 0;

  for (let r = 0; r < s.length; r++) {
    const charIndexRight = s[r].charCodeAt(0) - 65;
    charArray[charIndexRight]++;

    mostFreq = Math.max(mostFreq, charArray[charIndexRight]);

    // this condition is the valid checker
    while (r - l + 1 - mostFreq > k) {
      const charIndexLeft = s[l].charCodeAt(0) - 65;
      charArray[charIndexLeft]--;

      l++;
    }

    maxLength = Math.max(maxLength, r - l + 1);
  }

  return maxLength;
}

const input = "AABABBA";
const output = characterReplacement(input, 1);
console.log(output);

export {};
