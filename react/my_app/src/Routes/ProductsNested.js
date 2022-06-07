import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function ProductsNested() {
  return (
      <>
       <div>ProductsNested</div>

       {/* relative link dont start with/ and will inherit the closest route they are 
       rendered here in this cASE is products is close route */}
       <NavLink to='feature'> Feature  </NavLink>
       <NavLink to='new'>new</NavLink>
       {/* to make route and app.js know its a nested Route */}
       <Outlet></Outlet>
      </>
  
  )
}

export default ProductsNested