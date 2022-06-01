//abcabcabcdd

let x='abcabcabcddefg';

function bubbleSort( arr, n)
{
var i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        
        var temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
        
        }
    }

}
return arr
}

let a1=x.split('')
console.log(bubbleSort(a1,a1.length))
