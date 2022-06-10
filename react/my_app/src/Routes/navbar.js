import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useAuth } from './AuthContext';


// A <NavLink> is a special kind of <Link> that knows whether or not it is "active". 
// This is useful when building a navigation menu such as a 
// breadcrumb or a set of tabs where you'd like to show which of them is currently selected. 
// It also provides useful context for assistive technology like screen readers.


//by default in navlink style will return a flag{isActive} true if active true  means navlink is slected else false like below


function Navbar() {
  let activeStyle = {
    textDecoration: "none",
    fontWeight: 'Bold',
    margin: '10px'
  };
  let notSelected = {
    textDecoration: "none",
    margin: '10px'
  }

  let styling = (isActive) => {
    return (isActive ? activeStyle : notSelected)
  }
  let AuthContextVal = useAuth()
  return (
    <nav>
      {/* <Link to='/'>HOME</Link>
       <Link to='/about'>About</Link> */}

      {/* Now suppose the navbar which is active we need to focus on it so we try to use navLink instead of link */}
      <NavLink to='/' style={({ isActive }) => styling(isActive)}>HOME</NavLink>
      <NavLink to='/about' style={({ isActive }) => styling(isActive)}>About</NavLink>
      <NavLink to='/products' style={({ isActive }) => styling(isActive)}>Products</NavLink>
      <NavLink to='/users' style={({ isActive }) => styling(isActive)}>Users</NavLink>
      {/* here like this u write nested route naVLINK THAT IS users/1 or users/admin  -- it will first search users then 
   inside it the nested route that is 1 or admin and dispaly its coresponding component */}
      <NavLink to='users/1' style={({ isActive }) => styling(isActive)}>User1</NavLink>
      <NavLink to='/lazyLoad' style={({ isActive }) => styling(isActive)}>Lazy Load Example</NavLink>

      {/* Login AND authentication */}
      <NavLink to='/profile' style={({ isActive }) => styling(isActive)}>Profile</NavLink>
      {!AuthContextVal.user && <NavLink to='/login' style={({ isActive }) => styling(isActive)}>Login</NavLink>}

    </nav>
  )
}

export default Navbar