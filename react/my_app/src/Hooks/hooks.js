import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HookUseState from './HookUseState'

function HooksReact() {
  return (
    <>
    <h1>Hooks series and example</h1>
    <Routes>
    <Route path='hookUseState' element={<HookUseState/>}></Route>
    </Routes>
    </>
  )
}

export default HooksReact