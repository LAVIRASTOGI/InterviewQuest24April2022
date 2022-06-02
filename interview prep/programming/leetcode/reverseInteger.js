// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21

// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).



var reverse = function (x) {
    let isNeagtive=x<0
    let num=Math.abs(x)
    let rev_num = 0;
    while (num > 0) {
        rev_num = rev_num * 10 + num % 10;
        num = parseInt(num / 10);

    }
    if(rev_num>Math.pow(2,31)){return 0}
    return(isNeagtive?-rev_num:rev_num)
};

console.log(reverse(-9976))

