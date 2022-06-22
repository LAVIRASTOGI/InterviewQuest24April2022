import * as React from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import './styles.css'
import Home from './Home'
import About from './About'
import { Helmet } from 'react-helmet'

export default function App(props) {
  return (
    <React.Fragment>
      <Helmet>
        <title>APP MAIN APPLICATION JS</title>
        <meta name="description" content="APP MAIN JS APPLICATION" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>
      <nav>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/about'>About</NavLink>
      </nav>
      <Routes>
        <Route path='/' element={<Home data={props.data} {...props}/>}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
    </React.Fragment>
  )
}