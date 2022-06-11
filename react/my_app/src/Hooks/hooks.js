import React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import HookUseEffect from './HookUseEffect'
import HookUseState from './HookUseState'

function HooksReact() {
 
  return (
    <>
    <h1>Hooks series and example</h1>
    <NavLink to='hookUseState'>UseStaate Example</NavLink>
    <NavLink to='hookUseEffect'>UsseEfect example</NavLink>
    <Routes>
    <Route path='hookUseState' element={<HookUseState/>}></Route>
    <Route path='hookUseEffect' element={<HookUseEffect/>}></Route>
    </Routes>
    </>
  )
}

export default HooksReact