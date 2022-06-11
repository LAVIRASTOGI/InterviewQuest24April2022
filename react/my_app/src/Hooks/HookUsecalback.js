import React, { useCallback, useState } from 'react'
import BasicCount from './BasicCount';
import Button from './Button';
import ButtonCounter from './ButtonCounter';
import Salary from './Salary';

function HookUsecalback() {
    const[count,setCount]=useState(0);
    const[salary,setSalary]=useState(0);

    const countHandler=useCallback(
        ()=>{
            setCount(count+1)
        },
      [count],
    )
    
    const salaryHandler=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

  return (
   <>
   <BasicCount count={count}></BasicCount>
   <ButtonCounter countHandler={countHandler} ></ButtonCounter>
   <Salary salary={salary}></Salary>
   <Button salaryHandler={salaryHandler} ></Button>
   </>
  )
}


//As soon aS i change the either count  or salary  so  these functions
//countHandler AND salaryHandler are again built as new function so reference changes
// and according to React.memo the props have been chnaged  so it rernders both the component which is wrong
// here come usecallback -- it will memomize the function and let u change the function if the depency change
// otherwise sends same reference and prevents unnecessary  renders
export default HookUsecalback