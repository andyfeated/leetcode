/*
 Problem:
 Given an unsorted array of integers `nums`, return the length of the longest
 sequence of consecutive elements. The algorithm must run in O(n) time.

 Example 1:
 Input: nums = [100, 4, 200, 1, 3, 2]
 Output: 4
 Explanation: The longest consecutive sequence is [1, 2, 3, 4],
 so the length is 4.
*/

/*
 Notes:
  - A loop within a loop can still be o(n) as long as the it does not
    run on every iterration of the outer loop (Amortized)
  - We can directly inject nums to numsSet to not create a separate 
    for loop for the set
*/

function longestConsecutive(nums: number[]) {
  const numsSet = new Set(nums);
  let longestStreak = 0;

  // We need to itereate trough numSet instead of nums
  // since numSet removes duplicates

  // Removing duplicates is important so that if there
  // are multiple elements that are start of the streak
  // like 0, it won't repeat the same operation
  for (const num of numsSet) {
    // We only need start counting the streak if num
    // is actually the start

    // Otherwise, we will count the streak for every
    // single element redundantly
    const isStartOfStreak = !numsSet.has(num - 1);
    let streak = 1;

    if (isStartOfStreak) {
      // If start of streak, start checking if the next
      // num is in the Set (num + streak)

      // Streak adds one each itteration so that the streak
      // continues: 1 + 1, 1 + 2, 1 + 3, then so on
      while (numsSet.has(num + streak)) {
        streak++;
      }
    }

    // If current streak is longer than previously recorded
    // update the longestStreak
    if (streak > longestStreak) {
      longestStreak = streak;
    }
  }

  return longestStreak;
}

const input = [100, 4, 200, 1, 3, 2, 1];
const output = longestConsecutive(input);
console.log(output);

export {};
