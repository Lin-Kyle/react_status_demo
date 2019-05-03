import React, { useState, useEffect } from "react";
import { hot } from "react-hot-loader";

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`You clicked ${count} times`)
  });

  useEffect(() => {
    document.addEventListener('click', clickFunc, false)
    return () => {
      document.removeEventListener('click', clickFunc)
    }
  });

  function clickFunc(e) {
    //  doSomethings
    console.log(e)
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default hot(module)(Example);