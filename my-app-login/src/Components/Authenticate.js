import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserDetails from './UserDetails'

function Authenticate({ children }) {
    let Navigate = useNavigate()
    useEffect(() => {
        let userToken = JSON.parse(localStorage.getItem('authToken') || {})
        let sessionTime = new Date(userToken.sessionTime);
        let currentTime = new Date();
        let minute = 1000 * 60;
        let value = (currentTime.getTime() - sessionTime.getTime()) / minute;
        if (Number(value) > 5) {
            Navigate('/login')
        }
    }, [])
    return (
        <div>{children}</div>
    )
}

export default Authenticate