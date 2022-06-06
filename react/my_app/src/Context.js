import React from "react";

//Step -1  create the context
let UserContext=React.createContext();

//we can also add a default value
//let userContext=React.createContext('chhavi');


//this react Create context provides 2 (provider and consumer React components)

let UserProvider=UserContext.Provider;
let UserConsumer=UserContext.Consumer;

export {UserProvider ,UserConsumer}

export default UserContext