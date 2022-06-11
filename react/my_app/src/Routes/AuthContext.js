import React, { useContext, useState } from "react";

let AuthContext = React.createContext();

export function AuthProvider({children}) {
    let [user, setUser] = useState('');
    let [AuthUserFlAG, setAuthUserFlAG] = useState(false);

    const Login = (user) => {
        //API call will happen
        setUser(user);
        setAuthUserFlAG(true)
    }
    const Logout = () => {
        setUser('')
        setAuthUserFlAG(false)
    }
    const SetUserAuthentication=(user)=>{
        setUser(user);
        setAuthUserFlAG(true)
    }
    return ( <AuthContext.Provider value={{user,AuthUserFlAG,Login,Logout,SetUserAuthentication}}>{children}</AuthContext.Provider>
    )
   
}
  
//returning the login/logout function  and user value
export let useAuth=()=>{
  const valueContext=useContext(AuthContext);
  return valueContext
}