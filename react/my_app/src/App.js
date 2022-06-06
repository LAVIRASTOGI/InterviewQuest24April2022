
import ClickCounter from './ClickCounter';
import CounterRenderProps from './CounterRenderProps';
import HOCCounter from './HOCCounter';
import HOCHover from './HOCHover';
import HoverCounter from './HoverCounter';
import ImperativeRefParent from './imperativeRefParent';
import ReactMemoEaxmple from './ReactMemoEaxmple';
import ReactMemoParent from './ReactMemoParent';
import ControlledComponent from './TestComponent';
import UnControlledComponent from './UnControlledComponent';
import UseMemoExample from './UseMemoExample';
import UseRefExample from './useRefExample';
import UseREFFowardRefEx from './UseREFFowardRefEx';

function App() {
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
       <CounterRenderProps render={(count,clickHandler)=> <ClickCounter count={count} clickHandler={clickHandler} /> }></CounterRenderProps>
       <CounterRenderProps render={(count,clickHandler)=> <HoverCounter count={count} clickHandler={clickHandler} /> }></CounterRenderProps>
        {/* every props can act as a function who can return value  */}
    </div>
  );
}

export default App;
