//union of arrays 2

let x1=[2,7,4,8];
let x2=[8,2,9,6];

let newUinionArr=new Set([...x1,...x2]);
console.log(newUinionArr);

let newUinionArr1=[];
[...x1,...x2].forEach((e,i)=>{
if([...x1,...x2].indexOf(e)==i){
  newUinionArr1.push(e)
}
})
console.log(newUinionArr1)