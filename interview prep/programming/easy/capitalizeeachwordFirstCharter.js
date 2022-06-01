
let str='i am lavi rastogi'

//o/p-- "I Am Lavi Rastogi"

let newStr=str.split(/\s/).map((ele)=>ele.charAt(0).toUpperCase()+ele.slice(1)).join(' ')
console.log(newStr)