import React, { useRef } from 'react'

function UnControlledComponent() {
    let inputele = useRef(null);

    let submitFormHaldler=(e)=>{
        console.log(inputele.current.value)  
        e.preventDefault();
    }
    return (
        <form onSubmit={submitFormHaldler} >
            <input type='text' ref={inputele} />
            <button type='submit'>Click me</button>
        </form>

    )
}

export default UnControlledComponent