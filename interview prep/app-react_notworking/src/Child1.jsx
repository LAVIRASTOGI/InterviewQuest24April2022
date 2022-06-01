import { forwardRef, useImperativeHandle, useState } from "react";

export const Child1 = forwardRef((props, ref) => {

  const [counter,setCunter]=useState(0)
    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({
      increment() {
        setCunter(counter+1)
      }
    }));
    return <h1>{counter+1}</h1>;
  })