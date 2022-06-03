// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.



var isPalindrome = function(s) {
    let regex =/[\W_]*/g
    s=s.replace(regex,'').toLowerCase();
    let newstr=s.split('').reverse().join('');
    console.log(s)
    return newstr===s
 };
 console.log(isPalindrome('A man, a plan, a canal: Panama'))
 console.log(isPalindrome('ab_a'))


 //another way using left right pointer
 
var isPalindrome = function(s) {
    let regex =/[\W_]*/g
    s=s.replace(regex,'').toLowerCase();
    let left=0;
    let right=s.length-1;
    let flag=false;
    while(left<right){
        if(s[left]!=s[right]){
           flag=false
        }else{
            flag=true
        }
        left++;
        right--;
    }
    return flag
 };
 console.log(isPalindrome('cbbgbu'))
 console.log(isPalindrome('ab_a'))