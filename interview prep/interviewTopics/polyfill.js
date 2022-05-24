
// Array.prototype.myMap = function (calculate) {
//   let a = [];
//   for( let i=0;i<arr.length;i++){
//     a.push(calculate(arr[i],i));
//   }
//   return a;
// }
// const arr = [1, 2, 3, 4];
// const multiplyByTwo = () => arr.myMap((value) => value * 2)
// console.log(multiplyByTwo())
// //2,4,6,8

// //reducer

// Array.prototype.myReducer = function (calculate,sum) {
//   let sumTotal = sum || 0;
  
//   arr1.forEach((e) => {
//     sumTotal=calculate(sumTotal,e)
//   })
//   return sumTotal;
// }
// const arr1 = [1, 2, 3, 4];
// const multiplyByTwo1 = () => arr1.myReducer(((sum,value) => sum+value),2)
// console.log(multiplyByTwo1())

// //filter
// Array.prototype.myfilter = function (calculate) {
//   let a=[];
//   arr2.forEach((e) => {
//     if(calculate(e)){
//       a.push(e);
//     }
//   })

//   return a;
// }
// const arr2 = [1, 21, 3, 4];
// const multiplyByTwo2 = () => arr2.myfilter((value) => value > 2)
// console.log(multiplyByTwo2())

// //console.log(arr2.myfilter((value) => value > 2))

// console.log(arr.myMap((value,index) => index * 2))
