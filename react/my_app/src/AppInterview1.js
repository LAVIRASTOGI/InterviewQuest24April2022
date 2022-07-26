import React, { useState } from 'react'
import './App.css'
import { FaRegTimesCircle } from 'react-icons/fa';

const AppInterview1 = () => {
    const [postval, setpostval] = useState('');
    const [hidePost,sethidePost]=useState(true)
    const [textVal, setTextVal] = useState('');
    const [italicHandler,setitalicHandler]=useState(false)
    const [boldHandler,setBoldHandler]=useState(false)
    


    const postCommentHandler = () => {
        setpostval(textVal);
        sethidePost(false)
    }

    const clearCommentHandler = () => {
        setTextVal('')
    }

    const hideHandler=()=>{
        sethidePost(true)
    }

    const addClassNamehandler=()=>{
        let classnamesVal=''
        if(italicHandler&&boldHandler){
            classnamesVal ='boldVal italicVal'
        }else  if(boldHandler){
            classnamesVal ='boldVal'
        } else if(italicHandler){
            classnamesVal ='italicVal'
        }else{
            classnamesVal=''
        }
        return classnamesVal
    }

    return (<div className='container'>
        <h1>Welcome to comments</h1>
        {hidePost?'':<h1 className='header'>{postval}<span onClick={hideHandler}><FaRegTimesCircle /></span></h1>}
        
        <textarea placeholder='Enter text' value={textVal} cols="50" rows="8"  className={addClassNamehandler()}    
        onChange={(e) => setTextVal(e.target.value)}></textarea>
        <div className='buttons'>
            <button className='buttonstyle' onClick={()=>setitalicHandler((val)=>!val)}>ITALIC</button>
            <button className='buttonstyle' onClick={()=>setBoldHandler((val)=>!val)}>BOLD</button>
            <button className='buttonstyle' onClick={postCommentHandler}>POST</button>
            <button className='buttonstyle' onClick={clearCommentHandler}>CLEAR</button>
        </div>
    </div>)
}
export default AppInterview1