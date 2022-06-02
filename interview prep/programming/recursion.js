//recursion

//power(2,4) =16 2*2*2*2

let power=(num,exponent)=>{
    if(exponent===0){
        return 1
    }
    else{
        return num*power(num,exponent-1)
    }
    }
    
    console.log(power(2,6))
    
    
    //range(2,9)
    let arr=[];
    let range=(start,end)=>{
        if(start<end-1){     
        arr.push(start+1)
        range(start+1,end)  
        }
    }
    range(2,9)
    console.log(arr);
    
    
    // finabacii series
    // 0 1 2 3 4 5 6 7 8
    // 0 1 1 2 3 5 8 13 21

    var fibonacci_series = function (n) 
{
  if (n===1) 
  {
    return [0, 1];
  } 
  else 
  {
    var s = fibonacci_series(n - 1);
    s.push(s[s.length - 1] + s[s.length - 2]);
    return s;
  }
};

 console.log(fibonacci_series(8));



 //get fibonacii number fib(7) --13

    let fib=(num)=>{
     if(num==1){
         return 1
     }
     if(num==0){
         return 0;
     }
      return fib(num-2)+fib(num-1);
     
    }
    console.log(fib(7))

   
    