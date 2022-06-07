import React from 'react'
import { NavLink, Outlet, useLocation, useSearchParams } from 'react-router-dom'

// The useSearchParams hook is used to read and modify the query 
// string in the URL for the current location.
//  Like React's own useState hook, useSearchParams returns an array of two values: the current location's
//   search params and a function that may be used to update them.
//we can get value of searchparams using searchparms.get('id')


// An <Outlet> should be used in parent route elements to render their child route elements. 
// This allows nested UI to show up when child routes are rendered. 
// If the parent route matched exactly, it will render a child index route or nothing 
// if there is no index route.



// This hook returns the current location object.
//  This can be useful if 
//  you'd like to perform some side effect whenever the current location changes.
// I did location.pathname becoz if location url changes then my useeffect should tigger 

function Users() {
    const [searchparms, setSearchparms] = useSearchParams();
    let location = useLocation();

    React.useEffect(() => {
        console.log(location)
    }, [location.pathname]);

    return (
        <div>
            <NavLink to='1'>User1</NavLink>
            <NavLink to='2'>User2</NavLink>
            <NavLink to='3'>User3</NavLink>
            <NavLink to='admin'>Admin</NavLink>
            <Outlet></Outlet>

            <button onClick={() => setSearchparms({ filter: 'active', id: '1' })}>Active users</button>
            <button onClick={() => { setSearchparms({}) }}>Reset Filter</button>
            {searchparms.get('filter') === 'active' ? <h1>Active users</h1> : <h1>All users</h1>}

        </div>
    )
}

export default Users