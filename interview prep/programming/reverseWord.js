var str='Welcome to this Javascript Guide!';

var str1=str.split(' ');
var arrnew=[];
function reverseword(valueStr){
  let str1='';
  for(let i=valueStr.length-1;i>=0;i--){
    str1=str1+valueStr[i]
  }
  arrnew.push(str1);
}
str1.forEach((e)=>{
  reverseword(e)
});

console.log(arrnew.join(' '))

