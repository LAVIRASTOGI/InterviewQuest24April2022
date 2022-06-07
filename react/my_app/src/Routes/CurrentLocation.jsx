import React from 'react'
import { useLocation } from 'react-router-dom';

// This hook returns the current location object.
//  This can be useful if 
//  you'd like to perform some side effect whenever the current location changes.



function CurrentLocation() {
    let location = useLocation();

  React.useEffect(() => {
   console.log('app renders if location changes and does  some calculation')
  }, [location]);

  return (
    <div>hello location</div>
  );
}

export default CurrentLocation