// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// Example 2:

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// Example 3:

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
//0,1,1,2,3

var fib = function(n) { 
    let arr =[0,1];
    for(let i=1;i<n;i++){
    arr.push(arr[i-1]+arr[i])
    }
    return arr[n];
  };

  //proper es6
  //fibonacii series
//0 1 1 2 3 5 8 13 21 34 55 89 144

let fibonacii = (input) => {

  let newarr = [...Array(input+1)]
  newarr.forEach((ele, index, arr) => {
      if (index === 0 || index === 1) {
          return newarr[index] = index;
      } else {
          return newarr[index] = newarr[index - 1] + newarr[index - 2]
      }
  })
  return newarr;
}
console.log(fibonacii(12))

//fibonacii -- 
console.log(fibonacii(7)[7]) //13
