
/**
* Reverse Vowels
*
* Tags: Map, Two Pointer, String
* Leetcode: 345
*
* Write a function that takes a string as input and reverse only
* the vowels of a string.
*
* Example:
* Input: 'hello'
* Output: 'holle'
*
* Example:
* Input: 'leetcode'
* Output: 'leotcede'
*
* You can assume that the string will contain letters [a-z], mixed lowercase and uppercase.
*/

/**
* reverseVowels()
*
* Solution:
*
* We approach this one using a set to store values of vowels. We could use an
* array too, but we get a slightly better runtime with a set I believe. That is,
* array.indexOf() vs set.has().
*
* We simply iterate over the string, check each character against our set, and if
* it's a vowel we save that instance into an array. Essentially a stack.
*
* If there are no vowels, or 1, we return the string. We can't reverse a single vowel.
*
* Then we iterate string again, building our result at each character. If we encounter
* a vowel, we pop() from our stack and push, this will ensure that vowels are placed into
* result in reverse to the original string.
*
* Time: O(n + m)
* Space: O(n)
*
* Where n is the length of the string input and m is the number of vowels.
*
* @param {string} s string of (n) length
* @return {string} returns a string with vowels reversed
*/

function reverseVowels(s) {
  // edge case
  if (s.length <= 1) return s;

  // store vowel values
  const vowels = new Set(['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U']);

  // vowel stack
  const pulledVowels = [];

  // pull out vowels from our string
  for (const char of s) {
    if (vowels.has(char)) {
      pulledVowels.push(char);
    }
  }

  // if there's no, or only 1, vowel
  if (pulledVowels.length <= 1) return s;

  // otherwise, iterate string again, when we come arcoss a vowel pop()
  // from the back of pulledVowels, this will replace them in reverse.
  const result = [];
  for (const char of s) {
    if (vowels.has(char)) {
      result.push(pulledVowels.pop());
    } else {
      result.push(char);
    }
  }

  return result.join('');
}

export default reverseVowels;
