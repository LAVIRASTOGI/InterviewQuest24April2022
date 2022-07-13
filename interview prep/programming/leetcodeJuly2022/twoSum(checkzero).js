var checkZero=(arr)=>{
 
    for(let i=0;i<arr.length;i++){
          let indexVal=arr.indexOf((0-arr[i]),i+1);
          if(indexVal!==-1){
            return[arr[i],arr[indexVal]];
            break;
          }
    }

}

console.log(checkZero([-5,2,4,6,-6,2,-4]))