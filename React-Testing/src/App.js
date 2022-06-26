import Header from "./Components/Header";
import {Routes ,Route} from 'react-router-dom'
import Follower from "./Components/Follower";
import Footer from "./Components/Footer";
import DispalyContainer from "./Components/DispalyContainer";
function App() {
  return (
    <div>
       <Header title="Welcome to my app" />
      <Routes>
        <Route path='/follower'  element={<Follower/>}/>
      </Routes>
      <DispalyContainer/>
    </div>
  );
}

export default App;
