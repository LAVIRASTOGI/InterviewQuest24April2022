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
        let classnamesVal='textAreaStyle'
        if(italicHandler&&boldHandler){
            classnamesVal ='textAreaStyle boldVal italicVal'
        }else  if(boldHandler){
            classnamesVal ='textAreaStyle boldVal'
        } else if(italicHandler){
            classnamesVal ='textAreaStyle italicVal'
        }else{
            classnamesVal='textAreaStyle'
        }
        return classnamesVal
    }

    return (<div className='container'>
        <h1>Welcome to comments</h1>
        {hidePost?'':<p className='header'>{postval}<span onClick={hideHandler}><FaRegTimesCircle /></span></p>}
        
        <textarea placeholder='Enter text' value={textVal} cols="50" rows="8"  className={addClassNamehandler()}    
        onChange={(e) => setTextVal(e.target.value)}></textarea>
        <div className='buttons'>
            <button className='buttonstyle buttonstyle1' onClick={()=>setitalicHandler((val)=>!val)}>ITALIC</button>
            <button className='buttonstyle buttonstyle1' onClick={()=>setBoldHandler((val)=>!val)}>BOLD</button>
            <button className='buttonstyle buttonstyle4' onClick={clearCommentHandler}>CLEAR</button>
            <button className='buttonstyle buttonstyle3' onClick={postCommentHandler}>POST</button>
        </div>
    </div>)
}
export default AppInterview1