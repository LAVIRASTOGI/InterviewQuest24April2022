import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

function Profile() {
    let Authval = useAuth()
    const navigate = useNavigate()
    const logOutHandler = () => {
        Authval.Logout('');
        navigate('/')
    }

    return (<>
        <h1>Welome user{Authval.user}</h1>
        <button onClick={logOutHandler}>Logout</button>
    </>

    )
}

export default Profile