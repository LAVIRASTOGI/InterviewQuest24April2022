"use strict";
exports.__esModule = true;
//error comes becoz ts file is trated a s script so global so we
// write a empty export statement
var message = 'Hello world';
console.log(message);
// if watch changes all time when we complie
//so command is tsc main --watch
//typesript file is complied to js file which is then used for compliation
//variable TYpes
var isBegnneer = false;
var total = 0;
var name = 'lavi';
console.log(name.search('vid'));
var sentence = "my name is ".concat(name, "\ni am a ").concat(isBegnneer, "\nand total is ").concat(total, "\n");
console.log(sentence);
//now null and undefined are part of these variable types
var boolUndefined = undefined;
var boolNull = null;
// //error coming now --- need to check
// const boolUndefined1: boolean = undefined // 👍
// const boolNull1: boolean = null // 👍
console.log(boolUndefined);
//array of same types
var list1 = [1, 2, 3];
var list2 = [2, 3, 4, 6];
console.log(list1);
console.log(list2);
var obj = { name: 'lavi', id: 1 };
console.log(obj.toString());
//array of diggerent types 
//exactly 1 string and 1 number
var person1 = ['chris', 1];
//enum is other variable 
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Pink"] = 2] = "Pink";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c); // 1 (enum values will begin with zero Red=0,green=1,Pink=2)
// we can also chnange the default value 
//Red=5 ase
//then c value would be 6
//--------
//any type -- 
// we can  give any 
var randomVal = true;
randomVal = 'lavirastogi';
randomVal.name;
randomVal();
