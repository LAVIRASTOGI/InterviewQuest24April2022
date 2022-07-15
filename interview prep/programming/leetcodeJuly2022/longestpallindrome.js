// Given a string s, return the longest palindromic substring in s.



// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"


/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
    let pallindromeFunc = (s, left, right) => {
        while (left >= 0 && right < s.length && s[left] == s[right]) {
            let lengthPallindrome = right - left + 1;
            if (maxlength < lengthPallindrome) {
                maxlength = lengthPallindrome;
                startIndex = left
            }
            left--;
            right++;
        }
    }

    let maxlength = 1;
    let startIndex = 0;

    for (let i = 0; i < s.length; i++) {
        //oddpallindrome
        pallindromeFunc(s, i - 1, i + 1)
        //evenpallindrome
        pallindromeFunc(s, i, i + 1)
    }

    return s.slice(startIndex, maxlength + startIndex)
};

console.log(longestPalindrome('babbid'))