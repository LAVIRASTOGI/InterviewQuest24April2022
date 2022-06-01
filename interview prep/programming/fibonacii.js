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
