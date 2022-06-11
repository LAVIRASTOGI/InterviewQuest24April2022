import React, { useMemo, useState } from 'react'



// React has a built-in hook called useMemo that allows you to memoize expensive functions so that you can 
// avoid calling them on every render.
//useMemo will recompute cached value when dependency has changed
//You simple pass in a function 
// and an array of inputs and useMemo will only recompute the memoized 
// value when one of the inputs has changed. In our example below we have an expensive 
// function called computeLetterCount (for demo purposes we make it slow by including 
//     a large and completely unnecessary loop). When the current selected word changes
//      you'll notice a delay as it has to recall computeLetterCount on the new word. 
//      We also have a separate counter that gets incremented every time the increment 
//      button is clicked. When that counter is incremented you'll notice that there is
//       zero lag between renders. This is because computeLetterCount is not called again.
//  The input word hasn't changed and thus the cached value is returned. You'll probably want to check out the
function UseMemoExample() {
    let [count, setCount] = useState(0);
    let [word, setWord] = useState('lavi');

    let counterHandler = () => {
        setCount(count + 1);
    }
    let wordhandler = (e) => {
        setWord(e.target.value)
    }
    let wordDispaly=()=>{
        console.log('rendered');
        let i = 0;
        while (i < 1000000000) i++;
        return word.length;
    }
    let wordCount=useMemo(()=>wordDispaly(),[word])
    return (
        <>
            <h1>words counter {wordCount}</h1>
            <input type='text' value={word} onChange={wordhandler}></input>
            <h1>Counter {count}</h1>
            <button onClick={counterHandler}>Click on counter</button>
        </>
    )
}

export default UseMemoExample