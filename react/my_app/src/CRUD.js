import React, { useState } from 'react'

let users = [{
    userid: 12,
    username: 'Lvi'
}, {
    userid: 13,
    username: 'chhavi'
}, {
    userid: 14,
    username: 'rasty'
}, {
    userid: 15,
    username: 'plas'
}, {
    userid: 16,
    username: 'yashu'
}, {
    userid: 17,
    username: 'dkd'
}, {
    userid: 18,
    username: 'sujata'
}, {
    userid: 19,
    username: 'dilip'
}]
function CRUD() {
    let userarrwithSelect = users.map(ele => ({ ...ele, isslected: false }))
    let [userArr, setUserARR] = useState(userarrwithSelect);
    let [userNameAdd, setuserNameAdd] = useState('');

    const editHandler = (userELE) => {
        setUserARR(userArr.map(ele => ele.userid === userELE.userid ? { ...ele, isslected: true } : { ...ele }))
    }

    const inputEditHandler = (e, userELE) => {

        setUserARR(userArr.map(ele => ele.userid === userELE.userid ? { ...ele, isslected: true, username: e.target.value } : { ...ele }))
    }
    const editFinishHandler=(userID)=>{
        setUserARR(userArr.map(ele => ele.userid === userID ? { ...ele, isslected: false } : { ...ele }))
    }
    const delteHandler = (userID) => {
        setUserARR(userArr.filter(ele => ele.userid !== userID))
    }
    const addHandler = (e) => {
        let newArr = [...userArr]
        newArr.push({
            userid: Math.random() * 1000,
            username: userNameAdd
        })

        setUserARR(newArr)
    }
    return (
        <>
            <h1>CRUD operations</h1>
            <ul>
                {userArr && userArr.map(ele => {
                    return <li key={ele.userid}>
                        <input value={ele.username} disabled={!ele.isslected} onChange={(e) => inputEditHandler(e, ele)}  onBlur={()=>editFinishHandler(ele.userid)}/>
                        <button onClick={() => editHandler(ele)}>EDIT</button>
                        <button onClick={() => delteHandler(ele.userid)}>DELETE</button>
                    </li>
                })}
            </ul>
            <input value={userNameAdd} onChange={(e) => setuserNameAdd(e.target.value)} /> <button onClick={addHandler}>ADD</button>

        </>
    )
}

export default CRUD