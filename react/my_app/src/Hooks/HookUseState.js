import React, { useState } from 'react'

//usestate with previous set value 
function HookUseState() {
    const initialCount=0;
    const  [count,setCount]=useState(0);
    const [objVal,setObjval]=useState({firstname:'',lastname:''})
    const [arrVal,setArrval]=useState([]);

    const addHandler=()=>{
        //this works as state is immutable and we passing new array
        setArrval([...arrVal,Math.random()])

    //    //thsi give a type error as push will return length which is 1 and will convert array to number so map will not work
    //     setArrval( arrVal.push(Math.random()))

    //this works as it gives u new arrayfrom this concat not mutating the original array
    setArrval(arrVal.concat(Math.random()))

    }
  return (

   <>
   {/* simple number */}
   <div>Count {count}</div>
   <button onClick={()=>setCount((prev)=>prev+1)}> Increment</button>
   {/* now object upadte in useState */}
   <input type='text' value={objVal.firstname} 
   onChange={(e)=>setObjval({...objVal,firstname:e.target.value})}></input>
   <h1>{objVal.firstname}</h1>
   <input type='text' value={objVal.lastname} 
   onChange={(e)=>setObjval({...objVal,lastname:e.target.value})}></input>
   <h1>{objVal.lastname}</h1>

   {/* now array upadte in useState */}
  { arrVal.map((ele,index)=>{
       return(<div key={index}>{ele}</div>)
   })}
   <button onClick={addHandler}>Add Elemet</button>
   </>
  )
}

export default HookUseState