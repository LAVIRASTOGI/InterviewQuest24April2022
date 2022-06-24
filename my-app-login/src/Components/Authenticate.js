import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import UserDetails from './UserDetails'

function Authenticate({ children }) {
    let Navigate = useNavigate()
    useEffect(() => {
        let token = localStorage.getItem('authToken')
        if(token){
            let userToken = JSON.parse(token)
            let sessionTime = new Date(userToken.sessionTime);
            let currentTime = new Date();
            let minute = 1000 * 60;
            let value = (currentTime.getTime() - sessionTime.getTime()) / minute;
            if (Number(value) > 1) {
                localStorage.removeItem('authToken')
                Navigate('/login')
            }
        }else{
            Navigate('/login')
        }

       
    }, [])
    return (
        <div>{children}</div>
    )
}

export default Authenticate