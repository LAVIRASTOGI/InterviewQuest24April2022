let inputArr=[1,2,4,5,6,7,8];
// // let outputarr=inputArr.filter((ele)=>ele%2==0);
// // console.log(outputarr)
// // output --[ 2, 4, 6, 8 ]
 
//polyfill of filter
Array.prototype.newFilter = function (fn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (fn(this[i], i, this)) {
            result.push(this[i])
        }
    }
    return result;
}
console.log(inputArr.newFilter((ele, index, arr) => ele % 2 == 0))
 
 
 
 let inputMap=[3,5,6,7]
// //let outputMap=[4,6,7,8]
// //console.log(inputMap.map((ele)=>++ele))
 
//polyfill of map
Array.prototype.newMap = function (fn) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(fn(this[i], i, this))
    }
    return result;
}
console.log(inputMap.newMap((ele, index, arr) => ++ele)) //[4,6,7,8]
 
 
let inputReduce = [1, 2, 3, 4]
//o/p -- 10
// let x5 = inputReduce.reduce(((prev, curr, index, arr) => prev = prev + curr), -9)
// console.log(x5) //1 if we give initial value
 
//polyfill of reduce
Array.prototype.newReduce = function (fn, prev) {
    let result = typeof prev === 'undefined' ? this[0] : prev;
    let indexVal = typeof prev === 'undefined' ? 1 : 0;
 
    for (let i = indexVal; i < this.length; i++) {
        result = fn(result, this[i], i, this);
    }
    return result
}
let x = inputReduce.newReduce(((prev, curr, index, arr) => prev = prev + curr))
console.log(x)
 
 
let numarray1 = [3, 5, 2, 8, 1]
let newoddarr2 = numarray1.newReduce((prev, curr, index) => index % 2 != 0 ? prev + curr : prev, 0)
console.log(newoddarr2)
 
 
 
let numarray=['lavi','suman','chhavi','divya']
//o/p- lavi suman chhavi divya
//numarray.forEach((ele,i,arr)=>console.log(ele))
 
//polyfill foreach
Array.prototype.newforEach=function (fn){
    for(let i=0;i<this.length;i++){
        fn(this[i],i,this)
    }
}
numarray.newforEach((ele,i,arr)=>console.log(ele))
 
 
//polyfill of find
Array.prototype.myfind = function (fn) {
    let result;
    for (let i = 0; i < this.length; i++) {
        if(fn(this[i], i, this)){result =this[i]; break;}
       
    }
    return result;
}
console.log(inputArr.myfind((ele, index, arr) => ele==6)) //[4,6,7,8]
 
 
 
 
var obj1 = { name: 'lavi', last: 'rastogi' }
 
function nameCaptical(city, pincode) {
    console.log(this.name, this.last, city, pincode)
}
 
//polyfill of call
 
Function.prototype.myCall = function (obj, ...args) {
    obj._this = this;
    obj._this(...args)
}
 
nameCaptical.myCall(obj1, 'lko', 201304);
 
//polyfill for apply
Function.prototype.myApply = function (obj, args) {
    obj._this = this;
    obj._this(...args)
}
 
nameCaptical.myApply(obj1, ['lko', 201304]);
 
 
//polyfil for bind
Function.prototype.myBind = function (obj, ...args) {
    obj._this = this;
    return function (...params) {
        let combinedparams=[...args,...params];
        obj._this(...combinedparams)
    }
}
 
let newfunc = nameCaptical.myBind(obj1, 'lko');
console.log(newfunc(20287))