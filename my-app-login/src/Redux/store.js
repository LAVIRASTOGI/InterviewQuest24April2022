import LoginReducer from './Login/LoginReducer'
import { configureStore } from '@reduxjs/toolkit';

//new released
const store = configureStore({
  reducer: {
    // Define a top-level state field named `todos`, handled by `todosReducer`
    LoginData: LoginReducer
  }
})

export default store;
