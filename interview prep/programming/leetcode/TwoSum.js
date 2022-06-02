// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        let indexTarget= nums.indexOf((target-nums[i]),i+1);
        if(indexTarget!==-1){
           return[i,indexTarget];
            break;
        }     
    }
    
    return []
};


//another using map

var twoSum = function (nums, target) {
    
    var obj = new Map();

    for( var i = 0; i < nums.length; i++ ) {

        if(obj.has(target - nums[i])) {
            return [obj.get(target - nums[i]), i];
        }
        obj.set(nums[i] , i)
    }
};

console.log(twoSum([3,2,4],6)) // [1,2]
console.log(twoSum([3,2,4],6)) // [1,2]