import React, { useState } from 'react'
import { Helmet } from 'react-helmet';

function Home1(props) {
  let [count, setCount] = useState(0);
  return (
    <>
      <Helmet>
        <title>HOME JS</title>
        <meta name="description" content="HOMe JS APPLICATION" />
        <meta name="theme-color" content="#ccc" />
      </Helmet>

      <div>Counter {count}</div>
      <button onClick={() => setCount(count + 1)}>INC</button>
      <button onClick={() => setCount(count - 1)}>DEC</button>

      <table>
        <tr>
          <th>USERID</th>
          <th>TITLE</th>
          <th>BODY</th>
        </tr>
        {props.data && props.data.map(ele => {
          return (<tr key={ele.id} >
            <td>{ele.userId}</td>
            <td>{ele.title}</td>
            <td>{ele.body}</td>
          </tr>
          )
        })}
      </table>


    </>

  )
}

export default Home1