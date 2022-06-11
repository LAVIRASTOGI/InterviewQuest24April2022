import React, { useReducer } from 'react'

//const initialState = 0;
// we can also give object in initial state so that we caN GIVE multiple values
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
function HookUseReducer() {
    //usereducers takes reducer and initial StATE
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <>
            <button onClick={() => dispatch({ type: 'INC' ,value:1})}>Increment</button>
            <button onClick={() => dispatch({ type: 'DEC' ,value:1})}>Decrement</button>
            <button onClick={() => dispatch({ type: 'INC' ,value:5})}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'DEC' ,value:5})}>Decrement 5 </button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            <div>count {count.firstCount}</div>
        </>
    )
}

export default HookUseReducer