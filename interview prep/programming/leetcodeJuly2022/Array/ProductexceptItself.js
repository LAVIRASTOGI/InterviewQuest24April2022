// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.



// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

/**
 * @param {number[]} nums
 * @return {number[]}
 */

//bruteforceTechnique o(n2) time complexity
var productExceptSelf = function (nums) {
    let newArr = [];
    let index = 0;
    while (index < nums.length) {
        let product = 1;
        for (let i = 0; i < nums.length; i++) {
            if (i !== index) {
                product = product * nums[i]
            }
        }
        newArr[index] = product;
        index++;

    }
    return newArr
};
//better technique o(n) time complexity
var productExceptSelf2 = function (nums) {
    let output = nums.map(ele => 1)
    let product = 1;
    //multiply left side and calculate left side array
    for (let i = 0; i < nums.length; i++) {
        output[i] = output[i] * product;
        product = product * nums[i]
    }

    product = 1;
    //multiply right
    for (let i = nums.length-1;i >= 0;i--) {
        output[i] = output[i] * product;
        product = product * nums[i]
    }

 return output
};
//other way is 

console.log(productExceptSelf2([1,2,3,4]))