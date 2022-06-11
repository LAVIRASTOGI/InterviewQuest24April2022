import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext'

function AuthenticationRoute({ children }) {

    let authUser = useAuth();
    let navigate = useNavigate();
    useEffect(() => {
        if (!authUser.AuthUserFlAG) {
            //API call to tell user has previosly logged in or not
            //if yes
            let authFlag = false;
            if (!authUser.user) {
                if (authFlag) {
                    authUser.SetUserAuthentication('Lavi Rastogi');
                } else {
                    navigate('/login')
                }
            }
        } 
    }, [])
    return (
        children
    )
}

export default AuthenticationRoute