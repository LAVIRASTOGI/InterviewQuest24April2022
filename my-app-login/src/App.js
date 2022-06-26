import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom'
import UserDetails from './Components/UserDetails';
import Authenticate from './Components/Authenticate';

// this app contains redux and login 
function App() {
  return (
    <Container>
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/' element={
          <Authenticate>
            <UserDetails />
          </Authenticate>
        }></Route>
      </Routes>
    </Container>
  );
}

export default App;
