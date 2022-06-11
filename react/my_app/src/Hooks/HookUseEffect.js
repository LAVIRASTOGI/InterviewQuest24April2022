import React, { useEffect, useState } from 'react'

function HookUseEffect() {
    const [count, setCount] = useState(0);
    const [user, setUser] = useState('');

    //run when count changes conditionally -- componentDidUpdate
    useEffect(() => {
        document.title = `Count is ${count}`
    }, [count])

    //claenupcode when unmount(means move in some other component)  like componentDiddUnmount
    //[] -- means run only first time like componentDidMount
    useEffect(() => {
        console.log('runn')
        window.addEventListener('mousemove', BlurEventHandler)
        return () => {
            console.log('clean runn')
            window.removeEventListener('mousemove', BlurEventHandler)
        };
    }, [])

    const BlurEventHandler = () => {
        console.log('check onMousemOVE')
    }

    return (
        <>
            <h1>USEEFFECT EXAMPLE</h1>
            <div>Count {count}</div>
            <button onClick={() => setCount(count + 1)}>Counter</button>
            <input type='text' value={user} onChange={(e) => setUser(e.target.value)}></input>
        </>
    )
}

export default HookUseEffect