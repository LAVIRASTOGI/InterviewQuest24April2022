
import React, { useRef } from 'react'
import Input from './Input';
import RefClass from './RefClass';

const UseREFFowardRefEx = () => {
    let inputref = useRef(null);
    let classParentref=useRef(null)

    let clickHandler = () => {
        inputref.current.focus()
       
    }

    let clickHandlerChildDate =()=>{
        classParentref.current.xyz();
    }
    return (<>
        {/*  fowardwaring the ref to the funcional components so that there in input ellemnt it can do ref={ref}
          and value of  child componnt inpu ref can be used here - so this  inputref.current.focus() works
   */}
        <Input ref={inputref}></Input>
        <button onClick={clickHandler}>Click ME Foward ref example</button>

        {/* When the ref attribute is used on a custom class component, 
        the ref object receives the mounted instance of the component as its current. (class components)

 */}
        <RefClass ref={classParentref}></RefClass>
        <button onClick={clickHandlerChildDate}>Click ME Foward ref example</button>

    </>
    )
}

export default UseREFFowardRefEx