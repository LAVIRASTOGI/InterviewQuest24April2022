
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