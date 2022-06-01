// // // // // var str='Welcome to this Javascript Guide!';

// // // // // // // var str1=str.split(' ');
// // // // // // // var arrnew=[];
// // // // // // // function reverseword(valueStr){
// // // // // // //   let str1='';
// // // // // // //   for(let i=valueStr.length-1;i>=0;i--){
// // // // // // //     str1=str1+valueStr[i]
// // // // // // //   }
// // // // // // //   arrnew.push(str1);
// // // // // // // }
// // // // // // // str1.forEach((e)=>{
// // // // // // //   reverseword(e)
// // // // // // // });

// // // // // // // console.log(arrnew.join(' '))



// // // // // // var fib = function(n) { 
// // // // // //   let arr =[0,1];
// // // // // //   for(let i=1;i<n;i++){
// // // // // //   arr.push(arr[i-1]+arr[i])
// // // // // //   }
// // // // // //   return arr[n];
// // // // // // };

// // // // // // console.log(fib(3))

// // // // // // //console.log(a)
// // // // // // let a=f();

// // // // // // const b=9;

// // // // // // function f(){
// // // // // //   return b;
// // // // // // }
// // // // // // console.log(a)

// // // // // // var a = [1, 2, 3, 4, 5]
// // // // // // const [First, sec, ...rest] = a;
// // // // // // console.log(First, sec, rest);

// // // // // // console.log(window.a)

// // // // // // let obj = {
// // // // // //   a: 9,
// // // // // //   fn: function () {
// // // // // //    let b = this.a;
// // // // // //     return( () => {
// // // // // //       console.log(b)
// // // // // //     })()
// // // // // //   }
// // // // // // }
// // // // // // obj.fn();

// // // // // const number=[1,2,3,4,5,6,7,8,9]

// // // // // console.log(number.reduce((sum,num,index)=>(index+1)%2!=0?sum=sum+num:sum),0)

// // // // //  const numbers = [1, 2, -3, 4, 5, 76, 7, 8, 9];
// // // // // const sums = (sum, num, index) => {
// // // // //   return index % 2 !== 0 ? num + sum : sum;
// // // // // };
// // // // // console.log(numbers.reduce(sums, 0));
// // // // // //console.log(number.reduce((sum,num)=>num%2==0? sum=sum+num*2:sum))

// // // // // let x=numbers.reduce((sum,num)=>{
// // // // //   if(sum<num){
// // // // //     sum=num
// // // // //     return sum
// // // // //   }else{
// // // // //     return sum
// // // // //   }
// // // // // })
// // // // // console.log(x)

// // // // // const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // // // // const sums = (prev, num) => num%2 === 0 ? [...prev, 2*num] : [...prev, num]
// // // // // console.log(numbers.reduce(sums,[]));

// // // // const numbers = [1, 2, 3, 4, 6];

// // // // const obj = {
// // // //   odd: 0,
// // // //   even: 0,
// // // // };

// // // // //accumaulator func hold intial value hold
// // // // let x=numbers.reduce((prev,curr)=>{
// // // //   if(curr%2==0){
// // // //     return{
// // // //       ...prev,
// // // //       even: ++prev.even
// // // //     }
// // // //   }else{
// // // //     return{
// // // //       ...prev,
// // // //       odd: ++prev.odd
// // // //     }
// // // //   }
// // // // },obj)

// // // // console.log(x);

// // // // ['apple',  'grapes',  'mango', 'watermelon', 'kiwi']
// // // // {4:1, 5:2, 6:1, 10:1}

// // // const stringarr = ['apple', 'grapes', 'mango', 'watermelon', 'kiwi'];

// // // let x = stringarr.reduce((prev, cur) => {
// // //   if (prev[cur.length]) {
// // //     const newObj = { ...prev };
// // //     newObj[cur.length] = newObj[cur.length] + 1;
// // //     return newObj;
// // //   } else {
// // //     const newObj = { ...prev };
// // //     newObj[cur.length] = 1;
// // //     return newObj;
// // //   }}
// // //   , {})

// // // console.log(x)

// // // fruits.reduce(
// // //   (prev, curr) =>
// // //   (prev[curr.length] ? { ...prev, [curr.length]: ++prev[curr.length] } :
// // //     {...prev, [curr.length] : 1})
// // //   ,{})



// // const fruits=["apple", "orange", "banana", "papaya", "wwqwwqwwq"]
// // const findVowels = (prev, curr) => /[aeiou]/.test(curr) ? [...prev] : [...prev,curr];

// // let x=fruits.reduce(findVowels, []);
// // console.log(x)


// const input = [
//   ['a', 'b', 'c'],
//   ['c', 'd', 'e'],
//   ['e', 'd', 'f'],
// ];
// // our output should be: {a: 1, b: 1, c: 2, d: 2, e: 2, f: 1}
// // Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']
// // // Your output should be: ['a', 'b', 'c', 'c', 'd', 'e', 'e', 'd', 'f']


// let x=input.reduce((prev,curr)=>[...prev,...curr],[])



// const number=[1,2,3]

// console.log(number.reduce((prev,curr)=>prev=(prev+curr).toString(),0))

// var voters = [
//   {name:'Bob' , age: 30, voted: true},
//   {name:'Jake' , age: 32, voted: true},
//   {name:'Kate' , age: 25, voted: false},
//   {name:'Sam' , age: 20, voted: false},
//   {name:'Phil' , age: 21, voted: true},
//   {name:'Ed' , age:55, voted:true},
//   {name:'Tami' , age: 54, voted:true},
//   {name: 'Mary', age: 31, voted: false},
//   {name: 'Becky', age: 43, voted: false},
//   {name: 'Joey', age: 41, voted: true},
//   {name: 'Jeff', age: 30, voted: true},
//   {name: 'Zack', age: 19, voted: false}
// ];

// let x=voters.reduce((prev,curr)=>curr.voted? prev=prev+1: prev,0)
// console.log(x)

const fruits = ["apple", "rng", "banana", "papaya", "wwqwwqwwq", 'll'];
// let x=fruits.reduce((prev,curr)=>/[aeiou]/.test(curr)?[...prev]:[...prev,curr],[])
// console.log(x)

const numbers = [1, 266, 3, 5, 8]
// let x=numbers.reduce((prev,curr)=>curr>prev?curr:prev,0)
// // console.log(x)

// let c=fruits.reduce((prev,curr)=>
// prev[curr.length]?{...prev,[curr.length]:++prev[curr.length]}:{...prev,[curr.length]:1},{}
// )
// console.log(c);


