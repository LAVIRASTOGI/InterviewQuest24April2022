// //compare the both the strings if the all words are present thn return true if not return false
// var newsPaper = "Hi How today is Monday When did you come here are you abc";
// var message = "How are you today abc";

var newsPaper = "Hi How today is Monday. When, did you come here are you abc";
var message = "How are you today abc";
let regex =/[\s.,]/
let newspaperArr=newsPaper.split(regex)
console.log(newspaperArr)
let stringResult=message.split(' ').every((ele)=>newspaperArr.includes(ele))
      
console.log(stringResult?'both equal':'notequal')

