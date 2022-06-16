import React, { useState } from 'react';
import AddNewUser from './AddNewUser';
import './style.css';
const users = [
    {
        id: 1,
        name: 'ram',
    },
    {
        id: 2,
        name: 'kris',
    },
    {
        id: 3,
        name: 'john',
    },
];
export default function Application() {
    let [count, SetCount] = useState(1);
    let [initialState]=useState(users.length);
    console.log(initialState)
    let newusers = [];
    let addHandler = ( id,name) => {
        //  users.splice(users.length,0,{id:idNew,name:idName});
        //  SetCount(count+1)
        // }

        newusers = users.forEach((ele, index) => {
            if (ele.id == count ) {
                users.splice(index + 1, 0, { id,name});
            }
        })
        if(count>initialState){
            users.splice(users.length, 0, {  id,name});
        }
        SetCount(count + 1)
    }
    return (
        <div>
            <h1>Hello StackBlitz!</h1>
            <p>Start editing to see some magic happen :)</p>
            {users.map((user) => (
                <div>
                    <p>{user.id}</p>
                    <p>{user.name}</p>
                    <p>_______________________________</p>
                </div>
            ))}
            <AddNewUser addHandler={addHandler} />
        </div>
    );
}

