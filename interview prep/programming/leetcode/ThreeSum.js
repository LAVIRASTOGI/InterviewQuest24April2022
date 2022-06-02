var threeSum=(nums,target)=>{
    let map=new Map();
    for(let i=0;i<nums.length;i++){
       let currtarget= target-nums[i]; //18
       for(let j=i+1;j<nums.length;j++){
      let newTarget=currtarget-nums[j];//18-8=10
      if(map.has(newTarget)){
          return[nums[map.get(newTarget)],nums[j],nums[i]];
          break;
      }
      map.set(nums[j],j)
       }

    }
}

let A=[1, 4, 45, 6, 10, 8];
let sum = 22;
console.log(threeSum(A,sum)) //[8,10,4]