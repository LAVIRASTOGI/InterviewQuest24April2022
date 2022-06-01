
//remove duplicate from array
let x=[1,3,1,1,1,5,6,5,3];

let newArr=new Set();
x.forEach(e=>{
newArr.add(e)
})

console.log(newArr)

let newArrNew =[];
x.forEach(e=>{
  if(!newArrNew.includes(e)){
    newArrNew.push(e);
  }
})

console.log(newArrNew);

let newArrNew1 =[];
x.forEach((e,i)=>{
  if(x.indexOf(e)==i){
    newArrNew1.push(e);
  }
})

console.log(newArrNew1);

//sum of third largest+2nd minium
var a1=[8,10,8,4,15,9,6,3,17];
let newarr=[...new Set(a1.sort((a,b)=>a-b))];
console.log(newarr[1]+newarr[newarr.length-3])
// console.log(newarr[2]);