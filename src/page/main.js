import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('addEventListener')
    document.addEventListener('click', clickFunc, false)
    return () => {
      console.log('removeEventListener')
      document.removeEventListener('click', clickFunc)
    }
  });

  function clickFunc(e) {
    //  doSomethings
    setCount(count + 1)
  }

  return (
    <button>
      click me! {count}
    </button>
  );
}

export default hot(module)(Example);