import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import HookUseEffect from './HookUseEffect'
import HookUseMultipleReducer from './HookUseMultipleReducer'
import HookUseReducer from './HookUseReducer'
import HookUseState from './HookUseState'

function HooksReact() {
 
  return (
    <>
    <h1>Hooks series and example</h1>
    <NavLink to='hookUseState'>UseStaate Example</NavLink>
    <NavLink to='hookUseEffect'>UsseEfect example</NavLink>
    <NavLink to='hookUseReducer'>UsseReducer example</NavLink>
    <NavLink to='hookUseMultipleReducer'>UsseMultipleReducer example</NavLink>
   
    <Routes>
    <Route path='hookUseState' element={<HookUseState/>}></Route>
    <Route path='hookUseEffect' element={<HookUseEffect/>}></Route>
    <Route path='hookUseReducer' element={<HookUseReducer/>}></Route>
    <Route path='hookUseMultipleReducer' element={<HookUseMultipleReducer/>}></Route>
    </Routes>
    </>
  )
}

export default HooksReact