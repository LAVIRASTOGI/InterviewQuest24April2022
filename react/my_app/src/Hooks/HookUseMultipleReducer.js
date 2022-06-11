import React, { useReducer } from 'react'

//const initialState = 0;
// we can also give object in initial state so that we can GIVE multiple values
const initialState = {
    firstCount: 0,
    secondCount:10
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
//reducer return newState
const reducerTwo = (currentState, action) => {

    //by using action as the object we can send additional data also
    //{type:.. ,value:... etc}
    switch (action.type) {
        case 'INC':
            return {...currentState,secondCount:currentState.secondCount + action.value};
            break;
        case 'DEC':
            return { ...currentState,secondCount:currentState.secondCount - action.value};
            break;
        case 'RESET':
            return { ...currentState,secondCount:initialState.secondCount};
            break;
        default:
            return currentState
            break;
    }
}
function HookUseMultipleReducer() {
    //usereducers takes reducer and initial StATE
    const [count, dispatch] = useReducer(reducer, initialState)
    const [countTwo, dispatchTwo] = useReducer(reducerTwo, initialState)
    return (
        <>
            <button onClick={() => dispatch({ type: 'INC' ,value:1})}>Increment</button>
            <button onClick={() => dispatch({ type: 'DEC' ,value:1})}>Decrement</button>
            <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
            <div>count {count.firstCount}</div>
            <button onClick={() => dispatchTwo({ type: 'INC' ,value:10})}>Increment</button>
            <button onClick={() => dispatchTwo({ type: 'DEC' ,value:10})}>Decrement</button>
            <button onClick={() => dispatchTwo({ type: 'RESET' })}>Reset</button>
            <div>count {countTwo.secondCount}</div>
        </>
    )
}
// we can use multiple reducers if u want to show same state transitions in multiple parts and 
// with individual funcnality
//here 2 counters same state transition but differenet 
export default HookUseMultipleReducer