let inputArr = [1, 2, 4, 5, 6, 7, 8];
// let outputarr=inputArr.filter((ele)=>ele%2==0);
// console.log(outputarr)
// output --[ 2, 4, 6, 8 ]

//polyfill of filter
// Array.prototype.newFilter = function (fn) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         if (fn(this[i], i, this)) {
//             result.push(this[i])
//         }
//     }
//     return result;
// }
// console.log(inputArr.newFilter((ele, index, arr) => ele % 2 == 0))



// let inputMap = [3, 5, 6, 7]
// // //let outputMap=[4,6,7,8]
// // //console.log(inputMap.map((ele)=>++ele))

// //polyfill of map
// Array.prototype.newMap = function (fn) {
//     let result = [];
//     for (let i = 0; i < this.length; i++) {
//         result.push(fn(this[i], i, this))
//     }
//     return result;
// }
// console.log(inputMap.newMap((ele, index, arr) => ++ele)) //[4,6,7,8]


// let inputReduce = [1, 2, 3, 4]
// //o/p -- 10
// // let x5 = inputReduce.reduce(((prev, curr, index, arr) => prev = prev + curr), -9)
// // console.log(x5) //1 if we give initial value

// //polyfill of reduce
// Array.prototype.newReduce = function (fn, prev) {
//     let result = typeof prev === 'undefined' ? this[0] : prev;
//     let indexVal = typeof prev === 'undefined' ? 1 : 0;

//     for (let i = indexVal; i < this.length; i++) {
//         result = fn(result, this[i], i, this);
//     }
//     return result
// }
// let x = inputReduce.newReduce(((prev, curr, index, arr) => prev = prev + curr))
// console.log(x)


// let numarray1 = [3, 5, 2, 8, 1]
// let newoddarr2 = numarray1.newReduce((prev, curr, index) => index % 2 != 0 ? prev + curr : prev, 0)
// console.log(newoddarr2)



// let numarray = ['lavi', 'suman', 'chhavi', 'divya']
// //o/p- lavi suman chhavi divya
// //numarray.forEach((ele,i,arr)=>console.log(ele))

// //polyfill foreach
// Array.prototype.newforEach = function (fn) {
//     for (let i = 0; i < this.length; i++) {
//         fn(this[i], i, this)
//     }
// }
// numarray.newforEach((ele, i, arr) => console.log(ele))


// //polyfill of find
// Array.prototype.myfind = function (fn) {
//     let result;
//     for (let i = 0; i < this.length; i++) {
//         if (fn(this[i], i, this)) { result = this[i]; break; }

//     }
//     return result;
// }
// console.log(inputArr.myfind((ele, index, arr) => ele == 6)) //[4,6,7,8]




// var obj1 = { name: 'lavi', last: 'rastogi' }

// function nameCaptical(city, pincode) {
//     console.log(this.name, this.last, city, pincode)
// }

// //polyfill of call

// Function.prototype.myCall = function (obj, ...args) {
//     obj._this = this;
//     obj._this(...args)
// }

// nameCaptical.myCall(obj1, 'lko', 201304);

// //polyfill for apply
// Function.prototype.myApply = function (obj, args) {
//     obj._this = this;
//     obj._this(...args)
// }

// nameCaptical.myApply(obj1, ['lko', 201304]);


// //polyfil for bind
// Function.prototype.myBind = function (obj, ...args) {
//     obj._this = this;
//     return function (...params) {
//         let combinedparams = [...args, ...params];
//         obj._this(...combinedparams)
//     }
// }

// let newfunc = nameCaptical.myBind(obj1, 'lko');
// console.log(newfunc(20287))


// polyfill for promise ---
// let promiseExample = new Promise((resolve, reject) => {
//     false ? resolve('value is resolved') : reject('value is rejected')
// })
// promiseExample.then((val) => `return again promise ${val}`).then((val) => { console.log(val) })
//     .catch((val) => console.log('error ' + val))

// let p1 = () => {
//     return new Promise((res, reject) => {
//         console.log('1')
//         res('1000 good work resolved')
//     })
// }

// let p2 = Promise.reject(10)

//Promise.all([p2,p1()]).then(data=>console.log(data))

class MyPromise {
    reslovedVal;
    rejectedVal;
    isResolveFlag;
    isRejectedFlag;
    // thenFn;
    // catchFn;

    //for chaining
    resolvedChain = [];
    rejectedCahin = [];


    static resolve(val) {
        return new MyPromise((resolve) => resolve(val))
    }

    static reject(val) {
        return new MyPromise((_resolve, reject) => reject(val))
    }

