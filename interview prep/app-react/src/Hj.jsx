import logo from './logo.svg';
import './App.css';
import { useRef } from 'react';
import { Child1 } from './Child1';



function Hj() {


    const listofelements = ['11', '12', '13', '14', '15', '16','17'];
    function divof2Rows() {
        var rows = [];
        for (var i = 0; i < listofelements.length; i += 2) {
            rows.push(<div className='flexbox'>
                <div className='flexcontainer12'><h1>{listofelements[i]}</h1></div>
                <div className='flexcontainer21'><h1>{listofelements[i + 1]}</h1></div>
            </div>);
        }
        console.log(rows)
        return (rows);
    
    }
    return (
    
        <>
            
               { divof2Rows()}
               {/* <p className='placeholderee'>PlaceHolder text
               <div className='placeholdertext'></div>
               <div className='arrow-down'></div>
               </p> */}
               
            


        </>

    );
}

export default Hj;
