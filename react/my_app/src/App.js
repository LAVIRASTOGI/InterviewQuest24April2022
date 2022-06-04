
import ReactMemoEaxmple from './ReactMemoEaxmple';
import ReactMemoParent from './ReactMemoParent';
import ControlledComponent from './TestComponent';
import UnControlledComponent from './UnControlledComponent';
import UseMemoExample from './UseMemoExample';

function App() {
  return (
    <div className="App">
      {/* controlled uncontrolled component */}
      {/* <ControlledComponent></ControlledComponent>
      <UnControlledComponent></UnControlledComponent> */}

      {/* use memo example */}
      {/* <UseMemoExample></UseMemoExample> */}

      {/* React.Memo  example*/}
     <ReactMemoParent></ReactMemoParent>
    </div>
  );
}

export default App;
