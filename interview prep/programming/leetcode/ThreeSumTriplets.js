// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Example 2:

// Input: nums = []
// Output: []
// Example 3:

// Input: nums = [0]
// Output: []

//solutionnn
// so in three sum method  of solving is  --- 
//   1.sort the array
// 1.loop to the and point to first number (target-num[i])
// 2 take 2 ointer left and right 
// 3 if(left+right)< target left++ 
// 4 if(left+right)>target right--
// 5 when left+right ==target (push in a new array)
// 6 remeber in 1st when one is pushed duplicates should not be there so if next ellemnt is same so by pass it same goe swith left element also

var threeSum = function(nums) {
    let sortedArr= nums.sort((a,b)=>a-b);
     let newTripletsArr=[]
    for(let i=0;i<sortedArr.length;i++){
        let curr_target=0-sortedArr[i];
        let left=i+1;
        let right=sortedArr.length-1;
        if(i>0 && sortedArr[i]===sortedArr[i-1]){
            continue;
        }
        while(left<right){
         if((sortedArr[left]+sortedArr[right])===curr_target){
             newTripletsArr.push([sortedArr[i],sortedArr[left],sortedArr[right]]);
             left++;
             while(sortedArr[left]===sortedArr[left-1]){
                 left++;
             }
         }else if((sortedArr[left]+sortedArr[right])<curr_target){
          left++;
         }else{
         right --;
         }
        }

    }
    return newTripletsArr
};
let nums = [-1,0,1,2,-1,-4]
//[-4,-1,-1,0,1,2]

console.log(threeSum(nums))