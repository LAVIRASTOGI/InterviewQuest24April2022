import React from 'react'
import { useReducerContext } from '../Routes/ReducerContextToghther'

function ComponentB() {
    let reducerVal = useReducerContext()
    return (
        <>
            <div>counter{reducerVal.countval}</div>
            <button onClick={() => reducerVal.dispatch({ type: 'INC', value: 1 })}>Increment</button>
            <button onClick={() => reducerVal.dispatch({ type: 'DEC', value: 1 })}>Decrement</button>
            <button onClick={() => reducerVal.dispatch({ type: 'RESET' })}>Reset</button>
        </>
    )
}

export default ComponentB