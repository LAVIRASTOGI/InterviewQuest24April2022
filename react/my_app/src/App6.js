import React, { useState } from 'react'
import Home from './Home';

function App6() {
    let [count, setCount] = useState(0);
    let [nameval, setnameval] = useState('clikced');
  
    const countHandler = e => {
      setCount(count + 1);
      setnameval(`changing ${count+1} times`)
    };
  return (
    <div>
        <button onClick={countHandler}>Click me</button>
        <Home nameval={nameval}></Home>
    </div>
  )
}

export default App6