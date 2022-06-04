import React, { useState } from 'react'
import ReactMemoEaxmple from './ReactMemoEaxmple';



const ReactMemoParent = () => {
    let [count, setCount] = useState(0);
    let [word, setWord] = useState('lavi');
    let [arr,setArr]=useState({name:'lavi',address:{city:'lko'}})

    let counterHandler = () => {
        setCount(count + 1);
    }
    let wordhandler = (e) => {
       
        setWord(e.target.value);
    }
    let ClickHandler=()=>{
        //here i a not using  setArr  but arr is object so i chanaged its value to chhavi so arr valure changed 
        //but as React.memo in child does shallow comparision means it will check refernce of 
        //arr and if it is same so internally value it will not check thus ReactMemoEaxmple 
        //component will not be re-rendered

        // so it is said dont try to chnge the existing object pass the new object or array and do setState

        

        arr.name='chhaviii';
    }
    return (<>
        <h1>words counter Memo</h1>
        <input type='text' value={word} onChange={wordhandler}></input>
        <ReactMemoEaxmple name={word} arrNew={arr}></ReactMemoEaxmple>
        <button onClick={ClickHandler}>Click for more React Memo example</button>
        <h1>Counter {count}</h1>
        <button onClick={counterHandler}>Click on counter</button>
    </>
    )
}

export default ReactMemoParent