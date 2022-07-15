export{}

//error comes becoz ts file is trated a s script so global so we
// write a empty export statement
let message='Hello world';
console.log(message)

// if watch changes all time when we complie
//so command is tsc main --watch


//typesript file is complied to js file which is then used for compliation



//variable TYpes

let isBegnneer:boolean=false;
let total:number=0;
let name:string='lavi';

console.log(name.search('vid'))

let sentence:string= `my name is ${name}
i am a ${isBegnneer}
and total is ${total}
`
console.log(sentence)


//now null and undefined are part of these variable types

const boolUndefined: undefined = undefined 
const boolNull: null = null 

// //error coming now --- need to check
// const boolUndefined1: boolean = undefined // 👍
// const boolNull1: boolean = null // 👍

console.log(boolUndefined)


//array of same types

let list1:number[]=[1,2,3]
let list2:Array<number>=[2,3,4,6]

console.log(list1)
console.log(list2)

let obj:Object={name:'lavi',id:1}
console.log(obj.toString())
//array of diggerent types 

//exactly 1 string and 1 number
let person1:[string,number]=['chris',1]

//enum is other variable 
enum Color{Red,Green,Pink};

let c:Color=Color.Green
console.log(c) // 1 (enum values will begin with zero Red=0,green=1,Pink=2)

// we can also chnange the default value 
//Red=5 ase
//then c value would be 6


//--------
//any type -- 
// we can  give any 
let randomVal:any=true;
randomVal='lavirastogi'
randomVal.name
randomVal()

 

