
import { Route, Router, Routes } from 'react-router-dom';
import ClickCounter from './ClickCounter';
import { UserProvider } from './Context';
import Context1 from './Context1';
import CounterRenderProps from './CounterRenderProps';
import HOCCounter from './HOCCounter';
import HOCHover from './HOCHover';
import HoverCounter from './HoverCounter';
import ImperativeRefParent from './imperativeRefParent';
import ReactMemoEaxmple from './ReactMemoEaxmple';
import ReactMemoParent from './ReactMemoParent';
import About from './Routes/About';
import Admin from './Routes/Dynamicroute/Admin';
import Detail from './Routes/Dynamicroute/Detail';
import Users from './Routes/Dynamicroute/Users';
import Features from './Routes/Features';
import Home from './Routes/Home';
import Navbar from './Routes/navbar';
import NewProduct from './Routes/NewProduct';
import NoMatch from './Routes/NoMatch';
import OrderSummary from './Routes/OrderSummary';
import ProductsNested from './Routes/ProductsNested';
import ControlledComponent from './TestComponent';
import UnControlledComponent from './UnControlledComponent';
import UseMemoExample from './UseMemoExample';
import UseRefExample from './useRefExample';
import UseREFFowardRefEx from './UseREFFowardRefEx';

function App() {
  let arrProvider = ['lk', 'up']
  let name = 'lavichaavi';
  let xyProvider = { arrProvider, name }
  return (
    <div className="App">
      {/* controlled uncontrolled component */}
      {/* <ControlledComponent></ControlledComponent>
      <UnControlledComponent></UnControlledComponent> */}

      {/* use memo example */}
      {/* <UseMemoExample></UseMemoExample> */}

      {/* React.Memo  example*/}
      {/* <ReactMemoParent></ReactMemoParent> */}

      {/* useref simple example */}
      {/* <UseRefExample></UseRefExample> */}

      {/* useref and fowardref */}
      {/* <UseREFFowardRefEx></UseREFFowardRefEx> */}

      {/* Imperative and Ref Parent and child */}
      {/* <ImperativeRefParent></ImperativeRefParent> */}


      {/* HOC example  way of sharing data /function btw components */}
      {/* <HOCHover name='chhabi'></HOCHover>
       <HOCCounter name='lavi'></HOCCounter> */}


      {/* Render props -- another way of sharing data /function btw components */}
      {/* <CounterRenderProps render={(count,clickHandler)=> <ClickCounter count={count} clickHandler={clickHandler} /> }></CounterRenderProps>
       <CounterRenderProps render={(count,clickHandler)=> <HoverCounter count={count} clickHandler={clickHandler} /> }></CounterRenderProps> */}
      {/* every props can act as a function who can return value  */}


      {/* Context API */}
      {/* we need to wrap where descent we need to consume this context API STep -2 */}
      {/* <UserProvider value={xyProvider}>
        <Context1></Context1>
        </UserProvider>
        */}


      {/* Router */}
      {/* router helps to create and navigate btw different URLs that make your web Application */}
      <Navbar></Navbar>
      {/*  "Switch" is replaced by routes "Routes" in v6 of rreact-router-dom  */}
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/OrderSummary' element={<OrderSummary></OrderSummary>}></Route>
        {/* nested route we can put inside route it will automatically take the route path */}
        {/* parent is a layout components and child inside it is a outlet components which we nested */}
        <Route path='products' element={<ProductsNested />}>
          {/* index route   -- suppose we do only  http://localhost:3000/products this is parent  here child ke components not displayed 
           so suppose any default child component w eneed to display or render here new prodcts we want to render by deafulat so we add in route with index
          */}

          {/* index Route will have index not path */}
          <Route index element={<NewProduct></NewProduct>}></Route>
          <Route path='new' element={<NewProduct></NewProduct>}></Route>
          <Route path='feature' element={<Features></Features>}></Route>
        </Route>

        {/* Dynamic routes (diaply user1 user2 user3)  possible to have nested dymanoic routes*/}
        <Route path='/users' element={<Users></Users>}>
          {/* suppose for user 1/user2 /user3 all should go to details user page so use dymanic route */}
          <Route path=':UserId' element={<Detail></Detail>}></Route>

          {/* one more important thing like if u give users/admin and admin is already a route so it will dipaly the exact
         route data first then check weather its a dymaic route or not */}
          {/* exmaple */}
          {/* first check admin is there or not exact path then will go to dymanic route */}

          <Route path='admin' element={<Admin/>}></Route>
        </Route>

        {/* this will match when no other route will macth */}
        <Route path='*' element={<NoMatch />}>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
