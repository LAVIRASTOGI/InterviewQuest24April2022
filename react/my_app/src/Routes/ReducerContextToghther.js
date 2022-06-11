import React, { useContext, useReducer } from 'react'

let ReducerContext=React.createContext();
const initialState = {
    firstCount: 0
};

//reducer return newState
const reducer = (currentState, action) => {

    //by using action as the object we can send additional data also
    //{type:.. ,value:... etc}
    switch (action.type) {
        case 'INC':
            return {firstCount:currentState.firstCount + action.value};
            break;
        case 'DEC':
            return { firstCount:currentState.firstCount - action.value};
            break;
        case 'RESET':
            return { firstCount:initialState.firstCount};
            break;
        default:
            return currentState
            break;
    }
}
export const ReducerProvider= ({children})=>{
   const[count,dispatch]= useReducer(reducer,initialState);
   let countval=count.firstCount
   return (<ReducerContext.Provider value={{countval,dispatch}}>{children}</ReducerContext.Provider>)
}

export const useReducerContext=()=>{
    return useContext(ReducerContext)
}