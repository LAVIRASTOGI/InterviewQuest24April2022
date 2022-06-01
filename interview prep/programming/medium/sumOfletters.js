
let stringVal = "MAN";

function getACSCIIVALUE(valueString) {
  return valueString.charCodeAt(0) - 65;
}
function getcodedVal(valueString) {
  if(valueString){
    let z = [0, 1, 1];
    for (let i = 3; i <= valueString; i++) {
      z.push(z[i - 1] + z[i - 2])
    }
    return z[z.length - 1];
  }else{
    return 0;
  }
 
}
function splitcalculate(stringval) {
  let sum = 0;
  stringVal.split('').forEach((e) => {
    sum+=getcodedVal(getACSCIIVALUE(e))
  })
  return sum;
}
 console.log(splitcalculate("MAN"))


 //ouput -- 377