    static all(promises) {
      
    let filterResults=[]
    let results=[];

    return new MyPromise((resolve,reject)=>{
        promises.forEach((promise,index)=>{
            promise.then((data)=>{
                filterResults.push(true);
                results[index]=data;
                if(filterResults.length===promises.length){
                    resolve(results)
                }
            }).catch((data)=>{
                reject('error during promise all')
            })
        })
    })
    }


    static allSettled(promises) {
      
        let filterResults=[]
        let results=[];
    
        return new MyPromise((resolve,reject)=>{
            promises.forEach((promise,index)=>{
                promise.then((data)=>{
                    filterResults.push(true);
                    
                    results[index]={status:'fulfilled',value:data};
                    if(filterResults.length===promises.length){
                        resolve(results)
                    }
                }).catch((data)=>{
                    filterResults.push(true);
                    results[index]={status:'rejected',value:data};
                    if(filterResults.length===promises.length){
                        reject(results)
                    }
                })
            })
        })
        }
    

        static race(promises) {
      
            let filterResults=[]
            let results=[];
        
            return new MyPromise((resolve,reject)=>{
                promises.forEach((promise,index)=>{
                    promise.then((data)=>{
                        filterResults.push(true);
                        if(filterResults.length===1){
                            resolve(data)
                        }
                        
                    }).catch((data)=>{
                        filterResults.push(true);
                        if(filterResults.length===1){
                            reject(data)
                        }
                        
                    })
                })
            })
            }
        
            static any(promises) {
      
                let filterResults=[]
                let results=[];
            
                return new MyPromise((resolve,reject)=>{
                    promises.forEach((promise,index)=>{
                        promise.then((data)=>{
                            filterResults.push(true);
                            if(filterResults.length===1){
                                resolve(data)
                            }
                            
                        }).catch((data)=>{
                            // if(filterResults.length===0){
                            //     reject(data)
                            // }
                            
                        })
                    })
                    if(filterResults.length===0){
                                reject('[AggregateError: All promises were rejected]')
                            }
                })
                }
            
    
    constructor(excecutor) {
        const resolve = (value) => {
            this.reslovedVal = value;
            this.isResolveFlag = true;

            // if (typeof this.thenFn === 'function') {
            //     this.thenFn(this.reslovedVal)
            // }

            //if chaining

            if (this.resolvedChain.length) {
                this.resolvedChain.reduce((acc, fn) => fn(acc), this.reslovedVal)
            }



        }

        const reject = (value) => {
            this.rejectedVal = value;
            this.isRejectedFlag = true;
            // if (typeof this.catchFn=== 'function') {
            //     this.catchFn(this.rejectedVal)
            // }

            //if chaining

            if (this.rejectedCahin.length) {
                this.rejectedCahin.reduce((acc, fn) => fn(acc), this.rejectedVal)
            }
        }

        excecutor(resolve, reject)
    }

    then(fn) {
        //this.thenFn = fn
        this.resolvedChain.push(fn)
        if (this.isResolveFlag == true) {
            //this.thenFn(this.reslovedVal)
            this.resolvedChain.reduce((acc, fn) => fn(acc), this.reslovedVal)
        }
        return this
    }
    catch(fn) {
        //this.catchFn = fn
        this.rejectedCahin.push(fn)
        if (this.isRejectedFlag == true) {
            //this.catchFn(this.reslovedVal)

            this.rejectedCahin.reduce((acc, fn) => fn(acc), this.rejectedVal)
        }
        return this
    }
    finally(fn) {

        this.rejectedCahin.push(fn)

        if (this.isResolveFlag == true) {
            //this.thenFn(this.reslovedVal)
            this.resolvedChain.reduce((acc, fn) => fn(acc), this.reslovedVal)
        }

        if (this.isRejectedFlag == true) {
            //this.catchFn(this.reslovedVal)

            this.rejectedCahin.reduce((acc, fn) => fn(acc), this.rejectedVal)
        }
    }

}

// let promiseExample = new MyPromise((resolve, reject) => {
//     false ? resolve('value is resolved') : reject('value is rejected')
// })
// promiseExample.then((val) => (`return again promise ${val}`)).then((data) => console.log('hi' + data)).catch((data) => console.log('error' + data))



let p1 = () => {
    return new Promise((res, reject) => {
         setTimeout(()=>{
             reject('1000 good work resolved')
         },3000)
        //res('1000 good work resolved')
    })
}

let p2 = Promise.reject('error in data')

MyPromise.any([p1(),p2]).then(data=>console.log(data)).catch((data)=>console.log(data))