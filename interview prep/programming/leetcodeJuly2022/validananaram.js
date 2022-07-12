// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.



// Example 1:

// Input: s = "anagram", t = "nagaram"
// Output: true
// Example 2:

// Input: s = "rat", t = "car"
// Output: false

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let OgrinalStrObj = {}
    for (let i = 0; i < s.length; i++) {
        OgrinalStrObj[s[i]] = OgrinalStrObj[s[i]] + 1 || 1
    }
    //reduce obj value
    for (let i = 0; i < t.length; i++) {
        if (OgrinalStrObj[t[i]]) {
            OgrinalStrObj[t[i]]--
        }
        else { return false }
    }
    return true;
};
console.log(isAnagram('ratt','ratt'))