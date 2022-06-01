
//   Input:  digits[] = "121"
// Output: 3
// // The possible decodings are "ABA", "AU", "LA"

// Input: digits[] = "1234"
// Output: 3
// // The possible decodings are "ABCD", "LCD", "AWD"

function decode(a1){
    let count1=1;
    let count2=0;
    if(a1[0]>0){
      count2=1;
    }
    if(a1[0]==0 || a1[a1.length-1]==0){
      return 0;
    }
    for(let i=1;i<a1.length;i++){
    if(a1[i-1]=='1'||(a1[i-1]=='2'&&a1[i]<7)){
      let temp=count1;
      count1=count2;
      count2=temp+count2;
    }
    if(a1[i-1]==0&&a1[i]==0||a1[i]==0&&a1[i+1]==0){
      return 0;
    }
    }
  return count2   
  }
  
  function countways(digits,n){
    if (n == 0 || (n == 1 && digits[0] == '0'))
    {
        return 0;
    }
    return decode(digits, n);
  }
  var  a1=['8','8',"0","0","8"];
  
  console.log(countways(a1,a1.length));
  
