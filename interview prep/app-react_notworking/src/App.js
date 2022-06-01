// import react from "react";
// var username={name:'test'}
// class App extends react.Component{
//   constructor(){
//     super();
//     this.state={username:{name:'chhavi'}}
//   }
//   render(){
//     var u=this.username;
//     console.log(u);
//     return(
//       <div>
//       </div>
//     )
//   }
// }
// export default App;

import { useEffect,useState } from "react";


 const Example = () => {
  const [val, setVal] = useState('initial value');
  
  useEffect(() => {
   setVal('new value')
  }, []);

  useEffect(() => {
    console.log(val);
   }, [val]);
   
  return <>{console.log('render called')}</>;
};
export default Example;