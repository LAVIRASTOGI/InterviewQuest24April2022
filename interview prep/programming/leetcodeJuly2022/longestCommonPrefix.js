// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".



// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";
    for (let i = 0; i < strs[0].length; i++) {
        let character = strs[0][i];
        console.log(character)
            for (let j = 0; j < strs.length; j++) {
                if (strs[j][i] !== character) {
                    console.log('here',strs[j][i],j ,i)
                    return prefix
                }
            }

            prefix = prefix + character
        }
    return prefix
};
//longestCommonPrefix(["flower", "flow", "jloght"])

console.log(longestCommonPrefix(["flower", "flow", "ftlooght"]))