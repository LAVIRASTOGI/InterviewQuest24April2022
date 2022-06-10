import React, { useContext, useState } from "react";

let AuthContext = React.createContext();

export function AuthProvider({children}) {
    let [user, setUser] = useState('');

    const Login = (user) => {
        setUser(user)
    }
    const Logout = () => {
        setUser('')
    }
    return ( <AuthContext.Provider value={{user,Login,Logout}}>{children}</AuthContext.Provider>
    )
   
}
  
//returning the login/logout function  and user value
export let useAuth=()=>{
  const valueContext=useContext(AuthContext);
  return valueContext
}