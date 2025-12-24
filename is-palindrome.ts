/*
  Problem:
  Given a string s, return true if it is a palindrome, otherwise return false.

  A palindrome is a string that reads the same forward and backward.
  The check is case-insensitive and ignores all non-alphanumeric characters.

  Note:
  - Alphanumeric characters consist of letters (A–Z, a–z) and numbers (0–9).

  Example 1:
  Input: s = "Was it a car or a cat I saw?"
  Output: true

  Example 2:
  Input: s = "tab a cat"
  Output: false
*/

/*
  Notes:

  - Need to use 2 pointer
  - Loop until intersection (left > right)
  - It's better sometimes to use while loop in order to not create a separate
    array. This is because in while loop, checking interesection is possible via
    (left > right or right < left)
*/

function isPalindrome(s: string) {
  let left = 0;
  let right = s.length - 1;

  // Loop until intersection
  while (left < right) {
    // Check if alphanumeric
    // If not, skip and only move the element with non-alphanumeric
    if (!/[a-zA-Z0-9]/.test(s[left])) {
      left++;
      continue;
    }

    if (!/[a-zA-Z0-9]/.test(s[right])) {
      right--;
      continue;
    }

    // If alphanumeric and same value after sanitation
    // Move both cursors
    if (s[left].toLowerCase() === s[right].toLowerCase()) {
      left++;
      right--;
      continue;
    }

    // If alphanumeric but different value, string is not palindrome
    return false;
  }

  // if loop continue until intersection, string is palindrome
  return true;
}

const input = "A man, a plan, a canal: Panama";
const output = isPalindrome(input);

console.log(output);

export {};
