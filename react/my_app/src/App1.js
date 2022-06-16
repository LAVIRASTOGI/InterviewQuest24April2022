import React, { useEffect, useRef, useState } from 'react'
import App2 from './App2';

function App1() {
    let [open, setOpen] = useState();
    let ModalRef=useRef(null);
    let openHandler = () => {
        setOpen((value)=>!value)
    }
    let closeHandler = () => {
        setOpen(false)
    }
    let ClickHandlerOutside = (e) => {
        if(ModalRef.current){
        if(!(ModalRef?.current?.contains(e.target))){
            setOpen(false);
            e.stopPropagation();
        }
        }
    }
    useEffect(() => {
        document.addEventListener('click', ClickHandlerOutside,true);
        return () => {
            document.removeEventListener('click', ClickHandlerOutside);
        }
    }, [])

    return (
        <div>
            <button onClick={openHandler}>Click to open modAL</button>
            <App2 open={open} closeHandler={closeHandler} ref={ModalRef}></App2>
        </div>
    )
}

export default App1