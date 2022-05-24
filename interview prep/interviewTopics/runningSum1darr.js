// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].

var runningSum = (nums)=> {
    let arr=[];
    let sum=0;
     nums.forEach((ele)=>{
        sum= sum+ele;
         arr.push(sum)
     })
     return arr;
};

console.log(runningSum([1,2,3,4]))