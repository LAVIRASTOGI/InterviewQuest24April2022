// now if u want to use dispatch and sync thunk make this import babel-polyphil
// on client side and server side also very imp  else will give regeneratorruntime error 
import 'babel-polyfill'
import * as React from 'react'
import ReactDOM from 'react-dom'
import App from '../shared/App'
import { BrowserRouter } from 'react-router-dom'
import { configureStore } from '@reduxjs/toolkit'

import { Provider } from 'react-redux'

import UserReducer from '../shared/UserReducer'

const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
     UserData: UserReducer
  }
})


//Now, on the client, we can grab the name from window.__INITIAL_DATA__.
ReactDOM.hydrate(
  <BrowserRouter>
    <Provider store={store}>
      <App data={window.__INITIAL_DATA__} />
    </Provider>
  </BrowserRouter>,
  document.getElementById('app')
);