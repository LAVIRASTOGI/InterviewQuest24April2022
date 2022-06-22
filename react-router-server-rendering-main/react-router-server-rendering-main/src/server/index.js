import express from 'express'
import cors from 'cors'
import * as React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server';
import App from '../shared/App';
// When you're just rendering a component with no data,
// it's not difficult to have the server-rendered and client rendered content be identical -
// as we saw when we just rendered <App />.
// When you add in data, it gets a little more complex. 
//You need to make sure that the component is rendered with the same data 
//(or props) on both the client and server.

// Let's take a look at how we'd do that 
//(without just hard-coding the data prop on the server and the client).

// We know since the app is going to be server rendered first, 
//any initial data our app needs is going to have to originate on the server. 
//With that in mind, in order to make sure the server and the client are the same, 
//we need to figure out how to get the same data that originated on the server, 
//down to the client. Well, there's a pretty "old school" solution that works perfectly.
// Let's stick it on the global namespace (window) so the client can reference it.



import serialize from "serialize-javascript"
import { getUserList } from '../inputService';

const app = express()

app.use(cors())
app.use(express.static('build'))

app.get('*', (req, res, next) => {
  let markup;
  getUserList()
  .then((data1)=>{
     markup = ReactDOM.renderToString(
    <StaticRouter location={req.url} >
      <App data={data1.data} />
    </StaticRouter>
    )
    res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>SSR with React Router</title>
        <script src="/bundle.js" defer></script>
        <link href="/main.css" rel="stylesheet">
        <script>window.__INITIAL_DATA__ = ${serialize(data1.data)}</script>
        <meta name="description" content="APP JS MAIN APPLICATION" />
      </head>

      <body>
        <div id="app">${markup}</div>
      </body>
    </html>
  `)
  })
  // const name = 'Tyler'
  // const markup = ReactDOM.renderToString(
  //   <StaticRouter location={req.url} >
  //     <App data={name} />
  //   </StaticRouter>
  // )

 

})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
  console.log(`Server is listening on port: ${PORT}`)
})