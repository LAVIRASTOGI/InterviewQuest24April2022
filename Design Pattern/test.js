// // // let memomizefunc= (fn)=>{
// // // const resultcache={}
// // // return function(...args){
// // //     JSON.stringify(args)
// // // }
// // // }

// // // let xy=(num1,num2)=>{
// // // for(let i=0;i<1000000;i++){}
// // // return num1*num2;
// // // }



// // // console.log('first')

// // let callbackFunc = (i) => {
// //     console.log('i want best comapny now'+i)
// // }

// // function f1(callbackfn, delaytime, numberVal) {
// //     for(let i=0;i<numberVal;i++){
// //         setTimeout(()=>{callbackfn(i)},i*(delaytime*1000))
// //     }

// //    // setInterval(callbackfn,delaytime*1000)
// // }
// // f1(callbackFunc,2,10)

// // async function func() {
// //     return 10;
// //   }
// //   console.log(func().then((res)=>console.log(res)));

// // function delay() {
// //     return new Promise(resolve => setTimeout(resolve, 2000));
// //   }

// //   async function delayedLog(item) {
// //     await delay();
// //     console.log(item);
// //   }

// //   async function processArray(array) {
// //     array.forEach(async (item )=> {
// //       console.log('lavi')
// //     })
// //   }

// //   processArray([1, 2, 3, 4]);


// // async function apiCall(){
// //     return new Promise(resolve => {
// //         setTimeout(()=>{resolve('b')},2000)
// //     })
// //   }

// //   async function logger(){
// //     console.log(await apiCall())
// //      console.log(await apiCall())
// //     console.log('c')
// //   }

// //   logger()

// // function myFun(...manyMoreArgs) {
// //     console.log(manyMoreArgs);
// //   }

// //   myFun(1, 2, 3, 4, 5);
// //   myFun(1, 2);

// let statuses = {
//     OPEN: Symbol('Open'),
//     IN_PROGRESS: Symbol('In progress'),
//     COMPLETED: Symbol('Completed'),
//     HOLD: Symbol('On hold'),
//     CANCELED: Symbol('Canceled')
// };

// let status = Symbol('status');
// let task = {
//     [status]: statuses.OPEN,
//     description: 'Learn ES6 Symbol'
// };
// console.log(task);
// console.log(Object.keys(task)); 



// class Error {
//     constructor(message) {
//       this.message = message;
//       this.code = 500; // (different names for different built-in error classes)
//     }
//   }

  class ValidationError extends Error {
    constructor(message,code=0) {
      super(message); // (1)
      this.code = code; // (2)
    }
  }
  
  function test() {
    throw new ValidationError("Whoops!");
  }

  module.exports.xy=async(flag) =>{
    
    if(true){
      throw  new ValidationError('hello error',988)
    }
  }
//  let obj=throw new ValidationError('error',)
//   let obj=new ValidationError('hello error',988)