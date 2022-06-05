
import HOCCounter from './HOCCounter';
import HOCHover from './HOCHover';
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


       {/* HOC example */}
       <HOCHover name='chhabi'></HOCHover>
       <HOCCounter name='lavi'></HOCCounter>
    </div>
  );
}

export default App;
